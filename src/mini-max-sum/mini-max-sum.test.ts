import { expect, test } from "@jest/globals";

import miniMaxSum from "./mini-max-sum";

test("arr = [1, 2, 3, 4, 5]", () => {
  const arr = [1, 2, 3, 4, 5];
  const result = miniMaxSum(arr);
  expect(result).toEqual([10, 14]);
});

test("arr = [7, 69, 2, 221, 8974]", () => {
  const arr = [7, 69, 2, 221, 8974];
  const result = miniMaxSum(arr);
  expect(result).toEqual([299, 9271]);
});
