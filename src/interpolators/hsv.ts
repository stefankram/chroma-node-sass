import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  hue: sass.types.Number,
  saturation: sass.types.Number,
  value: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .hsv(hue.getValue(), saturation.getValue(), value.getValue())
    .alpha(alpha.getValue())
    .rgba(),
);
