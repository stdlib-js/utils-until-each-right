// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,n,o,i){var l,d;if(!r(s))throw new TypeError(e("0lwBO",s));if(!t(n))throw new TypeError(e("0lw2S",n));if(!t(o))throw new TypeError(e("0lw3Z",o));for(d=(l=s.length)-1;d>=0&&!n(s[d],d,s);)o.call(i,s[d],d,s),l!==s.length&&(d+=s.length-l,l=s.length),d-=1;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
