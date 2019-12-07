import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  red: sass.types.Number,
  green: sass.types.Number,
  blue: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .gl(red.getValue(), green.getValue(), blue.getValue(), alpha.getValue())
    .rgba(),
);
