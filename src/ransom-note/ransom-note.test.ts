import { expect, test } from "@jest/globals";

import ransomNote from "./ransom-note";

test('ransomNote = "a", magazine = "b"', () => {
  expect(ransomNote("a", "b")).toBe(false);
});

test('ransomNote = "aa", magazine = "ab"', () => {
  expect(ransomNote("aa", "ab")).toBe(false);
});

test('ransomNote = "aa", magazine = "aab"', () => {
  expect(ransomNote("aa", "aab")).toBe(true);
});
