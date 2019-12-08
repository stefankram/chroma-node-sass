import { expect } from 'chai';
import sass from 'node-sass';
import getLuminance from './get-luminance';

describe('operations/get-luminance', () => {
  const color = sass.types.Color(255, 105, 180);
  let result: number;

  before(() => {
    result = getLuminance(color).getValue();
  });

  it('should return the correct luminance', () => {
    expect(result.toFixed(3)).to.equal('0.347');
  });
});
