import { expect } from 'chai';
import sass from 'node-sass';
import contrast from './contrast';

describe('utils/contrast', () => {
  const color1 = sass.types.Color(127, 127, 127);
  const color2 = sass.types.Color(255, 255, 255);
  let result: number;

  before(() => {
    result = contrast(color1, color2).getValue();
  });

  it('should return the correct contrast ratio', () => {
    expect(result.toFixed(2)).to.equal('4.00');
  });
});
