declare module 'chroma-js';
declare module 'node-sass-utils';

type RGBA = [number, number, number, number];

interface ScaleOptions {
  colors: number;
  domain?: number[];
  mode?: string;
  gamma?: number;
  correctLightness?: boolean;
  padding?: number | number[];
  bezier?: boolean;
}
