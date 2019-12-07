import { expect } from 'chai';
import sass from 'node-sass';
import hsl from './hsl';
import { sassToHex } from '../converters';

describe('interpolators/hsl', () => {
  let color: string;

  before(() => {
    color = sassToHex(hsl(
      sass.types.Number(330),
      sass.types.Number(1),
      sass.types.Number(0.6),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#ff3399');
  });
});
