!function(r){var e={};function n(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return r[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)n.d(t,a,function(e){return r[e]}.bind(null,a));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e,n){"use strict";n.r(e),$(()=>{const r=function(){const r=new URL("https://us-central1-charity-banner.cloudfunctions.net/banner");return r.searchParams.set("charityURL",this.charityURL),r.searchParams.set("charityId",this.charityId),r.searchParams.set("bannerHeight",this.bannerHeight),r.searchParams.set("bannerStyle",this.bannerStyle),r.searchParams.set("bannerPrimaryColor",this.bannerPrimaryColor),r.searchParams.set("bannerSecondaryColor",this.bannerSecondaryColor),r.searchParams.set("bannerHighlightColor",this.bannerHighlightColor),`<script src="${r.href}"><\/script>`}.bind({charityURL:"https://benbotvinick.com",charityId:"21oiu401",bannerHeight:"10",bannerStyle:"",bannerPrimaryColor:"000000",bannerSecondaryColor:"000000",bannerHighlightColor:"000000 asdf"})();console.log(r)})}]);