export function generateUniqueDigits(): number[] {
  const digits = Array.from({ length: 10 }, (_, index) => index);

  for (let index = digits.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [digits[index], digits[randomIndex]] = [digits[randomIndex], digits[index]];
  }

  return digits.slice(0, 6);
}
