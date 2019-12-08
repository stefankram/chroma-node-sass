import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';

export default (
  data: sass.types.List,
  mode: sass.types.String,
  n: sass.types.Number,
): sass.types.List => {
  const dataArr = sassUtils
    .castToJs(data)
    .map((num: { value: number }) => num.value);

  const limits: Array<sass.types.Number> = chromaJs
    .limits(dataArr, mode.getValue(), n.getValue())
    .map((limit: number) => sass.types.Number(limit));

  return sassUtils.castToSass(limits);
};
