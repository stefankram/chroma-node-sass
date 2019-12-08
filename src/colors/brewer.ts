import chromaJs from 'chroma-js';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import { rgbaToSass } from '../converters';

export default (palette: sass.types.String): sass.types.List => {
  const colors: Array<sass.types.Color> = chromaJs
    .brewer[palette.getValue()]
    .map((color: string) => rgbaToSass(chromaJs(color).rgba()));

  return sassUtils.castToSass(colors);
};
