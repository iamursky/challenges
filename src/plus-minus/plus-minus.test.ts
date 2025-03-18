import { test } from "@jest/globals";

import plusMinus from "./plus-minus";

test("arr = [-4, 3, -9, 0, 4, 1]", () => {
  const arr = [-4, 3, -9, 0, 4, 1];
  const result = ["0.500000", "0.333333", "0.166667"];
  expect(plusMinus(arr)).toEqual(result);
});

test("arr = [1, -2, -7, 9, 1, -8, -5]", () => {
  const arr = [1, -2, -7, 9, 1, -8, -5];
  const result = ["0.428571", "0.571429", "0.00000"];
  expect(plusMinus(arr)).toEqual(result);
});

test("arr = [1, 2, 3, -1, -2, -3, 0, 0]", () => {
  const arr = [1, 2, 3, -1, -2, -3, 0, 0];
  const result = ["0.375000", "0.375000", "0.250000"];
  expect(plusMinus(arr)).toEqual(result);
});
