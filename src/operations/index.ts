import brighten from './brighten';
import darken from './darken';
import desaturate from './desaturate';
import get from './get';
import getLuminance from './get-luminance';
import name from './name';
import saturate from './saturate';
import setLuminance from './set-luminance';
import set from './set';
import temperature from './temperature';

export default {
  'chroma-color-brighten($color, $value: 1)': brighten,
  'chroma-color-darken($color, $value: 1)': darken,
  'chroma-color-desaturate($color, $value: 1)': desaturate,
  'chroma-color-get-luminance($color)': getLuminance,
  'chroma-color-get($color, $channel)': get,
  'chroma-color-name($color)': name,
  'chroma-color-saturate($color, $value: 1)': saturate,
  'chroma-color-set-luminance($color, $lum, $mode: "rgb")': setLuminance,
  'chroma-color-set($color, $channel, $value)': set,
  'chroma-color-temperature($color)': temperature,
};
