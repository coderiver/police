var mapContainer = $('#mapUkraine');
var mapInstance = null;

var MapUkraine = (function() {
    var REGION_ENTER   = 'mapRegionEnter';
    var REGION_LEAVE   = 'mapRegionLeave';
    var REGION_CHANGE  = 'mapRegionChange';
    var MARKER_SIZE    = [36, 48];
    var POS_CORRECTION = [2, 15];

    function parseSVGTransform(str) {
        var match = str.match(/\d+\s\d+/);
        var res   = [0, 0];
        if (match) {
            res = match[0].split(' ').map(function(val) {
                return +val;
            });
        }
        return res;
    }

    function MapUkraine(container, url) {
        this.container = container;
        this.url       = url;
        this.svg       = null;
        this.marker    = null;

        this.render();
    }

    MapUkraine.prototype._load = function() {
        return $.ajax({
            url: this.url,
            method: 'GET',
            success: function(data) {
                this.svg = $(data.firstElementChild);
                this.marker = this.svg.find('#map-marker');
            }.bind(this)
        });
    };

    MapUkraine.prototype._bindEvents = function() {
        var self = this;
        var region;
        var city;
        var cityPos;
        var markerPos;

        var shift = parseSVGTransform(
            self.svg.find('#cities').attr('transform')
        );

        self.svg.find('#map-canvas > path')
            .click(function(event) {
                var current      = $(this);
                var currentClass = current.attr('class');

                if (currentClass === 'inactive' || currentClass === 'active') {
                    return;
                }

                if (region) {
                    region.add(city).attr('class', '');
                }

                region = current;

                city = self.svg.find('#cities #' + this.id);

                region.add(city).attr('class', 'active');
                self.marker.attr('class', 'active');

                cityPos = [
                    +city.attr('cx') + shift[0],
                    +city.attr('cy') + shift[1]
                ];

                markerPos = [
                    cityPos[0] - MARKER_SIZE[0] / 2 - POS_CORRECTION[0],
                    cityPos[1] - MARKER_SIZE[1] - POS_CORRECTION[1]
                ];

                self.marker.attr(
                    'transform',
                    'translate(' + markerPos[0] +  ' ' + markerPos[1] + ')'
                );

                self.svg.trigger(REGION_CHANGE, [
                    region.attr('id'),
                    cityPos
                ]);
            });
    };

    MapUkraine.prototype.render = function() {
        var self = this;
        self._load().then(function() {
            self._bindEvents();
            self.container.append(self.svg);
        });
    };

    return MapUkraine;
})();

if (mapContainer.length) {
    mapInstance = new MapUkraine(mapContainer, '../img/map-ukraine.svg');
}

module.exports = mapInstance;
