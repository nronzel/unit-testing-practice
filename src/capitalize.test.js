import capitalize from "./capitalize.js";

test("capitalizes first character", () => {
  expect(capitalize("test")).toBe("Test");
});
