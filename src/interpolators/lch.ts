import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (
  lightness: sass.types.Number,
  chroma: sass.types.Number,
  hue: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs
    .lch(lightness.getValue(), chroma.getValue(), hue.getValue())
    .alpha(alpha.getValue())
    .rgba(),
);
