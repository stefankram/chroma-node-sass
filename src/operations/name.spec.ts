import { expect } from 'chai';
import sass from 'node-sass';
import name from './name';

describe('operations/name', () => {
  const color = sass.types.Color(255, 165, 0);
  let result: string;

  before(() => {
    result = name(color).getValue();
  });

  it('should return the name of the color', () => {
    expect(result).to.equal('orange');
  });
});
