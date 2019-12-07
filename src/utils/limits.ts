import chromaJs from 'chroma-js';
import sass from 'node-sass';

export default (
  data: sass.types.List,
  mode: sass.types.String,
  n: sass.types.Number,
): sass.types.List => {
  const dataArr: Array<number> = [];
  for (let i = 0; i < data.getLength(); i += 1) {
    dataArr[i] = (data.getValue(i) as sass.types.Number).getValue();
  }

  const limits: Array<sass.types.Number> = chromaJs
    .limits(dataArr, mode.getValue(), n.getValue())
    .map((limit: number) => sass.types.Number(limit));

  const list = sass.types.List(limits.length);
  for (let i = 0; i < limits.length; i += 1) {
    list.setValue(i, limits[i]);
  }

  return list;
};
