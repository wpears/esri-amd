//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/geometry/jsonUtils".split(" "),function(b,d,e,c,g,h,f){b=b(null,{declaredClass:"esri.tasks.OffsetParameters",geometries:null,bevelRatio:null,offsetDistance:null,offsetHow:null,offsetUnit:null,toJson:function(){var b=e.map(this.geometries,function(a){return a.toJson()}),a={};this.geometries&&0<this.geometries.length&&(a.geometries=c.toJson({geometryType:f.getJsonType(this.geometries[0]),geometries:b}),
a.sr=c.toJson(this.geometries[0].spatialReference.toJson()));this.bevelRatio&&(a.bevelRatio=this.bevelRatio);this.offsetDistance&&(a.offsetDistance=this.offsetDistance);this.offsetHow&&(a.offsetHow=this.offsetHow);this.offsetUnit&&(a.offsetUnit=this.offsetUnit);return a}});d.mixin(b,{OFFSET_BEVELLED:"esriGeometryOffsetBevelled",OFFSET_MITERED:"esriGeometryOffsetMitered",OFFSET_ROUNDED:"esriGeometryOffsetRounded"});return b});