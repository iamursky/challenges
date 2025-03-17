import { expect, test } from "@jest/globals";

import numberOfStepsToReduceANumberToZero from "./number-of-steps-to-reduce-a-number-to-zero";

test("num = 14", () => {
  expect(numberOfStepsToReduceANumberToZero(14)).toBe(6);
});

test("num = 8", () => {
  expect(numberOfStepsToReduceANumberToZero(8)).toBe(4);
});

test("num = 123", () => {
  expect(numberOfStepsToReduceANumberToZero(123)).toBe(12);
});
