import { expect } from 'chai';
import sass from 'node-sass';
import contrast from './contrast';

describe('utils/contrast', () => {
  const color1 = sass.types.Color(127, 127, 127);
  const color2 = sass.types.Color(255, 255, 255);
  let contrastRatio: number;

  before(() => {
    contrastRatio = contrast(color1, color2).getValue();
  });

  it('should return the correct contrast ratio', () => {
    expect(Math.floor(contrastRatio)).to.equal(4);
  });
});
