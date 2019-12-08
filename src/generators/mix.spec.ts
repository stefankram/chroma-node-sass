import { expect } from 'chai';
import sass from 'node-sass';
import mix from './mix';
import { sassToHex } from '../converters';

describe('generators/mix', () => {
  const color1 = sass.types.Color(255, 0, 0);
  const color2 = sass.types.Color(0, 0, 255);
  const ratio = sass.types.Number(0.5);
  const mode = sass.types.String('rgb');
  let result: string;

  before(() => {
    result = sassToHex(mix(color1, color2, ratio, mode));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#800080');
  });
});
