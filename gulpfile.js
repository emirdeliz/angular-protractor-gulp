var gulp = require('gulp');
var buildConfig = require('./config/build.config');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var argv = require('minimist')(process.argv.slice(2));
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var gprotractor = require('gulp-protractor');
var angularProtractor = require('gulp-angular-protractor');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('gulp-main-bower-files');
var gulpFilter = require('gulp-filter');
var inject = require('gulp-inject');

var webdriver_standalone = gprotractor.webdriver_standalone;
var webdriver_update = gprotractor.webdriver_update;

gulp.task('build-js', function () {
    gulp.src(buildConfig.jsFiles)
    .pipe(concat(buildConfig.fileNameJs))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest(buildConfig.dist));
});

gulp.task('build-sass', function () {
    gulp.src(buildConfig.sassFiles)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat(buildConfig.fileNameCss))
    .pipe(gulp.dest(buildConfig.dist));
});

gulp.task('build-html', function () {
    gulp.src('./src/components/**/*.html')
    .pipe(gulp.dest(buildConfig.dist + '/components'));
});

gulp.task('build-assets', ['build-font', 'build-img']);

gulp.task('build-font', function () {
    return gulp.src(['./src/assets/webfonts/**/*'])
    .pipe(gulp.dest(buildConfig.dist + '/webfonts'));
});

gulp.task('build-img', function () {
    gulp.src(['./src/assets/imgs/**/*'])
    .pipe(gulp.dest(buildConfig.dist + '/imgs'));
});

gulp.task('build', ['build-bower-files', 'build-js', 'build-sass', 'build-html', 'build-assets', 'inject']);

gulp.task('inject', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src([buildConfig.dist + '/vendor.min.js',
    buildConfig.dist + '/bundle.min.js',
    //buildConfig.dist + '/bundle.js',
    buildConfig.dist + '/style.css'], {read: false});

    target.pipe(inject(sources, {ignorePath: 'build'}))
    .pipe(gulp.dest(buildConfig.dist));
});

gulp.task('build-bower-files', function() {
    gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulpFilter('**/*.js', {restore: true}))
    .pipe(concat(buildConfig.fileNameVendor))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest(buildConfig.dist));
});

gulp.task('watch', ['build'], function () {
    gulp.watch([buildConfig.jsFiles, buildConfig.sassFiles], ['build']);
});

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: false
    }));
});

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_standalone', webdriver_standalone);

// kill -9 $(lsof -ti tcp:4444)
gulp.task('test', ['webdriver_update'], function(done) {
    gulp.src(['./test/vehicle.navigation.spec.js', './test/vehicle.save.spec.js'])
	   .pipe(angularProtractor({
		configFile: 'protractor.config.js',
		autoStartStopServer: false,
		debug: false
	})).on('error', function(e) {
        console.log('Error: ' + e.message);
        throw e;
    }).on('end', done);
});

gulp.task('check-jshint', function (){
    gulp.src(['./src/**/*.js', '!src/mock/**/*'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['check-jshint', 'build', 'webserver', 'watch']);
