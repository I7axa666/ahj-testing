export default function isValid(number) {
  const checksum = parseInt(number.charAt(number.length - 1), 10);
  let total = 0;
  for (let i = number.length - 2; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);
    if ((number.length - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    total += digit;
  }
  return (total + checksum) % 10 === 0;
}
