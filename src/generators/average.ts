import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass, sassToHex } from '../converters';

export default (
  colors: sass.types.List,
  mode: sass.types.String,
  weights: sass.types.List,
): sass.types.Color => {
  const parsedColors: Array<string> = [];
  const parsedWeights: Array<number> = [];

  for (let i = 0; i < colors.getLength(); i += 1) {
    parsedColors[i] = sassToHex(colors.getValue(i) as sass.types.Color);
  }
  for (let i = 0; i < weights.getLength(); i += 1) {
    parsedWeights[i] = (weights.getValue(i) as sass.types.Number).getValue();
  }

  return rgbaToSass(
    chromaJs
      .average(parsedColors, mode.getValue(), parsedWeights)
      .rgba(),
  );
};
