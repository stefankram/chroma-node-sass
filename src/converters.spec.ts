import { expect } from 'chai';
import sass from 'node-sass';
import { rgbaToSass, sassToHex } from './converters';

describe('converters', () => {
  describe('rgbaToSass', () => {
    const r = 128;
    const g = 138;
    const b = 148;

    describe('alpha set to 1', () => {
      let color: sass.types.Color;

      before(() => {
        color = rgbaToSass([r, g, b, 1]);
      });

      it('should return the correct sass color', () => {
        expect(color.getR()).to.equal(r);
        expect(color.getG()).to.equal(g);
        expect(color.getB()).to.equal(b);
        expect(color.getA()).to.equal(1);
      });
    });

    describe('alpha not set to 1', () => {
      let color: sass.types.Color;

      before(() => {
        color = rgbaToSass([r, g, b, 0.5]);
      });

      it('should return the correct sass color', () => {
        expect(color.getR()).to.equal(r);
        expect(color.getG()).to.equal(g);
        expect(color.getB()).to.equal(b);
        expect(color.getA()).to.equal(0.5);
      });
    });
  });

  describe('sassToHex', () => {
    describe('alpha not set', () => {
      const color = sass.types.Color(128, 138, 148);
      let hex: string;

      before(() => {
        hex = sassToHex(color);
      });

      it('should return the correct hex color', () => {
        expect(hex).to.equal('#808a94');
      });
    });

    describe('alpha set', () => {
      const color = sass.types.Color(128, 138, 148, 0.5);
      let hex: string;

      before(() => {
        hex = sassToHex(color);
      });

      it('should return the correct hex color', () => {
        expect(hex).to.equal('#808a9480');
      });
    });
  });
});
