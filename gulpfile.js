'use strict';

var gulp       = require('gulp');
var fs         = require('fs');
var browserify = require('gulp-browserify');
var babelify   = require("babelify");
var uglify     = require('gulp-uglify');
var compass    = require('gulp-compass');
var minifyCSS  = require('gulp-minify-css');
var server     = require('gulp-express');
var flatten    = require('gulp-flatten');
var swig       = require('gulp-swig');
var data       = require('gulp-data');
var stripDebug = require('gulp-strip-debug');

var getJsonData = function(file) {
  return require(file + '.json');
};

gulp.task('server', function () {
    server.run(['server.js']);
    gulp.watch(['./build/**/*.*'], server.notify);
});

gulp.task('html', function () {
  gulp.src('./app/views/**/*.html, ./app/components/**/*.html',{base: './app'})
    .pipe(flatten())
    .pipe(gulp.dest('./build/views'));  
});

gulp.task('browserify', function () {
  gulp.src(['./app/home.js', './app/docs.js', './app/examples.js'], {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jsMin', function () {
  gulp.src(['./app/home.js', './app/docs.js', './app/examples.js'], {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('static', function() {

  var templates = [
    "index",
    "documentation",
    "examples"
  ]

  var examplesPath = './app/views/examples';
  var exampleList  = fs.readdirSync(examplesPath);

  exampleList.forEach(function(example){

    if(example != '.DS_Store'){
      templates.push('/examples/'+example+'/'+example);
    }
  });

  templates.forEach(function(template){

    var dest = (template.indexOf('examples/') > -1) ? './build/examples': './build/';
    var obj = {
      "docs" : getJsonData('./build/api/includes'),
      "version" : getJsonData('../spice/package').version, // Requires spice repo to be cloned to the same directory
      "siteTitle" : "Spice | A sass library for tasty web interfaces"
    }

    obj.template = template;

    gulp.src('./app/views/'+template+'.twig')
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
});

gulp.task('cssMin', function() {
  gulp.src('./build/css/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css'))
});

gulp.task('copybuild', ['static','jsMin','cssMin'], function(){
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
gulp.task('publish',['copybuild']);