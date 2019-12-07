import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  cyan: sass.types.Number,
  magenta: sass.types.Number,
  yellow: sass.types.Number,
  black: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .cmyk(cyan.getValue(), magenta.getValue(), yellow.getValue(), black.getValue())
    .alpha(alpha.getValue())
    .rgba(),
);
