import { expect } from 'chai';
import sass from 'node-sass';
import hsv from './hsv';
import { sassToHex } from '../converters';

describe('interpolators/hsv', () => {
  let color: string;

  before(() => {
    color = sassToHex(hsv(
      sass.types.Number(285),
      sass.types.Number(0.8),
      sass.types.Number(1),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#cc33ff');
  });
});
