import { expect, test } from "@jest/globals";

import richestCustomerWealth from "./richest-customer-wealth";

test("[[1,2,3],[3,2,1]]", () => {
  expect(
    richestCustomerWealth([
      [1, 2, 3],
      [3, 2, 1],
    ]),
  ).toBe(6);
});

test("[[1,5],[7,3],[3,5]]", () => {
  expect(
    richestCustomerWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ]),
  ).toBe(10);
});

test("[[2,8,7],[7,1,3],[1,9,5]]", () => {
  expect(
    richestCustomerWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ]),
  ).toBe(17);
});
