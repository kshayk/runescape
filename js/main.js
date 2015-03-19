$(document).ready(function() {

  var southWest = new L.LatLng(-85, 180);
  var northEast = new L.LatLng(85, -180);
  bounds = new L.LatLngBounds(southWest, northEast);
  var map = L.map('map').setView([0, 0], 5);

  L.tileLayer('img/worldmap/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 6,
    clipTiles: true,
    attribution: 'Created by Micah Martin and Shay Kitslinger, all music and images belong to Jagex ltd.',
    tms: true,
    crs: L.CRS.Simple,
    continuousWorld:'true',
  }).addTo(map);
  map.setMaxBounds(bounds);
  L.marker([0,0]).addTo(map);

  function onEachFeature(feature, layer) {
    layer.on('click', function (e) {
      $("#iframe").attr('src', feature.properties.src);
    });
    layer.bindPopup(feature.properties.track);
    return false;
  };

  var areas = [{
    "type": "Feature",
    "properties": {"area": "Falador",
                   "src":"https://www.youtube.com/embed/k0wd7pAVR1M?autoplay=1",
                   "track":"Fanfare"},
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [5.5, 0],
        [5.5, 13],
        [-5.8, 13],
        [-5.8, 0]
      ]]
    }
  }, {
      "type": "Feature",
      "properties": {"area": "East Falador",
                     "src":"https://www.youtube.com/embed/t1M6KsUY3o8?autoplay=1",
                     "track":"Workshop"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [5.6,0],
          [5.6,13],
          [17.2,13],
          [17.2,0]
        ]]
      }
    }
    ];

    L.geoJson(areas, {
      style:{color: "#ff0000"},
      clickable: true,
      onEachFeature: onEachFeature
    }).addTo(map);
  });
