var gulp = require('gulp'),
    pug = require('gulp-pug'),
    htmlbeautify = require('gulp-html-beautify');

var sass = require('gulp-sass');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {
    return gulp.src('src/templates/**/*.pug')
        .pipe(pug()) // pip to pug plugin
        .pipe(gulp.dest('html5')); // tell gulp our output folder
});

gulp.task('htmlbeautify', function() {
  var options = {
    indentSize: 2
  };
  gulp.src('html5/**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('html5'))
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.pug', ['pug']);
    gulp.watch('sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'pug', 'htmlbeautify', 'watch']);
