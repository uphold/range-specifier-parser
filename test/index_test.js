
/**
 * Module dependencies.
 */

import parser from '../src';

/**
 * Test `RangeSpecifierParser`.
 */

describe('RangeSpecifierParser', () => {
  it('should return -2 range is missing `range-unit`', () => {
    parser('=0-5').should.equal(-2);
  });

  it('should return -2 range is missing `=`', () => {
    parser('bytes0-5').should.equal(-2);
  });

  it('should return -2 `byte-range-spec` is not totally defined', () => {
    parser('bytes=-5').should.equal(-2);
  });

  it('should return -2 `byte-range-spec` is not a numeric interval', () => {
    parser('bytes=start-end').should.equal(-2);
  });

  it('should return -1 for invalid `byte-range-spec`', () => {
    parser('bytes=5-0').should.equal(-1);
  });

  it('should parse range', () => {
    const range = parser('bytes=0-499');

    range.last.should.equal(499);
    range.first.should.equal(0);
    range.unit.should.equal('bytes');
  });
});
