import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex } from '../converters';

export default (
  color: sass.types.Color,
): sass.types.String => sass.types.String(
  chromaJs(sassToHex(color)).name(),
);
