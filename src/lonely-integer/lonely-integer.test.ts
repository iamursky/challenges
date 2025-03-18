import { expect, test } from "@jest/globals";

import lonelyInteger from "./lonely-integer";

test("a = [1, 1, 2]", () => {
  const a = [1, 1, 2];
  const expected = 2;
  const result = lonelyInteger(a);
  expect(result).toBe(expected);
});

test("a = [0, 0, 1, 2, 1]", () => {
  const a = [0, 0, 1, 2, 1];
  const expected = 2;
  const result = lonelyInteger(a);
  expect(result).toBe(expected);
});

test("a = [1, 2, 3, 4, 3, 2, 1]", () => {
  const a = [1, 2, 3, 4, 3, 2, 1];
  const expected = 4;
  const result = lonelyInteger(a);
  expect(result).toBe(expected);
});
