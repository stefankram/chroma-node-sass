import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { sassListToNumbers } from '../converters';

export default (
  data: sass.types.List,
  mode: sass.types.String,
  n: sass.types.Number,
): sass.types.List => sassUtils.castToSass(
  chromaJs
    .limits(sassListToNumbers(data), mode.getValue(), n.getValue())
    .map((limit: number) => sass.types.Number(limit))
);
