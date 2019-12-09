import { expect } from 'chai';
import sass from 'node-sass';
import sassUtils from '../sass-utils';
import scale from './scale';
import { sassListToHex } from '../converters';

describe('generators/scale', () => {
  let args: sass.types.List;
  let result: string[];

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

    describe('domain', () => {
      before(() => {
        args = sassUtils.castToSass([
          sass.types.Color(255, 255, 0),
          sass.types.Color(144, 238, 144),
          sass.types.Color(0, 138, 229),
          sassUtils.castToSass({ domain: [0, 0.25, 1] }),
        ]);
      });

      it('should return the correct colors', () => {
        expect(result).to.deep.equal([
          '#ffff00', '#cef740', '#9cf080', '#80e399', '#6bd4a6',
          '#55c5b3', '#40b6bf', '#2ba8cc', '#1599d8', '#008ae5',
        ]);
      });
    });

    describe('mode', () => {
      before(() => {
        args = sassUtils.castToSass([
          sass.types.Color(255, 255, 0),
          sass.types.Color(0, 0, 128),
          sassUtils.castToSass({ mode: 'lab' }),
        ]);
      });

      it('should return the correct colors', () => {
        console.log(result);
        expect(result).to.deep.equal([
          '#ffff00', '#ebe13a', '#d7c34f', '#c3a65d', '#ad8967',
          '#976d6e', '#7f5274', '#653879', '#451d7d', '#000080',
        ]);
      });
    });
  });

  describe('bezier', () => {

  });
});
