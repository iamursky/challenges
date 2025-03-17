import { expect, test } from "@jest/globals";

import runningSum from "./running-sum-of-1d-array";

test("[1, 2, 3, 4]", () => {
  expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test("[1, 1, 1, 1, 1]", () => {
  expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("[3, 1, 2, 10, 1]", () => {
  expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});
