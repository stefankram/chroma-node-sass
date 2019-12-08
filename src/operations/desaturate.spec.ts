import { expect } from 'chai';
import sass from 'node-sass';
import desaturate from './desaturate';
import { sassToHex } from '../converters';

describe('operations/desaturate', () => {
  const color = sass.types.Color(255, 105, 180);
  const value = sass.types.Number(1);
  let result: string;

  before(() => {
    result = sassToHex(desaturate(color, value));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#e77dae');
  });
});
