const { watch, series } = require('gulp');
const js = require('./js');
const pug = require('./pug');
const sass = require('./sass');
const browserSync = require('browser-sync').create();
const { destination, js_watch, css_watch, css_dest, pug_watch, js_dest, pug_dest } = require('./task-config');



function watchTask(done) {
    browserSync.init({
        server: destination
    }),
        watch(css_watch, sass),
        watch(pug_watch, pug),
        watch(js_watch, js),
        watch('dist/*.html').on('change', browserSync.reload),
        watch('dist/js/*.js').on('change', browserSync.reload),
        watch('dist/css/*.css').on('change', browserSync.reload),

        done();
}

module.exports = watchTask



