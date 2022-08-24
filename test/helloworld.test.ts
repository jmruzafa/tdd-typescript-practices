import { printHelloWorld } from "../src/helloworld";

describe("Hello World function", () => {
  it("should print 'Hello World'", () => {
    expect(printHelloWorld()).toBe("Hello World");
  });
});
