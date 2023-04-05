const gulp = require('gulp');
const {series} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');

gulp.task('cleanCss', function(){
    return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/'))
});

gulp.task('minizeJS', function(){
    return gulp.src('src/*.js')
    .pipe(minifyJS())
    .pipe(gulp.dest('dist/'));
});

exports.default = series('cleanCss', 'minizeJS');
