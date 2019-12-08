import { expect } from 'chai';
import sass from 'node-sass';
import darken from './darken';
import { sassToHex } from '../converters';

describe('operations/darken', () => {
  const color = sass.types.Color(255, 105, 180);
  const value = sass.types.Number(1);
  let result: string;

  before(() => {
    result = sassToHex(darken(color, value));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#c93384');
  });
});
