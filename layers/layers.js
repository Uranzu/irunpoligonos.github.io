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
var lyr_PoligonosIrun_modificado2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Poligonos Irun_modificado2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PoligonosIrun_modificado2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-204335.701831, 5360811.408638, -194893.770443, 5365609.270615]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_PoligonosIrun_modificado2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PoligonosIrun_modificado2_1];
