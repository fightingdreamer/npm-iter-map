import { test, expect } from "vitest";
import { map } from "./map";

test.each([
  { value: [], fn: () => null, expected: [] },
  { value: ["a", "b", "c"], fn: (v: any) => v, expected: ["a", "b", "c"] },
  { value: ["a", "b", "c"], fn: (_: any, i: number) => i, expected: [0, 1, 2] },
])("map($value, ...) -> $expected", ({ value, fn, expected }) => {
  const ivalue = value[Symbol.iterator]();
  expect(Array.from(map(ivalue, fn))).toEqual(expected);
});
