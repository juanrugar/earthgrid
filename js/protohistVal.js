

var layerSites;
var urlSites ="data/coput_protohistVAL.geojson";


function addSiteData() {

    //cluster group variable
    var ptsCluster = L.markerClusterGroup();

    layerSites = new L.GeoJSON.AJAX(urlSites, {
        onEachFeature: function(feature, layer) {
            popupContent = "<b>" + feature.properties.calle + "</b>" + 
            "<br>"+
            "<b>, </b>"+
            "<b>" + feature.properties.codigo + "</b>";
            layer.bindPopup(popupContent);   
        },
        pointToLayer: function (feature, latlng) {
            ptsCluster.addLayer(L.marker(latlng));
            return L.circleMarker(latlng, {
                radius:6,
                fillColor: "#00ff00",
                color:"#ffffff",
                weight: 3,
                opacity:1,
                fillOpacity:0.8
            });
        }
    }).addTo(map);

    map.setView([39.47, -0.376389], 11);

    controlCapas.addOverlay(layerSites, "Arch Sites");
    controlCapas.addOverlay(ptsCluster, "Cluster");

    //Instance of Control.Search
    var searchControl =  new L.Control.Search({
        layer: layerSites,
        initial: false,
        propertyName: 'calle',
        circleLocation: true,
        moveToLocation: function (latlng){
            map.setView(latlng, 17);
        }
    });

    //
    searchControl.on('search:locationfound', function(e){
        e.layer.openPopup();
    });

    //adding the control to the map
    map.addControl(searchControl);



} //END OF FUNCTION