import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { rgbaToSass, sassListToHex, sassListToNumbers } from '../converters';

export default (
  colors: sass.types.List,
  mode: sass.types.String,
  weights: sass.types.List,
): sass.types.Color => rgbaToSass(
  chromaJs
    .average(sassListToHex(colors), mode.getValue(), sassListToNumbers(weights))
    .rgba(),
);
