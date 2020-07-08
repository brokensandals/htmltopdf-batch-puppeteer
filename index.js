const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

module.exports.convertAll = async function(paths) {
  const browser = await puppeteer.launch();
  try {
    for (const inpath of paths) {
      const outpath = path.join(path.dirname(inpath), `${path.basename(inpath, '.html')}.pdf`);
      if (fs.existsSync(outpath)) {
        console.log(`Skipping ${outpath}`);
        continue;
      }
      const inurl = `file://${path.resolve(inpath)}`;
      const page = await browser.newPage();
      console.log(`Loading page: ${inurl}`);
      await page.goto(inurl, {waitUntil: 'domcontentloaded', timeout: 0});
      console.log(`Writing PDF: ${outpath}`);
      await page.pdf({path: outpath});
    }
  } finally {
    await browser.close();
  }
}
