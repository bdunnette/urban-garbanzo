'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('lb-services', function () {
    return gulp.src('../server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./src/app'));
});
