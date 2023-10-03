const gulp = require('gulp');
const series = gulp.series;
const parallel = gulp.parallel;

const { appHTML, appCSS, appJS, appImg } = require('./gulpTasks/app.js');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor.js');


module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appImg),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)