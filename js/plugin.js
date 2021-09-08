
var map, layer1;
function init() {

    //map object instantation 
    map = L.map("map",      
    {center:[39.47, -0.376389],
    zoom:12});

    //a basic layer for the map
    layer1 = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
    maxZoom : 19,
    minZoom : 1,
    attribution : "OSM"
    }).addTo(map);

    //variable to instantiate the Leaflet plugin 
    var osmGeocoder = new L.Control.osmGeocoder({placeholder: 'search location...'});
    map.addControl(osmGeocoder);


}