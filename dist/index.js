"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var n=t(function(g,d){
var o=require('@stdlib/blas-ext-base-dindex-of-falsy/dist').ndarray;function c(r,e,a,u){var i;return r<=0?-1:(u+=(r-1)*a,a*=-1,i=o(r,e,a,u),i<0?i:r-1-i)}d.exports=c
});var l=t(function(h,v){
var O=require('@stdlib/strided-base-stride2offset/dist'),p=n();function F(r,e,a){return p(r,e,a,O(r,a))}v.exports=F
});var f=t(function(k,y){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=l(),j=n();I(q,"ndarray",j);y.exports=q
});var m=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=f(),s,x=R(m(__dirname,"./native.js"));_(x)?s=E:s=x;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
