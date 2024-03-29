const { series } = require('gulp');
const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformaSass(cb) {
	return gulp
		.src('src/sass/index.scss')
		.pipe(sass())
		.pipe(
			uglifycss({
				uglyComments: true,
			})
		)
		.pipe(concat('estilo.min.css'))
		.pipe(gulp.dest('build/css'));
}

function exportarArquivos(cb) {
	return gulp.src('src/*.html').pipe(gulp.dest('build'));
}

exports.default = series(transformaSass, exportarArquivos);
