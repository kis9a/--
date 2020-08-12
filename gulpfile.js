const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('d', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true,
        minifyCSS: true,
    }))
    .pipe(gulp.dest('./dist/'))
})
