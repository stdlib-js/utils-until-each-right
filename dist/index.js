"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=m(function(E,s){
var v=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,t,h){var a,u;if(!v(r))throw new TypeError(i('1YBAh',r));if(!n(e))throw new TypeError(i('1YB2H',e));if(!n(t))throw new TypeError(i('1YB3N',t));for(a=r.length,u=a-1;u>=0&&!e(r[u],u,r);)t.call(h,r[u],u,r),a!==r.length&&(u+=r.length-a,a=r.length),u-=1;return r}s.exports=w
});var f=g();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
