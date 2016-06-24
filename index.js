var Nightmare = require('nightmare');
var fs = require('fs-extra');
var argv = require('yargs').argv;
var File = require('vinyl');

if(!argv.url) {
    console.error('缺少参数--url')
    process.exit(1);
}

var file = new File({
    path: argv.path || 'dist/' + (new Date).getTime() + '.pdf'
});
fs.mkdirsSync(file.dirname);

var nightmare = Nightmare({
    waitTimeout: 10000 // ms
});
    
nightmare
    .viewport(1300, 1000)
    .goto(argv.url)
    .then(function (data) {
        if(data.code !== 200) {
            console.error('failed: HTTP status=', data.code);
            return process.exit(1);
        }

        nightmare
            .wait(argv.selector || 0)
            .pdf(file.path, {
                pageSize: 'A4',
                printBackground: true
            })
            .end()
            .then(function () {
                console.log('pdf已生成:', file.path);
            })
            .catch(function (err) {
                console.error('failed:', err.message);
                process.exit(1);
            });
    });