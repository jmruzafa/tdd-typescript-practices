import { romanConverter } from "../src/romanConverter/romanConverter";

describe("Roman Numeral Calculator", () => {
  it("should exist a function that return something", () => {
    expect(romanConverter(0)).toEqual("");
  });

  it.each([
    ["", 0],
    ["I", 1],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
  ])("should return '%s' when passing %i", (expected, arg) => {
    expect(romanConverter(arg)).toBe(expected);
  });
});
