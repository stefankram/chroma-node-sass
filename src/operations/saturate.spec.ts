import { expect } from 'chai';
import sass from 'node-sass';
import saturate from './saturate';
import { sassToHex } from '../converters';

describe('operations/saturate', () => {
  const color = sass.types.Color(112, 128, 144);
  const value = sass.types.Number(1);
  let result: string;

  before(() => {
    result = sassToHex(saturate(color, value));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#4b83ae');
  });
});
