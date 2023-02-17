import analyzeArray from "./analyzearray.js";

test("confirm object properties exist", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("average");
  expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("min");
  expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("max");
  expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("length");
});
test("object values are caluclated correctly", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toEqual(3);
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toEqual(1);
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toEqual(5);
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toEqual(5);
});

test("empty array supplied", () => {
  expect(analyzeArray()).toEqual({});
});

test("returns object with correct properties and values", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
