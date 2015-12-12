var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var postcsssvg   = require('postcss-svg');
var autoprefixer = require('autoprefixer');
var assets       = require('postcss-assets');
var config       = require('../config');

var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    postcsssvg({
        paths: [
            config.src.img,
            config.src.img + '/svg'
        ]
    }),
    assets({
        loadPaths: [
            config.src.img
        ]
    })
];

gulp.task('sass', function() {
    return gulp
        .src(config.src.sass + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
            precision: 5
        }))
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});
