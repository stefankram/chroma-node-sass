import { expect } from 'chai';
import sass from 'node-sass';
import cmyk from './cmyk';
import { sassToHex } from '../converters';

describe('interpolators/cmyk', () => {
  let color: string;

  before(() => {
    color = sassToHex(cmyk(
      sass.types.Number(0.2),
      sass.types.Number(0.8),
      sass.types.Number(0),
      sass.types.Number(0),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#cc33ff');
  });
});
