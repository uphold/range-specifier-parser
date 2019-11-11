/**
 * Module dependencies.
 */

const parser = require('../src');

/**
 * Test `RangeSpecifierParser`.
 */

describe('RangeSpecifierParser', () => {
  it('should return -2 range is missing `range-unit`', () => {
    expect(parser('=0-5')).toEqual(-2);
  });

  it('should return -2 range is missing `=`', () => {
    expect(parser('bytes0-5')).toEqual(-2);
  });

  it('should return -2 `byte-range-spec` is not totally defined', () => {
    expect(parser('bytes=-5')).toEqual(-2);
  });

  it('should return -2 `byte-range-spec` is not a numeric interval', () => {
    expect(parser('bytes=start-end')).toEqual(-2);
  });

  it('should return -1 for invalid `byte-range-spec`', () => {
    expect(parser('bytes=5-0')).toEqual(-1);
  });

  it('should accept `0-0` as a valid range', () => {
    expect(parser('bytes=0-0')).toMatchObject({
      first: 0,
      last: 0,
      unit: 'bytes'
    });
  });

  it('should parse a numeric range', () => {
    expect(parser('bytes=0-499')).toMatchObject({
      first: 0,
      last: 499,
      unit: 'bytes'
    });
  });

  it('should parse a range with asterisk', () => {
    expect(parser('bytes=0-*')).toMatchObject({
      first: 0,
      last: '*',
      unit: 'bytes'
    });
  });
});
