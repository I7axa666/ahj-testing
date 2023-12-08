import isValid from '../js/isValidFunc';

test('should be false if card number none', () => {
  const result = isValid('');
  expect(result).toBe(false);
});

test('should be true weth test number', () => {
  const result = isValid('4024007163269391');
  expect(result).toBe(true);
});
