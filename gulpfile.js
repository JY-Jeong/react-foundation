var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var webpackConfigExamples = require('./webpack.config.examples.js');

gulp.task('build', function() {
  return gulp.src('./src/app.js')
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest('build/'));
});

gulp.task('examples', function() {
  return gulp.src('./examples/app.js')
      .pipe(webpack(webpackConfigExamples))
      .pipe(gulp.dest('./examples/build/'));
});
 
gulp.task('default', ['build']);