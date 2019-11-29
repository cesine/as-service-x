const { expect } = require('chai');

const asx = require('../../src/asx');

describe('src/asx', () => {
  describe('get', () => {
    it('should get keys which are not defined', async () => {
      const x = await asx.get('hi');
      expect(x).to.equal(undefined);
    });
  });

  describe('set', () => {
    it('should set keys', async () => {
      const x = await asx.set('hi', 'something in a string');
      expect(x).to.equal('something in a string');

      return asx.get('hi')
        .then((result) => {
          expect(result).to.equal('something in a string');
        });
    });
  });
});
