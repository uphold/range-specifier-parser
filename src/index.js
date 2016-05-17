
/**
 * Export `parser`.
 */

export default range => {
  // Test `Range` format.
  if (range.match(/^\w+=\d+-\d+$/) === null) {
    return -2;
  }

  // Parse `range-set` from range.
  const rangeSet = range.replace(range.match(/^\w+=/g), '').split('-');

  // Pick `first-byte-pos` and `last-byte-pos` from `range-set`.
  const first = parseInt(rangeSet[0], 10);
  const last = parseInt(rangeSet[1], 10);
  const unit = range.replace(range.match(/\=\d+-\d+$/), '');

  // `first-byte-pos` must not be greater than `last-byte-pos`.
  if (first > last) {
    return -1;
  }

  return { first, last, unit };
};