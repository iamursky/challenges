import { expect, test } from "@jest/globals";

import timeConversion from "./time-conversion";

test("12:00:00AM should return 00:00:00", () => {
  expect(timeConversion("12:00:00AM")).toBe("00:00:00");
});

test("12:00:00PM should return 12:00:00", () => {
  expect(timeConversion("12:00:00PM")).toBe("12:00:00");
});

test("07:05:45AM should return 07:05:45", () => {
  expect(timeConversion("07:05:45AM")).toBe("07:05:45");
});

test("07:05:45PM should return 19:05:45", () => {
  expect(timeConversion("07:05:45PM")).toBe("19:05:45");
});

test("12:05:45AM should return 00:05:45", () => {
  expect(timeConversion("12:05:45AM")).toBe("00:05:45");
});

test("12:05:45PM should return 12:05:45", () => {
  expect(timeConversion("12:05:45PM")).toBe("12:05:45");
});
