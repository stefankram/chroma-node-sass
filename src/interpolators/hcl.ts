import sass from 'node-sass';
import chromaLch from './lch';

export default (
  hue: sass.types.Number,
  chroma: sass.types.Number,
  lightness: sass.types.Number,
  alpha: sass.types.Number,
): sass.types.Color => chromaLch(lightness, chroma, hue, alpha);
