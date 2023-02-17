import reverse from "./reverse.js";

test("reverses string", () => {
  expect(reverse("hello")).toBe("olleh");
});
