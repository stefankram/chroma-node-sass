import contrast from './contrast';
import distance from './distance';
import deltaE from './delta-e';
import limits from './limits';

export default {
  'chroma-contrast($color1, $color2)': contrast,
  'chroma-distance($color1, $color2, $mode: "lab")': distance,
  'chroma-delta-e($reference, $sample, $l: 1, $c: 1)': deltaE,
  'chroma-limits($data, $modes, $n)': limits,
};
