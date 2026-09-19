import assert from "node:assert/strict";
import test from "node:test";
import { generateUniqueDigits } from "./generate-unique-digits.ts";

function assertValidDigits(digits: number[]) {
  assert.equal(digits.length, 6);
  assert.equal(new Set(digits).size, 6);

  for (const digit of digits) {
    assert.equal(Number.isInteger(digit), true);
    assert.ok(digit >= 0 && digit <= 9);
  }
}

test("returns six unique digits between 0 and 9", () => {
  assertValidDigits(generateUniqueDigits());
});

test("keeps returning valid digits across repeated calls", () => {
  for (let index = 0; index < 100; index += 1) {
    assertValidDigits(generateUniqueDigits());
  }
});
