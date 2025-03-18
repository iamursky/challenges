import { test } from "@jest/globals";

import plusMinus from "./plus-minus";

test("arr = [-4, 3, -9, 0, 4, 1]", () => {
  plusMinus([-4, 3, -9, 0, 4, 1]);
});

test("arr = [1, -2, -7, 9, 1, -8, -5]", () => {
  plusMinus([1, -2, -7, 9, 1, -8, -5]);
});

test("arr = [1, 2, 3, -1, -2, -3, 0, 0]", () => {
  plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
});
