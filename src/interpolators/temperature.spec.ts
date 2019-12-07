import { expect } from 'chai';
import sass from 'node-sass';
import temperature from './temperature';
import { sassToHex } from '../converters';

describe('interpolators/hsl', () => {
  let color: string;

  before(() => {
    color = sassToHex(temperature(
      sass.types.Number(3500),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#ffc38a');
  });
});
