import { expect } from 'chai';
import sass from 'node-sass';
import hcl from './hcl';
import { sassToHex } from '../converters';

describe('interpolators/hcl', () => {
  let color: string;

  before(() => {
    color = sassToHex(hcl(
      sass.types.Number(130),
      sass.types.Number(40),
      sass.types.Number(80),
      sass.types.Number(1),
    ));
  });

  it('should return the correct color', () => {
    expect(color).to.equal('#aad28c');
  });
});
