var gulp = require('gulp');
var smushit = require('gulp-smushit');

gulp.task('smushit', function () {
    return gulp.src('images/*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('smushit-images'));
});
gulp.task('default',['smushit']);
