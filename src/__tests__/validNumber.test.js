import isValid from '../js/isValidFunc';
import getPaySystem from '../js/checkPaySyst';

test('should be false if card number none', () => {
  const result = isValid('');
  expect(result).toBe(false);
});

test('should be true by test number', () => {
  const result = isValid('4024007163269391');
  expect(result).toBe(true);
});

test('should be visa by number 4024007163269391', () => {
  const result = getPaySystem('4024007163269391');
  expect(result).toBe('visa');
});

test('should be master by number 5467929858074128', () => {
  const result = getPaySystem('5467929858074128');
  expect(result).toBe('master');
});

test('should be amex by number 375118435530560', () => {
  const result = getPaySystem('375118435530560');
  expect(result).toBe('amex');
});

test('should be world by number 2200240724007493', () => {
  const result = getPaySystem('2200240724007493');
  expect(result).toBe('world');
});
