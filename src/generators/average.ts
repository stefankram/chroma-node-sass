import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { rgbaToSass, sassListToHex } from '../converters';

export default (
  colors: sass.types.List,
  mode: sass.types.String,
  weights: sass.types.List,
): sass.types.Color => {
  const parsedColors = sassListToHex(colors);
  const parsedWeights = sassUtils
    .castToJs(weights)
    .map((weight: { value: number }) => weight.value);

  return rgbaToSass(
    chromaJs
      .average(parsedColors, mode.getValue(), parsedWeights)
      .rgba(),
  );
};
