import { expect } from 'chai';
import sass from 'node-sass';
import deltaE from './delta-e';

describe('utils/delta-e', () => {
  const reference = sass.types.Color(228, 228, 238);
  const sample = sass.types.Color(228, 238, 228);
  const l = sass.types.Number(1);
  const c = sass.types.Number(1);
  let result: number;

  before(() => {
    result = deltaE(reference, sample, l, c).getValue();
  });

  it('should return the correct delta e', () => {
    expect(result.toFixed(2)).to.equal('14.84');
  });
});
