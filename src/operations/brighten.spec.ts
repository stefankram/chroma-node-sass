import { expect } from 'chai';
import sass from 'node-sass';
import brighten from './brighten';
import { sassToHex } from '../converters';

describe('operations/brighten', () => {
  const color = sass.types.Color(255, 105, 180);
  const value = sass.types.Number(1);
  let result: string;

  before(() => {
    result = sassToHex(brighten(color, value));
  });

  it('should return the correct color', () => {
    expect(result).to.equal('#ff9ce6');
  });
});
