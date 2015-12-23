var mapContainer = $('#mapUkraine');

var regions = [
    {
        name: 'Vinnytsia',
        id: 'vinnytsia',
        active: true
    },
    {
        name: 'Dnipropetrovsk',
        id: 'dnipropetrovsk',
        active: true
    },
    {
        name: 'Donetsk',
        id: 'donetsk',
        active: true
    },
    {
        name: 'Zhytomyr',
        id: 'zhytomyr',
        active: true
    },
    {
        name: 'Zaporizhzhia',
        id: 'zaporizhzhia',
        active: true
    },
    {
        name: 'Ivano-Frankivsk',
        id: 'ivano-Frankivsk',
        active: true
    },
    {
        name: 'Kyiv',
        id: 'kyiv',
        active: true
    },
    {
        name: 'Kirovohrad',
        id: 'kirovohrad',
        active: true
    },
    {
        name: 'Luhansk',
        id: 'luhansk',
        active: true
    },
    {
        name: 'Lutsk',
        id: 'lutsk',
        active: true
    },
    {
        name: 'Lviv',
        id: 'lviv',
        active: true
    },
    {
        name: 'Mykolaiv',
        id: 'mykolaiv',
        active: true
    },
    {
        name: 'Odesa',
        id: 'odesa',
        active: true
    },
    {
        name: 'Poltava',
        id: 'poltava',
        active: true
    },
    {
        name: 'Rivne',
        id: 'rivne',
        active: true
    },
    {
        name: 'Sevastopol',
        id: 'sevastopol',
        active: true
    },
    {
        name: 'Simferopol',
        id: 'simferopol',
        active: true
    },
    {
        name: 'Sumy',
        id: 'sumy',
        active: true
    },
    {
        name: 'Ternopil',
        id: 'ternopil',
        active: true
    },
    {
        name: 'Uzhhorod',
        id: 'uzhhorod',
        active: true
    },
    {
        name: 'Kharkiv',
        id: 'kharkiv',
        active: true
    },
    {
        name: 'Kherson',
        id: 'kherson',
        active: true
    },
    {
        name: 'Khmelnytskyi',
        id: 'khmelnytskyi',
        active: true
    },
    {
        name: 'Cherkasy',
        id: 'cherkasy',
        active: true
    },
    {
        name: 'Chernivtsi',
        id: 'chernivtsi',
        active: true
    },
    {
        name: 'Chernihiv',
        id: 'chernihiv',
        active: true
    }
];

var MapUkraine = (function() {
    function MapUkraine(container, url) {
        this.container = container;
        this.url       = url;
        this.svg       = null;
        this.regions   = regions;

        this.render();
        console.log(this);
    }

    MapUkraine.prototype._load = function() {
        return $.ajax({
            url: this.url,
            method: 'GET',
            success: function(data) {
                this.svg = $(data.firstElementChild);
                console.log(data);
            }.bind(this)
        });
    };

    MapUkraine.prototype._optimizeSvg = function() {
        this.svg.removeAttr('width').removeAttr('height');
    };

    MapUkraine.prototype._bindEvents = function() {
        thissvg.find('#map > path')
            .attr('fill', 'white')
            .css({
                transition: 'fill 0.3s ease',
                cursor: 'pointer'
            })
            .mouseenter(function(event) {
                var path = $(this);
                var dot = svg.find('#sities-dots #' + this.id);
                path.attr('fill', '#D9DEE7');
                console.log(dot);
                dot.css('opacity', 1);
            })
            .mouseleave(function(event) {
                var path = $(this);
                var dot = svg.find('#sities-dots #' + this.id);
                $(this).attr('fill', 'white');
                dot.css('opacity', 0);
            });
    }

    MapUkraine.prototype.render = function() {
        var self = this;
        self._load().then(function() {
            self._optimizeSvg();
            self.container.append(self.svg);
        });
    };

    return MapUkraine;
})();

if (mapContainer.length) {
    new MapUkraine(mapContainer, '../img/svg/map-ukraine.svg');
}
