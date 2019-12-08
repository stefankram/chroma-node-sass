import { expect } from 'chai';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import limits from './limits';

describe('utils/limits', () => {
  const mode = sass.types.String('e');
  const n = sass.types.Number(4);
  const data = sassUtils.castToSass([2, 3.5, 3.8, 4, 8]);
  const expected = [2, 3.5, 5, 6.5, 8];
  let actual: Array<number>;

  before(() => {
    actual = sassUtils
      .castToJs(limits(data, mode, n))
      .map((num: { value: number }) => num.value);
  });

  it('should return the correct limits', () => {
    expect(actual).to.deep.equal(expected);
  });
});
