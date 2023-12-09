import CardFormWidget from '../widget';

test('widget', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDom();

  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});
