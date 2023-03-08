const {chromium, firefox, webkit} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.redemet.aer.mil.br/old/?i=produtos&p=consulta-de-mensagens-opmet');
    
    await page.locator("#msg_localidade").fill("SBEG");
    await page.locator("#consulta_recente").click();

    

    await page.locator("#consulta_localidade").click();
    await page.screenshot({path: "screenshot.png"});

    await browser.close();
})();