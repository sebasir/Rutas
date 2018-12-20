var map;

function initialize() {
    var latlng = getLatLngFromCoords(4.7033871, -74.0536078);
    var mapOptions = {
        zoom: 15,
        center: latlng,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var html = document.getElementById('cardTemplate').innerHTML;
    console.log(html);

    addCustomMarker("MyMarker", getLatLngFromCoords(4.7033871, -74.0536078), Icons.schoolBus, '#437bbf', html);
}

function getLatLngFromCoords(latitude, longitude) {
    return new google.maps.LatLng(latitude, longitude);
}

function getLatLngFromQuery(query) {
    return null;
}

function addCustomMarker(tittle, position, markerIcon, markerColor, infoWindowText) {
    var iconMarker = {
        path: SvgPaths.defaultMarker,
        strokeColor: markerColor,
        fillColor: markerColor,
        fillOpacity: 1.0,
        scale: 0.11,
        anchor: new google.maps.Point(200, 512),
        labelOrigin: new google.maps.Point(markerIcon.labelOrigin.x, markerIcon.labelOrigin.y)
    };

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: iconMarker,
        label: {
            fontFamily: "'Font Awesome 5 Free",
            fontWeight: '900',
            fontSize: markerIcon.fontSize,
            text: markerIcon.text,
            color: markerIcon.color
        }
    });

    if (infoWindowText) {
        var infowindow = new google.maps.InfoWindow({
            content: infoWindowText
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }
}