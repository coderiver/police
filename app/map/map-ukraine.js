var mapContainer = $('#mapUkraine');
var REGION_ENTER = 'mapRegionEnter';
var REGION_LEAVE = 'mapRegionLeave';

var MapUkraine = (function() {
    function MapUkraine(container, url) {
        this.container = container;
        this.url       = url;
        this.svg       = null;
        this.marker    = null;
        // this.regions   = require('./regions.json');

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
        self.svg.find('#map-canvas > path')
            .mouseenter(function(event) {
                region = $(this);
                if (region.attr('class') === 'inactive') {
                    region = city = cityPos = null;
                    return;
                }
                city = self.svg.find('#cities #' + this.id);
                region.add(city).attr('class', 'hover');
                cityPos = {
                    x: +city.attr('cx') - 7,
                    y: +city.attr('cy') - 312
                };
                self.marker.attr('transform', 'translate(' + cityPos.x + ' ' + cityPos.y + ')');
                self.svg.trigger(REGION_ENTER, [
                    region.attr('id'),
                    cityPos
                ]);
            })
            .mouseleave(function(event) {
                if (!region) return;
                region.add(city).attr('class', '');
                self.svg.trigger(REGION_LEAVE, [
                    region.attr('id')
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
    new MapUkraine(mapContainer, '../img/map-ukraine.svg');
}
