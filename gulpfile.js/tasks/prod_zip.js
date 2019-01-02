const { src, dest } = require('gulp');
const zip = require('gulp-zip');
const { destination } = require('./task-config')

function prod_zip(done) {
    src(destination + '/**/*')
        .pipe(zip('dist.zip'))
        .pipe(dest('.'));

    done();
};

module.exports = prod_zip;