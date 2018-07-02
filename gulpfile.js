'use strict'

const gulp	= require('gulp');
const sass	= require('gulp-sass');
const ts		=	require('gulp-typescript');
const browserSync	= require('browser-sync').create();

let tsProject = ts.createProject({
	removeComments:	true,
	noImplicitAny:	true,
	target:	'ES3',
	module:	'commonjs',
	declarationFiles:	false,
});

gulp.task('tsc', () => {
	return gulp.src('src/ts/**/*.ts')
						 .pipe(tsProject())
						 .js.pipe(gulp.dest('static/js/'));
});

gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.+(scss|sass)')// Gets all files ending with .scss and .sass in app/scss and children dirs
		   .pipe(sass().on('error', function(err) {
			   sass.logError(err);
		   })) // Convert Sass to CSS with gulp-sass
		   .pipe(gulp.dest('static/css/'));
		//    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
	browserSync.init(
	{
		server:
		{
			baseDir: './',
			index: 'index.html'
		},
		notify: false
	});
});

gulp.task('watch', ['tsc', 'sass', 'browserSync'], function() {
	gulp.watch('src/scss/**/*.+(scss|sass)', ['sass']);
	gulp.watch('src/ts/**/*.ts', ['tsc']);
	// Reloads the browser whenever HTML,CSS or JS files change
	gulp.watch('static/css/**/*.css', browserSync.reload);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('static/js/**/*.js', browserSync.reload);
});

gulp.task('default',['watch']);
