import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex } from '../converters';

export default (
  color: sass.types.Color,
  channel: sass.types.String,
): sass.types.Number => sass.types.Number(
  chromaJs(sassToHex(color)).get(channel.getValue()),
);
