var gulp = require("gulp"),
	browserSync = require("browser-sync");

gulp.task ('server', function () {
	browserSync ({
		port: 9000,
		server: {
			baseDir: 'site'
		}
	});
});

gulp.task ('watch', function () {
	gulp.watch ([
		'site/*.html',
		'site/js/**/*.js',
		'site/css/**/*.css'
	]).on ('change', browserSync.reload);
});

gulp.task ('default', ['server', 'watch']);