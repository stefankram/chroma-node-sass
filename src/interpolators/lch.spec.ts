import { expect } from 'chai';
import sass from 'node-sass';
import lch from './lch';
import { sassToHex } from '../converters';

describe('interpolators/lch', () => {
  let color: string;

  before(() => {
    color = sassToHex(lch(
      sass.types.Number(80),
      sass.types.Number(40),
      sass.types.Number(130),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#aad28c');
  });
});
