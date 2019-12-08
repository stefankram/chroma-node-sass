import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { sassToHex, rgbaToSass, sassListToHex } from '../converters';

const getDefaultOptions = (): ScaleOptions => ({
  colors: 10,
});

export default (argsList: sass.types.List): sass.types.List => {
  let options: ScaleOptions = getDefaultOptions();
  let colors: Array<string> = [];
  let palette = '';

  for (let i = 0; i < argsList.getLength(); i += 1) {
    switch (sassUtils.typeOf(argsList.getValue(i))) {
      case 'string':
        palette = (argsList.getValue(i) as sass.types.String).getValue();
        break;
      case 'color':
        colors.push(sassToHex(argsList.getValue(i) as sass.types.Color));
        break;
      case 'list':
        colors = sassListToHex(argsList.getValue(i) as sass.types.List);
        break;
      case 'map':
        options = { ...options, ...sassUtils.castToJs(argsList.getValue(i)) };
        break;
      default:
      // Do nothing
    }
  }

  const scaleColors = palette !== '' ? palette : colors;
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
