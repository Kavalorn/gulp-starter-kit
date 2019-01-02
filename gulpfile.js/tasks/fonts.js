const { src, dest } = require('gulp');
const { fonts_dest, fonts_source } = require('./task-config');

function fontsTask(done) {
    src(fonts_source)
        .pipe(dest(fonts_dest));

    done();
};

module.exports = fontsTask;