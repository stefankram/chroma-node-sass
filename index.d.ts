declare module 'chroma-js';
declare module 'node-sass-utils';

type RGBA = [number, number, number, number];

interface ScaleOptions {
  colors: number;
  domain?: Array<number>;
  mode?: string;
  gamma?: number;
  correctLightness?: boolean;
  padding?: number | Array<number>;
  bezier?: boolean;
}
