import isValid from './isValidFunc';
import getPaySystem from './checkPaySyst';

const btn = document.querySelector('.btn');
const input = document.querySelector('input');

btn.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (isValid(input.value)) {
    const paySystem = getPaySystem(input.value);
    if (document.querySelector('.active')) {
      document.querySelector('.active').classList.remove('active');
    }
    document.querySelector(`.${paySystem}`).classList.add('active');
  } else {
    alert('Неверный номер карты');
    if (document.querySelector('.active')) {
      document.querySelector('.active').classList.remove('active');
    }
  }
});
