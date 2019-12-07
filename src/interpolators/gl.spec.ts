import { expect } from 'chai';
import sass from 'node-sass';
import gl from './gl';
import { sassToHex } from '../converters';

describe('interpolators/gl', () => {
  let color: string;

  before(() => {
    color = sassToHex(gl(
      sass.types.Number(0.6),
      sass.types.Number(0),
      sass.types.Number(0.8),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#9900cc');
  });
});
