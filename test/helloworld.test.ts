import { printHelloWorld } from "../src/helloworld";

it("should print 'Hello World'", () => {
  expect(printHelloWorld()).toBe("Hello World");
});
