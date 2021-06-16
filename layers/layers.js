var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionVillagran_3 = new ol.format.GeoJSON();
var features_CoordinacionVillagran_3 = format_CoordinacionVillagran_3.readFeatures(json_CoordinacionVillagran_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionVillagran_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionVillagran_3.addFeatures(features_CoordinacionVillagran_3);
var lyr_CoordinacionVillagran_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionVillagran_3, 
                style: style_CoordinacionVillagran_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionVillagran_3.png" /> Coordinacion Villagran'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionVILL1_5 = new ol.format.GeoJSON();
var features_MicroregionVILL1_5 = format_MicroregionVILL1_5.readFeatures(json_MicroregionVILL1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionVILL1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionVILL1_5.addFeatures(features_MicroregionVILL1_5);
var lyr_MicroregionVILL1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionVILL1_5, 
                style: style_MicroregionVILL1_5,
                interactive: false,
    title: 'Microregion VILL1<br />\
    <img src="styles/legend/MicroregionVILL1_5_0.png" /> 1 - 20 Personas<br />\
    <img src="styles/legend/MicroregionVILL1_5_1.png" /> 20 - 52 Personas<br />\
    <img src="styles/legend/MicroregionVILL1_5_2.png" /> 52 - 175 Personas<br />\
    <img src="styles/legend/MicroregionVILL1_5_3.png" /> 175 - 350 Personas<br />\
    <img src="styles/legend/MicroregionVILL1_5_4.png" /> 350 - 684 Personas<br />'
        });
var format_MicroregionSJR3_6 = new ol.format.GeoJSON();
var features_MicroregionSJR3_6 = format_MicroregionSJR3_6.readFeatures(json_MicroregionSJR3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSJR3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSJR3_6.addFeatures(features_MicroregionSJR3_6);
var lyr_MicroregionSJR3_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSJR3_6, 
                style: style_MicroregionSJR3_6,
                interactive: false,
    title: 'Microregion SJR3<br />\
    <img src="styles/legend/MicroregionSJR3_6_0.png" /> 2 - 24 Personas<br />\
    <img src="styles/legend/MicroregionSJR3_6_1.png" /> 24 - 75 Personas<br />\
    <img src="styles/legend/MicroregionSJR3_6_2.png" /> 75 - 135 Personas<br />\
    <img src="styles/legend/MicroregionSJR3_6_3.png" /> 135 - 331 Personas<br />\
    <img src="styles/legend/MicroregionSJR3_6_4.png" /> 331 - 544 Personas<br />'
        });
var format_MicroregionSJR2_7 = new ol.format.GeoJSON();
var features_MicroregionSJR2_7 = format_MicroregionSJR2_7.readFeatures(json_MicroregionSJR2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSJR2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSJR2_7.addFeatures(features_MicroregionSJR2_7);
var lyr_MicroregionSJR2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSJR2_7, 
                style: style_MicroregionSJR2_7,
                interactive: false,
    title: 'Microregion SJR2<br />\
    <img src="styles/legend/MicroregionSJR2_7_0.png" /> 3 - 29 Personas<br />\
    <img src="styles/legend/MicroregionSJR2_7_1.png" /> 29 - 74 Personas<br />\
    <img src="styles/legend/MicroregionSJR2_7_2.png" /> 74 - 148 Personas<br />\
    <img src="styles/legend/MicroregionSJR2_7_3.png" /> 148 - 261 Personas<br />\
    <img src="styles/legend/MicroregionSJR2_7_4.png" /> 261 - 411 Personas<br />'
        });
var format_MicroregionSJR1_8 = new ol.format.GeoJSON();
var features_MicroregionSJR1_8 = format_MicroregionSJR1_8.readFeatures(json_MicroregionSJR1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSJR1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSJR1_8.addFeatures(features_MicroregionSJR1_8);
var lyr_MicroregionSJR1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSJR1_8, 
                style: style_MicroregionSJR1_8,
                interactive: false,
    title: 'Microregion SJR1<br />\
    <img src="styles/legend/MicroregionSJR1_8_0.png" /> 1 - 22 Personas<br />\
    <img src="styles/legend/MicroregionSJR1_8_1.png" /> 22 - 51 Personas<br />\
    <img src="styles/legend/MicroregionSJR1_8_2.png" /> 51 - 102 Personas<br />\
    <img src="styles/legend/MicroregionSJR1_8_3.png" /> 102 - 197 Personas<br />\
    <img src="styles/legend/MicroregionSJR1_8_4.png" /> 197 - 384 Personas<br />'
        });
var format_MicroregionCORT2_9 = new ol.format.GeoJSON();
var features_MicroregionCORT2_9 = format_MicroregionCORT2_9.readFeatures(json_MicroregionCORT2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCORT2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCORT2_9.addFeatures(features_MicroregionCORT2_9);
var lyr_MicroregionCORT2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCORT2_9, 
                style: style_MicroregionCORT2_9,
                interactive: false,
    title: 'Microregion CORT2<br />\
    <img src="styles/legend/MicroregionCORT2_9_0.png" /> 1 - 34 Personas<br />\
    <img src="styles/legend/MicroregionCORT2_9_1.png" /> 34 - 116 Personas<br />\
    <img src="styles/legend/MicroregionCORT2_9_2.png" /> 116 - 219 Personas<br />\
    <img src="styles/legend/MicroregionCORT2_9_3.png" /> 219 - 595 Personas<br />\
    <img src="styles/legend/MicroregionCORT2_9_4.png" /> 595 - 1282 Personas<br />'
        });
var format_MicroregonCORT1_10 = new ol.format.GeoJSON();
var features_MicroregonCORT1_10 = format_MicroregonCORT1_10.readFeatures(json_MicroregonCORT1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregonCORT1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregonCORT1_10.addFeatures(features_MicroregonCORT1_10);
var lyr_MicroregonCORT1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregonCORT1_10, 
                style: style_MicroregonCORT1_10,
                interactive: false,
    title: 'Microregon CORT1<br />\
    <img src="styles/legend/MicroregonCORT1_10_0.png" /> 3 - 30 Personas<br />\
    <img src="styles/legend/MicroregonCORT1_10_1.png" /> 30 - 86 Personas<br />\
    <img src="styles/legend/MicroregonCORT1_10_2.png" /> 86 - 201 Personas<br />\
    <img src="styles/legend/MicroregonCORT1_10_3.png" /> 201 - 398 Personas<br />\
    <img src="styles/legend/MicroregonCORT1_10_4.png" /> 398 - 772 Personas<br />'
        });
var format_MicroregionCE02_11 = new ol.format.GeoJSON();
var features_MicroregionCE02_11 = format_MicroregionCE02_11.readFeatures(json_MicroregionCE02_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE02_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE02_11.addFeatures(features_MicroregionCE02_11);
var lyr_MicroregionCE02_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE02_11, 
                style: style_MicroregionCE02_11,
                interactive: false,
    title: 'Microregion CE02<br />\
    <img src="styles/legend/MicroregionCE02_11_0.png" /> 1 - 13 Personas<br />\
    <img src="styles/legend/MicroregionCE02_11_1.png" /> 13 - 33 Personas<br />\
    <img src="styles/legend/MicroregionCE02_11_2.png" /> 33 - 97 Personas<br />\
    <img src="styles/legend/MicroregionCE02_11_3.png" /> 97 - 288 Personas<br />\
    <img src="styles/legend/MicroregionCE02_11_4.png" /> 288 - 525 Personas<br />'
        });
var format_CoordinacionVillagran_12 = new ol.format.GeoJSON();
var features_CoordinacionVillagran_12 = format_CoordinacionVillagran_12.readFeatures(json_CoordinacionVillagran_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionVillagran_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionVillagran_12.addFeatures(features_CoordinacionVillagran_12);
var lyr_CoordinacionVillagran_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionVillagran_12, 
                style: style_CoordinacionVillagran_12,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionVillagran_12.png" /> Coordinacion Villagran'
            });
var group_CoordinacionVillagranRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionVILL1_5,lyr_MicroregionSJR3_6,lyr_MicroregionSJR2_7,lyr_MicroregionSJR1_8,lyr_MicroregionCORT2_9,lyr_MicroregonCORT1_10,lyr_MicroregionCE02_11,],
                                title: "Coordinacion Villagran Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionVillagran_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionVillagran_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionVILL1_5.setVisible(true);lyr_MicroregionSJR3_6.setVisible(true);lyr_MicroregionSJR2_7.setVisible(true);lyr_MicroregionSJR1_8.setVisible(true);lyr_MicroregionCORT2_9.setVisible(true);lyr_MicroregonCORT1_10.setVisible(true);lyr_MicroregionCE02_11.setVisible(true);lyr_CoordinacionVillagran_12.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionVillagranRezago,lyr_CoordinacionVillagran_12];
lyr_CoordinacionVillagran_3.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionVILL1_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSJR3_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSJR2_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSJR1_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCORT2_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregonCORT1_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE02_11.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionVillagran_12.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionVillagran_3.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionVILL1_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSJR3_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSJR2_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSJR1_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCORT2_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregonCORT1_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE02_11.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionVillagran_12.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionVillagran_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionVILL1_5.set('fieldLabels', {});
lyr_MicroregionSJR3_6.set('fieldLabels', {});
lyr_MicroregionSJR2_7.set('fieldLabels', {});
lyr_MicroregionSJR1_8.set('fieldLabels', {});
lyr_MicroregionCORT2_9.set('fieldLabels', {});
lyr_MicroregonCORT1_10.set('fieldLabels', {});
lyr_MicroregionCE02_11.set('fieldLabels', {});
lyr_CoordinacionVillagran_12.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionVillagran_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});