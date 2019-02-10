const sum = require("./sum");

test("puts numbers together", () => {
  expect(sum(1, 2)).toBe(3);
});
