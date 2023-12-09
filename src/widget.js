import isValid from './js/isValidFunc';
import getPaySystem from './js/checkPaySyst';

export default class CardFormWidget {
  constructor(parentEL) {
    this.parentEL = parentEL;

    this.onBtn = this.onBtn.bind(this);
  }

  static get markup() {
    return `
        <div class="validator">
            <ul class="cards-list">
                <li>
                    <span class="card visa">Visa</span>
                </li>
                <li>
                    <span class="card master">Mastercard</span>
                </li>
                <li>
                    <span class="card world">МИР</span>
                </li>
                <li>
                    <span class="card amex">AmericanExp</span>
                </li>
            </ul>
            <form class="form-inline">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Введите номер карты">
                    <button class="btn">Нажмите для проверки</button>
                </div>
            </form>
        </div>`;
  }

  static get selector() {
    return '.validator';
  }

  static get buttonSelector() {
    return '.btn';
  }

  static get inputSelector() {
    return 'input';
  }

  bindToDom() {
    this.parentEL.innerHTML = CardFormWidget.markup;
    this.element = this.parentEL.querySelector(CardFormWidget.selector);
    this.btn = this.element.querySelector(CardFormWidget.buttonSelector);
    this.input = this.element.querySelector(CardFormWidget.inputSelector);

    this.btn.addEventListener('click', this.onBtn);
  }

  onBtn(ev) {
    ev.preventDefault();
    if (isValid(this.input.value)) {
      const paySystem = getPaySystem(this.input.value);
      if (this.parentEL.querySelector('.active')) {
        this.parentEL.querySelector('.active').classList.remove('active');
      }
      this.parentEL.querySelector(`.${paySystem}`).classList.add('active');
    } else {
      alert('Неверный номер карты');
      if (this.parentEL.querySelector('.active')) {
        this.parentEL.querySelector('.active').classList.remove('active');
      }
    }
  }
}
