//>>built
define("dojo/_base/declare dojo/_base/lang dojo/has dojo/dom-construct esri/kernel esri/InfoTemplate esri/PopupInfo esri/dijit/PopupRenderer".split(" "),function(c,d,k,e,l,f,g,h){return c([f,g],{declaredClass:"esri.dijit.PopupTemplate","-chains-":{constructor:"manual"},chartTheme:null,constructor:function(a,b){d.mixin(this,b);this.initialize(a,b)},getTitle:function(a){return this.info?this.getComponents(a).title:""},getContent:function(a){return this.info?(new h({template:this,graphic:a,chartTheme:this.chartTheme},
e.create("div"))).domNode:""}})});