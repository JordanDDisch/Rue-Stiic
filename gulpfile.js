var gulp            =   require('gulp'),
    watch           =   require('gulp-watch'),
    gulpShopify     =   require('gulp-shopify-upload'),
    $                = require('gulp-load-plugins')(),
    sass             = require('gulp-sass'),
    autoprefixer     = require('gulp-autoprefixer'),
    flatten          = require('gulp-flatten'),
    clean            = require('gulp-clean'),
    del              = require('del'),
    minifyCSS        = require('gulp-minify-css'),
    include          = require('gulp-include'),
    browserSync      = require('browser-sync'),
    concat           = require('gulp-concat'),
    path             = require('path');

// Build styleguide.
gulp.task('styleguide', ['clean:styleguide'], $.shell.task([
        // kss-node [source folder of files to parse] [destination folder] --template [location of template files]
        'kss-node <%= source %> <%= destination %> --template <%= template %> --helpers <%= helpers %> ' +
        '--css css/styles.css ' +
        '--js js/jquery-2.2.0.min.js ' +
        '--js js/components.js'
    ], {
        templateData: {
            source:       'scss',
            destination:  '.',
            template:     'node_modules/kss/generator/handlebars/template',
            helpers: "helpers"
        }
    }
));


// Clean styleguide directory.
gulp.task('clean:styleguide', del.bind(null, ['styleguide/*.html', 'public'], {force: true}));


gulp.task('clean-css', function () {
    return gulp.src('styleguide/css', {read: false})
        .pipe(clean());
});

// Static server
gulp.task('watch', ['styles', 'scripts', 'styleguide'], function() {
    browserSync({
        server: {
            baseDir: "."
        }
    });

    gulp.watch(['scss/**/*.scss'], ['styles']);

    gulp.watch(['scss/**/*.html'], ['styleguide', browserSync.reload]);

    gulp.watch(['scss/components/**/*.js'], ['scripts', browserSync.reload]);

});

gulp.task('styles', function() {
    return gulp.src('scss/style.scss')
        .pipe(include())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets')).pipe(browserSync.reload({stream: true}));
});

gulp.task('default', function(){
    gulp.start('styleguide', 'styles');
});

gulp.task('scripts', function() {
    return gulp.src(['scss/components/**/*.js'])
        .pipe(concat('components.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('shopify', function() {
    return watch('./+(assets|layout|config|snippets|templates|locales)/**')
        .pipe(gulpShopify('2b69a48b44c59a48f79b11ed36362f6f', 'e9ca2a5c51bcb09a58984bf572616b55', 'rue-stiic.myshopify.com', '81830017'));
});

gulp.task('deploy', ['build'], function() {  
  return gulp.src('./+(assets|layout|config|snippets|templates|locales)/**')
    .pipe(gulpShopify('API KEY', 'PASSWORD', 'MYSITE.myshopify.com', 'THEME ID'));
;
});
