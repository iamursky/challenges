import { expect, test } from "@jest/globals";

import diagonalDifference from "./diagonal-difference";

test("arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]", () => {
  const arr: number[][] = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  expect(diagonalDifference(arr)).toBe(15);
});

test("arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]", () => {
  const arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  expect(diagonalDifference(arr)).toBe(2);
});

test("arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
  const arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  expect(diagonalDifference(arr)).toBe(0);
});
