import { expect } from 'chai';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import average from './average';
import { sassToHex } from '../converters';

describe('generators/average', () => {
  const colors = sassUtils.castToSass([
    sass.types.Color(221, 221, 221),
    sass.types.Color(255, 255, 0),
    sass.types.Color(255, 0, 0),
    sass.types.Color(0, 128, 128),
  ]);
  const mode = sass.types.String('lch');
  const weights = sassUtils.castToSass([1, 1, 2, 1]);
  let result: string;

  before(() => {
    result = sassToHex(average(colors, mode, weights));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#f98841');
  });
});
