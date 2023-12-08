export default function getPaySystem(number) {
  const paySystems = {
    visa: '4',
    master: '5',
    amex: '3',
    world: '2',
  };

  const firstNumber = number.slice(0, 1);

  return Object.keys(paySystems).find((key) => paySystems[key] === firstNumber);
}
