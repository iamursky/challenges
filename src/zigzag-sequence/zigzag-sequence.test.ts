import { expect, test } from "@jest/globals";

import zigzagSequence from "./zigzag-sequence";

test("Zigzag Sequence #1", () => {
  const arr: number[] = [2, 3, 5, 1, 4];
  const expected: number[] = [1, 4, 5, 3, 2];
  const result = zigzagSequence(arr);

  expect(result).toEqual(expected);
});

test("Zigzag Sequence #2", () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
  const expected: number[] = [1, 4, 5, 7, 6, 3, 2];
  const result = zigzagSequence(arr);

  expect(result).toEqual(expected);
});
