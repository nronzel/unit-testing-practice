import caesar from "./caesar.js";

test("caesar shift 2 letters", () => {
  expect(caesar("test", 2)).toBe("vguv");
});

test("caesar shift past Z", () => {
  expect(caesar("zxyz", 4)).toBe("dbcd");
});

test("caesar with capital letters", () => {
  expect(caesar("TeST", 2)).toBe("vguv");
});

test("ceasar ignore punctuation", () => {
  expect(caesar("t.e#s,t", 2)).toBe("vguv");
});

test("caesar ignore numbers", () => {
  expect(caesar("t34e46s98t", 2)).toBe("vguv");
});
