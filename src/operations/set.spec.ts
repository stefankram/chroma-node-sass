import { expect } from 'chai';
import sass from 'node-sass';
import set from './set';
import { sassToHex } from '../converters';

describe('operations/set', () => {
  const color = sass.types.Color(255, 105, 180);
  const channel = sass.types.String('lch.c');
  const value = sass.types.Number(30);
  let result: string;

  before(() => {
    result = sassToHex(set(color, channel, value));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#ce8ca9');
  });
});
