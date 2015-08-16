require('../Object.clone')

var expect = require('expect.js');

describe('Object.clone', function() {
  it('should clone the target', function () {
    original = {
      a: 'a',
      1: 1,
    }

    copy = Object.clone(original)

    expect(copy).to.not.be(original)
    expect(copy).to.eql(original)
  });
});
