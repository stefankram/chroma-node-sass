import { expect } from 'chai';
import sass from 'node-sass';
import distance from './distance';

describe('utils/distance', () => {
  const color1 = sass.types.Color(255, 255, 255);
  const color2 = sass.types.Color(255, 255, 0);
  const mode = sass.types.String('rgb');
  let result: number;

  before(() => {
    result = distance(color1, color2, mode).getValue();
  });

  it('should return the correct distance', () => {
    expect(result).to.equal(255);
  });
});
