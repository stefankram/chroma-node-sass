import { expect } from 'chai';
import sass from 'node-sass';
import setLuminance from './set-luminance';
import { sassToHex } from '../converters';

describe('operations/set-luminance', () => {
  const color = sass.types.Color(255, 105, 180);
  const lum = sass.types.Number(0.5);
  const mode = sass.types.String('rgb');
  let result: string;

  before(() => {
    result = sassToHex(setLuminance(color, lum, mode));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#ff9dce');
  });
});
