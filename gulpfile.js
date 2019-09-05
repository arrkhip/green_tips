'use strict';

const gulp = require('gulp');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');
const browserSync = require('browser-sync').create();


gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([
			autoprefixer({browsers: ["last 10 version"]})
		]))
    .pipe(cssbeautify({
      indent: '  '
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ 
			stream: true
		})); 
});


gulp.task('serve', function() {
  browserSync.init({
    server: '.',
    port: 8080
  });

  gulp.watch("./**/*.sass").on('change', gulp.series('sass'));
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass','serve'));


