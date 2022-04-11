var bn=Object.defineProperty,In=Object.defineProperties;var wn=Object.getOwnPropertyDescriptors;var Ft=Object.getOwnPropertySymbols;var En=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable;var tt=(r,e,t)=>e in r?bn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,we=(r,e)=>{for(var t in e||(e={}))En.call(e,t)&&tt(r,t,e[t]);if(Ft)for(var t of Ft(e))Tn.call(e,t)&&tt(r,t,e[t]);return r},Ee=(r,e)=>In(r,wn(e));var I=(r,e,t)=>(tt(r,typeof e!="symbol"?e+"":e,t),t);const Sn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Sn();function B(){}function kn(r,e){for(const t in e)r[t]=e[t];return r}function yr(r){return r()}function jt(){return Object.create(null)}function ge(r){r.forEach(yr)}function On(r){return typeof r=="function"}function Ve(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Te;function Ht(r,e){return Te||(Te=document.createElement("a")),Te.href=e,r===Te.href}function Rn(r){return Object.keys(r).length===0}function An(r,e,t,n){if(r){const i=br(r,e,t,n);return r[0](i)}}function br(r,e,t,n){return r[1]&&n?kn(t.ctx.slice(),r[1](n(e))):t.ctx}function Cn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Pn(r,e,t,n,i,s){if(i){const o=br(e,t,n,s);r.p(o,i)}}function Dn(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function T(r,e){r.appendChild(e)}function G(r,e,t){r.insertBefore(e,t||null)}function F(r){r.parentNode.removeChild(r)}function A(r){return document.createElement(r)}function Me(r){return document.createTextNode(r)}function rt(){return Me(" ")}function Et(){return Me("")}function Ir(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function L(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Nn(r){return Array.from(r.childNodes)}function Vt(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}let ue;function ce(r){ue=r}function Mn(){if(!ue)throw new Error("Function called outside component initialization");return ue}function Ln(r){Mn().$$.on_destroy.push(r)}function $n(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const oe=[],Wt=[],Re=[],zt=[],Un=Promise.resolve();let ht=!1;function xn(){ht||(ht=!0,Un.then(wr))}function ft(r){Re.push(r)}const nt=new Set;let Se=0;function wr(){const r=ue;do{for(;Se<oe.length;){const e=oe[Se];Se++,ce(e),Bn(e.$$)}for(ce(null),oe.length=0,Se=0;Wt.length;)Wt.pop()();for(let e=0;e<Re.length;e+=1){const t=Re[e];nt.has(t)||(nt.add(t),t())}Re.length=0}while(oe.length);for(;zt.length;)zt.pop()();ht=!1,nt.clear(),ce(r)}function Bn(r){if(r.fragment!==null){r.update(),ge(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ft)}}const Ae=new Set;let V;function Tt(){V={r:0,c:[],p:V}}function St(){V.r||ge(V.c),V=V.p}function y(r,e){r&&r.i&&(Ae.delete(r),r.i(e))}function b(r,e,t,n){if(r&&r.o){if(Ae.has(r))return;Ae.add(r),V.c.push(()=>{Ae.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}}function re(r){r&&r.c()}function K(r,e,t,n){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=r.$$;i&&i.m(e,t),n||ft(()=>{const c=s.map(yr).filter(On);o?o.push(...c):ge(c),r.$$.on_mount=[]}),a.forEach(ft)}function J(r,e){const t=r.$$;t.fragment!==null&&(ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Fn(r,e){r.$$.dirty[0]===-1&&(oe.push(r),xn(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function We(r,e,t,n,i,s,o,a=[-1]){const c=ue;ce(r);const l=r.$$={fragment:null,ctx:null,props:s,update:B,not_equal:i,bound:jt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:jt(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(r,e.props||{},(h,f,...g)=>{const v=g.length?g[0]:f;return l.ctx&&i(l.ctx[h],l.ctx[h]=v)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](v),u&&Fn(r,h)),f}):[],l.update(),u=!0,ge(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const h=Nn(e.target);l.fragment&&l.fragment.l(h),h.forEach(F)}else l.fragment&&l.fragment.c();e.intro&&y(r.$$.fragment),K(r,e.target,e.anchor,e.customElement),wr()}ce(c)}class ze{$destroy(){J(this,1),this.$destroy=B}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Rn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function jn(r){let e,t;const n=r[1].default,i=An(n,r,r[0],null);return{c(){e=A("div"),i&&i.c(),L(e,"class","sf-container sf-column sf-center sf-flex")},m(s,o){G(s,e,o),i&&i.m(e,null),t=!0},p(s,[o]){i&&i.p&&(!t||o&1)&&Pn(i,n,s,s[0],t?Cn(n,s[0],o,null):Dn(s[0]),null)},i(s){t||(y(i,s),t=!0)},o(s){b(i,s),t=!1},d(s){s&&F(e),i&&i.d(s)}}}function Hn(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class kt extends ze{constructor(e){super(),We(this,e,Hn,jn,Ve,{})}}function Vn(r){let e;return{c(){e=A("i"),L(e,"class","fa-solid fa-spinner fa-spin-pulse fa-6x sf-primary")},m(t,n){G(t,e,n)},p:B,d(t){t&&F(e)}}}function Wn(r){let e,t;return e=new kt({props:{$$slots:{default:[Vn]},$$scope:{ctx:r}}}),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}class Er extends ze{constructor(e){super(),We(this,e,null,Wn,Ve,{})}}function zn(r){let e,t;return e=new Er({}),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p:B,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function qn(r){let e,t,n,i,s,o,a=r[0].displayName+"",c,l,u,h=r[0].email+"",f,g,v,m,j,se;return{c(){e=A("div"),t=A("img"),s=rt(),o=A("p"),c=Me(a),l=rt(),u=A("p"),f=Me(h),g=rt(),v=A("div"),m=A("button"),m.textContent="Signout",Ht(t.src,n=r[0].photoURL)||L(t,"src",n),L(t,"alt",i=r[0].displayName),L(m,"class","sf-button")},m(w,E){G(w,e,E),T(e,t),T(e,s),T(e,o),T(o,c),T(e,l),T(e,u),T(u,f),T(e,g),T(e,v),T(v,m),j||(se=Ir(m,"click",r[1]),j=!0)},p(w,E){E&1&&!Ht(t.src,n=w[0].photoURL)&&L(t,"src",n),E&1&&i!==(i=w[0].displayName)&&L(t,"alt",i),E&1&&a!==(a=w[0].displayName+"")&&Vt(c,a),E&1&&h!==(h=w[0].email+"")&&Vt(f,h)},i:B,o:B,d(w){w&&F(e),j=!1,se()}}}function Gn(r){let e,t,n,i;const s=[qn,zn],o=[];function a(c,l){return c[0]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=Et()},m(c,l){o[e].m(c,l),G(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(Tt(),b(o[u],1,1,()=>{o[u]=null}),St(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),y(t,1),t.m(n.parentNode,n))},i(c){i||(y(t),i=!0)},o(c){b(t),i=!1},d(c){o[e].d(c),c&&F(n)}}}function Kn(r){let e,t;return e=new kt({props:{$$slots:{default:[Gn]},$$scope:{ctx:r}}}),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p(n,[i]){const s={};i&5&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function Jn(r,e,t){let{user:n}=e;function i(s){$n.call(this,r,s)}return r.$$set=s=>{"user"in s&&t(0,n=s.user)},[n,i]}class Yn extends ze{constructor(e){super(),We(this,e,Jn,Kn,Ve,{user:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xn=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],a=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,a=o?r[i+1]:0,c=i+2<r.length,l=c?r[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),n.push(t[u],t[h],t[f],t[g])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Tr(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Xn(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],a=i<r.length?t[r.charAt(i)]:0;++i;const l=i<r.length?t[r.charAt(i)]:64;++i;const h=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(n.push(f),l!==64){const g=a<<4&240|l>>2;if(n.push(g),h!==64){const v=l<<6&192|h;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Zn=function(r){const e=Tr(r);return Sr.encodeByteArray(e,!0)},kr=function(r){return Zn(r).replace(/\./g,"")},Qn=function(r){try{return Sr.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ti(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function ri(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ni(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ii(){const r=_();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function si(){return typeof indexedDB=="object"}function oi(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="FirebaseError";class ne extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ai,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,me.prototype.create)}}class me{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ci(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ne(i,a,n)}}function ci(r,e){return r.replace(li,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const li=/\{\$([^}]+)}/g;function ui(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Le(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(qt(s)&&qt(o)){if(!Le(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function qt(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function di(r,e){const t=new hi(r,e);return t.subscribe.bind(t)}class hi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");fi(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=it),i.error===void 0&&(i.error=it),i.complete===void 0&&(i.complete=it);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fi(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function it(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(r,e){return new Promise((t,n)=>{r.onsuccess=i=>{t(i.target.result)},r.onerror=i=>{var s;n(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Gt{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new Or(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Rr(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Or{constructor(e){this._transaction=e,this.complete=new Promise((t,n)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{n(this._transaction.error)},this._transaction.onabort=()=>{n(this._transaction.error)}})}objectStore(e){return new Rr(this._transaction.objectStore(e))}}class Rr{constructor(e){this._store=e}index(e){return new Kt(this._store.index(e))}createIndex(e,t,n){return new Kt(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return ae(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return ae(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return ae(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ae(e,"Error clearing IndexedDB object store")}}class Kt{constructor(e){this._index=e}get(e){const t=this._index.get(e);return ae(t,"Error reading from IndexedDB")}}function pi(r,e,t){return new Promise((n,i)=>{try{const s=indexedDB.open(r,e);s.onsuccess=o=>{n(new Gt(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{t(new Gt(s.result),o.oldVersion,o.newVersion,new Or(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ee{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ei;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_i(e))try{this.getOrInitializeService({instanceIdentifier:H})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(!!n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:mi(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mi(r){return r===H?void 0:r}function _i(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(p||(p={}));const yi={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},bi=p.INFO,Ii={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},wi=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Ii[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ar{constructor(e){this.name=e,this._logLevel=bi,this._logHandler=wi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ti(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ti(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pt="@firebase/app",Jt="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ar("@firebase/app"),Si="@firebase/app-compat",ki="@firebase/analytics-compat",Oi="@firebase/analytics",Ri="@firebase/app-check-compat",Ai="@firebase/app-check",Ci="@firebase/auth",Pi="@firebase/auth-compat",Di="@firebase/database",Ni="@firebase/database-compat",Mi="@firebase/functions",Li="@firebase/functions-compat",$i="@firebase/installations",Ui="@firebase/installations-compat",xi="@firebase/messaging",Bi="@firebase/messaging-compat",Fi="@firebase/performance",ji="@firebase/performance-compat",Hi="@firebase/remote-config",Vi="@firebase/remote-config-compat",Wi="@firebase/storage",zi="@firebase/storage-compat",qi="@firebase/firestore",Gi="@firebase/firestore-compat",Ki="firebase",Ji="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]",Yi={[pt]:"fire-core",[Si]:"fire-core-compat",[Oi]:"fire-analytics",[ki]:"fire-analytics-compat",[Ai]:"fire-app-check",[Ri]:"fire-app-check-compat",[Ci]:"fire-auth",[Pi]:"fire-auth-compat",[Di]:"fire-rtdb",[Ni]:"fire-rtdb-compat",[Mi]:"fire-fn",[Li]:"fire-fn-compat",[$i]:"fire-iid",[Ui]:"fire-iid-compat",[xi]:"fire-fcm",[Bi]:"fire-fcm-compat",[Fi]:"fire-perf",[ji]:"fire-perf-compat",[Hi]:"fire-rc",[Vi]:"fire-rc-compat",[Wi]:"fire-gcs",[zi]:"fire-gcs-compat",[qi]:"fire-fst",[Gi]:"fire-fst-compat","fire-js":"fire-js",[Ki]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Map,gt=new Map;function Xi(r,e){try{r.container.addComponent(e)}catch(t){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function de(r){const e=r.name;if(gt.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;gt.set(e,r);for(const t of $e.values())Xi(t,r);return!0}function Pr(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},z=new me("app","Firebase",Zi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=Ji;function es(r,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},e),n=t.name;if(typeof n!="string"||!n)throw z.create("bad-app-name",{appName:String(n)});const i=$e.get(n);if(i){if(Le(r,i.options)&&Le(t,i.config))return i;throw z.create("duplicate-app",{appName:n})}const s=new vi(n);for(const a of gt.values())s.addComponent(a);const o=new Qi(r,t,s);return $e.set(n,o),o}function ts(r=Cr){const e=$e.get(r);if(!e)throw z.create("no-app",{appName:r});return e}function X(r,e,t){var n;let i=(n=Yi[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}de(new ee(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="firebase-heartbeat-database",ns=1,he="firebase-heartbeat-store";let st=null;function Dr(){return st||(st=pi(rs,ns,(r,e)=>{switch(e){case 0:r.createObjectStore(he)}}).catch(r=>{throw z.create("storage-open",{originalErrorMessage:r.message})})),st}async function is(r){try{return(await Dr()).transaction(he).objectStore(he).get(Nr(r))}catch(e){throw z.create("storage-get",{originalErrorMessage:e.message})}}async function Yt(r,e){try{const n=(await Dr()).transaction(he,"readwrite");return await n.objectStore(he).put(e,Nr(r)),n.complete}catch(t){throw z.create("storage-set",{originalErrorMessage:t.message})}}function Nr(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1024,os=30*24*60*60*1e3;class as{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ls(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Xt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=os}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xt(),{heartbeatsToSend:t,unsentEntries:n}=cs(this._heartbeatsCache.heartbeats),i=kr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xt(){return new Date().toISOString().substring(0,10)}function cs(r,e=ss){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zt(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Zt(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ls{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return si()?oi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await is(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zt(r){return kr(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r){de(new ee("platform-logger",e=>new Ei(e),"PRIVATE")),de(new ee("heartbeat",e=>new as(e),"PRIVATE")),X(pt,Jt,r),X(pt,Jt,"esm2017"),X("fire-js","")}us("");/*! *****************************************************************************
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
***************************************************************************** */var mt=function(r,e){return mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},mt(r,e)};function ve(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");mt(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Rt(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function _t(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ue(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function xe(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}function Mr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ds=Mr,Lr=new me("auth","Firebase",Mr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ar("@firebase/auth");function Ce(r,...e){Qt.logLevel<=p.ERROR&&Qt.error(`Auth (${qe}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(r,...e){throw At(r,...e)}function k(r,...e){return At(r,...e)}function $r(r,e,t){const n=Object.assign(Object.assign({},ds()),{[e]:t});return new me("auth","Firebase",n).create(e,{appName:r.name})}function hs(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&R(r,"argument-error"),$r(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function At(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Lr.create(r,...e)}function d(r,e,...t){if(!r)throw At(e,...t)}function C(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ce(e),new Error(e)}function N(r,e){r||C(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map;function P(r){N(r instanceof Function,"Expected a class definition");let e=er.get(r);return e?(N(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,er.set(r,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(r,e){const t=Pr(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Le(s,e!=null?e:{}))return i;R(i,"already-initialized")}return t.initialize({options:e})}function ps(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(P);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function gs(){return tr()==="http:"||tr()==="https:"}function tr(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gs()||ri()||"connection"in navigator)?navigator.onLine:!0}function _s(){if(typeof navigator=="undefined")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){this.shortDelay=e,this.longDelay=t,N(t>e,"Short delay should be less than long delay!"),this.isMobile=ti()||ni()}get(){return ms()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(r,e){N(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new ye(3e4,6e4);function bs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ge(r,e,t,n,i={}){return xr(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=_e(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),Ur.fetch()(Br(r,r.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function xr(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},vs),e);try{const i=new ws(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ot(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ot(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ot(r,"email-already-in-use",o);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $r(r,u,l);R(r,u)}}catch(i){if(i instanceof ne)throw i;R(r,"network-request-failed")}}async function Is(r,e,t,n,i={}){const s=await Ge(r,e,t,n,i);return"mfaPendingCredential"in s&&R(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Br(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Ct(r.config,i):`${r.config.apiScheme}://${i}`}class ws{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(k(this.auth,"network-request-failed")),ys.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ot(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=k(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(r,e){return Ge(r,"POST","/v1/accounts:delete",e)}async function Ts(r,e){return Ge(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(r){if(!!r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ss(r,e=!1){const t=ie(r),n=await t.getIdToken(e),i=Pt(n);d(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:le(at(i.auth_time)),issuedAtTime:le(at(i.iat)),expirationTime:le(at(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function at(r){return Number(r)*1e3}function Pt(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ce("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qn(t);return i?JSON.parse(i):(Ce("Failed to decode base64 JWT payload"),null)}catch(i){return Ce("Caught error parsing JWT payload as JSON",i),null}}function ks(r){const e=Pt(r);return d(e,"internal-error"),d(typeof e.exp!="undefined","internal-error"),d(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ne&&Os(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Os({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=le(this.lastLoginAt),this.creationTime=le(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(r){var e;const t=r.auth,n=await r.getIdToken(),i=await fe(r,Ts(t,{idToken:n}));d(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ps(s.providerUserInfo):[],a=Cs(r.providerData,o),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function As(r){const e=ie(r);await Be(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cs(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Ps(r){return r.map(e=>{var{providerId:t}=e,n=Rt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(r,e){const t=await xr(r,{},async()=>{const n=_e({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Br(r,i,"/v1/token",`key=${s}`),a=await r._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ur.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken!="undefined","internal-error"),d(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ks(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return d(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Ds(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new pe;return n&&(d(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(d(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(d(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return C("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,e){d(typeof r=="string"||typeof r=="undefined","internal-error",{appName:e})}class W{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Rt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fe(this,this.stsTokenManager.getToken(this.auth,e));return d(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ss(this,e)}reload(){return As(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Be(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fe(this,Es(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,a,c,l,u;const h=(n=t.displayName)!==null&&n!==void 0?n:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,j=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,se=(l=t.createdAt)!==null&&l!==void 0?l:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:Ut,isAnonymous:xt,providerData:Qe,stsTokenManager:Bt}=t;d(E&&Bt,e,"internal-error");const vn=pe.fromJSON(this.name,Bt);d(typeof E=="string",e,"internal-error"),M(h,e.name),M(f,e.name),d(typeof Ut=="boolean",e,"internal-error"),d(typeof xt=="boolean",e,"internal-error"),M(g,e.name),M(v,e.name),M(m,e.name),M(j,e.name),M(se,e.name),M(w,e.name);const et=new W({uid:E,auth:e,email:f,emailVerified:Ut,displayName:h,isAnonymous:xt,photoURL:v,phoneNumber:g,tenantId:m,stsTokenManager:vn,createdAt:se,lastLoginAt:w});return Qe&&Array.isArray(Qe)&&(et.providerData=Qe.map(yn=>Object.assign({},yn))),j&&(et._redirectEventId=j),et}static async _fromIdTokenResponse(e,t,n=!1){const i=new pe;i.updateFromServerResponse(t);const s=new W({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Be(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jr.type="NONE";const rr=jr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(r,e,t){return`firebase:${r}:${e}:${t}`}class Z{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Pe(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pe("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Z(P(rr),e,n);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||P(rr);const o=Pe(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=W._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Z(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Z(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qr(e))return"Blackberry";if(Gr(e))return"Webos";if(Dt(e))return"Safari";if((e.includes("chrome/")||Vr(e))&&!e.includes("edge/"))return"Chrome";if(zr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Hr(r=_()){return/firefox\//i.test(r)}function Dt(r=_()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vr(r=_()){return/crios\//i.test(r)}function Wr(r=_()){return/iemobile/i.test(r)}function zr(r=_()){return/android/i.test(r)}function qr(r=_()){return/blackberry/i.test(r)}function Gr(r=_()){return/webos/i.test(r)}function Ke(r=_()){return/iphone|ipad|ipod/i.test(r)}function Ns(r=_()){var e;return Ke(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ms(){return ii()&&document.documentMode===10}function Kr(r=_()){return Ke(r)||zr(r)||Gr(r)||qr(r)||/windows phone/i.test(r)||Wr(r)}function Ls(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(r,e=[]){let t;switch(r){case"Browser":t=nr(_());break;case"Worker":t=`${nr(_())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qe}/${n}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ir(this),this.idTokenSubscription=new ir(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=P(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Be(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_s()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&d(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(P(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new me("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&P(e)||this._popupRedirectResolver;d(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[P(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return d(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Je(r){return ie(r)}class ir{constructor(e){this.auth=e,this.observer=null,this.addObserver=di(t=>this.observer=t)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,t){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(r,e){return Is(r,"POST","/v1/accounts:signInWithIdp",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="http://localhost";class q extends Yr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new q(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):R("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Rt(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new q(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Q(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Q(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Q(e,t)}buildRequest(){const e={requestUri:Us,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_e(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Nt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $ extends be{constructor(){super("facebook.com")}static credential(e){return q._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $.credential(e.oauthAccessToken)}catch{return null}}}$.FACEBOOK_SIGN_IN_METHOD="facebook.com";$.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return q._fromParams({providerId:S.PROVIDER_ID,signInMethod:S.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return S.credentialFromTaggedObject(e)}static credentialFromError(e){return S.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return S.credential(t,n)}catch{return null}}}S.GOOGLE_SIGN_IN_METHOD="google.com";S.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U extends be{constructor(){super("github.com")}static credential(e){return q._fromParams({providerId:U.PROVIDER_ID,signInMethod:U.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return U.credentialFromTaggedObject(e)}static credentialFromError(e){return U.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return U.credential(e.oauthAccessToken)}catch{return null}}}U.GITHUB_SIGN_IN_METHOD="github.com";U.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x extends be{constructor(){super("twitter.com")}static credential(e,t){return q._fromParams({providerId:x.PROVIDER_ID,signInMethod:x.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return x.credentialFromTaggedObject(e)}static credentialFromError(e){return x.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return x.credential(t,n)}catch{return null}}}x.TWITTER_SIGN_IN_METHOD="twitter.com";x.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await W._fromIdTokenResponse(e,n,i),o=sr(n);return new te({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=sr(n);return new te({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function sr(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends ne{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Fe.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Fe(e,t,n,i)}}function Xr(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fe._fromErrorAndOperation(r,s,e,n):s})}async function xs(r,e,t=!1){const n=await fe(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return te._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(r,e,t=!1){const{auth:n}=r,i="reauthenticate";try{const s=await fe(r,Xr(n,i,e,r),t);d(s.idToken,n,"internal-error");const o=Pt(s.idToken);d(o,n,"internal-error");const{sub:a}=o;return d(r.uid===a,n,"user-mismatch"),te._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&R(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(r,e,t=!1){const n="signIn",i=await Xr(r,n,e),s=await te._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function js(r,e,t,n){return ie(r).onAuthStateChanged(e,t,n)}function Hs(r){return ie(r).signOut()}const je="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(je,"1"),this.storage.removeItem(je),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){const r=_();return Dt(r)||Ke(r)}const Ws=1e3,zs=10;class Qr extends Zr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vs()&&Ls(),this.fallbackToPolling=Kr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);Ms()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zs):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ws)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qr.type="LOCAL";const qs=Qr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Zr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}en.type="SESSION";const tn=en;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(r){return Promise.all(r.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Gs(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ye.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Mt("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return window}function Js(r){O().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof O().WorkerGlobalScope!="undefined"&&typeof O().importScripts=="function"}async function Ys(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xs(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Zs(){return rn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="firebaseLocalStorageDb",Qs=1,He="firebaseLocalStorage",sn="fbase_key";class Ie{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xe(r,e){return r.transaction([He],e?"readwrite":"readonly").objectStore(He)}function eo(){const r=indexedDB.deleteDatabase(nn);return new Ie(r).toPromise()}function yt(){const r=indexedDB.open(nn,Qs);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(He,{keyPath:sn})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(He)?e(n):(n.close(),await eo(),e(await yt()))})})}async function or(r,e,t){const n=Xe(r,!0).put({[sn]:e,value:t});return new Ie(n).toPromise()}async function to(r,e){const t=Xe(r,!1).get(e),n=await new Ie(t).toPromise();return n===void 0?null:n.value}function ar(r,e){const t=Xe(r,!0).delete(e);return new Ie(t).toPromise()}const ro=800,no=3;class on{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>no)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(Zs()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ys(),!this.activeServiceWorker)return;this.sender=new Ks(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((t=n[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xs()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yt();return await or(e,je,"1"),await ar(e,je),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>or(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>to(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ar(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xe(i,!1).getAll();return new Ie(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ro)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}on.type="LOCAL";const io=on;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function oo(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=k("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",so().appendChild(n)})}function ao(r){return`__${r}${Math.floor(Math.random()*1e6)}`}new ye(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r,e){return e?P(e):(d(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Yr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Q(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Q(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Q(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function co(r){return Fs(r.auth,new Lt(r),r.bypassAuthState)}function lo(r){const{auth:e,user:t}=r;return d(t,e,"internal-error"),Bs(t,new Lt(r),r.bypassAuthState)}async function uo(r){const{auth:e,user:t}=r;return d(t,e,"internal-error"),xs(t,new Lt(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return co;case"linkViaPopup":case"linkViaRedirect":return uo;case"reauthViaPopup":case"reauthViaRedirect":return lo;default:R(this.auth,"internal-error")}}resolve(e){N(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){N(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new ye(2e3,1e4);class Y extends cn{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Y.currentPopupAction&&Y.currentPopupAction.cancel(),Y.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){N(this.filter.length===1,"Popup operations only handle one event");const e=Mt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(k(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(k(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Y.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(k(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ho.get())};e()}}Y.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="pendingRedirect",ct=new Map;class po extends cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ct.get(this.auth._key());if(!e){try{const n=await go(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ct.set(this.auth._key(),e)}return this.bypassAuthState||ct.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function go(r,e){const t=un(e),n=ln(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function mo(r,e){return ln(r)._set(un(e),"true")}function ln(r){return P(r._redirectPersistence)}function un(r){return Pe(fo,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(r,e,t){return vo(r,e,t)}async function vo(r,e,t){const n=Je(r);hs(r,e,Nt);const i=an(n,t);return await mo(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function yo(r,e){return await Je(r)._initializationPromise,dn(r,e,!1)}async function dn(r,e,t=!1){const n=Je(r),i=an(n,e),o=await new po(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=10*60*1e3;class Io{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wo(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hn(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(k(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bo&&this.cachedEventUids.clear(),this.cachedEventUids.has(cr(e))}saveEventToCache(e){this.cachedEventUids.add(cr(e)),this.lastProcessedEventTime=Date.now()}}function cr(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function hn({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wo(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hn(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(r,e={}){return Ge(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,So=/^https?/;async function ko(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Eo(r);for(const t of e)try{if(Oo(t))return}catch{}R(r,"unauthorized-domain")}function Oo(r){const e=vt(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!So.test(t))return!1;if(To.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new ye(3e4,6e4);function lr(){const r=O().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Ao(r){return new Promise((e,t)=>{var n,i,s;function o(){lr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lr(),t(k(r,"network-request-failed"))},timeout:Ro.get()})}if(!((i=(n=O().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=O().gapi)===null||s===void 0)&&s.load)o();else{const a=ao("iframefcb");return O()[a]=()=>{gapi.load?o():t(k(r,"network-request-failed"))},oo(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw De=null,e})}let De=null;function Co(r){return De=De||Ao(r),De}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new ye(5e3,15e3),Do="__/auth/iframe",No="emulator/auth/iframe",Mo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $o(r){const e=r.config;d(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ct(e,No):`https://${r.config.authDomain}/${Do}`,n={apiKey:e.apiKey,appName:r.name,v:qe},i=Lo.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${_e(n).slice(1)}`}async function Uo(r){const e=await Co(r),t=O().gapi;return d(t,r,"internal-error"),e.open({where:document.body,url:$o(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mo,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=k(r,"network-request-failed"),a=O().setTimeout(()=>{s(o)},Po.get());function c(){O().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bo=500,Fo=600,jo="_blank",Ho="http://localhost";class ur{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vo(r,e,t,n=Bo,i=Fo){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xo),{width:n.toString(),height:i.toString(),top:s,left:o}),l=_().toLowerCase();t&&(a=Vr(l)?jo:t),Hr(l)&&(e=e||Ho,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(Ns(l)&&a!=="_self")return Wo(e||"",a),new ur(null);const h=window.open(e||"",a,u);d(h,r,"popup-blocked");try{h.focus()}catch{}return new ur(h)}function Wo(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="__/auth/handler",qo="emulator/auth/handler";function dr(r,e,t,n,i,s){d(r.config.authDomain,r,"auth-domain-config-required"),d(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:qe,eventId:i};if(e instanceof Nt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",ui(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof be){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Go(r)}?${_e(a).slice(1)}`}function Go({config:r}){return r.emulator?Ct(r,qo):`https://${r.authDomain}/${zo}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="webStorageSupport";class Ko{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tn,this._completeRedirectFn=dn}async _openPopup(e,t,n,i){var s;N((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dr(e,t,n,vt(),i);return Vo(e,o,Mt())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Js(dr(e,t,n,vt(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(N(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Uo(e),n=new Io(e);return t.register("authEvent",i=>(d(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lt,{type:lt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lt];o!==void 0&&t(!!o),R(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ko(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kr()||Dt()||Ke()}}const Jo=Ko;var hr="@firebase/auth",fr="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zo(r){de(new ee("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((a,c)=>{d(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),d(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jr(r)},u=new $s(a,c,l);return ps(u,t),u})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),de(new ee("auth-internal",e=>{const t=Je(e.getProvider("auth").getImmediate());return(n=>new Yo(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),X(hr,fr,Xo(r)),X(hr,fr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(r=ts()){const e=Pr(r,"auth");return e.isInitialized()?e.getImmediate():fs(r,{popupRedirectResolver:Jo,persistence:[io,qs,tn]})}Zo("Browser");function D(r){return typeof r=="function"}function fn(r){var e=function(n){Error.call(n),n.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ut=fn(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function bt(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Ze=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,n,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=_t(o),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(m){e={error:m}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(D(u))try{u()}catch(m){s=m instanceof ut?m.errors:[m]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=_t(h),g=f.next();!g.done;g=f.next()){var v=g.value;try{pr(v)}catch(m){s=s!=null?s:[],m instanceof ut?s=xe(xe([],Ue(s)),Ue(m.errors)):s.push(m)}}}catch(m){n={error:m}}finally{try{g&&!g.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}if(s)throw new ut(s)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)pr(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&bt(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&bt(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),pn=Ze.EMPTY;function gn(r){return r instanceof Ze||r&&"closed"in r&&D(r.remove)&&D(r.add)&&D(r.unsubscribe)}function pr(r){D(r)?r():r.unsubscribe()}var $t={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},It={setTimeout:function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var i=It.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,xe([r,e],Ue(t))):setTimeout.apply(void 0,xe([r,e],Ue(t)))},clearTimeout:function(r){var e=It.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function ea(r){It.setTimeout(function(){throw r})}function gr(){}var ke=null;function Ne(r){if($t.useDeprecatedSynchronousErrorHandling){var e=!ke;if(e&&(ke={errorThrown:!1,error:null}),r(),e){var t=ke,n=t.errorThrown,i=t.error;if(ke=null,n)throw i}}else r()}var mn=function(r){ve(e,r);function e(t){var n=r.call(this)||this;return n.isStopped=!1,t?(n.destination=t,gn(t)&&t.add(n)):n.destination=ia,n}return e.create=function(t,n,i){return new wt(t,n,i)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ze),ta=Function.prototype.bind;function dt(r,e){return ta.call(r,e)}var ra=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){Oe(n)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){Oe(n)}else Oe(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Oe(t)}},r}(),wt=function(r){ve(e,r);function e(t,n,i){var s=r.call(this)||this,o;if(D(t)||!t)o={next:t!=null?t:void 0,error:n!=null?n:void 0,complete:i!=null?i:void 0};else{var a;s&&$t.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&dt(t.next,a),error:t.error&&dt(t.error,a),complete:t.complete&&dt(t.complete,a)}):o=t}return s.destination=new ra(o),s}return e}(mn);function Oe(r){ea(r)}function na(r){throw r}var ia={closed:!0,next:gr,error:na,complete:gr},sa=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function oa(r){return r}function aa(r){return r.length===0?oa:r.length===1?r[0]:function(t){return r.reduce(function(n,i){return i(n)},t)}}var mr=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,n){var i=this,s=la(e)?e:new wt(e,t,n);return Ne(function(){var o=i,a=o.operator,c=o.source;s.add(a?a.call(s,c):c?i._subscribe(s):i._trySubscribe(s))}),s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var n=this;return t=_r(t),new t(function(i,s){var o=new wt({next:function(a){try{e(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:i});n.subscribe(o)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[sa]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return aa(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=_r(e),new e(function(n,i){var s;t.subscribe(function(o){return s=o},function(o){return i(o)},function(){return n(s)})})},r.create=function(e){return new r(e)},r}();function _r(r){var e;return(e=r!=null?r:$t.Promise)!==null&&e!==void 0?e:Promise}function ca(r){return r&&D(r.next)&&D(r.error)&&D(r.complete)}function la(r){return r&&r instanceof mn||ca(r)&&gn(r)}var ua=fn(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),_n=function(r){ve(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new vr(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new ua},e.prototype.next=function(t){var n=this;Ne(function(){var i,s;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var o=_t(n.currentObservers),a=o.next();!a.done;a=o.next()){var c=a.value;c.next(t)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(t){var n=this;Ne(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var i=n.observers;i.length;)i.shift().error(t)}})},e.prototype.complete=function(){var t=this;Ne(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?pn:(this.currentObservers=null,a.push(t),new Ze(function(){n.currentObservers=null,bt(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,i=n.hasError,s=n.thrownError,o=n.isStopped;i?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new mr;return t.source=this,t},e.create=function(t,n){return new vr(t,n)},e}(mr),vr=function(r){ve(e,r);function e(t,n){var i=r.call(this)||this;return i.destination=t,i.source=n,i}return e.prototype.next=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,t)},e.prototype.error=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&i!==void 0?i:pn},e}(_n),da=function(r){ve(e,r);function e(t){var n=r.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=r.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,i=t.thrownError,s=t._value;if(n)throw i;return this._throwIfClosed(),s},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(_n);class ha{constructor(e){I(this,"auth");I(this,"credential");I(this,"provider");I(this,"state",new da({credential:null,error:null,loading:!0,user:null}));I(this,"handleError",e=>{console.error(e),this.state.next(Ee(we({},this.state.value),{credential:this.credential,loading:!1,error:{code:e.code,message:e.message}}))});I(this,"setCredential",e=>this.credential=e?S.credentialFromResult(e):null);I(this,"beginAction",()=>this.state.next(Ee(we({},this.state.value),{loading:!0,error:null})));I(this,"state$",this.state.asObservable());I(this,"signin",()=>{this.beginAction(),_o(this.auth,this.provider)});I(this,"signout",async()=>{try{this.beginAction(),await Hs(this.auth)}catch(e){this.setCredential(),this.handleError(e)}});this.auth=Qo(e),this.auth.useDeviceLanguage(),this.provider=new S,js(this.auth,t=>{this.state.next(Ee(we({},this.state.value),{credential:this.credential,user:t,loading:!1}))}),yo(this.auth).then(t=>this.setCredential(t)).catch(t=>{this.setCredential(),this.handleError(t)})}}var fa="firebase",pa="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X(fa,pa,"app");const ga={apiKey:"AIzaSyCm3Etz1oqSTDfFnwmqxvE5KvEUzL-6G9s",authDomain:"playground-jps.firebaseapp.com",projectId:"playground-jps",storageBucket:"playground-jps.appspot.com",messagingSenderId:"854665995034",appId:"1:854665995034:web:c63595af8bfed3879502a3",measurementId:"G-91T1K5PN08"};class ma{constructor(){I(this,"app");this.app=es(ga)}}function _a(r){let e,t;return e=new Er({}),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p:B,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function va(r){let e,t,n,i;const s=[ba,ya],o=[];function a(c,l){return c[0].user?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=Et()},m(c,l){o[e].m(c,l),G(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(Tt(),b(o[u],1,1,()=>{o[u]=null}),St(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),y(t,1),t.m(n.parentNode,n))},i(c){i||(y(t),i=!0)},o(c){b(t),i=!1},d(c){o[e].d(c),c&&F(n)}}}function ya(r){let e,t;return e=new kt({props:{$$slots:{default:[Ia]},$$scope:{ctx:r}}}),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function ba(r){let e,t;return e=new Yn({props:{user:r[0].user}}),e.$on("click",r[1].signout),{c(){re(e.$$.fragment)},m(n,i){K(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.user=n[0].user),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function Ia(r){let e,t,n;return{c(){e=A("button"),e.innerHTML='<i class="fa-brands fa-google fa-xl"></i>',L(e,"class","sf-button")},m(i,s){G(i,e,s),t||(n=Ir(e,"click",r[1].signin),t=!0)},p:B,d(i){i&&F(e),t=!1,n()}}}function wa(r){let e,t,n,i;const s=[va,_a],o=[];function a(c,l){return c[0]&&!c[0].loading?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=Et()},m(c,l){o[e].m(c,l),G(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Tt(),b(o[u],1,1,()=>{o[u]=null}),St(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),y(t,1),t.m(n.parentNode,n))},i(c){i||(y(t),i=!0)},o(c){b(t),i=!1},d(c){o[e].d(c),c&&F(n)}}}function Ea(r,e,t){const n=new ma,i=new ha(n.app);let s;const o=i.state$.subscribe(a=>t(0,s=a));return Ln(()=>{o.unsubscribe()}),[s,i]}class Ta extends ze{constructor(e){super(),We(this,e,Ea,wa,Ve,{})}}new Ta({target:document.getElementById("app")});
