import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { sassToHex, rgbaToSass, sassListToHex, sassListToNumbers } from '../converters';

const getDefaultOptions = (): ScaleOptions => ({
  colors: 10,
});

const setSassMapOptions = (options: ScaleOptions, sassMap: Map<sass.types.String, sass.types.Value>) => {
  sassMap.forEach((v, k) => {
    switch (k.getValue()) {
      case 'colors':
        options.colors = (v as sass.types.Number).getValue();
        break;
      case 'domain':
        options.domain = sassListToNumbers(v as sass.types.List);
        break;
      case 'mode':
        options.mode = (v as sass.types.String).getValue();
        break;
      case 'gamma':
        options.gamma = (v as sass.types.Number).getValue();
        break;
      case 'correctLightness':
        options.correctLightness = (v as sass.types.Boolean).getValue();
        break;
      case 'padding':
        options.padding = sassUtils.typeOf(v) === 'number'
          ? (v as sass.types.Number).getValue()
          : sassListToNumbers(v as sass.types.List);
        break;
      case 'bezier':
        options.bezier = (v as sass.types.Boolean).getValue();
        break;
      default:
        // do nothing
    }
  });
};

export default (argsList: sass.types.List): sass.types.List => {
  let options = getDefaultOptions();
  let colors: string[] = [];
  let palette: string | undefined;

  for (let i = 0; i < argsList.getLength(); i += 1) {
    const arg = argsList.getValue(i);
    switch (sassUtils.typeOf(arg)) {
      case 'color':
        colors.push(sassToHex(arg as sass.types.Color));
        break;
      case 'list':
        colors = sassListToHex(arg as sass.types.List);
        break;
      case 'string':
        palette = (arg as sass.types.String).getValue();
        break;
      case 'map':
        setSassMapOptions(options, sassUtils.castToJs(arg));
        break;
      default:
        // Do nothing
    }
  }

  const scaleColors = palette !== undefined ? palette : colors;
  let scale = options.bezier !== undefined
    ? chromaJs.bezier(scaleColors).scale()
    : chromaJs.scale(scaleColors);

  if (options.domain !== undefined) {
    scale = scale.domain(options.domain);
  }

  if (options.mode !== undefined) {
    scale = scale.mode(options.mode);
  }

  if (options.gamma !== undefined) {
    scale = scale.gamma(options.gamma);
  }

  if (options.correctLightness !== undefined) {
    scale = scale.correctLightness(options.correctLightness);
  }

  if (options.padding !== undefined) {
    scale = scale.padding(options.padding);
  }

  return sassUtils.castToSass(
    scale
      .colors(options.colors)
      .map((color: string) => rgbaToSass(chromaJs(color).rgba())),
  );
};
