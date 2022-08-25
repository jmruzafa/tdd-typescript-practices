import { romanConverter } from "../src/romanConverter/romanConverter";

describe("Roman Numeral Calculator", () => {
  it("should exist a function that return something", () => {
    expect(romanConverter(0)).toEqual("");
  });

  it("should return 'I~III' when getting 1~3", () => {
    expect(romanConverter(1)).toEqual("I");
    expect(romanConverter(2)).toEqual("II");
    expect(romanConverter(3)).toEqual("III");
  });
  it("should return 'IV' when getting 4", () => {
    expect(romanConverter(4)).toEqual("IV");
  });

  it("should return 'V' when getting 5", () => {
    expect(romanConverter(5)).toEqual("V");
  });
  /*
  it("should return 'X' when getting 10", () => {
    expect(romanConverter(10)).toEqual("X");
  }); */
});
