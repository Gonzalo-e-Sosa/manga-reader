export function isNotAvailable(val: undefined | string) {
  return !val || val.length === 0;
}
