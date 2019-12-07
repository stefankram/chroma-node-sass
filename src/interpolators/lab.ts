import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  lightness: sass.types.Number,
  a: sass.types.Number,
  b: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .lab(lightness.getValue(), a.getValue(), b.getValue(), alpha.getValue())
    .rgba(),
);
