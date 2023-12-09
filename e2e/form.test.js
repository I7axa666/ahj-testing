import puppeteer from 'puppeteer';

jest.setTimeout(15000);

describe('Card number', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.validator');
  });

  test('if number is correct .card class should add . active ', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-input');
    const btn = await form.$('.btn');

    await input.type('4024007163269391');
    await btn.click();

    await page.waitForSelector('.active');
  });

  test('if number is invalid', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-input');
    const btn = await form.$('.btn');

    await input.type('');
    page.on('dialog', async (dialog) => { // создали обработчик диалогов
      // console.log(dialog.message());
      await btn.click();
      await dialog.dismiss(); // или же dialog.accept()
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
