import average from './average';
import blend from './blend';
import mix from './mix';
import random from './random';

export default {
  'chroma-average($colors, $mode: "lrgb", $weights: ([]))': average,
  'chroma-blend($color1, $color2, $mode)': blend,
  'chroma-mix($color1, $color2, $ratio: 0.5, $mode: "lrgb")': mix,
  'chroma-random($alpha: 1)': random,
};
