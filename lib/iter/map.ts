/**
  Map items from iterator by callbackFn
  @returns iterator over mapped items
*/
export function* map<T, R>(
  iterator: Iterable<T>,
  callbackFn: (item: T, index: number) => R,
): Generator<R> {
  let index = 0;
  for (const item of iterator) {
    yield callbackFn(item, index);
    index += 1;
  }
}
