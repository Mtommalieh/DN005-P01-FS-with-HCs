ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([5721678.839814, 2926135.263596, 5723126.404332, 2926881.292200]);
var wms_layers = [];


        var lyr_Googlesattelitemaps_0 = new ol.layer.Tile({
            'title': 'Google sattelite maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_fs_layout_1 = new ol.format.GeoJSON();
var features_fs_layout_1 = format_fs_layout_1.readFeatures(json_fs_layout_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fs_layout_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fs_layout_1.addFeatures(features_fs_layout_1);
var lyr_fs_layout_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fs_layout_1, 
                style: style_fs_layout_1,
                popuplayertitle: "fs_layout",
                interactive: true,
                title: '<img src="styles/legend/fs_layout_1.png" /> fs_layout'
            });
var format_mh_names_2 = new ol.format.GeoJSON();
var features_mh_names_2 = format_mh_names_2.readFeatures(json_mh_names_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mh_names_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mh_names_2.addFeatures(features_mh_names_2);
var lyr_mh_names_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mh_names_2, 
                style: style_mh_names_2,
                popuplayertitle: "mh_names",
                interactive: true,
                title: 'mh_names'
            });
var format_plot_boundries_and_road_layout_3 = new ol.format.GeoJSON();
var features_plot_boundries_and_road_layout_3 = format_plot_boundries_and_road_layout_3.readFeatures(json_plot_boundries_and_road_layout_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot_boundries_and_road_layout_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot_boundries_and_road_layout_3.addFeatures(features_plot_boundries_and_road_layout_3);
var lyr_plot_boundries_and_road_layout_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot_boundries_and_road_layout_3, 
                style: style_plot_boundries_and_road_layout_3,
                popuplayertitle: "plot_boundries_and_road_layout",
                interactive: true,
                title: '<img src="styles/legend/plot_boundries_and_road_layout_3.png" /> plot_boundries_and_road_layout'
            });
var format_plot_numberroad_name_4 = new ol.format.GeoJSON();
var features_plot_numberroad_name_4 = format_plot_numberroad_name_4.readFeatures(json_plot_numberroad_name_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot_numberroad_name_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot_numberroad_name_4.addFeatures(features_plot_numberroad_name_4);
var lyr_plot_numberroad_name_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot_numberroad_name_4, 
                style: style_plot_numberroad_name_4,
                popuplayertitle: "plot_number & road_name",
                interactive: true,
                title: 'plot_number & road_name'
            });
var format_small_mhs__5 = new ol.format.GeoJSON();
var features_small_mhs__5 = format_small_mhs__5.readFeatures(json_small_mhs__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_small_mhs__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_small_mhs__5.addFeatures(features_small_mhs__5);
var lyr_small_mhs__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_small_mhs__5, 
                style: style_small_mhs__5,
                popuplayertitle: "small_mhs_",
                interactive: true,
                title: '<img src="styles/legend/small_mhs__5.png" /> small_mhs_'
            });

lyr_Googlesattelitemaps_0.setVisible(true);lyr_fs_layout_1.setVisible(true);lyr_mh_names_2.setVisible(true);lyr_plot_boundries_and_road_layout_3.setVisible(true);lyr_plot_numberroad_name_4.setVisible(true);lyr_small_mhs__5.setVisible(true);
var layersList = [lyr_Googlesattelitemaps_0,lyr_fs_layout_1,lyr_mh_names_2,lyr_plot_boundries_and_road_layout_3,lyr_plot_numberroad_name_4,lyr_small_mhs__5];
lyr_fs_layout_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_mh_names_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_plot_boundries_and_road_layout_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_plot_numberroad_name_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_small_mhs__5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_fs_layout_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_mh_names_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_plot_boundries_and_road_layout_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_plot_numberroad_name_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_small_mhs__5.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_fs_layout_1.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_mh_names_2.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'no label', });
lyr_plot_boundries_and_road_layout_3.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_plot_numberroad_name_4.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'no label', });
lyr_small_mhs__5.set('fieldLabels', {'fid': 'no label', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_small_mhs__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});