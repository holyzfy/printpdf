var fs = require('fs-extra');
var argv = require('yargs').argv;
var path = require('path');
var config = require('config');
var puppeteer = require('puppeteer');
var to = require('await-to-js').default;

if(!argv.url) {
    console.error('缺少参数--url');
    process.exit(1);
}

(async () => {
    var browser = await puppeteer.launch({
        // headless: false,
        executablePath: config.executablePath
    });
    var page = await browser.newPage();
    await page.goto(argv.url);
    if(argv.selector) {
        var promise = page.waitForSelector(argv.selector, {timeout: argv.timeout});
        var [err, result] = await to(promise);
    }
    if(err) {
        console.error(err.message);
        return await browser.close();
    }
    var defaultPath = 'dist/' + Date.now() + '.pdf';
    var output = path.resolve(argv.path || defaultPath);
    fs.ensureDir(path.dirname(output));
    await page.pdf({
        path: output,
        format: 'A4',
        printBackground: true
    });
    await browser.close();
    console.log(`pdf已生成：${output}`);
})();
