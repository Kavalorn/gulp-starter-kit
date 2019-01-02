const { src } = require('gulp');
const clean = require('gulp-clean');
const { destination } = require('./task-config');

function cleanTask(done) {
    src(destination, { read: false, allowEmpty: true }).pipe(clean());
    done();
};

module.exports = cleanTask;