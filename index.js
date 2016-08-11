var Nightmare = require('nightmare');
var fs = require('fs-extra');
var argv = require('yargs').argv;
var path = require('path');

if(!argv.url) {
    console.error('缺少参数--url');
    process.exit(1);
}

var defaultPath = 'dist/' + (new Date).getTime() + '.pdf';
var output = path.resolve(argv.path || defaultPath);
fs.mkdirsSync(path.dirname(output));

var nightmare = Nightmare({
    waitTimeout: argv.timeout // ms
});
    
nightmare
    .viewport(1300, 1000)
    .goto(argv.url)
    .then(function (data) {
        if(data.code !== 200) {
            throw new Error('Failed: HTTP status=' + data.code);
        }

        return nightmare
            .wait(argv.selector || 0)
            .pdf(output, {
                pageSize: 'A4',
                printBackground: true
            })
            .end();
    })
    .then(function () {
        console.log('pdf已生成:', output);
    })
    .catch(function (err) {
        console.error(err.message);
        process.exit(1);
    });