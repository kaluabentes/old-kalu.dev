export default (range, defaultValue) => (new Array(range))
  .fill(undefined)
  .map((item, index) => defaultValue || index + 1)
