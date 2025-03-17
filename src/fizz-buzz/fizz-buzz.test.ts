import { expect, test } from "@jest/globals";

import fizzBuzz from "./fizz-buzz";

test("n = 3", () => {
  expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
});

test("n = 5", () => {
  expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test("n = 15", () => {
  expect(fizzBuzz(15)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
