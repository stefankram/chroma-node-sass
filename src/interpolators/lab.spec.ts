import { expect } from 'chai';
import sass from 'node-sass';
import lab from './lab';
import { sassToHex } from '../converters';

describe('interpolators/lab', () => {
  let color: string;

  before(() => {
    color = sassToHex(lab(
      sass.types.Number(50),
      sass.types.Number(75),
      sass.types.Number(25),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#e91451');
  });
});
