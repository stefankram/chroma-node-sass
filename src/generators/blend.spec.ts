import { expect } from 'chai';
import sass from 'node-sass';
import blend from './blend';
import { sassToHex } from '../converters';

describe('generators/blend', () => {
  const color1 = sass.types.Color(76, 187, 252);
  const color2 = sass.types.Color(238, 238, 34);
  const mode = sass.types.String('multiply');
  let result: string;

  before(() => {
    result = sassToHex(blend(color1, color2, mode));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#47af22');
  });
});
