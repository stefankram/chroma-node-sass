import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (alpha: sass.types.Number): sass.types.Color => rgbaToSass(
  chromaJs
    .random()
    .alpha(alpha.getValue())
    .rgba(),
);
