import { expect, test } from "@jest/globals";

import flippingMatrix from "./flipping-the-matrix";

test("Flipping Matrix Test #1", () => {
  const matrix: number[][] = [
    [1, 2],
    [3, 4],
  ];

  const expected: number = 4;

  expect(flippingMatrix(matrix)).toBe(expected);
});

test("Flipping Matrix Test #2", () => {
  const matrix: number[][] = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ];

  const expected: number = 414;

  expect(flippingMatrix(matrix)).toBe(expected);
});
