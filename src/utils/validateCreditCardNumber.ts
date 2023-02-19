export default function isValidCardNumber(cardNumber: string): boolean {
  // Verify the length of the number
  const cardLength = cardNumber.length;
  if (cardLength < 12 || cardLength > 19) {
    return false;
  }

  // Check the first digit(s) of the number
  const firstTwoDigits = parseInt(cardNumber.slice(0, 2));
  if (
    (firstTwoDigits < 40 || firstTwoDigits > 49) &&
    (firstTwoDigits < 51 || firstTwoDigits > 55) &&
    firstTwoDigits !== 34 &&
    firstTwoDigits !== 37
  ) {
    return false;
  }

  // Validate the number using the Luhn algorithm
  let sum = 0;
  let doubleDigit = false;
  for (let i = cardLength - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return sum % 10 === 0;
}
