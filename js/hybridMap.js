

var map, point1, point2, point3, point4, point5; // basic Leaflet map variables declaration
var osm;         // leaflet map default basemap
var controlCapas, controlEscala; // leaflet map with controls variable declaration

function init () {      //init function
    map = L.map("map",      //map object instantation 
    {center:[39.47, -0.376389],
    zoom:12});
    
    //BASEMAP layers instantiation; leaflet providers: "https://leaflet-extras.github.io/leaflet-providers/preview/"
    
    /* BASEMAP OPTION 1 OSM
    osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
        }).addTo(map); */
 
    //BASEMAP OPTION 2  
    var Stamen_TonerHybrid = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(map);

    var Esri_WorldImagery =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    var hybridMap = L.layerGroup();

    var Esri_WorldImagery2 =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(hybridMap);
    
    var Stamen_TonerHybrid2 = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(hybridMap);

    //parameters
    var baseMaps = {
        "Stamen Toner":Stamen_TonerHybrid,
        "ESRI - World Imagery" : Esri_WorldImagery,
        "Hybrid" : hybridMap,
    };

    //layer groups of points of interest
    
    var downtown = L.marker([39.474778, -0.376667]).bindPopup('Valencia Downtown'),      //declaring a simple marker
    river = L.marker([39.474573, -0.366846]).bindPopup('River Turia');
    
    var townLandmarks = L.layerGroup([downtown, river]);

    var railway = L.circleMarker([39.467075, -0.377238],{        //declaring a round marker 
        color: '#ffffff',       
        fillColor: '#00ff00',
        fillOpacity: 0.9,
        radius: 10
    }).bindPopup('Estació del Nord - Main Railway Station');
    var harbor = L.circleMarker([39.455915, -0.326534],
    {
        color: '#ffffff',       
    fillColor: '#00ff00',
    fillOpacity: 0.9,
    radius: 10,
    }).bindPopup('El Grau - Travel Harbour and Marina');

    var airport = L.circleMarker([39.491411, -0.477013],
    {
        color: '#ffffff',       
    fillColor: '#00ff00',
    fillOpacity: 0.9,
    radius: 10
    }).bindPopup('Manises Airport');
    
    var transport = L.layerGroup([railway,harbor, airport]);

    var overlayMaps = {
        "Points of Interest" : townLandmarks,
        "Transportation" : transport
    };

    controlCapas = L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

    controlEscala = L.control.scale().addTo(map);


    
};