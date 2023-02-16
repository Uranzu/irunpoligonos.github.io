var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PoligonosIrun_recortado_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Poligonos Irun_recortado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PoligonosIrun_recortado_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-204317.060300, 5361233.173100, -194961.345900, 5365532.374300]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_PoligonosIrun_recortado_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PoligonosIrun_recortado_1];
