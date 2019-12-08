import { expect } from 'chai';
import sass from 'node-sass';
import chromaJs from 'chroma-js';
import random from './random';
import { sassToHex } from '../converters';

describe('generators/random', () => {
  const alpha = sass.types.Number(1);
  let result: string;

  before(() => {
    result = sassToHex(random(alpha));
  });

  it('should return a valid color', () => {
    expect(chromaJs.valid(result)).to.be.true;
  });
});
