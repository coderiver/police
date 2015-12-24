var gulp        = require('gulp');
var iconfont    = require('gulp-iconfont');
var svgmin      = require('gulp-svgmin');
var fs          = require('fs');
var config      = require('../config');
var cheerio     = require('gulp-cheerio');
var pathToMap   = config.src.root + '/map/map-ukraine.svg';

gulp.task('map', function() {
    fs.readFile(config.src.root + '/map/regions.json', 'utf-8', function(err, data) {
        if (err) {
            config.errorHandler(err);
            return;
        }
        makeMap(
            JSON.parse(data)
        );
    });
});

gulp.task('map:watch', function() {
    gulp.watch([
        config.src.root + '/map/map-ukraine.svg',
        config.src.root + '/map/regions.json'
    ], ['map']);
});

function makeMap(regions) {
    gulp.src(pathToMap)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDesc: true
            }, {
                cleanupIDs: false
            }, {
                mergePaths: false
            }]
        }))
        .pipe(cheerio({
            run: function($, file) {
                var paths = $('#map-canvas > path');
                var dots  = $('#cities > circle');
                // read state from regions array
                var state = regions.reduce(function(prev, next) {
                    prev[next.id] = next.active;
                    return prev;
                }, {});
                // remove dims
                $('svg').removeAttr('width').removeAttr('height');
                // regions id's to lowercase and
                // add inactive class to regions who is currently not needed
                paths.add(dots).each(function(index, el) {
                    var $el = $(el);
                    var elID = $el.attr('id').toLowerCase();
                    $el.attr('id', elID);
                    if (!state[elID]) {
                        $el.addClass('inactive');
                    }
                });
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(gulp.dest(config.dest.img));
}
