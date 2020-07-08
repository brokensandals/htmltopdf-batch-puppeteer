# htmltopdf-batch-puppeteer

Converts your HTML files to PDFs.
In batches.
Using puppeteer.

You might use this instead of, for example, [wkhtmltopdf](https://wkhtmltopdf.org/) if you want the page rendered by Chromium, and if you're comfortable having literally no configurability.

## Usage

1. Install [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
2. In your terminal, run `npm i -g htmltopdf-batch-puppeteer`
3. Then run `htmltopdf-batch-puppeteer FILE1 FILE2 FILE3` etc.

To convert all the HTML files in a directory you would use `htmltopdf-batch-puppeteer /path/to/folder/*.html`.

For each input file, an output file will be created with the same name, except with a `.pdf` suffix.
NOTE: if a file with the target name already exists, it will not be overwritten; the input file will be SKIPPED.

Sometimes it gets stuck on very large HTML pages.
If you wait long enough, it might finish.
Maybe.
I don't know.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/brokensandals/htmltopdf-batch-puppeteer.

## License

This is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
