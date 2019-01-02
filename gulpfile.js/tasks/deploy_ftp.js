const { src } = require('gulp');
const ftp = require('gulp-ftp');
const deploy = require('./task-config').deploy;

function deploy_ftp(done) {
    src('dist/**/*')
        .pipe(ftp({
            host: deploy.host,
            user: deploy.user,
            pass: deploy.pass
        }));
    done();
};

module.exports = deploy_ftp;