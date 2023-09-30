const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const series = gulp.series;

function transformarJS(cb) {
	return gulp
		.src('src/**/*.js')
		.pipe(
			babel({
				comments: false,
				presets: ['env'],
			})
		)
		.pipe(uglify())
		.on('error', (erro) => console.log(erro))
		.pipe(concat('codigo.min.js'))
		.pipe(gulp.dest('build'));
}

function fim(cb){
    console.log("ACABOU")
    return cb()
}
	
exports.default = series(transformarJS , fim);
