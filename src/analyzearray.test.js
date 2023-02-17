import analyzeArray from "./analyzearray.js";

test("return object with average, min, max, and length of array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
