$(document).ready(function(){
  var map = new L.Map('map', {
        center: [48.42, 11.07],
        zoom: 10
    });
    L.tileLayer('http://localhost/osm_tiles/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});
