var gulp, gutil, source, browserify, server, gutil, source,
  watchify, jscs, jshint, stylish;

gulp = require('gulp');
gutil = require('gutil');
source = require('vinyl-source-stream');
browserify = require('browserify');
watchify = require('watchify');
jscs = require('gulp-jscs');
jshint = require('gulp-jshint');
stylish = require('jshint-stylish');

gulp.task('default', ['lint']);

gulp.task('lint', ['jscs', 'jshint']);

gulp.task('jscs', function () {
  gulp.src('./' /** insert src to lint */)
    .pipe(jscs());
});

gulp.task('jshint', function () {
  return gulp.src('./' /** insert src to lint */)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function() {
  var bundler = watchify(browserify('./' /** insert src to bundle */, watchify.args));

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js' /** file to dump to */))
      .pipe(gulp.dest('./dist' /** folder to place ^ in */));
  }

  return rebundle();
});
