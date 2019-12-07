import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  hue: sass.types.Number,
  saturation: sass.types.Number,
  lightness: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .hsl(hue.getValue(), saturation.getValue(), lightness.getValue())
    .alpha(alpha.getValue())
    .rgba(),
);
