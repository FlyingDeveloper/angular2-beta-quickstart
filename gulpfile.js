var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('reload', function() {
	gulp.src("src/**/*.html")
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(["src/**/*.html", "src/**/*.js"], ['reload']);
});