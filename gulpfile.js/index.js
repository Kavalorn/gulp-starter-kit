const { series, task, parallel } = require('gulp');
const { sass, clean, js, images, pug, watch, fonts, prod_zip } = require('./tasks');


task("sass", sass);
task('clean', clean);
task("js", js);
task("images", images);
task("pug", pug);
task("watch", watch);
task("fonts", fonts);
task("zip", prod_zip);
task("build", series(
    parallel(sass, js, images, pug, fonts)
))