import { expect } from 'chai';
import sass from 'node-sass';
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
  let actualColors: sass.types.List;

  before(() => {
    actualColors = brewer(palette);
  });

  it('should return a list of colors', () => {
    for (let i = 0; i < actualColors.getLength(); i += 1) {
      expect(sassToHex(actualColors.getValue(i) as sass.types.Color)).to.equal(expectedColors[i]);
    }
  });
});
