1. Cách cài gulp pug
- npm install gulp -g 

C:\User> mkdir pug_example
C:\User> cd pug_example
C:\User\pug_example> mkdir src
C:\User\pug_example> cd src
C:\User\pug_example\src> mkdir templates
C:\User\pug_example\src> cd ..

- Tạo package.json: npm init 
- Tạo index.pug trong thư mục src/templates

- Using gulp
npm install gulp --save-dev
npm install gulp-pug --save-dev

- Tạo file gulpfile.js 
var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src('src/templates/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('html5')); 
});

- Run: gulp pug

2. Cách cài SASS
- Cài đặt
npm install gulp-sass --save-dev
npm install gulp-html-beautify

- Thay đổi gulpfile.js với nội dung như trong bài.
- Tạo thư mục sass và file style.scss trong thư mục này
- Link đến css trong index.pug với nội dung như sau 
link(rel='stylesheet', href='../css/style.css')
- run: gulp sass

Tài liệu tham khảo
https://codepen.io/mgmarlow/post/using-jade-with-gulp
https://www.npmjs.com/package/gulp-sass
