var Nightmare = require('nightmare');
var fs = require('fs-extra');
var argv = require('yargs').argv;
var File = require('vinyl');

var file = new File({
    path: argv.path
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
            .wait('canvas')
            .pdf(file.path, {
                pageSize: 'A4',
                printBackground: true
            })
            .end()
            .then(function () {
                console.log('done');
            })
            .catch(function (err) {
                console.error('failed:', err.message);
                process.exit(1);
            });
    });