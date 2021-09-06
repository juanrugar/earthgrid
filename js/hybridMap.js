

var map, point1, point2, point3, point4, point5; // basic Leaflet map variables declaration
var osm;         // leaflet map default basemap
var controlCapas, controlEscala; // leaflet map with controls variable declaration

function init () {      //init function
    map = L.map("map",      //map object instantation 
    {center:[39.47, -0.376389],
    zoom:12});
    
    //BASEMAP layers instantiation; leaflet providers: "https://leaflet-extras.github.io/leaflet-providers/preview/"
    
    osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
        }).addTo(map);
 

    var Esri_WorldImagery =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    var hybridMap = L.layerGroup();

    osm2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
        }).addTo(hybridMap);
 

    var Esri_WorldImagery2 =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(hybridMap);
      
    //parameters
    var baseMaps = {
        "OpenStreetMap":osm,
        "Esri_WorldImagery" : Esri_WorldImagery,
        "Hybrid" : hybridMap,
    };

    
    controlCapas = L.control.layers(baseMaps, null, {collapsed:true}).addTo(map);

    controlEscala = L.control.scale().addTo(map);


    point1 = L.marker([39.474778, -0.376667]);      //declaring a simple marker
    point2 = L.marker([39.474573, -0.366846]);
    
    point3 = L.circleMarker([39.467075, -0.377238],{        //declaring a round marker 
    color: '#ffffff',       
    fillColor: '#00ff00',
    fillOpacity: 0.9,
    radius: 10
    });
    
    point4 = L.circleMarker([39.455915, -0.326534],
    {
        color: '#ffffff',       
    fillColor: '#00ff00',
    fillOpacity: 0.9,
    radius: 10
    });
    // 39.491411 -0.477013
    
    point5 = L.circleMarker([39.491411, -0.477013],
    {
        color: '#ffffff',       
    fillColor: '#00ff00',
    fillOpacity: 0.9,
    radius: 10
    });
    
    
    point1.addTo(map).bindPopup('Valencia Downtown'); //adding point to map
    point2.addTo(map).bindPopup('River Turia');
    point3.addTo(map).bindPopup('Estació del Nord - Main Railway Station');
    point4.addTo(map).bindPopup('El Grau - Travel Harbour and Marina');
    point5.addTo(map).bindPopup('Manises Airport');
};