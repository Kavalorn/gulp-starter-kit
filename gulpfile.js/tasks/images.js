const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const { images_dest, images_watch } = require('./task-config');

function images(done) {
    src(images_watch)
        .pipe(dest(images_dest))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imageminPngquant({ quality: '80' }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ]))
        .pipe(dest(images_dest));

    done();
};


module.exports = images;