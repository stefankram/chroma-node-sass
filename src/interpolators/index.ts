import cmyk from './cmyk';
import gl from './gl';
import hcl from './hcl';
import hsl from './hsl';
import hsv from './hsv';
import lab from './lab';
import lch from './lch';
import temperature from './temperature';

export default {
  'chroma-cmyk($cyan, $magenta, $yellow, $black, $alpha: null)': cmyk,
  'chroma-gl($red, $green, $blue, $alpha: null)': gl,
  'chroma-hcl($hue, $chroma, $lightness, $alpha: null)': hcl,
  'chroma-hsl($hue, $saturation, $lightness, $alpha: null)': hsl,
  'chroma-hsv($hue, $saturation, $value, $alpha: null)': hsv,
  'chroma-lab($lightness, $a, $b, $alpha: null)': lab,
  'chroma-lch($lightness, $chroma, $hue, $alpha: null)': lch,
  'chroma-temperature($temperature, $alpha: null)': temperature,
};
