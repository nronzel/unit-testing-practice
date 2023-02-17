import calculator from "./calculator.js";

test("adds 2 + 2 to equal 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtracts 10 - 5 to equal 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("divides 10 / 5 to equal 2", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
