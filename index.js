
/**
 * Export `parser`.
 */

module.exports = function(range) {
  // Test `Range` format.
  if (null === range.match(/^\w+=\d+-\d+$/)) {
    return -2;
  }

  // Parse `range-set` from range.
  var rangeSet = range.replace(range.match(/^\w+=/g), '').split('-');

  // Pick `first-byte-pos` and `last-byte-pos` from `range-set`.
  var first = parseInt(rangeSet[0], 10)
  var last = parseInt(rangeSet[1], 10);
  var unit = range.replace(range.match(/=\d+-\d+$/), '');

  // `first-byte-pos` must not be greater than `last-byte-pos`.
  if (first > last) {
    return -1;
  }

  return {
    first: first,
    last: last,
    unit: unit
  };
};
