import { expect } from 'chai';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import brewer from './brewer';
import { sassToHex } from '../converters';

describe('colors/brewer', () => {
  const palette = sass.types.String('OrRd');
  const expectedColors = [
    '#fff7ec',
    '#fee8c8',
    '#fdd49e',
    '#fdbb84',
    '#fc8d59',
    '#ef6548',
    '#d7301f',
    '#b30000',
    '#7f0000',
  ];
  let actualColors: Array<string>;

  before(() => {
    actualColors = sassUtils
      .castToJs(brewer(palette))
      .map((color: sass.types.Color) => sassToHex(color));
  });

  it('should return a list of the correct colors', () => {
    expect(actualColors).to.deep.equal(expectedColors);
  });
});
