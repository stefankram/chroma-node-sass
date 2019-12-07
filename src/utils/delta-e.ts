import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex } from '../converters';

export default (
  reference: sass.types.Color,
  sample: sass.types.Color,
  l: sass.types.Number,
  c: sass.types.Number,
): sass.types.Number => sass.types.Number(
  chromaJs.deltaE(sassToHex(reference), sassToHex(sample), l.getValue(), c.getValue()),
);
