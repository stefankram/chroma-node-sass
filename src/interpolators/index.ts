import hsl from './hsl';
import hsv from './hsv';
import lab from './lab';
import lch from './lch';
import hcl from './hcl';
import cmyk from './cmyk';
import gl from './gl';
import temperature from './temperature';

export default {
  'chroma-hsl($hue, $saturation, $lightness, $alpha: null)': hsl,
  'chroma-hsv($hue, $saturation, $value, $alpha: null)': hsv,
  'chroma-lab($lightness, $a, $b, $alpha: null)': lab,
  'chroma-lch($lightness, $chroma, $hue, $alpha: null)': lch,
  'chroma-hcl($hue, $chroma, $lightness, $alpha: null)': hcl,
  'chroma-cmyk($cyan, $magenta, $yellow, $black, $alpha: null)': cmyk,
  'chroma-gl($red, $green, $blue, $alpha: null)': gl,
  'chroma-temperature($temperature, $alpha: null)': temperature,
};
