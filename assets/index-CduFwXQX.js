var Dd=Object.defineProperty;var Nd=(i,e,t)=>e in i?Dd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ct=(i,e,t)=>Nd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function Bd(i){var e=this.constructor;return this.then(function(t){return e.resolve(i()).then(function(){return t})},function(t){return e.resolve(i()).then(function(){return e.reject(t)})})}function Ld(i){var e=this;return new e(function(t,r){if(!(i&&typeof i.length<"u"))return r(new TypeError(typeof i+" "+i+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(i);if(n.length===0)return t([]);var o=n.length;function a(u,l){if(l&&(typeof l=="object"||typeof l=="function")){var h=l.then;if(typeof h=="function"){h.call(l,function(f){a(u,f)},function(f){n[u]={status:"rejected",reason:f},--o===0&&t(n)});return}}n[u]={status:"fulfilled",value:l},--o===0&&t(n)}for(var s=0;s<n.length;s++)a(s,n[s])})}function Cf(i,e){this.name="AggregateError",this.errors=i,this.message=e||""}Cf.prototype=Error.prototype;function Ud(i){var e=this;return new e(function(t,r){if(!(i&&typeof i.length<"u"))return r(new TypeError("Promise.any accepts an array"));var n=Array.prototype.slice.call(i);if(n.length===0)return r();for(var o=[],a=0;a<n.length;a++)try{e.resolve(n[a]).then(t).catch(function(s){o.push(s),o.length===n.length&&r(new Cf(o,"All promises were rejected"))})}catch(s){r(s)}})}var kd=setTimeout;function Of(i){return!!(i&&typeof i.length<"u")}function Gd(){}function jd(i,e){return function(){i.apply(e,arguments)}}function Ot(i){if(!(this instanceof Ot))throw new TypeError("Promises must be constructed via new");if(typeof i!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Rf(i,this)}function Af(i,e){for(;i._state===3;)i=i._value;if(i._state===0){i._deferreds.push(e);return}i._handled=!0,Ot._immediateFn(function(){var t=i._state===1?e.onFulfilled:e.onRejected;if(t===null){(i._state===1?Za:Ai)(e.promise,i._value);return}var r;try{r=t(i._value)}catch(n){Ai(e.promise,n);return}Za(e.promise,r)})}function Za(i,e){try{if(e===i)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof Ot){i._state=3,i._value=e,Qa(i);return}else if(typeof t=="function"){Rf(jd(t,e),i);return}}i._state=1,i._value=e,Qa(i)}catch(r){Ai(i,r)}}function Ai(i,e){i._state=2,i._value=e,Qa(i)}function Qa(i){i._state===2&&i._deferreds.length===0&&Ot._immediateFn(function(){i._handled||Ot._unhandledRejectionFn(i._value)});for(var e=0,t=i._deferreds.length;e<t;e++)Af(i,i._deferreds[e]);i._deferreds=null}function zd(i,e,t){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function Rf(i,e){var t=!1;try{i(function(r){t||(t=!0,Za(e,r))},function(r){t||(t=!0,Ai(e,r))})}catch(r){if(t)return;t=!0,Ai(e,r)}}Ot.prototype.catch=function(i){return this.then(null,i)};Ot.prototype.then=function(i,e){var t=new this.constructor(Gd);return Af(this,new zd(i,e,t)),t};Ot.prototype.finally=Bd;Ot.all=function(i){return new Ot(function(e,t){if(!Of(i))return t(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(i);if(r.length===0)return e([]);var n=r.length;function o(s,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var l=u.then;if(typeof l=="function"){l.call(u,function(h){o(s,h)},t);return}}r[s]=u,--n===0&&e(r)}catch(h){t(h)}}for(var a=0;a<r.length;a++)o(a,r[a])})};Ot.any=Ud;Ot.allSettled=Ld;Ot.resolve=function(i){return i&&typeof i=="object"&&i.constructor===Ot?i:new Ot(function(e){e(i)})};Ot.reject=function(i){return new Ot(function(e,t){t(i)})};Ot.race=function(i){return new Ot(function(e,t){if(!Of(i))return t(new TypeError("Promise.race accepts an array"));for(var r=0,n=i.length;r<n;r++)Ot.resolve(i[r]).then(e,t)})};Ot._immediateFn=typeof setImmediate=="function"&&function(i){setImmediate(i)}||function(i){kd(i,0)};Ot._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Su(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Xd(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(r){var n=Object.getOwnPropertyDescriptor(i,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return i[r]}})}),t}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var yo,al;function Hd(){if(al)return yo;al=1;var i=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function r(o){if(o==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}function n(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de",Object.getOwnPropertyNames(o)[0]==="5")return!1;for(var a={},s=0;s<10;s++)a["_"+String.fromCharCode(s)]=s;var u=Object.getOwnPropertyNames(a).map(function(h){return a[h]});if(u.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(h){l[h]=h}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return yo=n()?Object.assign:function(o,a){for(var s,u=r(o),l,h=1;h<arguments.length;h++){s=Object(arguments[h]);for(var f in s)e.call(s,f)&&(u[f]=s[f]);if(i){l=i(s);for(var c=0;c<l.length;c++)t.call(s,l[c])&&(u[l[c]]=s[l[c]])}}return u},yo}var Vd=Hd();const Wd=Su(Vd);/*!
 * @pixi/polyfill - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis>"u"&&(typeof self<"u"?self.globalThis=self:typeof global<"u"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=Ot);Object.assign||(Object.assign=Wd);var Yd=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var $d=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-$d}}var go=Date.now(),sl=["ms","moz","webkit","o"];for(var xo=0;xo<sl.length&&!globalThis.requestAnimationFrame;++xo){var bo=sl[xo];globalThis.requestAnimationFrame=globalThis[bo+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[bo+"CancelAnimationFrame"]||globalThis[bo+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(i){if(typeof i!="function")throw new TypeError(i+"is not a function");var e=Date.now(),t=Yd+go-e;return t<0&&(t=0),go=e,globalThis.self.setTimeout(function(){go=Date.now(),i(performance.now())},t)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(i){return clearTimeout(i)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);/*!
 * @pixi/constants - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ve;(function(i){i[i.WEBGL_LEGACY=0]="WEBGL_LEGACY",i[i.WEBGL=1]="WEBGL",i[i.WEBGL2=2]="WEBGL2"})(Ve||(Ve={}));var Ri;(function(i){i[i.UNKNOWN=0]="UNKNOWN",i[i.WEBGL=1]="WEBGL",i[i.CANVAS=2]="CANVAS"})(Ri||(Ri={}));var Mn;(function(i){i[i.COLOR=16384]="COLOR",i[i.DEPTH=256]="DEPTH",i[i.STENCIL=1024]="STENCIL"})(Mn||(Mn={}));var rt;(function(i){i[i.NORMAL=0]="NORMAL",i[i.ADD=1]="ADD",i[i.MULTIPLY=2]="MULTIPLY",i[i.SCREEN=3]="SCREEN",i[i.OVERLAY=4]="OVERLAY",i[i.DARKEN=5]="DARKEN",i[i.LIGHTEN=6]="LIGHTEN",i[i.COLOR_DODGE=7]="COLOR_DODGE",i[i.COLOR_BURN=8]="COLOR_BURN",i[i.HARD_LIGHT=9]="HARD_LIGHT",i[i.SOFT_LIGHT=10]="SOFT_LIGHT",i[i.DIFFERENCE=11]="DIFFERENCE",i[i.EXCLUSION=12]="EXCLUSION",i[i.HUE=13]="HUE",i[i.SATURATION=14]="SATURATION",i[i.COLOR=15]="COLOR",i[i.LUMINOSITY=16]="LUMINOSITY",i[i.NORMAL_NPM=17]="NORMAL_NPM",i[i.ADD_NPM=18]="ADD_NPM",i[i.SCREEN_NPM=19]="SCREEN_NPM",i[i.NONE=20]="NONE",i[i.SRC_OVER=0]="SRC_OVER",i[i.SRC_IN=21]="SRC_IN",i[i.SRC_OUT=22]="SRC_OUT",i[i.SRC_ATOP=23]="SRC_ATOP",i[i.DST_OVER=24]="DST_OVER",i[i.DST_IN=25]="DST_IN",i[i.DST_OUT=26]="DST_OUT",i[i.DST_ATOP=27]="DST_ATOP",i[i.ERASE=26]="ERASE",i[i.SUBTRACT=28]="SUBTRACT",i[i.XOR=29]="XOR"})(rt||(rt={}));var ge;(function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(ge||(ge={}));var H;(function(i){i[i.RGBA=6408]="RGBA",i[i.RGB=6407]="RGB",i[i.RG=33319]="RG",i[i.RED=6403]="RED",i[i.RGBA_INTEGER=36249]="RGBA_INTEGER",i[i.RGB_INTEGER=36248]="RGB_INTEGER",i[i.RG_INTEGER=33320]="RG_INTEGER",i[i.RED_INTEGER=36244]="RED_INTEGER",i[i.ALPHA=6406]="ALPHA",i[i.LUMINANCE=6409]="LUMINANCE",i[i.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",i[i.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",i[i.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(H||(H={}));var Ar;(function(i){i[i.TEXTURE_2D=3553]="TEXTURE_2D",i[i.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",i[i.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",i[i.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",i[i.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",i[i.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",i[i.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Ar||(Ar={}));var it;(function(i){i[i.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",i[i.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",i[i.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",i[i.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",i[i.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",i[i.UNSIGNED_INT=5125]="UNSIGNED_INT",i[i.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",i[i.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",i[i.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",i[i.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",i[i.BYTE=5120]="BYTE",i[i.SHORT=5122]="SHORT",i[i.INT=5124]="INT",i[i.FLOAT=5126]="FLOAT",i[i.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",i[i.HALF_FLOAT=36193]="HALF_FLOAT"})(it||(it={}));var Fn;(function(i){i[i.FLOAT=0]="FLOAT",i[i.INT=1]="INT",i[i.UINT=2]="UINT"})(Fn||(Fn={}));var oe;(function(i){i[i.NEAREST=0]="NEAREST",i[i.LINEAR=1]="LINEAR"})(oe||(oe={}));var Oe;(function(i){i[i.CLAMP=33071]="CLAMP",i[i.REPEAT=10497]="REPEAT",i[i.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Oe||(Oe={}));var le;(function(i){i[i.OFF=0]="OFF",i[i.POW2=1]="POW2",i[i.ON=2]="ON",i[i.ON_MANUAL=3]="ON_MANUAL"})(le||(le={}));var be;(function(i){i[i.NPM=0]="NPM",i[i.UNPACK=1]="UNPACK",i[i.PMA=2]="PMA",i[i.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",i[i.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",i[i.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",i[i.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(be||(be={}));var ye;(function(i){i[i.NO=0]="NO",i[i.YES=1]="YES",i[i.AUTO=2]="AUTO",i[i.BLEND=0]="BLEND",i[i.CLEAR=1]="CLEAR",i[i.BLIT=2]="BLIT"})(ye||(ye={}));var Dn;(function(i){i[i.AUTO=0]="AUTO",i[i.MANUAL=1]="MANUAL"})(Dn||(Dn={}));var ae;(function(i){i.LOW="lowp",i.MEDIUM="mediump",i.HIGH="highp"})(ae||(ae={}));var Ft;(function(i){i[i.NONE=0]="NONE",i[i.SCISSOR=1]="SCISSOR",i[i.STENCIL=2]="STENCIL",i[i.SPRITE=3]="SPRITE",i[i.COLOR=4]="COLOR"})(Ft||(Ft={}));var ul;(function(i){i[i.RED=1]="RED",i[i.GREEN=2]="GREEN",i[i.BLUE=4]="BLUE",i[i.ALPHA=8]="ALPHA"})(ul||(ul={}));var St;(function(i){i[i.NONE=0]="NONE",i[i.LOW=2]="LOW",i[i.MEDIUM=4]="MEDIUM",i[i.HIGH=8]="HIGH"})(St||(St={}));var Ae;(function(i){i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Ae||(Ae={}));/*!
 * @pixi/settings - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var qd={createCanvas:function(i,e){var t=document.createElement("canvas");return t.width=i,t.height=e,t},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var i;return(i=document.baseURI)!==null&&i!==void 0?i:window.location.href},fetch:function(i,e){return fetch(i,e)}},To=/iPhone/i,ll=/iPod/i,hl=/iPad/i,fl=/\biOS-universal(?:.+)Mac\b/i,So=/\bAndroid(?:.+)Mobile\b/i,cl=/Android/i,Xr=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,tn=/Silk/i,Le=/Windows Phone/i,dl=/\bWindows(?:.+)ARM\b/i,pl=/BlackBerry/i,vl=/BB10/i,_l=/Opera Mini/i,ml=/\b(CriOS|Chrome)(?:.+)Mobile/i,yl=/Mobile(?:.+)Firefox\b/i,gl=function(i){return typeof i<"u"&&i.platform==="MacIntel"&&typeof i.maxTouchPoints=="number"&&i.maxTouchPoints>1&&typeof MSStream>"u"};function Kd(i){return function(e){return e.test(i)}}function Zd(i){var e={userAgent:"",platform:"",maxTouchPoints:0};!i&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof i=="string"?e.userAgent=i:i&&i.userAgent&&(e={userAgent:i.userAgent,platform:i.platform,maxTouchPoints:i.maxTouchPoints||0});var t=e.userAgent,r=t.split("[FBAN");typeof r[1]<"u"&&(t=r[0]),r=t.split("Twitter"),typeof r[1]<"u"&&(t=r[0]);var n=Kd(t),o={apple:{phone:n(To)&&!n(Le),ipod:n(ll),tablet:!n(To)&&(n(hl)||gl(e))&&!n(Le),universal:n(fl),device:(n(To)||n(ll)||n(hl)||n(fl)||gl(e))&&!n(Le)},amazon:{phone:n(Xr),tablet:!n(Xr)&&n(tn),device:n(Xr)||n(tn)},android:{phone:!n(Le)&&n(Xr)||!n(Le)&&n(So),tablet:!n(Le)&&!n(Xr)&&!n(So)&&(n(tn)||n(cl)),device:!n(Le)&&(n(Xr)||n(tn)||n(So)||n(cl))||n(/\bokhttp\b/i)},windows:{phone:n(Le),tablet:n(dl),device:n(Le)||n(dl)},other:{blackberry:n(pl),blackberry10:n(vl),opera:n(_l),firefox:n(yl),chrome:n(ml),device:n(pl)||n(vl)||n(_l)||n(yl)||n(ml)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var Pe=Zd(globalThis.navigator);function Qd(){return!Pe.apple.device}function Jd(i){var e=!0;if(Pe.tablet||Pe.phone){if(Pe.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var r=parseInt(t[1],10);r<11&&(e=!1)}}if(Pe.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var r=parseInt(t[1],10);r<7&&(e=!1)}}}return e?i:4}var W={ADAPTER:qd,MIPMAP_TEXTURES:le.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:St.NONE,SPRITE_MAX_TEXTURES:Jd(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,width:800,height:600,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,antialias:!1,preserveDrawingBuffer:!1},GC_MODE:Dn.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:Oe.CLAMP,SCALE_MODE:oe.LINEAR,PRECISION_VERTEX:ae.HIGH,PRECISION_FRAGMENT:Pe.apple.device?ae.HIGH:ae.MEDIUM,CAN_UPLOAD_SAME_BUFFER:Qd(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},Eo={exports:{}},xl;function tp(){return xl||(xl=1,function(i){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function n(u,l,h){this.fn=u,this.context=l,this.once=h||!1}function o(u,l,h,f,c){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new n(h,f||u,c),_=t?t+l:l;return u._events[_]?u._events[_].fn?u._events[_]=[u._events[_],d]:u._events[_].push(d):(u._events[_]=d,u._eventsCount++),u}function a(u,l){--u._eventsCount===0?u._events=new r:delete u._events[l]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],h,f;if(this._eventsCount===0)return l;for(f in h=this._events)e.call(h,f)&&l.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},s.prototype.listeners=function(l){var h=t?t+l:l,f=this._events[h];if(!f)return[];if(f.fn)return[f.fn];for(var c=0,d=f.length,_=new Array(d);c<d;c++)_[c]=f[c].fn;return _},s.prototype.listenerCount=function(l){var h=t?t+l:l,f=this._events[h];return f?f.fn?1:f.length:0},s.prototype.emit=function(l,h,f,c,d,_){var p=t?t+l:l;if(!this._events[p])return!1;var v=this._events[p],m=arguments.length,x,T;if(v.fn){switch(v.once&&this.removeListener(l,v.fn,void 0,!0),m){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,h),!0;case 3:return v.fn.call(v.context,h,f),!0;case 4:return v.fn.call(v.context,h,f,c),!0;case 5:return v.fn.call(v.context,h,f,c,d),!0;case 6:return v.fn.call(v.context,h,f,c,d,_),!0}for(T=1,x=new Array(m-1);T<m;T++)x[T-1]=arguments[T];v.fn.apply(v.context,x)}else{var w=v.length,y;for(T=0;T<w;T++)switch(v[T].once&&this.removeListener(l,v[T].fn,void 0,!0),m){case 1:v[T].fn.call(v[T].context);break;case 2:v[T].fn.call(v[T].context,h);break;case 3:v[T].fn.call(v[T].context,h,f);break;case 4:v[T].fn.call(v[T].context,h,f,c);break;default:if(!x)for(y=1,x=new Array(m-1);y<m;y++)x[y-1]=arguments[y];v[T].fn.apply(v[T].context,x)}}return!0},s.prototype.on=function(l,h,f){return o(this,l,h,f,!1)},s.prototype.once=function(l,h,f){return o(this,l,h,f,!0)},s.prototype.removeListener=function(l,h,f,c){var d=t?t+l:l;if(!this._events[d])return this;if(!h)return a(this,d),this;var _=this._events[d];if(_.fn)_.fn===h&&(!c||_.once)&&(!f||_.context===f)&&a(this,d);else{for(var p=0,v=[],m=_.length;p<m;p++)(_[p].fn!==h||c&&!_[p].once||f&&_[p].context!==f)&&v.push(_[p]);v.length?this._events[d]=v.length===1?v[0]:v:a(this,d)}return this},s.prototype.removeAllListeners=function(l){var h;return l?(h=t?t+l:l,this._events[h]&&a(this,h)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,i.exports=s}(Eo)),Eo.exports}var ep=tp();const Wi=Su(ep);var en={exports:{}},bl;function rp(){if(bl)return en.exports;bl=1,en.exports=i,en.exports.default=i;function i(b,P,E){E=E||2;var F=P&&P.length,A=F?P[0]*E:b.length,O=e(b,0,A,E,!0),N=[];if(!O||O.next===O.prev)return N;var D,k,j,Y,$,Q,tt;if(F&&(O=u(b,P,O,E)),b.length>80*E){D=j=b[0],k=Y=b[1];for(var X=E;X<A;X+=E)$=b[X],Q=b[X+1],$<D&&(D=$),Q<k&&(k=Q),$>j&&(j=$),Q>Y&&(Y=Q);tt=Math.max(j-D,Y-k),tt=tt!==0?32767/tt:0}return r(O,N,E,D,k,tt,0),N}function e(b,P,E,F,A){var O,N;if(A===G(b,P,E,F)>0)for(O=P;O<E;O+=F)N=M(O,b[O],b[O+1],N);else for(O=E-F;O>=P;O-=F)N=M(O,b[O],b[O+1],N);return N&&w(N,N.next)&&(z(N),N=N.next),N}function t(b,P){if(!b)return b;P||(P=b);var E=b,F;do if(F=!1,!E.steiner&&(w(E,E.next)||T(E.prev,E,E.next)===0)){if(z(E),E=P=E.prev,E===E.next)break;F=!0}else E=E.next;while(F||E!==P);return P}function r(b,P,E,F,A,O,N){if(b){!N&&O&&d(b,F,A,O);for(var D=b,k,j;b.prev!==b.next;){if(k=b.prev,j=b.next,O?o(b,F,A,O):n(b)){P.push(k.i/E|0),P.push(b.i/E|0),P.push(j.i/E|0),z(b),b=j.next,D=j.next;continue}if(b=j,b===D){N?N===1?(b=a(t(b),P,E),r(b,P,E,F,A,O,2)):N===2&&s(b,P,E,F,A,O):r(t(b),P,E,F,A,O,1);break}}}}function n(b){var P=b.prev,E=b,F=b.next;if(T(P,E,F)>=0)return!1;for(var A=P.x,O=E.x,N=F.x,D=P.y,k=E.y,j=F.y,Y=A<O?A<N?A:N:O<N?O:N,$=D<k?D<j?D:j:k<j?k:j,Q=A>O?A>N?A:N:O>N?O:N,tt=D>k?D>j?D:j:k>j?k:j,X=F.next;X!==P;){if(X.x>=Y&&X.x<=Q&&X.y>=$&&X.y<=tt&&m(A,D,O,k,N,j,X.x,X.y)&&T(X.prev,X,X.next)>=0)return!1;X=X.next}return!0}function o(b,P,E,F){var A=b.prev,O=b,N=b.next;if(T(A,O,N)>=0)return!1;for(var D=A.x,k=O.x,j=N.x,Y=A.y,$=O.y,Q=N.y,tt=D<k?D<j?D:j:k<j?k:j,X=Y<$?Y<Q?Y:Q:$<Q?$:Q,K=D>k?D>j?D:j:k>j?k:j,J=Y>$?Y>Q?Y:Q:$>Q?$:Q,ot=p(tt,X,P,E,F),et=p(K,J,P,E,F),Z=b.prevZ,q=b.nextZ;Z&&Z.z>=ot&&q&&q.z<=et;){if(Z.x>=tt&&Z.x<=K&&Z.y>=X&&Z.y<=J&&Z!==A&&Z!==N&&m(D,Y,k,$,j,Q,Z.x,Z.y)&&T(Z.prev,Z,Z.next)>=0||(Z=Z.prevZ,q.x>=tt&&q.x<=K&&q.y>=X&&q.y<=J&&q!==A&&q!==N&&m(D,Y,k,$,j,Q,q.x,q.y)&&T(q.prev,q,q.next)>=0))return!1;q=q.nextZ}for(;Z&&Z.z>=ot;){if(Z.x>=tt&&Z.x<=K&&Z.y>=X&&Z.y<=J&&Z!==A&&Z!==N&&m(D,Y,k,$,j,Q,Z.x,Z.y)&&T(Z.prev,Z,Z.next)>=0)return!1;Z=Z.prevZ}for(;q&&q.z<=et;){if(q.x>=tt&&q.x<=K&&q.y>=X&&q.y<=J&&q!==A&&q!==N&&m(D,Y,k,$,j,Q,q.x,q.y)&&T(q.prev,q,q.next)>=0)return!1;q=q.nextZ}return!0}function a(b,P,E){var F=b;do{var A=F.prev,O=F.next.next;!w(A,O)&&y(A,F,F.next,O)&&C(A,O)&&C(O,A)&&(P.push(A.i/E|0),P.push(F.i/E|0),P.push(O.i/E|0),z(F),z(F.next),F=b=O),F=F.next}while(F!==b);return t(F)}function s(b,P,E,F,A,O){var N=b;do{for(var D=N.next.next;D!==N.prev;){if(N.i!==D.i&&x(N,D)){var k=U(N,D);N=t(N,N.next),k=t(k,k.next),r(N,P,E,F,A,O,0),r(k,P,E,F,A,O,0);return}D=D.next}N=N.next}while(N!==b)}function u(b,P,E,F){var A=[],O,N,D,k,j;for(O=0,N=P.length;O<N;O++)D=P[O]*F,k=O<N-1?P[O+1]*F:b.length,j=e(b,D,k,F,!1),j===j.next&&(j.steiner=!0),A.push(v(j));for(A.sort(l),O=0;O<A.length;O++)E=h(A[O],E);return E}function l(b,P){return b.x-P.x}function h(b,P){var E=f(b,P);if(!E)return P;var F=U(E,b);return t(F,F.next),t(E,E.next)}function f(b,P){var E=P,F=b.x,A=b.y,O=-1/0,N;do{if(A<=E.y&&A>=E.next.y&&E.next.y!==E.y){var D=E.x+(A-E.y)*(E.next.x-E.x)/(E.next.y-E.y);if(D<=F&&D>O&&(O=D,N=E.x<E.next.x?E:E.next,D===F))return N}E=E.next}while(E!==P);if(!N)return null;var k=N,j=N.x,Y=N.y,$=1/0,Q;E=N;do F>=E.x&&E.x>=j&&F!==E.x&&m(A<Y?F:O,A,j,Y,A<Y?O:F,A,E.x,E.y)&&(Q=Math.abs(A-E.y)/(F-E.x),C(E,b)&&(Q<$||Q===$&&(E.x>N.x||E.x===N.x&&c(N,E)))&&(N=E,$=Q)),E=E.next;while(E!==k);return N}function c(b,P){return T(b.prev,b,P.prev)<0&&T(P.next,b,b.next)<0}function d(b,P,E,F){var A=b;do A.z===0&&(A.z=p(A.x,A.y,P,E,F)),A.prevZ=A.prev,A.nextZ=A.next,A=A.next;while(A!==b);A.prevZ.nextZ=null,A.prevZ=null,_(A)}function _(b){var P,E,F,A,O,N,D,k,j=1;do{for(E=b,b=null,O=null,N=0;E;){for(N++,F=E,D=0,P=0;P<j&&(D++,F=F.nextZ,!!F);P++);for(k=j;D>0||k>0&&F;)D!==0&&(k===0||!F||E.z<=F.z)?(A=E,E=E.nextZ,D--):(A=F,F=F.nextZ,k--),O?O.nextZ=A:b=A,A.prevZ=O,O=A;E=F}O.nextZ=null,j*=2}while(N>1);return b}function p(b,P,E,F,A){return b=(b-E)*A|0,P=(P-F)*A|0,b=(b|b<<8)&16711935,b=(b|b<<4)&252645135,b=(b|b<<2)&858993459,b=(b|b<<1)&1431655765,P=(P|P<<8)&16711935,P=(P|P<<4)&252645135,P=(P|P<<2)&858993459,P=(P|P<<1)&1431655765,b|P<<1}function v(b){var P=b,E=b;do(P.x<E.x||P.x===E.x&&P.y<E.y)&&(E=P),P=P.next;while(P!==b);return E}function m(b,P,E,F,A,O,N,D){return(A-N)*(P-D)>=(b-N)*(O-D)&&(b-N)*(F-D)>=(E-N)*(P-D)&&(E-N)*(O-D)>=(A-N)*(F-D)}function x(b,P){return b.next.i!==P.i&&b.prev.i!==P.i&&!R(b,P)&&(C(b,P)&&C(P,b)&&I(b,P)&&(T(b.prev,b,P.prev)||T(b,P.prev,P))||w(b,P)&&T(b.prev,b,b.next)>0&&T(P.prev,P,P.next)>0)}function T(b,P,E){return(P.y-b.y)*(E.x-P.x)-(P.x-b.x)*(E.y-P.y)}function w(b,P){return b.x===P.x&&b.y===P.y}function y(b,P,E,F){var A=g(T(b,P,E)),O=g(T(b,P,F)),N=g(T(E,F,b)),D=g(T(E,F,P));return!!(A!==O&&N!==D||A===0&&S(b,E,P)||O===0&&S(b,F,P)||N===0&&S(E,b,F)||D===0&&S(E,P,F))}function S(b,P,E){return P.x<=Math.max(b.x,E.x)&&P.x>=Math.min(b.x,E.x)&&P.y<=Math.max(b.y,E.y)&&P.y>=Math.min(b.y,E.y)}function g(b){return b>0?1:b<0?-1:0}function R(b,P){var E=b;do{if(E.i!==b.i&&E.next.i!==b.i&&E.i!==P.i&&E.next.i!==P.i&&y(E,E.next,b,P))return!0;E=E.next}while(E!==b);return!1}function C(b,P){return T(b.prev,b,b.next)<0?T(b,P,b.next)>=0&&T(b,b.prev,P)>=0:T(b,P,b.prev)<0||T(b,b.next,P)<0}function I(b,P){var E=b,F=!1,A=(b.x+P.x)/2,O=(b.y+P.y)/2;do E.y>O!=E.next.y>O&&E.next.y!==E.y&&A<(E.next.x-E.x)*(O-E.y)/(E.next.y-E.y)+E.x&&(F=!F),E=E.next;while(E!==b);return F}function U(b,P){var E=new V(b.i,b.x,b.y),F=new V(P.i,P.x,P.y),A=b.next,O=P.prev;return b.next=P,P.prev=b,E.next=A,A.prev=E,F.next=E,E.prev=F,O.next=F,F.prev=O,F}function M(b,P,E,F){var A=new V(b,P,E);return F?(A.next=F.next,A.prev=F,F.next.prev=A,F.next=A):(A.prev=A,A.next=A),A}function z(b){b.next.prev=b.prev,b.prev.next=b.next,b.prevZ&&(b.prevZ.nextZ=b.nextZ),b.nextZ&&(b.nextZ.prevZ=b.prevZ)}function V(b,P,E){this.i=b,this.x=P,this.y=E,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}i.deviation=function(b,P,E,F){var A=P&&P.length,O=A?P[0]*E:b.length,N=Math.abs(G(b,0,O,E));if(A)for(var D=0,k=P.length;D<k;D++){var j=P[D]*E,Y=D<k-1?P[D+1]*E:b.length;N-=Math.abs(G(b,j,Y,E))}var $=0;for(D=0;D<F.length;D+=3){var Q=F[D]*E,tt=F[D+1]*E,X=F[D+2]*E;$+=Math.abs((b[Q]-b[X])*(b[tt+1]-b[Q+1])-(b[Q]-b[tt])*(b[X+1]-b[Q+1]))}return N===0&&$===0?0:Math.abs(($-N)/N)};function G(b,P,E,F){for(var A=0,O=P,N=E-F;O<E;O+=F)A+=(b[N]-b[O])*(b[O+1]+b[N+1]),N=O;return A}return i.flatten=function(b){for(var P=b[0][0].length,E={vertices:[],holes:[],dimensions:P},F=0,A=0;A<b.length;A++){for(var O=0;O<b[A].length;O++)for(var N=0;N<P;N++)E.vertices.push(b[A][O][N]);A>0&&(F+=b[A-1].length,E.holes.push(F))}return E},en.exports}var ip=rp();const If=Su(ip);var dr={},Ti={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */var np=Ti.exports,Tl;function op(){return Tl||(Tl=1,function(i,e){(function(t){var r=e&&!e.nodeType&&e,n=i&&!i.nodeType&&i,o=typeof In=="object"&&In;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,l=1,h=26,f=38,c=700,d=72,_=128,p="-",v=/^xn--/,m=/[^\x20-\x7E]/,x=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=u-l,y=Math.floor,S=String.fromCharCode,g;function R(A){throw new RangeError(T[A])}function C(A,O){for(var N=A.length,D=[];N--;)D[N]=O(A[N]);return D}function I(A,O){var N=A.split("@"),D="";N.length>1&&(D=N[0]+"@",A=N[1]),A=A.replace(x,".");var k=A.split("."),j=C(k,O).join(".");return D+j}function U(A){for(var O=[],N=0,D=A.length,k,j;N<D;)k=A.charCodeAt(N++),k>=55296&&k<=56319&&N<D?(j=A.charCodeAt(N++),(j&64512)==56320?O.push(((k&1023)<<10)+(j&1023)+65536):(O.push(k),N--)):O.push(k);return O}function M(A){return C(A,function(O){var N="";return O>65535&&(O-=65536,N+=S(O>>>10&1023|55296),O=56320|O&1023),N+=S(O),N}).join("")}function z(A){return A-48<10?A-22:A-65<26?A-65:A-97<26?A-97:u}function V(A,O){return A+22+75*(A<26)-((O!=0)<<5)}function G(A,O,N){var D=0;for(A=N?y(A/c):A>>1,A+=y(A/O);A>w*h>>1;D+=u)A=y(A/w);return y(D+(w+1)*A/(A+f))}function b(A){var O=[],N=A.length,D,k=0,j=_,Y=d,$,Q,tt,X,K,J,ot,et,Z;for($=A.lastIndexOf(p),$<0&&($=0),Q=0;Q<$;++Q)A.charCodeAt(Q)>=128&&R("not-basic"),O.push(A.charCodeAt(Q));for(tt=$>0?$+1:0;tt<N;){for(X=k,K=1,J=u;tt>=N&&R("invalid-input"),ot=z(A.charCodeAt(tt++)),(ot>=u||ot>y((s-k)/K))&&R("overflow"),k+=ot*K,et=J<=Y?l:J>=Y+h?h:J-Y,!(ot<et);J+=u)Z=u-et,K>y(s/Z)&&R("overflow"),K*=Z;D=O.length+1,Y=G(k-X,D,X==0),y(k/D)>s-j&&R("overflow"),j+=y(k/D),k%=D,O.splice(k++,0,j)}return M(O)}function P(A){var O,N,D,k,j,Y,$,Q,tt,X,K,J=[],ot,et,Z,q;for(A=U(A),ot=A.length,O=_,N=0,j=d,Y=0;Y<ot;++Y)K=A[Y],K<128&&J.push(S(K));for(D=k=J.length,k&&J.push(p);D<ot;){for($=s,Y=0;Y<ot;++Y)K=A[Y],K>=O&&K<$&&($=K);for(et=D+1,$-O>y((s-N)/et)&&R("overflow"),N+=($-O)*et,O=$,Y=0;Y<ot;++Y)if(K=A[Y],K<O&&++N>s&&R("overflow"),K==O){for(Q=N,tt=u;X=tt<=j?l:tt>=j+h?h:tt-j,!(Q<X);tt+=u)q=Q-X,Z=u-X,J.push(S(V(X+q%Z,0))),Q=y(q/Z);J.push(S(V(Q,0))),j=G(N,et,D==k),N=0,++D}++N,++O}return J.join("")}function E(A){return I(A,function(O){return v.test(O)?b(O.slice(4).toLowerCase()):O})}function F(A){return I(A,function(O){return m.test(O)?"xn--"+P(O):O})}if(a={version:"1.4.1",ucs2:{decode:U,encode:M},decode:b,encode:P,toASCII:F,toUnicode:E},r&&n)if(i.exports==r)n.exports=a;else for(g in a)a.hasOwnProperty(g)&&(r[g]=a[g]);else t.punycode=a})(np)}(Ti,Ti.exports)),Ti.exports}var wo,Sl;function hi(){return Sl||(Sl=1,wo=TypeError),wo}const ap={},sp=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"})),up=Xd(sp);var Po,El;function Qn(){if(El)return Po;El=1;var i=typeof Map=="function"&&Map.prototype,e=Object.getOwnPropertyDescriptor&&i?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,t=i&&e&&typeof e.get=="function"?e.get:null,r=i&&Map.prototype.forEach,n=typeof Set=="function"&&Set.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,a=n&&o&&typeof o.get=="function"?o.get:null,s=n&&Set.prototype.forEach,u=typeof WeakMap=="function"&&WeakMap.prototype,l=u?WeakMap.prototype.has:null,h=typeof WeakSet=="function"&&WeakSet.prototype,f=h?WeakSet.prototype.has:null,c=typeof WeakRef=="function"&&WeakRef.prototype,d=c?WeakRef.prototype.deref:null,_=Boolean.prototype.valueOf,p=Object.prototype.toString,v=Function.prototype.toString,m=String.prototype.match,x=String.prototype.slice,T=String.prototype.replace,w=String.prototype.toUpperCase,y=String.prototype.toLowerCase,S=RegExp.prototype.test,g=Array.prototype.concat,R=Array.prototype.join,C=Array.prototype.slice,I=Math.floor,U=typeof BigInt=="function"?BigInt.prototype.valueOf:null,M=Object.getOwnPropertySymbols,z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,V=typeof Symbol=="function"&&typeof Symbol.iterator=="object",G=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===V||!0)?Symbol.toStringTag:null,b=Object.prototype.propertyIsEnumerable,P=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(B){return B.__proto__}:null);function E(B,L){if(B===1/0||B===-1/0||B!==B||B&&B>-1e3&&B<1e3||S.call(/e/,L))return L;var vt=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof B=="number"){var gt=B<0?-I(-B):I(B);if(gt!==B){var Tt=String(gt),lt=x.call(L,Tt.length+1);return T.call(Tt,vt,"$&_")+"."+T.call(T.call(lt,/([0-9]{3})/g,"$&_"),/_$/,"")}}return T.call(L,vt,"$&_")}var F=up,A=F.custom,O=et(A)?A:null,N={__proto__:null,double:'"',single:"'"},D={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};Po=function B(L,vt,gt,Tt){var lt=vt||{};if(nt(lt,"quoteStyle")&&!nt(N,lt.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(nt(lt,"maxStringLength")&&(typeof lt.maxStringLength=="number"?lt.maxStringLength<0&&lt.maxStringLength!==1/0:lt.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var Ke=nt(lt,"customInspect")?lt.customInspect:!0;if(typeof Ke!="boolean"&&Ke!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(nt(lt,"indent")&&lt.indent!==null&&lt.indent!=="	"&&!(parseInt(lt.indent,10)===lt.indent&&lt.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(nt(lt,"numericSeparator")&&typeof lt.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var cr=lt.numericSeparator;if(typeof L>"u")return"undefined";if(L===null)return"null";if(typeof L=="boolean")return L?"true":"false";if(typeof L=="string")return Ku(L,lt);if(typeof L=="number"){if(L===0)return 1/0/L>0?"0":"-0";var re=String(L);return cr?E(L,re):re}if(typeof L=="bigint"){var Ze=String(L)+"n";return cr?E(L,Ze):Ze}var ho=typeof lt.depth>"u"?5:lt.depth;if(typeof gt>"u"&&(gt=0),gt>=ho&&ho>0&&typeof L=="object")return $(L)?"[Array]":"[Object]";var jr=Id(lt,gt);if(typeof Tt>"u")Tt=[];else if(ee(Tt,L)>=0)return"[Circular]";function pe(zr,Ji,Fd){if(Ji&&(Tt=C.call(Tt),Tt.push(Ji)),Fd){var ol={depth:lt.depth};return nt(lt,"quoteStyle")&&(ol.quoteStyle=lt.quoteStyle),B(zr,ol,gt+1,Tt)}return B(zr,lt,gt+1,Tt)}if(typeof L=="function"&&!tt(L)){var Qu=te(L),Ju=Zi(L,pe);return"[Function"+(Qu?": "+Qu:" (anonymous)")+"]"+(Ju.length>0?" { "+R.call(Ju,", ")+" }":"")}if(et(L)){var tl=V?T.call(String(L),/^(Symbol\(.*\))_[^)]*$/,"$1"):z.call(L);return typeof L=="object"&&!V?ci(tl):tl}if(Od(L)){for(var di="<"+y.call(String(L.nodeName)),fo=L.attributes||[],Qi=0;Qi<fo.length;Qi++)di+=" "+fo[Qi].name+"="+k(j(fo[Qi].value),"double",lt);return di+=">",L.childNodes&&L.childNodes.length&&(di+="..."),di+="</"+y.call(String(L.nodeName))+">",di}if($(L)){if(L.length===0)return"[]";var co=Zi(L,pe);return jr&&!Rd(co)?"["+lo(co,jr)+"]":"[ "+R.call(co,", ")+" ]"}if(X(L)){var po=Zi(L,pe);return!("cause"in Error.prototype)&&"cause"in L&&!b.call(L,"cause")?"{ ["+String(L)+"] "+R.call(g.call("[cause]: "+pe(L.cause),po),", ")+" }":po.length===0?"["+String(L)+"]":"{ ["+String(L)+"] "+R.call(po,", ")+" }"}if(typeof L=="object"&&Ke){if(O&&typeof L[O]=="function"&&F)return F(L,{depth:ho-gt});if(Ke!=="symbol"&&typeof L.inspect=="function")return L.inspect()}if($t(L)){var el=[];return r&&r.call(L,function(zr,Ji){el.push(pe(Ji,L,!0)+" => "+pe(zr,L))}),Zu("Map",t.call(L),el,jr)}if(Be(L)){var rl=[];return s&&s.call(L,function(zr){rl.push(pe(zr,L))}),Zu("Set",a.call(L),rl,jr)}if(De(L))return uo("WeakMap");if(Cd(L))return uo("WeakSet");if(Ne(L))return uo("WeakRef");if(J(L))return ci(pe(Number(L)));if(Z(L))return ci(pe(U.call(L)));if(ot(L))return ci(_.call(L));if(K(L))return ci(pe(String(L)));if(typeof window<"u"&&L===window)return"{ [object Window] }";if(typeof globalThis<"u"&&L===globalThis||typeof In<"u"&&L===In)return"{ [object globalThis] }";if(!Q(L)&&!tt(L)){var vo=Zi(L,pe),il=P?P(L)===Object.prototype:L instanceof Object||L.constructor===Object,_o=L instanceof Object?"":"null prototype",nl=!il&&G&&Object(L)===L&&G in L?x.call(bt(L),8,-1):_o?"Object":"",Md=il||typeof L.constructor!="function"?"":L.constructor.name?L.constructor.name+" ":"",mo=Md+(nl||_o?"["+R.call(g.call([],nl||[],_o||[]),": ")+"] ":"");return vo.length===0?mo+"{}":jr?mo+"{"+lo(vo,jr)+"}":mo+"{ "+R.call(vo,", ")+" }"}return String(L)};function k(B,L,vt){var gt=vt.quoteStyle||L,Tt=N[gt];return Tt+B+Tt}function j(B){return T.call(String(B),/"/g,"&quot;")}function Y(B){return!G||!(typeof B=="object"&&(G in B||typeof B[G]<"u"))}function $(B){return bt(B)==="[object Array]"&&Y(B)}function Q(B){return bt(B)==="[object Date]"&&Y(B)}function tt(B){return bt(B)==="[object RegExp]"&&Y(B)}function X(B){return bt(B)==="[object Error]"&&Y(B)}function K(B){return bt(B)==="[object String]"&&Y(B)}function J(B){return bt(B)==="[object Number]"&&Y(B)}function ot(B){return bt(B)==="[object Boolean]"&&Y(B)}function et(B){if(V)return B&&typeof B=="object"&&B instanceof Symbol;if(typeof B=="symbol")return!0;if(!B||typeof B!="object"||!z)return!1;try{return z.call(B),!0}catch{}return!1}function Z(B){if(!B||typeof B!="object"||!U)return!1;try{return U.call(B),!0}catch{}return!1}var q=Object.prototype.hasOwnProperty||function(B){return B in this};function nt(B,L){return q.call(B,L)}function bt(B){return p.call(B)}function te(B){if(B.name)return B.name;var L=m.call(v.call(B),/^function\s*([\w$]+)/);return L?L[1]:null}function ee(B,L){if(B.indexOf)return B.indexOf(L);for(var vt=0,gt=B.length;vt<gt;vt++)if(B[vt]===L)return vt;return-1}function $t(B){if(!t||!B||typeof B!="object")return!1;try{t.call(B);try{a.call(B)}catch{return!0}return B instanceof Map}catch{}return!1}function De(B){if(!l||!B||typeof B!="object")return!1;try{l.call(B,l);try{f.call(B,f)}catch{return!0}return B instanceof WeakMap}catch{}return!1}function Ne(B){if(!d||!B||typeof B!="object")return!1;try{return d.call(B),!0}catch{}return!1}function Be(B){if(!a||!B||typeof B!="object")return!1;try{a.call(B);try{t.call(B)}catch{return!0}return B instanceof Set}catch{}return!1}function Cd(B){if(!f||!B||typeof B!="object")return!1;try{f.call(B,f);try{l.call(B,l)}catch{return!0}return B instanceof WeakSet}catch{}return!1}function Od(B){return!B||typeof B!="object"?!1:typeof HTMLElement<"u"&&B instanceof HTMLElement?!0:typeof B.nodeName=="string"&&typeof B.getAttribute=="function"}function Ku(B,L){if(B.length>L.maxStringLength){var vt=B.length-L.maxStringLength,gt="... "+vt+" more character"+(vt>1?"s":"");return Ku(x.call(B,0,L.maxStringLength),L)+gt}var Tt=D[L.quoteStyle||"single"];Tt.lastIndex=0;var lt=T.call(T.call(B,Tt,"\\$1"),/[\x00-\x1f]/g,Ad);return k(lt,"single",L)}function Ad(B){var L=B.charCodeAt(0),vt={8:"b",9:"t",10:"n",12:"f",13:"r"}[L];return vt?"\\"+vt:"\\x"+(L<16?"0":"")+w.call(L.toString(16))}function ci(B){return"Object("+B+")"}function uo(B){return B+" { ? }"}function Zu(B,L,vt,gt){var Tt=gt?lo(vt,gt):R.call(vt,", ");return B+" ("+L+") {"+Tt+"}"}function Rd(B){for(var L=0;L<B.length;L++)if(ee(B[L],`
`)>=0)return!1;return!0}function Id(B,L){var vt;if(B.indent==="	")vt="	";else if(typeof B.indent=="number"&&B.indent>0)vt=R.call(Array(B.indent+1)," ");else return null;return{base:vt,prev:R.call(Array(L+1),vt)}}function lo(B,L){if(B.length===0)return"";var vt=`
`+L.prev+L.base;return vt+R.call(B,","+vt)+`
`+L.prev}function Zi(B,L){var vt=$(B),gt=[];if(vt){gt.length=B.length;for(var Tt=0;Tt<B.length;Tt++)gt[Tt]=nt(B,Tt)?L(B[Tt],B):""}var lt=typeof M=="function"?M(B):[],Ke;if(V){Ke={};for(var cr=0;cr<lt.length;cr++)Ke["$"+lt[cr]]=lt[cr]}for(var re in B)nt(B,re)&&(vt&&String(Number(re))===re&&re<B.length||V&&Ke["$"+re]instanceof Symbol||(S.call(/[^\w$]/,re)?gt.push(L(re,B)+": "+L(B[re],B)):gt.push(re+": "+L(B[re],B))));if(typeof M=="function")for(var Ze=0;Ze<lt.length;Ze++)b.call(B,lt[Ze])&&gt.push("["+L(lt[Ze])+"]: "+L(B[lt[Ze]],B));return gt}return Po}var Co,wl;function lp(){if(wl)return Co;wl=1;var i=Qn(),e=hi(),t=function(s,u,l){for(var h=s,f;(f=h.next)!=null;h=f)if(f.key===u)return h.next=f.next,l||(f.next=s.next,s.next=f),f},r=function(s,u){if(s){var l=t(s,u);return l&&l.value}},n=function(s,u,l){var h=t(s,u);h?h.value=l:s.next={key:u,next:s.next,value:l}},o=function(s,u){return s?!!t(s,u):!1},a=function(s,u){if(s)return t(s,u,!0)};return Co=function(){var u,l={assert:function(h){if(!l.has(h))throw new e("Side channel does not contain "+i(h))},delete:function(h){var f=u&&u.next,c=a(u,h);return c&&f&&f===c&&(u=void 0),!!c},get:function(h){return r(u,h)},has:function(h){return o(u,h)},set:function(h,f){u||(u={next:void 0}),n(u,h,f)}};return l},Co}var Oo,Pl;function Mf(){return Pl||(Pl=1,Oo=Object),Oo}var Ao,Cl;function hp(){return Cl||(Cl=1,Ao=Error),Ao}var Ro,Ol;function fp(){return Ol||(Ol=1,Ro=EvalError),Ro}var Io,Al;function cp(){return Al||(Al=1,Io=RangeError),Io}var Mo,Rl;function dp(){return Rl||(Rl=1,Mo=ReferenceError),Mo}var Fo,Il;function pp(){return Il||(Il=1,Fo=SyntaxError),Fo}var Do,Ml;function vp(){return Ml||(Ml=1,Do=URIError),Do}var No,Fl;function _p(){return Fl||(Fl=1,No=Math.abs),No}var Bo,Dl;function mp(){return Dl||(Dl=1,Bo=Math.floor),Bo}var Lo,Nl;function yp(){return Nl||(Nl=1,Lo=Math.max),Lo}var Uo,Bl;function gp(){return Bl||(Bl=1,Uo=Math.min),Uo}var ko,Ll;function xp(){return Ll||(Ll=1,ko=Math.pow),ko}var Go,Ul;function bp(){return Ul||(Ul=1,Go=Math.round),Go}var jo,kl;function Tp(){return kl||(kl=1,jo=Number.isNaN||function(e){return e!==e}),jo}var zo,Gl;function Sp(){if(Gl)return zo;Gl=1;var i=Tp();return zo=function(t){return i(t)||t===0?t:t<0?-1:1},zo}var Xo,jl;function Ep(){return jl||(jl=1,Xo=Object.getOwnPropertyDescriptor),Xo}var Ho,zl;function Ff(){if(zl)return Ho;zl=1;var i=Ep();if(i)try{i([],"length")}catch{i=null}return Ho=i,Ho}var Vo,Xl;function wp(){if(Xl)return Vo;Xl=1;var i=Object.defineProperty||!1;if(i)try{i({},"a",{value:1})}catch{i=!1}return Vo=i,Vo}var Wo,Hl;function Pp(){return Hl||(Hl=1,Wo=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),r=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var n=42;e[t]=n;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,t);if(s.value!==n||s.enumerable!==!0)return!1}return!0}),Wo}var Yo,Vl;function Cp(){if(Vl)return Yo;Vl=1;var i=typeof Symbol<"u"&&Symbol,e=Pp();return Yo=function(){return typeof i!="function"||typeof Symbol!="function"||typeof i("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:e()},Yo}var $o,Wl;function Df(){return Wl||(Wl=1,$o=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),$o}var qo,Yl;function Nf(){if(Yl)return qo;Yl=1;var i=Mf();return qo=i.getPrototypeOf||null,qo}var Ko,$l;function Op(){if($l)return Ko;$l=1;var i="Function.prototype.bind called on incompatible ",e=Object.prototype.toString,t=Math.max,r="[object Function]",n=function(u,l){for(var h=[],f=0;f<u.length;f+=1)h[f]=u[f];for(var c=0;c<l.length;c+=1)h[c+u.length]=l[c];return h},o=function(u,l){for(var h=[],f=l,c=0;f<u.length;f+=1,c+=1)h[c]=u[f];return h},a=function(s,u){for(var l="",h=0;h<s.length;h+=1)l+=s[h],h+1<s.length&&(l+=u);return l};return Ko=function(u){var l=this;if(typeof l!="function"||e.apply(l)!==r)throw new TypeError(i+l);for(var h=o(arguments,1),f,c=function(){if(this instanceof f){var m=l.apply(this,n(h,arguments));return Object(m)===m?m:this}return l.apply(u,n(h,arguments))},d=t(0,l.length-h.length),_=[],p=0;p<d;p++)_[p]="$"+p;if(f=Function("binder","return function ("+a(_,",")+"){ return binder.apply(this,arguments); }")(c),l.prototype){var v=function(){};v.prototype=l.prototype,f.prototype=new v,v.prototype=null}return f},Ko}var Zo,ql;function Jn(){if(ql)return Zo;ql=1;var i=Op();return Zo=Function.prototype.bind||i,Zo}var Qo,Kl;function Eu(){return Kl||(Kl=1,Qo=Function.prototype.call),Qo}var Jo,Zl;function Bf(){return Zl||(Zl=1,Jo=Function.prototype.apply),Jo}var ta,Ql;function Ap(){return Ql||(Ql=1,ta=typeof Reflect<"u"&&Reflect&&Reflect.apply),ta}var ea,Jl;function Rp(){if(Jl)return ea;Jl=1;var i=Jn(),e=Bf(),t=Eu(),r=Ap();return ea=r||i.call(t,e),ea}var ra,th;function Lf(){if(th)return ra;th=1;var i=Jn(),e=hi(),t=Eu(),r=Rp();return ra=function(o){if(o.length<1||typeof o[0]!="function")throw new e("a function is required");return r(i,t,o)},ra}var ia,eh;function Ip(){if(eh)return ia;eh=1;var i=Lf(),e=Ff(),t;try{t=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var r=!!t&&e&&e(Object.prototype,"__proto__"),n=Object,o=n.getPrototypeOf;return ia=r&&typeof r.get=="function"?i([r.get]):typeof o=="function"?function(s){return o(s==null?s:n(s))}:!1,ia}var na,rh;function Mp(){if(rh)return na;rh=1;var i=Df(),e=Nf(),t=Ip();return na=i?function(n){return i(n)}:e?function(n){if(!n||typeof n!="object"&&typeof n!="function")throw new TypeError("getProto: not an object");return e(n)}:t?function(n){return t(n)}:null,na}var oa,ih;function Fp(){if(ih)return oa;ih=1;var i=Function.prototype.call,e=Object.prototype.hasOwnProperty,t=Jn();return oa=t.call(i,e),oa}var aa,nh;function wu(){if(nh)return aa;nh=1;var i,e=Mf(),t=hp(),r=fp(),n=cp(),o=dp(),a=pp(),s=hi(),u=vp(),l=_p(),h=mp(),f=yp(),c=gp(),d=xp(),_=bp(),p=Sp(),v=Function,m=function(tt){try{return v('"use strict"; return ('+tt+").constructor;")()}catch{}},x=Ff(),T=wp(),w=function(){throw new s},y=x?function(){try{return arguments.callee,w}catch{try{return x(arguments,"callee").get}catch{return w}}}():w,S=Cp()(),g=Mp(),R=Nf(),C=Df(),I=Bf(),U=Eu(),M={},z=typeof Uint8Array>"u"||!g?i:g(Uint8Array),V={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?i:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?i:ArrayBuffer,"%ArrayIteratorPrototype%":S&&g?g([][Symbol.iterator]()):i,"%AsyncFromSyncIteratorPrototype%":i,"%AsyncFunction%":M,"%AsyncGenerator%":M,"%AsyncGeneratorFunction%":M,"%AsyncIteratorPrototype%":M,"%Atomics%":typeof Atomics>"u"?i:Atomics,"%BigInt%":typeof BigInt>"u"?i:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?i:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?i:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?i:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":t,"%eval%":eval,"%EvalError%":r,"%Float16Array%":typeof Float16Array>"u"?i:Float16Array,"%Float32Array%":typeof Float32Array>"u"?i:Float32Array,"%Float64Array%":typeof Float64Array>"u"?i:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?i:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":M,"%Int8Array%":typeof Int8Array>"u"?i:Int8Array,"%Int16Array%":typeof Int16Array>"u"?i:Int16Array,"%Int32Array%":typeof Int32Array>"u"?i:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":S&&g?g(g([][Symbol.iterator]())):i,"%JSON%":typeof JSON=="object"?JSON:i,"%Map%":typeof Map>"u"?i:Map,"%MapIteratorPrototype%":typeof Map>"u"||!S||!g?i:g(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":e,"%Object.getOwnPropertyDescriptor%":x,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?i:Promise,"%Proxy%":typeof Proxy>"u"?i:Proxy,"%RangeError%":n,"%ReferenceError%":o,"%Reflect%":typeof Reflect>"u"?i:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?i:Set,"%SetIteratorPrototype%":typeof Set>"u"||!S||!g?i:g(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?i:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":S&&g?g(""[Symbol.iterator]()):i,"%Symbol%":S?Symbol:i,"%SyntaxError%":a,"%ThrowTypeError%":y,"%TypedArray%":z,"%TypeError%":s,"%Uint8Array%":typeof Uint8Array>"u"?i:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?i:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?i:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?i:Uint32Array,"%URIError%":u,"%WeakMap%":typeof WeakMap>"u"?i:WeakMap,"%WeakRef%":typeof WeakRef>"u"?i:WeakRef,"%WeakSet%":typeof WeakSet>"u"?i:WeakSet,"%Function.prototype.call%":U,"%Function.prototype.apply%":I,"%Object.defineProperty%":T,"%Object.getPrototypeOf%":R,"%Math.abs%":l,"%Math.floor%":h,"%Math.max%":f,"%Math.min%":c,"%Math.pow%":d,"%Math.round%":_,"%Math.sign%":p,"%Reflect.getPrototypeOf%":C};if(g)try{null.error}catch(tt){var G=g(g(tt));V["%Error.prototype%"]=G}var b=function tt(X){var K;if(X==="%AsyncFunction%")K=m("async function () {}");else if(X==="%GeneratorFunction%")K=m("function* () {}");else if(X==="%AsyncGeneratorFunction%")K=m("async function* () {}");else if(X==="%AsyncGenerator%"){var J=tt("%AsyncGeneratorFunction%");J&&(K=J.prototype)}else if(X==="%AsyncIteratorPrototype%"){var ot=tt("%AsyncGenerator%");ot&&g&&(K=g(ot.prototype))}return V[X]=K,K},P={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},E=Jn(),F=Fp(),A=E.call(U,Array.prototype.concat),O=E.call(I,Array.prototype.splice),N=E.call(U,String.prototype.replace),D=E.call(U,String.prototype.slice),k=E.call(U,RegExp.prototype.exec),j=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Y=/\\(\\)?/g,$=function(X){var K=D(X,0,1),J=D(X,-1);if(K==="%"&&J!=="%")throw new a("invalid intrinsic syntax, expected closing `%`");if(J==="%"&&K!=="%")throw new a("invalid intrinsic syntax, expected opening `%`");var ot=[];return N(X,j,function(et,Z,q,nt){ot[ot.length]=q?N(nt,Y,"$1"):Z||et}),ot},Q=function(X,K){var J=X,ot;if(F(P,J)&&(ot=P[J],J="%"+ot[0]+"%"),F(V,J)){var et=V[J];if(et===M&&(et=b(J)),typeof et>"u"&&!K)throw new s("intrinsic "+X+" exists, but is not available. Please file an issue!");return{alias:ot,name:J,value:et}}throw new a("intrinsic "+X+" does not exist!")};return aa=function(X,K){if(typeof X!="string"||X.length===0)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof K!="boolean")throw new s('"allowMissing" argument must be a boolean');if(k(/^%?[^%]*%?$/,X)===null)throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var J=$(X),ot=J.length>0?J[0]:"",et=Q("%"+ot+"%",K),Z=et.name,q=et.value,nt=!1,bt=et.alias;bt&&(ot=bt[0],O(J,A([0,1],bt)));for(var te=1,ee=!0;te<J.length;te+=1){var $t=J[te],De=D($t,0,1),Ne=D($t,-1);if((De==='"'||De==="'"||De==="`"||Ne==='"'||Ne==="'"||Ne==="`")&&De!==Ne)throw new a("property names with quotes must have matching quotes");if(($t==="constructor"||!ee)&&(nt=!0),ot+="."+$t,Z="%"+ot+"%",F(V,Z))q=V[Z];else if(q!=null){if(!($t in q)){if(!K)throw new s("base intrinsic for "+X+" exists, but the property is not available.");return}if(x&&te+1>=J.length){var Be=x(q,$t);ee=!!Be,ee&&"get"in Be&&!("originalValue"in Be.get)?q=Be.get:q=q[$t]}else ee=F(q,$t),q=q[$t];ee&&!nt&&(V[Z]=q)}}return q},aa}var sa,oh;function Uf(){if(oh)return sa;oh=1;var i=wu(),e=Lf(),t=e([i("%String.prototype.indexOf%")]);return sa=function(n,o){var a=i(n,!!o);return typeof a=="function"&&t(n,".prototype.")>-1?e([a]):a},sa}var ua,ah;function kf(){if(ah)return ua;ah=1;var i=wu(),e=Uf(),t=Qn(),r=hi(),n=i("%Map%",!0),o=e("Map.prototype.get",!0),a=e("Map.prototype.set",!0),s=e("Map.prototype.has",!0),u=e("Map.prototype.delete",!0),l=e("Map.prototype.size",!0);return ua=!!n&&function(){var f,c={assert:function(d){if(!c.has(d))throw new r("Side channel does not contain "+t(d))},delete:function(d){if(f){var _=u(f,d);return l(f)===0&&(f=void 0),_}return!1},get:function(d){if(f)return o(f,d)},has:function(d){return f?s(f,d):!1},set:function(d,_){f||(f=new n),a(f,d,_)}};return c},ua}var la,sh;function Dp(){if(sh)return la;sh=1;var i=wu(),e=Uf(),t=Qn(),r=kf(),n=hi(),o=i("%WeakMap%",!0),a=e("WeakMap.prototype.get",!0),s=e("WeakMap.prototype.set",!0),u=e("WeakMap.prototype.has",!0),l=e("WeakMap.prototype.delete",!0);return la=o?function(){var f,c,d={assert:function(_){if(!d.has(_))throw new n("Side channel does not contain "+t(_))},delete:function(_){if(o&&_&&(typeof _=="object"||typeof _=="function")){if(f)return l(f,_)}else if(r&&c)return c.delete(_);return!1},get:function(_){return o&&_&&(typeof _=="object"||typeof _=="function")&&f?a(f,_):c&&c.get(_)},has:function(_){return o&&_&&(typeof _=="object"||typeof _=="function")&&f?u(f,_):!!c&&c.has(_)},set:function(_,p){o&&_&&(typeof _=="object"||typeof _=="function")?(f||(f=new o),s(f,_,p)):r&&(c||(c=r()),c.set(_,p))}};return d}:r,la}var ha,uh;function Np(){if(uh)return ha;uh=1;var i=hi(),e=Qn(),t=lp(),r=kf(),n=Dp(),o=n||r||t;return ha=function(){var s,u={assert:function(l){if(!u.has(l))throw new i("Side channel does not contain "+e(l))},delete:function(l){return!!s&&s.delete(l)},get:function(l){return s&&s.get(l)},has:function(l){return!!s&&s.has(l)},set:function(l,h){s||(s=o()),s.set(l,h)}};return u},ha}var fa,lh;function Pu(){if(lh)return fa;lh=1;var i=String.prototype.replace,e=/%20/g,t={RFC1738:"RFC1738",RFC3986:"RFC3986"};return fa={default:t.RFC3986,formatters:{RFC1738:function(r){return i.call(r,e,"+")},RFC3986:function(r){return String(r)}},RFC1738:t.RFC1738,RFC3986:t.RFC3986},fa}var ca,hh;function Gf(){if(hh)return ca;hh=1;var i=Pu(),e=Object.prototype.hasOwnProperty,t=Array.isArray,r=function(){for(var v=[],m=0;m<256;++m)v.push("%"+((m<16?"0":"")+m.toString(16)).toUpperCase());return v}(),n=function(m){for(;m.length>1;){var x=m.pop(),T=x.obj[x.prop];if(t(T)){for(var w=[],y=0;y<T.length;++y)typeof T[y]<"u"&&w.push(T[y]);x.obj[x.prop]=w}}},o=function(m,x){for(var T=x&&x.plainObjects?{__proto__:null}:{},w=0;w<m.length;++w)typeof m[w]<"u"&&(T[w]=m[w]);return T},a=function v(m,x,T){if(!x)return m;if(typeof x!="object"&&typeof x!="function"){if(t(m))m.push(x);else if(m&&typeof m=="object")(T&&(T.plainObjects||T.allowPrototypes)||!e.call(Object.prototype,x))&&(m[x]=!0);else return[m,x];return m}if(!m||typeof m!="object")return[m].concat(x);var w=m;return t(m)&&!t(x)&&(w=o(m,T)),t(m)&&t(x)?(x.forEach(function(y,S){if(e.call(m,S)){var g=m[S];g&&typeof g=="object"&&y&&typeof y=="object"?m[S]=v(g,y,T):m.push(y)}else m[S]=y}),m):Object.keys(x).reduce(function(y,S){var g=x[S];return e.call(y,S)?y[S]=v(y[S],g,T):y[S]=g,y},w)},s=function(m,x){return Object.keys(x).reduce(function(T,w){return T[w]=x[w],T},m)},u=function(v,m,x){var T=v.replace(/\+/g," ");if(x==="iso-8859-1")return T.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(T)}catch{return T}},l=1024,h=function(m,x,T,w,y){if(m.length===0)return m;var S=m;if(typeof m=="symbol"?S=Symbol.prototype.toString.call(m):typeof m!="string"&&(S=String(m)),T==="iso-8859-1")return escape(S).replace(/%u[0-9a-f]{4}/gi,function(z){return"%26%23"+parseInt(z.slice(2),16)+"%3B"});for(var g="",R=0;R<S.length;R+=l){for(var C=S.length>=l?S.slice(R,R+l):S,I=[],U=0;U<C.length;++U){var M=C.charCodeAt(U);if(M===45||M===46||M===95||M===126||M>=48&&M<=57||M>=65&&M<=90||M>=97&&M<=122||y===i.RFC1738&&(M===40||M===41)){I[I.length]=C.charAt(U);continue}if(M<128){I[I.length]=r[M];continue}if(M<2048){I[I.length]=r[192|M>>6]+r[128|M&63];continue}if(M<55296||M>=57344){I[I.length]=r[224|M>>12]+r[128|M>>6&63]+r[128|M&63];continue}U+=1,M=65536+((M&1023)<<10|C.charCodeAt(U)&1023),I[I.length]=r[240|M>>18]+r[128|M>>12&63]+r[128|M>>6&63]+r[128|M&63]}g+=I.join("")}return g},f=function(m){for(var x=[{obj:{o:m},prop:"o"}],T=[],w=0;w<x.length;++w)for(var y=x[w],S=y.obj[y.prop],g=Object.keys(S),R=0;R<g.length;++R){var C=g[R],I=S[C];typeof I=="object"&&I!==null&&T.indexOf(I)===-1&&(x.push({obj:S,prop:C}),T.push(I))}return n(x),m},c=function(m){return Object.prototype.toString.call(m)==="[object RegExp]"},d=function(m){return!m||typeof m!="object"?!1:!!(m.constructor&&m.constructor.isBuffer&&m.constructor.isBuffer(m))},_=function(m,x){return[].concat(m,x)},p=function(m,x){if(t(m)){for(var T=[],w=0;w<m.length;w+=1)T.push(x(m[w]));return T}return x(m)};return ca={arrayToObject:o,assign:s,combine:_,compact:f,decode:u,encode:h,isBuffer:d,isRegExp:c,maybeMap:p,merge:a},ca}var da,fh;function Bp(){if(fh)return da;fh=1;var i=Np(),e=Gf(),t=Pu(),r=Object.prototype.hasOwnProperty,n={brackets:function(v){return v+"[]"},comma:"comma",indices:function(v,m){return v+"["+m+"]"},repeat:function(v){return v}},o=Array.isArray,a=Array.prototype.push,s=function(p,v){a.apply(p,o(v)?v:[v])},u=Date.prototype.toISOString,l=t.default,h={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:e.encode,encodeValuesOnly:!1,filter:void 0,format:l,formatter:t.formatters[l],indices:!1,serializeDate:function(v){return u.call(v)},skipNulls:!1,strictNullHandling:!1},f=function(v){return typeof v=="string"||typeof v=="number"||typeof v=="boolean"||typeof v=="symbol"||typeof v=="bigint"},c={},d=function p(v,m,x,T,w,y,S,g,R,C,I,U,M,z,V,G,b,P){for(var E=v,F=P,A=0,O=!1;(F=F.get(c))!==void 0&&!O;){var N=F.get(v);if(A+=1,typeof N<"u"){if(N===A)throw new RangeError("Cyclic object value");O=!0}typeof F.get(c)>"u"&&(A=0)}if(typeof C=="function"?E=C(m,E):E instanceof Date?E=M(E):x==="comma"&&o(E)&&(E=e.maybeMap(E,function(Z){return Z instanceof Date?M(Z):Z})),E===null){if(y)return R&&!G?R(m,h.encoder,b,"key",z):m;E=""}if(f(E)||e.isBuffer(E)){if(R){var D=G?m:R(m,h.encoder,b,"key",z);return[V(D)+"="+V(R(E,h.encoder,b,"value",z))]}return[V(m)+"="+V(String(E))]}var k=[];if(typeof E>"u")return k;var j;if(x==="comma"&&o(E))G&&R&&(E=e.maybeMap(E,R)),j=[{value:E.length>0?E.join(",")||null:void 0}];else if(o(C))j=C;else{var Y=Object.keys(E);j=I?Y.sort(I):Y}var $=g?String(m).replace(/\./g,"%2E"):String(m),Q=T&&o(E)&&E.length===1?$+"[]":$;if(w&&o(E)&&E.length===0)return Q+"[]";for(var tt=0;tt<j.length;++tt){var X=j[tt],K=typeof X=="object"&&X&&typeof X.value<"u"?X.value:E[X];if(!(S&&K===null)){var J=U&&g?String(X).replace(/\./g,"%2E"):String(X),ot=o(E)?typeof x=="function"?x(Q,J):Q:Q+(U?"."+J:"["+J+"]");P.set(v,A);var et=i();et.set(c,P),s(k,p(K,ot,x,T,w,y,S,g,x==="comma"&&G&&o(E)?null:R,C,I,U,M,z,V,G,b,et))}}return k},_=function(v){if(!v)return h;if(typeof v.allowEmptyArrays<"u"&&typeof v.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof v.encodeDotInKeys<"u"&&typeof v.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(v.encoder!==null&&typeof v.encoder<"u"&&typeof v.encoder!="function")throw new TypeError("Encoder has to be a function.");var m=v.charset||h.charset;if(typeof v.charset<"u"&&v.charset!=="utf-8"&&v.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var x=t.default;if(typeof v.format<"u"){if(!r.call(t.formatters,v.format))throw new TypeError("Unknown format option provided.");x=v.format}var T=t.formatters[x],w=h.filter;(typeof v.filter=="function"||o(v.filter))&&(w=v.filter);var y;if(v.arrayFormat in n?y=v.arrayFormat:"indices"in v?y=v.indices?"indices":"repeat":y=h.arrayFormat,"commaRoundTrip"in v&&typeof v.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var S=typeof v.allowDots>"u"?v.encodeDotInKeys===!0?!0:h.allowDots:!!v.allowDots;return{addQueryPrefix:typeof v.addQueryPrefix=="boolean"?v.addQueryPrefix:h.addQueryPrefix,allowDots:S,allowEmptyArrays:typeof v.allowEmptyArrays=="boolean"?!!v.allowEmptyArrays:h.allowEmptyArrays,arrayFormat:y,charset:m,charsetSentinel:typeof v.charsetSentinel=="boolean"?v.charsetSentinel:h.charsetSentinel,commaRoundTrip:!!v.commaRoundTrip,delimiter:typeof v.delimiter>"u"?h.delimiter:v.delimiter,encode:typeof v.encode=="boolean"?v.encode:h.encode,encodeDotInKeys:typeof v.encodeDotInKeys=="boolean"?v.encodeDotInKeys:h.encodeDotInKeys,encoder:typeof v.encoder=="function"?v.encoder:h.encoder,encodeValuesOnly:typeof v.encodeValuesOnly=="boolean"?v.encodeValuesOnly:h.encodeValuesOnly,filter:w,format:x,formatter:T,serializeDate:typeof v.serializeDate=="function"?v.serializeDate:h.serializeDate,skipNulls:typeof v.skipNulls=="boolean"?v.skipNulls:h.skipNulls,sort:typeof v.sort=="function"?v.sort:null,strictNullHandling:typeof v.strictNullHandling=="boolean"?v.strictNullHandling:h.strictNullHandling}};return da=function(p,v){var m=p,x=_(v),T,w;typeof x.filter=="function"?(w=x.filter,m=w("",m)):o(x.filter)&&(w=x.filter,T=w);var y=[];if(typeof m!="object"||m===null)return"";var S=n[x.arrayFormat],g=S==="comma"&&x.commaRoundTrip;T||(T=Object.keys(m)),x.sort&&T.sort(x.sort);for(var R=i(),C=0;C<T.length;++C){var I=T[C],U=m[I];x.skipNulls&&U===null||s(y,d(U,I,S,g,x.allowEmptyArrays,x.strictNullHandling,x.skipNulls,x.encodeDotInKeys,x.encode?x.encoder:null,x.filter,x.sort,x.allowDots,x.serializeDate,x.format,x.formatter,x.encodeValuesOnly,x.charset,R))}var M=y.join(x.delimiter),z=x.addQueryPrefix===!0?"?":"";return x.charsetSentinel&&(x.charset==="iso-8859-1"?z+="utf8=%26%2310003%3B&":z+="utf8=%E2%9C%93&"),M.length>0?z+M:""},da}var pa,ch;function Lp(){if(ch)return pa;ch=1;var i=Gf(),e=Object.prototype.hasOwnProperty,t=Array.isArray,r={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:i.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},n=function(c){return c.replace(/&#(\d+);/g,function(d,_){return String.fromCharCode(parseInt(_,10))})},o=function(c,d,_){if(c&&typeof c=="string"&&d.comma&&c.indexOf(",")>-1)return c.split(",");if(d.throwOnLimitExceeded&&_>=d.arrayLimit)throw new RangeError("Array limit exceeded. Only "+d.arrayLimit+" element"+(d.arrayLimit===1?"":"s")+" allowed in an array.");return c},a="utf8=%26%2310003%3B",s="utf8=%E2%9C%93",u=function(d,_){var p={__proto__:null},v=_.ignoreQueryPrefix?d.replace(/^\?/,""):d;v=v.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var m=_.parameterLimit===1/0?void 0:_.parameterLimit,x=v.split(_.delimiter,_.throwOnLimitExceeded?m+1:m);if(_.throwOnLimitExceeded&&x.length>m)throw new RangeError("Parameter limit exceeded. Only "+m+" parameter"+(m===1?"":"s")+" allowed.");var T=-1,w,y=_.charset;if(_.charsetSentinel)for(w=0;w<x.length;++w)x[w].indexOf("utf8=")===0&&(x[w]===s?y="utf-8":x[w]===a&&(y="iso-8859-1"),T=w,w=x.length);for(w=0;w<x.length;++w)if(w!==T){var S=x[w],g=S.indexOf("]="),R=g===-1?S.indexOf("="):g+1,C,I;R===-1?(C=_.decoder(S,r.decoder,y,"key"),I=_.strictNullHandling?null:""):(C=_.decoder(S.slice(0,R),r.decoder,y,"key"),I=i.maybeMap(o(S.slice(R+1),_,t(p[C])?p[C].length:0),function(M){return _.decoder(M,r.decoder,y,"value")})),I&&_.interpretNumericEntities&&y==="iso-8859-1"&&(I=n(String(I))),S.indexOf("[]=")>-1&&(I=t(I)?[I]:I);var U=e.call(p,C);U&&_.duplicates==="combine"?p[C]=i.combine(p[C],I):(!U||_.duplicates==="last")&&(p[C]=I)}return p},l=function(c,d,_,p){var v=0;if(c.length>0&&c[c.length-1]==="[]"){var m=c.slice(0,-1).join("");v=Array.isArray(d)&&d[m]?d[m].length:0}for(var x=p?d:o(d,_,v),T=c.length-1;T>=0;--T){var w,y=c[T];if(y==="[]"&&_.parseArrays)w=_.allowEmptyArrays&&(x===""||_.strictNullHandling&&x===null)?[]:i.combine([],x);else{w=_.plainObjects?{__proto__:null}:{};var S=y.charAt(0)==="["&&y.charAt(y.length-1)==="]"?y.slice(1,-1):y,g=_.decodeDotInKeys?S.replace(/%2E/g,"."):S,R=parseInt(g,10);!_.parseArrays&&g===""?w={0:x}:!isNaN(R)&&y!==g&&String(R)===g&&R>=0&&_.parseArrays&&R<=_.arrayLimit?(w=[],w[R]=x):g!=="__proto__"&&(w[g]=x)}x=w}return x},h=function(d,_,p,v){if(d){var m=p.allowDots?d.replace(/\.([^.[]+)/g,"[$1]"):d,x=/(\[[^[\]]*])/,T=/(\[[^[\]]*])/g,w=p.depth>0&&x.exec(m),y=w?m.slice(0,w.index):m,S=[];if(y){if(!p.plainObjects&&e.call(Object.prototype,y)&&!p.allowPrototypes)return;S.push(y)}for(var g=0;p.depth>0&&(w=T.exec(m))!==null&&g<p.depth;){if(g+=1,!p.plainObjects&&e.call(Object.prototype,w[1].slice(1,-1))&&!p.allowPrototypes)return;S.push(w[1])}if(w){if(p.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+p.depth+" and strictDepth is true");S.push("["+m.slice(w.index)+"]")}return l(S,_,p,v)}},f=function(d){if(!d)return r;if(typeof d.allowEmptyArrays<"u"&&typeof d.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof d.decodeDotInKeys<"u"&&typeof d.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(d.decoder!==null&&typeof d.decoder<"u"&&typeof d.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof d.charset<"u"&&d.charset!=="utf-8"&&d.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof d.throwOnLimitExceeded<"u"&&typeof d.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var _=typeof d.charset>"u"?r.charset:d.charset,p=typeof d.duplicates>"u"?r.duplicates:d.duplicates;if(p!=="combine"&&p!=="first"&&p!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var v=typeof d.allowDots>"u"?d.decodeDotInKeys===!0?!0:r.allowDots:!!d.allowDots;return{allowDots:v,allowEmptyArrays:typeof d.allowEmptyArrays=="boolean"?!!d.allowEmptyArrays:r.allowEmptyArrays,allowPrototypes:typeof d.allowPrototypes=="boolean"?d.allowPrototypes:r.allowPrototypes,allowSparse:typeof d.allowSparse=="boolean"?d.allowSparse:r.allowSparse,arrayLimit:typeof d.arrayLimit=="number"?d.arrayLimit:r.arrayLimit,charset:_,charsetSentinel:typeof d.charsetSentinel=="boolean"?d.charsetSentinel:r.charsetSentinel,comma:typeof d.comma=="boolean"?d.comma:r.comma,decodeDotInKeys:typeof d.decodeDotInKeys=="boolean"?d.decodeDotInKeys:r.decodeDotInKeys,decoder:typeof d.decoder=="function"?d.decoder:r.decoder,delimiter:typeof d.delimiter=="string"||i.isRegExp(d.delimiter)?d.delimiter:r.delimiter,depth:typeof d.depth=="number"||d.depth===!1?+d.depth:r.depth,duplicates:p,ignoreQueryPrefix:d.ignoreQueryPrefix===!0,interpretNumericEntities:typeof d.interpretNumericEntities=="boolean"?d.interpretNumericEntities:r.interpretNumericEntities,parameterLimit:typeof d.parameterLimit=="number"?d.parameterLimit:r.parameterLimit,parseArrays:d.parseArrays!==!1,plainObjects:typeof d.plainObjects=="boolean"?d.plainObjects:r.plainObjects,strictDepth:typeof d.strictDepth=="boolean"?!!d.strictDepth:r.strictDepth,strictNullHandling:typeof d.strictNullHandling=="boolean"?d.strictNullHandling:r.strictNullHandling,throwOnLimitExceeded:typeof d.throwOnLimitExceeded=="boolean"?d.throwOnLimitExceeded:!1}};return pa=function(c,d){var _=f(d);if(c===""||c===null||typeof c>"u")return _.plainObjects?{__proto__:null}:{};for(var p=typeof c=="string"?u(c,_):c,v=_.plainObjects?{__proto__:null}:{},m=Object.keys(p),x=0;x<m.length;++x){var T=m[x],w=h(T,p[T],_,typeof c=="string");v=i.merge(v,w,_)}return _.allowSparse===!0?v:i.compact(v)},pa}var va,dh;function Up(){if(dh)return va;dh=1;var i=Bp(),e=Lp(),t=Pu();return va={formats:t,parse:e,stringify:i},va}var ph;function kp(){if(ph)return dr;ph=1;var i=op();function e(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var t=/^([a-z0-9.+-]+:)/i,r=/:[0-9]*$/,n=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,o=["<",">",'"',"`"," ","\r",`
`,"	"],a=["{","}","|","\\","^","`"].concat(o),s=["'"].concat(a),u=["%","/","?",";","#"].concat(s),l=["/","?","#"],h=255,f=/^[+a-z0-9A-Z_-]{0,63}$/,c=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},_={javascript:!0,"javascript:":!0},p={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=Up();function m(y,S,g){if(y&&typeof y=="object"&&y instanceof e)return y;var R=new e;return R.parse(y,S,g),R}e.prototype.parse=function(y,S,g){if(typeof y!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof y);var R=y.indexOf("?"),C=R!==-1&&R<y.indexOf("#")?"?":"#",I=y.split(C),U=/\\/g;I[0]=I[0].replace(U,"/"),y=I.join(C);var M=y;if(M=M.trim(),!g&&y.split("#").length===1){var z=n.exec(M);if(z)return this.path=M,this.href=M,this.pathname=z[1],z[2]?(this.search=z[2],S?this.query=v.parse(this.search.substr(1)):this.query=this.search.substr(1)):S&&(this.search="",this.query={}),this}var V=t.exec(M);if(V){V=V[0];var G=V.toLowerCase();this.protocol=G,M=M.substr(V.length)}if(g||V||M.match(/^\/\/[^@/]+@[^@/]+/)){var b=M.substr(0,2)==="//";b&&!(V&&_[V])&&(M=M.substr(2),this.slashes=!0)}if(!_[V]&&(b||V&&!p[V])){for(var P=-1,E=0;E<l.length;E++){var F=M.indexOf(l[E]);F!==-1&&(P===-1||F<P)&&(P=F)}var A,O;P===-1?O=M.lastIndexOf("@"):O=M.lastIndexOf("@",P),O!==-1&&(A=M.slice(0,O),M=M.slice(O+1),this.auth=decodeURIComponent(A)),P=-1;for(var E=0;E<u.length;E++){var F=M.indexOf(u[E]);F!==-1&&(P===-1||F<P)&&(P=F)}P===-1&&(P=M.length),this.host=M.slice(0,P),M=M.slice(P),this.parseHost(),this.hostname=this.hostname||"";var N=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!N)for(var D=this.hostname.split(/\./),E=0,k=D.length;E<k;E++){var j=D[E];if(j&&!j.match(f)){for(var Y="",$=0,Q=j.length;$<Q;$++)j.charCodeAt($)>127?Y+="x":Y+=j[$];if(!Y.match(f)){var tt=D.slice(0,E),X=D.slice(E+1),K=j.match(c);K&&(tt.push(K[1]),X.unshift(K[2])),X.length&&(M="/"+X.join(".")+M),this.hostname=tt.join(".");break}}}this.hostname.length>h?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=i.toASCII(this.hostname));var J=this.port?":"+this.port:"",ot=this.hostname||"";this.host=ot+J,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),M[0]!=="/"&&(M="/"+M))}if(!d[G])for(var E=0,k=s.length;E<k;E++){var et=s[E];if(M.indexOf(et)!==-1){var Z=encodeURIComponent(et);Z===et&&(Z=escape(et)),M=M.split(et).join(Z)}}var q=M.indexOf("#");q!==-1&&(this.hash=M.substr(q),M=M.slice(0,q));var nt=M.indexOf("?");if(nt!==-1?(this.search=M.substr(nt),this.query=M.substr(nt+1),S&&(this.query=v.parse(this.query)),M=M.slice(0,nt)):S&&(this.search="",this.query={}),M&&(this.pathname=M),p[G]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var J=this.pathname||"",bt=this.search||"";this.path=J+bt}return this.href=this.format(),this};function x(y){return typeof y=="string"&&(y=m(y)),y instanceof e?y.format():e.prototype.format.call(y)}e.prototype.format=function(){var y=this.auth||"";y&&(y=encodeURIComponent(y),y=y.replace(/%3A/i,":"),y+="@");var S=this.protocol||"",g=this.pathname||"",R=this.hash||"",C=!1,I="";this.host?C=y+this.host:this.hostname&&(C=y+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(C+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(I=v.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var U=this.search||I&&"?"+I||"";return S&&S.substr(-1)!==":"&&(S+=":"),this.slashes||(!S||p[S])&&C!==!1?(C="//"+(C||""),g&&g.charAt(0)!=="/"&&(g="/"+g)):C||(C=""),R&&R.charAt(0)!=="#"&&(R="#"+R),U&&U.charAt(0)!=="?"&&(U="?"+U),g=g.replace(/[?#]/g,function(M){return encodeURIComponent(M)}),U=U.replace("#","%23"),S+C+g+U+R};function T(y,S){return m(y,!1,!0).resolve(S)}e.prototype.resolve=function(y){return this.resolveObject(m(y,!1,!0)).format()};function w(y,S){return y?m(y,!1,!0).resolveObject(S):S}return e.prototype.resolveObject=function(y){if(typeof y=="string"){var S=new e;S.parse(y,!1,!0),y=S}for(var g=new e,R=Object.keys(this),C=0;C<R.length;C++){var I=R[C];g[I]=this[I]}if(g.hash=y.hash,y.href==="")return g.href=g.format(),g;if(y.slashes&&!y.protocol){for(var U=Object.keys(y),M=0;M<U.length;M++){var z=U[M];z!=="protocol"&&(g[z]=y[z])}return p[g.protocol]&&g.hostname&&!g.pathname&&(g.pathname="/",g.path=g.pathname),g.href=g.format(),g}if(y.protocol&&y.protocol!==g.protocol){if(!p[y.protocol]){for(var V=Object.keys(y),G=0;G<V.length;G++){var b=V[G];g[b]=y[b]}return g.href=g.format(),g}if(g.protocol=y.protocol,!y.host&&!_[y.protocol]){for(var k=(y.pathname||"").split("/");k.length&&!(y.host=k.shift()););y.host||(y.host=""),y.hostname||(y.hostname=""),k[0]!==""&&k.unshift(""),k.length<2&&k.unshift(""),g.pathname=k.join("/")}else g.pathname=y.pathname;if(g.search=y.search,g.query=y.query,g.host=y.host||"",g.auth=y.auth,g.hostname=y.hostname||y.host,g.port=y.port,g.pathname||g.search){var P=g.pathname||"",E=g.search||"";g.path=P+E}return g.slashes=g.slashes||y.slashes,g.href=g.format(),g}var F=g.pathname&&g.pathname.charAt(0)==="/",A=y.host||y.pathname&&y.pathname.charAt(0)==="/",O=A||F||g.host&&y.pathname,N=O,D=g.pathname&&g.pathname.split("/")||[],k=y.pathname&&y.pathname.split("/")||[],j=g.protocol&&!p[g.protocol];if(j&&(g.hostname="",g.port=null,g.host&&(D[0]===""?D[0]=g.host:D.unshift(g.host)),g.host="",y.protocol&&(y.hostname=null,y.port=null,y.host&&(k[0]===""?k[0]=y.host:k.unshift(y.host)),y.host=null),O=O&&(k[0]===""||D[0]==="")),A)g.host=y.host||y.host===""?y.host:g.host,g.hostname=y.hostname||y.hostname===""?y.hostname:g.hostname,g.search=y.search,g.query=y.query,D=k;else if(k.length)D||(D=[]),D.pop(),D=D.concat(k),g.search=y.search,g.query=y.query;else if(y.search!=null){if(j){g.host=D.shift(),g.hostname=g.host;var Y=g.host&&g.host.indexOf("@")>0?g.host.split("@"):!1;Y&&(g.auth=Y.shift(),g.hostname=Y.shift(),g.host=g.hostname)}return g.search=y.search,g.query=y.query,(g.pathname!==null||g.search!==null)&&(g.path=(g.pathname?g.pathname:"")+(g.search?g.search:"")),g.href=g.format(),g}if(!D.length)return g.pathname=null,g.search?g.path="/"+g.search:g.path=null,g.href=g.format(),g;for(var $=D.slice(-1)[0],Q=(g.host||y.host||D.length>1)&&($==="."||$==="..")||$==="",tt=0,X=D.length;X>=0;X--)$=D[X],$==="."?D.splice(X,1):$===".."?(D.splice(X,1),tt++):tt&&(D.splice(X,1),tt--);if(!O&&!N)for(;tt--;tt)D.unshift("..");O&&D[0]!==""&&(!D[0]||D[0].charAt(0)!=="/")&&D.unshift(""),Q&&D.join("/").substr(-1)!=="/"&&D.push("");var K=D[0]===""||D[0]&&D[0].charAt(0)==="/";if(j){g.hostname=K?"":D.length?D.shift():"",g.host=g.hostname;var Y=g.host&&g.host.indexOf("@")>0?g.host.split("@"):!1;Y&&(g.auth=Y.shift(),g.hostname=Y.shift(),g.host=g.hostname)}return O=O||g.host&&D.length,O&&!K&&D.unshift(""),D.length>0?g.pathname=D.join("/"):(g.pathname=null,g.path=null),(g.pathname!==null||g.search!==null)&&(g.path=(g.pathname?g.pathname:"")+(g.search?g.search:"")),g.auth=y.auth||g.auth,g.slashes=g.slashes||y.slashes,g.href=g.format(),g},e.prototype.parseHost=function(){var y=this.host,S=r.exec(y);S&&(S=S[0],S!==":"&&(this.port=S.substr(1)),y=y.substr(0,y.length-S.length)),y&&(this.hostname=y)},dr.parse=m,dr.resolve=T,dr.resolveObject=w,dr.format=x,dr.Url=e,dr}var _a=kp();/*!
 * @pixi/utils - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Yr={parse:_a.parse,format:_a.format,resolve:_a.resolve};W.RETINA_PREFIX=/@([0-9\.]+)x/;W.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var vh=!1,_h="6.5.10";function Gp(i){var e;if(!vh){if(W.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+_h+" - ✰ "+i+` ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=globalThis.console).log.apply(e,t)}else globalThis.console&&globalThis.console.log("PixiJS "+_h+" - "+i+" - http://www.pixijs.com/");vh=!0}}var ma;function jp(){return typeof ma>"u"&&(ma=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:W.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!W.ADAPTER.getWebGLRenderingContext())return!1;var t=W.ADAPTER.createCanvas(),r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),n=!!(r&&r.getContextAttributes().stencil);if(r){var o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,n}catch{return!1}}()),ma}var zp="#f0f8ff",Xp="#faebd7",Hp="#00ffff",Vp="#7fffd4",Wp="#f0ffff",Yp="#f5f5dc",$p="#ffe4c4",qp="#000000",Kp="#ffebcd",Zp="#0000ff",Qp="#8a2be2",Jp="#a52a2a",tv="#deb887",ev="#5f9ea0",rv="#7fff00",iv="#d2691e",nv="#ff7f50",ov="#6495ed",av="#fff8dc",sv="#dc143c",uv="#00ffff",lv="#00008b",hv="#008b8b",fv="#b8860b",cv="#a9a9a9",dv="#006400",pv="#a9a9a9",vv="#bdb76b",_v="#8b008b",mv="#556b2f",yv="#ff8c00",gv="#9932cc",xv="#8b0000",bv="#e9967a",Tv="#8fbc8f",Sv="#483d8b",Ev="#2f4f4f",wv="#2f4f4f",Pv="#00ced1",Cv="#9400d3",Ov="#ff1493",Av="#00bfff",Rv="#696969",Iv="#696969",Mv="#1e90ff",Fv="#b22222",Dv="#fffaf0",Nv="#228b22",Bv="#ff00ff",Lv="#dcdcdc",Uv="#f8f8ff",kv="#daa520",Gv="#ffd700",jv="#808080",zv="#008000",Xv="#adff2f",Hv="#808080",Vv="#f0fff0",Wv="#ff69b4",Yv="#cd5c5c",$v="#4b0082",qv="#fffff0",Kv="#f0e68c",Zv="#fff0f5",Qv="#e6e6fa",Jv="#7cfc00",t_="#fffacd",e_="#add8e6",r_="#f08080",i_="#e0ffff",n_="#fafad2",o_="#d3d3d3",a_="#90ee90",s_="#d3d3d3",u_="#ffb6c1",l_="#ffa07a",h_="#20b2aa",f_="#87cefa",c_="#778899",d_="#778899",p_="#b0c4de",v_="#ffffe0",__="#00ff00",m_="#32cd32",y_="#faf0e6",g_="#ff00ff",x_="#800000",b_="#66cdaa",T_="#0000cd",S_="#ba55d3",E_="#9370db",w_="#3cb371",P_="#7b68ee",C_="#00fa9a",O_="#48d1cc",A_="#c71585",R_="#191970",I_="#f5fffa",M_="#ffe4e1",F_="#ffe4b5",D_="#ffdead",N_="#000080",B_="#fdf5e6",L_="#808000",U_="#6b8e23",k_="#ffa500",G_="#ff4500",j_="#da70d6",z_="#eee8aa",X_="#98fb98",H_="#afeeee",V_="#db7093",W_="#ffefd5",Y_="#ffdab9",$_="#cd853f",q_="#ffc0cb",K_="#dda0dd",Z_="#b0e0e6",Q_="#800080",J_="#663399",tm="#ff0000",em="#bc8f8f",rm="#4169e1",im="#8b4513",nm="#fa8072",om="#f4a460",am="#2e8b57",sm="#fff5ee",um="#a0522d",lm="#c0c0c0",hm="#87ceeb",fm="#6a5acd",cm="#708090",dm="#708090",pm="#fffafa",vm="#00ff7f",_m="#4682b4",mm="#d2b48c",ym="#008080",gm="#d8bfd8",xm="#ff6347",bm="#40e0d0",Tm="#ee82ee",Sm="#f5deb3",Em="#ffffff",wm="#f5f5f5",Pm="#ffff00",Cm="#9acd32",Om={aliceblue:zp,antiquewhite:Xp,aqua:Hp,aquamarine:Vp,azure:Wp,beige:Yp,bisque:$p,black:qp,blanchedalmond:Kp,blue:Zp,blueviolet:Qp,brown:Jp,burlywood:tv,cadetblue:ev,chartreuse:rv,chocolate:iv,coral:nv,cornflowerblue:ov,cornsilk:av,crimson:sv,cyan:uv,darkblue:lv,darkcyan:hv,darkgoldenrod:fv,darkgray:cv,darkgreen:dv,darkgrey:pv,darkkhaki:vv,darkmagenta:_v,darkolivegreen:mv,darkorange:yv,darkorchid:gv,darkred:xv,darksalmon:bv,darkseagreen:Tv,darkslateblue:Sv,darkslategray:Ev,darkslategrey:wv,darkturquoise:Pv,darkviolet:Cv,deeppink:Ov,deepskyblue:Av,dimgray:Rv,dimgrey:Iv,dodgerblue:Mv,firebrick:Fv,floralwhite:Dv,forestgreen:Nv,fuchsia:Bv,gainsboro:Lv,ghostwhite:Uv,goldenrod:kv,gold:Gv,gray:jv,green:zv,greenyellow:Xv,grey:Hv,honeydew:Vv,hotpink:Wv,indianred:Yv,indigo:$v,ivory:qv,khaki:Kv,lavenderblush:Zv,lavender:Qv,lawngreen:Jv,lemonchiffon:t_,lightblue:e_,lightcoral:r_,lightcyan:i_,lightgoldenrodyellow:n_,lightgray:o_,lightgreen:a_,lightgrey:s_,lightpink:u_,lightsalmon:l_,lightseagreen:h_,lightskyblue:f_,lightslategray:c_,lightslategrey:d_,lightsteelblue:p_,lightyellow:v_,lime:__,limegreen:m_,linen:y_,magenta:g_,maroon:x_,mediumaquamarine:b_,mediumblue:T_,mediumorchid:S_,mediumpurple:E_,mediumseagreen:w_,mediumslateblue:P_,mediumspringgreen:C_,mediumturquoise:O_,mediumvioletred:A_,midnightblue:R_,mintcream:I_,mistyrose:M_,moccasin:F_,navajowhite:D_,navy:N_,oldlace:B_,olive:L_,olivedrab:U_,orange:k_,orangered:G_,orchid:j_,palegoldenrod:z_,palegreen:X_,paleturquoise:H_,palevioletred:V_,papayawhip:W_,peachpuff:Y_,peru:$_,pink:q_,plum:K_,powderblue:Z_,purple:Q_,rebeccapurple:J_,red:tm,rosybrown:em,royalblue:rm,saddlebrown:im,salmon:nm,sandybrown:om,seagreen:am,seashell:sm,sienna:um,silver:lm,skyblue:hm,slateblue:fm,slategray:cm,slategrey:dm,snow:pm,springgreen:vm,steelblue:_m,tan:mm,teal:ym,thistle:gm,tomato:xm,turquoise:bm,violet:Tm,wheat:Sm,white:Em,whitesmoke:wm,yellow:Pm,yellowgreen:Cm};function Xt(i,e){return e===void 0&&(e=[]),e[0]=(i>>16&255)/255,e[1]=(i>>8&255)/255,e[2]=(i&255)/255,e}function jf(i){var e=i.toString(16);return e="000000".substring(0,6-e.length)+e,"#"+e}function Cu(i){return typeof i=="string"&&(i=Om[i.toLowerCase()]||i,i[0]==="#"&&(i=i.slice(1))),parseInt(i,16)}function Te(i){return(i[0]*255<<16)+(i[1]*255<<8)+(i[2]*255|0)}function Am(){for(var i=[],e=[],t=0;t<32;t++)i[t]=t,e[t]=t;i[rt.NORMAL_NPM]=rt.NORMAL,i[rt.ADD_NPM]=rt.ADD,i[rt.SCREEN_NPM]=rt.SCREEN,e[rt.NORMAL]=rt.NORMAL_NPM,e[rt.ADD]=rt.ADD_NPM,e[rt.SCREEN]=rt.SCREEN_NPM;var r=[];return r.push(e),r.push(i),r}var zf=Am();function Xf(i,e){return zf[e?1:0][i]}function Rm(i,e,t,r){return t=t||new Float32Array(4),r||r===void 0?(t[0]=i[0]*e,t[1]=i[1]*e,t[2]=i[2]*e):(t[0]=i[0],t[1]=i[1],t[2]=i[2]),t[3]=e,t}function Ou(i,e){if(e===1)return(e*255<<24)+i;if(e===0)return 0;var t=i>>16&255,r=i>>8&255,n=i&255;return t=t*e+.5|0,r=r*e+.5|0,n=n*e+.5|0,(e*255<<24)+(t<<16)+(r<<8)+n}function Hf(i,e,t,r){return t=t||new Float32Array(4),t[0]=(i>>16&255)/255,t[1]=(i>>8&255)/255,t[2]=(i&255)/255,(r||r===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function Im(i,e){e===void 0&&(e=null);var t=i*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var r=0,n=0;r<t;r+=6,n+=4)e[r+0]=n+0,e[r+1]=n+1,e[r+2]=n+2,e[r+3]=n+0,e[r+4]=n+2,e[r+5]=n+3;return e}function Vf(i){if(i.BYTES_PER_ELEMENT===4)return i instanceof Float32Array?"Float32Array":i instanceof Uint32Array?"Uint32Array":"Int32Array";if(i.BYTES_PER_ELEMENT===2){if(i instanceof Uint16Array)return"Uint16Array"}else if(i.BYTES_PER_ELEMENT===1&&i instanceof Uint8Array)return"Uint8Array";return null}function Nn(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function mh(i){return!(i&i-1)&&!!i}function yh(i){var e=(i>65535?1:0)<<4;i>>>=e;var t=(i>255?1:0)<<3;return i>>>=t,e|=t,t=(i>15?1:0)<<2,i>>>=t,e|=t,t=(i>3?1:0)<<1,i>>>=t,e|=t,e|i>>1}function Zr(i,e,t){var r=i.length,n;if(!(e>=r||t===0)){t=e+t>r?r-e:t;var o=r-t;for(n=e;n<o;++n)i[n]=i[n+t];i.length=o}}function $r(i){return i===0?0:i<0?-1:1}var Mm=0;function Nr(){return++Mm}var gh={};function xe(i,e,t){if(t===void 0&&(t=3),!gh[e]){var r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+i):(r=r.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+i),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+i),console.warn(r))),gh[e]=!0}}var xh={},ke=Object.create(null),pr=Object.create(null),bh=function(){function i(e,t,r){this.canvas=W.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=r||W.RESOLUTION,this.resize(e,t)}return i.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},i.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},i.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(i.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),i}();function Fm(i){var e=i.width,t=i.height,r=i.getContext("2d",{willReadFrequently:!0}),n=r.getImageData(0,0,e,t),o=n.data,a=o.length,s={top:null,left:null,right:null,bottom:null},u=null,l,h,f;for(l=0;l<a;l+=4)o[l+3]!==0&&(h=l/4%e,f=~~(l/4/e),s.top===null&&(s.top=f),(s.left===null||h<s.left)&&(s.left=h),(s.right===null||s.right<h)&&(s.right=h+1),(s.bottom===null||s.bottom<f)&&(s.bottom=f));return s.top!==null&&(e=s.right-s.left,t=s.bottom-s.top+1,u=r.getImageData(s.left,s.top,e,t)),{height:t,width:e,data:u}}var rn;function Dm(i,e){if(e===void 0&&(e=globalThis.location),i.indexOf("data:")===0)return"";e=e||globalThis.location,rn||(rn=document.createElement("a")),rn.href=i;var t=Yr.parse(rn.href),r=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!r||t.protocol!==e.protocol?"anonymous":""}function Bn(i,e){var t=W.RETINA_PREFIX.exec(i);return t?parseFloat(t[1]):e!==void 0?e:1}/*!
 * @pixi/math - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ln=Math.PI*2,Nm=180/Math.PI,Br=Math.PI/180,Ut;(function(i){i[i.POLY=0]="POLY",i[i.RECT=1]="RECT",i[i.CIRC=2]="CIRC",i[i.ELIP=3]="ELIP",i[i.RREC=4]="RREC"})(Ut||(Ut={}));var ht=function(){function i(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},i.prototype.copyTo=function(e){return e.set(this.x,this.y),e},i.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},i.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},i.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},i}(),nn=[new ht,new ht,new ht,new ht],pt=function(){function i(e,t,r,n){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0),this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(n),this.type=Ut.RECT}return Object.defineProperty(i.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(i,"EMPTY",{get:function(){return new i(0,0,0,0)},enumerable:!1,configurable:!0}),i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},i.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},i.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},i.prototype.intersects=function(e,t){if(!t){var r=this.x<e.x?e.x:this.x,n=this.right>e.right?e.right:this.right;if(n<=r)return!1;var o=this.y<e.y?e.y:this.y,a=this.bottom>e.bottom?e.bottom:this.bottom;return a>o}var s=this.left,u=this.right,l=this.top,h=this.bottom;if(u<=s||h<=l)return!1;var f=nn[0].set(e.left,e.top),c=nn[1].set(e.left,e.bottom),d=nn[2].set(e.right,e.top),_=nn[3].set(e.right,e.bottom);if(d.x<=f.x||c.y<=f.y)return!1;var p=Math.sign(t.a*t.d-t.b*t.c);if(p===0||(t.apply(f,f),t.apply(c,c),t.apply(d,d),t.apply(_,_),Math.max(f.x,c.x,d.x,_.x)<=s||Math.min(f.x,c.x,d.x,_.x)>=u||Math.max(f.y,c.y,d.y,_.y)<=l||Math.min(f.y,c.y,d.y,_.y)>=h))return!1;var v=p*(c.y-f.y),m=p*(f.x-c.x),x=v*s+m*l,T=v*u+m*l,w=v*s+m*h,y=v*u+m*h;if(Math.max(x,T,w,y)<=v*f.x+m*f.y||Math.min(x,T,w,y)>=v*_.x+m*_.y)return!1;var S=p*(f.y-d.y),g=p*(d.x-f.x),R=S*s+g*l,C=S*u+g*l,I=S*s+g*h,U=S*u+g*h;return!(Math.max(R,C,I,U)<=S*f.x+g*f.y||Math.min(R,C,I,U)>=S*_.x+g*_.y)},i.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},i.prototype.fit=function(e){var t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),n=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=n,this.height=Math.max(o-n,0),this},i.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var r=Math.ceil((this.x+this.width-t)*e)/e,n=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=n-this.y,this},i.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),n=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=n,this.height=o-n,this},i.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Bm=function(){function i(e,t,r){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0),this.x=e,this.y=t,this.radius=r,this.type=Ut.CIRC}return i.prototype.clone=function(){return new i(this.x,this.y,this.radius)},i.prototype.contains=function(e,t){if(this.radius<=0)return!1;var r=this.radius*this.radius,n=this.x-e,o=this.y-t;return n*=n,o*=o,n+o<=r},i.prototype.getBounds=function(){return new pt(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},i.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},i}(),Lm=function(){function i(e,t,r,n){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0),this.x=e,this.y=t,this.width=r,this.height=n,this.type=Ut.ELIP}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var r=(e-this.x)/this.width,n=(t-this.y)/this.height;return r*=r,n*=n,r+n<=1},i.prototype.getBounds=function(){return new pt(this.x-this.width,this.y-this.height,this.width,this.height)},i.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},i}(),Pn=function(){function i(){for(var e=arguments,t=[],r=0;r<arguments.length;r++)t[r]=e[r];var n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){for(var o=[],a=0,s=n.length;a<s;a++)o.push(n[a].x,n[a].y);n=o}this.points=n,this.type=Ut.POLY,this.closeStroke=!0}return i.prototype.clone=function(){var e=this.points.slice(),t=new i(e);return t.closeStroke=this.closeStroke,t},i.prototype.contains=function(e,t){for(var r=!1,n=this.points.length/2,o=0,a=n-1;o<n;a=o++){var s=this.points[o*2],u=this.points[o*2+1],l=this.points[a*2],h=this.points[a*2+1],f=u>t!=h>t&&e<(l-s)*((t-u)/(h-u))+s;f&&(r=!r)}return r},i.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},i}(),Um=function(){function i(e,t,r,n,o){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=r,this.height=n,this.radius=o,this.type=Ut.RREC}return i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height,this.radius)},i.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;var n=e-(this.x+r),o=t-(this.y+r),a=r*r;if(n*n+o*o<=a||(n=e-(this.x+this.width-r),n*n+o*o<=a)||(o=t-(this.y+this.height-r),n*n+o*o<=a)||(n=e-(this.x+r),n*n+o*o<=a))return!0}return!1},i.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},i}(),Pr=function(){function i(e,t,r,n){r===void 0&&(r=0),n===void 0&&(n=0),this._x=r,this._y=n,this.cb=e,this.scope=t}return i.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new i(e,t,this._x,this._y)},i.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},i.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},i.prototype.copyTo=function(e){return e.set(this._x,this._y),e},i.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},i.prototype.toString=function(){return"[@pixi/math:ObservablePoint x=0 y=0 scope="+this.scope+"]"},Object.defineProperty(i.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),i}(),Lt=function(){function i(e,t,r,n,o,a){e===void 0&&(e=1),t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=e,this.b=t,this.c=r,this.d=n,this.tx=o,this.ty=a}return i.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},i.prototype.set=function(e,t,r,n,o,a){return this.a=e,this.b=t,this.c=r,this.d=n,this.tx=o,this.ty=a,this},i.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r},i.prototype.apply=function(e,t){t=t||new ht;var r=e.x,n=e.y;return t.x=this.a*r+this.c*n+this.tx,t.y=this.b*r+this.d*n+this.ty,t},i.prototype.applyInverse=function(e,t){t=t||new ht;var r=1/(this.a*this.d+this.c*-this.b),n=e.x,o=e.y;return t.x=this.d*r*n+-this.c*r*o+(this.ty*this.c-this.tx*this.d)*r,t.y=this.a*r*o+-this.b*r*n+(-this.ty*this.a+this.tx*this.b)*r,t},i.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},i.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},i.prototype.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this.a,o=this.c,a=this.tx;return this.a=n*t-this.b*r,this.b=n*r+this.b*t,this.c=o*t-this.d*r,this.d=o*r+this.d*t,this.tx=a*t-this.ty*r,this.ty=a*r+this.ty*t,this},i.prototype.append=function(e){var t=this.a,r=this.b,n=this.c,o=this.d;return this.a=e.a*t+e.b*n,this.b=e.a*r+e.b*o,this.c=e.c*t+e.d*n,this.d=e.c*r+e.d*o,this.tx=e.tx*t+e.ty*n+this.tx,this.ty=e.tx*r+e.ty*o+this.ty,this},i.prototype.setTransform=function(e,t,r,n,o,a,s,u,l){return this.a=Math.cos(s+l)*o,this.b=Math.sin(s+l)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=e-(r*this.a+n*this.c),this.ty=t-(r*this.b+n*this.d),this},i.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var r=this.a,n=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=n*e.a+this.d*e.c,this.d=n*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},i.prototype.decompose=function(e){var t=this.a,r=this.b,n=this.c,o=this.d,a=e.pivot,s=-Math.atan2(-n,o),u=Math.atan2(r,t),l=Math.abs(s+u);return l<1e-5||Math.abs(Ln-l)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(n*n+o*o),e.position.x=this.tx+(a.x*t+a.y*n),e.position.y=this.ty+(a.x*r+a.y*o),e},i.prototype.invert=function(){var e=this.a,t=this.b,r=this.c,n=this.d,o=this.tx,a=e*n-t*r;return this.a=n/a,this.b=-t/a,this.c=-r/a,this.d=e/a,this.tx=(r*this.ty-n*o)/a,this.ty=-(e*this.ty-t*o)/a,this},i.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},i.prototype.clone=function(){var e=new i;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},i.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},i.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},i.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(i,"IDENTITY",{get:function(){return new i},enumerable:!1,configurable:!0}),Object.defineProperty(i,"TEMP_MATRIX",{get:function(){return new i},enumerable:!1,configurable:!0}),i}(),br=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Tr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Sr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Er=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Ja=[],Wf=[],on=Math.sign;function km(){for(var i=0;i<16;i++){var e=[];Ja.push(e);for(var t=0;t<16;t++)for(var r=on(br[i]*br[t]+Sr[i]*Tr[t]),n=on(Tr[i]*br[t]+Er[i]*Tr[t]),o=on(br[i]*Sr[t]+Sr[i]*Er[t]),a=on(Tr[i]*Sr[t]+Er[i]*Er[t]),s=0;s<16;s++)if(br[s]===r&&Tr[s]===n&&Sr[s]===o&&Er[s]===a){e.push(s);break}}for(var i=0;i<16;i++){var u=new Lt;u.set(br[i],Tr[i],Sr[i],Er[i],0,0),Wf.push(u)}}km();var wt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(i){return br[i]},uY:function(i){return Tr[i]},vX:function(i){return Sr[i]},vY:function(i){return Er[i]},inv:function(i){return i&8?i&15:-i&7},add:function(i,e){return Ja[i][e]},sub:function(i,e){return Ja[i][wt.inv(e)]},rotate180:function(i){return i^4},isVertical:function(i){return(i&3)===2},byDirection:function(i,e){return Math.abs(i)*2<=Math.abs(e)?e>=0?wt.S:wt.N:Math.abs(e)*2<=Math.abs(i)?i>0?wt.E:wt.W:e>0?i>0?wt.SE:wt.SW:i>0?wt.NE:wt.NW},matrixAppendRotationInv:function(i,e,t,r){t===void 0&&(t=0),r===void 0&&(r=0);var n=Wf[wt.inv(e)];n.tx=t,n.ty=r,i.append(n)}},Yf=function(){function i(){this.worldTransform=new Lt,this.localTransform=new Lt,this.position=new Pr(this.onChange,this,0,0),this.scale=new Pr(this.onChange,this,1,1),this.pivot=new Pr(this.onChange,this,0,0),this.skew=new Pr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return i.prototype.onChange=function(){this._localID++},i.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},i.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},i.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},i.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var r=e.worldTransform,n=this.worldTransform;n.a=t.a*r.a+t.b*r.c,n.b=t.a*r.b+t.b*r.d,n.c=t.c*r.a+t.d*r.c,n.d=t.c*r.b+t.d*r.d,n.tx=t.tx*r.a+t.ty*r.c+r.tx,n.ty=t.tx*r.b+t.ty*r.d+r.ty,this._parentID=e._worldID,this._worldID++}},i.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(i.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),i.IDENTITY=new i,i}();/*!
 * @pixi/display - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */W.SORTABLE_CHILDREN=!1;var Un=function(){function i(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return i.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},i.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},i.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?pt.EMPTY:(e=e||new pt(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},i.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},i.prototype.addPointMatrix=function(e,t){var r=e.a,n=e.b,o=e.c,a=e.d,s=e.tx,u=e.ty,l=r*t.x+o*t.y+s,h=n*t.x+a*t.y+u;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,h),this.maxY=Math.max(this.maxY,h)},i.prototype.addQuad=function(e){var t=this.minX,r=this.minY,n=this.maxX,o=this.maxY,a=e[0],s=e[1];t=a<t?a:t,r=s<r?s:r,n=a>n?a:n,o=s>o?s:o,a=e[2],s=e[3],t=a<t?a:t,r=s<r?s:r,n=a>n?a:n,o=s>o?s:o,a=e[4],s=e[5],t=a<t?a:t,r=s<r?s:r,n=a>n?a:n,o=s>o?s:o,a=e[6],s=e[7],t=a<t?a:t,r=s<r?s:r,n=a>n?a:n,o=s>o?s:o,this.minX=t,this.minY=r,this.maxX=n,this.maxY=o},i.prototype.addFrame=function(e,t,r,n,o){this.addFrameMatrix(e.worldTransform,t,r,n,o)},i.prototype.addFrameMatrix=function(e,t,r,n,o){var a=e.a,s=e.b,u=e.c,l=e.d,h=e.tx,f=e.ty,c=this.minX,d=this.minY,_=this.maxX,p=this.maxY,v=a*t+u*r+h,m=s*t+l*r+f;c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*n+u*r+h,m=s*n+l*r+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*t+u*o+h,m=s*t+l*o+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*n+u*o+h,m=s*n+l*o+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,this.minX=c,this.minY=d,this.maxX=_,this.maxY=p},i.prototype.addVertexData=function(e,t,r){for(var n=this.minX,o=this.minY,a=this.maxX,s=this.maxY,u=t;u<r;u+=2){var l=e[u],h=e[u+1];n=l<n?l:n,o=h<o?h:o,a=l>a?l:a,s=h>s?h:s}this.minX=n,this.minY=o,this.maxX=a,this.maxY=s},i.prototype.addVertices=function(e,t,r,n){this.addVerticesMatrix(e.worldTransform,t,r,n)},i.prototype.addVerticesMatrix=function(e,t,r,n,o,a){o===void 0&&(o=0),a===void 0&&(a=o);for(var s=e.a,u=e.b,l=e.c,h=e.d,f=e.tx,c=e.ty,d=this.minX,_=this.minY,p=this.maxX,v=this.maxY,m=r;m<n;m+=2){var x=t[m],T=t[m+1],w=s*x+l*T+f,y=h*T+u*x+c;d=Math.min(d,w-o),p=Math.max(p,w+o),_=Math.min(_,y-a),v=Math.max(v,y+a)}this.minX=d,this.minY=_,this.maxX=p,this.maxY=v},i.prototype.addBounds=function(e){var t=this.minX,r=this.minY,n=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<r?e.minY:r,this.maxX=e.maxX>n?e.maxX:n,this.maxY=e.maxY>o?e.maxY:o},i.prototype.addBoundsMask=function(e,t){var r=e.minX>t.minX?e.minX:t.minX,n=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,a=e.maxY<t.maxY?e.maxY:t.maxY;if(r<=o&&n<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<u?n:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},i.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},i.prototype.addBoundsArea=function(e,t){var r=e.minX>t.x?e.minX:t.x,n=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,a=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(r<=o&&n<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<u?n:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},i.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},i.prototype.addFramePad=function(e,t,r,n,o,a){e-=o,t-=a,r+=o,n+=a,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>r?this.maxX:r,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>n?this.maxY:n},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ts=function(i,e){return ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ts(i,e)};function Au(i,e){ts(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mt=function(i){Au(e,i);function e(){var t=i.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new Yf,t.alpha=1,t.visible=!0,t.renderable=!0,t.cullable=!1,t.cullArea=null,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new Un,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var r=Object.keys(t),n=0;n<r.length;++n){var o=r[n];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,r){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),r||(this._boundsRect||(this._boundsRect=new pt),r=this._boundsRect),this._bounds.getRectangle(r)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new pt),t=this._localBoundsRect),this._localBounds||(this._localBounds=new Un);var r=this.transform,n=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var s=this.getBounds(!1,t);return this.parent=n,this.transform=r,this._bounds=o,this._bounds.updateID+=this._boundsID-a,s},e.prototype.toGlobal=function(t,r,n){return n===void 0&&(n=!1),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,r)},e.prototype.toLocal=function(t,r,n,o){return r&&(t=r.toGlobal(t,n,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,n)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,r,n,o,a,s,u,l,h){return t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=1),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),l===void 0&&(l=0),h===void 0&&(h=0),this.position.x=t,this.position.y=r,this.scale.x=n||1,this.scale.y=o||1,this.rotation=a,this.skew.x=s,this.skew.y=u,this.pivot.x=l,this.pivot.y=h,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new $f),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*Nm},set:function(t){this.transform.rotation=t*Br},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var r=this._mask.isMaskData?this._mask.maskObject:this._mask;r&&(r._maskRefCount--,r._maskRefCount===0&&(r.renderable=!0,r.isMask=!1))}if(this._mask=t,this._mask){var r=this._mask.isMaskData?this._mask.maskObject:this._mask;r&&(r._maskRefCount===0&&(r.renderable=!1,r.isMask=!0),r._maskRefCount++)}}},enumerable:!1,configurable:!0}),e}(Wi),$f=function(i){Au(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(Mt);Mt.prototype.displayObjectUpdateTransform=Mt.prototype.updateTransform;function Gm(i,e){return i.zIndex===e.zIndex?i._lastSortedIndex-e._lastSortedIndex:i.zIndex-e.zIndex}var Se=function(i){Au(e,i);function e(){var t=i.call(this)||this;return t.children=[],t.sortableChildren=W.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];if(r.length>1)for(var o=0;o<r.length;o++)this.addChild(r[o]);else{var a=r[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return r[0]},e.prototype.addChildAt=function(t,r){if(r<0||r>this.children.length)throw new Error(t+"addChildAt: The index "+r+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(r,0,t),this._boundsID++,this.onChildrenChange(r),t.emit("added",this),this.emit("childAdded",t,this,r),t},e.prototype.swapChildren=function(t,r){if(t!==r){var n=this.getChildIndex(t),o=this.getChildIndex(r);this.children[n]=r,this.children[o]=t,this.onChildrenChange(n<o?n:o)}},e.prototype.getChildIndex=function(t){var r=this.children.indexOf(t);if(r===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return r},e.prototype.setChildIndex=function(t,r){if(r<0||r>=this.children.length)throw new Error("The index "+r+" supplied is out of bounds "+this.children.length);var n=this.getChildIndex(t);Zr(this.children,n,1),this.children.splice(r,0,t),this.onChildrenChange(r)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];if(r.length>1)for(var o=0;o<r.length;o++)this.removeChild(r[o]);else{var a=r[0],s=this.children.indexOf(a);if(s===-1)return null;a.parent=null,a.transform._parentID=-1,Zr(this.children,s,1),this._boundsID++,this.onChildrenChange(s),a.emit("removed",this),this.emit("childRemoved",a,this,s)}return r[0]},e.prototype.removeChildAt=function(t){var r=this.getChildAt(t);return r.parent=null,r.transform._parentID=-1,Zr(this.children,t,1),this._boundsID++,this.onChildrenChange(t),r.emit("removed",this),this.emit("childRemoved",r,this,t),r},e.prototype.removeChildren=function(t,r){t===void 0&&(t=0),r===void 0&&(r=this.children.length);var n=t,o=r,a=o-n,s;if(a>0&&a<=o){s=this.children.splice(n,a);for(var u=0;u<s.length;++u)s[u].parent=null,s[u].transform&&(s[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<s.length;++u)s[u].emit("removed",this),this.emit("childRemoved",s[u],this,u);return s}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,r=0,n=this.children.length;r<n;++r){var o=this.children[r];o._lastSortedIndex=r,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(Gm),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,r=this.children.length;t<r;++t){var n=this.children[t];n.visible&&n.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var r=this.children[t];if(!(!r.visible||!r.renderable))if(r.calculateBounds(),r._mask){var n=r._mask.isMaskData?r._mask.maskObject:r._mask;n?(n.calculateBounds(),this._bounds.addBoundsMask(r._bounds,n._bounds)):this._bounds.addBounds(r._bounds)}else r.filterArea?this._bounds.addBoundsArea(r._bounds,r.filterArea):this._bounds.addBounds(r._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,r){r===void 0&&(r=!1);var n=i.prototype.getLocalBounds.call(this,t);if(!r)for(var o=0,a=this.children.length;o<a;++o){var s=this.children[o];s.visible&&s.updateTransform()}return n},e.prototype._calculateBounds=function(){},e.prototype._renderWithCulling=function(t){var r=t.renderTexture.sourceFrame;if(r.width>0&&r.height>0){var n,o;if(this.cullArea?(n=this.cullArea,o=this.worldTransform):this._render!==e.prototype._render&&(n=this.getBounds(!0)),n&&r.intersects(n,o))this._render(t);else if(this.cullArea)return;for(var a=0,s=this.children.length;a<s;++a){var u=this.children[a],l=u.cullable;u.cullable=l||!this.cullArea,u.render(t),u.cullable=l}}},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(var r=0,n=this.children.length;r<n;++r)this.children[r].render(t)}},e.prototype.renderAdvanced=function(t){var r=this.filters,n=this._mask;if(r){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<r.length;o++)r[o].enabled&&this._enabledFilters.push(r[o])}var a=r&&this._enabledFilters&&this._enabledFilters.length||n&&(!n.isMaskData||n.enabled&&(n.autoDetect||n.type!==Ft.NONE));if(a&&t.batch.flush(),r&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),n&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(var o=0,s=this.children.length;o<s;++o)this.children[o].render(t)}a&&t.batch.flush(),n&&t.mask.pop(this),r&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){i.prototype.destroy.call(this),this.sortDirty=!1;var r=typeof t=="boolean"?t:t&&t.children,n=this.removeChildren(0,this.children.length);if(r)for(var o=0;o<n.length;++o)n[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var r=this.getLocalBounds().width;r!==0?this.scale.x=t/r:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var r=this.getLocalBounds().height;r!==0?this.scale.y=t/r:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(Mt);Se.prototype.containerUpdateTransform=Se.prototype.updateTransform;/*!
 * @pixi/extensions - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/extensions is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wi=function(){return wi=Object.assign||function(e){for(var t=arguments,r,n=1,o=arguments.length;n<o;n++){r=t[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},wi.apply(this,arguments)},mt;(function(i){i.Application="application",i.RendererPlugin="renderer-webgl-plugin",i.CanvasRendererPlugin="renderer-canvas-plugin",i.Loader="loader",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser"})(mt||(mt={}));var Th=function(i){if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");var e=typeof i.extension!="object"?{type:i.extension}:i.extension;i=wi(wi({},e),{ref:i})}if(typeof i=="object")i=wi({},i);else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},qe={_addHandlers:null,_removeHandlers:null,_queue:{},remove:function(){for(var i=arguments,e=this,t=[],r=0;r<arguments.length;r++)t[r]=i[r];return t.map(Th).forEach(function(n){n.type.forEach(function(o){var a,s;return(s=(a=e._removeHandlers)[o])===null||s===void 0?void 0:s.call(a,n)})}),this},add:function(){for(var i=arguments,e=this,t=[],r=0;r<arguments.length;r++)t[r]=i[r];return t.map(Th).forEach(function(n){n.type.forEach(function(o){var a=e._addHandlers,s=e._queue;a[o]?a[o](n):(s[o]=s[o]||[],s[o].push(n))})}),this},handle:function(i,e,t){var r=this._addHandlers=this._addHandlers||{},n=this._removeHandlers=this._removeHandlers||{};if(r[i]||n[i])throw new Error("Extension type "+i+" already has a handler");r[i]=e,n[i]=t;var o=this._queue;return o[i]&&(o[i].forEach(function(a){return e(a)}),delete o[i]),this},handleByMap:function(i,e){return this.handle(i,function(t){e[t.name]=t.ref},function(t){delete e[t.name]})},handleByList:function(i,e){return this.handle(i,function(t){var r,n;e.includes(t.ref)||(e.push(t.ref),i===mt.Loader&&((n=(r=t.ref).add)===null||n===void 0||n.call(r)))},function(t){var r=e.indexOf(t.ref);r!==-1&&e.splice(r,1)})}};/*!
 * @pixi/runner - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Gt=function(){function i(e){this.items=[],this._name=e,this._aliasCount=0}return i.prototype.emit=function(e,t,r,n,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var l=this,h=l.name,f=l.items;this._aliasCount++;for(var c=0,d=f.length;c<d;c++)f[c][h](e,t,r,n,o,a,s,u);return f===this.items&&this._aliasCount--,this},i.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},i.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},i.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},i.prototype.contains=function(e){return this.items.indexOf(e)!==-1},i.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},i.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(i.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),i}();Object.defineProperties(Gt.prototype,{dispatch:{value:Gt.prototype.emit},run:{value:Gt.prototype.emit}});/*!
 * @pixi/ticker - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */W.TARGET_FPMS=.06;var We;(function(i){i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY"})(We||(We={}));var ya=function(){function i(e,t,r,n){t===void 0&&(t=null),r===void 0&&(r=0),n===void 0&&(n=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=r,this.once=n}return i.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},i.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},i.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},i.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},i}(),jt=function(){function i(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ya(null,null,1/0),this.deltaMS=1/W.TARGET_FPMS,this.elapsedMS=1/W.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return i.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},i.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},i.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},i.prototype.add=function(e,t,r){return r===void 0&&(r=We.NORMAL),this._addListener(new ya(e,t,r))},i.prototype.addOnce=function(e,t,r){return r===void 0&&(r=We.NORMAL),this._addListener(new ya(e,t,r,!0))},i.prototype._addListener=function(e){var t=this._head.next,r=this._head;if(!t)e.connect(r);else{for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}return this._startIfPossible(),this},i.prototype.remove=function(e,t){for(var r=this._head.next;r;)r.match(e,t)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(i.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),i.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},i.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},i.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},i.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var r=e-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=e-r%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*W.TARGET_FPMS;for(var n=this._head,o=n.next;o;)o=o.emit(this.deltaTime);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(i.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,t)/1e3,W.TARGET_FPMS);this._maxElapsedMS=1/r},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"shared",{get:function(){if(!i._shared){var e=i._shared=new i;e.autoStart=!0,e._protected=!0}return i._shared},enumerable:!1,configurable:!0}),Object.defineProperty(i,"system",{get:function(){if(!i._system){var e=i._system=new i;e.autoStart=!0,e._protected=!0}return i._system},enumerable:!1,configurable:!0}),i}(),jm=function(){function i(){}return i.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(r){this._ticker&&this._ticker.remove(this.render,this),this._ticker=r,r&&r.add(this.render,this,We.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?jt.shared:new jt,e.autoStart&&this.start()},i.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},i.extension=mt.Application,i}();/*!
 * @pixi/core - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */W.PREFER_ENV=Pe.any?Ve.WEBGL:Ve.WEBGL2;W.STRICT_TEXTURE_CACHE=!1;var es=[];function qf(i,e){if(!i)return null;var t="";if(typeof i=="string"){var r=/\.(\w{3,4})(?:$|\?|#)/i.exec(i);r&&(t=r[1].toLowerCase())}for(var n=es.length-1;n>=0;--n){var o=es[n];if(o.test&&o.test(i,t))return new o(i,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var rs=function(i,e){return rs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},rs(i,e)};function xt(i,e){rs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var is=function(){return is=Object.assign||function(e){for(var t=arguments,r,n=1,o=arguments.length;n<o;n++){r=t[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},is.apply(this,arguments)};function zm(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(i);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(i,r[n])&&(t[r[n]]=i[r[n]]);return t}var Ii=function(){function i(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Gt("setRealSize"),this.onUpdate=new Gt("update"),this.onError=new Gt("onError")}return i.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},i.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},i.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(i.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.destroyed||this.onUpdate.emit()},i.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(i.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),i.prototype.style=function(e,t,r){return!1},i.prototype.dispose=function(){},i.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},i.test=function(e,t){return!1},i}(),Yi=function(i){xt(e,i);function e(t,r){var n=this,o=r||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return n=i.call(this,a,s)||this,n.data=t,n}return e.prototype.upload=function(t,r,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===be.UNPACK);var a=r.realWidth,s=r.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(r.target,0,0,0,a,s,r.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(r.target,0,n.internalFormat,a,s,0,r.format,n.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(Ii),Xm={scaleMode:oe.NEAREST,format:H.RGBA,alphaMode:be.NPM},dt=function(i){xt(e,i);function e(t,r){t===void 0&&(t=null),r===void 0&&(r=null);var n=i.call(this)||this;r=r||{};var o=r.alphaMode,a=r.mipmap,s=r.anisotropicLevel,u=r.scaleMode,l=r.width,h=r.height,f=r.wrapMode,c=r.format,d=r.type,_=r.target,p=r.resolution,v=r.resourceOptions;return t&&!(t instanceof Ii)&&(t=qf(t,v),t.internal=!0),n.resolution=p||W.RESOLUTION,n.width=Math.round((l||0)*n.resolution)/n.resolution,n.height=Math.round((h||0)*n.resolution)/n.resolution,n._mipmap=a!==void 0?a:W.MIPMAP_TEXTURES,n.anisotropicLevel=s!==void 0?s:W.ANISOTROPIC_LEVEL,n._wrapMode=f||W.WRAP_MODE,n._scaleMode=u!==void 0?u:W.SCALE_MODE,n.format=c||H.RGBA,n.type=d||it.UNSIGNED_BYTE,n.target=_||Ar.TEXTURE_2D,n.alphaMode=o!==void 0?o:be.UNPACK,n.uid=Nr(),n.touched=0,n.isPowerOfTwo=!1,n._refreshPOT(),n._glTextures={},n.dirtyId=0,n.dirtyStyleId=0,n.cacheId=null,n.valid=l>0&&h>0,n.textureCacheIds=[],n.destroyed=!1,n.resource=null,n._batchEnabled=0,n._batchLocation=0,n.parentTextureArray=null,n.setResource(t),n}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,r){var n;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,n=!0),r!==void 0&&r!==this.mipmap&&(this.mipmap=r,n=!0),n&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,r,n){return n=n||this.resolution,this.setRealSize(t*n,r*n,n)},e.prototype.setRealSize=function(t,r,n){return this.resolution=n||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(r)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=mh(this.realWidth)&&mh(this.realHeight)},e.prototype.setResolution=function(t){var r=this.resolution;return r===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*r)/t,this.height=Math.round(this.height*r)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete pr[this.cacheId],delete ke[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,r,n){n===void 0&&(n=W.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=r&&r.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+Nr()}a=t._pixiId}var u=pr[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new e(t,r),u.cacheId=a,e.addToCache(u,a)),u},e.fromBuffer=function(t,r,n,o){t=t||new Float32Array(r*n*4);var a=new Yi(t,{width:r,height:n}),s=t instanceof Float32Array?it.FLOAT:it.UNSIGNED_BYTE;return new e(a,Object.assign({},Xm,o||{width:r,height:n,type:s}))},e.addToCache=function(t,r){r&&(t.textureCacheIds.indexOf(r)===-1&&t.textureCacheIds.push(r),pr[r]&&console.warn("BaseTexture added to the cache with an id ["+r+"] that already had an entry"),pr[r]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var r=pr[t];if(r){var n=r.textureCacheIds.indexOf(t);return n>-1&&r.textureCacheIds.splice(n,1),delete pr[t],r}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete pr[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(Wi),Kf=function(i){xt(e,i);function e(t,r){var n=this,o=r||{},a=o.width,s=o.height;n=i.call(this,a,s)||this,n.items=[],n.itemDirtyIds=[];for(var u=0;u<t;u++){var l=new dt;n.items.push(l),n.itemDirtyIds.push(-2)}return n.length=t,n._load=null,n.baseTexture=null,n}return e.prototype.initFromArray=function(t,r){for(var n=0;n<this.length;n++)t[n]&&(t[n].castToBaseTexture?this.addBaseTextureAt(t[n].castToBaseTexture(),n):t[n]instanceof Ii?this.addResourceAt(t[n],n):this.addResourceAt(qf(t[n],r),n))},e.prototype.dispose=function(){for(var t=0,r=this.length;t<r;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,r){if(!this.items[r])throw new Error("Index "+r+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[r].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");i.prototype.bind.call(this,t);for(var r=0;r<this.length;r++)this.items[r].parentTextureArray=t,this.items[r].on("update",t.update,t)},e.prototype.unbind=function(t){i.prototype.unbind.call(this,t);for(var r=0;r<this.length;r++)this.items[r].parentTextureArray=null,this.items[r].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var r=this.items.map(function(o){return o.resource}).filter(function(o){return o}),n=r.map(function(o){return o.load()});return this._load=Promise.all(n).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},e}(Ii),Hm=function(i){xt(e,i);function e(t,r){var n=this,o=r||{},a=o.width,s=o.height,u,l;return Array.isArray(t)?(u=t,l=t.length):l=t,n=i.call(this,l,{width:a,height:s})||this,u&&n.initFromArray(u,r),n}return e.prototype.addBaseTextureAt=function(t,r){if(t.resource)this.addResourceAt(t.resource,r);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){i.prototype.bind.call(this,t),t.target=Ar.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,r,n){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,l=t.gl;n.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,n.internalFormat,this._width,this._height,a,0,r.format,n.type,null);for(var h=0;h<a;h++){var f=u[h];s[h]<f.dirtyId&&(s[h]=f.dirtyId,f.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,h,f.resource.width,f.resource.height,1,r.format,n.type,f.resource.source))}return!0},e}(Kf),sr=function(i){xt(e,i);function e(t){var r=this,n=t,o=n.naturalWidth||n.videoWidth||n.width,a=n.naturalHeight||n.videoHeight||n.height;return r=i.call(this,o,a)||this,r.source=t,r.noSubImage=!1,r}return e.crossOrigin=function(t,r,n){n===void 0&&r.indexOf("data:")!==0?t.crossOrigin=Dm(r):n!==!1&&(t.crossOrigin=typeof n=="string"?n:"anonymous")},e.prototype.upload=function(t,r,n,o){var a=t.gl,s=r.realWidth,u=r.realHeight;if(o=o||this.source,o instanceof HTMLImageElement){if(!o.complete||o.naturalWidth===0)return!1}else if(o instanceof HTMLVideoElement&&o.readyState<=1)return!1;return a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===be.UNPACK),!this.noSubImage&&r.target===a.TEXTURE_2D&&n.width===s&&n.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,r.format,n.type,o):(n.width=s,n.height=u,a.texImage2D(r.target,0,n.internalFormat,r.format,n.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,r=t.naturalWidth||t.videoWidth||t.width,n=t.naturalHeight||t.videoHeight||t.height;this.resize(r,n),i.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(Ii),Vm=function(i){xt(e,i);function e(t){return i.call(this,t)||this}return e.test=function(t){var r=globalThis.OffscreenCanvas;return r&&t instanceof r?!0:globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(sr),Wm=function(i){xt(e,i);function e(t,r){var n=this,o=r||{},a=o.width,s=o.height,u=o.autoLoad,l=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");n=i.call(this,6,{width:a,height:s})||this;for(var h=0;h<e.SIDES;h++)n.items[h].target=Ar.TEXTURE_CUBE_MAP_POSITIVE_X+h;return n.linkBaseTexture=l!==!1,t&&n.initFromArray(t,r),u!==!1&&n.load(),n}return e.prototype.bind=function(t){i.prototype.bind.call(this,t),t.target=Ar.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,r,n){if(!this.items[r])throw new Error("Index "+r+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,r);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=Ar.TEXTURE_CUBE_MAP_POSITIVE_X+r,t.parentTextureArray=this.baseTexture,this.items[r]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[r]=t,this},e.prototype.upload=function(t,r,n){for(var o=this.itemDirtyIds,a=0;a<e.SIDES;a++){var s=this.items[a];(o[a]<s.dirtyId||n.dirtyId<r.dirtyId)&&(s.valid&&s.resource?(s.resource.upload(t,s,n),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,n.internalFormat,r.realWidth,r.realHeight,0,r.format,n.type,null),o[a]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(Kf),Zf=function(i){xt(e,i);function e(t,r){var n=this;if(r=r||{},!(t instanceof HTMLImageElement)){var o=new Image;sr.crossOrigin(o,t,r.crossorigin),o.src=t,t=o}return n=i.call(this,t)||this,!t.complete&&n._width&&n._height&&(n._width=0,n._height=0),n.url=t.src,n._process=null,n.preserveBitmap=!1,n.createBitmap=(r.createBitmap!==void 0?r.createBitmap:W.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,n.alphaMode=typeof r.alphaMode=="number"?r.alphaMode:null,n.bitmap=null,n._load=null,r.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(t){var r=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(n,o){var a=r.source;r.url=a.src;var s=function(){r.destroyed||(a.onload=null,a.onerror=null,r.resize(a.width,a.height),r._load=null,r.createBitmap?n(r.process()):n(r))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),r.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,r=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var n=globalThis.createImageBitmap,o=!r.crossOrigin||r.crossOrigin==="anonymous";return this._process=fetch(r.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return n(a,0,0,r.width,r.height,{premultiplyAlpha:t.alphaMode===null||t.alphaMode===be.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,r,n){if(typeof this.alphaMode=="number"&&(r.alphaMode=this.alphaMode),!this.createBitmap)return i.prototype.upload.call(this,t,r,n);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(i.prototype.upload.call(this,t,r,n,this.bitmap),!this.preserveBitmap){var o=!0,a=r._glTextures;for(var s in a){var u=a[s];if(u!==n&&u.dirtyId!==r.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,i.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(sr),Ym=function(i){xt(e,i);function e(t,r){var n=this;return r=r||{},n=i.call(this,W.ADAPTER.createCanvas())||this,n._width=0,n._height=0,n.svg=t,n.scale=r.scale||1,n._overrideWidth=r.width,n._overrideHeight=r.height,n._resolve=null,n._crossorigin=r.crossorigin,n._load=null,r.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(r){if(t._resolve=function(){t.resize(t.source.width,t.source.height),r(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,r=new Image;sr.crossOrigin(r,this.svg,this._crossorigin),r.src=this.svg,r.onerror=function(n){t._resolve&&(r.onerror=null,t.onError.emit(n))},r.onload=function(){if(t._resolve){var n=r.width,o=r.height;if(!n||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=n*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*n,s=t._overrideHeight||t._overrideWidth/n*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+Nr(),u.getContext("2d").drawImage(r,0,0,n,o,0,0,a,s),t._resolve(),t._resolve=null}}},e.getSize=function(t){var r=e.SVG_SIZE.exec(t),n={};return r&&(n[r[1]]=Math.round(parseFloat(r[3])),n[r[5]]=Math.round(parseFloat(r[7]))),n},e.prototype.dispose=function(){i.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,r){return r==="svg"||typeof t=="string"&&t.startsWith("data:image/svg+xml")||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(sr),$m=function(i){xt(e,i);function e(t,r){var n=this;if(r=r||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];sr.crossOrigin(o,a,r.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),l=t[s],h=l.src,f=l.mime;h=h||t[s];var c=h.split("?").shift().toLowerCase(),d=c.slice(c.lastIndexOf(".")+1);f=f||e.MIME_TYPES[d]||"video/"+d,u.src=h,u.type=f,o.appendChild(u)}t=o}return n=i.call(this,t)||this,n.noSubImage=!0,n._autoUpdate=!0,n._isConnectedToTicker=!1,n._updateFPS=r.updateFPS||0,n._msToNextUpdate=0,n.autoPlay=r.autoPlay!==!1,n._load=null,n._resolve=null,n._onCanPlay=n._onCanPlay.bind(n),n._onError=n._onError.bind(n),r.autoLoad!==!1&&n.load(),n}return e.prototype.update=function(t){if(!this.destroyed){var r=jt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-r),(!this._updateFPS||this._msToNextUpdate<=0)&&(i.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var r=this.source;return(r.readyState===r.HAVE_ENOUGH_DATA||r.readyState===r.HAVE_FUTURE_DATA)&&r.width&&r.height&&(r.complete=!0),r.addEventListener("play",this._onPlayStart.bind(this)),r.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(r.addEventListener("canplay",this._onCanPlay),r.addEventListener("canplaythrough",this._onCanPlay),r.addEventListener("error",this._onError,!0)),this._load=new Promise(function(n){t.valid?n(t):(t._resolve=n,r.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return!t.paused&&!t.ended&&this._isSourceReady()},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState>2},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(jt.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var r=this.valid;this.resize(t.videoWidth,t.videoHeight),!r&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),i.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(jt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,r){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(r)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(sr),qm=function(i){xt(e,i);function e(t){return i.call(this,t)||this}return e.test=function(t){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&t instanceof ImageBitmap},e}(sr);es.push(Zf,qm,Vm,$m,Ym,Yi,Wm,Hm);var Km=function(i){xt(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.upload=function(t,r,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===be.UNPACK);var a=r.realWidth,s=r.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(r.target,0,0,0,a,s,r.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(r.target,0,n.internalFormat,a,s,0,r.format,n.type,this.data)),!0},e}(Yi),ns=function(){function i(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Gt("disposeFramebuffer"),this.multisample=St.NONE}return Object.defineProperty(i.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),i.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new dt(null,{scaleMode:oe.NEAREST,resolution:1,mipmap:le.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.addDepthTexture=function(e){return this.depthTexture=e||new dt(new Km(null,{width:this.width,height:this.height}),{scaleMode:oe.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:le.OFF,format:H.DEPTH_COMPONENT,type:it.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},i.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var r=0;r<this.colorTextures.length;r++){var n=this.colorTextures[r],o=n.resolution;n.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},i}(),Qf=function(i){xt(e,i);function e(t){t===void 0&&(t={});var r=this;if(typeof t=="number"){var n=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:n,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:St.NONE,r=i.call(this,null,t)||this,r.mipmap=le.OFF,r.valid=!0,r.clearColor=[0,0,0,0],r.framebuffer=new ns(r.realWidth,r.realHeight).addColorTexture(0,r),r.framebuffer.multisample=t.multisample,r.maskStack=[],r.filterStack=[{}],r}return e.prototype.resize=function(t,r){this.framebuffer.resize(t*this.resolution,r*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),i.prototype.dispose.call(this)},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(dt),Jf=function(){function i(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return i.prototype.set=function(e,t,r){var n=t.width,o=t.height;if(r){var a=e.width/2/n,s=e.height/2/o,u=e.x/n+a,l=e.y/o+s;r=wt.add(r,wt.NW),this.x0=u+a*wt.uX(r),this.y0=l+s*wt.uY(r),r=wt.add(r,2),this.x1=u+a*wt.uX(r),this.y1=l+s*wt.uY(r),r=wt.add(r,2),this.x2=u+a*wt.uX(r),this.y2=l+s*wt.uY(r),r=wt.add(r,2),this.x3=u+a*wt.uX(r),this.y3=l+s*wt.uY(r)}else this.x0=e.x/n,this.y0=e.y/o,this.x1=(e.x+e.width)/n,this.y1=e.y/o,this.x2=(e.x+e.width)/n,this.y2=(e.y+e.height)/o,this.x3=e.x/n,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},i.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},i}(),Sh=new Jf;function an(i){i.destroy=function(){},i.on=function(){},i.once=function(){},i.emit=function(){}}var at=function(i){xt(e,i);function e(t,r,n,o,a,s){var u=i.call(this)||this;if(u.noFrame=!1,r||(u.noFrame=!0,r=new pt(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=r,u.trim=o,u.valid=!1,u._uvs=Sh,u.uvMatrix=null,u.orig=n||r,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new ht(s.x,s.y):new ht(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=r:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var r=this.baseTexture.resource;r&&r.url&&ke[r.url]&&e.removeFromCache(r.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),r=this._frame===this.orig?t:this.orig.clone(),n=new e(this.baseTexture,!this.noFrame&&t,r,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(n._frame=t),n},e.prototype.updateUvs=function(){this._uvs===Sh&&(this._uvs=new Jf),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,r,n){r===void 0&&(r={}),n===void 0&&(n=W.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else if(t instanceof dt){if(!t.cacheId){var s=r&&r.pixiIdPrefix||"pixiid";t.cacheId=s+"-"+Nr(),dt.addToCache(t,t.cacheId)}a=t.cacheId}else{if(!t._pixiId){var s=r&&r.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+Nr()}a=t._pixiId}var u=ke[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!u&&!(t instanceof dt)?(r.resolution||(r.resolution=Bn(t)),u=new e(new dt(t,r)),u.baseTexture.cacheId=a,dt.addToCache(u.baseTexture,a),e.addToCache(u,a)):!u&&t instanceof dt&&(u=new e(t),e.addToCache(u,a)),u},e.fromURL=function(t,r){var n=Object.assign({autoLoad:!1},r==null?void 0:r.resourceOptions),o=e.from(t,Object.assign({resourceOptions:n},r),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,r,n,o){return new e(dt.fromBuffer(t,r,n,o))},e.fromLoader=function(t,r,n,o){var a=new dt(t,Object.assign({scaleMode:W.SCALE_MODE,resolution:Bn(r)},o)),s=a.resource;s instanceof Zf&&(s.url=r);var u=new e(a);return n||(n=r),dt.addToCache(u.baseTexture,n),e.addToCache(u,n),n!==r&&(dt.addToCache(u.baseTexture,r),e.addToCache(u,r)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(l){u.baseTexture.once("loaded",function(){return l(u)})})},e.addToCache=function(t,r){r&&(t.textureCacheIds.indexOf(r)===-1&&t.textureCacheIds.push(r),ke[r]&&console.warn("Texture added to the cache with an id ["+r+"] that already had an entry"),ke[r]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var r=ke[t];if(r){var n=r.textureCacheIds.indexOf(t);return n>-1&&r.textureCacheIds.splice(n,1),delete ke[t],r}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)ke[t.textureCacheIds[o]]===t&&delete ke[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var r=t.x,n=t.y,o=t.width,a=t.height,s=r+o>this.baseTexture.width,u=n+a>this.baseTexture.height;if(s||u){var l=s&&u?"and":"or",h="X: "+r+" + "+o+" = "+(r+o)+" > "+this.baseTexture.width,f="Y: "+n+" + "+a+" = "+(n+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(h+" "+l+" "+f))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(e,"EMPTY",{get:function(){return e._EMPTY||(e._EMPTY=new e(new dt),an(e._EMPTY),an(e._EMPTY.baseTexture)),e._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(e,"WHITE",{get:function(){if(!e._WHITE){var t=W.ADAPTER.createCanvas(16,16),r=t.getContext("2d");t.width=16,t.height=16,r.fillStyle="white",r.fillRect(0,0,16,16),e._WHITE=new e(dt.from(t)),an(e._WHITE),an(e._WHITE.baseTexture)}return e._WHITE},enumerable:!1,configurable:!0}),e}(Wi),Lr=function(i){xt(e,i);function e(t,r){var n=i.call(this,t,r)||this;return n.valid=!0,n.filterFrame=null,n.filterPoolKey=null,n.updateUvs(),n}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,r,n){n===void 0&&(n=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(r*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,n&&this.baseTexture.resize(a,s),this.updateUvs()},e.prototype.setResolution=function(t){var r=this.baseTexture;r.resolution!==t&&(r.setResolution(t),this.resize(r.width,r.height,!1))},e.create=function(t){for(var r=arguments,n=[],o=1;o<arguments.length;o++)n[o-1]=r[o];return typeof t=="number"&&(xe("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:n[0],scaleMode:n[1],resolution:n[2]}),new e(new Qf(t))},e}(at),Zm=function(){function i(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return i.prototype.createTexture=function(e,t,r){r===void 0&&(r=St.NONE);var n=new Qf(Object.assign({width:e,height:t,resolution:1,multisample:r},this.textureOptions));return new Lr(n)},i.prototype.getOptimalTexture=function(e,t,r,n){r===void 0&&(r=1),n===void 0&&(n=St.NONE);var o;e=Math.ceil(e*r-1e-6),t=Math.ceil(t*r-1e-6),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=Nn(e),t=Nn(t),o=((e&65535)<<16|t&65535)>>>0,n>1&&(o+=n*4294967296)):o=n>1?-n:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(e,t,n)),a.filterPoolKey=o,a.setResolution(r),a},i.prototype.getFilterTexture=function(e,t,r){var n=this.getOptimalTexture(e.width,e.height,t||e.resolution,r||St.NONE);return n.filterFrame=e.filterFrame,n},i.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},i.prototype.returnFilterTexture=function(e){this.returnTexture(e)},i.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var r=this.texturePool[t];if(r)for(var n=0;n<r.length;n++)r[n].destroy(!0)}this.texturePool={}},i.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var r=this.texturePool[t];if(r)for(var n=0;n<r.length;n++)r[n].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},i.SCREEN_KEY=-1,i}(),Eh=function(){function i(e,t,r,n,o,a,s){t===void 0&&(t=0),r===void 0&&(r=!1),n===void 0&&(n=it.FLOAT),this.buffer=e,this.size=t,this.normalized=r,this.type=n,this.stride=o,this.start=a,this.instance=s}return i.prototype.destroy=function(){this.buffer=null},i.from=function(e,t,r,n,o){return new i(e,t,r,n,o)},i}(),Qm=0,Bt=function(){function i(e,t,r){t===void 0&&(t=!0),r===void 0&&(r=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=r,this.static=t,this.id=Qm++,this.disposeRunner=new Gt("disposeBuffer")}return i.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(i.prototype,"index",{get:function(){return this.type===Ae.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?Ae.ELEMENT_ARRAY_BUFFER:Ae.ARRAY_BUFFER},enumerable:!1,configurable:!0}),i.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new i(e)},i}(),Jm={Float32Array,Uint32Array,Int32Array,Uint8Array};function ty(i,e){for(var t=0,r=0,n={},o=0;o<i.length;o++)r+=e[o],t+=i[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<i.length;o++){var l=e[o],h=i[o],f=Vf(h);n[f]||(n[f]=new Jm[f](a)),s=n[f];for(var c=0;c<h.length;c++){var d=(c/l|0)*r+u,_=c%l;s[d+_]=h[c]}u+=l}return new Float32Array(a)}var wh={5126:4,5123:2,5121:1},ey=0,ry={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},$i=function(){function i(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=ey++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Gt("disposeGeometry"),this.refCount=0}return i.prototype.addAttribute=function(e,t,r,n,o,a,s,u){if(r===void 0&&(r=0),n===void 0&&(n=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof Bt||(t instanceof Array&&(t=new Float32Array(t)),t=new Bt(t));var l=e.split("|");if(l.length>1){for(var h=0;h<l.length;h++)this.addAttribute(l[h],t,r,n,o);return this}var f=this.buffers.indexOf(t);return f===-1&&(this.buffers.push(t),f=this.buffers.length-1),this.attributes[e]=new Eh(f,r,n,o,a,s,u),this.instanced=this.instanced||u,this},i.prototype.getAttribute=function(e){return this.attributes[e]},i.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},i.prototype.addIndex=function(e){return e instanceof Bt||(e instanceof Array&&(e=new Uint16Array(e)),e=new Bt(e)),e.type=Ae.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},i.prototype.getIndex=function(){return this.indexBuffer},i.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],r=new Bt,n;for(n in this.attributes){var o=this.attributes[n],a=this.buffers[o.buffer];e.push(a.data),t.push(o.size*wh[o.type]/4),o.buffer=0}for(r.data=ty(e,t),n=0;n<this.buffers.length;n++)this.buffers[n]!==this.indexBuffer&&this.buffers[n].destroy();return this.buffers=[r],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},i.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],r=this.buffers[t.buffer];return r.data.length/(t.stride/4||t.size)}return 0},i.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},i.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},i.prototype.clone=function(){for(var e=new i,t=0;t<this.buffers.length;t++)e.buffers[t]=new Bt(this.buffers[t].data.slice(0));for(var t in this.attributes){var r=this.attributes[t];e.attributes[t]=new Eh(r.buffer,r.size,r.normalized,r.type,r.stride,r.start,r.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=Ae.ELEMENT_ARRAY_BUFFER),e},i.merge=function(e){for(var t=new i,r=[],n=[],o=[],a,s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)n[u]=n[u]||0,n[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)r[s]=new ry[Vf(a.buffers[s].data)](n[s]),t.buffers[s]=new Bt(r[s]);for(var s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)r[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=Ae.ELEMENT_ARRAY_BUFFER;for(var l=0,h=0,f=0,c=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){c=s;break}for(var s in a.attributes){var d=a.attributes[s];(d.buffer|0)===c&&(h+=d.size*wh[d.type]/4)}for(var s=0;s<e.length;s++){for(var _=e[s].indexBuffer.data,u=0;u<_.length;u++)t.indexBuffer.data[u+f]+=l;l+=e[s].buffers[c].data.length/h,f+=_.length}}return t},i}(),iy=function(i){xt(e,i);function e(){var t=i.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}($i),tc=function(i){xt(e,i);function e(){var t=i.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new Bt(t.vertices),t.uvBuffer=new Bt(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,r){var n=0,o=0;return this.uvs[0]=n,this.uvs[1]=o,this.uvs[2]=n+r.width/t.width,this.uvs[3]=o,this.uvs[4]=n+r.width/t.width,this.uvs[5]=o+r.height/t.height,this.uvs[6]=n,this.uvs[7]=o+r.height/t.height,n=r.x,o=r.y,this.vertices[0]=n,this.vertices[1]=o,this.vertices[2]=n+r.width,this.vertices[3]=o,this.vertices[4]=n+r.width,this.vertices[5]=o+r.height,this.vertices[6]=n,this.vertices[7]=o+r.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}($i),ny=0,Rr=function(){function i(e,t,r){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=ny++,this.static=!!t,this.ubo=!!r,e instanceof Bt?(this.buffer=e,this.buffer.type=Ae.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new Bt(new Float32Array(1)),this.buffer.type=Ae.UNIFORM_BUFFER,this.autoManage=!0))}return i.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},i.prototype.add=function(e,t,r){if(!this.ubo)this.uniforms[e]=new i(t,r);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},i.from=function(e,t,r){return new i(e,t,r)},i.uboFrom=function(e,t){return new i(e,t??!0,!0)},i}(),oy=function(){function i(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=St.NONE,this.sourceFrame=new pt,this.destinationFrame=new pt,this.bindingSourceFrame=new pt,this.bindingDestinationFrame=new pt,this.filters=[],this.transform=null}return i.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},i}(),sn=[new ht,new ht,new ht,new ht],ga=new Lt,ay=function(){function i(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new Zm,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new iy,this.quadUv=new tc,this.tempRect=new pt,this.activeState={},this.globalUniforms=new Rr({outputFrame:new pt,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return i.prototype.push=function(e,t){for(var r,n,o=this.renderer,a=this.defaultFilterStack,s=this.statePool.pop()||new oy,u=this.renderer.renderTexture,l=t[0].resolution,h=t[0].multisample,f=t[0].padding,c=t[0].autoFit,d=(r=t[0].legacy)!==null&&r!==void 0?r:!0,_=1;_<t.length;_++){var p=t[_];l=Math.min(l,p.resolution),h=Math.min(h,p.multisample),f=this.useMaxPadding?Math.max(f,p.padding):f+p.padding,c=c&&p.autoFit,d=d||((n=p.legacy)!==null&&n!==void 0?n:!0)}a.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),a.push(s),s.resolution=l,s.multisample=h,s.legacy=d,s.target=e,s.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),s.sourceFrame.pad(f);var v=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(ga.copyFrom(o.projection.transform).invert(),v),c?(s.sourceFrame.fit(v),(s.sourceFrame.width<=0||s.sourceFrame.height<=0)&&(s.sourceFrame.width=0,s.sourceFrame.height=0)):s.sourceFrame.intersects(v)||(s.sourceFrame.width=0,s.sourceFrame.height=0),this.roundFrame(s.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,l,h),s.filters=t,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;var m=this.tempRect;m.x=0,m.y=0,m.width=s.sourceFrame.width,m.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(u.sourceFrame),s.bindingDestinationFrame.copyFrom(u.destinationFrame),s.transform=o.projection.transform,o.projection.transform=null,u.bind(s.renderTexture,s.sourceFrame,m),o.framebuffer.clear(0,0,0,0)},i.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),r=t.filters;this.activeState=t;var n=this.globalUniforms.uniforms;n.outputFrame=t.sourceFrame,n.resolution=t.resolution;var o=n.inputSize,a=n.inputPixel,s=n.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=n.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,n.filterClamp=n.inputClamp}this.globalUniforms.update();var l=e[e.length-1];if(this.renderer.framebuffer.blit(),r.length===1)r[0].apply(this,t.renderTexture,l.renderTexture,ye.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var h=t.renderTexture,f=this.getOptimalFilterTexture(h.width,h.height,t.resolution);f.filterFrame=h.filterFrame;var c=0;for(c=0;c<r.length-1;++c){c===1&&t.multisample>1&&(f=this.getOptimalFilterTexture(h.width,h.height,t.resolution),f.filterFrame=h.filterFrame),r[c].apply(this,h,f,ye.CLEAR,t);var d=h;h=f,f=d}r[c].apply(this,h,l.renderTexture,ye.BLEND,t),c>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(f)}t.clear(),this.statePool.push(t)},i.prototype.bindAndClear=function(e,t){t===void 0&&(t=ye.CLEAR);var r=this.renderer,n=r.renderTexture,o=r.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=e.filterFrame.width,a.height=e.filterFrame.height,n.bind(e,e.filterFrame,a)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?n.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===ye.CLEAR||t===ye.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},i.prototype.applyFilter=function(e,t,r,n){var o=this.renderer;o.state.set(e.state),this.bindAndClear(r,n),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(ge.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(ge.TRIANGLE_STRIP))},i.prototype.calculateSpriteMatrix=function(e,t){var r=this.activeState,n=r.sourceFrame,o=r.destinationFrame,a=t._texture.orig,s=e.set(o.width,0,0,o.height,n.x,n.y),u=t.worldTransform.copyTo(Lt.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},i.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},i.prototype.getOptimalFilterTexture=function(e,t,r,n){return r===void 0&&(r=1),n===void 0&&(n=St.NONE),this.texturePool.getOptimalTexture(e,t,r,n)},i.prototype.getFilterTexture=function(e,t,r){if(typeof e=="number"){var n=e;e=t,t=n}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,r||St.NONE);return o.filterFrame=e.filterFrame,o},i.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},i.prototype.emptyPool=function(){this.texturePool.clear(!0)},i.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},i.prototype.transformAABB=function(e,t){var r=sn[0],n=sn[1],o=sn[2],a=sn[3];r.set(t.left,t.top),n.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),e.apply(r,r),e.apply(n,n),e.apply(o,o),e.apply(a,a);var s=Math.min(r.x,n.x,o.x,a.x),u=Math.min(r.y,n.y,o.y,a.y),l=Math.max(r.x,n.x,o.x,a.x),h=Math.max(r.y,n.y,o.y,a.y);t.x=s,t.y=u,t.width=l-s,t.height=h-u},i.prototype.roundFrame=function(e,t,r,n,o){if(!(e.width<=0||e.height<=0||r.width<=0||r.height<=0)){if(o){var a=o.a,s=o.b,u=o.c,l=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}o=o?ga.copyFrom(o):ga.identity(),o.translate(-r.x,-r.y).scale(n.width/r.width,n.height/r.height).translate(n.x,n.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)}},i}(),to=function(){function i(e){this.renderer=e}return i.prototype.flush=function(){},i.prototype.destroy=function(){this.renderer=null},i.prototype.start=function(){},i.prototype.stop=function(){this.flush()},i.prototype.render=function(e){},i}(),sy=function(){function i(e){this.renderer=e,this.emptyRenderer=new to(e),this.currentRenderer=this.emptyRenderer}return i.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},i.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},i.prototype.copyBoundTextures=function(e,t){for(var r=this.renderer.texture.boundTextures,n=t-1;n>=0;--n)e[n]=r[n]||null,e[n]&&(e[n]._batchLocation=n)},i.prototype.boundArray=function(e,t,r,n){for(var o=e.elements,a=e.ids,s=e.count,u=0,l=0;l<s;l++){var h=o[l],f=h._batchLocation;if(f>=0&&f<n&&t[f]===h){a[l]=f;continue}for(;u<n;){var c=t[u];if(c&&c._batchEnabled===r&&c._batchLocation===u){u++;continue}a[l]=u,h._batchLocation=u,t[u]=h;break}}},i.prototype.destroy=function(){this.renderer=null},i}(),Ph=0,uy=function(){function i(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(i.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),i.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=Ph++},i.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=Ph++,this.renderer.runners.contextChange.emit(e)},i.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},i.prototype.createContext=function(e,t){var r;if(W.PREFER_ENV>=Ve.WEBGL2&&(r=e.getContext("webgl2",t)),r)this.webGLVersion=2;else if(this.webGLVersion=1,r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!r)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=r,this.getExtensions(),this.gl},i.prototype.getExtensions=function(){var e=this.gl,t={loseContext:e.getExtension("WEBGL_lose_context"),anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},i.prototype.handleContextLost=function(e){var t=this;e.preventDefault(),setTimeout(function(){t.gl.isContextLost()&&t.extensions.loseContext&&t.extensions.loseContext.restoreContext()},0)},i.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},i.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},i.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},i.prototype.validateContext=function(e){var t=e.getContextAttributes(),r="WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext;r&&(this.webGLVersion=2),t&&!t.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var n=r||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=n,n||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},i}(),ly=function(){function i(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=St.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return i}(),hy=new pt,fy=function(){function i(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new ns(10,10),this.msaaSamples=null}return i.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new pt,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,r=this.renderer.context.extensions.depthTexture;W.PREFER_ENV===Ve.WEBGL_LEGACY&&(t=null,r=null),t?e.drawBuffers=function(n){return t.drawBuffersWEBGL(n)}:(this.hasMRT=!1,e.drawBuffers=function(){}),r||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},i.prototype.bind=function(e,t,r){r===void 0&&(r=0);var n=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,n.bindFramebuffer(n.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==r&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=r),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,r)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var a=0;a<e.colorTextures.length;a++){var s=e.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>r,l=t.height>>r,h=u/t.width;this.setViewport(t.x*h,t.y*h,u,l)}else{var u=e.width>>r,l=e.height>>r;this.setViewport(0,0,u,l)}}else this.current&&(this.current=null,n.bindFramebuffer(n.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},i.prototype.setViewport=function(e,t,r,n){var o=this.viewport;e=Math.round(e),t=Math.round(t),r=Math.round(r),n=Math.round(n),(o.width!==r||o.height!==n||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=r,o.height=n,this.gl.viewport(e,t,r,n))},Object.defineProperty(i.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),i.prototype.clear=function(e,t,r,n,o){o===void 0&&(o=Mn.COLOR|Mn.DEPTH);var a=this.gl;a.clearColor(e,t,r,n),a.clear(o)},i.prototype.initFramebuffer=function(e){var t=this.gl,r=new ly(t.createFramebuffer());return r.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=r,this.managedFramebuffers.push(e),e.disposeRunner.add(this),r},i.prototype.resizeFramebuffer=function(e){var t=this.gl,r=e.glFramebuffers[this.CONTEXT_UID];r.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,r.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,r.multisample,t.RGBA8,e.width,e.height)),r.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,r.stencil),r.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,r.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var n=e.colorTextures,o=n.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=n[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},i.prototype.updateFramebuffer=function(e,t){var r=this.gl,n=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,a=o.length;r.drawBuffers||(a=Math.min(a,1)),n.multisample>1&&this.canMultisampleFramebuffer(e)?(n.msaaBuffer=n.msaaBuffer||r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,n.msaaBuffer),r.renderbufferStorageMultisample(r.RENDERBUFFER,n.multisample,r.RGBA8,e.width,e.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,n.msaaBuffer)):n.msaaBuffer&&(r.deleteRenderbuffer(n.msaaBuffer),n.msaaBuffer=null,n.blitFramebuffer&&(n.blitFramebuffer.dispose(),n.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var l=o[u],h=l.parentTextureArray||l;this.renderer.texture.bind(h,0),!(u===0&&n.msaaBuffer)&&(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+u,l.target,h._glTextures[this.CONTEXT_UID].texture,t),s.push(r.COLOR_ATTACHMENT0+u))}if(s.length>1&&r.drawBuffers(s),e.depthTexture){var f=this.writeDepthTexture;if(f){var c=e.depthTexture;this.renderer.texture.bind(c,0),r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,c._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(n.stencil=n.stencil||r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,n.stencil),n.msaaBuffer?r.renderbufferStorageMultisample(r.RENDERBUFFER,n.multisample,r.DEPTH24_STENCIL8,e.width,e.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,e.width,e.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,n.stencil)):n.stencil&&(r.deleteRenderbuffer(n.stencil),n.stencil=null)},i.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},i.prototype.detectSamples=function(e){var t=this.msaaSamples,r=St.NONE;if(e<=1||t===null)return r;for(var n=0;n<t.length;n++)if(t[n]<=e){r=t[n];break}return r===1&&(r=St.NONE),r},i.prototype.blit=function(e,t,r){var n=this,o=n.current,a=n.renderer,s=n.gl,u=n.CONTEXT_UID;if(a.context.webGLVersion===2&&o){var l=o.glFramebuffers[u];if(l){if(!e){if(!l.msaaBuffer)return;var h=o.colorTextures[0];if(!h)return;l.blitFramebuffer||(l.blitFramebuffer=new ns(o.width,o.height),l.blitFramebuffer.addColorTexture(0,h)),e=l.blitFramebuffer,e.colorTextures[0]!==h&&(e.colorTextures[0]=h,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=hy,t.width=o.width,t.height=o.height),r||(r=t);var f=t.width===r.width&&t.height===r.height;this.bind(e),s.bindFramebuffer(s.READ_FRAMEBUFFER,l.framebuffer),s.blitFramebuffer(t.left,t.top,t.right,t.bottom,r.left,r.top,r.right,r.bottom,s.COLOR_BUFFER_BIT,f?s.NEAREST:s.LINEAR)}}},i.prototype.disposeFramebuffer=function(e,t){var r=e.glFramebuffers[this.CONTEXT_UID],n=this.gl;if(r){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(n.deleteFramebuffer(r.framebuffer),r.msaaBuffer&&n.deleteRenderbuffer(r.msaaBuffer),r.stencil&&n.deleteRenderbuffer(r.stencil)),r.blitFramebuffer&&r.blitFramebuffer.dispose()}},i.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var r=0;r<t.length;r++)this.disposeFramebuffer(t[r],e)},i.prototype.forceStencil=function(){var e=this.current;if(e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var r=e.width,n=e.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,r,n):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,r,n),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},i.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new pt},i.prototype.destroy=function(){this.renderer=null},i}(),xa={5126:4,5123:2,5121:1},cy=function(){function i(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return i.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var r=this.renderer.context.extensions.vertexArrayObject;W.PREFER_ENV===Ve.WEBGL_LEGACY&&(r=null),r?(e.createVertexArray=function(){return r.createVertexArrayOES()},e.bindVertexArray=function(o){return r.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return r.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var n=e.getExtension("ANGLE_instanced_arrays");n?(e.vertexAttribDivisor=function(o,a){return n.vertexAttribDivisorANGLE(o,a)},e.drawElementsInstanced=function(o,a,s,u,l){return n.drawElementsInstancedANGLE(o,a,s,u,l)},e.drawArraysInstanced=function(o,a,s,u){return n.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},i.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var r=this.gl,n=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;n||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=n={},o=!0);var a=n[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==a&&(this._activeVao=a,this.hasVao?r.bindVertexArray(a):this.activateVao(e,t.program)),this.updateBuffers()},i.prototype.reset=function(){this.unbind()},i.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,r=0;r<e.buffers.length;r++){var n=e.buffers[r];t.update(n)}},i.prototype.checkCompatibility=function(e,t){var r=e.attributes,n=t.attributeData;for(var o in n)if(!r[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},i.prototype.getSignature=function(e,t){var r=e.attributes,n=t.attributeData,o=["g",e.id];for(var a in r)n[a]&&o.push(a,n[a].location);return o.join("-")},i.prototype.initGeometryVao=function(e,t,r){r===void 0&&(r=!0);var n=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,s);var u=this.getSignature(e,s),l=e.glVertexArrayObjects[this.CONTEXT_UID],h=l[u];if(h)return l[s.id]=h,h;var f=e.buffers,c=e.attributes,d={},_={};for(var p in f)d[p]=0,_[p]=0;for(var p in c)!c[p].size&&s.attributeData[p]?c[p].size=s.attributeData[p].size:c[p].size||console.warn("PIXI Geometry attribute '"+p+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[c[p].buffer]+=c[p].size*xa[c[p].type];for(var p in c){var v=c[p],m=v.size;v.stride===void 0&&(d[v.buffer]===m*xa[v.type]?v.stride=0:v.stride=d[v.buffer]),v.start===void 0&&(v.start=_[v.buffer],_[v.buffer]+=m*xa[v.type])}h=n.createVertexArray(),n.bindVertexArray(h);for(var x=0;x<f.length;x++){var T=f[x];a.bind(T),r&&T._glBuffers[o].refCount++}return this.activateVao(e,s),this._activeVao=h,l[s.id]=h,l[u]=h,h},i.prototype.disposeGeometry=function(e,t){var r;if(this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var n=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=e.buffers,s=(r=this.renderer)===null||r===void 0?void 0:r.buffer;if(e.disposeRunner.remove(this),!!n){if(s)for(var u=0;u<a.length;u++){var l=a[u]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var h in n)if(h[0]==="g"){var f=n[h];this._activeVao===f&&this.unbind(),o.deleteVertexArray(f)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},i.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),r=0;r<t.length;r++)this.disposeGeometry(this.managedGeometries[t[r]],e)},i.prototype.activateVao=function(e,t){var r=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,a=e.buffers,s=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var l in s){var h=s[l],f=a[h.buffer],c=f._glBuffers[n];if(t.attributeData[l]){u!==c&&(o.bind(f),u=c);var d=t.attributeData[l].location;if(r.enableVertexAttribArray(d),r.vertexAttribPointer(d,h.size,h.type||r.FLOAT,h.normalized,h.stride,h.start),h.instance)if(this.hasInstance)r.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},i.prototype.draw=function(e,t,r,n){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(e,t||a.indexBuffer.data.length,u,(r||0)*s,n||1):o.drawElements(e,t||a.indexBuffer.data.length,u,(r||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(e,r,t||a.getSize(),n||1):o.drawArrays(e,r,t||a.getSize());return this},i.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},i.prototype.destroy=function(){this.renderer=null},i}(),dy=function(){function i(e){e===void 0&&(e=null),this.type=Ft.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=W.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(i.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null},enumerable:!1,configurable:!0}),i.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=Ft.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},i.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},i}();function Ch(i,e,t){var r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}function Oh(i,e){var t=i.getShaderSource(e).split(`
`).map(function(l,h){return h+": "+l}),r=i.getShaderInfoLog(e),n=r.split(`
`),o={},a=n.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!o[l]?(o[l]=!0,!0):!1}),s=[""];a.forEach(function(l){t[l-1]="%c"+t[l-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(r),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function py(i,e,t,r){i.getProgramParameter(e,i.LINK_STATUS)||(i.getShaderParameter(t,i.COMPILE_STATUS)||Oh(i,t),i.getShaderParameter(r,i.COMPILE_STATUS)||Oh(i,r),console.error("PixiJS Error: Could not initialize shader."),i.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",i.getProgramInfoLog(e)))}function ba(i){for(var e=new Array(i),t=0;t<e.length;t++)e[t]=!1;return e}function ec(i,e){switch(i){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return ba(2*e);case"bvec3":return ba(3*e);case"bvec4":return ba(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var rc={},pi=rc;function vy(){if(pi===rc||pi&&pi.isContextLost()){var i=W.ADAPTER.createCanvas(),e=void 0;W.PREFER_ENV>=Ve.WEBGL2&&(e=i.getContext("webgl2",{})),e||(e=i.getContext("webgl",{})||i.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),pi=e}return pi}var un;function _y(){if(!un){un=ae.MEDIUM;var i=vy();if(i&&i.getShaderPrecisionFormat){var e=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT);un=e.precision?ae.HIGH:ae.MEDIUM}}return un}function Ah(i,e,t){if(i.substring(0,9)!=="precision"){var r=e;return e===ae.HIGH&&t!==ae.HIGH&&(r=ae.MEDIUM),"precision "+r+` float;
`+i}else if(t!==ae.HIGH&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}var my={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function ic(i){return my[i]}var ln=null,Rh={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function nc(i,e){if(!ln){var t=Object.keys(Rh);ln={};for(var r=0;r<t.length;++r){var n=t[r];ln[i[n]]=Rh[n]}}return ln[e]}var Qr=[{test:function(i){return i.type==="float"&&i.size===1&&!i.isArray},code:function(i){return`
            if(uv["`+i+'"] !== ud["'+i+`"].value)
            {
                ud["`+i+'"].value = uv["'+i+`"]
                gl.uniform1f(ud["`+i+'"].location, uv["'+i+`"])
            }
            `}},{test:function(i,e){return(i.type==="sampler2D"||i.type==="samplerCube"||i.type==="sampler2DArray")&&i.size===1&&!i.isArray&&(e==null||e.castToBaseTexture!==void 0)},code:function(i){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+i+`"], t);

            if(ud["`+i+`"].value !== t)
            {
                ud["`+i+`"].value = t;
                gl.uniform1i(ud["`+i+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(i,e){return i.type==="mat3"&&i.size===1&&!i.isArray&&e.a!==void 0},code:function(i){return`
            gl.uniformMatrix3fv(ud["`+i+'"].location, false, uv["'+i+`"].toArray(true));
            `},codeUbo:function(i){return`
                var `+i+"_matrix = uv."+i+`.toArray(true);

                data[offset] = `+i+`_matrix[0];
                data[offset+1] = `+i+`_matrix[1];
                data[offset+2] = `+i+`_matrix[2];
        
                data[offset + 4] = `+i+`_matrix[3];
                data[offset + 5] = `+i+`_matrix[4];
                data[offset + 6] = `+i+`_matrix[5];
        
                data[offset + 8] = `+i+`_matrix[6];
                data[offset + 9] = `+i+`_matrix[7];
                data[offset + 10] = `+i+`_matrix[8];
            `}},{test:function(i,e){return i.type==="vec2"&&i.size===1&&!i.isArray&&e.x!==void 0},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+i+`"].location, v.x, v.y);
                }`},codeUbo:function(i){return`
                v = uv.`+i+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(i){return i.type==="vec2"&&i.size===1&&!i.isArray},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+i+`"].location, v[0], v[1]);
                }
            `}},{test:function(i,e){return i.type==="vec4"&&i.size===1&&!i.isArray&&e.width!==void 0},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+i+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(i){return`
                    v = uv.`+i+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(i){return i.type==="vec4"&&i.size===1&&!i.isArray},code:function(i){return`
                cv = ud["`+i+`"].value;
                v = uv["`+i+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+i+`"].location, v[0], v[1], v[2], v[3])
                }`}}],yy={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},gy={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function xy(i,e){var t,r=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var n in i.uniforms){var o=e[n];if(!o){!((t=i.uniforms[n])===null||t===void 0)&&t.group&&(i.uniforms[n].ubo?r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+n+", '"+n+`');
                    `):r.push(`
                        renderer.shader.syncUniformGroup(uv.`+n+`, syncData);
                    `));continue}for(var a=i.uniforms[n],s=!1,u=0;u<Qr.length;u++)if(Qr[u].test(o,a)){r.push(Qr[u].code(n,a)),s=!0;break}if(!s){var l=o.size===1&&!o.isArray?yy:gy,h=l[o.type].replace("location",'ud["'+n+'"].location');r.push(`
            cu = ud["`+n+`"];
            cv = cu.value;
            v = uv["`+n+`"];
            `+h+";")}}return new Function("ud","uv","renderer","syncData",r.join(`
`))}var by=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Ty(i){for(var e="",t=0;t<i;++t)t>0&&(e+=`
else `),t<i-1&&(e+="if(test == "+t+".0){}");return e}function Sy(i,e){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var r=by.replace(/%forloop%/gi,Ty(i));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))i=i/2|0;else break}return i}var vi;function Ey(){if(typeof vi=="boolean")return vi;try{var i=new Function("param1","param2","param3","return param1[param2] === param3;");vi=i({a:"b"},"a","b")===!0}catch{vi=!1}return vi}var wy=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Py=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,Cy=0,hn={},qi=function(){function i(e,t,r){r===void 0&&(r="pixi-shader"),this.id=Cy++,this.vertexSrc=e||i.defaultVertexSrc,this.fragmentSrc=t||i.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(r=r.replace(/\s+/g,"-"),hn[r]?(hn[r]++,r+="-"+hn[r]):hn[r]=1,this.vertexSrc="#define SHADER_NAME "+r+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+r+`
`+this.fragmentSrc,this.vertexSrc=Ah(this.vertexSrc,W.PRECISION_VERTEX,ae.HIGH),this.fragmentSrc=Ah(this.fragmentSrc,W.PRECISION_FRAGMENT,_y())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(i,"defaultVertexSrc",{get:function(){return Py},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentSrc",{get:function(){return wy},enumerable:!1,configurable:!0}),i.from=function(e,t,r){var n=e+t,o=xh[n];return o||(xh[n]=o=new i(e,t,r)),o},i}(),nr=function(){function i(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof Rr?this.uniformGroup=t:this.uniformGroup=new Rr(t):this.uniformGroup=new Rr({}),this.disposeRunner=new Gt("disposeShader")}return i.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var r in t.uniforms){var n=t.uniforms[r];if(n.group&&this.checkUniformExists(e,n))return!0}return!1},i.prototype.destroy=function(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()},Object.defineProperty(i.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),i.from=function(e,t,r){var n=qi.from(e,t);return new i(n,r)},i}(),Ta=0,Sa=1,Ea=2,wa=3,Pa=4,Ca=5,kr=function(){function i(){this.data=0,this.blendMode=rt.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(i.prototype,"blend",{get:function(){return!!(this.data&1<<Ta)},set:function(e){!!(this.data&1<<Ta)!==e&&(this.data^=1<<Ta)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"offsets",{get:function(){return!!(this.data&1<<Sa)},set:function(e){!!(this.data&1<<Sa)!==e&&(this.data^=1<<Sa)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"culling",{get:function(){return!!(this.data&1<<Ea)},set:function(e){!!(this.data&1<<Ea)!==e&&(this.data^=1<<Ea)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthTest",{get:function(){return!!(this.data&1<<wa)},set:function(e){!!(this.data&1<<wa)!==e&&(this.data^=1<<wa)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"depthMask",{get:function(){return!!(this.data&1<<Ca)},set:function(e){!!(this.data&1<<Ca)!==e&&(this.data^=1<<Ca)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Pa)},set:function(e){!!(this.data&1<<Pa)!==e&&(this.data^=1<<Pa)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==rt.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),i.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},i.for2d=function(){var e=new i;return e.depthTest=!1,e.blend=!0,e},i}(),Oy=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,Ay=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,st=function(i){xt(e,i);function e(t,r,n){var o=this,a=qi.from(t||e.defaultVertexSrc,r||e.defaultFragmentSrc);return o=i.call(this,a,n)||this,o.padding=0,o.resolution=W.FILTER_RESOLUTION,o.multisample=W.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new kr,o}return e.prototype.apply=function(t,r,n,o,a){t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Ay},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return Oy},enumerable:!1,configurable:!0}),e}(nr),Ry=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,Iy=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,Ih=new Lt,Ru=function(){function i(e,t){this._texture=e,this.mapCoord=new Lt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t>"u"?.5:t,this.isSimple=!1}return Object.defineProperty(i.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),i.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var r=this.mapCoord,n=0;n<e.length;n+=2){var o=e[n],a=e[n+1];t[n]=o*r.a+a*r.c+r.tx,t[n+1]=o*r.b+a*r.d+r.ty}return t},i.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var r=t._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var n=t.orig,o=t.trim;o&&(Ih.set(n.width/o.width,0,0,n.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Ih));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,l=this.clampOffset;return s[0]=(t._frame.x+u+l)/a.width,s[1]=(t._frame.y+u+l)/a.height,s[2]=(t._frame.x+t._frame.width-u+l)/a.width,s[3]=(t._frame.y+t._frame.height-u+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},i}(),My=function(i){xt(e,i);function e(t,r,n){var o=this,a=null;return typeof t!="string"&&r===void 0&&n===void 0&&(a=t,t=void 0,r=void 0,n=void 0),o=i.call(this,t||Ry,r||Iy,n)||this,o.maskSprite=a,o.maskMatrix=new Lt,o}return Object.defineProperty(e.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),e.prototype.apply=function(t,r,n,o){var a=this._maskSprite,s=a._texture;s.valid&&(s.uvMatrix||(s.uvMatrix=new Ru(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,r,n,o))},e}(st),Fy=function(){function i(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return i.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},i.prototype.push=function(e,t){var r=t;if(!r.isMaskData){var n=this.maskDataPool.pop()||new dy;n.pooled=!0,n.maskObject=t,r=n}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(r.copyCountersOrReset(o),r._colorMask=o?o._colorMask:15,r.autoDetect&&this.detect(r),r._target=e,r.type!==Ft.SPRITE&&this.maskStack.push(r),r.enabled)switch(r.type){case Ft.SCISSOR:this.renderer.scissor.push(r);break;case Ft.STENCIL:this.renderer.stencil.push(r);break;case Ft.SPRITE:r.copyCountersOrReset(null),this.pushSpriteMask(r);break;case Ft.COLOR:this.pushColorMask(r);break}r.type===Ft.SPRITE&&this.maskStack.push(r)},i.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case Ft.SCISSOR:this.renderer.scissor.pop(t);break;case Ft.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case Ft.SPRITE:this.popSpriteMask(t);break;case Ft.COLOR:this.popColorMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var r=this.maskStack[this.maskStack.length-1];r.type===Ft.SPRITE&&r._filters&&(r._filters[0].maskSprite=r.maskObject)}}},i.prototype.detect=function(e){var t=e.maskObject;t?t.isSprite?e.type=Ft.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=Ft.SCISSOR:e.type=Ft.STENCIL:e.type=Ft.COLOR},i.prototype.pushSpriteMask=function(e){var t,r,n=e.maskObject,o=e._target,a=e._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new My]));var s=this.renderer,u=s.renderTexture,l,h;if(u.current){var f=u.current;l=e.resolution||f.resolution,h=(t=e.multisample)!==null&&t!==void 0?t:f.multisample}else l=e.resolution||s.resolution,h=(r=e.multisample)!==null&&r!==void 0?r:s.multisample;a[0].resolution=l,a[0].multisample=h,a[0].maskSprite=n;var c=o.filterArea;o.filterArea=n.getBounds(!0),s.filter.push(o,a),o.filterArea=c,e._filters||this.alphaMaskIndex++},i.prototype.popSpriteMask=function(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},i.prototype.pushColorMask=function(e){var t=e._colorMask,r=e._colorMask=t&e.colorMask;r!==t&&this.renderer.gl.colorMask((r&1)!==0,(r&2)!==0,(r&4)!==0,(r&8)!==0)},i.prototype.popColorMask=function(e){var t=e._colorMask,r=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;r!==t&&this.renderer.gl.colorMask((r&1)!==0,(r&2)!==0,(r&4)!==0,(r&8)!==0)},i.prototype.destroy=function(){this.renderer=null},i}(),oc=function(){function i(e){this.renderer=e,this.maskStack=[],this.glConst=0}return i.prototype.getStackLength=function(){return this.maskStack.length},i.prototype.setMaskStack=function(e){var t=this.renderer.gl,r=this.getStackLength();this.maskStack=e;var n=this.getStackLength();n!==r&&(n===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},i.prototype._useCurrent=function(){},i.prototype.destroy=function(){this.renderer=null,this.maskStack=null},i}(),Mh=new Lt,Fh=[],Dy=function(i){xt(e,i);function e(t){var r=i.call(this,t)||this;return r.glConst=W.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,r}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.calcScissorRect=function(t){var r;if(!t._scissorRectLocal){var n=t._scissorRect,o=t.maskObject,a=this.renderer,s=a.renderTexture,u=o.getBounds(!0,(r=Fh.pop())!==null&&r!==void 0?r:new pt);this.roundFrameToPixels(u,s.current?s.current.resolution:a.resolution,s.sourceFrame,s.destinationFrame,a.projection.transform),n&&u.fit(n),t._scissorRectLocal=u}},e.isMatrixRotated=function(t){if(!t)return!1;var r=t.a,n=t.b,o=t.c,a=t.d;return(Math.abs(n)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(r)>1e-4||Math.abs(a)>1e-4)},e.prototype.testScissor=function(t){var r=t.maskObject;if(!r.isFastRect||!r.isFastRect()||e.isMatrixRotated(r.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var n=t._scissorRectLocal;return n.width>0&&n.height>0},e.prototype.roundFrameToPixels=function(t,r,n,o,a){e.isMatrixRotated(a)||(a=a?Mh.copyFrom(a):Mh.identity(),a.translate(-n.x,-n.y).scale(o.width/n.width,o.height/n.height).translate(o.x,o.y),this.renderer.filter.transformAABB(a,t),t.fit(o),t.x=Math.round(t.x*r),t.y=Math.round(t.y*r),t.width=Math.round(t.width*r),t.height=Math.round(t.height*r))},e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var r=this.renderer.gl;t._scissorRect||r.enable(r.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},e.prototype.pop=function(t){var r=this.renderer.gl;t&&Fh.push(t._scissorRectLocal),this.getStackLength()>0?this._useCurrent():r.disable(r.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,r;this.renderer.renderTexture.current?r=t.y:r=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,r,t.width,t.height)},e}(oc),Ny=function(i){xt(e,i);function e(t){var r=i.call(this,t)||this;return r.glConst=W.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,r}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var r=t.maskObject,n=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),n.clearStencil(0),n.clear(n.STENCIL_BUFFER_BIT),n.enable(n.STENCIL_TEST)),t._stencilCounter++;var a=t._colorMask;a!==0&&(t._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilFunc(n.EQUAL,o,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.INCR),r.renderable=!0,r.render(this.renderer),this.renderer.batch.flush(),r.renderable=!1,a!==0&&(t._colorMask=a,n.colorMask((a&1)!==0,(a&2)!==0,(a&4)!==0,(a&8)!==0)),this._useCurrent()},e.prototype.pop=function(t){var r=this.renderer.gl;if(this.getStackLength()===0)r.disable(r.STENCIL_TEST);else{var n=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,o=n?n._colorMask:15;o!==0&&(n._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilOp(r.KEEP,r.KEEP,r.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,o!==0&&(n._colorMask=o,r.colorMask((o&1)!==0,(o&2)!==0,(o&4)!==0,(o&8)!==0)),this._useCurrent()}},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(oc),By=function(){function i(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Lt,this.transform=null}return i.prototype.update=function(e,t,r,n){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,r,n),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},i.prototype.calculateProjection=function(e,t,r,n){var o=this.projectionMatrix,a=n?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},i.prototype.setTransform=function(e){},i.prototype.destroy=function(){this.renderer=null},i}(),vr=new pt,_i=new pt,Ly=function(){function i(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new pt,this.destinationFrame=new pt,this.viewportFrame=new pt}return i.prototype.bind=function(e,t,r){e===void 0&&(e=null);var n=this.renderer;this.current=e;var o,a,s;e?(o=e.baseTexture,s=o.resolution,t||(vr.width=e.frame.width,vr.height=e.frame.height,t=vr),r||(_i.x=e.frame.x,_i.y=e.frame.y,_i.width=t.width,_i.height=t.height,r=_i),a=o.framebuffer):(s=n.resolution,t||(vr.width=n.screen.width,vr.height=n.screen.height,t=vr),r||(r=vr,r.width=t.width,r.height=t.height));var u=this.viewportFrame;u.x=r.x*s,u.y=r.y*s,u.width=r.width*s,u.height=r.height*s,e||(u.y=n.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(r,t,s,!a),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(r)},i.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var r=this.destinationFrame,n=this.current?this.current.baseTexture:this.renderer.screen,o=r.width!==n.width||r.height!==n.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,l=a.width,h=a.height;s=Math.round(s),u=Math.round(u),l=Math.round(l),h=Math.round(h),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,l,h)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},i.prototype.resize=function(){this.bind(null)},i.prototype.reset=function(){this.bind(null)},i.prototype.destroy=function(){this.renderer=null},i}();function Uy(i,e,t,r,n){t.buffer.update(n)}var ky={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},ac={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function Gy(i){for(var e=i.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,r=0,n=0,o=0;o<e.length;o++){var a=e[o];if(t=ac[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,r%t!==0&&r<16){var s=r%t%16;r+=s,n+=s}r+t>16?(n=Math.ceil(n/16)*16,a.offset=n,n+=t,r=t):(a.offset=n,r+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}function jy(i,e){var t=[];for(var r in i)e[r]&&t.push(e[r]);return t.sort(function(n,o){return n.index-o.index}),t}function zy(i,e){if(!i.autoManage)return{size:0,syncFunc:Uy};for(var t=jy(i.uniforms,e),r=Gy(t),n=r.uboElements,o=r.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<n.length;s++){for(var u=n[s],l=i.uniforms[u.data.name],h=u.data.name,f=!1,c=0;c<Qr.length;c++){var d=Qr[c];if(d.codeUbo&&d.test(u.data,l)){a.push("offset = "+u.offset/4+";",Qr[c].codeUbo(u.data.name,l)),f=!0;break}}if(!f)if(u.data.size>1){var _=ic(u.data.type),p=Math.max(ac[u.data.type]/16,1),v=_/p,m=(4-v%4)%4;a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*p+`; i++)
                {
                    for(var j = 0; j < `+v+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+m+`;
                }

                `)}else{var x=ky[u.data.type];a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;
                `+x+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var Xy=function(){function i(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return i.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},i}();function Hy(i,e){for(var t={},r=e.getProgramParameter(i,e.ACTIVE_ATTRIBUTES),n=0;n<r;n++){var o=e.getActiveAttrib(i,n);if(o.name.indexOf("gl_")!==0){var a=nc(e,o.type),s={type:a,name:o.name,size:ic(a),location:e.getAttribLocation(i,o.name)};t[o.name]=s}}return t}function Vy(i,e){for(var t={},r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),n=0;n<r;n++){var o=e.getActiveUniform(i,n),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=nc(e,o.type);t[a]={name:a,index:n,type:u,size:o.size,isArray:s,value:ec(u,o.size)}}return t}function Wy(i,e){var t=Ch(i,i.VERTEX_SHADER,e.vertexSrc),r=Ch(i,i.FRAGMENT_SHADER,e.fragmentSrc),n=i.createProgram();if(i.attachShader(n,t),i.attachShader(n,r),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)||py(i,n,t,r),e.attributeData=Hy(n,i),e.uniformData=Vy(n,i),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(h,f){return h>f?1:-1});for(var a=0;a<o.length;a++)e.attributeData[o[a]].location=a,i.bindAttribLocation(n,a,o[a]);i.linkProgram(n)}i.deleteShader(t),i.deleteShader(r);var s={};for(var a in e.uniformData){var u=e.uniformData[a];s[a]={location:i.getUniformLocation(n,a),value:ec(u.type,u.size)}}var l=new Xy(n,s);return l}var Yy=0,fn={textureCount:0,uboCount:0},$y=function(){function i(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=Yy++}return i.prototype.systemCheck=function(){if(!Ey())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},i.prototype.contextChange=function(e){this.gl=e,this.reset()},i.prototype.bind=function(e,t){e.disposeRunner.add(this),e.uniforms.globals=this.renderer.globalUniforms;var r=e.program,n=r.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==r&&(this.program=r,this.gl.useProgram(n.program)),t||(fn.textureCount=0,fn.uboCount=0,this.syncUniformGroup(e.uniformGroup,fn)),n},i.prototype.setUniforms=function(e){var t=this.shader.program,r=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(r.uniformData,e,this.renderer)},i.prototype.syncUniformGroup=function(e,t){var r=this.getGlProgram();(!e.static||e.dirtyId!==r.uniformDirtyGroups[e.id])&&(r.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,r,t))},i.prototype.syncUniforms=function(e,t,r){var n=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);n(t.uniformData,e.uniforms,this.renderer,r)},i.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=xy(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},i.prototype.syncUniformBufferGroup=function(e,t){var r=this.getGlProgram();if(!e.static||e.dirtyId!==0||!r.uniformGroups[e.id]){e.dirtyId=0;var n=r.uniformGroups[e.id]||this.createSyncBufferGroup(e,r,t);e.buffer.update(),n(r.uniformData,e.uniforms,this.renderer,fn,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,r.uniformBufferBindings[t])},i.prototype.createSyncBufferGroup=function(e,t,r){var n=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,r);t.uniformBufferBindings[r]=this.shader.uniformBindCount,n.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(e,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=zy(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(s.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=s.syncFunc,t.uniformGroups[e.id]},i.prototype.getSignature=function(e,t,r){var n=e.uniforms,o=[r+"-"];for(var a in n)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},i.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},i.prototype.generateProgram=function(e){var t=this.gl,r=e.program,n=Wy(t,r);return r.glPrograms[this.renderer.CONTEXT_UID]=n,n},i.prototype.reset=function(){this.program=null,this.shader=null},i.prototype.disposeShader=function(e){this.shader===e&&(this.shader=null)},i.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},i}();function qy(i,e){return e===void 0&&(e=[]),e[rt.NORMAL]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.ADD]=[i.ONE,i.ONE],e[rt.MULTIPLY]=[i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.SCREEN]=[i.ONE,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.OVERLAY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.DARKEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.LIGHTEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.COLOR_DODGE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.COLOR_BURN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.HARD_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.SOFT_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.DIFFERENCE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.EXCLUSION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.HUE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.SATURATION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.COLOR]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.LUMINOSITY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.NONE]=[0,0],e[rt.NORMAL_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.ADD_NPM]=[i.SRC_ALPHA,i.ONE,i.ONE,i.ONE],e[rt.SCREEN_NPM]=[i.SRC_ALPHA,i.ONE_MINUS_SRC_COLOR,i.ONE,i.ONE_MINUS_SRC_ALPHA],e[rt.SRC_IN]=[i.DST_ALPHA,i.ZERO],e[rt.SRC_OUT]=[i.ONE_MINUS_DST_ALPHA,i.ZERO],e[rt.SRC_ATOP]=[i.DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],e[rt.DST_OVER]=[i.ONE_MINUS_DST_ALPHA,i.ONE],e[rt.DST_IN]=[i.ZERO,i.SRC_ALPHA],e[rt.DST_OUT]=[i.ZERO,i.ONE_MINUS_SRC_ALPHA],e[rt.DST_ATOP]=[i.ONE_MINUS_DST_ALPHA,i.SRC_ALPHA],e[rt.XOR]=[i.ONE_MINUS_DST_ALPHA,i.ONE_MINUS_SRC_ALPHA],e[rt.SUBTRACT]=[i.ONE,i.ONE,i.ONE,i.ONE,i.FUNC_REVERSE_SUBTRACT,i.FUNC_ADD],e}var Ky=0,Zy=1,Qy=2,Jy=3,tg=4,eg=5,rg=function(){function i(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=rt.NONE,this._blendEq=!1,this.map=[],this.map[Ky]=this.setBlend,this.map[Zy]=this.setOffset,this.map[Qy]=this.setCullFace,this.map[Jy]=this.setDepthTest,this.map[tg]=this.setFrontFace,this.map[eg]=this.setDepthMask,this.checks=[],this.defaultState=new kr,this.defaultState.blend=!0}return i.prototype.contextChange=function(e){this.gl=e,this.blendModes=qy(e),this.set(this.defaultState),this.reset()},i.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,r=0;t;)t&1&&this.map[r].call(this,!!(e.data&1<<r)),t=t>>1,r++;this.stateId=e.data}for(var r=0;r<this.checks.length;r++)this.checks[r](this,e)},i.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},i.prototype.setBlend=function(e){this.updateCheck(i.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},i.prototype.setOffset=function(e){this.updateCheck(i.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},i.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},i.prototype.setDepthMask=function(e){this.gl.depthMask(e)},i.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},i.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},i.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],r=this.gl;t.length===2?r.blendFunc(t[0],t[1]):r.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,r.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,r.blendEquationSeparate(r.FUNC_ADD,r.FUNC_ADD))}},i.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},i.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},i.prototype.updateCheck=function(e,t){var r=this.checks.indexOf(e);t&&r===-1?this.checks.push(e):!t&&r!==-1&&this.checks.splice(r,1)},i.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},i.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},i.prototype.destroy=function(){this.gl=null},i}(),ig=function(){function i(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=W.GC_MAX_IDLE,this.checkCountMax=W.GC_MAX_CHECK_COUNT,this.mode=W.GC_MODE}return i.prototype.postrender=function(){this.renderer.renderingToScreen&&(this.count++,this.mode!==Dn.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},i.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,r=!1,n=0;n<t.length;n++){var o=t[n];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[n]=null,r=!0)}if(r){for(var a=0,n=0;n<t.length;n++)t[n]!==null&&(t[a++]=t[n]);t.length=a}},i.prototype.unload=function(e){var t=this.renderer.texture,r=e._texture;r&&!r.framebuffer&&t.destroyTexture(r);for(var n=e.children.length-1;n>=0;n--)this.unload(e.children[n])},i.prototype.destroy=function(){this.renderer=null},i}();function ng(i){var e,t,r,n,o,a,s,u,l,h,f,c,d,_,p,v,m,x,T,w,y,S,g;return"WebGL2RenderingContext"in globalThis&&i instanceof globalThis.WebGL2RenderingContext?g=(e={},e[it.UNSIGNED_BYTE]=(t={},t[H.RGBA]=i.RGBA8,t[H.RGB]=i.RGB8,t[H.RG]=i.RG8,t[H.RED]=i.R8,t[H.RGBA_INTEGER]=i.RGBA8UI,t[H.RGB_INTEGER]=i.RGB8UI,t[H.RG_INTEGER]=i.RG8UI,t[H.RED_INTEGER]=i.R8UI,t[H.ALPHA]=i.ALPHA,t[H.LUMINANCE]=i.LUMINANCE,t[H.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,t),e[it.BYTE]=(r={},r[H.RGBA]=i.RGBA8_SNORM,r[H.RGB]=i.RGB8_SNORM,r[H.RG]=i.RG8_SNORM,r[H.RED]=i.R8_SNORM,r[H.RGBA_INTEGER]=i.RGBA8I,r[H.RGB_INTEGER]=i.RGB8I,r[H.RG_INTEGER]=i.RG8I,r[H.RED_INTEGER]=i.R8I,r),e[it.UNSIGNED_SHORT]=(n={},n[H.RGBA_INTEGER]=i.RGBA16UI,n[H.RGB_INTEGER]=i.RGB16UI,n[H.RG_INTEGER]=i.RG16UI,n[H.RED_INTEGER]=i.R16UI,n[H.DEPTH_COMPONENT]=i.DEPTH_COMPONENT16,n),e[it.SHORT]=(o={},o[H.RGBA_INTEGER]=i.RGBA16I,o[H.RGB_INTEGER]=i.RGB16I,o[H.RG_INTEGER]=i.RG16I,o[H.RED_INTEGER]=i.R16I,o),e[it.UNSIGNED_INT]=(a={},a[H.RGBA_INTEGER]=i.RGBA32UI,a[H.RGB_INTEGER]=i.RGB32UI,a[H.RG_INTEGER]=i.RG32UI,a[H.RED_INTEGER]=i.R32UI,a[H.DEPTH_COMPONENT]=i.DEPTH_COMPONENT24,a),e[it.INT]=(s={},s[H.RGBA_INTEGER]=i.RGBA32I,s[H.RGB_INTEGER]=i.RGB32I,s[H.RG_INTEGER]=i.RG32I,s[H.RED_INTEGER]=i.R32I,s),e[it.FLOAT]=(u={},u[H.RGBA]=i.RGBA32F,u[H.RGB]=i.RGB32F,u[H.RG]=i.RG32F,u[H.RED]=i.R32F,u[H.DEPTH_COMPONENT]=i.DEPTH_COMPONENT32F,u),e[it.HALF_FLOAT]=(l={},l[H.RGBA]=i.RGBA16F,l[H.RGB]=i.RGB16F,l[H.RG]=i.RG16F,l[H.RED]=i.R16F,l),e[it.UNSIGNED_SHORT_5_6_5]=(h={},h[H.RGB]=i.RGB565,h),e[it.UNSIGNED_SHORT_4_4_4_4]=(f={},f[H.RGBA]=i.RGBA4,f),e[it.UNSIGNED_SHORT_5_5_5_1]=(c={},c[H.RGBA]=i.RGB5_A1,c),e[it.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[H.RGBA]=i.RGB10_A2,d[H.RGBA_INTEGER]=i.RGB10_A2UI,d),e[it.UNSIGNED_INT_10F_11F_11F_REV]=(_={},_[H.RGB]=i.R11F_G11F_B10F,_),e[it.UNSIGNED_INT_5_9_9_9_REV]=(p={},p[H.RGB]=i.RGB9_E5,p),e[it.UNSIGNED_INT_24_8]=(v={},v[H.DEPTH_STENCIL]=i.DEPTH24_STENCIL8,v),e[it.FLOAT_32_UNSIGNED_INT_24_8_REV]=(m={},m[H.DEPTH_STENCIL]=i.DEPTH32F_STENCIL8,m),e):g=(x={},x[it.UNSIGNED_BYTE]=(T={},T[H.RGBA]=i.RGBA,T[H.RGB]=i.RGB,T[H.ALPHA]=i.ALPHA,T[H.LUMINANCE]=i.LUMINANCE,T[H.LUMINANCE_ALPHA]=i.LUMINANCE_ALPHA,T),x[it.UNSIGNED_SHORT_5_6_5]=(w={},w[H.RGB]=i.RGB,w),x[it.UNSIGNED_SHORT_4_4_4_4]=(y={},y[H.RGBA]=i.RGBA,y),x[it.UNSIGNED_SHORT_5_5_5_1]=(S={},S[H.RGBA]=i.RGBA,S),x),g}var Oa=function(){function i(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=it.UNSIGNED_BYTE,this.internalFormat=H.RGBA,this.samplerType=0}return i}(),og=function(){function i(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new dt,this.hasIntegerTextures=!1}return i.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=ng(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var r=0;r<t;r++)this.boundTextures[r]=null;this.emptyTextures={};var n=new Oa(e.createTexture());e.bindTexture(e.TEXTURE_2D,n.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=n,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new Oa(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var r=0;r<6;r++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var r=0;r<this.boundTextures.length;r++)this.bind(null,r)},i.prototype.bind=function(e,t){t===void 0&&(t=0);var r=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var n=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),r.bindTexture(e.target,n.texture)),n.dirtyId!==e.dirtyId?(this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),this.updateTexture(e)):n.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(e),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),r.bindTexture(r.TEXTURE_2D,this.emptyTextures[r.TEXTURE_2D].texture),this.boundTextures[t]=null},i.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},i.prototype.unbind=function(e){var t=this,r=t.gl,n=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<n.length;o++)n[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<n.length;o++)n[o]===e&&(this.currentLocation!==o&&(r.activeTexture(r.TEXTURE0+o),this.currentLocation=o),r.bindTexture(e.target,this.emptyTextures[e.target].texture),n[o]=null)},i.prototype.ensureSamplerType=function(e){var t=this,r=t.boundTextures,n=t.hasIntegerTextures,o=t.CONTEXT_UID;if(n)for(var a=e-1;a>=0;--a){var s=r[a];if(s){var u=s._glTextures[o];u.samplerType!==Fn.FLOAT&&this.renderer.texture.unbind(s)}}},i.prototype.initTexture=function(e){var t=new Oa(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},i.prototype.initTextureType=function(e,t){var r,n;t.internalFormat=(n=(r=this.internalFormats[e.type])===null||r===void 0?void 0:r[e.format])!==null&&n!==void 0?n:e.format,this.webGLVersion===2&&e.type===it.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},i.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(t){var r=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(r,e,t))t.samplerType!==Fn.FLOAT&&(this.hasIntegerTextures=!0);else{var n=e.realWidth,o=e.realHeight,a=r.gl;(t.width!==n||t.height!==o||t.dirtyId<0)&&(t.width=n,t.height=o,a.texImage2D(e.target,0,t.internalFormat,n,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},i.prototype.destroyTexture=function(e,t){var r=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),r.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var n=this.managedTextures.indexOf(e);n!==-1&&Zr(this.managedTextures,n,1)}},i.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];t&&((e.mipmap===le.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=Oe.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},i.prototype.setStyle=function(e,t){var r=this.gl;if(t.mipmap&&e.mipmap!==le.ON_MANUAL&&r.generateMipmap(e.target),r.texParameteri(e.target,r.TEXTURE_WRAP_S,t.wrapMode),r.texParameteri(e.target,r.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){r.texParameteri(e.target,r.TEXTURE_MIN_FILTER,e.scaleMode===oe.LINEAR?r.LINEAR_MIPMAP_LINEAR:r.NEAREST_MIPMAP_NEAREST);var n=this.renderer.context.extensions.anisotropicFiltering;if(n&&e.anisotropicLevel>0&&e.scaleMode===oe.LINEAR){var o=Math.min(e.anisotropicLevel,r.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));r.texParameterf(e.target,n.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else r.texParameteri(e.target,r.TEXTURE_MIN_FILTER,e.scaleMode===oe.LINEAR?r.LINEAR:r.NEAREST);r.texParameteri(e.target,r.TEXTURE_MAG_FILTER,e.scaleMode===oe.LINEAR?r.LINEAR:r.NEAREST)},i.prototype.destroy=function(){this.renderer=null},i}(),Aa=new Lt,ag=function(i){xt(e,i);function e(t,r){t===void 0&&(t=Ri.UNKNOWN);var n=i.call(this)||this;return r=Object.assign({},W.RENDER_OPTIONS,r),n.options=r,n.type=t,n.screen=new pt(0,0,r.width,r.height),n.view=r.view||W.ADAPTER.createCanvas(),n.resolution=r.resolution||W.RESOLUTION,n.useContextAlpha=r.useContextAlpha,n.autoDensity=!!r.autoDensity,n.preserveDrawingBuffer=r.preserveDrawingBuffer,n.clearBeforeRender=r.clearBeforeRender,n._backgroundColor=0,n._backgroundColorRgba=[0,0,0,1],n._backgroundColorString="#000000",n.backgroundColor=r.backgroundColor||n._backgroundColor,n.backgroundAlpha=r.backgroundAlpha,r.transparent!==void 0&&(xe("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),n.useContextAlpha=r.transparent,n.backgroundAlpha=r.transparent?0:1),n._lastObjectRendered=null,n.plugins={},n}return e.prototype.initPlugins=function(t){for(var r in t)this.plugins[r]=new t[r](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,r){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(r*this.resolution);var n=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=n,this.screen.height=o,this.autoDensity&&(this.view.style.width=n+"px",this.view.style.height=o+"px"),this.emit("resize",n,o)},e.prototype.generateTexture=function(t,r,n,o){r===void 0&&(r={}),typeof r=="number"&&(xe("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),r={scaleMode:r,resolution:n,region:o});var a=r.region,s=zm(r,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=Lr.create(is({width:o.width,height:o.height},s));return Aa.tx=-o.x,Aa.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:Aa,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var r in this.plugins)this.plugins[r].destroy(),this.plugins[r]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var n=this;n.plugins=null,n.type=Ri.UNKNOWN,n.view=null,n.screen=null,n._tempDisplayObjectParent=null,n.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=jf(t),Xt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(Wi),sg=function(){function i(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return i}(),ug=function(){function i(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return i.prototype.destroy=function(){this.renderer=null},i.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},i.prototype.bind=function(e){var t=this,r=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n]||this.createGLBuffer(e);r.bindBuffer(e.type,o.buffer)},i.prototype.bindBufferBase=function(e,t){var r=this,n=r.gl,o=r.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var a=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,n.bindBufferBase(n.UNIFORM_BUFFER,t,a.buffer)}},i.prototype.bindBufferRange=function(e,t,r){var n=this,o=n.gl,a=n.CONTEXT_UID;r=r||0;var s=e._glBuffers[a]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,r*256,256)},i.prototype.update=function(e){var t=this,r=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,r.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)r.bufferSubData(e.type,0,e.data);else{var a=e.static?r.STATIC_DRAW:r.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,r.bufferData(e.type,e.data,a)}},i.prototype.dispose=function(e,t){if(this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var r=e._glBuffers[this.CONTEXT_UID],n=this.gl;e.disposeRunner.remove(this),r&&(t||n.deleteBuffer(r.buffer),delete e._glBuffers[this.CONTEXT_UID])}},i.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),r=0;r<t.length;r++)this.dispose(this.managedBuffers[t[r]],e)},i.prototype.createGLBuffer=function(e){var t=this,r=t.CONTEXT_UID,n=t.gl;return e._glBuffers[r]=new sg(n.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[r]},i}(),sc=function(i){xt(e,i);function e(t){var r=i.call(this,Ri.WEBGL,t)||this;return t=r.options,r.gl=null,r.CONTEXT_UID=0,r.runners={destroy:new Gt("destroy"),contextChange:new Gt("contextChange"),reset:new Gt("reset"),update:new Gt("update"),postrender:new Gt("postrender"),prerender:new Gt("prerender"),resize:new Gt("resize")},r.runners.contextChange.add(r),r.globalUniforms=new Rr({projectionMatrix:new Lt},!0),r.addSystem(Fy,"mask").addSystem(uy,"context").addSystem(rg,"state").addSystem($y,"shader").addSystem(og,"texture").addSystem(ug,"buffer").addSystem(cy,"geometry").addSystem(fy,"framebuffer").addSystem(Dy,"scissor").addSystem(Ny,"stencil").addSystem(By,"projection").addSystem(ig,"textureGC").addSystem(ay,"filter").addSystem(Ly,"renderTexture").addSystem(sy,"batch"),r.initPlugins(e.__plugins),r.multisample=void 0,t.context?r.context.initFromContext(t.context):r.context.initFromOptions({alpha:!!r.useContextAlpha,antialias:t.antialias,premultipliedAlpha:r.useContextAlpha&&r.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:r.options.powerPreference}),r.renderingToScreen=!0,Gp(r.context.webGLVersion===2?"WebGL 2":"WebGL 1"),r.resize(r.options.width,r.options.height),r}return e.create=function(t){if(jp())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,r;if(this.context.webGLVersion===1){var n=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),r=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,n)}else{var n=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),r=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,n)}r>=St.HIGH?this.multisample=St.HIGH:r>=St.MEDIUM?this.multisample=St.MEDIUM:r>=St.LOW?this.multisample=St.LOW:this.multisample=St.NONE},e.prototype.addSystem=function(t,r){var n=new t(this);if(this[r])throw new Error('Whoops! The name "'+r+'" is already in use');this[r]=n;for(var o in this.runners)this.runners[o].add(n);return this},e.prototype.render=function(t,r){var n,o,a,s;if(r&&(r instanceof Lr?(xe("6.0.0","Renderer#render arguments changed, use options instead."),n=r,o=arguments[2],a=arguments[3],s=arguments[4]):(n=r.renderTexture,o=r.clear,a=r.transform,s=r.skipUpdateTransform)),this.renderingToScreen=!n,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(n||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(n),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),n&&n.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,r,n,o){r===void 0&&(r={});var a=i.prototype.generateTexture.call(this,t,r,n,o);return this.framebuffer.blit(),a},e.prototype.resize=function(t,r){i.prototype.resize.call(this,t,r),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var r in this.runners)this.runners[r].destroy();i.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return xe("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,r){xe("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),qe.add({name:t,type:mt.RendererPlugin,ref:r})},e.__plugins={},e}(ag);qe.handleByMap(mt.RendererPlugin,sc.__plugins);function lg(i){return sc.create(i)}var hg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,fg=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,cg=hg,uc=fg,os=function(){function i(){this.texArray=null,this.blend=0,this.type=ge.TRIANGLES,this.start=0,this.size=0,this.data=null}return i}(),as=function(){function i(){this.elements=[],this.ids=[],this.count=0}return i.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},i}(),ss=function(){function i(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(i.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),i.prototype.view=function(e){return this[e+"View"]},i.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},i.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},i}(),dg=function(i){xt(e,i);function e(t){var r=i.call(this,t)||this;return r.shaderGenerator=null,r.geometryClass=null,r.vertexSize=null,r.state=kr.for2d(),r.size=W.SPRITE_BATCH_SIZE*4,r._vertexCount=0,r._indexCount=0,r._bufferedElements=[],r._bufferedTextures=[],r._bufferSize=0,r._shader=null,r._packedGeometries=[],r._packedGeometryPoolSize=2,r._flushId=0,r._aBuffers={},r._iBuffers={},r.MAX_TEXTURES=1,r.renderer.on("prerender",r.onPrerender,r),t.runners.contextChange.add(r),r._dcIndex=0,r._aIndex=0,r._iIndex=0,r._attributeBuffer=null,r._indexBuffer=null,r._tempBoundTextures=[],r}return e.prototype.contextChange=function(){var t=this.renderer.gl;W.PREFER_ENV===Ve.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),W.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Sy(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var r=0;r<this._packedGeometryPoolSize;r++)this._packedGeometries[r]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,r=e._textureArrayPool,n=this.size/4,o=Math.floor(n/this.MAX_TEXTURES)+1;t.length<n;)t.push(new os);for(;r.length<o;)r.push(new as);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){t._texture.valid&&(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,r=t._bufferedTextures,n=t.MAX_TEXTURES,o=e._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,l=++dt._globalBatch,h=0,f=o[0],c=0;a.copyBoundTextures(s,n);for(var d=0;d<this._bufferSize;++d){var _=r[d];r[d]=null,_._batchEnabled!==l&&(f.count>=n&&(a.boundArray(f,s,l,n),this.buildDrawCalls(f,c,d),c=d,f=o[++h],++l),_._batchEnabled=l,_.touched=u,f.elements[f.count++]=_)}f.count>0&&(a.boundArray(f,s,l,n),this.buildDrawCalls(f,c,this._bufferSize),++h,++l);for(var d=0;d<s.length;d++)s[d]=null;dt._globalBatch=l},e.prototype.buildDrawCalls=function(t,r,n){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,l=o.vertexSize,h=e._drawCallPool,f=this._dcIndex,c=this._aIndex,d=this._iIndex,_=h[f];_.start=this._iIndex,_.texArray=t;for(var p=r;p<n;++p){var v=a[p],m=v._texture.baseTexture,x=zf[m.alphaMode?1:0][v.blendMode];a[p]=null,r<p&&_.blend!==x&&(_.size=d-_.start,r=p,_=h[++f],_.texArray=t,_.start=d),this.packInterleavedGeometry(v,s,u,c,d),c+=v.vertexData.length/2*l,d+=v.indices.length,_.blend=x}r<n&&(_.size=d-_.start,++f),this._dcIndex=f,this._aIndex=c,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var r=this.renderer.texture,n=0;n<t.count;n++)r.bind(t.elements[n],t.ids[n]),t.elements[n]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,r=t._packedGeometries,n=t._attributeBuffer,o=t._indexBuffer;W.CAN_UPLOAD_SAME_BUFFER?(r[this._flushId]._buffer.update(n.rawBinaryData),r[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,r[this._flushId]=new this.geometryClass),r[this._flushId]._buffer.update(n.rawBinaryData),r[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(r[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,r=this.renderer,n=r.gl,o=r.state,a=e._drawCallPool,s=null,u=0;u<t;u++){var l=a[u],h=l.texArray,f=l.type,c=l.size,d=l.start,_=l.blend;s!==h&&(s=h,this.bindAndClearTexArray(h)),this.state.blendMode=_,o.set(this.state),n.drawElements(f,c,n.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),W.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),i.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var r=Nn(Math.ceil(t/8)),n=yh(r),o=r*8;this._aBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new ss(o*this.vertexSize*4)),a},e.prototype.getIndexBuffer=function(t){var r=Nn(Math.ceil(t/12)),n=yh(r),o=r*12;this._iBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._iBuffers[n];return a||(this._iBuffers[n]=a=new Uint16Array(o)),a},e.prototype.packInterleavedGeometry=function(t,r,n,o,a){for(var s=r.uint32View,u=r.float32View,l=o/this.vertexSize,h=t.uvs,f=t.indices,c=t.vertexData,d=t._texture.baseTexture._batchLocation,_=Math.min(t.worldAlpha,1),p=_<1&&t._texture.baseTexture.alphaMode?Ou(t._tintRGB,_):t._tintRGB+(_*255<<24),v=0;v<c.length;v+=2)u[o++]=c[v],u[o++]=c[v+1],u[o++]=h[v],u[o++]=h[v+1],s[o++]=p,u[o++]=d;for(var v=0;v<f.length;v++)n[a++]=l+f[v]},e._drawCallPool=[],e._textureArrayPool=[],e}(to),pg=function(){function i(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return i.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),r=0;r<e;r++)t[r]=r;this.defaultGroupCache[e]=Rr.from({uSamplers:t},!0);var n=this.fragTemplate;n=n.replace(/%count%/gi,""+e),n=n.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new qi(this.vertexSrc,n)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new Lt,default:this.defaultGroupCache[e]};return new nr(this.programCache[e],o)},i.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var r=0;r<e;r++)r>0&&(t+=`
else `),r<e-1&&(t+="if(vTextureId < "+r+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+r+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},i}(),lc=function(i){xt(e,i);function e(t){t===void 0&&(t=!1);var r=i.call(this)||this;return r._buffer=new Bt(null,t,!1),r._indexBuffer=new Bt(null,t,!0),r.addAttribute("aVertexPosition",r._buffer,2,!1,it.FLOAT).addAttribute("aTextureCoord",r._buffer,2,!1,it.FLOAT).addAttribute("aColor",r._buffer,4,!0,it.UNSIGNED_BYTE).addAttribute("aTextureId",r._buffer,1,!0,it.FLOAT).addIndex(r._indexBuffer),r}return e}($i),Dh=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Nh=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,vg=function(){function i(){}return i.create=function(e){var t=Object.assign({vertex:Dh,fragment:Nh,geometryClass:lc,vertexSize:6},e),r=t.vertex,n=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){xt(u,s);function u(l){var h=s.call(this,l)||this;return h.shaderGenerator=new pg(r,n),h.geometryClass=a,h.vertexSize=o,h}return u}(dg)},Object.defineProperty(i,"defaultVertexSrc",{get:function(){return Dh},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultFragmentTemplate",{get:function(){return Nh},enumerable:!1,configurable:!0}),i}(),hc=vg.create();Object.assign(hc,{extension:{name:"batch",type:mt.RendererPlugin}});/*!
 * @pixi/accessibility - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var _g={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};Mt.mixin(_g);var mg=9,cn=100,yg=0,gg=0,Bh=2,Lh=1,xg=-1e3,bg=-1e3,Tg=2,Sg=function(){function i(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Pe.tablet||Pe.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=cn+"px",t.style.height=cn+"px",t.style.position="absolute",t.style.top=yg+"px",t.style.left=gg+"px",t.style.zIndex=Bh.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(i.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),i.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=Lh+"px",t.style.height=Lh+"px",t.style.position="absolute",t.style.top=xg+"px",t.style.left=bg+"px",t.style.zIndex=Tg.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},i.prototype.destroyTouchHook=function(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)},i.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},i.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},i.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);var t=e.children;if(t)for(var r=0;r<t.length;r++)this.updateAccessibleObjects(t[r])}},i.prototype.update=function(){var e=performance.now();if(!(Pe.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),r=t.left,n=t.top,o=t.width,a=t.height,s=this.renderer,u=s.width,l=s.height,h=s.resolution,f=o/u*h,c=a/l*h,d=this.div;d.style.left=r+"px",d.style.top=n+"px",d.style.width=u+"px",d.style.height=l+"px";for(var _=0;_<this.children.length;_++){var p=this.children[_];if(p.renderId!==this.renderId)p._accessibleActive=!1,Zr(this.children,_,1),this.div.removeChild(p._accessibleDiv),this.pool.push(p._accessibleDiv),p._accessibleDiv=null,_--;else{d=p._accessibleDiv;var v=p.hitArea,m=p.worldTransform;p.hitArea?(d.style.left=(m.tx+v.x*m.a)*f+"px",d.style.top=(m.ty+v.y*m.d)*c+"px",d.style.width=v.width*m.a*f+"px",d.style.height=v.height*m.d*c+"px"):(v=p.getBounds(),this.capHitArea(v),d.style.left=v.x*f+"px",d.style.top=v.y*c+"px",d.style.width=v.width*f+"px",d.style.height=v.height*c+"px",d.title!==p.accessibleTitle&&p.accessibleTitle!==null&&(d.title=p.accessibleTitle),d.getAttribute("aria-label")!==p.accessibleHint&&p.accessibleHint!==null&&d.setAttribute("aria-label",p.accessibleHint)),(p.accessibleTitle!==d.title||p.tabIndex!==d.tabIndex)&&(d.title=p.accessibleTitle,d.tabIndex=p.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},i.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},i.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,r=t.width,n=t.height;e.x+e.width>r&&(e.width=r-e.x),e.y+e.height>n&&(e.height=n-e.y)},i.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=cn+"px",t.style.height=cn+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=Bh.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},i.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,r=e.target.displayObject,n=t.eventData;t.dispatchEvent(r,"click",n),t.dispatchEvent(r,"pointertap",n),t.dispatchEvent(r,"tap",n)},i.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,r=e.target.displayObject,n=t.eventData;t.dispatchEvent(r,"mouseover",n)},i.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,r=e.target.displayObject,n=t.eventData;t.dispatchEvent(r,"mouseout",n)},i.prototype._onKeyDown=function(e){e.keyCode===mg&&this.activate()},i.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},i.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},i.extension={name:"accessibility",type:[mt.RendererPlugin,mt.CanvasRendererPlugin]},i}();/*!
 * @pixi/interaction - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Uh=function(){function i(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new ht,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(i.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),i.prototype.getLocalPosition=function(e,t,r){return e.worldTransform.applyInverse(r||this.global,t)},i.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},i.prototype.reset=function(){this.isPrimary=!1},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var us=function(i,e){return us=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},us(i,e)};function Eg(i,e){us(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wg=function(){function i(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return i.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},i.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},i}(),Ra=function(){function i(e){this._pointerId=e,this._flags=i.FLAGS.NONE}return i.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(i.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"none",{get:function(){return this._flags===i.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"over",{get:function(){return(this._flags&i.FLAGS.OVER)!==0},set:function(e){this._doSet(i.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rightDown",{get:function(){return(this._flags&i.FLAGS.RIGHT_DOWN)!==0},set:function(e){this._doSet(i.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leftDown",{get:function(){return(this._flags&i.FLAGS.LEFT_DOWN)!==0},set:function(e){this._doSet(i.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),i.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4}),i}(),Pg=function(){function i(){this._tempPoint=new ht}return i.prototype.recursiveFindHit=function(e,t,r,n,o){var a;if(!t||!t.visible)return!1;var s=e.data.global;o=t.interactive||o;var u=!1,l=o,h=!0;if(t.hitArea)n&&(t.worldTransform.applyInverse(s,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?u=!0:(n=!1,h=!1)),l=!1;else if(t._mask&&n){var f=t._mask.isMaskData?t._mask.maskObject:t._mask;f&&!(!((a=f.containsPoint)===null||a===void 0)&&a.call(f,s))&&(n=!1)}if(h&&t.interactiveChildren&&t.children)for(var c=t.children,d=c.length-1;d>=0;d--){var _=c[d],p=this.recursiveFindHit(e,_,r,n,l);if(p){if(!_.parent)continue;l=!1,p&&(e.target&&(n=!1),u=!0)}}return o&&(n&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(s)&&(u=!0),t.interactive&&(u&&!e.target&&(e.target=t),r&&r(e,t,!!u))),u},i.prototype.findHit=function(e,t,r,n){this.recursiveFindHit(e,t,r,n,!1)},i}(),Cg={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(i){i?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};Mt.mixin(Cg);var dn=1,pn={target:null,data:{global:null}},Og=function(i){Eg(e,i);function e(t,r){var n=i.call(this)||this;return r=r||{},n.renderer=t,n.autoPreventDefault=r.autoPreventDefault!==void 0?r.autoPreventDefault:!0,n.interactionFrequency=r.interactionFrequency||10,n.mouse=new Uh,n.mouse.identifier=dn,n.mouse.global.set(-999999),n.activeInteractionData={},n.activeInteractionData[dn]=n.mouse,n.interactionDataPool=[],n.eventData=new wg,n.interactionDOMElement=null,n.moveWhenInside=!1,n.eventsAdded=!1,n.tickerAdded=!1,n.mouseOverRenderer=!("PointerEvent"in globalThis),n.supportsTouchEvents="ontouchstart"in globalThis,n.supportsPointerEvents=!!globalThis.PointerEvent,n.onPointerUp=n.onPointerUp.bind(n),n.processPointerUp=n.processPointerUp.bind(n),n.onPointerCancel=n.onPointerCancel.bind(n),n.processPointerCancel=n.processPointerCancel.bind(n),n.onPointerDown=n.onPointerDown.bind(n),n.processPointerDown=n.processPointerDown.bind(n),n.onPointerMove=n.onPointerMove.bind(n),n.processPointerMove=n.processPointerMove.bind(n),n.onPointerOut=n.onPointerOut.bind(n),n.processPointerOverOut=n.processPointerOverOut.bind(n),n.onPointerOver=n.onPointerOver.bind(n),n.cursorStyles={default:"inherit",pointer:"pointer"},n.currentCursorMode=null,n.cursor=null,n.resolution=1,n.delayedEvents=[],n.search=new Pg,n._tempDisplayObject=new $f,n._eventListenerOptions={capture:!0,passive:!1},n._useSystemTicker=r.useSystemTicker!==void 0?r.useSystemTicker:!0,n.setTargetElement(n.renderer.view,n.renderer.resolution),n}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,r){return pn.target=null,pn.data.global=t,r||(r=this.lastObjectRendered),this.processInteractive(pn,r,null,!0),pn.target},e.prototype.setTargetElement=function(t,r){r===void 0&&(r=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=r,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(jt.system.add(this.tickerUpdate,this,We.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){this.tickerAdded&&(jt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var r=this.activeInteractionData[t];if(r.originalEvent&&r.pointerType!=="touch"){var n=this.configureInteractionEventForDOMEvent(this.eventData,r.originalEvent,r);this.processInteractive(n,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var r=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(r=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var n=this.cursorStyles[t];if(n)switch(typeof n){case"string":r&&(this.interactionDOMElement.style.cursor=n);break;case"function":n(t);break;case"object":r&&Object.assign(this.interactionDOMElement.style,n);break}else r&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,r,n){(!n.stopPropagationHint||t===n.stopsPropagatingAt)&&(n.currentTarget=t,n.type=r,t.emit(r,n),t[r]&&t[r](n))},e.prototype.delayDispatchEvent=function(t,r,n){this.delayedEvents.push({displayObject:t,eventString:r,eventData:n})},e.prototype.mapPositionToPoint=function(t,r,n){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;t.x=(r-o.left)*(this.interactionDOMElement.width/o.width)*a,t.y=(n-o.top)*(this.interactionDOMElement.height/o.height)*a},e.prototype.processInteractive=function(t,r,n,o){var a=this.search.findHit(t,r,n,o),s=this.delayedEvents;if(!s.length)return a;t.stopPropagationHint=!1;var u=s.length;this.delayedEvents=[];for(var l=0;l<u;l++){var h=s[l],f=h.displayObject,c=h.eventString,d=h.eventData;d.stopsPropagatingAt===f&&(d.stopPropagationHint=!0),this.dispatchEvent(f,c,d)}return a},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var r=this.normalizeToPointerData(t);if(this.autoPreventDefault&&r[0].isNormalized){var n=t.cancelable||!("cancelable"in t);n&&t.preventDefault()}for(var o=r.length,a=0;a<o;a++){var s=r[a],u=this.getInteractionDataForPointerId(s),l=this.configureInteractionEventForDOMEvent(this.eventData,s,u);if(l.data.originalEvent=t,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),s.pointerType==="touch")this.emit("touchstart",l);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var h=s.button===2;this.emit(h?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,r,n){var o=t.data,a=t.data.identifier;if(n){if(r.trackedPointers[a]||(r.trackedPointers[a]=new Ra(a)),this.dispatchEvent(r,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(r,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var s=o.button===2;s?r.trackedPointers[a].rightDown=!0:r.trackedPointers[a].leftDown=!0,this.dispatchEvent(r,s?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,r,n){var o=this.normalizeToPointerData(t),a=o.length,s=t.target;t.composedPath&&t.composedPath().length>0&&(s=t.composedPath()[0]);for(var u=s!==this.interactionDOMElement?"outside":"",l=0;l<a;l++){var h=o[l],f=this.getInteractionDataForPointerId(h),c=this.configureInteractionEventForDOMEvent(this.eventData,h,f);if(c.data.originalEvent=t,this.processInteractive(c,this.lastObjectRendered,n,r||!u),this.emit(r?"pointercancel":"pointerup"+u,c),h.pointerType==="mouse"||h.pointerType==="pen"){var d=h.button===2;this.emit(d?"rightup"+u:"mouseup"+u,c)}else h.pointerType==="touch"&&(this.emit(r?"touchcancel":"touchend"+u,c),this.releaseInteractionDataForPointerId(h.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,r){var n=t.data,o=t.data.identifier;r.trackedPointers[o]!==void 0&&(delete r.trackedPointers[o],this.dispatchEvent(r,"pointercancel",t),n.pointerType==="touch"&&this.dispatchEvent(r,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,r,n){var o=t.data,a=t.data.identifier,s=r.trackedPointers[a],u=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen",h=!1;if(l){var f=o.button===2,c=Ra.FLAGS,d=f?c.RIGHT_DOWN:c.LEFT_DOWN,_=s!==void 0&&s.flags&d;n?(this.dispatchEvent(r,f?"rightup":"mouseup",t),_&&(this.dispatchEvent(r,f?"rightclick":"click",t),h=!0)):_&&this.dispatchEvent(r,f?"rightupoutside":"mouseupoutside",t),s&&(f?s.rightDown=!1:s.leftDown=!1)}n?(this.dispatchEvent(r,"pointerup",t),u&&this.dispatchEvent(r,"touchend",t),s&&((!l||h)&&this.dispatchEvent(r,"pointertap",t),u&&(this.dispatchEvent(r,"tap",t),s.over=!1))):s&&(this.dispatchEvent(r,"pointerupoutside",t),u&&this.dispatchEvent(r,"touchendoutside",t)),s&&s.none&&delete r.trackedPointers[a]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var r=this.normalizeToPointerData(t);(r[0].pointerType==="mouse"||r[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var n=r.length,o=0;o<n;o++){var a=r[o],s=this.getInteractionDataForPointerId(a),u=this.configureInteractionEventForDOMEvent(this.eventData,a,s);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),a.pointerType==="touch"&&this.emit("touchmove",u),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",u)}r[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,r,n){var o=t.data,a=o.pointerType==="touch",s=o.pointerType==="mouse"||o.pointerType==="pen";s&&this.processPointerOverOut(t,r,n),(!this.moveWhenInside||n)&&(this.dispatchEvent(r,"pointermove",t),a&&this.dispatchEvent(r,"touchmove",t),s&&this.dispatchEvent(r,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var r=this.normalizeToPointerData(t),n=r[0];n.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),n.pointerType==="mouse"||n.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,r,n){var o=t.data,a=t.data.identifier,s=o.pointerType==="mouse"||o.pointerType==="pen",u=r.trackedPointers[a];n&&!u&&(u=r.trackedPointers[a]=new Ra(a)),u!==void 0&&(n&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(r,"pointerover",t),s&&this.delayDispatchEvent(r,"mouseover",t)),s&&this.cursor===null&&(this.cursor=r.cursor)):u.over&&(u.over=!1,this.dispatchEvent(r,"pointerout",this.eventData),s&&this.dispatchEvent(r,"mouseout",t),u.none&&delete r.trackedPointers[a]))},e.prototype.onPointerOver=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var r=this.normalizeToPointerData(t),n=r[0],o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,n.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(n.pointerType==="mouse"||n.pointerType==="pen")&&this.emit("mouseover",a)}},e.prototype.getInteractionDataForPointerId=function(t){var r=t.pointerId,n;return r===dn||t.pointerType==="mouse"?n=this.mouse:this.activeInteractionData[r]?n=this.activeInteractionData[r]:(n=this.interactionDataPool.pop()||new Uh,n.identifier=r,this.activeInteractionData[r]=n),n.copyEvent(t),n},e.prototype.releaseInteractionDataForPointerId=function(t){var r=this.activeInteractionData[t];r&&(delete this.activeInteractionData[t],r.reset(),this.interactionDataPool.push(r))},e.prototype.configureInteractionEventForDOMEvent=function(t,r,n){return t.data=n,this.mapPositionToPoint(n.global,r.clientX,r.clientY),r.pointerType==="touch"&&(r.globalX=n.global.x,r.globalY=n.global.y),n.originalEvent=r,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var r=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var n=0,o=t.changedTouches.length;n<o;n++){var a=t.changedTouches[n];typeof a.button>"u"&&(a.button=t.touches.length?1:0),typeof a.buttons>"u"&&(a.buttons=t.touches.length?1:0),typeof a.isPrimary>"u"&&(a.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof a.width>"u"&&(a.width=a.radiusX||1),typeof a.height>"u"&&(a.height=a.radiusY||1),typeof a.tiltX>"u"&&(a.tiltX=0),typeof a.tiltY>"u"&&(a.tiltY=0),typeof a.pointerType>"u"&&(a.pointerType="touch"),typeof a.pointerId>"u"&&(a.pointerId=a.identifier||0),typeof a.pressure>"u"&&(a.pressure=a.force||.5),typeof a.twist>"u"&&(a.twist=0),typeof a.tangentialPressure>"u"&&(a.tangentialPressure=0),typeof a.layerX>"u"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY>"u"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,r.push(a)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){var s=t;typeof s.isPrimary>"u"&&(s.isPrimary=!0),typeof s.width>"u"&&(s.width=1),typeof s.height>"u"&&(s.height=1),typeof s.tiltX>"u"&&(s.tiltX=0),typeof s.tiltY>"u"&&(s.tiltY=0),typeof s.pointerType>"u"&&(s.pointerType="mouse"),typeof s.pointerId>"u"&&(s.pointerId=dn),typeof s.pressure>"u"&&(s.pressure=.5),typeof s.twist>"u"&&(s.twist=0),typeof s.tangentialPressure>"u"&&(s.tangentialPressure=0),s.isNormalized=!0,r.push(s)}else r.push(t);return r},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e.extension={name:"interaction",type:[mt.RendererPlugin,mt.CanvasRendererPlugin]},e}(Wi);/*!
 * @pixi/extract - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ag=new pt,Rg=4,Ig=function(){function i(e){this.renderer=e}return i.prototype.image=function(e,t,r){var n=new Image;return n.src=this.base64(e,t,r),n},i.prototype.base64=function(e,t,r){return this.canvas(e).toDataURL(t,r)},i.prototype.canvas=function(e,t){var r=this._rawPixels(e,t),n=r.pixels,o=r.width,a=r.height,s=r.flipY,u=new bh(o,a,1),l=u.context.getImageData(0,0,o,a);if(i.arrayPostDivide(n,l.data),u.context.putImageData(l,0,0),s){var h=new bh(u.width,u.height,1);h.context.scale(1,-1),h.context.drawImage(u.canvas,0,-a),u.destroy(),u=h}return u.canvas},i.prototype.pixels=function(e,t){var r=this._rawPixels(e,t).pixels;return i.arrayPostDivide(r,r),r},i.prototype._rawPixels=function(e,t){var r=this.renderer,n,o=!1,a,s=!1;if(e)if(e instanceof Lr)a=e;else{var u=r.context.webGLVersion>=2?r.multisample:St.NONE;if(a=this.renderer.generateTexture(e,{multisample:u}),u!==St.NONE){var l=Lr.create({width:a.width,height:a.height});r.framebuffer.bind(a.framebuffer),r.framebuffer.blit(l.framebuffer),r.framebuffer.bind(null),a.destroy(!0),a=l}s=!0}a?(n=a.baseTexture.resolution,t=t??a.frame,o=!1,r.renderTexture.bind(a)):(n=r.resolution,t||(t=Ag,t.width=r.width,t.height=r.height),o=!0,r.renderTexture.bind(null));var h=Math.round(t.width*n),f=Math.round(t.height*n),c=new Uint8Array(Rg*h*f),d=r.gl;return d.readPixels(Math.round(t.x*n),Math.round(t.y*n),h,f,d.RGBA,d.UNSIGNED_BYTE,c),s&&a.destroy(!0),{pixels:c,width:h,height:f,flipY:o}},i.prototype.destroy=function(){this.renderer=null},i.arrayPostDivide=function(e,t){for(var r=0;r<e.length;r+=4){var n=t[r+3]=e[r+3];n!==0?(t[r]=Math.round(Math.min(e[r]*255/n,255)),t[r+1]=Math.round(Math.min(e[r+1]*255/n,255)),t[r+2]=Math.round(Math.min(e[r+2]*255/n,255))):(t[r]=e[r],t[r+1]=e[r+1],t[r+2]=e[r+2])}},i.extension={name:"extract",type:mt.RendererPlugin},i}();/*!
 * @pixi/loaders - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var vn=function(){function i(e,t,r){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=r,this._next=this._prev=this._owner=null}return i.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},i}();function kh(i,e){return i._head?(i._tail._next=e,e._prev=i._tail,i._tail=e):(i._head=e,i._tail=e),e._owner=i,e}var ze=function(){function i(){this._head=this._tail=void 0}return i.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var r=[];t;)r.push(t),t=t._next;return r},i.prototype.has=function(e){if(!(e instanceof vn))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},i.prototype.dispatch=function(){for(var e=arguments,t=[],r=0;r<arguments.length;r++)t[r]=e[r];var n=this._head;if(!n)return!1;for(;n;)n._once&&this.detach(n),n._fn.apply(n._thisArg,t),n=n._next;return!0},i.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return kh(this,new vn(e,!1,t))},i.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return kh(this,new vn(e,!0,t))},i.prototype.detach=function(e){if(!(e instanceof vn))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},i.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},i}();function fc(i,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r=t.parser[e.strictMode?"strict":"loose"].exec(i),n={},o=14;o--;)n[t.key[o]]=r[o]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(a,s,u){s&&(n[t.q.name][s]=u)}),n}var Ia,_n=null,Mg=0,Gh=200,Fg=204,Dg=1223,Ng=2;function jh(){}function zh(i,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),e&&(i[e]=t)}function Ma(i){return i.toString().replace("object ","")}var At=function(){function i(e,t,r){if(this._dequeue=jh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");r=r||{},this._flags=0,this._setFlag(i.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=r.crossOrigin===!0?"anonymous":r.crossOrigin,this.timeout=r.timeout||0,this.loadType=r.loadType||this._determineLoadType(),this.xhrType=r.xhrType,this.metadata=r.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=i.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=jh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new ze,this.onProgress=new ze,this.onComplete=new ze,this.onAfterMiddleware=new ze}return i.setExtensionLoadType=function(e,t){zh(i._loadTypeMap,e,t)},i.setExtensionXhrType=function(e,t){zh(i._xhrTypeMap,e,t)},Object.defineProperty(i.prototype,"isDataUrl",{get:function(){return this._hasFlag(i.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isComplete",{get:function(){return this._hasFlag(i.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isLoading",{get:function(){return this._hasFlag(i.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),i.prototype.complete=function(){this._clearEvents(),this._finish()},i.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=i.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},i.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(i.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case i.LOAD_TYPE.IMAGE:this.type=i.TYPE.IMAGE,this._loadElement("image");break;case i.LOAD_TYPE.AUDIO:this.type=i.TYPE.AUDIO,this._loadSourceElement("audio");break;case i.LOAD_TYPE.VIDEO:this.type=i.TYPE.VIDEO,this._loadSourceElement("video");break;case i.LOAD_TYPE.XHR:default:typeof Ia>"u"&&(Ia=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),Ia&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},i.prototype._hasFlag=function(e){return(this._flags&e)!==0},i.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},i.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},i.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(i.STATUS_FLAGS.COMPLETE,!0),this._setFlag(i.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},i.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof globalThis.Image<"u"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof globalThis.Audio<"u"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,r=0;r<this.url.length;++r)this.data.appendChild(this._createSource(e,this.url[r],Array.isArray(t)?t[r]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},i.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(e.withCredentials=!0),e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===i.XHR_RESPONSE_TYPE.JSON||this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=i.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},i.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new globalThis.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},i.prototype._createSource=function(e,t,r){r||(r=e+"/"+this._getExtension(t));var n=document.createElement("source");return n.src=t,n.type=r,n},i.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},i.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},i.prototype._onTimeout=function(){this.abort("Load timed out.")},i.prototype._xhrOnError=function(){var e=this.xhr;this.abort(Ma(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},i.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(Ma(e)+" Request timed out.")},i.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(Ma(e)+" Request was aborted by the user.")},i.prototype._xhrOnLoad=function(){var e=this.xhr,t="",r=typeof e.status>"u"?Gh:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType>"u")&&(t=e.responseText),r===Mg&&(t.length>0||e.responseType===i.XHR_RESPONSE_TYPE.BUFFER)?r=Gh:r===Dg&&(r=Fg);var n=r/100|0;if(n===Ng)if(this.xhrType===i.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=i.TYPE.TEXT;else if(this.xhrType===i.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=i.TYPE.JSON}catch(s){this.abort("Error trying to parse loaded json: "+s);return}else if(this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var a=document.createElement("div");a.innerHTML=t,this.data=a}this.type=i.TYPE.XML}catch(s){this.abort("Error trying to parse loaded xml: "+s);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},i.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";t=t||globalThis.location,_n||(_n=document.createElement("a")),_n.href=e;var r=fc(_n.href,{strictMode:!0}),n=!r.port&&t.port===""||r.port===t.port,o=r.protocol?r.protocol+":":"";return r.host!==t.hostname||!n||o!==t.protocol?"anonymous":""},i.prototype._determineXhrType=function(){return i._xhrTypeMap[this.extension]||i.XHR_RESPONSE_TYPE.TEXT},i.prototype._determineLoadType=function(){return i._loadTypeMap[this.extension]||i.LOAD_TYPE.XHR},i.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var r=e.indexOf("/");t=e.substring(r+1,e.indexOf(";",r))}else{var n=e.indexOf("?"),o=e.indexOf("#"),a=Math.min(n>-1?n:e.length,o>-1?o:e.length);e=e.substring(0,a),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},i.prototype._getMimeFromXhrType=function(e){switch(e){case i.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case i.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case i.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case i.XHR_RESPONSE_TYPE.JSON:return"application/json";case i.XHR_RESPONSE_TYPE.DEFAULT:case i.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},i}();(function(i){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(i.STATUS_FLAGS||(i.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(i.TYPE||(i.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(i.LOAD_TYPE||(i.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(i.XHR_RESPONSE_TYPE||(i.XHR_RESPONSE_TYPE={})),i._loadTypeMap={gif:i.LOAD_TYPE.IMAGE,png:i.LOAD_TYPE.IMAGE,bmp:i.LOAD_TYPE.IMAGE,jpg:i.LOAD_TYPE.IMAGE,jpeg:i.LOAD_TYPE.IMAGE,tif:i.LOAD_TYPE.IMAGE,tiff:i.LOAD_TYPE.IMAGE,webp:i.LOAD_TYPE.IMAGE,tga:i.LOAD_TYPE.IMAGE,avif:i.LOAD_TYPE.IMAGE,svg:i.LOAD_TYPE.IMAGE,"svg+xml":i.LOAD_TYPE.IMAGE,mp3:i.LOAD_TYPE.AUDIO,ogg:i.LOAD_TYPE.AUDIO,wav:i.LOAD_TYPE.AUDIO,mp4:i.LOAD_TYPE.VIDEO,webm:i.LOAD_TYPE.VIDEO},i._xhrTypeMap={xhtml:i.XHR_RESPONSE_TYPE.DOCUMENT,html:i.XHR_RESPONSE_TYPE.DOCUMENT,htm:i.XHR_RESPONSE_TYPE.DOCUMENT,xml:i.XHR_RESPONSE_TYPE.DOCUMENT,tmx:i.XHR_RESPONSE_TYPE.DOCUMENT,svg:i.XHR_RESPONSE_TYPE.DOCUMENT,tsx:i.XHR_RESPONSE_TYPE.DOCUMENT,gif:i.XHR_RESPONSE_TYPE.BLOB,png:i.XHR_RESPONSE_TYPE.BLOB,bmp:i.XHR_RESPONSE_TYPE.BLOB,jpg:i.XHR_RESPONSE_TYPE.BLOB,jpeg:i.XHR_RESPONSE_TYPE.BLOB,tif:i.XHR_RESPONSE_TYPE.BLOB,tiff:i.XHR_RESPONSE_TYPE.BLOB,webp:i.XHR_RESPONSE_TYPE.BLOB,tga:i.XHR_RESPONSE_TYPE.BLOB,avif:i.XHR_RESPONSE_TYPE.BLOB,json:i.XHR_RESPONSE_TYPE.JSON,text:i.XHR_RESPONSE_TYPE.TEXT,txt:i.XHR_RESPONSE_TYPE.TEXT,ttf:i.XHR_RESPONSE_TYPE.BUFFER,otf:i.XHR_RESPONSE_TYPE.BUFFER},i.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(At||(At={}));function _r(){}function Bg(i){return function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];if(i===null)throw new Error("Callback was already called.");var o=i;i=null,o.apply(this,r)}}var Lg=function(){function i(e,t){this.data=e,this.callback=t}return i}(),Fa=function(){function i(e,t){var r=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=_r,this.unsaturated=_r,this.empty=_r,this.drain=_r,this.error=_r,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(n,o,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(r.started=!0,n==null&&r.idle()){setTimeout(function(){return r.drain()},1);return}var s=new Lg(n,typeof a=="function"?a:_r);o?r._tasks.unshift(s):r._tasks.push(s),setTimeout(r.process,1)},this.process=function(){for(;!r.paused&&r.workers<r.concurrency&&r._tasks.length;){var n=r._tasks.shift();r._tasks.length===0&&r.empty(),r.workers+=1,r.workers===r.concurrency&&r.saturated(),r._worker(n.data,Bg(r._next(n)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return i.prototype._next=function(e){var t=this;return function(){for(var r=arguments,n=[],o=0;o<arguments.length;o++)n[o]=r[o];t.workers-=1,e.callback.apply(e,n),n[0]!=null&&t.error(n[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},i.prototype.push=function(e,t){this._insert(e,!1,t)},i.prototype.kill=function(){this.workers=0,this.drain=_r,this.started=!1,this._tasks=[]},i.prototype.unshift=function(e,t){this._insert(e,!0,t)},i.prototype.length=function(){return this._tasks.length},i.prototype.running=function(){return this.workers},i.prototype.idle=function(){return this._tasks.length+this.workers===0},i.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},i.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},i.eachSeries=function(e,t,r,n){var o=0,a=e.length;function s(u){if(u||o===a){r&&r(u);return}n?setTimeout(function(){t(e[o++],s)},1):t(e[o++],s)}s()},i.queue=function(e,t){return new i(e,t)},i}(),Da=100,Ug=/(#[\w-]+)?$/,Mi=function(){function i(e,t){var r=this;e===void 0&&(e=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return r._loadResource(u,l)},this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return r._loadResource(u,l)},this._queue=Fa.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new ze,this.onError=new ze,this.onLoad=new ze,this.onStart=new ze,this.onComplete=new ze;for(var n=0;n<i._plugins.length;++n){var o=i._plugins[n],a=o.pre,s=o.use;a&&this.pre(a),s&&this.use(s)}this._protected=!1}return i.prototype._add=function(e,t,r,n){if(this.loading&&(!r||!r.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new At(e,t,r),typeof n=="function"&&this.resources[e].onAfterMiddleware.once(n),this.loading){for(var o=r.parentResource,a=[],s=0;s<o.children.length;++s)o.children[s].isComplete||a.push(o.children[s]);var u=o.progressChunk*(a.length+1),l=u/(a.length+2);o.children.push(this.resources[e]),o.progressChunk=l;for(var s=0;s<a.length;++s)a[s].progressChunk=l;this.resources[e].progressChunk=l}return this._queue.push(this.resources[e]),this},i.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},i.prototype.use=function(e){return this._afterMiddleware.push(e),this},i.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},i.prototype.load=function(e){if(xe("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,r=Da/t,n=0;n<this._queue._tasks.length;++n)this._queue._tasks[n].data.progressChunk=r;this._onStart(),this._queue.resume()}return this},Object.defineProperty(i.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),i.prototype._prepareUrl=function(e){var t=fc(e,{strictMode:!0}),r;if(t.protocol||!t.path||e.indexOf("//")===0?r=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?r=this.baseUrl+"/"+e:r=this.baseUrl+e,this.defaultQueryString){var n=Ug.exec(r)[0];r=r.slice(0,r.length-n.length),r.indexOf("?")!==-1?r+="&"+this.defaultQueryString:r+="?"+this.defaultQueryString,r+=n}return r},i.prototype._loadResource=function(e,t){var r=this;e._dequeue=t,Fa.eachSeries(this._beforeMiddleware,function(n,o){n.call(r,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?r._onLoad(e):(e._onLoadBinding=e.onComplete.once(r._onLoad,r),e.load())},!0)},i.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},i.prototype._onComplete=function(){this.progress=Da,this.loading=!1,this.onComplete.dispatch(this,this.resources)},i.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),Fa.eachSeries(this._afterMiddleware,function(r,n){r.call(t,e,n)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(Da,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},i.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(i,"shared",{get:function(){var e=i._shared;return e||(e=new i,e._protected=!0,i._shared=e),e},enumerable:!1,configurable:!0}),i.registerPlugin=function(e){return xe("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),qe.add({type:mt.Loader,ref:e}),i},i._plugins=[],i}();qe.handleByList(mt.Loader,Mi._plugins);Mi.prototype.add=function(e,t,r,n){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(r=e,n=t||r.callback||r.onComplete,t=r.url,e=r.name||r.key||r.url),typeof t!="string"&&(n=r,r=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof r=="function"&&(n=r,r=null),this._add(e,t,r,n)};var kg=function(){function i(){}return i.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?Mi.shared:new Mi},i.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},i.extension=mt.Application,i}(),Gg=function(){function i(){}return i.add=function(){At.setExtensionLoadType("svg",At.LOAD_TYPE.XHR),At.setExtensionXhrType("svg",At.XHR_RESPONSE_TYPE.TEXT)},i.use=function(e,t){if(e.data&&(e.type===At.TYPE.IMAGE||e.extension==="svg")){var r=e.data,n=e.url,o=e.name,a=e.metadata;at.fromLoader(r,n,o,a).then(function(s){e.texture=s,t()}).catch(t)}else t()},i.extension=mt.Loader,i}(),jg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function zg(i){for(var e="",t=0;t<i.length;){for(var r=[0,0,0],n=[0,0,0,0],o=0;o<r.length;++o)t<i.length?r[o]=i.charCodeAt(t++)&255:r[o]=0;n[0]=r[0]>>2,n[1]=(r[0]&3)<<4|r[1]>>4,n[2]=(r[1]&15)<<2|r[2]>>6,n[3]=r[2]&63;var a=t-(i.length-1);switch(a){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64;break}for(var o=0;o<n.length;++o)e+=jg.charAt(n[o])}return e}function Xg(i,e){if(!i.data){e();return}if(i.xhr&&i.xhrType===At.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof i.data=="string"){var t=i.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){i.data=new Image,i.data.src="data:"+t+";base64,"+zg(i.xhr.responseText),i.type=At.TYPE.IMAGE,i.data.onload=function(){i.data.onload=null,e()};return}}else if(i.data.type.indexOf("image")===0){var r=globalThis.URL||globalThis.webkitURL,n=r.createObjectURL(i.data);i.blob=i.data,i.data=new Image,i.data.src=n,i.type=At.TYPE.IMAGE,i.data.onload=function(){r.revokeObjectURL(n),i.data.onload=null,e()};return}}e()}var Hg=function(){function i(){}return i.extension=mt.Loader,i.use=Xg,i}();qe.add(Gg,Hg);/*!
 * @pixi/compressed-textures - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var _t,ut;(function(i){i[i.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",i[i.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",i[i.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",i[i.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",i[i.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",i[i.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",i[i.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",i[i.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",i[i.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR"})(ut||(ut={}));var kn=(_t={},_t[ut.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,_t[ut.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,_t[ut.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,_t[ut.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,_t[ut.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,_t[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,_t[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,_t[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,_t[ut.COMPRESSED_R11_EAC]=.5,_t[ut.COMPRESSED_SIGNED_R11_EAC]=.5,_t[ut.COMPRESSED_RG11_EAC]=1,_t[ut.COMPRESSED_SIGNED_RG11_EAC]=1,_t[ut.COMPRESSED_RGB8_ETC2]=.5,_t[ut.COMPRESSED_RGBA8_ETC2_EAC]=1,_t[ut.COMPRESSED_SRGB8_ETC2]=.5,_t[ut.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,_t[ut.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,_t[ut.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,_t[ut.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,_t[ut.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,_t[ut.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,_t[ut.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,_t[ut.COMPRESSED_RGB_ETC1_WEBGL]=.5,_t[ut.COMPRESSED_RGB_ATC_WEBGL]=.5,_t[ut.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,_t[ut.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,_t[ut.COMPRESSED_RGBA_ASTC_4x4_KHR]=1,_t);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ls=function(i,e){return ls=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ls(i,e)};function cc(i,e){ls(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Vg(i,e,t,r){function n(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(h){try{l(r.next(h))}catch(f){a(f)}}function u(h){try{l(r.throw(h))}catch(f){a(f)}}function l(h){h.done?o(h.value):n(h.value).then(s,u)}l((r=r.apply(i,[])).next())})}function Wg(i,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(h){return u([l,h])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(i,t)}catch(h){l=[6,h],n=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Yg=function(i){cc(e,i);function e(t,r){r===void 0&&(r={width:1,height:1,autoLoad:!0});var n=this,o,a;return typeof t=="string"?(o=t,a=new Uint8Array):(o=null,a=t),n=i.call(this,a,r)||this,n.origin=o,n.buffer=a?new ss(a):null,n.origin&&r.autoLoad!==!1&&n.load(),a&&a.length&&(n.loaded=!0,n.onBlobLoaded(n.buffer.rawBinaryData)),n}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return Vg(this,void 0,Promise,function(){var t,r,n;return Wg(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return r=o.sent(),[4,r.arrayBuffer()];case 3:return n=o.sent(),this.data=new Uint32Array(n),this.buffer=new ss(n),this.loaded=!0,this.onBlobLoaded(n),this.update(),[2,this]}})})},e}(Yi),hs=function(i){cc(e,i);function e(t,r){var n=i.call(this,t,r)||this;return n.format=r.format,n.levels=r.levels||1,n._width=r.width,n._height=r.height,n._extension=e._formatToExtension(n.format),(r.levelBuffers||n.buffer)&&(n._levelBuffers=r.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:n.buffer.uint8View,n.format,n.levels,4,4,n.width,n.height)),n}return e.prototype.upload=function(t,r,n){var o=t.gl,a=t.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var s=0,u=this.levels;s<u;s++){var l=this._levelBuffers[s],h=l.levelID,f=l.levelWidth,c=l.levelHeight,d=l.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,h,this.format,f,c,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,r,n,o,a,s,u){for(var l=new Array(n),h=t.byteOffset,f=s,c=u,d=f+o-1&~(o-1),_=c+a-1&~(a-1),p=d*_*kn[r],v=0;v<n;v++)l[v]={levelID:v,levelWidth:n>1?f:d,levelHeight:n>1?c:_,levelBuffer:new Uint8Array(t.buffer,h,p)},h+=p,f=f>>1||1,c=c>>1||1,d=f+o-1&~(o-1),_=c+a-1&~(a-1),p=d*_*kn[r];return l},e}(Yg),$g=function(){function i(){}return i.use=function(e,t){var r=e.data,n=this;if(e.type===At.TYPE.JSON&&r&&r.cacheID&&r.textures){for(var o=r.textures,a=void 0,s=void 0,u=0,l=o.length;u<l;u++){var h=o[u],f=h.src,c=h.format;if(c||(s=f),i.textureFormats[c]){a=f;break}}if(a=a||s,!a){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(a===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},_=Yr.resolve(e.url.replace(n.baseUrl,""),a),p=r.cacheID;n.add(p,_,d,function(v){if(v.error){t(v.error);return}var m=v.texture,x=m===void 0?null:m,T=v.textures,w=T===void 0?{}:T;Object.assign(e,{texture:x,textures:w}),t()})}else t()},Object.defineProperty(i,"textureExtensions",{get:function(){if(!i._textureExtensions){var e=W.ADAPTER.createCanvas(),t=e.getContext("webgl");if(!t)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var r={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};i._textureExtensions=r}return i._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(i,"textureFormats",{get:function(){if(!i._textureFormats){var e=i.textureExtensions;i._textureFormats={};for(var t in e){var r=e[t];r&&Object.assign(i._textureFormats,Object.getPrototypeOf(r))}}return i._textureFormats},enumerable:!1,configurable:!0}),i.extension=mt.Loader,i}();function dc(i,e,t){var r={textures:{},texture:null};if(!e)return r;var n=e.map(function(o){return new at(new dt(o,Object.assign({mipmap:le.OFF,alphaMode:be.NO_PREMULTIPLIED_ALPHA},t)))});return n.forEach(function(o,a){var s=o.baseTexture,u=i+"-"+(a+1);dt.addToCache(s,u),at.addToCache(o,u),a===0&&(dt.addToCache(s,i),at.addToCache(o,i),r.texture=o),r.textures[u]=o}),r}var mi,ve,Na=4,mn=124,qg=32,Xh=20,Kg=542327876,yn={HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Zg={FOURCC:2},gn={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3},me;(function(i){i[i.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",i[i.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",i[i.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",i[i.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",i[i.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",i[i.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",i[i.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",i[i.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",i[i.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",i[i.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",i[i.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",i[i.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",i[i.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",i[i.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",i[i.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",i[i.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",i[i.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",i[i.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",i[i.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",i[i.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",i[i.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",i[i.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",i[i.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",i[i.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",i[i.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",i[i.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",i[i.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",i[i.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",i[i.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",i[i.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",i[i.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",i[i.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",i[i.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",i[i.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",i[i.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",i[i.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",i[i.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",i[i.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",i[i.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",i[i.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",i[i.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",i[i.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",i[i.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",i[i.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",i[i.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",i[i.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",i[i.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",i[i.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",i[i.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",i[i.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",i[i.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",i[i.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",i[i.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",i[i.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",i[i.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",i[i.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",i[i.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",i[i.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",i[i.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",i[i.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",i[i.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",i[i.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",i[i.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",i[i.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",i[i.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",i[i.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",i[i.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",i[i.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",i[i.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",i[i.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",i[i.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",i[i.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",i[i.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",i[i.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",i[i.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",i[i.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",i[i.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",i[i.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",i[i.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",i[i.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",i[i.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",i[i.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",i[i.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",i[i.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",i[i.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",i[i.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",i[i.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",i[i.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",i[i.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",i[i.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",i[i.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",i[i.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",i[i.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",i[i.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",i[i.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",i[i.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",i[i.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",i[i.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",i[i.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",i[i.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",i[i.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",i[i.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",i[i.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",i[i.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",i[i.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",i[i.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",i[i.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",i[i.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",i[i.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",i[i.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",i[i.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",i[i.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",i[i.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",i[i.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",i[i.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",i[i.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",i[i.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(me||(me={}));var fs;(function(i){i[i.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",i[i.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",i[i.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(fs||(fs={}));var Qg=1,Jg=2,t0=4,e0=64,r0=512,i0=131072,n0=827611204,o0=861165636,a0=894720068,s0=808540228,u0=4,l0=(mi={},mi[n0]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,mi[o0]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,mi[a0]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,mi),h0=(ve={},ve[me.DXGI_FORMAT_BC1_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,ve[me.DXGI_FORMAT_BC1_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,ve[me.DXGI_FORMAT_BC2_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,ve[me.DXGI_FORMAT_BC2_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,ve[me.DXGI_FORMAT_BC3_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,ve[me.DXGI_FORMAT_BC3_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,ve[me.DXGI_FORMAT_BC1_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,ve[me.DXGI_FORMAT_BC2_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,ve[me.DXGI_FORMAT_BC3_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,ve);function f0(i){var e=new Uint32Array(i),t=e[0];if(t!==Kg)throw new Error("Invalid DDS file magic word");var r=new Uint32Array(i,0,mn/Uint32Array.BYTES_PER_ELEMENT),n=r[yn.HEIGHT],o=r[yn.WIDTH],a=r[yn.MIPMAP_COUNT],s=new Uint32Array(i,yn.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,qg/Uint32Array.BYTES_PER_ELEMENT),u=s[Qg];if(u&t0){var l=s[Zg.FOURCC];if(l!==s0){var h=l0[l],f=Na+mn,c=new Uint8Array(i,f),d=new hs(c,{format:h,width:o,height:n,levels:a});return[d]}var _=Na+mn,p=new Uint32Array(e.buffer,_,Xh/Uint32Array.BYTES_PER_ELEMENT),v=p[gn.DXGI_FORMAT],m=p[gn.RESOURCE_DIMENSION],x=p[gn.MISC_FLAG],T=p[gn.ARRAY_SIZE],w=h0[v];if(w===void 0)throw new Error("DDSParser cannot parse texture data with DXGI format "+v);if(x===u0)throw new Error("DDSParser does not support cubemap textures");if(m===fs.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");var y=new Array,S=Na+mn+Xh;if(T===1)y.push(new Uint8Array(i,S));else{for(var g=kn[w],R=0,C=o,I=n,U=0;U<a;U++){var M=Math.max(1,C+3&-4),z=Math.max(1,I+3&-4),V=M*z*g;R+=V,C=C>>>1,I=I>>>1}for(var G=S,U=0;U<T;U++)y.push(new Uint8Array(i,G,R)),G+=R}return y.map(function(b){return new hs(b,{format:w,width:o,height:n,levels:a})})}throw u&e0?new Error("DDSParser does not support uncompressed texture data."):u&r0?new Error("DDSParser does not supported YUV uncompressed texture data."):u&i0?new Error("DDSParser does not support single-channel (lumninance) texture data!"):u&Jg?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}var Qe,Ue,yi,Hh=[171,75,84,88,32,49,49,187,13,10,26,10],c0=67305985,_e={ENDIANNESS:12,GL_TYPE:16,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},cs=64,Vh=(Qe={},Qe[it.UNSIGNED_BYTE]=1,Qe[it.UNSIGNED_SHORT]=2,Qe[it.INT]=4,Qe[it.UNSIGNED_INT]=4,Qe[it.FLOAT]=4,Qe[it.HALF_FLOAT]=8,Qe),d0=(Ue={},Ue[H.RGBA]=4,Ue[H.RGB]=3,Ue[H.RG]=2,Ue[H.RED]=1,Ue[H.LUMINANCE]=1,Ue[H.LUMINANCE_ALPHA]=2,Ue[H.ALPHA]=1,Ue),p0=(yi={},yi[it.UNSIGNED_SHORT_4_4_4_4]=2,yi[it.UNSIGNED_SHORT_5_5_5_1]=2,yi[it.UNSIGNED_SHORT_5_6_5]=2,yi);function v0(i,e,t){t===void 0&&(t=!1);var r=new DataView(e);if(!_0(i,r))return null;var n=r.getUint32(_e.ENDIANNESS,!0)===c0,o=r.getUint32(_e.GL_TYPE,n),a=r.getUint32(_e.GL_FORMAT,n),s=r.getUint32(_e.GL_INTERNAL_FORMAT,n),u=r.getUint32(_e.PIXEL_WIDTH,n),l=r.getUint32(_e.PIXEL_HEIGHT,n)||1,h=r.getUint32(_e.PIXEL_DEPTH,n)||1,f=r.getUint32(_e.NUMBER_OF_ARRAY_ELEMENTS,n)||1,c=r.getUint32(_e.NUMBER_OF_FACES,n),d=r.getUint32(_e.NUMBER_OF_MIPMAP_LEVELS,n),_=r.getUint32(_e.BYTES_OF_KEY_VALUE_DATA,n);if(l===0||h!==1)throw new Error("Only 2D textures are supported");if(c!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(f!==1)throw new Error("WebGL does not support array textures");var p=4,v=4,m=u+3&-4,x=l+3&-4,T=new Array(f),w=u*l;o===0&&(w=m*x);var y;if(o!==0?Vh[o]?y=Vh[o]*d0[a]:y=p0[o]:y=kn[s],y===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var S=t?y0(r,_,n):null,g=w*y,R=g,C=u,I=l,U=m,M=x,z=cs+_,V=0;V<d;V++){for(var G=r.getUint32(z,n),b=z+4,P=0;P<f;P++){var E=T[P];E||(E=T[P]=new Array(d)),E[V]={levelID:V,levelWidth:d>1||o!==0?C:U,levelHeight:d>1||o!==0?I:M,levelBuffer:new Uint8Array(e,b,R)},b+=R}z+=G+4,z=z%4!==0?z+4-z%4:z,C=C>>1||1,I=I>>1||1,U=C+p-1&-4,M=I+v-1&-4,R=U*M*y}return o!==0?{uncompressed:T.map(function(F){var A=F[0].levelBuffer,O=!1;return o===it.FLOAT?A=new Float32Array(F[0].levelBuffer.buffer,F[0].levelBuffer.byteOffset,F[0].levelBuffer.byteLength/4):o===it.UNSIGNED_INT?(O=!0,A=new Uint32Array(F[0].levelBuffer.buffer,F[0].levelBuffer.byteOffset,F[0].levelBuffer.byteLength/4)):o===it.INT&&(O=!0,A=new Int32Array(F[0].levelBuffer.buffer,F[0].levelBuffer.byteOffset,F[0].levelBuffer.byteLength/4)),{resource:new Yi(A,{width:F[0].levelWidth,height:F[0].levelHeight}),type:o,format:O?m0(a):a}}),kvData:S}:{compressed:T.map(function(F){return new hs(null,{format:s,width:u,height:l,levels:d,levelBuffers:F})}),kvData:S}}function _0(i,e){for(var t=0;t<Hh.length;t++)if(e.getUint8(t)!==Hh[t])return console.error(i+" is not a valid *.ktx file!"),!1;return!0}function m0(i){switch(i){case H.RGBA:return H.RGBA_INTEGER;case H.RGB:return H.RGB_INTEGER;case H.RG:return H.RG_INTEGER;case H.RED:return H.RED_INTEGER;default:return i}}function y0(i,e,t){for(var r=new Map,n=0;n<e;){var o=i.getUint32(cs+n,t),a=cs+n+4,s=3-(o+3)%4;if(o===0||o>e-n){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(var u=0;u<o&&i.getUint8(a+u)!==0;u++);if(u===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var l=new TextDecoder().decode(new Uint8Array(i.buffer,a,u)),h=new DataView(i.buffer,a+u+1,o-u-1);r.set(l,h),n+=4+o+s}return r}At.setExtensionXhrType("dds",At.XHR_RESPONSE_TYPE.BUFFER);var g0=function(){function i(){}return i.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,dc(e.name||e.url,f0(e.data),e.metadata))}catch(r){t(r);return}t()},i.extension=mt.Loader,i}();At.setExtensionXhrType("ktx",At.XHR_RESPONSE_TYPE.BUFFER);var x0=function(){function i(){}return i.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var r=e.name||e.url,n=v0(r,e.data,this.loadKeyValueData),o=n.compressed,a=n.uncompressed,s=n.kvData;if(o){var u=dc(r,o,e.metadata);if(s&&u.textures)for(var l in u.textures)u.textures[l].baseTexture.ktxKeyValueData=s;Object.assign(e,u)}else if(a){var h={};a.forEach(function(f,c){var d=new at(new dt(f.resource,{mipmap:le.OFF,alphaMode:be.NO_PREMULTIPLIED_ALPHA,type:f.type,format:f.format})),_=r+"-"+(c+1);s&&(d.baseTexture.ktxKeyValueData=s),dt.addToCache(d.baseTexture,_),at.addToCache(d,_),c===0&&(h[r]=d,dt.addToCache(d.baseTexture,r),at.addToCache(d,r)),h[_]=d}),Object.assign(e,{textures:h})}}catch(f){t(f);return}t()},i.extension=mt.Loader,i.loadKeyValueData=!1,i}();/*!
 * @pixi/particle-container - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ds=function(i,e){return ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ds(i,e)};function pc(i,e){ds(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(i){pc(e,i);function e(t,r,n,o){t===void 0&&(t=1500),n===void 0&&(n=16384),o===void 0&&(o=!1);var a=i.call(this)||this,s=16384;return n>s&&(n=s),a._properties=[!1,!0,!1,!1,!1],a._maxSize=t,a._batchSize=n,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=rt.NORMAL,a.autoResize=o,a.roundPixels=!0,a.baseTexture=null,a.setProperties(r),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,Xt(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var r=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return r.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var r=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<r;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[r]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){i.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e})(Se);var Wh=function(){function i(e,t,r){this.geometry=new $i,this.indexBuffer=null,this.size=r,this.dynamicProperties=[],this.staticProperties=[];for(var n=0;n<e.length;++n){var o=e[n];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||it.FLOAT,offset:o.offset},t[n]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return i.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new Bt(Im(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r){var n=this.dynamicProperties[r];n.offset=t,t+=n.size,this.dynamicStride+=n.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new Bt(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var r=0;r<this.staticProperties.length;++r){var n=this.staticProperties[r];n.offset=a,a+=n.size,this.staticStride+=n.size}var s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new Bt(this.staticData,!0,!1);for(var r=0;r<this.dynamicProperties.length;++r){var n=this.dynamicProperties[r];e.addAttribute(n.attributeName,this.dynamicBuffer,0,n.type===it.UNSIGNED_BYTE,n.type,this.dynamicStride*4,n.offset*4)}for(var r=0;r<this.staticProperties.length;++r){var n=this.staticProperties[r];e.addAttribute(n.attributeName,this.staticBuffer,0,n.type===it.UNSIGNED_BYTE,n.type,this.staticStride*4,n.offset*4)}},i.prototype.uploadDynamic=function(e,t,r){for(var n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(e,t,r,o.type===it.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},i.prototype.uploadStatic=function(e,t,r){for(var n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(e,t,r,o.type===it.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},i.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},i}(),b0=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,T0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,S0=function(i){pc(e,i);function e(t){var r=i.call(this,t)||this;return r.shader=null,r.properties=null,r.tempMatrix=new Lt,r.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:r.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:r.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:r.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:r.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:it.UNSIGNED_BYTE,uploadFunction:r.uploadTint,offset:0}],r.shader=nr.from(T0,b0,{}),r.state=kr.for2d(),r}return e.prototype.render=function(t){var r=t.children,n=t._maxSize,o=t._batchSize,a=this.renderer,s=r.length;if(s!==0){s>n&&!t.autoResize&&(s=n);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var l=r[0]._texture.baseTexture,h=l.alphaMode>0;this.state.blendMode=Xf(t.blendMode,h),a.state.set(this.state);var f=a.gl,c=t.worldTransform.copyTo(this.tempMatrix);c.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=c.toArray(!0),this.shader.uniforms.uColor=Rm(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,h),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var d=!1,_=0,p=0;_<s;_+=o,p+=1){var v=s-_;v>o&&(v=o),p>=u.length&&u.push(this._generateOneMoreBuffer(t));var m=u[p];m.uploadDynamic(r,_,v);var x=t._bufferUpdateIDs[p]||0;d=d||m._updateID<x,d&&(m._updateID=t._updateID,m.uploadStatic(r,_,v)),a.geometry.bind(m.geometry),f.drawElements(f.TRIANGLES,v*6,f.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var r=[],n=t._maxSize,o=t._batchSize,a=t._properties,s=0;s<n;s+=o)r.push(new Wh(this.properties,a,o));return r},e.prototype._generateOneMoreBuffer=function(t){var r=t._batchSize,n=t._properties;return new Wh(this.properties,n,r)},e.prototype.uploadVertices=function(t,r,n,o,a,s){for(var u=0,l=0,h=0,f=0,c=0;c<n;++c){var d=t[r+c],_=d._texture,p=d.scale.x,v=d.scale.y,m=_.trim,x=_.orig;m?(l=m.x-d.anchor.x*x.width,u=l+m.width,f=m.y-d.anchor.y*x.height,h=f+m.height):(u=x.width*(1-d.anchor.x),l=x.width*-d.anchor.x,h=x.height*(1-d.anchor.y),f=x.height*-d.anchor.y),o[s]=l*p,o[s+1]=f*v,o[s+a]=u*p,o[s+a+1]=f*v,o[s+a*2]=u*p,o[s+a*2+1]=h*v,o[s+a*3]=l*p,o[s+a*3+1]=h*v,s+=a*4}},e.prototype.uploadPosition=function(t,r,n,o,a,s){for(var u=0;u<n;u++){var l=t[r+u].position;o[s]=l.x,o[s+1]=l.y,o[s+a]=l.x,o[s+a+1]=l.y,o[s+a*2]=l.x,o[s+a*2+1]=l.y,o[s+a*3]=l.x,o[s+a*3+1]=l.y,s+=a*4}},e.prototype.uploadRotation=function(t,r,n,o,a,s){for(var u=0;u<n;u++){var l=t[r+u].rotation;o[s]=l,o[s+a]=l,o[s+a*2]=l,o[s+a*3]=l,s+=a*4}},e.prototype.uploadUvs=function(t,r,n,o,a,s){for(var u=0;u<n;++u){var l=t[r+u]._texture._uvs;l?(o[s]=l.x0,o[s+1]=l.y0,o[s+a]=l.x1,o[s+a+1]=l.y1,o[s+a*2]=l.x2,o[s+a*2+1]=l.y2,o[s+a*3]=l.x3,o[s+a*3+1]=l.y3,s+=a*4):(o[s]=0,o[s+1]=0,o[s+a]=0,o[s+a+1]=0,o[s+a*2]=0,o[s+a*2+1]=0,o[s+a*3]=0,o[s+a*3+1]=0,s+=a*4)}},e.prototype.uploadTint=function(t,r,n,o,a,s){for(var u=0;u<n;++u){var l=t[r+u],h=l._texture.baseTexture.alphaMode>0,f=l.alpha,c=f<1&&h?Ou(l._tintRGB,f):l._tintRGB+(f*255<<24);o[s]=c,o[s+a]=c,o[s+a*2]=c,o[s+a*3]=c,s+=a*4}},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e.extension={name:"particle",type:mt.RendererPlugin},e}(to);/*!
 * @pixi/graphics - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Xe;(function(i){i.MITER="miter",i.BEVEL="bevel",i.ROUND="round"})(Xe||(Xe={}));var tr;(function(i){i.BUTT="butt",i.ROUND="round",i.SQUARE="square"})(tr||(tr={}));var Fi={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(i,e){if(e===void 0&&(e=20),!this.adaptive||!i||isNaN(i))return e;var t=Math.ceil(i/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},vc=function(){function i(){this.color=16777215,this.alpha=1,this.texture=at.WHITE,this.matrix=null,this.visible=!1,this.reset()}return i.prototype.clone=function(){var e=new i;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},i.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=at.WHITE,this.matrix=null,this.visible=!1},i.prototype.destroy=function(){this.texture=null,this.matrix=null},i}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ps=function(i,e){return ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ps(i,e)};function Iu(i,e){ps(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Yh(i,e){var t,r;e===void 0&&(e=!1);var n=i.length;if(!(n<6)){for(var o=0,a=0,s=i[n-2],u=i[n-1];a<n;a+=2){var l=i[a],h=i[a+1];o+=(l-s)*(h+u),s=l,u=h}if(!e&&o>0||e&&o<=0)for(var f=n/2,a=f+f%2;a<n;a+=2){var c=n-a-2,d=n-a-1,_=a,p=a+1;t=[i[_],i[c]],i[c]=t[0],i[_]=t[1],r=[i[p],i[d]],i[d]=r[0],i[p]=r[1]}}}var _c={build:function(i){i.points=i.shape.points.slice()},triangulate:function(i,e){var t=i.points,r=i.holes,n=e.points,o=e.indices;if(t.length>=6){Yh(t,!1);for(var a=[],s=0;s<r.length;s++){var u=r[s];Yh(u.points,!0),a.push(t.length/2),t=t.concat(u.points)}var l=If(t,a,2);if(!l)return;for(var h=n.length/2,s=0;s<l.length;s+=3)o.push(l[s]+h),o.push(l[s+1]+h),o.push(l[s+2]+h);for(var s=0;s<t.length;s++)n.push(t[s])}}},Gn={build:function(i){var e=i.points,t,r,n,o,a,s;if(i.type===Ut.CIRC){var u=i.shape;t=u.x,r=u.y,a=s=u.radius,n=o=0}else if(i.type===Ut.ELIP){var l=i.shape;t=l.x,r=l.y,a=l.width,s=l.height,n=o=0}else{var h=i.shape,f=h.width/2,c=h.height/2;t=h.x+f,r=h.y+c,a=s=Math.max(0,Math.min(h.radius,Math.min(f,c))),n=f-a,o=c-s}if(!(a>=0&&s>=0&&n>=0&&o>=0)){e.length=0;return}var d=Math.ceil(2.3*Math.sqrt(a+s)),_=d*8+(n?4:0)+(o?4:0);if(e.length=_,_!==0){if(d===0){e.length=8,e[0]=e[6]=t+n,e[1]=e[3]=r+o,e[2]=e[4]=t-n,e[5]=e[7]=r-o;return}var p=0,v=d*4+(n?2:0)+2,m=v,x=_;{var T=n+a,w=o,y=t+T,S=t-T,g=r+w;if(e[p++]=y,e[p++]=g,e[--v]=g,e[--v]=S,o){var R=r-w;e[m++]=S,e[m++]=R,e[--x]=R,e[--x]=y}}for(var C=1;C<d;C++){var I=Math.PI/2*(C/d),T=n+Math.cos(I)*a,w=o+Math.sin(I)*s,y=t+T,S=t-T,g=r+w,R=r-w;e[p++]=y,e[p++]=g,e[--v]=g,e[--v]=S,e[m++]=S,e[m++]=R,e[--x]=R,e[--x]=y}{var T=n,w=o+s,y=t+T,S=t-T,g=r+w,R=r-w;e[p++]=y,e[p++]=g,e[--x]=R,e[--x]=y,n&&(e[p++]=S,e[p++]=g,e[--x]=R,e[--x]=S)}}},triangulate:function(i,e){var t=i.points,r=e.points,n=e.indices;if(t.length!==0){var o=r.length/2,a=o,s,u;if(i.type!==Ut.RREC){var l=i.shape;s=l.x,u=l.y}else{var h=i.shape;s=h.x+h.width/2,u=h.y+h.height/2}var f=i.matrix;r.push(i.matrix?f.a*s+f.c*u+f.tx:s,i.matrix?f.b*s+f.d*u+f.ty:u),o++,r.push(t[0],t[1]);for(var c=2;c<t.length;c+=2)r.push(t[c],t[c+1]),n.push(o++,a,o);n.push(a+1,a,o)}}},E0={build:function(i){var e=i.shape,t=e.x,r=e.y,n=e.width,o=e.height,a=i.points;a.length=0,a.push(t,r,t+n,r,t+n,r+o,t,r+o)},triangulate:function(i,e){var t=i.points,r=e.points,n=r.length/2;r.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(n,n+1,n+2,n+1,n+2,n+3)}};function Hr(i,e,t){var r=e-i;return i+r*t}function xn(i,e,t,r,n,o,a){a===void 0&&(a=[]);for(var s=20,u=a,l=0,h=0,f=0,c=0,d=0,_=0,p=0,v=0;p<=s;++p)v=p/s,l=Hr(i,t,v),h=Hr(e,r,v),f=Hr(t,n,v),c=Hr(r,o,v),d=Hr(l,f,v),_=Hr(h,c,v),!(p===0&&u[u.length-2]===d&&u[u.length-1]===_)&&u.push(d,_);return u}var w0={build:function(i){if(ri.nextRoundedRectBehavior){Gn.build(i);return}var e=i.shape,t=i.points,r=e.x,n=e.y,o=e.width,a=e.height,s=Math.max(0,Math.min(e.radius,Math.min(o,a)/2));t.length=0,s?(xn(r,n+s,r,n,r+s,n,t),xn(r+o-s,n,r+o,n,r+o,n+s,t),xn(r+o,n+a-s,r+o,n+a,r+o-s,n+a,t),xn(r+s,n+a,r,n+a,r,n+a-s,t)):t.push(r,n,r+o,n,r+o,n+a,r,n+a)},triangulate:function(i,e){if(ri.nextRoundedRectBehavior){Gn.triangulate(i,e);return}for(var t=i.points,r=e.points,n=e.indices,o=r.length/2,a=If(t,null,2),s=0,u=a.length;s<u;s+=3)n.push(a[s]+o),n.push(a[s+1]+o),n.push(a[s+2]+o);for(var s=0,u=t.length;s<u;s++)r.push(t[s],t[++s])}};function $h(i,e,t,r,n,o,a,s){var u=i-t*n,l=e-r*n,h=i+t*o,f=e+r*o,c,d;a?(c=r,d=-t):(c=-r,d=t);var _=u+c,p=l+d,v=h+c,m=f+d;return s.push(_,p),s.push(v,m),2}function mr(i,e,t,r,n,o,a,s){var u=t-i,l=r-e,h=Math.atan2(u,l),f=Math.atan2(n-i,o-e);s&&h<f?h+=Math.PI*2:!s&&h>f&&(f+=Math.PI*2);var c=h,d=f-h,_=Math.abs(d),p=Math.sqrt(u*u+l*l),v=(15*_*Math.sqrt(p)/Math.PI>>0)+1,m=d/v;if(c+=m,s){a.push(i,e),a.push(t,r);for(var x=1,T=c;x<v;x++,T+=m)a.push(i,e),a.push(i+Math.sin(T)*p,e+Math.cos(T)*p);a.push(i,e),a.push(n,o)}else{a.push(t,r),a.push(i,e);for(var x=1,T=c;x<v;x++,T+=m)a.push(i+Math.sin(T)*p,e+Math.cos(T)*p),a.push(i,e);a.push(n,o),a.push(i,e)}return v*2}function P0(i,e){var t=i.shape,r=i.points||t.points.slice(),n=e.closePointEps;if(r.length!==0){var o=i.lineStyle,a=new ht(r[0],r[1]),s=new ht(r[r.length-2],r[r.length-1]),u=t.type!==Ut.POLY||t.closeStroke,l=Math.abs(a.x-s.x)<n&&Math.abs(a.y-s.y)<n;if(u){r=r.slice(),l&&(r.pop(),r.pop(),s.set(r[r.length-2],r[r.length-1]));var h=(a.x+s.x)*.5,f=(s.y+a.y)*.5;r.unshift(h,f),r.push(h,f)}var c=e.points,d=r.length/2,_=r.length,p=c.length/2,v=o.width/2,m=v*v,x=o.miterLimit*o.miterLimit,T=r[0],w=r[1],y=r[2],S=r[3],g=0,R=0,C=-(w-S),I=T-y,U=0,M=0,z=Math.sqrt(C*C+I*I);C/=z,I/=z,C*=v,I*=v;var V=o.alignment,G=(1-V)*2,b=V*2;u||(o.cap===tr.ROUND?_+=mr(T-C*(G-b)*.5,w-I*(G-b)*.5,T-C*G,w-I*G,T+C*b,w+I*b,c,!0)+2:o.cap===tr.SQUARE&&(_+=$h(T,w,C,I,G,b,!0,c))),c.push(T-C*G,w-I*G),c.push(T+C*b,w+I*b);for(var P=1;P<d-1;++P){T=r[(P-1)*2],w=r[(P-1)*2+1],y=r[P*2],S=r[P*2+1],g=r[(P+1)*2],R=r[(P+1)*2+1],C=-(w-S),I=T-y,z=Math.sqrt(C*C+I*I),C/=z,I/=z,C*=v,I*=v,U=-(S-R),M=y-g,z=Math.sqrt(U*U+M*M),U/=z,M/=z,U*=v,M*=v;var E=y-T,F=w-S,A=y-g,O=R-S,N=E*A+F*O,D=F*A-O*E,k=D<0;if(Math.abs(D)<.001*Math.abs(N)){c.push(y-C*G,S-I*G),c.push(y+C*b,S+I*b),N>=0&&(o.join===Xe.ROUND?_+=mr(y,S,y-C*G,S-I*G,y-U*G,S-M*G,c,!1)+4:_+=2,c.push(y-U*b,S-M*b),c.push(y+U*G,S+M*G));continue}var j=(-C+T)*(-I+S)-(-C+y)*(-I+w),Y=(-U+g)*(-M+S)-(-U+y)*(-M+R),$=(E*Y-A*j)/D,Q=(O*j-F*Y)/D,tt=($-y)*($-y)+(Q-S)*(Q-S),X=y+($-y)*G,K=S+(Q-S)*G,J=y-($-y)*b,ot=S-(Q-S)*b,et=Math.min(E*E+F*F,A*A+O*O),Z=k?G:b,q=et+Z*Z*m,nt=tt<=q;nt?o.join===Xe.BEVEL||tt/m>x?(k?(c.push(X,K),c.push(y+C*b,S+I*b),c.push(X,K),c.push(y+U*b,S+M*b)):(c.push(y-C*G,S-I*G),c.push(J,ot),c.push(y-U*G,S-M*G),c.push(J,ot)),_+=2):o.join===Xe.ROUND?k?(c.push(X,K),c.push(y+C*b,S+I*b),_+=mr(y,S,y+C*b,S+I*b,y+U*b,S+M*b,c,!0)+4,c.push(X,K),c.push(y+U*b,S+M*b)):(c.push(y-C*G,S-I*G),c.push(J,ot),_+=mr(y,S,y-C*G,S-I*G,y-U*G,S-M*G,c,!1)+4,c.push(y-U*G,S-M*G),c.push(J,ot)):(c.push(X,K),c.push(J,ot)):(c.push(y-C*G,S-I*G),c.push(y+C*b,S+I*b),o.join===Xe.ROUND?k?_+=mr(y,S,y+C*b,S+I*b,y+U*b,S+M*b,c,!0)+2:_+=mr(y,S,y-C*G,S-I*G,y-U*G,S-M*G,c,!1)+2:o.join===Xe.MITER&&tt/m<=x&&(k?(c.push(J,ot),c.push(J,ot)):(c.push(X,K),c.push(X,K)),_+=2),c.push(y-U*G,S-M*G),c.push(y+U*b,S+M*b),_+=2)}T=r[(d-2)*2],w=r[(d-2)*2+1],y=r[(d-1)*2],S=r[(d-1)*2+1],C=-(w-S),I=T-y,z=Math.sqrt(C*C+I*I),C/=z,I/=z,C*=v,I*=v,c.push(y-C*G,S-I*G),c.push(y+C*b,S+I*b),u||(o.cap===tr.ROUND?_+=mr(y-C*(G-b)*.5,S-I*(G-b)*.5,y-C*G,S-I*G,y+C*b,S+I*b,c,!1)+2:o.cap===tr.SQUARE&&(_+=$h(y,S,C,I,G,b,!1,c)));for(var bt=e.indices,te=Fi.epsilon*Fi.epsilon,P=p;P<_+p-2;++P)T=c[P*2],w=c[P*2+1],y=c[(P+1)*2],S=c[(P+1)*2+1],g=c[(P+2)*2],R=c[(P+2)*2+1],!(Math.abs(T*(S-R)+y*(R-w)+g*(w-S))<te)&&bt.push(P,P+1,P+2)}}function C0(i,e){var t=0,r=i.shape,n=i.points||r.points,o=r.type!==Ut.POLY||r.closeStroke;if(n.length!==0){var a=e.points,s=e.indices,u=n.length/2,l=a.length/2,h=l;for(a.push(n[0],n[1]),t=1;t<u;t++)a.push(n[t*2],n[t*2+1]),s.push(h,h+1),h++;o&&s.push(h,l)}}function qh(i,e){i.lineStyle.native?C0(i,e):P0(i,e)}var Kh=function(){function i(){}return i.curveTo=function(e,t,r,n,o,a){var s=a[a.length-2],u=a[a.length-1],l=u-t,h=s-e,f=n-t,c=r-e,d=Math.abs(l*c-h*f);if(d<1e-8||o===0)return(a[a.length-2]!==e||a[a.length-1]!==t)&&a.push(e,t),null;var _=l*l+h*h,p=f*f+c*c,v=l*f+h*c,m=o*Math.sqrt(_)/d,x=o*Math.sqrt(p)/d,T=m*v/_,w=x*v/p,y=m*c+x*h,S=m*f+x*l,g=h*(x+T),R=l*(x+T),C=c*(m+w),I=f*(m+w),U=Math.atan2(R-S,g-y),M=Math.atan2(I-S,C-y);return{cx:y+e,cy:S+t,radius:o,startAngle:U,endAngle:M,anticlockwise:h*f>c*l}},i.arc=function(e,t,r,n,o,a,s,u,l){for(var h=s-a,f=Fi._segmentsCount(Math.abs(h)*o,Math.ceil(Math.abs(h)/Ln)*40),c=h/(f*2),d=c*2,_=Math.cos(c),p=Math.sin(c),v=f-1,m=v%1/v,x=0;x<=v;++x){var T=x+m*x,w=c+a+d*T,y=Math.cos(w),S=-Math.sin(w);l.push((_*y+p*S)*o+r,(_*-S+p*y)*o+n)}},i}(),O0=function(){function i(){}return i.curveLength=function(e,t,r,n,o,a,s,u){for(var l=10,h=0,f=0,c=0,d=0,_=0,p=0,v=0,m=0,x=0,T=0,w=0,y=e,S=t,g=1;g<=l;++g)f=g/l,c=f*f,d=c*f,_=1-f,p=_*_,v=p*_,m=v*e+3*p*f*r+3*_*c*o+d*s,x=v*t+3*p*f*n+3*_*c*a+d*u,T=y-m,w=S-x,y=m,S=x,h+=Math.sqrt(T*T+w*w);return h},i.curveTo=function(e,t,r,n,o,a,s){var u=s[s.length-2],l=s[s.length-1];s.length-=2;var h=Fi._segmentsCount(i.curveLength(u,l,e,t,r,n,o,a)),f=0,c=0,d=0,_=0,p=0;s.push(u,l);for(var v=1,m=0;v<=h;++v)m=v/h,f=1-m,c=f*f,d=c*f,_=m*m,p=_*m,s.push(d*u+3*c*m*e+3*f*_*r+p*o,d*l+3*c*m*t+3*f*_*n+p*a)},i}(),A0=function(){function i(){}return i.curveLength=function(e,t,r,n,o,a){var s=e-2*r+o,u=t-2*n+a,l=2*r-2*e,h=2*n-2*t,f=4*(s*s+u*u),c=4*(s*l+u*h),d=l*l+h*h,_=2*Math.sqrt(f+c+d),p=Math.sqrt(f),v=2*f*p,m=2*Math.sqrt(d),x=c/p;return(v*_+p*c*(_-m)+(4*d*f-c*c)*Math.log((2*p+x+_)/(x+m)))/(4*v)},i.curveTo=function(e,t,r,n,o){for(var a=o[o.length-2],s=o[o.length-1],u=Fi._segmentsCount(i.curveLength(a,s,e,t,r,n)),l=0,h=0,f=1;f<=u;++f){var c=f/u;l=a+(e-a)*c,h=s+(t-s)*c,o.push(l+(e+(r-e)*c-l)*c,h+(t+(n-t)*c-h)*c)}},i}(),R0=function(){function i(){this.reset()}return i.prototype.begin=function(e,t,r){this.reset(),this.style=e,this.start=t,this.attribStart=r},i.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},i.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},i}(),yr,Ba=(yr={},yr[Ut.POLY]=_c,yr[Ut.CIRC]=Gn,yr[Ut.ELIP]=Gn,yr[Ut.RECT]=E0,yr[Ut.RREC]=w0,yr),Zh=[],bn=[],Qh=function(){function i(e,t,r,n){t===void 0&&(t=null),r===void 0&&(r=null),n===void 0&&(n=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=r,this.fillStyle=t,this.matrix=n,this.type=e.type}return i.prototype.clone=function(){return new i(this.shape,this.fillStyle,this.lineStyle,this.matrix)},i.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},i}(),Vr=new ht,I0=function(i){Iu(e,i);function e(){var t=i.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new Un,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),bn.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var r=this.batches[t];r.reset(),Zh.push(r)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,r,n,o){r===void 0&&(r=null),n===void 0&&(n=null),o===void 0&&(o=null);var a=new Qh(t,r,n,o);return this.graphicsData.push(a),this.dirty++,this},e.prototype.drawHole=function(t,r){if(r===void 0&&(r=null),!this.graphicsData.length)return null;var n=new Qh(t,null,null,r),o=this.graphicsData[this.graphicsData.length-1];return n.lineStyle=o.lineStyle,o.holes.push(n),this.dirty++,this},e.prototype.destroy=function(){i.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var r=this.graphicsData,n=0;n<r.length;++n){var o=r[n];if(o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,Vr):Vr.copyFrom(t),o.shape.contains(Vr.x,Vr.y))){var a=!1;if(o.holes)for(var s=0;s<o.holes.length;s++){var u=o.holes[s];if(u.shape.contains(Vr.x,Vr.y)){a=!0;break}}if(!a)return!0}}return!1},e.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(this.validateBatching()){this.cacheDirty=this.dirty;var t=this.uvs,r=this.graphicsData,n=null,o=null;this.batches.length>0&&(n=this.batches[this.batches.length-1],o=n.style);for(var a=this.shapeIndex;a<r.length;a++){this.shapeIndex++;var s=r[a],u=s.fillStyle,l=s.lineStyle,h=Ba[s.type];h.build(s),s.matrix&&this.transformPoints(s.points,s.matrix),(u.visible||l.visible)&&this.processHoles(s.holes);for(var f=0;f<2;f++){var c=f===0?u:l;if(c.visible){var d=c.texture.baseTexture,_=this.indices.length,p=this.points.length/2;d.wrapMode=Oe.REPEAT,f===0?this.processFill(s):this.processLine(s);var v=this.points.length/2-p;v!==0&&(n&&!this._compareStyles(o,c)&&(n.end(_,p),n=null),n||(n=Zh.pop()||new R0,n.begin(c,_,p),this.batches.push(n),o=c),this.addUvs(this.points,t,c.texture,p,v,c.matrix))}}}var m=this.indices.length,x=this.points.length/2;if(n&&n.end(m,x),this.batches.length===0){this.batchable=!0;return}var T=x>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&T===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=T?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,r){return!(!t||!r||t.texture.baseTexture!==r.texture.baseTexture||t.color+t.alpha!==r.color+r.alpha||!!t.native!=!!r.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,r=this.graphicsData.length;t<r;t++){var n=this.graphicsData[t],o=n.fillStyle,a=n.lineStyle;if(o&&!o.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,r=0,n=t.length;r<n;r++)for(var o=t[r],a=0;a<o.size;a++){var s=o.start+a;this.indicesUint16[s]=this.indicesUint16[s]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,r=0;r<t.length;r++)if(t[r].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++dt._globalBatch,r=0;r<this.drawCalls.length;r++)this.drawCalls[r].texArray.clear(),bn.push(this.drawCalls[r]);this.drawCalls.length=0;var n=this.colors,o=this.textureIds,a=bn.pop();a||(a=new os,a.texArray=new as),a.texArray.count=0,a.start=0,a.size=0,a.type=ge.TRIANGLES;var s=0,u=null,l=0,h=!1,f=ge.TRIANGLES,c=0;this.drawCalls.push(a);for(var r=0;r<this.batches.length;r++){var d=this.batches[r],_=8,p=d.style,v=p.texture.baseTexture;h!==!!p.native&&(h=!!p.native,f=h?ge.LINES:ge.TRIANGLES,u=null,s=_,t++),u!==v&&(u=v,v._batchEnabled!==t&&(s===_&&(t++,s=0,a.size>0&&(a=bn.pop(),a||(a=new os,a.texArray=new as),this.drawCalls.push(a)),a.start=c,a.size=0,a.texArray.count=0,a.type=f),v.touched=1,v._batchEnabled=t,v._batchLocation=s,v.wrapMode=Oe.REPEAT,a.texArray.elements[a.texArray.count++]=v,s++)),a.size+=d.size,c+=d.size,l=v._batchLocation,this.addColors(n,p.color,p.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,l,d.attribSize,d.attribStart)}dt._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,r=this.uvs,n=this.colors,o=this.textureIds,a=new ArrayBuffer(t.length*3*4),s=new Float32Array(a),u=new Uint32Array(a),l=0,h=0;h<t.length/2;h++)s[l++]=t[h*2],s[l++]=t[h*2+1],s[l++]=r[h*2],s[l++]=r[h*2+1],u[l++]=n[h],s[l++]=o[h];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)_c.triangulate(t,this);else{var r=Ba[t.type];r.triangulate(t,this)}},e.prototype.processLine=function(t){qh(t,this);for(var r=0;r<t.holes.length;r++)qh(t.holes[r],this)},e.prototype.processHoles=function(t){for(var r=0;r<t.length;r++){var n=t[r],o=Ba[n.type];o.build(n),n.matrix&&this.transformPoints(n.points,n.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,r){for(var n=0;n<t.length/2;n++){var o=t[n*2],a=t[n*2+1];t[n*2]=r.a*o+r.c*a+r.tx,t[n*2+1]=r.b*o+r.d*a+r.ty}},e.prototype.addColors=function(t,r,n,o,a){a===void 0&&(a=0);var s=(r>>16)+(r&65280)+((r&255)<<16),u=Ou(s,n);t.length=Math.max(t.length,a+o);for(var l=0;l<o;l++)t[a+l]=u},e.prototype.addTextureIds=function(t,r,n,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+n);for(var a=0;a<n;a++)t[o+a]=r},e.prototype.addUvs=function(t,r,n,o,a,s){s===void 0&&(s=null);for(var u=0,l=r.length,h=n.frame;u<a;){var f=t[(o+u)*2],c=t[(o+u)*2+1];if(s){var d=s.a*f+s.c*c+s.tx;c=s.b*f+s.d*c+s.ty,f=d}u++,r.push(f/h.width,c/h.height)}var _=n.baseTexture;(h.width<_.width||h.height<_.height)&&this.adjustUvs(r,n,l,a)},e.prototype.adjustUvs=function(t,r,n,o){for(var a=r.baseTexture,s=1e-6,u=n+o*2,l=r.frame,h=l.width/a.width,f=l.height/a.height,c=l.x/l.width,d=l.y/l.height,_=Math.floor(t[n]+s),p=Math.floor(t[n+1]+s),v=n+2;v<u;v+=2)_=Math.min(_,Math.floor(t[v]+s)),p=Math.min(p,Math.floor(t[v+1]+s));c-=_,d-=p;for(var v=n;v<u;v+=2)t[v]=(t[v]+c)*h,t[v+1]=(t[v+1]+d)*f},e.BATCHABLE_SIZE=100,e}(lc),M0=function(i){Iu(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=tr.BUTT,t.join=Xe.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){i.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(vc),F0=new Float32Array(3),La={},ri=function(i){Iu(e,i);function e(t){t===void 0&&(t=null);var r=i.call(this)||this;return r.shader=null,r.pluginName="batch",r.currentPath=null,r.batches=[],r.batchTint=-1,r.batchDirty=-1,r.vertexData=null,r._fillStyle=new vc,r._lineStyle=new M0,r._matrix=null,r._holeMode=!1,r.state=kr.for2d(),r._geometry=t||new I0,r._geometry.refCount++,r._transformID=-1,r.tint=16777215,r.blendMode=rt.NORMAL,r}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,r,n,o,a){return t===void 0&&(t=null),r===void 0&&(r=0),n===void 0&&(n=1),o===void 0&&(o=.5),a===void 0&&(a=!1),typeof t=="number"&&(t={width:t,color:r,alpha:n,alignment:o,native:a}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:at.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:tr.BUTT,join:Xe.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var r=t.width>0&&t.alpha>0;return r?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:r},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,r=this.currentPath.points.length;r>2&&(this.drawShape(this.currentPath),this.currentPath=new Pn,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[r-2],t[r-1]))}else this.currentPath=new Pn,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,r){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=r,this},e.prototype.lineTo=function(t,r){this.currentPath||this.moveTo(0,0);var n=this.currentPath.points,o=n[n.length-2],a=n[n.length-1];return(o!==t||a!==r)&&n.push(t,r),this},e.prototype._initCurve=function(t,r){t===void 0&&(t=0),r===void 0&&(r=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,r]):this.moveTo(t,r)},e.prototype.quadraticCurveTo=function(t,r,n,o){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),A0.curveTo(t,r,n,o,a),this},e.prototype.bezierCurveTo=function(t,r,n,o,a,s){return this._initCurve(),O0.curveTo(t,r,n,o,a,s,this.currentPath.points),this},e.prototype.arcTo=function(t,r,n,o,a){this._initCurve(t,r);var s=this.currentPath.points,u=Kh.curveTo(t,r,n,o,a,s);if(u){var l=u.cx,h=u.cy,f=u.radius,c=u.startAngle,d=u.endAngle,_=u.anticlockwise;this.arc(l,h,f,c,d,_)}return this},e.prototype.arc=function(t,r,n,o,a,s){if(s===void 0&&(s=!1),o===a)return this;!s&&a<=o?a+=Ln:s&&o<=a&&(o+=Ln);var u=a-o;if(u===0)return this;var l=t+Math.cos(o)*n,h=r+Math.sin(o)*n,f=this._geometry.closePointEps,c=this.currentPath?this.currentPath.points:null;if(c){var d=Math.abs(c[c.length-2]-l),_=Math.abs(c[c.length-1]-h);d<f&&_<f||c.push(l,h)}else this.moveTo(l,h),c=this.currentPath.points;return Kh.arc(l,h,t,r,n,o,a,s,c),this},e.prototype.beginFill=function(t,r){return t===void 0&&(t=0),r===void 0&&(r=1),this.beginTextureFill({texture:at.WHITE,color:t,alpha:r})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:at.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var r=t.alpha>0;return r?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:r},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,r,n,o){return this.drawShape(new pt(t,r,n,o))},e.prototype.drawRoundedRect=function(t,r,n,o,a){return this.drawShape(new Um(t,r,n,o,a))},e.prototype.drawCircle=function(t,r,n){return this.drawShape(new Bm(t,r,n))},e.prototype.drawEllipse=function(t,r,n,o){return this.drawShape(new Lm(t,r,n,o))},e.prototype.drawPolygon=function(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];var o,a=!0,s=r[0];s.points?(a=s.closeStroke,o=s.points):Array.isArray(r[0])?o=r[0]:o=r;var u=new Pn(o);return u.closeStroke=a,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===Ut.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var r=this._geometry;r.updateBatches(),r.batchable?(this.batchDirty!==r.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,r=this.blendMode,n=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=n,this.vertexData=new Float32Array(t.points);for(var o=0;o<n;o++){var a=t.batches[o],s=a.style.color,u=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),h=new Uint16Array(t.indicesUint16.buffer,a.start*2,a.size),f={vertexData:u,blendMode:r,indices:h,uvs:l,_batchRGB:Xt(s),_tintRGB:s,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[o]=f}},e.prototype._renderBatched=function(t){if(this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var r=0,n=this.batches.length;r<n;r++){var o=this.batches[r];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var r=this._resolveDirectShader(t),n=this._geometry,o=this.tint,a=this.worldAlpha,s=r.uniforms,u=n.drawCalls;s.translationMatrix=this.transform.worldTransform,s.tint[0]=(o>>16&255)/255*a,s.tint[1]=(o>>8&255)/255*a,s.tint[2]=(o&255)/255*a,s.tint[3]=a,t.shader.bind(r),t.geometry.bind(n,r),t.state.set(this.state);for(var l=0,h=u.length;l<h;l++)this._renderDrawCallDirect(t,n.drawCalls[l])},e.prototype._renderDrawCallDirect=function(t,r){for(var n=r.texArray,o=r.type,a=r.size,s=r.start,u=n.count,l=0;l<u;l++)t.texture.bind(n.elements[l],l);t.geometry.draw(o,a,s)},e.prototype._resolveDirectShader=function(t){var r=this.shader,n=this.pluginName;if(!r){if(!La[n]){for(var o=t.plugins[n].MAX_TEXTURES,a=new Int32Array(o),s=0;s<o;s++)a[s]=s;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new Lt,default:Rr.from({uSamplers:a},!0)},l=t.plugins[n]._shader.program;La[n]=new nr(l,u)}r=La[n]}return r},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(t.graphicsData.length){var r=t.bounds,n=r.minX,o=r.minY,a=r.maxX,s=r.maxY;this._bounds.addFrame(this.transform,n,o,a,s)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=Xt(this.tint,F0),r=0;r<this.batches.length;r++){var n=this.batches[r],o=n._batchRGB,a=t[0]*o[0]*255,s=t[1]*o[1]*255,u=t[2]*o[2]*255,l=(a<<16)+(s<<8)+(u|0);n._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var r=this.transform.worldTransform,n=r.a,o=r.b,a=r.c,s=r.d,u=r.tx,l=r.ty,h=this._geometry.points,f=this.vertexData,c=0,d=0;d<h.length;d+=2){var _=h[d],p=h[d+1];f[c++]=n*_+a*p+u,f[c++]=s*p+o*_+l}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,i.prototype.destroy.call(this,t)},e.nextRoundedRectBehavior=!1,e._TEMP_POINT=new ht,e}(Se);/*!
 * @pixi/sprite - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vs=function(i,e){return vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},vs(i,e)};function D0(i,e){vs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gi=new ht,N0=new Uint16Array([0,1,2,0,2,3]),ur=function(i){D0(e,i);function e(t){var r=i.call(this)||this;return r._anchor=new Pr(r._onAnchorUpdate,r,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),r._texture=null,r._width=0,r._height=0,r._tint=null,r._tintRGB=null,r.tint=16777215,r.blendMode=rt.NORMAL,r._cachedTint=16777215,r.uvs=null,r.texture=t||at.EMPTY,r.vertexData=new Float32Array(8),r.vertexTrimmedData=null,r._transformID=-1,r._textureID=-1,r._transformTrimmedID=-1,r._textureTrimmedID=-1,r.indices=N0,r.pluginName="batch",r.isSprite=!0,r._roundPixels=W.ROUND_PIXELS,r}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=$r(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=$r(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var r=this.transform.worldTransform,n=r.a,o=r.b,a=r.c,s=r.d,u=r.tx,l=r.ty,h=this.vertexData,f=t.trim,c=t.orig,d=this._anchor,_=0,p=0,v=0,m=0;if(f?(p=f.x-d._x*c.width,_=p+f.width,m=f.y-d._y*c.height,v=m+f.height):(p=-d._x*c.width,_=p+c.width,m=-d._y*c.height,v=m+c.height),h[0]=n*p+a*m+u,h[1]=s*m+o*p+l,h[2]=n*_+a*m+u,h[3]=s*m+o*_+l,h[4]=n*_+a*v+u,h[5]=s*v+o*_+l,h[6]=n*p+a*v+u,h[7]=s*v+o*p+l,this._roundPixels)for(var x=W.RESOLUTION,T=0;T<h.length;++T)h[T]=Math.round((h[T]*x|0)/x)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,r=this.vertexTrimmedData,n=t.orig,o=this._anchor,a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=-o._x*n.width,_=d+n.width,p=-o._y*n.height,v=p+n.height;r[0]=s*d+l*p+f,r[1]=h*p+u*d+c,r[2]=s*_+l*p+f,r[3]=h*p+u*_+c,r[4]=s*_+l*v+f,r[5]=h*v+u*_+c,r[6]=s*d+l*v+f,r[7]=h*v+u*d+c},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,r=this._texture.orig;!t||t.width===r.width&&t.height===r.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new Un),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new pt),t=this._localBoundsRect),this._localBounds.getRectangle(t)):i.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,gi);var r=this._texture.orig.width,n=this._texture.orig.height,o=-r*this.anchor.x,a=0;return gi.x>=o&&gi.x<o+r&&(a=-n*this.anchor.y,gi.y>=a&&gi.y<a+n)},e.prototype.destroy=function(t){i.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var r=typeof t=="boolean"?t:t&&t.texture;if(r){var n=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!n)}this._texture=null},e.from=function(t,r){var n=t instanceof at?t:at.from(t,r);return new e(n)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var r=$r(this.scale.x)||1;this.scale.x=r*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var r=$r(this.scale.y)||1;this.scale.y=r*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||at.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(Se);/*!
 * @pixi/text - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _s=function(i,e){return _s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},_s(i,e)};function B0(i,e){_s(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Di;(function(i){i[i.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",i[i.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(Di||(Di={}));var Ua={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:Di.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},L0=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],ii=function(){function i(e){this.styleID=0,this.reset(),Ga(this,e,e)}return i.prototype.clone=function(){var e={};return Ga(e,this,Ua),new i(e)},i.prototype.reset=function(){Ga(this,Ua,Ua)},Object.defineProperty(i.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=ka(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=ka(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){U0(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=ka(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),i.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var r=t.length-1;r>=0;r--){var n=t[r].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&L0.indexOf(n)<0&&(n='"'+n+'"'),t[r]=n}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},i}();function Jh(i){return typeof i=="number"?jf(i):(typeof i=="string"&&i.indexOf("0x")===0&&(i=i.replace("0x","#")),i)}function ka(i){if(Array.isArray(i)){for(var e=0;e<i.length;++e)i[e]=Jh(i[e]);return i}else return Jh(i)}function U0(i,e){if(!Array.isArray(i)||!Array.isArray(e)||i.length!==e.length)return!1;for(var t=0;t<i.length;++t)if(i[t]!==e[t])return!1;return!0}function Ga(i,e,t){for(var r in t)Array.isArray(e[r])?i[r]=e[r].slice():i[r]=e[r]}var Tn={willReadFrequently:!0},Fe=function(){function i(e,t,r,n,o,a,s,u,l){this.text=e,this.style=t,this.width=r,this.height=n,this.lines=o,this.lineWidths=a,this.lineHeight=s,this.maxLineWidth=u,this.fontProperties=l}return i.measureText=function(e,t,r,n){n===void 0&&(n=i._canvas),r=r??t.wordWrap;var o=t.toFontString(),a=i.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);var s=n.getContext("2d",Tn);s.font=o;for(var u=r?i.wordWrap(e,t,n):e,l=u.split(/(?:\r\n|\r|\n)/),h=new Array(l.length),f=0,c=0;c<l.length;c++){var d=s.measureText(l[c]).width+(l[c].length-1)*t.letterSpacing;h[c]=d,f=Math.max(f,d)}var _=f+t.strokeThickness;t.dropShadow&&(_+=t.dropShadowDistance);var p=t.lineHeight||a.fontSize+t.strokeThickness,v=Math.max(p,a.fontSize+t.strokeThickness)+(l.length-1)*(p+t.leading);return t.dropShadow&&(v+=t.dropShadowDistance),new i(e,t,_,v,l,h,p+t.leading,f,a)},i.wordWrap=function(e,t,r){r===void 0&&(r=i._canvas);for(var n=r.getContext("2d",Tn),o=0,a="",s="",u=Object.create(null),l=t.letterSpacing,h=t.whiteSpace,f=i.collapseSpaces(h),c=i.collapseNewlines(h),d=!f,_=t.wordWrapWidth+l,p=i.tokenize(e),v=0;v<p.length;v++){var m=p[v];if(i.isNewline(m)){if(!c){s+=i.addLine(a),d=!f,a="",o=0;continue}m=" "}if(f){var x=i.isBreakingSpace(m),T=i.isBreakingSpace(a[a.length-1]);if(x&&T)continue}var w=i.getFromCache(m,l,u,n);if(w>_)if(a!==""&&(s+=i.addLine(a),a="",o=0),i.canBreakWords(m,t.breakWords))for(var y=i.wordWrapSplit(m),S=0;S<y.length;S++){for(var g=y[S],R=1;y[S+R];){var C=y[S+R],I=g[g.length-1];if(!i.canBreakChars(I,C,m,S,t.breakWords))g+=C;else break;R++}S+=g.length-1;var U=i.getFromCache(g,l,u,n);U+o>_&&(s+=i.addLine(a),d=!1,a="",o=0),a+=g,o+=U}else{a.length>0&&(s+=i.addLine(a),a="",o=0);var M=v===p.length-1;s+=i.addLine(m,!M),d=!1,a="",o=0}else w+o>_&&(d=!1,s+=i.addLine(a),a="",o=0),(a.length>0||!i.isBreakingSpace(m)||d)&&(a+=m,o+=w)}return s+=i.addLine(a,!1),s},i.addLine=function(e,t){return t===void 0&&(t=!0),e=i.trimRight(e),e=t?e+`
`:e,e},i.getFromCache=function(e,t,r,n){var o=r[e];if(typeof o!="number"){var a=e.length*t;o=n.measureText(e).width+a,r[e]=o}return o},i.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},i.collapseNewlines=function(e){return e==="normal"},i.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var r=e[t];if(!i.isBreakingSpace(r))break;e=e.slice(0,-1)}return e},i.isNewline=function(e){return typeof e!="string"?!1:i._newlines.indexOf(e.charCodeAt(0))>=0},i.isBreakingSpace=function(e,t){return typeof e!="string"?!1:i._breakingSpaces.indexOf(e.charCodeAt(0))>=0},i.tokenize=function(e){var t=[],r="";if(typeof e!="string")return t;for(var n=0;n<e.length;n++){var o=e[n],a=e[n+1];if(i.isBreakingSpace(o,a)||i.isNewline(o)){r!==""&&(t.push(r),r=""),t.push(o);continue}r+=o}return r!==""&&t.push(r),t},i.canBreakWords=function(e,t){return t},i.canBreakChars=function(e,t,r,n,o){return!0},i.wordWrapSplit=function(e){return e.split("")},i.measureFont=function(e){if(i._fonts[e])return i._fonts[e];var t={ascent:0,descent:0,fontSize:0},r=i._canvas,n=i._context;n.font=e;var o=i.METRICS_STRING+i.BASELINE_SYMBOL,a=Math.ceil(n.measureText(o).width),s=Math.ceil(n.measureText(i.BASELINE_SYMBOL).width),u=Math.ceil(i.HEIGHT_MULTIPLIER*s);s=s*i.BASELINE_MULTIPLIER|0,r.width=a,r.height=u,n.fillStyle="#f00",n.fillRect(0,0,a,u),n.font=e,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(o,0,s);var l=n.getImageData(0,0,a,u).data,h=l.length,f=a*4,c=0,d=0,_=!1;for(c=0;c<s;++c){for(var p=0;p<f;p+=4)if(l[d+p]!==255){_=!0;break}if(!_)d+=f;else break}for(t.ascent=s-c,d=h-f,_=!1,c=u;c>s;--c){for(var p=0;p<f;p+=4)if(l[d+p]!==255){_=!0;break}if(!_)d-=f;else break}return t.descent=c-s,t.fontSize=t.ascent+t.descent,i._fonts[e]=t,t},i.clearMetrics=function(e){e===void 0&&(e=""),e?delete i._fonts[e]:i._fonts={}},Object.defineProperty(i,"_canvas",{get:function(){if(!i.__canvas){var e=void 0;try{var t=new OffscreenCanvas(0,0),r=t.getContext("2d",Tn);if(r&&r.measureText)return i.__canvas=t,t;e=W.ADAPTER.createCanvas()}catch{e=W.ADAPTER.createCanvas()}e.width=e.height=10,i.__canvas=e}return i.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(i,"_context",{get:function(){return i.__context||(i.__context=i._canvas.getContext("2d",Tn)),i.__context},enumerable:!1,configurable:!0}),i}();Fe._fonts={};Fe.METRICS_STRING="|ÉqÅ";Fe.BASELINE_SYMBOL="M";Fe.BASELINE_MULTIPLIER=1.4;Fe.HEIGHT_MULTIPLIER=2;Fe._newlines=[10,13];Fe._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var k0={texture:!0,children:!1,baseTexture:!0},eo=function(i){B0(e,i);function e(t,r,n){var o=this,a=!1;n||(n=W.ADAPTER.createCanvas(),a=!0),n.width=3,n.height=3;var s=at.from(n);return s.orig=new pt,s.trim=new pt,o=i.call(this,s)||this,o._ownCanvas=a,o.canvas=n,o.context=n.getContext("2d",{willReadFrequently:!0}),o._resolution=W.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=r,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var r=this._style;if(this.localStyleID!==r.styleID&&(this.dirty=!0,this.localStyleID=r.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var n=this.context,o=Fe.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=o.width,s=o.height,u=o.lines,l=o.lineHeight,h=o.lineWidths,f=o.maxLineWidth,c=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+r.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+r.padding*2)*this._resolution),n.scale(this._resolution,this._resolution),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.font=this._font,n.lineWidth=r.strokeThickness,n.textBaseline=r.textBaseline,n.lineJoin=r.lineJoin,n.miterLimit=r.miterLimit;for(var d,_,p=r.dropShadow?2:1,v=0;v<p;++v){var m=r.dropShadow&&v===0,x=m?Math.ceil(Math.max(1,s)+r.padding*2):0,T=x*this._resolution;if(m){n.fillStyle="black",n.strokeStyle="black";var w=r.dropShadowColor,y=Xt(typeof w=="number"?w:Cu(w)),S=r.dropShadowBlur*this._resolution,g=r.dropShadowDistance*this._resolution;n.shadowColor="rgba("+y[0]*255+","+y[1]*255+","+y[2]*255+","+r.dropShadowAlpha+")",n.shadowBlur=S,n.shadowOffsetX=Math.cos(r.dropShadowAngle)*g,n.shadowOffsetY=Math.sin(r.dropShadowAngle)*g+T}else n.fillStyle=this._generateFillStyle(r,u,o),n.strokeStyle=r.stroke,n.shadowColor="black",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0;var R=(l-c.fontSize)/2;(!e.nextLineHeightBehavior||l-c.fontSize<0)&&(R=0);for(var C=0;C<u.length;C++)d=r.strokeThickness/2,_=r.strokeThickness/2+C*l+c.ascent+R,r.align==="right"?d+=f-h[C]:r.align==="center"&&(d+=(f-h[C])/2),r.stroke&&r.strokeThickness&&this.drawLetterSpacing(u[C],d+r.padding,_+r.padding-x,!0),r.fill&&this.drawLetterSpacing(u[C],d+r.padding,_+r.padding-x)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,r,n,o){o===void 0&&(o=!1);var a=this._style,s=a.letterSpacing,u=e.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(s===0||u){u&&(this.context.letterSpacing=s,this.context.textLetterSpacing=s),o?this.context.strokeText(t,r,n):this.context.fillText(t,r,n);return}for(var l=r,h=Array.from?Array.from(t):t.split(""),f=this.context.measureText(t).width,c=0,d=0;d<h.length;++d){var _=h[d];o?this.context.strokeText(_,l,n):this.context.fillText(_,l,n);for(var p="",v=d+1;v<h.length;++v)p+=h[v];c=this.context.measureText(p).width,l+=f-c+s,f=c}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var r=Fm(t);r.data&&(t.width=r.width,t.height=r.height,this.context.putImageData(r.data,0,0))}var n=this._texture,o=this._style,a=o.trim?0:o.padding,s=n.baseTexture;n.trim.width=n._frame.width=t.width/this._resolution,n.trim.height=n._frame.height=t.height/this._resolution,n.trim.x=-a,n.trim.y=-a,n.orig.width=n._frame.width-a*2,n.orig.height=n._frame.height-a*2,this._onTextureUpdate(),s.setRealSize(t.width,t.height,this._resolution),n.updateUvs(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),i.prototype._render.call(this,t)},e.prototype.updateTransform=function(){this.updateText(!0),i.prototype.updateTransform.call(this)},e.prototype.getBounds=function(t,r){return this.updateText(!0),this._textureID===-1&&(t=!1),i.prototype.getBounds.call(this,t,r)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),i.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,r,n){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var a,s=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,l=this.canvas.width/this._resolution-s-u*2,h=this.canvas.height/this._resolution-s-u*2,f=o.slice(),c=t.fillGradientStops.slice();if(!c.length)for(var d=f.length+1,_=1;_<d;++_)c.push(_/d);if(f.unshift(o[0]),c.unshift(0),f.push(o[o.length-1]),c.push(1),t.fillGradientType===Di.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,u,l/2,h+u);for(var p=n.fontProperties.fontSize+t.strokeThickness,_=0;_<r.length;_++){var v=n.lineHeight*(_-1)+p,m=n.lineHeight*_,x=m;_>0&&v>m&&(x=(m+v)/2);var T=m+p,w=n.lineHeight*(_+1),y=T;_+1<r.length&&w<T&&(y=(T+w)/2);for(var S=(y-x)/h,g=0;g<f.length;g++){var R=0;typeof c[g]=="number"?R=c[g]:R=g/f.length;var C=Math.min(1,Math.max(0,x/h+R*S));C=Number(C.toFixed(5)),a.addColorStop(C,f[g])}}}else{a=this.context.createLinearGradient(u,h/2,l+u,h/2);for(var I=f.length+1,U=1,_=0;_<f.length;_++){var M=void 0;typeof c[_]=="number"?M=c[_]:M=U/I,a.addColorStop(M,f[_]),U++}}return a},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},k0,t),i.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var r=$r(this.scale.x)||1;this.scale.x=r*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var r=$r(this.scale.y)||1;this.scale.y=r*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof ii?this._style=t:this._style=new ii(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t??""),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e.experimentalLetterSpacing=!1,e}(ur);/*!
 * @pixi/prepare - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */W.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ms=function(i,e){return ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ms(i,e)};function G0(i,e){ms(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var j0=function(){function i(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return i.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},i.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},i}();function z0(i,e){var t=!1;if(i&&i._textures&&i._textures.length){for(var r=0;r<i._textures.length;r++)if(i._textures[r]instanceof at){var n=i._textures[r].baseTexture;e.indexOf(n)===-1&&(e.push(n),t=!0)}}return t}function X0(i,e){if(i.baseTexture instanceof dt){var t=i.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function H0(i,e){if(i._texture&&i._texture instanceof at){var t=i._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function V0(i,e){return e instanceof eo?(e.updateText(!0),!0):!1}function W0(i,e){if(e instanceof ii){var t=e.toFontString();return Fe.measureFont(t),!0}return!1}function Y0(i,e){if(i instanceof eo){e.indexOf(i.style)===-1&&e.push(i.style),e.indexOf(i)===-1&&e.push(i);var t=i._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function $0(i,e){return i instanceof ii?(e.indexOf(i)===-1&&e.push(i),!0):!1}var q0=function(){function i(e){var t=this;this.limiter=new j0(W.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){t.queue&&t.prepareItems()},this.registerFindHook(Y0),this.registerFindHook($0),this.registerFindHook(z0),this.registerFindHook(X0),this.registerFindHook(H0),this.registerUploadHook(V0),this.registerUploadHook(W0)}return i.prototype.upload=function(e,t){var r=this;return typeof e=="function"&&(t=e,e=null),t&&xe("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(n){e&&r.add(e);var o=function(){t==null||t(),n()};r.queue.length?(r.completes.push(o),r.ticking||(r.ticking=!0,jt.system.addOnce(r.tick,r,We.UTILITY))):o()})},i.prototype.tick=function(){setTimeout(this.delayedTick,0)},i.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var r=0,n=this.uploadHooks.length;r<n;r++)if(this.uploadHooks[r](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)jt.system.addOnce(this.tick,this,We.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var r=0,n=o.length;r<n;r++)o[r]()}},i.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},i.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},i.prototype.add=function(e){for(var t=0,r=this.addHooks.length;t<r&&!this.addHooks[t](e,this.queue);t++);if(e instanceof Se)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},i.prototype.destroy=function(){this.ticking&&jt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},i}();function mc(i,e){return e instanceof dt?(e._glTextures[i.CONTEXT_UID]||i.texture.bind(e),!0):!1}function K0(i,e){if(!(e instanceof ri))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var r=t.batches,n=0;n<r.length;n++){var o=r[n].style.texture;o&&mc(i,o.baseTexture)}return t.batchable||i.geometry.bind(t,e._resolveDirectShader(i)),!0}function Z0(i,e){return i instanceof ri?(e.push(i),!0):!1}var Q0=function(i){G0(e,i);function e(t){var r=i.call(this,t)||this;return r.uploadHookHelper=r.renderer,r.registerFindHook(Z0),r.registerUploadHook(mc),r.registerUploadHook(K0),r}return e.extension={name:"prepare",type:mt.RendererPlugin},e}(q0);/*!
 * @pixi/spritesheet - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var J0=function(){function i(e,t,r){r===void 0&&(r=null),this.linkedSheets=[],this._texture=e instanceof at?e:null,this.baseTexture=e instanceof dt?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var n=this.baseTexture.resource;this.resolution=this._updateResolution(r||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return i.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,r=Bn(e,null);return r===null&&(r=t!==void 0?parseFloat(t):1),r!==1&&this.baseTexture.setResolution(r),r},i.prototype.parse=function(e){var t=this;return e&&xe("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(r){t._callback=function(n){e==null||e(n),r(n)},t._batchIndex=0,t._frameKeys.length<=i.BATCH_SIZE?(t._processFrames(0),t._processAnimations(),t._parseComplete()):t._nextBatch()})},i.prototype._processFrames=function(e){for(var t=e,r=i.BATCH_SIZE;t-e<r&&t<this._frameKeys.length;){var n=this._frameKeys[t],o=this._frames[n],a=o.frame;if(a){var s=null,u=null,l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,h=new pt(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?s=new pt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new pt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new pt(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[n]=new at(this.baseTexture,s,h,u,o.rotated?2:0,o.anchor),at.addToCache(this.textures[n],n)}t++}},i.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var r=0;r<e[t].length;r++){var n=e[t][r];this.animations[t].push(this.textures[n])}}},i.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},i.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*i.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*i.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},i.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},i.BATCH_SIZE=1e3,i}(),tx=function(){function i(){}return i.use=function(e,t){var r,n,o=this,a=e.name+"_image";if(!e.data||e.type!==At.TYPE.JSON||!e.data.frames||o.resources[a]){t();return}var s=(n=(r=e.data)===null||r===void 0?void 0:r.meta)===null||n===void 0?void 0:n.related_multi_packs;if(Array.isArray(s))for(var u=function(_){if(typeof _!="string")return"continue";var p=_.replace(".json",""),v=Yr.resolve(e.url.replace(o.baseUrl,""),_);if(o.resources[p]||Object.values(o.resources).some(function(x){return Yr.format(Yr.parse(x.url))===v}))return"continue";var m={crossOrigin:e.crossOrigin,loadType:At.LOAD_TYPE.XHR,xhrType:At.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(p,v,m)},l=0,h=s;l<h.length;l++){var f=h[l];u(f)}var c={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=i.getResourcePath(e,o.baseUrl);o.add(a,d,c,function(p){if(p.error){t(p.error);return}var v=new J0(p.texture,e.data,e.url);v.parse().then(function(){e.spritesheet=v,e.textures=v.textures,t()})})},i.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:Yr.resolve(e.url.replace(t,""),e.data.meta.image)},i.extension=mt.Loader,i}();/*!
 * @pixi/sprite-tiling - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ys=function(i,e){return ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ys(i,e)};function yc(i,e){ys(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xi=new ht,ex=function(i){yc(e,i);function e(t,r,n){r===void 0&&(r=100),n===void 0&&(n=100);var o=i.call(this,t)||this;return o.tileTransform=new Yf,o._width=r,o._height=n,o.uvMatrix=o.texture.uvMatrix||new Ru(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var r=this._texture;!r||!r.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,r=this._height*-this._anchor._y,n=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,r,n,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new pt),t=this._localBoundsRect),this._bounds.getRectangle(t)):i.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,xi);var r=this._width,n=this._height,o=-r*this.anchor._x;if(xi.x>=o&&xi.x<o+r){var a=-n*this.anchor._y;if(xi.y>=a&&xi.y<a+n)return!0}return!1},e.prototype.destroy=function(t){i.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,r){var n=t instanceof at?t:at.from(t,r);return new e(n,r.width,r.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e}(ur),rx=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,tf=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,ix=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,nx=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,ox=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,Sn=new Lt,ax=function(i){yc(e,i);function e(t){var r=i.call(this,t)||this;return t.runners.contextChange.add(r),r.quad=new tc,r.state=kr.for2d(),r}return e.prototype.contextChange=function(){var t=this.renderer,r={globals:t.globalUniforms};this.simpleShader=nr.from(tf,rx,r),this.shader=t.context.webGLVersion>1?nr.from(nx,ox,r):nr.from(tf,ix,r)},e.prototype.render=function(t){var r=this.renderer,n=this.quad,o=n.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var a=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;o=n.uvs,o[0]=o[6]=-a,o[1]=o[3]=-s,o[2]=o[4]=1-a,o[5]=o[7]=1-s,n.invalidate();var u=t._texture,l=u.baseTexture,h=l.alphaMode>0,f=t.tileTransform.localTransform,c=t.uvMatrix,d=l.isPowerOfTwo&&u.frame.width===l.width&&u.frame.height===l.height;d&&(l._glTextures[r.CONTEXT_UID]?d=l.wrapMode!==Oe.CLAMP:l.wrapMode===Oe.CLAMP&&(l.wrapMode=Oe.REPEAT));var _=d?this.simpleShader:this.shader,p=u.width,v=u.height,m=t._width,x=t._height;Sn.set(f.a*p/m,f.b*p/x,f.c*v/m,f.d*v/x,f.tx/m,f.ty/x),Sn.invert(),d?Sn.prepend(c.mapCoord):(_.uniforms.uMapCoord=c.mapCoord.toArray(!0),_.uniforms.uClampFrame=c.uClampFrame,_.uniforms.uClampOffset=c.uClampOffset),_.uniforms.uTransform=Sn.toArray(!0),_.uniforms.uColor=Hf(t.tint,t.worldAlpha,_.uniforms.uColor,h),_.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),_.uniforms.uSampler=u,r.shader.bind(_),r.geometry.bind(n),this.state.blendMode=Xf(t.blendMode,h),r.state.set(this.state),r.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e.extension={name:"tilingSprite",type:mt.RendererPlugin},e}(to);/*!
 * @pixi/mesh - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var gs=function(i,e){return gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},gs(i,e)};function Mu(i,e){gs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var sx=function(){function i(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return i.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},i}(),ja=new ht,ef=new Pn,Ni=function(i){Mu(e,i);function e(t,r,n,o){o===void 0&&(o=ge.TRIANGLES);var a=i.call(this)||this;return a.geometry=t,a.shader=r,a.state=n||kr.for2d(),a.drawMode=o,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=W.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var r=this.geometry.buffers[0].data,n=this.shader;n.batchable&&this.drawMode===ge.TRIANGLES&&r.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var r=this.shader;r.alpha=this.worldAlpha,r.update&&r.update(),t.batch.flush(),r.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(r),t.state.set(this.state),t.geometry.bind(this.geometry,r),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var r=this.geometry,n=this.shader;n.uvMatrix&&(n.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=r.indexBuffer.data,this._tintRGB=n._tintRGB,this._texture=n.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,r=t.buffers[0],n=r.data,o=r._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==n.length&&(this.vertexData=new Float32Array(n.length));for(var a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=this.vertexData,_=0;_<d.length/2;_++){var p=n[_*2],v=n[_*2+1];d[_*2]=s*p+l*v+f,d[_*2+1]=u*p+h*v+c}if(this._roundPixels)for(var m=W.RESOLUTION,_=0;_<d.length;++_)d[_]=Math.round((d[_]*m|0)/m);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],r=this.shader;r.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new sx(t,r.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,ja);for(var r=this.geometry.getBuffer("aVertexPosition").data,n=ef.points,o=this.geometry.getIndex().data,a=o.length,s=this.drawMode===4?3:1,u=0;u+2<a;u+=s){var l=o[u]*2,h=o[u+1]*2,f=o[u+2]*2;if(n[0]=r[l],n[1]=r[l+1],n[2]=r[h],n[3]=r[h+1],n[4]=r[f],n[5]=r[f+1],ef.contains(ja.x,ja.y))return!0}return!1},e.prototype.destroy=function(t){i.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}(Se),ux=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,lx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,Bi=function(i){Mu(e,i);function e(t,r){var n=this,o={uSampler:t,alpha:1,uTextureMatrix:Lt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return r=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},r),r.uniforms&&Object.assign(o,r.uniforms),n=i.call(this,r.program||qi.from(lx,ux),o)||this,n._colorDirty=!1,n.uvMatrix=new Ru(t),n.batchable=r.program===void 0,n.pluginName=r.pluginName,n.tint=r.tint,n.alpha=r.alpha,n}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;Hf(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(nr),ro=function(i){Mu(e,i);function e(t,r,n){var o=i.call(this)||this,a=new Bt(t),s=new Bt(r,!0),u=new Bt(n,!0,!0);return o.addAttribute("aVertexPosition",a,2,!1,it.FLOAT).addAttribute("aTextureCoord",s,2,!1,it.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}($i);/*!
 * @pixi/text-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xs=function(i,e){return xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},xs(i,e)};function hx(i,e){xs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jn=function(){function i(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return i}(),fx=function(){function i(){}return i.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},i.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var n in t){var o=t[n].match(/^[a-z]+/gm)[0],a=t[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var u in a){var l=a[u].split("="),h=l[0],f=l[1].replace(/"/gm,""),c=parseFloat(f),d=isNaN(c)?f:c;s[h]=d}r[o].push(s)}var _=new jn;return r.info.forEach(function(p){return _.info.push({face:p.face,size:parseInt(p.size,10)})}),r.common.forEach(function(p){return _.common.push({lineHeight:parseInt(p.lineHeight,10)})}),r.page.forEach(function(p){return _.page.push({id:parseInt(p.id,10),file:p.file})}),r.char.forEach(function(p){return _.char.push({id:parseInt(p.id,10),page:parseInt(p.page,10),x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xoffset:parseInt(p.xoffset,10),yoffset:parseInt(p.yoffset,10),xadvance:parseInt(p.xadvance,10)})}),r.kerning.forEach(function(p){return _.kerning.push({first:parseInt(p.first,10),second:parseInt(p.second,10),amount:parseInt(p.amount,10)})}),r.distanceField.forEach(function(p){return _.distanceField.push({distanceRange:parseInt(p.distanceRange,10),fieldType:p.fieldType})}),_},i}(),bs=function(){function i(){}return i.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},i.parse=function(e){for(var t=new jn,r=e.getElementsByTagName("info"),n=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),s=e.getElementsByTagName("kerning"),u=e.getElementsByTagName("distanceField"),l=0;l<r.length;l++)t.info.push({face:r[l].getAttribute("face"),size:parseInt(r[l].getAttribute("size"),10)});for(var l=0;l<n.length;l++)t.common.push({lineHeight:parseInt(n[l].getAttribute("lineHeight"),10)});for(var l=0;l<o.length;l++)t.page.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});for(var l=0;l<a.length;l++){var h=a[l];t.char.push({id:parseInt(h.getAttribute("id"),10),page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xoffset:parseInt(h.getAttribute("xoffset"),10),yoffset:parseInt(h.getAttribute("yoffset"),10),xadvance:parseInt(h.getAttribute("xadvance"),10)})}for(var l=0;l<s.length;l++)t.kerning.push({first:parseInt(s[l].getAttribute("first"),10),second:parseInt(s[l].getAttribute("second"),10),amount:parseInt(s[l].getAttribute("amount"),10)});for(var l=0;l<u.length;l++)t.distanceField.push({fieldType:u[l].getAttribute("fieldType"),distanceRange:parseInt(u[l].getAttribute("distanceRange"),10)});return t},i}(),cx=function(){function i(){}return i.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return bs.test(t)}return!1},i.parse=function(e){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return bs.parse(t)},i}(),za=[fx,bs,cx];function gc(i){for(var e=0;e<za.length;e++)if(za[e].test(i))return za[e];return null}function dx(i,e,t,r,n,o){var a=t.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var s,u=t.dropShadow?t.dropShadowDistance:0,l=t.padding||0,h=i.width/r-u-l*2,f=i.height/r-u-l*2,c=a.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var _=c.length+1,p=1;p<_;++p)d.push(p/_);if(c.unshift(a[0]),d.unshift(0),c.push(a[a.length-1]),d.push(1),t.fillGradientType===Di.LINEAR_VERTICAL){s=e.createLinearGradient(h/2,l,h/2,f+l);for(var v=0,m=o.fontProperties.fontSize+t.strokeThickness,x=m/f,p=0;p<n.length;p++)for(var T=o.lineHeight*p,w=0;w<c.length;w++){var y=0;typeof d[w]=="number"?y=d[w]:y=w/c.length;var S=T/f+y*x,g=Math.max(v,S);g=Math.min(g,1),s.addColorStop(g,c[w]),v=g}}else{s=e.createLinearGradient(l,f/2,h+l,f/2);for(var R=c.length+1,C=1,p=0;p<c.length;p++){var I=void 0;typeof d[p]=="number"?I=d[p]:I=C/R,s.addColorStop(I,c[p]),C++}}return s}function px(i,e,t,r,n,o,a){var s=t.text,u=t.fontProperties;e.translate(r,n),e.scale(o,o);var l=a.strokeThickness/2,h=-(a.strokeThickness/2);if(e.font=a.toFontString(),e.lineWidth=a.strokeThickness,e.textBaseline=a.textBaseline,e.lineJoin=a.lineJoin,e.miterLimit=a.miterLimit,e.fillStyle=dx(i,e,a,o,[s],t),e.strokeStyle=a.stroke,a.dropShadow){var f=a.dropShadowColor,c=Xt(typeof f=="number"?f:Cu(f)),d=a.dropShadowBlur*o,_=a.dropShadowDistance*o;e.shadowColor="rgba("+c[0]*255+","+c[1]*255+","+c[2]*255+","+a.dropShadowAlpha+")",e.shadowBlur=d,e.shadowOffsetX=Math.cos(a.dropShadowAngle)*_,e.shadowOffsetY=Math.sin(a.dropShadowAngle)*_}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;a.stroke&&a.strokeThickness&&e.strokeText(s,l,h+t.lineHeight-u.descent),a.fill&&e.fillText(s,l,h+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function xc(i){return Array.from?Array.from(i):i.split("")}function vx(i){typeof i=="string"&&(i=[i]);for(var e=[],t=0,r=i.length;t<r;t++){var n=i[t];if(Array.isArray(n)){if(n.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),a=n[1].charCodeAt(0);if(a<o)throw new Error("[BitmapFont]: Invalid character range.");for(var s=o,u=a;s<=u;s++)e.push(String.fromCharCode(s))}else e.push.apply(e,xc(n))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}function Cn(i){return i.codePointAt?i.codePointAt(0):i.charCodeAt(0)}var Je=function(){function i(e,t,r){var n,o,a=e.info[0],s=e.common[0],u=e.page[0],l=e.distanceField[0],h=Bn(u.file),f={};this._ownsTextures=r,this.font=a.face,this.size=a.size,this.lineHeight=s.lineHeight/h,this.chars={},this.pageTextures=f;for(var c=0;c<e.page.length;c++){var d=e.page[c],_=d.id,p=d.file;f[_]=t instanceof Array?t[c]:t[p],l!=null&&l.fieldType&&l.fieldType!=="none"&&(f[_].baseTexture.alphaMode=be.NO_PREMULTIPLIED_ALPHA,f[_].baseTexture.mipmap=le.OFF)}for(var c=0;c<e.char.length;c++){var v=e.char[c],_=v.id,m=v.page,x=e.char[c],T=x.x,w=x.y,y=x.width,S=x.height,g=x.xoffset,R=x.yoffset,C=x.xadvance;T/=h,w/=h,y/=h,S/=h,g/=h,R/=h,C/=h;var I=new pt(T+f[m].frame.x/h,w+f[m].frame.y/h,y,S);this.chars[_]={xOffset:g,yOffset:R,xAdvance:C,kerning:{},texture:new at(f[m].baseTexture,I),page:m}}for(var c=0;c<e.kerning.length;c++){var U=e.kerning[c],M=U.first,z=U.second,V=U.amount;M/=h,z/=h,V/=h,this.chars[z]&&(this.chars[z].kerning[M]=V)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(o=(n=l==null?void 0:l.fieldType)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"none"}return i.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},i.install=function(e,t,r){var n;if(e instanceof jn)n=e;else{var o=gc(e);if(!o)throw new Error("Unrecognized data format for font.");n=o.parse(e)}t instanceof at&&(t=[t]);var a=new i(n,t,r);return i.available[a.font]=a,a},i.uninstall=function(e){var t=i.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete i.available[e]},i.from=function(e,t,r){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var n=Object.assign({},i.defaultOptions,r),o=n.chars,a=n.padding,s=n.resolution,u=n.textureWidth,l=n.textureHeight,h=vx(o),f=t instanceof ii?t:new ii(t),c=u,d=new jn;d.info[0]={face:f.fontFamily,size:f.fontSize},d.common[0]={lineHeight:f.fontSize};for(var _=0,p=0,v,m,x,T=0,w=[],y=0;y<h.length;y++){v||(v=W.ADAPTER.createCanvas(),v.width=u,v.height=l,m=v.getContext("2d"),x=new dt(v,{resolution:s}),w.push(new at(x)),d.page.push({id:w.length-1,file:""}));var S=h[y],g=Fe.measureText(S,f,!1,v),R=g.width,C=Math.ceil(g.height),I=Math.ceil((f.fontStyle==="italic"?2:1)*R);if(p>=l-C*s){if(p===0)throw new Error("[BitmapFont] textureHeight "+l+"px is too small "+("(fontFamily: '"+f.fontFamily+"', fontSize: "+f.fontSize+"px, char: '"+S+"')"));--y,v=null,m=null,x=null,p=0,_=0,T=0;continue}if(T=Math.max(C+g.fontProperties.descent,T),I*s+_>=c){if(_===0)throw new Error("[BitmapFont] textureWidth "+u+"px is too small "+("(fontFamily: '"+f.fontFamily+"', fontSize: "+f.fontSize+"px, char: '"+S+"')"));--y,p+=T*s,p=Math.ceil(p),_=0,T=0;continue}px(v,m,g,_,p,s,f);var U=Cn(g.text);d.char.push({id:U,page:w.length-1,x:_/s,y:p/s,width:I,height:C,xoffset:0,yoffset:0,xadvance:Math.ceil(R-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0))}),_+=(I+2*a)*s,_=Math.ceil(_)}if(!(r!=null&&r.skipKerning))for(var y=0,M=h.length;y<M;y++)for(var z=h[y],V=0;V<M;V++){var G=h[V],b=m.measureText(z).width,P=m.measureText(G).width,E=m.measureText(z+G).width,F=E-(b+P);F&&d.kerning.push({first:Cn(z),second:Cn(G),amount:F})}var A=new i(d,w,!0);return i.available[e]!==void 0&&i.uninstall(e),i.available[e]=A,A},i.ALPHA=[["a","z"],["A","Z"]," "],i.NUMERIC=[["0","9"]],i.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],i.ASCII=[[" ","~"]],i.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:i.ALPHANUMERIC},i.available={},i}(),_x=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,mx=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,rf=[],nf=[],of=[];(function(i){hx(e,i);function e(t,r){r===void 0&&(r={});var n=i.call(this)||this;n._tint=16777215;var o=Object.assign({},e.styleDefaults,r),a=o.align,s=o.tint,u=o.maxWidth,l=o.letterSpacing,h=o.fontName,f=o.fontSize;if(!Je.available[h])throw new Error('Missing BitmapFont "'+h+'"');return n._activePagesMeshData=[],n._textWidth=0,n._textHeight=0,n._align=a,n._tint=s,n._font=void 0,n._fontName=h,n._fontSize=f,n.text=t,n._maxWidth=u,n._maxLineHeight=0,n._letterSpacing=l,n._anchor=new Pr(function(){n.dirty=!0},n,0,0),n._roundPixels=W.ROUND_PIXELS,n.dirty=!0,n._resolution=W.RESOLUTION,n._autoResolution=!0,n._textureCache={},n}return e.prototype.updateText=function(){for(var t,r=Je.available[this._fontName],n=this.fontSize,o=n/r.size,a=new ht,s=[],u=[],l=[],h=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",f=xc(h),c=this._maxWidth*r.size/n,d=r.distanceFieldType==="none"?rf:nf,_=null,p=0,v=0,m=0,x=-1,T=0,w=0,y=0,S=0,g=0;g<f.length;g++){var R=f[g],C=Cn(R);if(/(?:\s)/.test(R)&&(x=g,T=p,S++),R==="\r"||R===`
`){u.push(p),l.push(-1),v=Math.max(v,p),++m,++w,a.x=0,a.y+=r.lineHeight,_=null,S=0;continue}var I=r.chars[C];if(I){_&&I.kerning[_]&&(a.x+=I.kerning[_]);var U=of.pop()||{texture:at.EMPTY,line:0,charCode:0,prevSpaces:0,position:new ht};U.texture=I.texture,U.line=m,U.charCode=C,U.position.x=a.x+I.xOffset+this._letterSpacing/2,U.position.y=a.y+I.yOffset,U.prevSpaces=S,s.push(U),p=U.position.x+Math.max(I.xAdvance-I.xOffset,I.texture.orig.width),a.x+=I.xAdvance+this._letterSpacing,y=Math.max(y,I.yOffset+I.texture.height),_=C,x!==-1&&c>0&&a.x>c&&(++w,Zr(s,1+x-w,1+g-x),g=x,x=-1,u.push(T),l.push(s.length>0?s[s.length-1].prevSpaces:0),v=Math.max(v,T),m++,a.x=0,a.y+=r.lineHeight,_=null,S=0)}}var M=f[f.length-1];M!=="\r"&&M!==`
`&&(/(?:\s)/.test(M)&&(p=T),u.push(p),v=Math.max(v,p),l.push(-1));for(var z=[],g=0;g<=m;g++){var V=0;this._align==="right"?V=v-u[g]:this._align==="center"?V=(v-u[g])/2:this._align==="justify"&&(V=l[g]<0?0:(v-u[g])/l[g]),z.push(V)}var G=s.length,b={},P=[],E=this._activePagesMeshData;d.push.apply(d,E);for(var g=0;g<G;g++){var F=s[g].texture,A=F.baseTexture.uid;if(!b[A]){var O=d.pop();if(!O){var N=new ro,D=void 0,k=void 0;r.distanceFieldType==="none"?(D=new Bi(at.EMPTY),k=rt.NORMAL):(D=new Bi(at.EMPTY,{program:qi.from(mx,_x),uniforms:{uFWidth:0}}),k=rt.NORMAL_NPM);var j=new Ni(N,D);j.blendMode=k,O={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:j,vertices:null,uvs:null,indices:null}}O.index=0,O.indexCount=0,O.vertexCount=0,O.uvsCount=0,O.total=0;var Y=this._textureCache;Y[A]=Y[A]||new at(F.baseTexture),O.mesh.texture=Y[A],O.mesh.tint=this._tint,P.push(O),b[A]=O}b[A].total++}for(var g=0;g<E.length;g++)P.indexOf(E[g])===-1&&this.removeChild(E[g].mesh);for(var g=0;g<P.length;g++)P[g].mesh.parent!==this&&this.addChild(P[g].mesh);this._activePagesMeshData=P;for(var g in b){var O=b[g],$=O.total;if(!(((t=O.indices)===null||t===void 0?void 0:t.length)>6*$)||O.vertices.length<Ni.BATCHABLE_SIZE*2)O.vertices=new Float32Array(4*2*$),O.uvs=new Float32Array(4*2*$),O.indices=new Uint16Array(6*$);else for(var Q=O.total,tt=O.vertices,X=Q*4*2;X<tt.length;X++)tt[X]=0;O.mesh.size=6*$}for(var g=0;g<G;g++){var R=s[g],K=R.position.x+z[R.line]*(this._align==="justify"?R.prevSpaces:1);this._roundPixels&&(K=Math.round(K));var J=K*o,ot=R.position.y*o,F=R.texture,et=b[F.baseTexture.uid],Z=F.frame,q=F._uvs,nt=et.index++;et.indices[nt*6+0]=0+nt*4,et.indices[nt*6+1]=1+nt*4,et.indices[nt*6+2]=2+nt*4,et.indices[nt*6+3]=0+nt*4,et.indices[nt*6+4]=2+nt*4,et.indices[nt*6+5]=3+nt*4,et.vertices[nt*8+0]=J,et.vertices[nt*8+1]=ot,et.vertices[nt*8+2]=J+Z.width*o,et.vertices[nt*8+3]=ot,et.vertices[nt*8+4]=J+Z.width*o,et.vertices[nt*8+5]=ot+Z.height*o,et.vertices[nt*8+6]=J,et.vertices[nt*8+7]=ot+Z.height*o,et.uvs[nt*8+0]=q.x0,et.uvs[nt*8+1]=q.y0,et.uvs[nt*8+2]=q.x1,et.uvs[nt*8+3]=q.y1,et.uvs[nt*8+4]=q.x2,et.uvs[nt*8+5]=q.y2,et.uvs[nt*8+6]=q.x3,et.uvs[nt*8+7]=q.y3}this._textWidth=v*o,this._textHeight=(a.y+r.lineHeight)*o;for(var g in b){var O=b[g];if(this.anchor.x!==0||this.anchor.y!==0)for(var bt=0,te=this._textWidth*this.anchor.x,ee=this._textHeight*this.anchor.y,$t=0;$t<O.total;$t++)O.vertices[bt++]-=te,O.vertices[bt++]-=ee,O.vertices[bt++]-=te,O.vertices[bt++]-=ee,O.vertices[bt++]-=te,O.vertices[bt++]-=ee,O.vertices[bt++]-=te,O.vertices[bt++]-=ee;this._maxLineHeight=y*o;var De=O.mesh.geometry.getBuffer("aVertexPosition"),Ne=O.mesh.geometry.getBuffer("aTextureCoord"),Be=O.mesh.geometry.getIndex();De.data=O.vertices,Ne.data=O.uvs,Be.data=O.indices,De.update(),Ne.update(),Be.update()}for(var g=0;g<s.length;g++)of.push(s[g]);this._font=r,this.dirty=!1},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0);var r=Je.available[this._fontName],n=r.distanceFieldRange,o=r.distanceFieldType,a=r.size;if(o!=="none")for(var s=this.worldTransform,u=s.a,l=s.b,h=s.c,f=s.d,c=Math.sqrt(u*u+l*l),d=Math.sqrt(h*h+f*f),_=(Math.abs(c)+Math.abs(d))/2,p=this.fontSize/a,v=0,m=this._activePagesMeshData;v<m.length;v++){var x=m[v];x.mesh.shader.uniforms.uFWidth=_*n*p*this._resolution}i.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(){return this.validate(),i.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){var t=Je.available[this._fontName];if(!t)throw new Error('Missing BitmapFont "'+this._fontName+'"');this._font!==t&&(this.dirty=!0),this.dirty&&this.updateText()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var r=0;r<this._activePagesMeshData.length;r++)this._activePagesMeshData[r].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!Je.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){var t;return(t=this._fontSize)!==null&&t!==void 0?t:Je.available[this._fontName].size},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t??""),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var r=this._textureCache,n=Je.available[this._fontName],o=n.distanceFieldType==="none"?rf:nf;o.push.apply(o,this._activePagesMeshData);for(var a=0,s=this._activePagesMeshData;a<s.length;a++){var u=s[a];this.removeChild(u.mesh)}this._activePagesMeshData=[],o.filter(function(f){return r[f.mesh.texture.baseTexture.uid]}).forEach(function(f){f.mesh.texture=at.EMPTY});for(var l in r){var h=r[l];h.destroy(),delete r[l]}this._font=null,this._textureCache=null,i.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e})(Se);var yx=function(){function i(){}return i.add=function(){At.setExtensionXhrType("fnt",At.XHR_RESPONSE_TYPE.TEXT)},i.use=function(e,t){var r=gc(e.data);if(!r){t();return}for(var n=i.getBaseUrl(this,e),o=r.parse(e.data),a={},s=function(p){a[p.metadata.pageFile]=p.texture,Object.keys(a).length===o.page.length&&(e.bitmapFont=Je.install(o,a,!0),t())},u=0;u<o.page.length;++u){var l=o.page[u].file,h=n+l,f=!1;for(var c in this.resources){var d=this.resources[c];if(d.url===h){d.metadata.pageFile=l,d.texture?s(d):d.onAfterMiddleware.add(s),f=!0;break}}if(!f){var _={crossOrigin:e.crossOrigin,loadType:At.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},e.metadata.imageMetadata),parentResource:e};this.add(h,_,s)}}},i.getBaseUrl=function(e,t){var r=t.isDataUrl?"":i.dirname(t.url);return t.isDataUrl&&(r==="."&&(r=""),e.baseUrl&&r&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(r+="/")),r=r.replace(e.baseUrl,""),r&&r.charAt(r.length-1)!=="/"&&(r+="/"),r},i.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},i.extension=mt.Loader,i}();/*!
 * @pixi/filter-alpha - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ts=function(i,e){return Ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Ts(i,e)};function gx(i,e){Ts(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xx=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,bx=function(i){gx(e,i);function e(t){t===void 0&&(t=1);var r=i.call(this,cg,xx,{uAlpha:1})||this;return r.alpha=t,r}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(st);/*!
 * @pixi/filter-blur - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ss=function(i,e){return Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Ss(i,e)};function bc(i,e){Ss(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tx=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Sx(i,e){var t=Math.ceil(i/2),r=Tx,n="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<i;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),n+=s,n+=`
`}return r=r.replace("%blur%",n),r=r.replace("%size%",i.toString()),r}var Ex={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},wx=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function Px(i){for(var e=Ex[i],t=e.length,r=wx,n="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<i;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=i-s-1),u=u.replace("%value%",e[a].toString()),n+=u,n+=`
`}return r=r.replace("%blur%",n),r=r.replace("%size%",i.toString()),r}var zn=function(i){bc(e,i);function e(t,r,n,o,a){r===void 0&&(r=8),n===void 0&&(n=4),o===void 0&&(o=W.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=Sx(a,t),l=Px(a);return s=i.call(this,u,l)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=n,s.blur=r,s}return e.prototype.apply=function(t,r,n,o){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/r.width):this.uniforms.strength=1/n.height*(n.height/r.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/r.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/r.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,r,n,o);else{var a=t.getFilterTexture(),s=t.renderer,u=r,l=a;this.state.blend=!1,t.applyFilter(this,u,l,ye.CLEAR);for(var h=1;h<this.passes-1;h++){t.bindAndClear(u,ye.BLIT),this.uniforms.uSampler=l;var f=l;l=u,u=f,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,n,o),t.returnFilterTexture(a)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(st);(function(i){bc(e,i);function e(t,r,n,o){t===void 0&&(t=8),r===void 0&&(r=4),n===void 0&&(n=W.FILTER_RESOLUTION),o===void 0&&(o=5);var a=i.call(this)||this;return a.blurXFilter=new zn(!0,t,r,n,o),a.blurYFilter=new zn(!1,t,r,n,o),a.resolution=n,a.quality=r,a.blur=t,a.repeatEdgePixels=!1,a}return e.prototype.apply=function(t,r,n,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,r,u,ye.CLEAR),this.blurYFilter.apply(t,u,n,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,r,n,o):this.blurXFilter.apply(t,r,n,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-color-matrix - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Es=function(i,e){return Es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Es(i,e)};function Cx(i,e){Es(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ox=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,af=function(i){Cx(e,i);function e(){var t=this,r={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=i.call(this,uc,Ox,r)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,r){r===void 0&&(r=!1);var n=t;r&&(this._multiply(n,this.uniforms.m,t),n=this._colorMatrix(n)),this.uniforms.m=n},e.prototype._multiply=function(t,r,n){return t[0]=r[0]*n[0]+r[1]*n[5]+r[2]*n[10]+r[3]*n[15],t[1]=r[0]*n[1]+r[1]*n[6]+r[2]*n[11]+r[3]*n[16],t[2]=r[0]*n[2]+r[1]*n[7]+r[2]*n[12]+r[3]*n[17],t[3]=r[0]*n[3]+r[1]*n[8]+r[2]*n[13]+r[3]*n[18],t[4]=r[0]*n[4]+r[1]*n[9]+r[2]*n[14]+r[3]*n[19]+r[4],t[5]=r[5]*n[0]+r[6]*n[5]+r[7]*n[10]+r[8]*n[15],t[6]=r[5]*n[1]+r[6]*n[6]+r[7]*n[11]+r[8]*n[16],t[7]=r[5]*n[2]+r[6]*n[7]+r[7]*n[12]+r[8]*n[17],t[8]=r[5]*n[3]+r[6]*n[8]+r[7]*n[13]+r[8]*n[18],t[9]=r[5]*n[4]+r[6]*n[9]+r[7]*n[14]+r[8]*n[19]+r[9],t[10]=r[10]*n[0]+r[11]*n[5]+r[12]*n[10]+r[13]*n[15],t[11]=r[10]*n[1]+r[11]*n[6]+r[12]*n[11]+r[13]*n[16],t[12]=r[10]*n[2]+r[11]*n[7]+r[12]*n[12]+r[13]*n[17],t[13]=r[10]*n[3]+r[11]*n[8]+r[12]*n[13]+r[13]*n[18],t[14]=r[10]*n[4]+r[11]*n[9]+r[12]*n[14]+r[13]*n[19]+r[14],t[15]=r[15]*n[0]+r[16]*n[5]+r[17]*n[10]+r[18]*n[15],t[16]=r[15]*n[1]+r[16]*n[6]+r[17]*n[11]+r[18]*n[16],t[17]=r[15]*n[2]+r[16]*n[7]+r[17]*n[12]+r[18]*n[17],t[18]=r[15]*n[3]+r[16]*n[8]+r[17]*n[13]+r[18]*n[18],t[19]=r[15]*n[4]+r[16]*n[9]+r[17]*n[14]+r[18]*n[19]+r[19],t},e.prototype._colorMatrix=function(t){var r=new Float32Array(t);return r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,r},e.prototype.brightness=function(t,r){var n=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(n,r)},e.prototype.tint=function(t,r){var n=t>>16&255,o=t>>8&255,a=t&255,s=[n/255,0,0,0,0,0,o/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(s,r)},e.prototype.greyscale=function(t,r){var n=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(n,r)},e.prototype.blackAndWhite=function(t){var r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.hue=function(t,r){t=(t||0)/180*Math.PI;var n=Math.cos(t),o=Math.sin(t),a=Math.sqrt,s=1/3,u=a(s),l=n+(1-n)*s,h=s*(1-n)-u*o,f=s*(1-n)+u*o,c=s*(1-n)+u*o,d=n+s*(1-n),_=s*(1-n)-u*o,p=s*(1-n)-u*o,v=s*(1-n)+u*o,m=n+s*(1-n),x=[l,h,f,0,0,c,d,_,0,0,p,v,m,0,0,0,0,0,1,0];this._loadMatrix(x,r)},e.prototype.contrast=function(t,r){var n=(t||0)+1,o=-.5*(n-1),a=[n,0,0,0,o,0,n,0,0,o,0,0,n,0,o,0,0,0,1,0];this._loadMatrix(a,r)},e.prototype.saturate=function(t,r){t===void 0&&(t=0);var n=t*2/3+1,o=(n-1)*-.5,a=[n,o,o,0,0,o,n,o,0,0,o,o,n,0,0,0,0,0,1,0];this._loadMatrix(a,r)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.sepia=function(t){var r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.technicolor=function(t){var r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.polaroid=function(t){var r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.toBGR=function(t){var r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.kodachrome=function(t){var r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.browni=function(t){var r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.vintage=function(t){var r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.colorTone=function(t,r,n,o,a){t=t||.2,r=r||.15,n=n||16770432,o=o||3375104;var s=(n>>16&255)/255,u=(n>>8&255)/255,l=(n&255)/255,h=(o>>16&255)/255,f=(o>>8&255)/255,c=(o&255)/255,d=[.3,.59,.11,0,0,s,u,l,t,0,h,f,c,r,0,s-h,u-f,l-c,0,0];this._loadMatrix(d,a)},e.prototype.night=function(t,r){t=t||.1;var n=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(n,r)},e.prototype.predator=function(t,r){var n=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(n,r)},e.prototype.lsd=function(t){var r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(st);af.prototype.grayscale=af.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ws=function(i,e){return ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},ws(i,e)};function Ax(i,e){ws(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Rx=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,Ix=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;(function(i){Ax(e,i);function e(t,r){var n=this,o=new Lt;return t.renderable=!1,n=i.call(this,Ix,Rx,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,n.maskSprite=t,n.maskMatrix=o,r==null&&(r=20),n.scale=new ht(r,r),n}return e.prototype.apply=function(t,r,n,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,s=Math.sqrt(a.a*a.a+a.b*a.b),u=Math.sqrt(a.c*a.c+a.d*a.d);s!==0&&u!==0&&(this.uniforms.rotation[0]=a.a/s,this.uniforms.rotation[1]=a.b/s,this.uniforms.rotation[2]=a.c/u,this.uniforms.rotation[3]=a.d/u),t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-fxaa - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ps=function(i,e){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Ps(i,e)};function Mx(i,e){Ps(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Fx=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,Dx=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;(function(i){Mx(e,i);function e(){return i.call(this,Fx,Dx)||this}return e})(st);/*!
 * @pixi/filter-noise - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cs=function(i,e){return Cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Cs(i,e)};function Nx(i,e){Cs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bx=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;(function(i){Nx(e,i);function e(t,r){t===void 0&&(t=.5),r===void 0&&(r=Math.random());var n=i.call(this,uc,Bx,{uNoise:0,uSeed:0})||this;return n.noise=t,n.seed=r,n}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Tc=new Lt;Mt.prototype._cacheAsBitmap=!1;Mt.prototype._cacheData=null;Mt.prototype._cacheAsBitmapResolution=null;Mt.prototype._cacheAsBitmapMultisample=St.NONE;var Lx=function(){function i(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return i}();Object.defineProperties(Mt.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(i){i!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(i){i!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=i,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(i){if(this._cacheAsBitmap!==i){this._cacheAsBitmap=i;var e;i?(this._cacheData||(this._cacheData=new Lx),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});Mt.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};Mt.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var r=this.alpha;this.alpha=1,e.batch.flush();var n=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;n.pad(o)}n.ceil(W.RESOLUTION);var a=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),l=e.projection.transform,h=Lr.create({width:n.width,height:n.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),f="cacheAsBitmap_"+Nr();this._cacheData.textureCacheId=f,dt.addToCache(h.baseTexture,f),at.addToCache(h,f);var c=this.transform.localTransform.copyTo(Tc).invert().translate(-n.x,-n.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:h,clear:!0,transform:c,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=l,e.renderTexture.bind(a,s,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;var d=new ur(h);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(n.x/n.width),d.anchor.y=-(n.y/n.height),d.alpha=r,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};Mt.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};Mt.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),r=this.alpha;this.alpha=1;var n=e.context,o=e._projTransform;t.ceil(W.RESOLUTION);var a=Lr.create({width:t.width,height:t.height}),s="cacheAsBitmap_"+Nr();this._cacheData.textureCacheId=s,dt.addToCache(a.baseTexture,s),at.addToCache(a,s);var u=Tc;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:a,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=n,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;var l=new ur(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(t.x/t.width),l.anchor.y=-(t.y/t.height),l.alpha=r,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};Mt.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};Mt.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};Mt.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,dt.removeFromCache(this._cacheData.textureCacheId),at.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};Mt.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Mt.prototype.name=null;Se.prototype.getChildByName=function(e,t){for(var r=0,n=this.children.length;r<n;r++)if(this.children[r].name===e)return this.children[r];if(t)for(var r=0,n=this.children.length;r<n;r++){var o=this.children[r];if(o.getChildByName){var a=o.getChildByName(e,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Mt.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new ht),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/app - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ux=function(){function i(){}return i.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(r){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=r,r&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){t._resizeTo&&(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(t._resizeTo){t.cancelResize();var r,n;if(t._resizeTo===globalThis.window)r=globalThis.innerWidth,n=globalThis.innerHeight;else{var o=t._resizeTo,a=o.clientWidth,s=o.clientHeight;r=a,n=s}t.renderer.resize(r,n)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},i.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},i.extension=mt.Application,i}(),Sc=function(){function i(e){var t=this;this.stage=new Se,e=Object.assign({forceCanvas:!1},e),this.renderer=lg(e),i._plugins.forEach(function(r){r.init.call(t,e)})}return i.registerPlugin=function(e){xe("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),qe.add({type:mt.Application,ref:e})},i.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(i.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),i.prototype.destroy=function(e,t){var r=this,n=i._plugins.slice(0);n.reverse(),n.forEach(function(o){o.destroy.call(r)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},i._plugins=[],i}();qe.handleByList(mt.Application,Sc._plugins);qe.add(Ux);/*!
 * @pixi/mesh-extras - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Os=function(i,e){return Os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},Os(i,e)};function fi(i,e){Os(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var kx=function(i){fi(e,i);function e(t,r,n,o){t===void 0&&(t=100),r===void 0&&(r=100),n===void 0&&(n=10),o===void 0&&(o=10);var a=i.call(this)||this;return a.segWidth=n,a.segHeight=o,a.width=t,a.height=r,a.build(),a}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,r=[],n=[],o=[],a=this.segWidth-1,s=this.segHeight-1,u=this.width/a,l=this.height/s,h=0;h<t;h++){var f=h%this.segWidth,c=h/this.segWidth|0;r.push(f*u,c*l),n.push(f/a,c/s)}for(var d=a*s,h=0;h<d;h++){var _=h%a,p=h/a|0,v=p*this.segWidth+_,m=p*this.segWidth+_+1,x=(p+1)*this.segWidth+_,T=(p+1)*this.segWidth+_+1;o.push(v,m,x,m,T,x)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(ro),Gx=function(i){fi(e,i);function e(t,r,n){t===void 0&&(t=200),n===void 0&&(n=0);var o=i.call(this,new Float32Array(r.length*4),new Float32Array(r.length*4),new Uint16Array((r.length-1)*6))||this;return o.points=r,o._width=t,o.textureScale=n,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(t){var r=this.getBuffer("aVertexPosition"),n=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){r.data.length/4!==t.length&&(r.data=new Float32Array(t.length*4),n.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var a=n.data,s=o.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var u=0,l=t[0],h=this._width*this.textureScale,f=t.length,c=0;c<f;c++){var d=c*4;if(this.textureScale>0){var _=l.x-t[c].x,p=l.y-t[c].y,v=Math.sqrt(_*_+p*p);l=t[c],u+=v/h}else u=c/(f-1);a[d]=u,a[d+1]=0,a[d+2]=u,a[d+3]=1}for(var m=0,c=0;c<f-1;c++){var d=c*2;s[m++]=d,s[m++]=d+1,s[m++]=d+2,s[m++]=d+2,s[m++]=d+1,s[m++]=d+3}n.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var r=t[0],n,o=0,a=0,s=this.buffers[0].data,u=t.length,l=0;l<u;l++){var h=t[l],f=l*4;l<t.length-1?n=t[l+1]:n=h,a=-(n.x-r.x),o=n.y-r.y;var c=Math.sqrt(o*o+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=c,a/=c,o*=d,a*=d,s[f]=h.x+o,s[f+1]=h.y+a,s[f+2]=h.x-o,s[f+3]=h.y-a,r=h}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(ro);(function(i){fi(e,i);function e(t,r,n){n===void 0&&(n=0);var o=this,a=new Gx(t.height,r,n),s=new Bi(t);return n>0&&(t.baseTexture.wrapMode=Oe.REPEAT),o=i.call(this,a,s)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var r=this.geometry;(this.autoUpdate||r._width!==this.shader.texture.height)&&(r._width=this.shader.texture.height,r.update()),i.prototype._render.call(this,t)},e})(Ni);var jx=function(i){fi(e,i);function e(t,r,n){var o=this,a=new kx(t.width,t.height,r,n),s=new Bi(at.WHITE);return o=i.call(this,a,s)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,r=this.shader.texture,n=r.width,o=r.height;this.autoResize&&(t.width!==n||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),i.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),i.prototype.destroy.call(this,t)},e}(Ni);(function(i){fi(e,i);function e(t,r,n,o,a){t===void 0&&(t=at.EMPTY);var s=this,u=new ro(r,n,o);u.getBuffer("aVertexPosition").static=!1;var l=new Bi(t);return s=i.call(this,u,l,null,a)||this,s.autoUpdate=!0,s}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),i.prototype._render.call(this,t)},e})(Ni);var En=10;(function(i){fi(e,i);function e(t,r,n,o,a){r===void 0&&(r=En),n===void 0&&(n=En),o===void 0&&(o=En),a===void 0&&(a=En);var s=i.call(this,at.WHITE,4,4)||this;return s._origWidth=t.orig.width,s._origHeight=t.orig.height,s._width=s._origWidth,s._height=s._origHeight,s._leftWidth=r,s._rightWidth=o,s._topHeight=n,s._bottomHeight=a,s.texture=t,s}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,r=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*r,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*r,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,r=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*r,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*r,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,r=this._width>t?1:this._width/t,n=this._topHeight+this._bottomHeight,o=this._height>n?1:this._height/n,a=Math.min(r,o);return a},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,r=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var n=1/this._origWidth,o=1/this._origHeight;r[0]=r[8]=r[16]=r[24]=0,r[1]=r[3]=r[5]=r[7]=0,r[6]=r[14]=r[22]=r[30]=1,r[25]=r[27]=r[29]=r[31]=1,r[2]=r[10]=r[18]=r[26]=n*this._leftWidth,r[4]=r[12]=r[20]=r[28]=1-n*this._rightWidth,r[9]=r[11]=r[13]=r[15]=o*this._topHeight,r[17]=r[19]=r[21]=r[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e})(jx);/*!
 * @pixi/sprite-animated - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var As=function(i,e){return As=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},As(i,e)};function zx(i,e){As(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(i){zx(e,i);function e(t,r){r===void 0&&(r=!0);var n=i.call(this,t[0]instanceof at?t[0]:t[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=r,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=t,n}return e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(jt.shared.add(this.update,this,We.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var r=this.currentFrame;this._currentTime=t,r!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var r=this.currentFrame;this._currentTime=t,r!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(this._playing){var r=this.animationSpeed*t,n=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=r/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=r;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n?this.onLoop():this.animationSpeed<0&&this.currentFrame>n&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),i.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(at.from(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(at.from(t[n]));return new e(r)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof at)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var r=0;r<t.length;r++)this._textures.push(t[r].texture),this._durations.push(t[r].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(jt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e})(ur);/*!
 * pixi.js - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */qe.add(Sg,Ig,Og,S0,Q0,hc,ax,yx,$g,g0,x0,tx,jm,kg);const Xx=""+new URL("../bg-1.webp",import.meta.url).href,Hx=""+new URL("../wheel.webp",import.meta.url).href,Vx=""+new URL("../btn-roll.webp",import.meta.url).href,Wx=""+new URL("../arrow.webp",import.meta.url).href;class io{static load(){const e=new Error("Problem with assets");return new Promise((t,r)=>{this.loader.add("bg",Xx).add("wheel",Hx).add("btnRoll",Vx).add("arrow",Wx).load(()=>t()).onError.add(()=>r(e.message))})}static getTexture(e){const t=this.loader.resources[e];if(!t||!t.texture)throw new Error(`Texture "${e}" not found or not loaded`);return t.texture}}ct(io,"loader",Mi.shared);function Ge(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ec(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ue={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ni={duration:.5,overwrite:!1,delay:0},Fu,zt,Et,Re=1e8,Vt=1/Re,Rs=Math.PI*2,Yx=Rs/4,$x=0,wc=Math.sqrt,qx=Math.cos,Kx=Math.sin,kt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Ye=function(e){return typeof e=="number"},Du=function(e){return typeof e>"u"},Me=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Nu=function(){return typeof window<"u"},wn=function(e){return Rt(e)||kt(e)},Pc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Is=/(?:-?\.?\d|\.)+/gi,Cc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Oc=/[+-]=-?[.\d]+/,Ac=/[^,'"\[\]\s]+/gi,Zx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Ee,Ms,Bu,he={},Xn={},Rc,Ic=function(e){return(Xn=oi(e,he))&&Jt},Lu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Li=function(e,t){return!t&&console.warn(e)},Mc=function(e,t){return e&&(he[e]=t)&&Xn&&(Xn[e]=t)||he},Ui=function(){return 0},Qx={suppressEvents:!0,isStart:!0,kill:!1},On={suppressEvents:!0,kill:!1},Jx={suppressEvents:!0},Uu={},or=[],Fs={},Fc,ie={},Ha={},sf=30,An=[],ku="",Gu=function(e){var t=e[0],r,n;if(Me(t)||Rt(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(n=An.length;n--&&!An[n].targetTest(t););r=An[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new id(e[n],r)))||e.splice(n,1);return e},Ir=function(e){return e._gsap||Gu(de(e))[0]._gsap},Dc=function(e,t,r){return(r=e[t])&&Rt(r)?e[t]():Du(r)&&e.getAttribute&&e.getAttribute(t)||r},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Jr=function(e,t){var r=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+n:r==="-"?e-n:r==="*"?e*n:e/n},tb=function(e,t){for(var r=t.length,n=0;e.indexOf(t[n])<0&&++n<r;);return n<r},Hn=function(){var e=or.length,t=or.slice(0),r,n;for(Fs={},or.length=0,r=0;r<e;r++)n=t[r],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Nc=function(e,t,r,n){or.length&&!zt&&Hn(),e.render(t,r,zt&&t<0&&(e._initted||e._startAt)),or.length&&!zt&&Hn()},Bc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ac).length<2?t:kt(e)?e.trim():e},Lc=function(e){return e},fe=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},eb=function(e){return function(t,r){for(var n in r)n in t||n==="duration"&&e||n==="ease"||(t[n]=r[n])}},oi=function(e,t){for(var r in t)e[r]=t[r];return e},uf=function i(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Me(t[r])?i(e[r]||(e[r]={}),t[r]):t[r]);return e},Vn=function(e,t){var r={},n;for(n in e)n in t||(r[n]=e[n]);return r},Pi=function(e){var t=e.parent||Pt,r=e.keyframes?eb(Wt(e.keyframes)):fe;if(qt(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},rb=function(e,t){for(var r=e.length,n=r===t.length;n&&r--&&e[r]===t[r];);return r<0},Uc=function(e,t,r,n,o){var a=e[n],s;if(o)for(s=t[o];a&&a[o]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},no=function(e,t,r,n){r===void 0&&(r="_first"),n===void 0&&(n="_last");var o=t._prev,a=t._next;o?o._next=a:e[r]===t&&(e[r]=a),a?a._prev=o:e[n]===t&&(e[n]=o),t._next=t._prev=t.parent=null},lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},ib=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ds=function(e,t,r,n){return e._startAt&&(zt?e._startAt.revert(On):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},nb=function i(e){return!e||e._ts&&i(e.parent)},lf=function(e){return e._repeat?ai(e._tTime,e=e.duration()+e._rDelay)*e:0},ai=function(e,t){var r=Math.floor(e=Nt(e/t));return e&&r===e?r-1:r},Wn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},oo=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},ao=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Nt(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),oo(e),r._dirty||Mr(r,e)),e},kc=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=Wn(e.rawTime(),t),(!t._dur||Ki(0,t.totalDuration(),r)-t._tTime>Vt)&&t.render(r,!0)),Mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},we=function(e,t,r,n){return t.parent&&lr(t),t._start=Nt((Ye(r)?r:r||e!==Pt?ce(e,r,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Uc(e,t,"_first","_last",e._sort?"_start":0),Ns(t)||(e._recent=t),n||kc(e,t),e._ts<0&&ao(e,e._tTime),e},Gc=function(e,t){return(he.ScrollTrigger||Lu("scrollTrigger",t))&&he.ScrollTrigger.create(t,e)},jc=function(e,t,r,n,o){if(zu(e,t,o),!e._initted)return 1;if(!r&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fc!==ne.frame)return or.push(e),e._lazy=[o,n],1},ob=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ns=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ab=function(e,t,r,n){var o=e.ratio,a=t<0||!t&&(!e._start&&ob(e)&&!(!e._initted&&Ns(e))||(e._ts<0||e._dp._ts<0)&&!Ns(e))?0:1,s=e._rDelay,u=0,l,h,f;if(s&&e._repeat&&(u=Ki(0,e._tDur,t),h=ai(u,s),e._yoyo&&h&1&&(a=1-a),h!==ai(e._tTime,s)&&(o=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==o||zt||n||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&jc(e,t,n,r,u))return;for(f=e._zTime,e._zTime=t||(r?Vt:0),r||(r=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Ds(e,t,r,!0),e._onUpdate&&!r&&se(e,"onUpdate"),u&&e._repeat&&!r&&e.parent&&se(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&lr(e,1),!r&&!zt&&(se(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sb=function(e,t,r){var n;if(r>t)for(n=e._first;n&&n._start<=r;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=r;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},si=function(e,t,r,n){var o=e._repeat,a=Nt(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=o?o<0?1e10:Nt(a*(o+1)+e._rDelay*o):a,s>0&&!n&&ao(e,e._tTime=e._tDur*s),e.parent&&oo(e),r||Mr(e.parent,e),e},hf=function(e){return e instanceof Yt?Mr(e):si(e,e._dur)},ub={_start:0,endTime:Ui,totalDuration:Ui},ce=function i(e,t,r){var n=e.labels,o=e._recent||ub,a=e.duration()>=Re?o.endTime(!1):e._dur,s,u,l;return kt(t)&&(isNaN(t)||t in n)?(u=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),u==="<"||u===">"?(s>=0&&(t=t.replace(/=/,"")),(u==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?o:r).totalDuration()/100:1)):s<0?(t in n||(n[t]=a),n[t]):(u=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&r&&(u=u/100*(Wt(r)?r[0]:r).totalDuration()),s>1?i(e,t.substr(0,s-1),r)+u:a+u)):t==null?a:+t},Ci=function(e,t,r){var n=Ye(t[1]),o=(n?2:1)+(e<2?0:1),a=t[o],s,u;if(n&&(a.duration=t[1]),a.parent=r,e){for(s=a,u=r;u&&!("immediateRender"in s);)s=u.vars.defaults||{},u=qt(u.vars.inherit)&&u.parent;a.immediateRender=qt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[o-1]}return new Dt(t[0],a,t[o+1])},fr=function(e,t){return e||e===0?t(e):t},Ki=function(e,t,r){return r<e?e:r>t?t:r},Ht=function(e,t){return!kt(e)||!(t=Zx.exec(e))?"":t[1]},lb=function(e,t,r){return fr(r,function(n){return Ki(e,t,n)})},Bs=[].slice,zc=function(e,t){return e&&Me(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Me(e[0]))&&!e.nodeType&&e!==Ee},hb=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(n){var o;return kt(n)&&!t||zc(n,1)?(o=r).push.apply(o,de(n)):r.push(n)})||r},de=function(e,t,r){return Et&&!t&&Et.selector?Et.selector(e):kt(e)&&!r&&(Ms||!ui())?Bs.call((t||Bu).querySelectorAll(e),0):Wt(e)?hb(e,r):zc(e)?Bs.call(e,0):e?[e]:[]},Ls=function(e){return e=de(e)[0]||Li("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return de(t,r.querySelectorAll?r:r===e?Li("Invalid scope")||Bu.createElement("div"):e)}},Xc=function(e){return e.sort(function(){return .5-Math.random()})},Hc=function(e){if(Rt(e))return e;var t=Me(e)?e:{each:e},r=Fr(t.ease),n=t.from||0,o=parseFloat(t.base)||0,a={},s=n>0&&n<1,u=isNaN(n)||s,l=t.axis,h=n,f=n;return kt(n)?h=f={center:.5,edges:.5,end:1}[n]||0:!s&&u&&(h=n[0],f=n[1]),function(c,d,_){var p=(_||t).length,v=a[p],m,x,T,w,y,S,g,R,C;if(!v){if(C=t.grid==="auto"?0:(t.grid||[1,Re])[1],!C){for(g=-1e8;g<(g=_[C++].getBoundingClientRect().left)&&C<p;);C<p&&C--}for(v=a[p]=[],m=u?Math.min(C,p)*h-.5:n%C,x=C===Re?0:u?p*f/C-.5:n/C|0,g=0,R=Re,S=0;S<p;S++)T=S%C-m,w=x-(S/C|0),v[S]=y=l?Math.abs(l==="y"?w:T):wc(T*T+w*w),y>g&&(g=y),y<R&&(R=y);n==="random"&&Xc(v),v.max=g-R,v.min=R,v.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(C>p?p-1:l?l==="y"?p/C:C:Math.max(C,p/C))||0)*(n==="edges"?-1:1),v.b=p<0?o-p:o,v.u=Ht(t.amount||t.each)||0,r=r&&p<0?td(r):r}return p=(v[c]-v.min)/v.max||0,Nt(v.b+(r?r(p):p)*v.v)+v.u}},Us=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var n=Nt(Math.round(parseFloat(r)/e)*e*t);return(n-n%1)/t+(Ye(r)?0:Ht(r))}},Vc=function(e,t){var r=Wt(e),n,o;return!r&&Me(e)&&(n=r=e.radius||Re,e.values?(e=de(e.values),(o=!Ye(e[0]))&&(n*=n)):e=Us(e.increment)),fr(t,r?Rt(e)?function(a){return o=e(a),Math.abs(o-a)<=n?o:a}:function(a){for(var s=parseFloat(o?a.x:a),u=parseFloat(o?a.y:0),l=Re,h=0,f=e.length,c,d;f--;)o?(c=e[f].x-s,d=e[f].y-u,c=c*c+d*d):c=Math.abs(e[f]-s),c<l&&(l=c,h=f);return h=!n||l<=n?e[h]:a,o||h===a||Ye(a)?h:h+Ht(a)}:Us(e))},Wc=function(e,t,r,n){return fr(Wt(e)?!t:r===!0?!!(r=0):!n,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*n)/n})},fb=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduce(function(o,a){return a(o)},n)}},cb=function(e,t){return function(r){return e(parseFloat(r))+(t||Ht(r))}},db=function(e,t,r){return $c(e,t,0,1,r)},Yc=function(e,t,r){return fr(r,function(n){return e[~~t(n)]})},pb=function i(e,t,r){var n=t-e;return Wt(e)?Yc(e,i(0,e.length),t):fr(r,function(o){return(n+(o-e)%n)%n+e})},vb=function i(e,t,r){var n=t-e,o=n*2;return Wt(e)?Yc(e,i(0,e.length-1),t):fr(r,function(a){return a=(o+(a-e)%o)%o||0,e+(a>n?o-a:a)})},ki=function(e){for(var t=0,r="",n,o,a,s;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),s=e.charAt(n+7)==="[",o=e.substr(n+7,a-n-7).match(s?Ac:Is),r+=e.substr(t,n-t)+Wc(s?o:+o[0],s?0:+o[1],+o[2]||1e-5),t=a+1;return r+e.substr(t,e.length-t)},$c=function(e,t,r,n,o){var a=t-e,s=n-r;return fr(o,function(u){return r+((u-e)/a*s||0)})},_b=function i(e,t,r,n){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var a=kt(e),s={},u,l,h,f,c;if(r===!0&&(n=1)&&(r=null),a)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(h=[],f=e.length,c=f-2,l=1;l<f;l++)h.push(i(e[l-1],e[l]));f--,o=function(_){_*=f;var p=Math.min(c,~~_);return h[p](_-p)},r=t}else n||(e=oi(Wt(e)?[]:{},e));if(!h){for(u in t)ju.call(s,e,u,"get",t[u]);o=function(_){return Vu(_,s)||(a?e.p:e)}}}return fr(r,o)},ff=function(e,t,r){var n=e.labels,o=Re,a,s,u;for(a in n)s=n[a]-t,s<0==!!r&&s&&o>(s=Math.abs(s))&&(u=a,o=s);return u},se=function(e,t,r){var n=e.vars,o=n[t],a=Et,s=e._ctx,u,l,h;if(o)return u=n[t+"Params"],l=n.callbackScope||e,r&&or.length&&Hn(),s&&(Et=s),h=u?o.apply(l,u):o.call(l),Et=a,h},Si=function(e){return lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&se(e,"onInterrupt"),e},Kr,qc=[],Kc=function(e){if(e)if(e=!e.name&&e.default||e,Nu()||e.headless){var t=e.name,r=Rt(e),n=t&&!r&&e.init?function(){this._props=[]}:e,o={init:Ui,render:Vu,add:ju,kill:Mb,modifier:Ib,rawVars:0},a={targetTest:0,get:0,getSetter:Hu,aliases:{},register:0};if(ui(),e!==n){if(ie[t])return;fe(n,fe(Vn(e,o),a)),oi(n.prototype,oi(o,Vn(e,a))),ie[n.prop=t]=n,e.targetTest&&(An.push(n),Uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mc(t,n),e.register&&e.register(Jt,n,Zt)}else qc.push(e)},yt=255,Ei={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Va=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*yt+.5|0},Zc=function(e,t,r){var n=e?Ye(e)?[e>>16,e>>8&yt,e&yt]:0:Ei.black,o,a,s,u,l,h,f,c,d,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ei[e])n=Ei[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+o+o+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&yt,n&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Is),!t)u=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,o=h*2-a,n.length>3&&(n[3]*=1),n[0]=Va(u+1/3,o,a),n[1]=Va(u,o,a),n[2]=Va(u-1/3,o,a);else if(~e.indexOf("="))return n=e.match(Cc),r&&n.length<4&&(n[3]=1),n}else n=e.match(Is)||Ei.transparent;n=n.map(Number)}return t&&!_&&(o=n[0]/yt,a=n[1]/yt,s=n[2]/yt,f=Math.max(o,a,s),c=Math.min(o,a,s),h=(f+c)/2,f===c?u=l=0:(d=f-c,l=h>.5?d/(2-f-c):d/(f+c),u=f===o?(a-s)/d+(a<s?6:0):f===a?(s-o)/d+2:(o-a)/d+4,u*=60),n[0]=~~(u+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),r&&n.length<4&&(n[3]=1),n},Qc=function(e){var t=[],r=[],n=-1;return e.split(ar).forEach(function(o){var a=o.match(qr)||[];t.push.apply(t,a),r.push(n+=a.length+1)}),t.c=r,t},cf=function(e,t,r){var n="",o=(e+n).match(ar),a=t?"hsla(":"rgba(",s=0,u,l,h,f;if(!o)return e;if(o=o.map(function(c){return(c=Zc(c,t,1))&&a+(t?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}),r&&(h=Qc(e),u=r.c,u.join(n)!==h.c.join(n)))for(l=e.replace(ar,"1").split(qr),f=l.length-1;s<f;s++)n+=l[s]+(~u.indexOf(s)?o.shift()||a+"0,0,0,0)":(h.length?h:o.length?o:r).shift());if(!l)for(l=e.split(ar),f=l.length-1;s<f;s++)n+=l[s]+o[s];return n+l[f]},ar=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ei)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),mb=/hsl[a]?\(/,Jc=function(e){var t=e.join(" "),r;if(ar.lastIndex=0,ar.test(t))return r=mb.test(t),e[1]=cf(e[1],r),e[0]=cf(e[0],r,Qc(e[1])),!0},Gi,ne=function(){var i=Date.now,e=500,t=33,r=i(),n=r,o=1e3/240,a=o,s=[],u,l,h,f,c,d,_=function p(v){var m=i()-n,x=v===!0,T,w,y,S;if((m>e||m<0)&&(r+=m-t),n+=m,y=n-r,T=y-a,(T>0||x)&&(S=++f.frame,c=y-f.time*1e3,f.time=y=y/1e3,a+=T+(T>=o?4:o-T),w=1),x||(u=l(p)),w)for(d=0;d<s.length;d++)s[d](y,c,S,v)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(v){return c/(1e3/(v||60))},wake:function(){Rc&&(!Ms&&Nu()&&(Ee=Ms=window,Bu=Ee.document||{},he.gsap=Jt,(Ee.gsapVersions||(Ee.gsapVersions=[])).push(Jt.version),Ic(Xn||Ee.GreenSockGlobals||!Ee.gsap&&Ee||{}),qc.forEach(Kc)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&f.sleep(),l=h||function(v){return setTimeout(v,a-f.time*1e3+1|0)},Gi=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(u),Gi=0,l=Ui},lagSmoothing:function(v,m){e=v||1/0,t=Math.min(m||33,e)},fps:function(v){o=1e3/(v||240),a=f.time*1e3+o},add:function(v,m,x){var T=m?function(w,y,S,g){v(w,y,S,g),f.remove(T)}:v;return f.remove(v),s[x?"unshift":"push"](T),ui(),T},remove:function(v,m){~(m=s.indexOf(v))&&s.splice(m,1)&&d>=m&&d--},_listeners:s},f}(),ui=function(){return!Gi&&ne.wake()},ft={},yb=/^[\d.\-M][\d.\-,\s]/,gb=/["']/g,xb=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),n=r[0],o=1,a=r.length,s,u,l;o<a;o++)u=r[o],s=o!==a-1?u.lastIndexOf(","):u.length,l=u.substr(0,s),t[n]=isNaN(l)?l.replace(gb,"").trim():+l,n=u.substr(s+1).trim();return t},bb=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<r?e.indexOf(")",r+1):r)},Tb=function(e){var t=(e+"").split("("),r=ft[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[xb(t[1])]:bb(e).split(",").map(Bc)):ft._CE&&yb.test(e)?ft._CE("",e):r},td=function(e){return function(t){return 1-e(1-t)}},ed=function i(e,t){for(var r=e._first,n;r;)r instanceof Yt?i(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?i(r.timeline,t):(n=r._ease,r._ease=r._yEase,r._yEase=n,r._yoyo=t)),r=r._next},Fr=function(e,t){return e&&(Rt(e)?e:ft[e]||Tb(e))||t},Gr=function(e,t,r,n){r===void 0&&(r=function(u){return 1-t(1-u)}),n===void 0&&(n=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var o={easeIn:t,easeOut:r,easeInOut:n},a;return Kt(e,function(s){ft[s]=he[s]=o,ft[a=s.toLowerCase()]=r;for(var u in o)ft[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=ft[s+"."+u]=o[u]}),o},rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wa=function i(e,t,r){var n=t>=1?t:1,o=(r||(e?.3:.45))/(t<1?t:1),a=o/Rs*(Math.asin(1/n)||0),s=function(h){return h===1?1:n*Math.pow(2,-10*h)*Kx((h-a)*o)+1},u=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:rd(s);return o=Rs/o,u.config=function(l,h){return i(e,l,h)},u},Ya=function i(e,t){t===void 0&&(t=1.70158);var r=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:rd(r);return n.config=function(o){return i(e,o)},n};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Gr(i+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Gr("Elastic",Wa("in"),Wa("out"),Wa());(function(i,e){var t=1/e,r=2*t,n=2.5*t,o=function(s){return s<t?i*s*s:s<r?i*Math.pow(s-1.5/e,2)+.75:s<n?i*(s-=2.25/e)*s+.9375:i*Math.pow(s-2.625/e,2)+.984375};Gr("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);Gr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Gr("Circ",function(i){return-(wc(1-i*i)-1)});Gr("Sine",function(i){return i===1?1:-qx(i*Yx)+1});Gr("Back",Ya("in"),Ya("out"),Ya());ft.SteppedEase=ft.steps=he.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,n=e+(t?0:1),o=t?1:0,a=1-Vt;return function(s){return((n*Ki(0,a,s)|0)+o)*r}}};ni.ease=ft["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ku+=i+","+i+"Params,"});var id=function(e,t){this.id=$x++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Dc,this.set=t?t.getSetter:Hu},ji=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,si(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Gi||ne.wake()}var e=i.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,si(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,n){if(ui(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ao(this,r),!o._dp||o.parent||kc(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&we(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Vt||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Nc(this,r,n)),this},e.time=function(r,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+lf(this))%(this._dur+this._rDelay)||(r?this._dur:0),n):this._time},e.totalProgress=function(r,n){return arguments.length?this.totalTime(this.totalDuration()*r,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+lf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,n){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,n):this._repeat?ai(this._tTime,o)+1:1},e.timeScale=function(r,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?Wn(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Ki(-Math.abs(this._delay),this._tDur,o),n!==!1),oo(this),ib(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ui(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&we(n,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(qt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var n=this.parent||this._dp;return n?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wn(n.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=Jx);var n=zt;return zt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),zt=n,this},e.globalTime=function(r){for(var n=this,o=arguments.length?r:n.rawTime();n;)o=n._start+o/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,hf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var n=this._time;return this._rDelay=r,hf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,n){return this.totalTime(ce(this,r),qt(n))},e.restart=function(r,n){return this.play().totalTime(r?-this._delay:0,qt(n)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,n){return r!=null&&this.seek(r,n),this.reversed(!1).paused(!1)},e.reverse=function(r,n){return r!=null&&this.seek(r||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(r,n){return r!=null&&this.seek(r,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,n=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=n&&o<this.endTime(!0)-Vt)},e.eventCallback=function(r,n,o){var a=this.vars;return arguments.length>1?(n?(a[r]=n,o&&(a[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=n)):delete a[r],this):a[r]},e.then=function(r){var n=this;return new Promise(function(o){var a=Rt(r)?r:Lc,s=function(){var l=n.then;n.then=null,Rt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=l),o(a),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?s():n._prom=s})},e.kill=function(){Si(this)},i}();fe(ji.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Yt=function(i){Ec(e,i);function e(r,n){var o;return r===void 0&&(r={}),o=i.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=qt(r.sortChildren),Pt&&we(r.parent||Pt,Ge(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Gc(Ge(o),r.scrollTrigger),o}var t=e.prototype;return t.to=function(n,o,a){return Ci(0,arguments,this),this},t.from=function(n,o,a){return Ci(1,arguments,this),this},t.fromTo=function(n,o,a,s){return Ci(2,arguments,this),this},t.set=function(n,o,a){return o.duration=0,o.parent=this,Pi(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Dt(n,o,ce(this,a),1),this},t.call=function(n,o,a){return we(this,Dt.delayedCall(0,n,o),a)},t.staggerTo=function(n,o,a,s,u,l,h){return a.duration=o,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Dt(n,a,ce(this,u)),this},t.staggerFrom=function(n,o,a,s,u,l,h){return a.runBackwards=1,Pi(a).immediateRender=qt(a.immediateRender),this.staggerTo(n,o,a,s,u,l,h)},t.staggerFromTo=function(n,o,a,s,u,l,h,f){return s.startAt=a,Pi(s).immediateRender=qt(s.immediateRender),this.staggerTo(n,o,s,u,l,h,f)},t.render=function(n,o,a){var s=this._time,u=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:Nt(n),f=this._zTime<0!=n<0&&(this._initted||!l),c,d,_,p,v,m,x,T,w,y,S,g;if(this!==Pt&&h>u&&n>=0&&(h=u),h!==this._tTime||a||f){if(s!==this._time&&l&&(h+=this._time-s,n+=this._time-s),c=h,w=this._start,T=this._ts,m=!T,f&&(l||(s=this._zTime),(n||!o)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,v=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,o,a);if(c=Nt(h%v),h===u?(p=this._repeat,c=l):(y=Nt(h/v),p=~~y,p&&p===y&&(c=l,p--),c>l&&(c=l)),y=ai(this._tTime,v),!s&&this._tTime&&y!==p&&this._tTime-y*v-this._dur<=0&&(y=p),S&&p&1&&(c=l-c,g=1),p!==y&&!this._lock){var R=S&&y&1,C=R===(S&&p&1);if(p<y&&(R=!R),s=R?0:h%l?l:h,this._lock=1,this.render(s||(g?0:Nt(p*v)),o,!l)._lock=0,this._tTime=h,!o&&this.parent&&se(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1),s&&s!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,u=this._tDur,C&&(this._lock=2,s=R?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;ed(this,g)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sb(this,Nt(s),Nt(c)),x&&(h-=c-(c=x._start))),this._tTime=h,this._time=c,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&!o&&!p&&(se(this,"onStart"),this._tTime!==h))return this;if(c>=s&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||c>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,o,a);if(d.render(d._ts>0?(c-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(c-d._start)*d._ts,o,a),c!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var I=n<0?n:c;d;){if(_=d._prev,(d._act||I<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,o,a);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,o,a||zt&&(d._initted||d._startAt)),c!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=I?-1e-8:Vt);break}}d=_}}if(x&&!o&&(this.pause(),x.render(c>=s?0:-1e-8)._zTime=c>=s?1:-1,this._ts))return this._start=w,oo(this),this.render(n,o,a);this._onUpdate&&!o&&se(this,"onUpdate",!0),(h===u&&this._tTime>=this.totalDuration()||!h&&s)&&(w===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===u&&this._ts>0||!h&&this._ts<0)&&lr(this,1),!o&&!(n<0&&!s)&&(h||s||!u)&&(se(this,h===u&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,o){var a=this;if(Ye(o)||(o=ce(this,o,n)),!(n instanceof ji)){if(Wt(n))return n.forEach(function(s){return a.add(s,o)}),this;if(kt(n))return this.addLabel(n,o);if(Rt(n))n=Dt.delayedCall(0,n);else return this}return this!==n?we(this,n,o):this},t.getChildren=function(n,o,a,s){n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),s===void 0&&(s=-1e8);for(var u=[],l=this._first;l;)l._start>=s&&(l instanceof Dt?o&&u.push(l):(a&&u.push(l),n&&u.push.apply(u,l.getChildren(!0,o,a)))),l=l._next;return u},t.getById=function(n){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===n)return o[a]},t.remove=function(n){return kt(n)?this.removeLabel(n):Rt(n)?this.killTweensOf(n):(n.parent===this&&no(this,n),n===this._recent&&(this._recent=this._last),Mr(this))},t.totalTime=function(n,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(ne.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),i.prototype.totalTime.call(this,n,o),this._forcing=0,this):this._tTime},t.addLabel=function(n,o){return this.labels[n]=ce(this,o),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,o,a){var s=Dt.delayedCall(0,o||Ui,a);return s.data="isPause",this._hasPause=1,we(this,s,ce(this,n))},t.removePause=function(n){var o=this._first;for(n=ce(this,n);o;)o._start===n&&o.data==="isPause"&&lr(o),o=o._next},t.killTweensOf=function(n,o,a){for(var s=this.getTweensOf(n,a),u=s.length;u--;)er!==s[u]&&s[u].kill(n,o);return this},t.getTweensOf=function(n,o){for(var a=[],s=de(n),u=this._first,l=Ye(o),h;u;)u instanceof Dt?tb(u._targets,s)&&(l?(!er||u._initted&&u._ts)&&u.globalTime(0)<=o&&u.globalTime(u.totalDuration())>o:!o||u.isActive())&&a.push(u):(h=u.getTweensOf(s,o)).length&&a.push.apply(a,h),u=u._next;return a},t.tweenTo=function(n,o){o=o||{};var a=this,s=ce(a,n),u=o,l=u.startAt,h=u.onStart,f=u.onStartParams,c=u.immediateRender,d,_=Dt.to(a,fe({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Vt,onStart:function(){if(a.pause(),!d){var v=o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==v&&si(_,v,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},o));return c?_.render(0):_},t.tweenFromTo=function(n,o,a){return this.tweenTo(o,fe({startAt:{time:ce(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),ff(this,ce(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),ff(this,ce(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(n,o,a){a===void 0&&(a=0);for(var s=this._first,u=this.labels,l;s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(o)for(l in u)u[l]>=a&&(u[l]+=n);return Mr(this)},t.invalidate=function(n){var o=this._first;for(this._lock=0;o;)o.invalidate(n),o=o._next;return i.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Mr(this)},t.totalDuration=function(n){var o=0,a=this,s=a._last,u=Re,l,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),h=s._start,h>u&&a._sort&&s._ts&&!a._lock?(a._lock=1,we(a,s,h-s._delay,1)._lock=0):u=h,h<0&&s._ts&&(o-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),u=0),s._end>o&&s._ts&&(o=s._end),s=l;si(a,a===Pt&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Pt._ts&&(Nc(Pt,Wn(n,Pt)),Fc=ne.frame),ne.frame>=sf){sf+=ue.autoSleep||120;var o=Pt._first;if((!o||!o._ts)&&ue.autoSleep&&ne._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ne.sleep()}}},e}(ji);fe(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sb=function(e,t,r,n,o,a,s){var u=new Zt(this._pt,e,t,0,1,ld,null,o),l=0,h=0,f,c,d,_,p,v,m,x;for(u.b=r,u.e=n,r+="",n+="",(m=~n.indexOf("random("))&&(n=ki(n)),a&&(x=[r,n],a(x,e,t),r=x[0],n=x[1]),c=r.match(Xa)||[];f=Xa.exec(n);)_=f[0],p=n.substring(l,f.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),_!==c[h++]&&(v=parseFloat(c[h-1])||0,u._pt={_next:u._pt,p:p||h===1?p:",",s:v,c:_.charAt(1)==="="?Jr(v,_)-v:parseFloat(_)-v,m:d&&d<4?Math.round:0},l=Xa.lastIndex);return u.c=l<n.length?n.substring(l,n.length):"",u.fp=s,(Oc.test(n)||m)&&(u.e=0),this._pt=u,u},ju=function(e,t,r,n,o,a,s,u,l,h){Rt(n)&&(n=n(o||0,e,a));var f=e[t],c=r!=="get"?r:Rt(f)?l?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,d=Rt(f)?l?Ob:sd:Xu,_;if(kt(n)&&(~n.indexOf("random(")&&(n=ki(n)),n.charAt(1)==="="&&(_=Jr(c,n)+(Ht(c)||0),(_||_===0)&&(n=_))),!h||c!==n||ks)return!isNaN(c*n)&&n!==""?(_=new Zt(this._pt,e,t,+c||0,n-(c||0),typeof f=="boolean"?Rb:ud,0,d),l&&(_.fp=l),s&&_.modifier(s,this,e),this._pt=_):(!f&&!(t in e)&&Lu(t,n),Sb.call(this,e,t,c,n,d,u||ue.stringFilter,l))},Eb=function(e,t,r,n,o){if(Rt(e)&&(e=Oi(e,o,t,r,n)),!Me(e)||e.style&&e.nodeType||Wt(e)||Pc(e))return kt(e)?Oi(e,o,t,r,n):e;var a={},s;for(s in e)a[s]=Oi(e[s],o,t,r,n);return a},nd=function(e,t,r,n,o,a){var s,u,l,h;if(ie[e]&&(s=new ie[e]).init(o,s.rawVars?t[e]:Eb(t[e],n,o,a,r),r,n,a)!==!1&&(r._pt=u=new Zt(r._pt,o,e,0,1,s.render,s,0,s.priority),r!==Kr))for(l=r._ptLookup[r._targets.indexOf(o)],h=s._props.length;h--;)l[s._props[h]]=u;return s},er,ks,zu=function i(e,t,r){var n=e.vars,o=n.ease,a=n.startAt,s=n.immediateRender,u=n.lazy,l=n.onUpdate,h=n.runBackwards,f=n.yoyoEase,c=n.keyframes,d=n.autoRevert,_=e._dur,p=e._startAt,v=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:v,T=e._overwrite==="auto"&&!Fu,w=e.timeline,y,S,g,R,C,I,U,M,z,V,G,b,P;if(w&&(!c||!o)&&(o="none"),e._ease=Fr(o,ni.ease),e._yEase=f?td(Fr(f===!0?o:f,ni.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!n.runBackwards,!w||c&&!n.stagger){if(M=v[0]?Ir(v[0]).harness:0,b=M&&n[M.prop],y=Vn(n,Uu),p&&(p._zTime<0&&p.progress(1),t<0&&h&&s&&!d?p.render(-1,!0):p.revert(h&&_?On:Qx),p._lazy=0),a){if(lr(e._startAt=Dt.set(v,fe({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&qt(u),startAt:null,delay:0,onUpdate:l&&function(){return se(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!s&&!d)&&e._startAt.revert(On),s&&_&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(h&&_&&!p){if(t&&(s=!1),g=fe({overwrite:!1,data:"isFromStart",lazy:s&&!p&&qt(u),immediateRender:s,stagger:0,parent:m},y),b&&(g[M.prop]=b),lr(e._startAt=Dt.set(v,g)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(On):e._startAt.render(-1,!0)),e._zTime=t,!s)i(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,u=_&&qt(u)||u&&!_,S=0;S<v.length;S++){if(C=v[S],U=C._gsap||Gu(v)[S]._gsap,e._ptLookup[S]=V={},Fs[U.id]&&or.length&&Hn(),G=x===v?S:x.indexOf(C),M&&(z=new M).init(C,b||y,e,G,x)!==!1&&(e._pt=R=new Zt(e._pt,C,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(E){V[E]=R}),z.priority&&(I=1)),!M||b)for(g in y)ie[g]&&(z=nd(g,y,e,G,C,x))?z.priority&&(I=1):V[g]=R=ju.call(e,C,g,"get",y[g],G,x,0,n.stringFilter);e._op&&e._op[S]&&e.kill(C,e._op[S]),T&&e._pt&&(er=e,Pt.killTweensOf(C,V,e.globalTime(t)),P=!e.parent,er=0),e._pt&&u&&(Fs[U.id]=1)}I&&hd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!P,c&&t<=0&&w.render(Re,!0,!0)},wb=function(e,t,r,n,o,a,s,u){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,c,d;if(!l)for(l=e._ptCache[t]=[],c=e._ptLookup,d=e._targets.length;d--;){if(h=c[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ks=1,e.vars[t]="+=0",zu(e,s),ks=0,u?Li(t+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)f=l[d],h=f._pt||f,h.s=(n||n===0)&&!o?n:h.s+(n||0)+a*h.c,h.c=r-h.s,f.e&&(f.e=It(r)+Ht(f.e)),f.b&&(f.b=h.s+Ht(f.b))},Pb=function(e,t){var r=e[0]?Ir(e[0]).harness:0,n=r&&r.aliases,o,a,s,u;if(!n)return t;o=oi({},t);for(a in n)if(a in o)for(u=n[a].split(","),s=u.length;s--;)o[u[s]]=o[a];return o},Cb=function(e,t,r,n){var o=t.ease||n||"power1.inOut",a,s;if(Wt(t))s=r[e]||(r[e]=[]),t.forEach(function(u,l){return s.push({t:l/(t.length-1)*100,v:u,e:o})});else for(a in t)s=r[a]||(r[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:o})},Oi=function(e,t,r,n,o){return Rt(e)?e.call(t,r,n,o):kt(e)&&~e.indexOf("random(")?ki(e):e},od=ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ad={};Kt(od+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ad[i]=1});var Dt=function(i){Ec(e,i);function e(r,n,o,a){var s;typeof n=="number"&&(o.duration=n,n=o,o=null),s=i.call(this,a?n:Pi(n))||this;var u=s.vars,l=u.duration,h=u.delay,f=u.immediateRender,c=u.stagger,d=u.overwrite,_=u.keyframes,p=u.defaults,v=u.scrollTrigger,m=u.yoyoEase,x=n.parent||Pt,T=(Wt(r)||Pc(r)?Ye(r[0]):"length"in n)?[r]:de(r),w,y,S,g,R,C,I,U;if(s._targets=T.length?Gu(T):Li("GSAP target "+r+" not found. https://gsap.com",!ue.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=d,_||c||wn(l)||wn(h)){if(n=s.vars,w=s.timeline=new Yt({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:T}),w.kill(),w.parent=w._dp=Ge(s),w._start=0,c||wn(l)||wn(h)){if(g=T.length,I=c&&Hc(c),Me(c))for(R in c)~od.indexOf(R)&&(U||(U={}),U[R]=c[R]);for(y=0;y<g;y++)S=Vn(n,ad),S.stagger=0,m&&(S.yoyoEase=m),U&&oi(S,U),C=T[y],S.duration=+Oi(l,Ge(s),y,C,T),S.delay=(+Oi(h,Ge(s),y,C,T)||0)-s._delay,!c&&g===1&&S.delay&&(s._delay=h=S.delay,s._start+=h,S.delay=0),w.to(C,S,I?I(y,C,T):0),w._ease=ft.none;w.duration()?l=h=0:s.timeline=0}else if(_){Pi(fe(w.vars.defaults,{ease:"none"})),w._ease=Fr(_.ease||n.ease||"none");var M=0,z,V,G;if(Wt(_))_.forEach(function(b){return w.to(T,b,">")}),w.duration();else{S={};for(R in _)R==="ease"||R==="easeEach"||Cb(R,_[R],S,_.easeEach);for(R in S)for(z=S[R].sort(function(b,P){return b.t-P.t}),M=0,y=0;y<z.length;y++)V=z[y],G={ease:V.e,duration:(V.t-(y?z[y-1].t:0))/100*l},G[R]=V.v,w.to(T,G,M),M+=G.duration;w.duration()<l&&w.to({},{duration:l-w.duration()})}}l||s.duration(l=w.duration())}else s.timeline=0;return d===!0&&!Fu&&(er=Ge(s),Pt.killTweensOf(T),er=0),we(x,Ge(s),o),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(f||!l&&!_&&s._start===Nt(x._time)&&qt(f)&&nb(Ge(s))&&x.data!=="nested")&&(s._tTime=-1e-8,s.render(Math.max(0,-h)||0)),v&&Gc(Ge(s),v),s}var t=e.prototype;return t.render=function(n,o,a){var s=this._time,u=this._tDur,l=this._dur,h=n<0,f=n>u-Vt&&!h?u:n<Vt?0:n,c,d,_,p,v,m,x,T,w;if(!l)ab(this,n,o,a);else if(f!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(c=f,T=this.timeline,this._repeat){if(p=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+n,o,a);if(c=Nt(f%p),f===u?(_=this._repeat,c=l):(v=Nt(f/p),_=~~v,_&&_===v?(c=l,_--):c>l&&(c=l)),m=this._yoyo&&_&1,m&&(w=this._yEase,c=l-c),v=ai(this._tTime,p),c===s&&!a&&this._initted&&_===v)return this._tTime=f,this;_!==v&&(T&&this._yEase&&ed(T,m),this.vars.repeatRefresh&&!m&&!this._lock&&c!==p&&this._initted&&(this._lock=a=1,this.render(Nt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(jc(this,h?n:c,a,o,f))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&_!==v))return this;if(l!==this._dur)return this.render(n,o,a)}if(this._tTime=f,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(w||this._ease)(c/l),this._from&&(this.ratio=x=1-x),c&&!s&&!o&&!_&&(se(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;T&&T.render(n<0?n:T._dur*T._ease(c/this._dur),o,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!o&&(h&&Ds(this,n,o,a),se(this,"onUpdate")),this._repeat&&_!==v&&this.vars.onRepeat&&!o&&this.parent&&se(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Ds(this,n,!0,!0),(n||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&lr(this,1),!o&&!(h&&!s)&&(f||s||m)&&(se(this,f===u?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),i.prototype.invalidate.call(this,n)},t.resetTo=function(n,o,a,s,u){Gi||ne.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zu(this,l),h=this._ease(l/this._dur),wb(this,n,o,a,s,h,l,u)?this.resetTo(n,o,a,s,1):(ao(this,0),this.parent||Uc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,o){if(o===void 0&&(o="all"),!n&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Si(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,o,er&&er.vars.overwrite!==!0)._first||Si(this),this.parent&&a!==this.timeline.totalDuration()&&si(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,u=n?de(n):s,l=this._ptLookup,h=this._pt,f,c,d,_,p,v,m;if((!o||o==="all")&&rb(s,u))return o==="all"&&(this._pt=0),Si(this);for(f=this._op=this._op||[],o!=="all"&&(kt(o)&&(p={},Kt(o,function(x){return p[x]=1}),o=p),o=Pb(s,o)),m=s.length;m--;)if(~u.indexOf(s[m])){c=l[m],o==="all"?(f[m]=o,_=c,d={}):(d=f[m]=f[m]||{},_=o);for(p in _)v=c&&c[p],v&&((!("kill"in v.d)||v.d.kill(p)===!0)&&no(this,v,"_pt"),delete c[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Si(this),this},e.to=function(n,o){return new e(n,o,arguments[2])},e.from=function(n,o){return Ci(1,arguments)},e.delayedCall=function(n,o,a,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(n,o,a){return Ci(2,arguments)},e.set=function(n,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(n,o)},e.killTweensOf=function(n,o,a){return Pt.killTweensOf(n,o,a)},e}(ji);fe(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(i){Dt[i]=function(){var e=new Yt,t=Bs.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Xu=function(e,t,r){return e[t]=r},sd=function(e,t,r){return e[t](r)},Ob=function(e,t,r,n){return e[t](n.fp,r)},Ab=function(e,t,r){return e.setAttribute(t,r)},Hu=function(e,t){return Rt(e[t])?sd:Du(e[t])&&e.setAttribute?Ab:Xu},ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var r=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+n,r=r._next;n+=t.c}t.set(t.t,t.p,n,t)},Vu=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},Ib=function(e,t,r,n){for(var o=this._pt,a;o;)a=o._next,o.p===n&&o.modifier(e,t,r),o=a},Mb=function(e){for(var t=this._pt,r,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?no(this,t,"_pt"):t.dep||(r=1),t=n;return!r},Fb=function(e,t,r,n){n.mSet(e,t,n.m.call(n.tween,r,n.mt),n)},hd=function(e){for(var t=e._pt,r,n,o,a;t;){for(r=t._next,n=o;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:o=t,(t._next=n)?n._prev=t:a=t,t=r}e._pt=o},Zt=function(){function i(t,r,n,o,a,s,u,l,h){this.t=r,this.s=o,this.c=a,this.p=n,this.r=s||ud,this.d=u||this,this.set=l||Xu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(r,n,o){this.mSet=this.mSet||this.set,this.set=Fb,this.m=r,this.mt=o,this.tween=n},i}();Kt(ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Uu[i]=1});he.TweenMax=he.TweenLite=Dt;he.TimelineLite=he.TimelineMax=Yt;Pt=new Yt({sortChildren:!1,defaults:ni,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ue.stringFilter=Jc;var Dr=[],Rn={},Db=[],df=0,Nb=0,$a=function(e){return(Rn[e]||Db).map(function(t){return t()})},Gs=function(){var e=Date.now(),t=[];e-df>2&&($a("matchMediaInit"),Dr.forEach(function(r){var n=r.queries,o=r.conditions,a,s,u,l;for(s in n)a=Ee.matchMedia(n[s]).matches,a&&(u=1),a!==o[s]&&(o[s]=a,l=1);l&&(r.revert(),u&&t.push(r))}),$a("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(n){return r.add(null,n)})}),df=e,$a("matchMedia"))},fd=function(){function i(t,r){this.selector=r&&Ls(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Nb++,t&&this.add(t)}var e=i.prototype;return e.add=function(r,n,o){Rt(r)&&(o=n,n=r,r=Rt);var a=this,s=function(){var l=Et,h=a.selector,f;return l&&l!==a&&l.data.push(a),o&&(a.selector=Ls(o)),Et=a,f=n.apply(a,arguments),Rt(f)&&a._r.push(f),Et=l,a.selector=h,a.isReverted=!1,f};return a.last=s,r===Rt?s(a,function(u){return a.add(null,u)}):r?a[r]=s:s},e.ignore=function(r){var n=Et;Et=null,r(this),Et=n},e.getTweens=function(){var r=[];return this.data.forEach(function(n){return n instanceof i?r.push.apply(r,n.getTweens()):n instanceof Dt&&!(n.parent&&n.parent.data==="nested")&&r.push(n)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,n){var o=this;if(r?function(){for(var s=o.getTweens(),u=o.data.length,l;u--;)l=o.data[u],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return s.splice(s.indexOf(h),1)}));for(s.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(r)}),u=o.data.length;u--;)l=o.data[u],l instanceof Yt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Dt)&&l.revert&&l.revert(r);o._r.forEach(function(h){return h(r,o)}),o.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var a=Dr.length;a--;)Dr[a].id===this.id&&Dr.splice(a,1)},e.revert=function(r){this.kill(r||{})},i}(),Bb=function(){function i(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=i.prototype;return e.add=function(r,n,o){Me(r)||(r={matches:r});var a=new fd(0,o||this.scope),s=a.conditions={},u,l,h;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=r;for(l in r)l==="all"?h=1:(u=Ee.matchMedia(r[l]),u&&(Dr.indexOf(a)<0&&Dr.push(a),(s[l]=u.matches)&&(h=1),u.addListener?u.addListener(Gs):u.addEventListener("change",Gs)));return h&&n(a,function(f){return a.add(null,f)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(n){return n.kill(r,!0)})},i}(),Yn={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(n){return Kc(n)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,r,n){kt(e)&&(e=de(e)[0]);var o=Ir(e||{}).get,a=r?Lc:Bc;return r==="native"&&(r=""),e&&(t?a((ie[t]&&ie[t].get||o)(e,t,r,n)):function(s,u,l){return a((ie[s]&&ie[s].get||o)(e,s,u,l))})},quickSetter:function(e,t,r){if(e=de(e),e.length>1){var n=e.map(function(h){return Jt.quickSetter(h,t,r)}),o=n.length;return function(h){for(var f=o;f--;)n[f](h)}}e=e[0]||{};var a=ie[t],s=Ir(e),u=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(h){var f=new a;Kr._pt=0,f.init(e,r?h+r:h,Kr,0,[e]),f.render(1,f),Kr._pt&&Vu(1,Kr)}:s.set(e,u);return a?l:function(h){return l(e,u,r?h+r:h,s,1)}},quickTo:function(e,t,r){var n,o=Jt.to(e,fe((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),r||{})),a=function(u,l,h){return o.resetTo(t,u,l,h)};return a.tween=o,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fr(e.ease,ni.ease)),uf(ni,e||{})},config:function(e){return uf(ue,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,n=e.plugins,o=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!ie[s]&&!he[s]&&Li(t+" effect requires "+s+" plugin.")}),Ha[t]=function(s,u,l){return r(de(s),fe(u||{},o),l)},a&&(Yt.prototype[t]=function(s,u,l){return this.add(Ha[t](s,Me(u)?u:(l=u)&&{},this),l)})},registerEase:function(e,t){ft[e]=Fr(t)},parseEase:function(e,t){return arguments.length?Fr(e,t):ft},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new Yt(e),n,o;for(r.smoothChildTiming=qt(e.smoothChildTiming),Pt.remove(r),r._dp=0,r._time=r._tTime=Pt._time,n=Pt._first;n;)o=n._next,(t||!(!n._dur&&n instanceof Dt&&n.vars.onComplete===n._targets[0]))&&we(r,n,n._start-n._delay),n=o;return we(Pt,r,0),r},context:function(e,t){return e?new fd(e,t):Et},matchMedia:function(e){return new Bb(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,r,n;for(n in t)t[n]&&(t[n]=!1,r=1);r&&e.revert()})||Gs()},addEventListener:function(e,t){var r=Rn[e]||(Rn[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=Rn[e],n=r&&r.indexOf(t);n>=0&&r.splice(n,1)},utils:{wrap:pb,wrapYoyo:vb,distribute:Hc,random:Wc,snap:Vc,normalize:db,getUnit:Ht,clamp:lb,splitColor:Zc,toArray:de,selector:Ls,mapRange:$c,pipe:fb,unitize:cb,interpolate:_b,shuffle:Xc},install:Ic,effects:Ha,ticker:ne,updateRoot:Yt.updateRoot,plugins:ie,globalTimeline:Pt,core:{PropTween:Zt,globals:Mc,Tween:Dt,Timeline:Yt,Animation:ji,getCache:Ir,_removeLinkedListItem:no,reverting:function(){return zt},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return Fu=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Yn[i]=Dt[i]});ne.add(Yt.updateRoot);Kr=Yn.to({},{duration:0});var Lb=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},Ub=function(e,t){var r=e._targets,n,o,a;for(n in t)for(o=r.length;o--;)a=e._ptLookup[o][n],a&&(a=a.d)&&(a._pt&&(a=Lb(a,n)),a&&a.modifier&&a.modifier(t[n],e,r[o],n))},qa=function(e,t){return{name:e,rawVars:1,init:function(n,o,a){a._onInit=function(s){var u,l;if(kt(o)&&(u={},Kt(o,function(h){return u[h]=1}),o=u),t){u={};for(l in o)u[l]=t(o[l]);o=u}Ub(s,o)}}}},Jt=Yn.registerPlugin({name:"attr",init:function(e,t,r,n,o){var a,s,u;this.tween=r;for(a in t)u=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(u||0)+"",t[a],n,o,0,0,a),s.op=a,s.b=u,this._props.push(a)},render:function(e,t){for(var r=t._pt;r;)zt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},qa("roundProps",Us),qa("modifiers"),qa("snap",Vc))||Yn;Dt.version=Yt.version=Jt.version="3.12.7";Rc=1;Nu()&&ui();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pf,rr,ti,Wu,Cr,vf,Yu,kb=function(){return typeof window<"u"},$e={},wr=180/Math.PI,ei=Math.PI/180,Wr=Math.atan2,_f=1e8,$u=/([A-Z])/g,Gb=/(left|right|width|margin|padding|x)/i,jb=/[\s,\(]\S/,Ce={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},js=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hb=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},cd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vb=function(e,t,r){return e.style[t]=r},Wb=function(e,t,r){return e.style.setProperty(t,r)},Yb=function(e,t,r){return e._gsap[t]=r},$b=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},qb=function(e,t,r,n,o){var a=e._gsap;a.scaleX=a.scaleY=r,a.renderTransform(o,a)},Kb=function(e,t,r,n,o){var a=e._gsap;a[t]=r,a.renderTransform(o,a)},Ct="transform",Qt=Ct+"Origin",Zb=function i(e,t){var r=this,n=this.target,o=n.style,a=n._gsap;if(e in $e&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Ce[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return r.tfm[s]=je(n,s)}):this.tfm[e]=a.x?a[e]:je(n,e),e===Qt&&(this.tfm.zOrigin=a.zOrigin);else return Ce.transform.split(",").forEach(function(s){return i.call(r,s,t)});if(this.props.indexOf(Ct)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Qt,t,"")),e=Ct}(o||t)&&this.props.push(e,t,o[e])},pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Qb=function(){var e=this.props,t=this.target,r=t.style,n=t._gsap,o,a;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace($u,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Yu(),(!o||!o.isStart)&&!r[Ct]&&(pd(r),n.zOrigin&&r[Qt]&&(r[Qt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},vd=function(e,t){var r={target:e,props:[],revert:Qb,save:Zb};return e._gsap||Jt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return r.save(n)}),r},_d,zs=function(e,t){var r=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return r&&r.style?r:rr.createElement(e)},Ie=function i(e,t,r){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace($u,"-$1").toLowerCase())||n.getPropertyValue(t)||!r&&i(e,li(t)||t,1)||""},mf="O,Moz,ms,Ms,Webkit".split(","),li=function(e,t,r){var n=t||Cr,o=n.style,a=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(mf[a]+e in o););return a<0?null:(a===3?"ms":a>=0?mf[a]:"")+e},Xs=function(){kb()&&window.document&&(pf=window,rr=pf.document,ti=rr.documentElement,Cr=zs("div")||{style:{}},zs("div"),Ct=li(Ct),Qt=Ct+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_d=!!li("perspective"),Yu=Jt.core.reverting,Wu=1)},yf=function(e){var t=e.ownerSVGElement,r=zs("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),o;n.style.display="block",r.appendChild(n),ti.appendChild(r);try{o=n.getBBox()}catch{}return r.removeChild(n),ti.removeChild(r),o},gf=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},md=function(e){var t,r;try{t=e.getBBox()}catch{t=yf(e),r=1}return t&&(t.width||t.height)||r||(t=yf(e)),t&&!t.width&&!t.x&&!t.y?{x:+gf(e,["x","cx","x1"])||0,y:+gf(e,["y","cy","y1"])||0,width:0,height:0}:t},yd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&md(e))},Ur=function(e,t){if(t){var r=e.style,n;t in $e&&t!==Qt&&(t=Ct),r.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(n==="--"?t:t.replace($u,"-$1").toLowerCase())):r.removeAttribute(t)}},ir=function(e,t,r,n,o,a){var s=new Zt(e._pt,t,r,0,1,a?dd:cd);return e._pt=s,s.b=n,s.e=o,e._props.push(r),s},xf={deg:1,rad:1,turn:1},Jb={grid:1,flex:1},hr=function i(e,t,r,n){var o=parseFloat(r)||0,a=(r+"").trim().substr((o+"").length)||"px",s=Cr.style,u=Gb.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(u?"Width":"Height"),f=100,c=n==="px",d=n==="%",_,p,v,m;if(n===a||!o||xf[n]||xf[a])return o;if(a!=="px"&&!c&&(o=i(e,t,r,"px")),m=e.getCTM&&yd(e),(d||a==="%")&&($e[t]||~t.indexOf("adius")))return _=m?e.getBBox()[u?"width":"height"]:e[h],It(d?o/_*f:o/100*_);if(s[u?"width":"height"]=f+(c?a:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===rr||!p.appendChild)&&(p=rr.body),v=p._gsap,v&&d&&v.width&&u&&v.time===ne.time&&!v.uncache)return It(o/v.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+n,_=e[h],x?e.style[t]=x:Ur(e,t)}else(d||a==="%")&&!Jb[Ie(p,"display")]&&(s.position=Ie(e,"position")),p===e&&(s.position="static"),p.appendChild(Cr),_=Cr[h],p.removeChild(Cr),s.position="absolute";return u&&d&&(v=Ir(p),v.time=ne.time,v.width=p[h]),It(c?_*o/f:_&&o?f/_*o:0)},je=function(e,t,r,n){var o;return Wu||Xs(),t in Ce&&t!=="transform"&&(t=Ce[t],~t.indexOf(",")&&(t=t.split(",")[0])),$e[t]&&t!=="transform"?(o=Xi(e,n),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:qn(Ie(e,Qt))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||n||~(o+"").indexOf("calc("))&&(o=$n[t]&&$n[t](e,t,r)||Ie(e,t)||Dc(e,t)||(t==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?hr(e,t,o,r)+r:o},t1=function(e,t,r,n){if(!r||r==="none"){var o=li(t,e,1),a=o&&Ie(e,o,1);a&&a!==r?(t=o,r=a):t==="borderColor"&&(r=Ie(e,"borderTopColor"))}var s=new Zt(this._pt,e.style,t,0,1,ld),u=0,l=0,h,f,c,d,_,p,v,m,x,T,w,y;if(s.b=r,s.e=n,r+="",n+="",n==="auto"&&(p=e.style[t],e.style[t]=n,n=Ie(e,t)||n,p?e.style[t]=p:Ur(e,t)),h=[r,n],Jc(h),r=h[0],n=h[1],c=r.match(qr)||[],y=n.match(qr)||[],y.length){for(;f=qr.exec(n);)v=f[0],x=n.substring(u,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),v!==(p=c[l++]||"")&&(d=parseFloat(p)||0,w=p.substr((d+"").length),v.charAt(1)==="="&&(v=Jr(d,v)+w),m=parseFloat(v),T=v.substr((m+"").length),u=qr.lastIndex-T.length,T||(T=T||ue.units[t]||w,u===n.length&&(n+=T,s.e+=T)),w!==T&&(d=hr(e,t,p,T)||0),s._pt={_next:s._pt,p:x||l===1?x:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});s.c=u<n.length?n.substring(u,n.length):""}else s.r=t==="display"&&n==="none"?dd:cd;return Oc.test(n)&&(s.e=0),this._pt=s,s},bf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e1=function(e){var t=e.split(" "),r=t[0],n=t[1]||"50%";return(r==="top"||r==="bottom"||n==="left"||n==="right")&&(e=r,r=n,n=e),t[0]=bf[r]||r,t[1]=bf[n]||n,t.join(" ")},r1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,n=r.style,o=t.u,a=r._gsap,s,u,l;if(o==="all"||o===!0)n.cssText="",u=1;else for(o=o.split(","),l=o.length;--l>-1;)s=o[l],$e[s]&&(u=1,s=s==="transformOrigin"?Qt:Ct),Ur(r,s);u&&(Ur(r,Ct),a&&(a.svg&&r.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Xi(r,1),a.uncache=1,pd(n)))}},$n={clearProps:function(e,t,r,n,o){if(o.data!=="isFromStart"){var a=e._pt=new Zt(e._pt,t,r,0,0,r1);return a.u=n,a.pr=-10,a.tween=o,e._props.push(r),1}}},zi=[1,0,0,1,0,0],gd={},xd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tf=function(e){var t=Ie(e,Ct);return xd(t)?zi:t.substr(7).match(Cc).map(It)},qu=function(e,t){var r=e._gsap||Ir(e),n=e.style,o=Tf(e),a,s,u,l;return r.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,o=[u.a,u.b,u.c,u.d,u.e,u.f],o.join(",")==="1,0,0,1,0,0"?zi:o):(o===zi&&!e.offsetParent&&e!==ti&&!r.svg&&(u=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,s=e.nextElementSibling,ti.appendChild(e)),o=Tf(e),u?n.display=u:Ur(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):ti.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Hs=function(e,t,r,n,o,a){var s=e._gsap,u=o||qu(e,!0),l=s.xOrigin||0,h=s.yOrigin||0,f=s.xOffset||0,c=s.yOffset||0,d=u[0],_=u[1],p=u[2],v=u[3],m=u[4],x=u[5],T=t.split(" "),w=parseFloat(T[0])||0,y=parseFloat(T[1])||0,S,g,R,C;r?u!==zi&&(g=d*v-_*p)&&(R=w*(v/g)+y*(-p/g)+(p*x-v*m)/g,C=w*(-_/g)+y*(d/g)-(d*x-_*m)/g,w=R,y=C):(S=md(e),w=S.x+(~T[0].indexOf("%")?w/100*S.width:w),y=S.y+(~(T[1]||T[0]).indexOf("%")?y/100*S.height:y)),n||n!==!1&&s.smooth?(m=w-l,x=y-h,s.xOffset=f+(m*d+x*p)-m,s.yOffset=c+(m*_+x*v)-x):s.xOffset=s.yOffset=0,s.xOrigin=w,s.yOrigin=y,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!r,e.style[Qt]="0px 0px",a&&(ir(a,s,"xOrigin",l,w),ir(a,s,"yOrigin",h,y),ir(a,s,"xOffset",f,s.xOffset),ir(a,s,"yOffset",c,s.yOffset)),e.setAttribute("data-svg-origin",w+" "+y)},Xi=function(e,t){var r=e._gsap||new id(e);if("x"in r&&!t&&!r.uncache)return r;var n=e.style,o=r.scaleX<0,a="px",s="deg",u=getComputedStyle(e),l=Ie(e,Qt)||"0",h,f,c,d,_,p,v,m,x,T,w,y,S,g,R,C,I,U,M,z,V,G,b,P,E,F,A,O,N,D,k,j;return h=f=c=p=v=m=x=T=w=0,d=_=1,r.svg=!!(e.getCTM&&yd(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(n[Ct]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Ct]!=="none"?u[Ct]:"")),n.scale=n.rotate=n.translate="none"),g=qu(e,r.svg),r.svg&&(r.uncache?(E=e.getBBox(),l=r.xOrigin-E.x+"px "+(r.yOrigin-E.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),Hs(e,P||l,!!P||r.originIsAbsolute,r.smooth!==!1,g)),y=r.xOrigin||0,S=r.yOrigin||0,g!==zi&&(U=g[0],M=g[1],z=g[2],V=g[3],h=G=g[4],f=b=g[5],g.length===6?(d=Math.sqrt(U*U+M*M),_=Math.sqrt(V*V+z*z),p=U||M?Wr(M,U)*wr:0,x=z||V?Wr(z,V)*wr+p:0,x&&(_*=Math.abs(Math.cos(x*ei))),r.svg&&(h-=y-(y*U+S*z),f-=S-(y*M+S*V))):(j=g[6],D=g[7],A=g[8],O=g[9],N=g[10],k=g[11],h=g[12],f=g[13],c=g[14],R=Wr(j,N),v=R*wr,R&&(C=Math.cos(-R),I=Math.sin(-R),P=G*C+A*I,E=b*C+O*I,F=j*C+N*I,A=G*-I+A*C,O=b*-I+O*C,N=j*-I+N*C,k=D*-I+k*C,G=P,b=E,j=F),R=Wr(-z,N),m=R*wr,R&&(C=Math.cos(-R),I=Math.sin(-R),P=U*C-A*I,E=M*C-O*I,F=z*C-N*I,k=V*I+k*C,U=P,M=E,z=F),R=Wr(M,U),p=R*wr,R&&(C=Math.cos(R),I=Math.sin(R),P=U*C+M*I,E=G*C+b*I,M=M*C-U*I,b=b*C-G*I,U=P,G=E),v&&Math.abs(v)+Math.abs(p)>359.9&&(v=p=0,m=180-m),d=It(Math.sqrt(U*U+M*M+z*z)),_=It(Math.sqrt(b*b+j*j)),R=Wr(G,b),x=Math.abs(R)>2e-4?R*wr:0,w=k?1/(k<0?-k:k):0),r.svg&&(P=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!xd(Ie(e,Ct)),P&&e.setAttribute("transform",P))),Math.abs(x)>90&&Math.abs(x)<270&&(o?(d*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||r.uncache,r.x=h-((r.xPercent=h&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+a,r.y=f-((r.yPercent=f&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+a,r.z=c+a,r.scaleX=It(d),r.scaleY=It(_),r.rotation=It(p)+s,r.rotationX=It(v)+s,r.rotationY=It(m)+s,r.skewX=x+s,r.skewY=T+s,r.transformPerspective=w+a,(r.zOrigin=parseFloat(l.split(" ")[2])||!t&&r.zOrigin||0)&&(n[Qt]=qn(l)),r.xOffset=r.yOffset=0,r.force3D=ue.force3D,r.renderTransform=r.svg?n1:_d?bd:i1,r.uncache=0,r},qn=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ka=function(e,t,r){var n=Ht(t);return It(parseFloat(t)+parseFloat(hr(e,"x",r+"px",n)))+n},i1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,bd(e,t)},gr="0deg",bi="0px",xr=") ",bd=function(e,t){var r=t||this,n=r.xPercent,o=r.yPercent,a=r.x,s=r.y,u=r.z,l=r.rotation,h=r.rotationY,f=r.rotationX,c=r.skewX,d=r.skewY,_=r.scaleX,p=r.scaleY,v=r.transformPerspective,m=r.force3D,x=r.target,T=r.zOrigin,w="",y=m==="auto"&&e&&e!==1||m===!0;if(T&&(f!==gr||h!==gr)){var S=parseFloat(h)*ei,g=Math.sin(S),R=Math.cos(S),C;S=parseFloat(f)*ei,C=Math.cos(S),a=Ka(x,a,g*C*-T),s=Ka(x,s,-Math.sin(S)*-T),u=Ka(x,u,R*C*-T+T)}v!==bi&&(w+="perspective("+v+xr),(n||o)&&(w+="translate("+n+"%, "+o+"%) "),(y||a!==bi||s!==bi||u!==bi)&&(w+=u!==bi||y?"translate3d("+a+", "+s+", "+u+") ":"translate("+a+", "+s+xr),l!==gr&&(w+="rotate("+l+xr),h!==gr&&(w+="rotateY("+h+xr),f!==gr&&(w+="rotateX("+f+xr),(c!==gr||d!==gr)&&(w+="skew("+c+", "+d+xr),(_!==1||p!==1)&&(w+="scale("+_+", "+p+xr),x.style[Ct]=w||"translate(0, 0)"},n1=function(e,t){var r=t||this,n=r.xPercent,o=r.yPercent,a=r.x,s=r.y,u=r.rotation,l=r.skewX,h=r.skewY,f=r.scaleX,c=r.scaleY,d=r.target,_=r.xOrigin,p=r.yOrigin,v=r.xOffset,m=r.yOffset,x=r.forceCSS,T=parseFloat(a),w=parseFloat(s),y,S,g,R,C;u=parseFloat(u),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,u+=h),u||l?(u*=ei,l*=ei,y=Math.cos(u)*f,S=Math.sin(u)*f,g=Math.sin(u-l)*-c,R=Math.cos(u-l)*c,l&&(h*=ei,C=Math.tan(l-h),C=Math.sqrt(1+C*C),g*=C,R*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),y*=C,S*=C)),y=It(y),S=It(S),g=It(g),R=It(R)):(y=f,R=c,S=g=0),(T&&!~(a+"").indexOf("px")||w&&!~(s+"").indexOf("px"))&&(T=hr(d,"x",a,"px"),w=hr(d,"y",s,"px")),(_||p||v||m)&&(T=It(T+_-(_*y+p*g)+v),w=It(w+p-(_*S+p*R)+m)),(n||o)&&(C=d.getBBox(),T=It(T+n/100*C.width),w=It(w+o/100*C.height)),C="matrix("+y+","+S+","+g+","+R+","+T+","+w+")",d.setAttribute("transform",C),x&&(d.style[Ct]=C)},o1=function(e,t,r,n,o){var a=360,s=kt(o),u=parseFloat(o)*(s&&~o.indexOf("rad")?wr:1),l=u-n,h=n+l+"deg",f,c;return s&&(f=o.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-360)),f==="cw"&&l<0?l=(l+a*_f)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*_f)%a-~~(l/a)*a)),e._pt=c=new Zt(e._pt,t,r,n,l,zb),c.e=h,c.u="deg",e._props.push(r),c},Sf=function(e,t){for(var r in t)e[r]=t[r];return e},a1=function(e,t,r){var n=Sf({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=r.style,s,u,l,h,f,c,d,_;n.svg?(l=r.getAttribute("transform"),r.setAttribute("transform",""),a[Ct]=t,s=Xi(r,1),Ur(r,Ct),r.setAttribute("transform",l)):(l=getComputedStyle(r)[Ct],a[Ct]=t,s=Xi(r,1),a[Ct]=l);for(u in $e)l=n[u],h=s[u],l!==h&&o.indexOf(u)<0&&(d=Ht(l),_=Ht(h),f=d!==_?hr(r,u,l,_):parseFloat(l),c=parseFloat(h),e._pt=new Zt(e._pt,s,u,f,c-f,js),e._pt.u=_||0,e._props.push(u));Sf(s,n)};Kt("padding,margin,Width,Radius",function(i,e){var t="Top",r="Right",n="Bottom",o="Left",a=(e<3?[t,r,n,o]:[t+o,t+r,n+r,n+o]).map(function(s){return e<2?i+s:"border"+s+i});$n[e>1?"border"+i:i]=function(s,u,l,h,f){var c,d;if(arguments.length<4)return c=a.map(function(_){return je(s,_,l)}),d=c.join(" "),d.split(c[0]).length===5?c[0]:d;c=(h+"").split(" "),d={},a.forEach(function(_,p){return d[_]=c[p]=c[p]||c[(p-1)/2|0]}),s.init(u,d,f)}});var Td={name:"css",register:Xs,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,n,o){var a=this._props,s=e.style,u=r.vars.startAt,l,h,f,c,d,_,p,v,m,x,T,w,y,S,g,R;Wu||Xs(),this.styles=this.styles||vd(e),R=this.styles.props,this.tween=r;for(p in t)if(p!=="autoRound"&&(h=t[p],!(ie[p]&&nd(p,t,r,n,e,o)))){if(d=typeof h,_=$n[p],d==="function"&&(h=h.call(r,n,e,o),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ki(h)),_)_(this,e,p,h,r)&&(g=1);else if(p.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",ar.lastIndex=0,ar.test(l)||(v=Ht(l),m=Ht(h)),m?v!==m&&(l=hr(e,p,l,m)+m):v&&(h+=v),this.add(s,"setProperty",l,h,n,o,0,0,p),a.push(p),R.push(p,0,s[p]);else if(d!=="undefined"){if(u&&p in u?(l=typeof u[p]=="function"?u[p].call(r,n,e,o):u[p],kt(l)&&~l.indexOf("random(")&&(l=ki(l)),Ht(l+"")||l==="auto"||(l+=ue.units[p]||Ht(je(e,p))||""),(l+"").charAt(1)==="="&&(l=je(e,p))):l=je(e,p),c=parseFloat(l),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),f=parseFloat(h),p in Ce&&(p==="autoAlpha"&&(c===1&&je(e,"visibility")==="hidden"&&f&&(c=0),R.push("visibility",0,s.visibility),ir(this,s,"visibility",c?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Ce[p],~p.indexOf(",")&&(p=p.split(",")[0]))),T=p in $e,T){if(this.styles.save(p),w||(y=e._gsap,y.renderTransform&&!t.parseTransform||Xi(e,t.parseTransform),S=t.smoothOrigin!==!1&&y.smooth,w=this._pt=new Zt(this._pt,s,Ct,0,1,y.renderTransform,y,0,-1),w.dep=1),p==="scale")this._pt=new Zt(this._pt,y,"scaleY",y.scaleY,(x?Jr(y.scaleY,x+f):f)-y.scaleY||0,js),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){R.push(Qt,0,s[Qt]),h=e1(h),y.svg?Hs(e,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==y.zOrigin&&ir(this,y,"zOrigin",y.zOrigin,m),ir(this,s,p,qn(l),qn(h)));continue}else if(p==="svgOrigin"){Hs(e,h,1,S,0,this);continue}else if(p in gd){o1(this,y,p,c,x?Jr(c,x+h):h);continue}else if(p==="smoothOrigin"){ir(this,y,"smooth",y.smooth,h);continue}else if(p==="force3D"){y[p]=h;continue}else if(p==="transform"){a1(this,h,e);continue}}else p in s||(p=li(p)||p);if(T||(f||f===0)&&(c||c===0)&&!jb.test(h)&&p in s)v=(l+"").substr((c+"").length),f||(f=0),m=Ht(h)||(p in ue.units?ue.units[p]:v),v!==m&&(c=hr(e,p,l,m)),this._pt=new Zt(this._pt,T?y:s,p,c,(x?Jr(c,x+f):f)-c,!T&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Hb:js),this._pt.u=m||0,v!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Xb);else if(p in s)t1.call(this,e,p,l,x?x+h:h);else if(p in e)this.add(e,p,l||e[p],x?x+h:h,n,o);else if(p!=="parseTransform"){Lu(p,h);continue}T||(p in s?R.push(p,0,s[p]):typeof e[p]=="function"?R.push(p,2,e[p]()):R.push(p,1,l||e[p])),a.push(p)}}g&&hd(this)},render:function(e,t){if(t.tween._time||!Yu())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:je,aliases:Ce,getSetter:function(e,t,r){var n=Ce[t];return n&&n.indexOf(",")<0&&(t=n),t in $e&&t!==Qt&&(e._gsap.x||je(e,"x"))?r&&vf===r?t==="scale"?$b:Yb:(vf=r||{})&&(t==="scale"?qb:Kb):e.style&&!Du(e.style[t])?Vb:~t.indexOf("-")?Wb:Hu(e,t)},core:{_removeProperty:Ur,_getMatrix:qu}};Jt.utils.checkPrefix=li;Jt.core.getStyleSaver=vd;(function(i,e,t,r){var n=Kt(i+","+e+","+t,function(o){$e[o]=1});Kt(e,function(o){ue.units[o]="deg",gd[o]=1}),Ce[n[13]]=i+","+e,Kt(r,function(o){var a=o.split(":");Ce[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ue.units[i]="px"});Jt.registerPlugin(Td);var He=Jt.registerPlugin(Td)||Jt;He.core.Tween;class s1 extends ur{constructor(t,r,n,o){super(t);ct(this,"app");ct(this,"game");ct(this,"arrow");ct(this,"prizeSectors",[]);ct(this,"isWin",!1);this.app=r,this.game=n,this.prizeSectors=o}drawArrowWheel(){const t=io.getTexture("arrow");this.arrow=new ur(t),this.setPosition(this.arrow,this.x,this.y-this.height/2+this.height/6),this.arrow.rotation=Math.PI,Or.updateScale(this.arrow,10,10),this.app.stage.addChild(this.arrow)}getWinningPrize(t){const r=t*180/Math.PI,n=Math.round((360-r%360)%360);return this.prizeSectors.find(o=>{const[a,s]=o.deg;return a<s?n>=a&&n<s:n>=a||n<s})||null}addWheel(){this.app.stage.addChild(this),this.pivot.set(.5,.5),this.drawArrowWheel()}setPosition(t,r,n){t.anchor.set(.5,.5),t.x=r,t.y=n}setScale(t,r){this.scale.set(t,r)}async rotateWheel(t,r){const n=new Error("Error in complete"),o=t*Math.PI*2,a=Math.random()*Math.PI*2,s=o+a,u=this.x,l=this.y,h=12,f=2,c=h-f,d=4,_=25;return new Promise((p,v)=>{const m=He.timeline({onComplete:()=>{try{this.stopRotation(m);const x=this.getWinningPrize(this.rotation);if(x===null)throw new Error("Something wrong with prize");this.isWin=x.money===r.money&&x.color===r.color,console.log(this.isWin?"Success!":"Failed!",{bet:r,prize:x}),this.game.store.updateBalance(this.isWin?x.money:r.money,this.isWin),console.log(`Your balance ${this.game.store.balance}`),p()}catch(x){console.error(n),v(x)}}});m.to(this,{rotation:this.rotation+s,duration:h,ease:"power3.inOut",onUpdate:()=>{const x=m.time();if(x>=f&&x<=c){const T=c-f,w=(x-f)/T,y=Math.sin(w*Math.PI),S=Math.sin(x*_)*d*y,g=Math.cos(x*_)*d*y;He.set(this,{x:u+S,y:l+g})}else He.set(this,{x:u,y:l})}})})}stopRotation(...t){for(const r of t)"kill"in r&&typeof r.kill=="function"?r.kill():He.killTweensOf(r)}}/*!
 * @pixi/filter-adjustment - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vs=function(i,e){return Vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Vs(i,e)};function u1(i,e){Vs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var l1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,h1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(i){u1(e,i);function e(t){var r=i.call(this,l1,h1)||this;return r.gamma=1,r.saturation=1,r.contrast=1,r.brightness=1,r.red=1,r.green=1,r.blue=1,r.alpha=1,Object.assign(r,t),r}return e.prototype.apply=function(t,r,n,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,r,n,o)},e})(st);/*!
 * @pixi/filter-kawase-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ws=function(i,e){return Ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Ws(i,e)};function f1(i,e){Ws(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var c1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,d1=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,p1=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Kn=function(i){f1(e,i);function e(t,r,n){t===void 0&&(t=4),r===void 0&&(r=3),n===void 0&&(n=!1);var o=i.call(this,c1,n?p1:d1)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new ht,o.pixelSize=1,o._clamp=n,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=r),o}return e.prototype.apply=function(t,r,n,o){var a=this._pixelSize.x/r._frame.width,s=this._pixelSize.y/r._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,r,n,o);else{for(var l=t.getFilterTexture(),h=r,f=l,c=void 0,d=this._quality-1,_=0;_<d;_++)u=this._kernels[_]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,f,1),c=h,h=f,f=c;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,n,o),t.returnFilterTexture(l)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,r){return t+r+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,r=this._quality,n=[t];if(t>0)for(var o=t,a=t/r,s=1;s<r;s++)o-=a,n.push(o);this._kernels=n,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof ht?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(st);/*!
 * @pixi/filter-advanced-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ys=function(i,e){return Ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Ys(i,e)};function Sd(i,e){Ys(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ed=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,v1=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,_1=function(i){Sd(e,i);function e(t){t===void 0&&(t=.5);var r=i.call(this,Ed,v1)||this;return r.threshold=t,r}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(st),m1=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(i){Sd(e,i);function e(t){var r=i.call(this,Ed,m1)||this;r.bloomScale=1,r.brightness=1,r._resolution=W.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var n=Object.assign(e.defaults,t);r.bloomScale=n.bloomScale,r.brightness=n.brightness;var o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,l=n.resolution;return r._extractFilter=new _1(n.threshold),r._extractFilter.resolution=l,r._blurFilter=o?new Kn(o):new Kn(a,s),r.pixelSize=u,r.resolution=l,r}return e.prototype.apply=function(t,r,n,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,r,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,r,n,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:W.FILTER_RESOLUTION},e})(st);/*!
 * @pixi/filter-ascii - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $s=function(i,e){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},$s(i,e)};function y1(i,e){$s(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var g1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,x1=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(i){y1(e,i);function e(t){t===void 0&&(t=8);var r=i.call(this,g1,x1)||this;return r.size=t,r}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-bevel - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qs=function(i,e){return qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},qs(i,e)};function b1(i,e){qs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var T1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,S1=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(i){b1(e,i);function e(t){var r=i.call(this,T1,S1)||this;return r._thickness=2,r._angle=0,r.uniforms.lightColor=new Float32Array(3),r.uniforms.shadowColor=new Float32Array(3),Object.assign(r,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),r.padding=1,r}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/Br},set:function(t){this._angle=t*Br,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return Te(this.uniforms.lightColor)},set:function(t){Xt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return Te(this.uniforms.shadowColor)},set:function(t){Xt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ks=function(i,e){return Ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Ks(i,e)};function E1(i,e){Ks(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(i){E1(e,i);function e(t,r,n,o){t===void 0&&(t=2),r===void 0&&(r=4),n===void 0&&(n=W.FILTER_RESOLUTION),o===void 0&&(o=5);var a=i.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof ht?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new zn(!0,s,r,n,o),a.blurYFilter=new zn(!1,u,r,n,o),a.blurYFilter.blendMode=rt.SCREEN,a.defaultFilter=new bx,a}return e.prototype.apply=function(t,r,n,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,r,n,o),this.blurXFilter.apply(t,r,a,1),this.blurYFilter.apply(t,a,n,0),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-bulge-pinch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zs=function(i,e){return Zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Zs(i,e)};function w1(i,e){Zs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var P1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,C1=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(i){w1(e,i);function e(t){var r=i.call(this,P1,C1)||this;return r.uniforms.dimensions=new Float32Array(2),Object.assign(r,e.defaults,t),r}return e.prototype.apply=function(t,r,n,o){var a=r.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(st);/*!
 * @pixi/filter-color-map - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qs=function(i,e){return Qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Qs(i,e)};function O1(i,e){Qs(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,R1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(i){O1(e,i);function e(t,r,n){r===void 0&&(r=!1),n===void 0&&(n=1);var o=i.call(this,A1,R1)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=r,o.mix=n,o.colorMap=t,o}return e.prototype.apply=function(t,r,n,o){this.uniforms._mix=this.mix,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var r;t&&(t instanceof at||(t=at.from(t)),!((r=t)===null||r===void 0)&&r.baseTexture&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=le.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?oe.NEAREST:oe.LINEAR;var r=this._colorMap;r&&r.baseTexture&&(r.baseTexture._glTextures={},r.baseTexture.scaleMode=this._scaleMode,r.baseTexture.mipmap=le.OFF,r._updateID++,r.baseTexture.emit("update",r.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),i.prototype.destroy.call(this)},e})(st);/*!
 * @pixi/filter-color-overlay - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Js=function(i,e){return Js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Js(i,e)};function I1(i,e){Js(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var M1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,F1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(i){I1(e,i);function e(t,r){t===void 0&&(t=0),r===void 0&&(r=1);var n=i.call(this,M1,F1)||this;return n._color=0,n._alpha=1,n.uniforms.color=new Float32Array(3),n.color=t,n.alpha=r,n}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var r=this.uniforms.color;typeof t=="number"?(Xt(t,r),this._color=t):(r[0]=t[0],r[1]=t[1],r[2]=t[2],this._color=Te(r))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var tu=function(i,e){return tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},tu(i,e)};function D1(i,e){tu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var N1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,B1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(i){D1(e,i);function e(t,r,n){t===void 0&&(t=16711680),r===void 0&&(r=0),n===void 0&&(n=.4);var o=i.call(this,N1,B1)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=r,o.epsilon=n,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var r=this.uniforms.originalColor;typeof t=="number"?(Xt(t,r),this._originalColor=t):(r[0]=t[0],r[1]=t[1],r[2]=t[2],this._originalColor=Te(r))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var r=this.uniforms.newColor;typeof t=="number"?(Xt(t,r),this._newColor=t):(r[0]=t[0],r[1]=t[1],r[2]=t[2],this._newColor=Te(r))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-convolution - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var eu=function(i,e){return eu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},eu(i,e)};function L1(i,e){eu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var U1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,k1=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(i){L1(e,i);function e(t,r,n){r===void 0&&(r=200),n===void 0&&(n=200);var o=i.call(this,U1,k1)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=r,o.height=n,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var r=this;t.forEach(function(n,o){r.uniforms.matrix[o]=n})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-cross-hatch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ru=function(i,e){return ru=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},ru(i,e)};function G1(i,e){ru(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var j1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,z1=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(i){G1(e,i);function e(){return i.call(this,j1,z1)||this}return e})(st);/*!
 * @pixi/filter-crt - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var iu=function(i,e){return iu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},iu(i,e)};function X1(i,e){iu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var H1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,V1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(i){X1(e,i);function e(t){var r=i.call(this,H1,V1)||this;return r.time=0,r.seed=0,r.uniforms.dimensions=new Float32Array(2),Object.assign(r,e.defaults,t),r}return e.prototype.apply=function(t,r,n,o){var a=r.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(st);/*!
 * @pixi/filter-dot - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nu=function(i,e){return nu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},nu(i,e)};function W1(i,e){nu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Y1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$1=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(i){W1(e,i);function e(t,r){t===void 0&&(t=1),r===void 0&&(r=5);var n=i.call(this,Y1,$1)||this;return n.scale=t,n.angle=r,n}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-drop-shadow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ou=function(i,e){return ou=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},ou(i,e)};function q1(i,e){ou(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zn=function(){return Zn=Object.assign||function(e){for(var t=arguments,r,n=1,o=arguments.length;n<o;n++){r=t[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Zn.apply(this,arguments)},K1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Z1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(i){q1(e,i);function e(t){var r=i.call(this)||this;r.angle=45,r._distance=5,r._resolution=W.FILTER_RESOLUTION;var n=t?Zn(Zn({},e.defaults),t):e.defaults,o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,l=n.resolution;r._tintFilter=new st(K1,Z1),r._tintFilter.uniforms.color=new Float32Array(4),r._tintFilter.uniforms.shift=new ht,r._tintFilter.resolution=l,r._blurFilter=o?new Kn(o):new Kn(a,s),r.pixelSize=u,r.resolution=l;var h=n.shadowOnly,f=n.rotation,c=n.distance,d=n.alpha,_=n.color;return r.shadowOnly=h,r.rotation=f,r.distance=c,r.alpha=d,r.color=_,r._updatePadding(),r}return e.prototype.apply=function(t,r,n,o){var a=t.getFilterTexture();this._tintFilter.apply(t,r,a,1),this._blurFilter.apply(t,a,n,o),this.shadowOnly!==!0&&t.applyFilter(this,r,n,0),t.returnFilterTexture(a)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/Br},set:function(t){this.angle=t*Br,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return Te(this._tintFilter.uniforms.color)},set:function(t){Xt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:W.FILTER_RESOLUTION},e})(st);/*!
 * @pixi/filter-emboss - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var au=function(i,e){return au=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},au(i,e)};function Q1(i,e){au(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var J1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tT=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(i){Q1(e,i);function e(t){t===void 0&&(t=5);var r=i.call(this,J1,tT)||this;return r.strength=t,r}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-glitch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var su=function(i,e){return su=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},su(i,e)};function eT(i,e){su(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var rT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,iT=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(i){eT(e,i);function e(t){var r=i.call(this,rT,iT)||this;return r.offset=100,r.fillMode=e.TRANSPARENT,r.average=!1,r.seed=0,r.minSize=8,r.sampleSize=512,r._slices=0,r._offsets=new Float32Array(1),r._sizes=new Float32Array(1),r._direction=-1,r.uniforms.dimensions=new Float32Array(2),r._canvas=document.createElement("canvas"),r._canvas.width=4,r._canvas.height=r.sampleSize,r.texture=at.from(r._canvas,{scaleMode:oe.NEAREST}),Object.assign(r,e.defaults,t),r}return e.prototype.apply=function(t,r,n,o){var a=r.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,r,n,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,r=this._slices-1,n=this.sampleSize,o=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<r;u++){var l=s/(a-u),h=Math.max(l*(1-Math.random()*.6),o);t[u]=h,s-=h}t[r]=s}else{for(var s=1,f=Math.sqrt(1/this._slices),u=0;u<r;u++){var h=Math.max(f*s*Math.random(),o);t[u]=h,s-=h}t[r]=s}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,r=this._slices-1,n=r;n>0;n--){var o=Math.random()*n>>0,a=t[n];t[n]=t[o],t[o]=a}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,r=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,l=o>0?o:0,h=o<0?-o:0;n.fillStyle="rgba("+l+", "+h+", 0, 1)",n.fillRect(0,a>>0,t,u+1>>0),a+=u}r.baseTexture.update(),this.uniforms.displacementMap=r},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var r=Math.min(this._slices,t.length),n=0;n<r;n++)this._sizes[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var r=Math.min(this._slices,t.length),n=0;n<r;n++)this._offsets[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var r=t*Br;this.uniforms.sinDir=Math.sin(r),this.uniforms.cosDir=Math.cos(r)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(st);/*!
 * @pixi/filter-glow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var uu=function(i,e){return uu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},uu(i,e)};function nT(i,e){uu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var oT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,aT=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(i){nT(e,i);function e(t){var r=this,n=Object.assign({},e.defaults,t),o=n.outerStrength,a=n.innerStrength,s=n.color,u=n.knockout,l=n.quality,h=Math.round(n.distance);return r=i.call(this,oT,aT.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/h).toFixed(7)).replace(/__DIST__/gi,h.toFixed(0)+".0"))||this,r.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(r,{color:s,outerStrength:o,innerStrength:a,padding:h,knockout:u}),r}return Object.defineProperty(e.prototype,"color",{get:function(){return Te(this.uniforms.glowColor)},set:function(t){Xt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e})(st);/*!
 * @pixi/filter-godray - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var lu=function(i,e){return lu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},lu(i,e)};function sT(i,e){lu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var uT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,lT=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,hT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(i){sT(e,i);function e(t){var r=i.call(this,uT,hT.replace("${perlin}",lT))||this;r.parallel=!0,r.time=0,r._angle=0,r.uniforms.dimensions=new Float32Array(2);var n=Object.assign(e.defaults,t);return r._angleLight=new ht,r.angle=n.angle,r.gain=n.gain,r.lacunarity=n.lacunarity,r.alpha=n.alpha,r.parallel=n.parallel,r.center=n.center,r.time=n.time,r}return e.prototype.apply=function(t,r,n,o){var a=r.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var r=t*Br;this._angleLight.x=Math.cos(r),this._angleLight.y=Math.sin(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e})(st);/*!
 * @pixi/filter-motion-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var hu=function(i,e){return hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},hu(i,e)};function fT(i,e){hu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,dT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(i){fT(e,i);function e(t,r,n){t===void 0&&(t=[0,0]),r===void 0&&(r=5),n===void 0&&(n=0);var o=i.call(this,cT,dT)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new Pr(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=r,o.offset=n,o}return e.prototype.apply=function(t,r,n,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var r=t[0],n=t[1];this._velocity.set(r,n)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-multi-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fu=function(i,e){return fu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},fu(i,e)};function pT(i,e){fu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var vT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_T=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(i){pT(e,i);function e(t,r,n){r===void 0&&(r=.05),n===void 0&&(n=t.length);var o=i.call(this,vT,_T.replace(/%maxColors%/g,n.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=r,o._maxColors=n,o.uniforms.originalColors=new Float32Array(n*3),o.uniforms.targetColors=new Float32Array(n*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var r=this.uniforms.originalColors,n=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");r[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=Xt(u):s[0]=Te(u),r[a*3]=u[0],r[a*3+1]=u[1],r[a*3+2]=u[2];var l=s[1];typeof l=="number"?l=Xt(l):s[1]=Te(l),n[a*3]=l[0],n[a*3+1]=l[1],n[a*3+2]=l[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-old-film - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var cu=function(i,e){return cu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},cu(i,e)};function mT(i,e){cu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(i){mT(e,i);function e(t,r){r===void 0&&(r=0);var n=i.call(this,yT,gT)||this;return n.seed=0,n.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(n.seed=t,t=void 0):n.seed=r,Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,r,n,o){var a,s;this.uniforms.dimensions[0]=(a=r.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=r.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e})(st);/*!
 * @pixi/filter-outline - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var du=function(i,e){return du=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},du(i,e)};function xT(i,e){du(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,TT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`,ST=function(i){xT(e,i);function e(t,r,n){t===void 0&&(t=1),r===void 0&&(r=0),n===void 0&&(n=.1);var o=i.call(this,bT,TT.replace(/\$\{angleStep\}/,e.getAngleStep(n)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:r,quality:n}),o}return e.getAngleStep=function(t){var r=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/r).toFixed(7)},e.prototype.apply=function(t,r,n,o){this.uniforms.thickness[0]=this._thickness/r._frame.width,this.uniforms.thickness[1]=this._thickness/r._frame.height,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"color",{get:function(){return Te(this.uniforms.outlineColor)},set:function(t){Xt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e}(st);/*!
 * @pixi/filter-pixelate - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pu=function(i,e){return pu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},pu(i,e)};function ET(i,e){pu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,PT=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(i){ET(e,i);function e(t){t===void 0&&(t=10);var r=i.call(this,wT,PT)||this;return r.size=t,r}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-radial-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vu=function(i,e){return vu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},vu(i,e)};function CT(i,e){vu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var OT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,AT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(i){CT(e,i);function e(t,r,n,o){t===void 0&&(t=0),r===void 0&&(r=[0,0]),n===void 0&&(n=5),o===void 0&&(o=-1);var a=i.call(this,OT,AT)||this;return a._angle=0,a.angle=t,a.center=r,a.kernelSize=n,a.radius=o,a}return e.prototype.apply=function(t,r,n,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-reflection - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _u=function(i,e){return _u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},_u(i,e)};function RT(i,e){_u(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var IT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,MT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(i){RT(e,i);function e(t){var r=i.call(this,IT,MT)||this;return r.time=0,r.uniforms.amplitude=new Float32Array(2),r.uniforms.waveLength=new Float32Array(2),r.uniforms.alpha=new Float32Array(2),r.uniforms.dimensions=new Float32Array(2),Object.assign(r,e.defaults,t),r}return e.prototype.apply=function(t,r,n,o){var a,s;this.uniforms.dimensions[0]=(a=r.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=r.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(st);/*!
 * @pixi/filter-rgb-split - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var mu=function(i,e){return mu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},mu(i,e)};function FT(i,e){mu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var DT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,NT=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(i){FT(e,i);function e(t,r,n){t===void 0&&(t=[-10,0]),r===void 0&&(r=[0,10]),n===void 0&&(n=[0,0]);var o=i.call(this,DT,NT)||this;return o.red=t,o.green=r,o.blue=n,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-shockwave - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var yu=function(i,e){return yu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},yu(i,e)};function BT(i,e){yu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var LT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,UT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(i){BT(e,i);function e(t,r,n){t===void 0&&(t=[0,0]),n===void 0&&(n=0);var o=i.call(this,LT,UT)||this;return o.center=t,Object.assign(o,e.defaults,r),o.time=n,o}return e.prototype.apply=function(t,r,n,o){this.uniforms.time=this.time,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(st);/*!
 * @pixi/filter-simple-lightmap - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var gu=function(i,e){return gu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},gu(i,e)};function kT(i,e){gu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var GT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,jT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(i){kT(e,i);function e(t,r,n){r===void 0&&(r=0),n===void 0&&(n=1);var o=i.call(this,GT,jT)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,n]),o.texture=t,o.color=r,o}return e.prototype.apply=function(t,r,n,o){var a,s;this.uniforms.dimensions[0]=(a=r.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=r.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,r,n,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var r=this.uniforms.ambientColor;typeof t=="number"?(Xt(t,r),this._color=t):(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],this._color=Te(r))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-tilt-shift - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xu=function(i,e){return xu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},xu(i,e)};function so(i,e){xu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var zT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,XT=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,wd=function(i){so(e,i);function e(t,r,n,o){t===void 0&&(t=100),r===void 0&&(r=600);var a=i.call(this,zT,XT)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=r,a.uniforms.start=n||new ht(0,window.innerHeight/2),a.uniforms.end=o||new ht(600,window.innerHeight/2),a.uniforms.delta=new ht(30,30),a.uniforms.texSize=new ht(window.innerWidth,window.innerHeight),a.updateDelta(),a}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(st),HT=function(i){so(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+r*r);this.uniforms.delta.x=t/n,this.uniforms.delta.y=r/n},e}(wd),VT=function(i){so(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+r*r);this.uniforms.delta.x=-r/n,this.uniforms.delta.y=t/n},e}(wd);(function(i){so(e,i);function e(t,r,n,o){t===void 0&&(t=100),r===void 0&&(r=600);var a=i.call(this)||this;return a.tiltShiftXFilter=new HT(t,r,n,o),a.tiltShiftYFilter=new VT(t,r,n,o),a}return e.prototype.apply=function(t,r,n,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,r,a,1),this.tiltShiftYFilter.apply(t,a,n,o),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(st);/*!
 * @pixi/filter-twist - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var bu=function(i,e){return bu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},bu(i,e)};function WT(i,e){bu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var YT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$T=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(i){WT(e,i);function e(t){var r=i.call(this,YT,$T)||this;return Object.assign(r,e.defaults,t),r}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new ht},e})(st);/*!
 * @pixi/filter-zoom-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Tu=function(i,e){return Tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Tu(i,e)};function qT(i,e){Tu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function KT(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(i);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(i,r[n])&&(t[r[n]]=i[r[n]]);return t}var ZT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,QT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(i){qT(e,i);function e(t){var r=this,n=Object.assign(e.defaults,t),o=n.maxKernelSize,a=KT(n,["maxKernelSize"]);return r=i.call(this,ZT,QT.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(r,a),r}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(st);const JT=539,tS=767,Hi=()=>{var i;return Math.max((i=document.documentElement)==null?void 0:i.clientWidth,window.innerWidth||0)},Pd=()=>{var i;return Math.max((i=document.documentElement)==null?void 0:i.clientHeight,window.innerHeight||0)},Ef=()=>Hi()<tS,wf=()=>Hi()<JT;class Vi{constructor(e,t,r,n){ct(this,"wheel");ct(this,"app");ct(this,"prizeSectors",[]);ct(this,"buttonsBet",[]);ct(this,"isMobile");ct(this,"topOffset",15);ct(this,"outlineFilter",new ST(0,16777215));ct(this,"spinButton",new ur(at.from("btnRoll")));ct(this,"game");ct(this,"bet",null);ct(this,"mapHandleButtons",new Map);ct(this,"onHandleSpinButton",()=>this.handleSpinButtonClick());ct(this,"onHandleBetButton",(e,t,r)=>this.handleBetButtonClick(e,t,r));this.app=e,this.wheel=t,this.prizeSectors=this.filterSectors(r),this.game=n,this.isMobile=this.game.isMobile,this.initial()}filterSectors(e){const t=new Map;return e.filter(r=>{const n=`${r.money}-${r.color}`;return t.has(n)?!1:(t.set(n,!0),!0)})}setButtonHandler(e,t){this.clearButtonHandler(e),e.on("pointerdown",t),this.mapHandleButtons.set(e,t)}clearButtonHandler(e){const t=this.mapHandleButtons.get(e);t&&(e.off("pointerdown",t),this.mapHandleButtons.delete(e))}createSpinButton(){this.spinButton.buttonMode=!0,this.spinButton.interactive=!0,this.setButtonHandler(this.spinButton,this.onHandleSpinButton),this.app.stage.addChild(this.spinButton)}createBetButtons(){const e=Hi(),t=e*(this.isMobile?.21:.08),r=e*.04,n=e*.02,o=e*.02,a=this.isMobile?Vi.basedFontSize(.02,18):Vi.basedFontSize(.03,24),s=this.isMobile?3:this.prizeSectors.length,u=Math.ceil(this.prizeSectors.length/s),l=s*t+(s-1)*n,h=(window.innerWidth-l)/2,f=this.topOffset;this.prizeSectors.forEach((c,d)=>{const{money:_,color:p}=c,v=new ri;v.money=_,v.color=p,v.beginFill(Cu(p)),v.drawRoundedRect(0,0,t,r,12),v.endFill();const m=new eo(`$${_}`,{fontSize:a,fill:16777215,fontWeight:"bold"});if(m.anchor.set(.5),m.x=t/2,m.y=r/2,v.addChild(m),this.isMobile){const x=d%3,T=Math.floor(d/3);if(v.x=h+x*(t+n),v.y=f+T*(r+o),T===u-1&&this.prizeSectors.length%3!==0){const w=3-this.prizeSectors.length%3;v.x+=w*(t+n)/2}}else v.x=h+d*(t+n),v.y=f;v.buttonMode=!0,v.interactive=!0,this.setButtonHandler(v,()=>this.onHandleBetButton(v,_,p)),this.buttonsBet.push(v),this.app.stage.addChild(v)})}async handleSpinButtonClick(){const e=this.game.store.balance;if(this.bet===null||e<this.bet.money)return;He.killTweensOf(this.spinButton.scale);const{x:t,y:r}=this.spinButton.scale,n=Math.floor(Math.random()*9)+2;He.fromTo(this.spinButton.scale,{x:t,y:r},{x:t*.8,y:r*.8,duration:.2,ease:"power1.out",yoyo:!0,repeat:1}),this.clearButtonHandler(this.spinButton),this.buttonsBet.forEach(o=>this.clearButtonHandler(o)),await this.wheel.rotateWheel(n,this.bet),this.setButtonHandler(this.spinButton,this.onHandleSpinButton),this.buttonsBet.forEach(o=>this.setButtonHandler(o,()=>this.onHandleBetButton(o,o.money,o.color))),this.game.showBalance(),this.bet=null}handleBetButtonClick(e,t,r){var n;this.bet={money:t,color:r},!((n=e.filters)!=null&&n.includes(this.outlineFilter))&&(this.outlineFilter.thickness=0,this.buttonsBet.forEach(o=>{var a;(a=o.filters)==null||a.forEach(s=>He.killTweensOf(s)),o.filters=[]}),e.filters=[this.outlineFilter],He.to(this.outlineFilter,{thickness:4,duration:.4,ease:"power2.out"}))}setPosition(e,t,r){e instanceof ri||e.anchor.set(.5,.5),e.x=t,e.y=r}initial(){this.createSpinButton(),this.createBetButtons()}static basedFontSize(e,t=36,r=14){const n=Hi()/100,o=Pd()/100,s=Math.min(n,o)*e*100;return Math.max(r,Math.min(t,s))}}class Or extends Se{constructor(t,r,n){super();ct(this,"app");ct(this,"appView");ct(this,"wheel");ct(this,"menu");ct(this,"balanceText");ct(this,"offset",20);ct(this,"store");ct(this,"isTablet",Ef());ct(this,"isMobile",wf());ct(this,"prizeSectors",[{money:1e3,color:"#E1B42B",deg:[345,15]},{money:450,color:"#D62828",deg:[15,45]},{money:100,color:"#1E1E1E",deg:[45,75]},{money:200,color:"#D62828",deg:[75,105]},{money:450,color:"#1E1E1E",deg:[105,135]},{money:100,color:"#D62828",deg:[135,165]},{money:250,color:"#1E1E1E",deg:[165,195]},{money:200,color:"#D62828",deg:[195,225]},{money:100,color:"#1E1E1E",deg:[225,255]},{money:150,color:"#D62828",deg:[255,285]},{money:200,color:"#1E1E1E",deg:[285,315]},{money:100,color:"#D62828",deg:[315,345]}]);this.app=t,this.appView=r,this.store=n,this.resizeCanvas(),window.addEventListener("resize",this.resizeCanvas.bind(this)),this.loadBackground(),this.loadWheel(),this.loadMenu(),this.showBalance()}clearScene(){this.app.stage.removeChildren()}resizeCanvas(){const t=this.appView.offsetWidth,r=this.appView.offsetHeight;this.app.view.width=t,this.app.view.height=r,this.isTablet=Ef(),this.isMobile=wf(),this.clearScene(),this.loadBackground(),this.loadWheel(),this.loadMenu(),this.showBalance()}loadBackground(){const t=at.from("bg"),r=new ex(t);r.width=this.app.view.width,r.height=this.app.view.height,this.app.stage.addChild(r)}loadWheel(){const t=io.getTexture("wheel");this.wheel=new s1(t,this.app,this,this.prizeSectors),this.isTablet?Or.updateScale(this.wheel,90,60):Or.updateScale(this.wheel,80,90),this.wheel.setPosition(this.wheel,this.app.screen.width/2,this.app.screen.height/2),this.wheel.addWheel()}loadMenu(){this.menu=new Vi(this.app,this.wheel,this.prizeSectors,this),this.isTablet?Or.updateScale(this.menu.spinButton,45,40):Or.updateScale(this.menu.spinButton,35,35);const t=this.app.screen.width/2,r=this.app.screen.height-window.innerHeight/100*10;this.menu.setPosition(this.menu.spinButton,t,r)}showBalance(){this.balanceText&&this.app.stage.removeChild(this.balanceText);const t=Vi.basedFontSize(.06,48);this.balanceText=new eo(`$${String(this.store.balance)}`,{fontSize:t,fill:16777215,fontWeight:"bold"}),this.balanceText.anchor.set(.5,.5),this.balanceText.x=this.app.screen.width-this.app.screen.width+this.balanceText.width+this.offset,this.balanceText.y=this.app.screen.height-this.balanceText.height-this.offset,this.app.stage.addChild(this.balanceText)}static updateScale(t,r,n){const o=Hi(),a=Pd(),s=o*r/100,u=a*n/100,l=t.texture.width,h=t.texture.height,f=s/l,c=u/h,d=Math.min(f,c);t.scale.set(d)}}class eS{constructor(){ct(this,"_balance",1e3)}get balance(){return this._balance}updateBalance(e,t){t?this._balance+=e:this._balance-=e}}class rS{constructor(e,t){ct(this,"app");ct(this,"appView");ct(this,"store");this.app=e,this.appView=t,this.store=new eS,this.init()}async init(){const e=new Error("Boot doesn't init");try{await io.load(),console.log("loading complete"),new Or(this.app,this.appView,this.store)}catch{console.error(e.message)}}}async function Pf(){try{const i=new Sc({resizeTo:window});globalThis.__PIXI_APP__=i;const e=document.querySelector("#app");if(e===null)throw new Error("Container doesnt exsist");e.appendChild(i.view),new rS(i,e)}catch(i){console.error("Failed to initialize game:",i)}}document.readyState==="complete"?Pf():window.addEventListener("DOMContentLoaded",Pf);
