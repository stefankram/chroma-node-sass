import { expect } from 'chai';
import sass from 'node-sass';
import get from './get';

describe('operations/get', () => {
  const color = sass.types.Color(255, 69, 0);
  const channel = sass.types.String('hsl.l');
  let result: number;

  before(() => {
    result = get(color, channel).getValue();
  });

  it('should return the correct channel', () => {
    expect(result).to.equal(0.5);
  });
});
