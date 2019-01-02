const source = './src';
const destination = './dist';
const deploy = {
    host: "",
    user: "",
    pass: ""
}

module.exports = {
    css_source: source + '/sass/*.sass',
    css_dest: destination + '/css/',

    js_source: source + '/js/',
    js_main: 'main.js',
    js_dest: destination + '/js/',

    images_source: source + '/assets/images/**/*',
    images_dest: destination + '/assets/images/',

    fonts_source: source + '/assets/fonts/**/*',
    fonts_dest: destination + '/assets/fonts/',

    pug_source: source + '/pug/*.pug',
    pug_dest: destination + '/',

    css_watch: source + '/sass/**/*.sass',
    js_watch: source + '/js/**/*.js',
    images_watch: source + '/assets/images/**/*.*',
    icons_watch: source + '/assets/icons/**/*.*',
    fonts_watch: source + '/assets/fonts/**/*.*',
    pug_watch: source + '/**/*.pug',

    destination: destination,
    deploy: deploy
}
