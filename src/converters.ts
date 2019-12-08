import sass from 'node-sass';
import chromaJs from 'chroma-js';
import sassUtils from './sass-utils';

export function rgbaToSass([red, green, blue, alpha]: RGBA): sass.types.Color {
  const color = new sass.types.Color(red, green, blue);

  if (alpha !== 1) {
    color.setA(alpha);
  }

  return color;
}

export function sassToHex(color: sass.types.Color): string {
  return chromaJs(color.getR(), color.getG(), color.getB(), color.getA()).hex();
}

export function sassListToHex(list: sass.types.List): Array<string> {
  return sassUtils
    .castToJs(list)
    .map((color: sass.types.Color) => sassToHex(color));
}
