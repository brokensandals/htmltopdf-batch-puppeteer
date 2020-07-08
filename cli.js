#!/usr/bin/env node

const { convertAll } = require('.');

if (process.argv.length < 3) {
  console.log('Usage: htmltopdf-batch-puppeteer INPUT_PATH_1 [INPUT_PATH_2...]');
  process.exit(1);
}

convertAll(process.argv.slice(2)).then(_ => {}, err => {
  console.error(err);
  process.exit(2);
});
