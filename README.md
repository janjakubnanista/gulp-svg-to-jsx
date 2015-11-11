# gulp-svg-to-jsx

This is a [gulp](http://gulpjs.com/) wrapper for [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx) package.
Please see `svg-to-jsx` documentation for options and usage.

## Installation

`gulp-svg-to-jsx` is a node module. To install you have to have Node.js and NPM installed on your machine.

	npm install gulp-svg-to-jsx

## Usage

The basics of using `gulp` are covered [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). To use `gulp-svg-to-jsx` simply pipe the SVG file stream in:

	var gulp = require('gulp');
	var svgToJsx = require('gulp-svg-to-jsx');

	// See docs for svg-to-jsx for info on options
	// You can also skip passing options to use defaults
	var options = {};

	gulp.task('svg', function() {
		return gulp.src('svg/*.svg')
			.pipe(svgToJsx(options))
			.pipe(gulp.dest('build/jsx'));
	});
