import { expect } from 'chai';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import scale from './scale';
import { sassListToHex } from '../converters';

describe('generators/scale', () => {
  let args: sass.types.List;
  let result: Array<string>;

  beforeEach(() => {
    result = sassListToHex(scale(args));
  });

  describe('linear', () => {
    describe('pass in colors', () => {
      before(() => {
        args = sassUtils.castToSass([
          sass.types.Color(0, 0, 0),
          sass.types.Color(255, 255, 255),
        ]);
      });

      it('should return the correct colors', () => {
        expect(result).to.deep.equal([
          '#000000', '#1c1c1c', '#393939', '#555555', '#717171',
          '#8e8e8e', '#aaaaaa', '#c6c6c6', '#e3e3e3', '#ffffff',
        ]);
      });
    });

    describe('pass in colors as a list', () => {
      before(() => {
        args = sassUtils.castToSass([
          sassUtils.castToSass([
            sass.types.Color(0, 0, 0),
            sass.types.Color(255, 255, 255),
          ]),
        ]);
      });

      it('should return the correct colors', () => {
        expect(result).to.deep.equal([
          '#000000', '#1c1c1c', '#393939', '#555555', '#717171',
          '#8e8e8e', '#aaaaaa', '#c6c6c6', '#e3e3e3', '#ffffff',
        ]);
      });
    });

    describe('pass in palette', () => {
      before(() => {
        args = sassUtils.castToSass(['OrRd']);
      });

      it('should return the correct colors', () => {
        expect(result).to.deep.equal([
          '#fff7ec', '#feeacc', '#fdd8a7', '#fdc38d', '#fca16c',
          '#f67b51', '#e7533a', '#cf2518', '#ad0000', '#7f0000',
        ]);
      });
    });
  });

  describe('bezier', () => {

  });
});
