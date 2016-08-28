var fs = require('fs');

module.exports = {
    fileNameVendor: 'vendor.js',
    fileNameJs: 'bundle.js',
    fileNameCss: 'style.css',
    dist: 'build',
    sassFiles: ['src/**/*.sass'],
    jsFiles: ['src/**/*.js', './bower_components/angular-i18n/angular-locale_pt-br.js'],
    testFiles: ['src/test/**/*.js'],
};
