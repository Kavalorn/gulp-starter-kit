const { dest, src, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const { css_source, css_dest } = require('./task-config');





function sassTask(done) {
    src(css_source)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(dest(css_dest))
        .pipe(browserSync.stream());

    done();
}

module.exports = sassTask;