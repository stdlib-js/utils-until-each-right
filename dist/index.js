"use strict";var m=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var g=m(function(E,s){
var v=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,a,h){var t,u;if(!v(r))throw new TypeError(i('1YBAh',r));if(!n(e))throw new TypeError(i('1YB2H',e));if(!n(a))throw new TypeError(i('1YB3N',a));for(t=r.length,u=t-1;u>=0&&!e(r[u],u,r);)a.call(h,r[u],u,r),t!==r.length&&(u+=r.length-t,t=r.length),u-=1;return r}s.exports=w
});var f=g();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
