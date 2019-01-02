const { src } = require('gulp');
const sftp = require('gulp-sftp');
const deploy = require('./task-config').deploy;

function deploy_sftp(done) {
    src('dist/**/*')
        .pipe(sftp({
            host: deploy.host,
            user: deploy.user,
            pass: deploy.pass
        }));
    done();
};

module.exports = deploy_sftp;