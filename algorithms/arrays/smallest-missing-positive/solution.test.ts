import { describe, it, expect } from "vitest";
import { smallestMissingPositive } from "./solution";

describe("smallestMissingPositive", () => {
  it("basic case", () => {
    expect(smallestMissingPositive([1, 2, 0, 4])).toBe(3);
  });

  it("negatif number", () => {
    expect(smallestMissingPositive([-100, -10, -27, 2, 0, 4])).toBe(1);
  });

  it("duplicate number", () => {
    expect(smallestMissingPositive([-100, -10, -27, 2, 2, 1, 3, 4, 4])).toBe(5);
  });

  it("empty array", () => {
    expect(smallestMissingPositive([])).toBe(1);
  });

  it("only one value negatif", () => {
    expect(smallestMissingPositive([-100])).toBe(1);
  });

  it("only one value positif", () => {
    expect(smallestMissingPositive([100])).toBe(1);
  });
});