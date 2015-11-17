var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  
  gulp.src(['./assets/*', '!./assets/js'])
    .pipe(gulp.dest('./.tmp/public'));
});