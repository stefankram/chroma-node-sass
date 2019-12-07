import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex } from '../converters';

export default (
  color1: sass.types.Color,
  color2: sass.types.Color,
  mode: sass.types.String,
): sass.types.Number => sass.types.Number(
  chromaJs.distance(sassToHex(color1), sassToHex(color2), mode.getValue()),
);
