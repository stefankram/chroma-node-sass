import chromaJs from 'chroma-js';
import sass from 'node-sass';
import { rgbaToSass } from '../converters';

export default (palette: sass.types.String): sass.types.List => {
  const colors: Array<sass.types.Color> = chromaJs
    .brewer[palette.getValue()]
    .map((color: string) => rgbaToSass(chromaJs(color).rgba()));

  const list = sass.types.List(colors.length);
  for (let i = 0; i < colors.length; i += 1) {
    list.setValue(i, colors[i]);
  }

  return list;
};
