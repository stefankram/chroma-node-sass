import sass from 'node-sass';
import chromaJs from 'chroma-js';

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
