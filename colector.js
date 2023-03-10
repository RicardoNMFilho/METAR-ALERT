const {chromium, firefox, webkit} = require('playwright');
const moment = require('moment');

const colect = async function Colect() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.redemet.aer.mil.br/old/?i=produtos&p=consulta-de-mensagens-opmet');
    
    await page.locator("#msg_localidade").fill("SBEG");
    await page.locator("#consulta_recente").click();

    await page.locator("#consulta_data_ini").fill(moment().add(3, 'hours').format("DD/MM/YYYY HH:00"));
    await page.locator("#consulta_data_fim").fill(moment().add(3, 'hours').format("DD/MM/YYYY HH:00"));

    await page.locator("#consulta_localidade").click();

    await page.waitForSelector("#msg_resultado");

    const table = await page.$("#msg_resultado");

    let msg = await table.innerText();

    await browser.close();

    msg = msg.replace(/\t/g, " ").split(`\n`);
    msg = msg.slice(1,msg.length - 1);

    return msg;

}

module.exports = {colect};