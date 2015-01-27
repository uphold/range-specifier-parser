
/**
 * Module dependencies.
 */

var parser = require('../');

/**
 * Test `rangeSpecifierParser`.
 */

describe.only('rangeSpecifierParser', function() {
  it('should return -2 range is missing `range-unit`', function(){
    parser('=0-5').should.equal(-2);
  });

  it('should return -2 range is missing `=`', function(){
    parser('bytes0-5').should.equal(-2);
  });

  it('should return -2 `byte-range-spec` is not totally defined', function(){
    parser('bytes=-5').should.equal(-2);
  });

  it('should return -2 `byte-range-spec` is not a numeric interval', function(){
    parser('bytes=start-end').should.equal(-2);
  });

  it('should return -1 for invalid `byte-range-spec`', function(){
    parser('bytes=5-0').should.equal(-1);
  });

  it('should parse range', function(){
    var range = parser('bytes=0-499');

    range.last.should.equal(499);
    range.first.should.equal(0);
    range.unit.should.equal('bytes');
  });
});
