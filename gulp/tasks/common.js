var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

gulp.task('default', [
    'watch',
    'server'
]);

gulp.task('build', ['clean'],  function(cb) {
    runSequence(
        'iconfont',
        'imagemin',
        'sass',
        'html',
        'scripts',
        'copy',
        'map'
    );
    cb();
});

gulp.task('watch', [
    'sass:watch',
    'iconfont:watch',
    'imagemin:watch',
    'scripts:watch',
    'html:watch',
    'map:watch'
]);
