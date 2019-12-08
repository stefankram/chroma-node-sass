import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex, rgbaToSass } from '../converters';

export default (
  color: sass.types.Color,
  lum: sass.types.Number,
  mode: sass.types.String,
): sass.types.Color => {
  return rgbaToSass(chromaJs(
    chromaJs(sassToHex(color))
      .luminance(lum.getValue(), mode.getValue()),
  ).rgba());
};
