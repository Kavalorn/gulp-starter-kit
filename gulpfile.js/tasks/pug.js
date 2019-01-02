const pug = require('gulp-pug');
const { src, dest } = require('gulp');
const { pug_source, pug_dest } = require('./task-config');

function pugTask(done) {
    src(pug_source)
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest(pug_dest));

    done();
}

module.exports = pugTask;