import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { sassToHex, rgbaToSass } from '../converters';

export default (
  color: sass.types.Color,
  value: sass.types.Number,
): sass.types.Color => rgbaToSass(
  chromaJs(sassToHex(color))
    .darken(value.getValue())
    .rgba(),
);
