module.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";t.exports=n(42)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(26),r=n(6);t.exports=function(t){return i(r(t))}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=i(r),s=n(11),u=i(s),a={HOUR_TOKENS:["HH","H","hh","h","kk","k"],MINUTE_TOKENS:["mm","m"],SECOND_TOKENS:["ss","s"],APM_TOKENS:["A","a"]};e.default={name:"VueTimepicker",props:{value:{type:Object},hideClearButton:{type:Boolean},format:{type:String},minuteInterval:{type:Number},secondInterval:{type:Number},id:{type:String},limits:{type:Array}},data:function(){return{hours:[],minutes:[],seconds:[],apms:[],showDropdown:!1,muteWatch:!1,hourType:"HH",minuteType:"mm",secondType:"",apmType:"",hour:"",minute:"",second:"",apm:"",fullValues:void 0}},computed:{displayTime:function(){var t=String(this.format||"HH:mm");return this.hour&&(t=t.replace(new RegExp(this.hourType,"g"),this.hour)),this.minute&&(t=t.replace(new RegExp(this.minuteType,"g"),this.minute)),this.second&&this.secondType&&(t=t.replace(new RegExp(this.secondType,"g"),this.second)),this.apm&&this.apmType&&(t=t.replace(new RegExp(this.apmType,"g"),this.apm)),t},showClearBtn:function(){return!!(this.hour&&""!==this.hour||this.minute&&""!==this.minute)}},watch:{format:"renderFormat",minuteInterval:function(t){this.renderList("minute",t)},secondInterval:function(t){this.renderList("second",t)},value:"readValues",displayTime:"fillValues"},methods:{formatValue:function(t,e){switch(t){case"H":case"m":case"s":return String(e);case"HH":case"mm":case"ss":return e<10?"0"+e:String(e);case"h":case"k":return String(e+1);case"hh":case"kk":return e+1<10?"0"+(e+1):String(e+1);default:return""}},checkAcceptingType:function(t,e,n){if(!t||!e||!e.length)return"";for(var i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return t[i];return n||""},renderFormat:function(t){t=t||this.format,t&&t.length||(t="HH:mm"),this.hourType=this.checkAcceptingType(a.HOUR_TOKENS,t,"HH"),this.minuteType=this.checkAcceptingType(a.MINUTE_TOKENS,t,"mm"),this.secondType=this.checkAcceptingType(a.SECOND_TOKENS,t),this.apmType=this.checkAcceptingType(a.APM_TOKENS,t),this.renderHoursList(),this.renderList("minute"),this.secondType&&this.renderList("second"),this.apmType&&this.renderApmList();var e=this;this.$nextTick(function(){e.readValues()})},renderHoursList:function(){var t="h"===this.hourType||"hh"===this.hourType?12:24;if(this.hours=[],24===t)for(var e=this.limits?this.limits.from:0;e<this.limits?t-this.limits.to:t;e++)this.hours.push(this.formatValue(this.hourType,e));else for(var n=0;n<t;n++)this.hours.push(this.formatValue(this.hourType,n))},renderList:function(t,e){if("second"===t)e=e||this.secondInterval;else{if("minute"!==t)return;e=e||this.minuteInterval}0===e?e=60:e>60?(window.console.warn("`"+t+"-interval` should be less than 60. Current value is",e),e=1):e<1?(window.console.warn("`"+t+"-interval` should be NO less than 1. Current value is",e),e=1):e||(e=1),"minute"===t?this.minutes=[]:this.seconds=[];for(var n=0;n<60;n+=e)"minute"===t?this.minutes.push(this.formatValue(this.minuteType,n)):this.seconds.push(this.formatValue(this.secondType,n))},renderApmList:function(){this.apms=[],this.apmType&&(this.apms="A"===this.apmType?["AM","PM"]:["am","pm"])},readValues:function(){if(this.value&&!this.muteWatch){var t=JSON.parse((0,u.default)(this.value||{})),e=(0,o.default)(t);0!==e.length&&(e.indexOf(this.hourType)>-1&&(this.hour=t[this.hourType]),e.indexOf(this.minuteType)>-1&&(this.minute=t[this.minuteType]),e.indexOf(this.secondType)>-1?this.second=t[this.secondType]:this.second=0,e.indexOf(this.apmType)>-1&&(this.apm=t[this.apmType]),this.fillValues())}},fillValues:function(){var t={},e=this.hour,n=this.hourType,i=e||0===e?Number(e):"",r=this.isTwelveHours(n),o=!(!r||!this.apm)&&String(this.apm).toLowerCase();if(a.HOUR_TOKENS.forEach(function(s){if(s===n)return void(t[s]=e);var u=void 0,a=void 0;switch(s){case"H":case"HH":if(!String(i).length)return void(t[s]="");u=r?"pm"===o?i<12?i+12:i:i%12:i%24,t[s]="HH"===s&&u<10?"0"+u:String(u);break;case"k":case"kk":if(!String(i).length)return void(t[s]="");u=r?"pm"===o?i<12?i+12:i:12===i?24:i:0===i?24:i,t[s]="kk"===s&&u<10?"0"+u:String(u);break;case"h":case"hh":if(o)u=i,a=o||"am";else{if(!String(i).length)return t[s]="",t.a="",void(t.A="");i>11?(a="pm",u=12===i?12:i%12):(a=r?"":"am",u=i%12===0?12:i)}t[s]="hh"===s&&u<10?"0"+u:String(u),t.a=a,t.A=a.toUpperCase()}}),this.minute||0===this.minute){var s=Number(this.minute);t.m=String(s),t.mm=s<10?"0"+s:String(s)}else t.m="",t.mm="";if(this.second||0===this.second){var u=Number(this.second);t.s=String(u),t.ss=u<10?"0"+u:String(u)}else t.s="",t.ss="";this.fullValues=t,this.updateTimeValue(t),this.$emit("change",{data:t})},updateTimeValue:function(t){this.muteWatch=!0;var e=this,n=JSON.parse((0,u.default)(this.value||{})),i={};(0,o.default)(n).forEach(function(e){i[e]=t[e]}),this.$emit("input",i),this.$nextTick(function(){e.muteWatch=!1})},isTwelveHours:function(t){return"h"===t||"hh"===t},toggleDropdown:function(){this.showDropdown=!this.showDropdown},select:function(t,e){"hour"===t?this.hour=e:"minute"===t?this.minute=e:"second"===t?this.second=e:"apm"===t&&(this.apm=e)},clearTime:function(){this.hour="",this.minute="",this.second="",this.apm=""}},mounted:function(){this.renderFormat()}}},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e,n){t.exports={default:n(14),__esModule:!0}},function(t,e,n){var i=n(1),r=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){n(39),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(8),r=n(35),o=n(34);t.exports=function(t){return function(e,n,s){var u,a=i(e),c=r(a.length),p=o(s,c);if(t&&n!=n){for(;c>p;)if(u=a[p++],u!=u)return!0}else for(;c>p;p++)if((t||p in a)&&a[p]===n)return t||p||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(15);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(5),r=n(4).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(4),r=n(1),o=n(19),s=n(24),u="prototype",a=function(t,e,n){var c,p,l,f=t&a.F,h=t&a.G,d=t&a.S,m=t&a.P,v=t&a.B,y=t&a.W,g=h?r:r[e]||(r[e]={}),x=g[u],w=h?i:d?i[e]:(i[e]||{})[u];h&&(n=e);for(c in n)p=!f&&w&&void 0!==w[c],p&&c in g||(l=p?w[c]:n[c],g[c]=h&&"function"!=typeof w[c]?n[c]:v&&p?o(l,i):y&&w[c]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):m&&"function"==typeof l?o(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&x&&!x[c]&&s(x,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(27),r=n(31);t.exports=n(2)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(3)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(16),r=n(25),o=n(37),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(23),r=n(8),o=n(17)(!1),s=n(32)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,c=[];for(n in u)n!=s&&i(u,n)&&c.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(28),r=n(21);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(22),r=n(1),o=n(3);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*o(function(){n(1)}),"Object",s)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(33)("keys"),r=n(38);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(4),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(7),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(7),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(6);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(36),r=n(29);n(30)("keys",function(){return function(t){return r(i(t))}})},function(t,e,n){e=t.exports=n(9)(),e.i(n(41),""),e.push([t.id,"",""])},function(t,e,n){e=t.exports=n(9)(),e.push([t.id,".time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.time-picker *{box-sizing:border-box}.time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.time-picker .clear-btn{position:absolute;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;top:0;right:0;bottom:0;margin-top:-.15em;z-index:3;font-size:1.1em;line-height:1em;vertical-align:middle;width:1.3em;color:#d2d2d2;background:hsla(0,0%,100%,0);text-align:center;font-style:normal;-webkit-transition:color .2s;transition:color .2s}.time-picker .clear-btn:hover{color:#797979;cursor:pointer}.time-picker .time-picker-overlay{z-index:2;position:fixed;top:0;left:0;right:0;bottom:0}.time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:flex;flex-flow:row nowrap;align-items:stretch;justify-content:space-between}.time-picker .dropdown ul{padding:0;margin:0;list-style:none;flex:1;overflow-x:hidden;overflow-y:auto}.time-picker .dropdown ul.apms,.time-picker .dropdown ul.minutes,.time-picker .dropdown ul.seconds{border-left:1px solid #fff}.time-picker .dropdown ul li{text-align:center;padding:.3em 0;color:#161616}.time-picker .dropdown ul li:not(.hint):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.time-picker .dropdown ul li.active,.time-picker .dropdown ul li.active:hover{background:#41b883;color:#fff}.time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}",""])},function(t,e,n){var i,r;n(45),i=n(10);var o=n(43);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"time-picker"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.displayTime,expression:"displayTime"}],staticClass:"display-time",attrs:{id:t.id,type:"text",readonly:""},domProps:{value:t.displayTime},on:{click:function(e){e.stopPropagation(),t.toggleDropdown(e)},input:function(e){e.target.composing||(t.displayTime=e.target.value)}}}),t._v(" "),t.hideClearButton?t._e():n("span",{directives:[{name:"show",rawName:"v-show",value:!t.showDropdown&&t.showClearBtn,expression:"!showDropdown && showClearBtn"}],staticClass:"clear-btn",on:{click:function(e){e.stopPropagation(),t.clearTime(e)}}},[t._v("×")]),t._v(" "),t.showDropdown?n("div",{staticClass:"time-picker-overlay",on:{click:function(e){e.stopPropagation(),t.toggleDropdown(e)}}}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"dropdown"},[n("div",{staticClass:"select-list"},[n("ul",{staticClass:"hours"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.hourType)}}),t._v(" "),t._l(t.hours,function(e){return n("li",{class:{active:t.hour===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("hour",e)}}})})],2),t._v(" "),n("ul",{staticClass:"minutes"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.minuteType)}}),t._v(" "),t._l(t.minutes,function(e){return n("li",{class:{active:t.minute===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("minute",e)}}})})],2),t._v(" "),t.secondType?n("ul",{staticClass:"seconds"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.secondType)}}),t._v(" "),t._l(t.seconds,function(e){return n("li",{class:{active:t.second===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("second",e)}}})})],2):t._e(),t._v(" "),t.apmType?n("ul",{staticClass:"apms"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.apmType)}}),t._v(" "),t._l(t.apms,function(e){return n("li",{class:{active:t.apm===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("apm",e)}}})})],2):t._e()])])])},staticRenderFns:[]}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=l[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(a(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(a(i.parts[o],e));l[i.id]={id:i.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],u=r[2],a=r[3],c={css:s,media:u,sourceMap:a};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(t,e){var n=d(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function a(t,e){var n,i,r;if(e.singleton){var o=v++;n=m||(m=u(e)),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else n=u(e),i=p.bind(null,n),r=function(){s(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function c(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function p(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),d=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var u=n[s],a=l[u.id];a.refs--,o.push(a)}if(t){var c=r(t);i(c,e)}for(var s=0;s<o.length;s++){var a=o[s];if(0===a.refs){for(var p=0;p<a.parts.length;p++)a.parts[p]();delete l[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var i=n(40);"string"==typeof i&&(i=[[t.id,i,""]]);n(44)(i,{});i.locals&&(t.exports=i.locals)}]);
//# sourceMappingURL=build.js.map