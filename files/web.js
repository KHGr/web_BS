var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(e){function i(t){if(n[t])return n[t].exports;var s=n[t]={exports:{},id:t,loaded:!1};e[t].call(s.exports,s,s.exports,i);s.loaded=!0;return s.exports}var n={};i.m=e;i.c=n;i.p="";return i(0)}({0:function(e,i,n){n(1167);var t=n(3);var s=n(1214);t(function(){s.init()})},3:function(e,i){e.exports=jQuery},21:function(e,i){e.exports=Modernizr},636:function(e,i){function n(e){return document.querySelector("#section_bg_element_"+e)}function t(e){var i=n(e);var t=i.getBoundingClientRect();var r=window.innerHeight;var l=t.height/r;var a=t.height;var d=t.top;var h=Array.from(i.querySelectorAll(".section-bg-element-inner")).find(function(e){return e.parentNode===i});s(h,r,l,a,d);o(t,h,r,l)}function s(e,i,n,t,s){var o;o=t<i?-(s*n):-(s/n);var r="translateY("+o+"px)";e.style.transform=r;e.style.webkitTransform=r}function o(e,i,n,t){i.style.height=e.height+n*t+"px"}function r(e){t(e)}function l(e){r(e);var i=d(e);h.set(e,i);window.addEventListener("scroll",i);window.addEventListener("resize",i)}function a(e){var i=h.get(e);if(!i)throw new Error("No listener found for moduleId "+e);window.removeEventListener("scroll",i);window.removeEventListener("resize",i)}Object.defineProperty(i,"__esModule",{value:!0});i.positionBg=t;var d=function(e){return function(i){r(e)}};var h=new Map;i.refreshWeb=r;i.initWeb=l;i.destroyWeb=a},1167:function(e,i,n){function t(){window.Modul=Klazz.extend({moduleId:null,initialize:function(e){this.moduleId=e}});window.mm={}}n.p=diy.web.jsBaseUrl;var s=n(636);t();diy.core.namespace("diy.module.section").initWeb=s.initWeb},1214:function(e,i,n){var t=n(3);var s=n(21);e.exports={elements:{spacer:null,bar:null,$window:null},dimensions:{barHeight:null,barDisplacement:0,prevWindowScroll:null,prevViewportHeight:null},events:{counter:0,fps:60},update:function(){var e=this.elements.$window.height();var i=this.elements.$window.scrollTop();var n=i-this.dimensions.prevWindowScroll;var t=!1;0===n&&(t=!0);e!==this.dimensions.prevViewportHeight&&(t=!0);this.dimensions.prevWindowScroll=i;this.dimensions.prevViewportHeight=e;if(!t){this.dimensions.barDisplacement=Math.max(0,Math.min(this.dimensions.barHeight,this.dimensions.barDisplacement+n));this.elements.bar.css({bottom:-1*this.dimensions.barDisplacement+"px"})}},initUpdateMechanism:function(){this.events.counter=0;window.addEventListener("scroll",function(){this.events.counter++;if(!(this.events.counter>1)){this.update();window.setTimeout(function(){this.events.counter>2&&this.update();this.events.counter=0}.bind(this),Math.floor(1e3/this.events.fps))}}.bind(this))},init:function(){this.elements.$window=t(window);this.elements.spacer=t("#mobile-infobar-spacer");this.elements.bar=t("#mobile-infobar");if(/iPad|iPhone|iPod/.test(navigator.platform))this.elements.spacer.show();else if(s.touch&&this.elements.spacer.length&&this.elements.bar.length){this.dimensions.barHeight=this.elements.bar.height();this.dimensions.prevWindowScroll=this.elements.$window.scrollTop();this.dimensions.prevViewportHeight=this.elements.$window.height();t(document).height()<=this.dimensions.prevViewportHeight&&this.elements.spacer.show();this.initUpdateMechanism.bind(this)()}}}}});
//# sourceMappingURL=web.bundle.js.map

}
/*
     FILE ARCHIVED ON 08:45:28 Aug 17, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:18:28 Aug 13, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.015
  RedisCDXSource: 170.292
  PetaboxLoader3.datanode: 584.88 (5)
  captures_list: 1001.232
  PetaboxLoader3.resolve: 1996.522 (5)
  load_resource: 1940.186
  LoadShardBlock: 794.428 (3)
  CDXLines.iter: 17.966 (3)
  exclusion.robots: 7.792
  exclusion.robots.policy: 7.778
*/