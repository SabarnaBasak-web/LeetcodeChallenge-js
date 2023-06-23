import {
  extractDigits,
  formatFirstThreeDigits,
  formatMorethanSixDigits,
} from "./index";

test("format first 3 digits from 1234 to (123) 4", () => {
  const result = formatFirstThreeDigits("1234");
  expect(result).toBe("(123) 4");
});

test("format first 7 digits from 1234567 to (123) 456-7", () => {
  const result = formatMorethanSixDigits("1234567");
  expect(result).toBe("(123) 456-7");
});

test("extract digit by removing all formattings", () => {
  const digits = extractDigits("(123) 467");
  expect(digits).toBe("123467");
});
