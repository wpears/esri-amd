//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/_base/Color esri/kernel".split(" "),function(s,l,n,u,t,v){return s(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){if(a&&!a.declaredClass){this.rotationInfo=a.rotationInfo;if(!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;if(b||c)this.rotationInfo={type:b,expression:c}}this.setRotationInfo(this.rotationInfo);this.setProportionalSymbolInfo(a.proportionalSymbolInfo);this.setColorInfo(a.colorInfo)}this.getSymbol=
l.hitch(this,this.getSymbol)},getSymbol:function(a){},setRotationInfo:function(a){if((a=this.rotationInfo="string"===typeof a?{field:a}:a)&&a.expression&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=b[1])}return this},rotationRE:/^\[([^\]]+)\]$/i,getRotationAngle:function(a){var b=this.rotationInfo,c="arithmetic"===b.type,b=b.field,d=a.attributes,e=0;b&&(l.isFunction(b)?e=b.apply(this,arguments):d&&(e=d[b]||0),e=(e+(c?-90:0))*(c?-1:1));return e},setProportionalSymbolInfo:function(a){this.proportionalSymbolInfo=
a;return this},getSize:function(a,b){var c=a.attributes,d=this.proportionalSymbolInfo,e=d&&d.field,f=0,g="number"===typeof a?a:0;if(e){var h=d.minSize,k=d.maxSize,m=d.minDataValue,p=d.maxDataValue,n=d.valueUnit||"unknown",q=d.valueRepresentation,d=d.normalizationField,r=c?parseFloat(c[d]):void 0,d=b&&b.shape;l.isFunction(e)?g=e.apply(this,arguments):c&&(g=c[e]||0);isNaN(r)||(g/=r);if(null!=h&&null!=k&&null!=m&&null!=p)f=g<=m?h:g>=p?k:h+(g-m)/(p-m)*(k-h);else if("unknown"===n)null!=h&&null!=m&&(h&&
m?(g/=m,f="circle"===d?2*Math.sqrt(g*Math.pow(h/2,2)):"square"===d||"diamond"===d||"image"===d?Math.sqrt(g*Math.pow(h,2)):g*h):f=g+(h||m),f=f<h?h:f,null!=k&&f>k&&(f=k));else{c=(b&&b.resolution?b.resolution:a.getLayer().getMap().getResolutionInMeters())*this._meterIn[n];if("area"===q)f=Math.sqrt(g/Math.PI)/c,f*=2;else if(f=g/c,"radius"===q||"distance"===q)f*=2;null!=h&&f<h&&(f=h);null!=k&&f>k&&(f=k)}}return f=isNaN(f)?0:f},setColorInfo:function(a){this.colorInfo=a;this._interpolateData();return this},
getColor:function(a){var b=a.attributes,c=this.colorInfo,d=c&&c.field,e="number"===typeof a?a:0,f;if(d){var g=c.colors,h=c.minDataValue,k=c.maxDataValue,c=c.normalizationField,c=b?parseFloat(b[c]):void 0;l.isFunction(d)?e=d.apply(this,arguments):b&&(e=b[d]||0);isNaN(c)||(e/=c);null!=g&&(null!=h&&null!=k)&&(f=this._getColor(e))}return f},_interpolateData:function(){var a=this.colorInfo,b;if(a){var c=a.colors.length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}this._interpolatedValues=
b},_getColor:function(a){a=this._getColorRange(a);var b=this.colorInfo.colors,c;if(a){c=a[0];var d=a[1];c=c===d?b[c]:t.blendColors(b[c],b[d],a[2])}return c},_getColorRange:function(a){var b=this._interpolatedValues,c;if(b){var d=0,e=b.length-1;n.some(b,function(b,c){if(a<b)return e=c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_meterIn:{inches:39.3701,feet:3.28084,yards:1.09361,miles:6.21371E-4,"nautical-miles":5.39957E-4,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:0.0010,
"decimal-degrees":180/20015077},toJson:function(){var a=this.proportionalSymbolInfo,b,c=this.colorInfo,d=this.rotationInfo;b=d&&d.field;var e=d&&(d.expression||b&&(l.isFunction(b)?b:"["+b+"]"));c&&(c=l.mixin({},c),c.colors=n.map(c.colors,function(a){return l.isArray(a)?l.clone(a):[a.r,a.g,a.b,Math.round(255*a.a)]}));if(a&&(a=l.mixin({},a),b=a.legendOptions))if(a.legendOptions=l.mixin({},b),b=b.customValues)a.legendOptions.customValues=b.slice(0);return{rotationType:e&&(d.type||"geographic"),rotationExpression:e,
colorInfo:c,proportionalSymbolInfo:a}}})});