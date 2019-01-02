const { dest, src } = require('gulp');
const gulpif = require('gulp-if');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const rename = require('gulp-rename');
const stripDebug = require('gulp-strip-debug');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();
const { js_source, js_dest, js_main } = require('./task-config')

function js(done) {
    browserify({
        entries: [js_source + js_main]
    })
        .transform(babelify, { presets: ['@babel/preset-env'] })
        .bundle()
        .pipe(source(js_main))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(buffer())
        // .pipe(gulpif(options.has('production'), stripDebug()))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(js_dest))
        .pipe(browserSync.stream());
    done();
};

module.exports = js;