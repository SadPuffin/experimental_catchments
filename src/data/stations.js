var stations={
    "type": "FeatureCollection",
    "name": "stations",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "name": "Метеостанция Ламмин-Суо", "id": 1, "type": "meteo", "description": "Метеоплощадка на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.809562251149814, 60.238728112748177 ] ] } },
    { "type": "Feature", "properties": { "name": "Скважина Ламмин-Суо", "id": 2, "type": "well", "description": "Скважина на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.821342290740077, 60.245849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "Осадкомер Ламмин-Суо", "id": 3, "type": "precipitation_gauge", "description": "Осадкомер на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.811342290740077, 60.245849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "Осадкомер Ламмин-Суо", "id": 4, "type": "precipitation_gauge", "description": "Осадкомер№2 на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.821342290740077, 60.235849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "ГГИ", "id": 666, "type": "kotiki_ggi", "description": "Тестовая станция. Место где обитают лучшие котики из ГИС группы " }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 30.286667, 59.941944 ] ] } }
    ]
    }
export default stations
