const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('linkVerification', {
    waitUntil: 'networkidle2',
  });
  await page.click('body > center > div > input[type=button]:nth-child(2)');
  console.log('Finish');
  await browser.close();
})();