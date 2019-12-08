import { expect } from 'chai';
import sass from 'node-sass';
import temperature from './temperature';

describe('operations/temperature', () => {
  const color = sass.types.Color(203, 219, 255);
  let result: number;

  before(() => {
    result = temperature(color).getValue();
  });

  it('should return the temperature of the color', () => {
    expect(result).to.equal(10115);
  });
});
