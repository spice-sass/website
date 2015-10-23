'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babelify = require("babelify");
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var server = require('gulp-express');
var flatten = require('gulp-flatten');
var swig = require('gulp-swig');
var data = require('gulp-data');

var getJsonData = function(file) {
  return require(file + '.json');
};

gulp.task('server', function () {
    server.run(['server.js']);
    gulp.watch(['build/**/*.*'], server.notify);
});

gulp.task('html', function () {
  gulp.src('./app/views/**/*.html, ./app/components/**/*.html',{base: './app'})
    .pipe(flatten())
    .pipe(gulp.dest('./build/views'));  
});

gulp.task('browserify', function () {
  gulp.src(['./app/app.js', './app/docs.js'], {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('static', function() {

  var templates = [
    "index",
    "documentation",
    "examples",
    "demos/dash"
  ]

  templates.forEach(function(template){

    var dest = (template.indexOf('demos/') > -1) ? './build/demos': './build/';
    var obj = {
      "docs" : getJsonData('./app/api/includes'),
      "version" : getJsonData('../spice/package').version, // Requires spice repo to be cloned to the same directory
      "siteTitle" : "Spice | A sass library for tasty web interfaces"
    }

    obj.template = template;

    gulp.src('./app/views/'+template+'.html')
      .pipe(data(obj))
      .pipe(swig())
      .pipe(gulp.dest(dest))
  });

});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      css: './build/css',
      sass: './app'
    }))
    .pipe(minifyCSS())
});

gulp.task('copybuild',function(){
  gulp.src(['./build/**/*.*'])
    .pipe(gulp.dest('../spice-sass.github.io'))
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.html', ['frontEnd']);
  gulp.watch('app/**/*.scss', ['frontEnd']);
  gulp.watch('app/**/*.js', ['frontEnd']);
});

gulp.task('frontEnd', ['browserify', 'compass', 'static']);
gulp.task('default', ['browserify', 'compass', 'static', 'watch', 'server']);
gulp.task('publish',['static','copybuild']);