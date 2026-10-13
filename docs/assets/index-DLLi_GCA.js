(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const gi="modulepreload",bi=function(t,e){return new URL(t,e).href},mn={},vi=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=bi(u,r),u in mn)return;mn[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let v=a.length-1;v>=0;v--){const T=a[v];if(T.href===u&&(!h||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":gi,h||(m.as="script"),m.crossOrigin="",m.href=u,d&&m.setAttribute("nonce",d),document.head.appendChild(m),h)return new Promise((v,T)=>{m.addEventListener("load",v),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var gn={};/**
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
 */const Xn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yi=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Zn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,d=i+2<t.length,u=d?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let b=(l&15)<<2|u>>6,m=u&63;d||(m=64,a||(b=64)),r.push(n[h],n[p],n[b],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new wi;const b=s<<2|l>>4;if(r.push(b),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const v=u<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _i=function(t){const e=Xn(t);return Zn.encodeByteArray(e,!0)},er=function(t){return _i(t).replace(/\./g,"")},tr=function(t){try{return Zn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ii(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ei=()=>Ii().__FIREBASE_DEFAULTS__,ki=()=>{if(typeof process>"u"||typeof gn>"u")return;const t=gn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Si=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tr(t[1]);return e&&JSON.parse(e)},Vt=()=>{try{return Ei()||ki()||Si()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ti=t=>{var e,n;return(n=(e=Vt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nr=()=>{var t;return(t=Vt())===null||t===void 0?void 0:t.config},rr=t=>{var e;return(e=Vt())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ci{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function C(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ai(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function Pi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Li(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ri(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xi(){const t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oi(){try{return typeof indexedDB=="object"}catch{return!1}}function Di(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ni="FirebaseError";class re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ni,Object.setPrototypeOf(this,re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Mi(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new re(i,l,r)}}function Mi(t,e){return t.replace(Ui,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ui=/\{\$([^}]+)}/g;function $i(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(bn(s)&&bn(a)){if(!nt(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bn(t){return t!==null&&typeof t=="object"}/**
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
 */function $e(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Te(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ce(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fi(t,e){const n=new Bi(t,e);return n.subscribe.bind(n)}class Bi{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qi(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wt),i.error===void 0&&(i.error=wt),i.complete===void 0&&(i.complete=wt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qi(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wt(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const se="[DEFAULT]";/**
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
 */class Hi{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ci;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vi(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ji(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ji(t){return t===se?void 0:t}function Vi(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hi(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var g;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(g||(g={}));const Yi={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},zi=g.INFO,Ki={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Gi=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ki[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ir{constructor(e){this.name=e,this._logLevel=zi,this._logHandler=Gi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Ji=(t,e)=>e.some(n=>t instanceof n);let vn,yn;function Qi(){return vn||(vn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xi(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sr=new WeakMap,Ot=new WeakMap,or=new WeakMap,_t=new WeakMap,Wt=new WeakMap;function Zi(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Z(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sr.set(n,t)}).catch(()=>{}),Wt.set(e,t),e}function es(t){if(Ot.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ot.set(t,e)}let Dt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ot.get(t);if(e==="objectStoreNames")return t.objectStoreNames||or.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ts(t){Dt=t(Dt)}function ns(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(It(this),e,...n);return or.set(r,e.sort?e.sort():[e]),Z(r)}:Xi().includes(t)?function(...e){return t.apply(It(this),e),Z(sr.get(this))}:function(...e){return Z(t.apply(It(this),e))}}function rs(t){return typeof t=="function"?ns(t):(t instanceof IDBTransaction&&es(t),Ji(t,Qi())?new Proxy(t,Dt):t)}function Z(t){if(t instanceof IDBRequest)return Zi(t);if(_t.has(t))return _t.get(t);const e=rs(t);return e!==t&&(_t.set(t,e),Wt.set(e,t)),e}const It=t=>Wt.get(t);function is(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Z(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Z(a.result),d.oldVersion,d.newVersion,Z(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ss=["get","getKey","getAll","getAllKeys","count"],os=["put","add","delete","clear"],Et=new Map;function wn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Et.get(e))return Et.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=os.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ss.includes(n)))return;const s=async function(a,...l){const d=this.transaction(a,i?"readwrite":"readonly");let u=d.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&d.done]))[0]};return Et.set(e,s),s}ts(t=>({...t,get:(e,n,r)=>wn(e,n)||t.get(e,n,r),has:(e,n)=>!!wn(e,n)||t.has(e,n)}));/**
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
 */class as{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cs(t){const e=t.getComponent();return e?.type==="VERSION"}const Nt="@firebase/app",_n="0.10.13";/**
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
 */const H=new ir("@firebase/app"),ls="@firebase/app-compat",ds="@firebase/analytics-compat",us="@firebase/analytics",hs="@firebase/app-check-compat",fs="@firebase/app-check",ps="@firebase/auth",ms="@firebase/auth-compat",gs="@firebase/database",bs="@firebase/data-connect",vs="@firebase/database-compat",ys="@firebase/functions",ws="@firebase/functions-compat",_s="@firebase/installations",Is="@firebase/installations-compat",Es="@firebase/messaging",ks="@firebase/messaging-compat",Ss="@firebase/performance",Ts="@firebase/performance-compat",Cs="@firebase/remote-config",As="@firebase/remote-config-compat",Ps="@firebase/storage",Ls="@firebase/storage-compat",Rs="@firebase/firestore",xs="@firebase/vertexai-preview",Os="@firebase/firestore-compat",Ds="firebase",Ns="10.14.1";/**
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
 */const Mt="[DEFAULT]",Ms={[Nt]:"fire-core",[ls]:"fire-core-compat",[us]:"fire-analytics",[ds]:"fire-analytics-compat",[fs]:"fire-app-check",[hs]:"fire-app-check-compat",[ps]:"fire-auth",[ms]:"fire-auth-compat",[gs]:"fire-rtdb",[bs]:"fire-data-connect",[vs]:"fire-rtdb-compat",[ys]:"fire-fn",[ws]:"fire-fn-compat",[_s]:"fire-iid",[Is]:"fire-iid-compat",[Es]:"fire-fcm",[ks]:"fire-fcm-compat",[Ss]:"fire-perf",[Ts]:"fire-perf-compat",[Cs]:"fire-rc",[As]:"fire-rc-compat",[Ps]:"fire-gcs",[Ls]:"fire-gcs-compat",[Rs]:"fire-fst",[Os]:"fire-fst-compat",[xs]:"fire-vertex","fire-js":"fire-js",[Ds]:"fire-js-all"};/**
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
 */const rt=new Map,Us=new Map,Ut=new Map;function In(t,e){try{t.container.addComponent(e)}catch(n){H.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Le(t){const e=t.name;if(Ut.has(e))return H.debug(`There were multiple attempts to register component ${e}.`),!1;Ut.set(e,t);for(const n of rt.values())In(n,t);for(const n of Us.values())In(n,t);return!0}function ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function O(t){return t.settings!==void 0}/**
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
 */const $s={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new Ue("app","Firebase",$s);/**
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
 */class Fs{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Fe=Ns;function cr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ee.create("bad-app-name",{appName:String(i)});if(n||(n=nr()),!n)throw ee.create("no-options");const s=rt.get(i);if(s){if(nt(n,s.options)&&nt(r,s.config))return s;throw ee.create("duplicate-app",{appName:i})}const a=new Wi(i);for(const d of Ut.values())a.addComponent(d);const l=new Fs(n,r,a);return rt.set(i,l),l}function Bs(t=Mt){const e=rt.get(t);if(!e&&t===Mt&&nr())return cr();if(!e)throw ee.create("no-app",{appName:t});return e}function ge(t,e,n){var r;let i=(r=Ms[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),H.warn(l.join(" "));return}Le(new we(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qs="firebase-heartbeat-database",Hs=1,Re="firebase-heartbeat-store";let kt=null;function lr(){return kt||(kt=is(qs,Hs,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Re)}catch(n){console.warn(n)}}}}).catch(t=>{throw ee.create("idb-open",{originalErrorMessage:t.message})})),kt}async function js(t){try{const n=(await lr()).transaction(Re),r=await n.objectStore(Re).get(dr(t));return await n.done,r}catch(e){if(e instanceof re)H.warn(e.message);else{const n=ee.create("idb-get",{originalErrorMessage:e?.message});H.warn(n.message)}}}async function En(t,e){try{const r=(await lr()).transaction(Re,"readwrite");await r.objectStore(Re).put(e,dr(t)),await r.done}catch(n){if(n instanceof re)H.warn(n.message);else{const r=ee.create("idb-set",{originalErrorMessage:n?.message});H.warn(r.message)}}}function dr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Vs=1024,Ws=30*24*60*60*1e3;class Ys{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ks(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kn();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Ws}),this._storage.overwrite(this._heartbeatsCache))}catch(r){H.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kn(),{heartbeatsToSend:r,unsentEntries:i}=zs(this._heartbeatsCache.heartbeats),s=er(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return H.warn(n),""}}}function kn(){return new Date().toISOString().substring(0,10)}function zs(t,e=Vs){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Sn(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ks{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oi()?Di().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await js(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return En(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return En(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sn(t){return er(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gs(t){Le(new we("platform-logger",e=>new as(e),"PRIVATE")),Le(new we("heartbeat",e=>new Ys(e),"PRIVATE")),ge(Nt,_n,t),ge(Nt,_n,"esm2017"),ge("fire-js","")}Gs("");var Js="firebase",Qs="10.14.1";/**
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
 */ge(Js,Qs,"app");function Yt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ur(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xs=ur,hr=new Ue("auth","Firebase",ur());/**
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
 */const it=new ir("@firebase/auth");function Zs(t,...e){it.logLevel<=g.WARN&&it.warn(`Auth (${Fe}): ${t}`,...e)}function Je(t,...e){it.logLevel<=g.ERROR&&it.error(`Auth (${Fe}): ${t}`,...e)}/**
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
 */function x(t,...e){throw zt(t,...e)}function D(t,...e){return zt(t,...e)}function fr(t,e,n){const r=Object.assign(Object.assign({},Xs()),{[e]:n});return new Ue("auth","Firebase",r).create(e,{appName:t.name})}function q(t){return fr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hr.create(t,...e)}function f(t,e,...n){if(!t)throw zt(e,...n)}function $(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Je(e),new Error(e)}function j(t,e){t||$(e)}/**
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
 */function $t(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eo(){return Tn()==="http:"||Tn()==="https:"}function Tn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function to(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eo()||Li()||"connection"in navigator)?navigator.onLine:!0}function no(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Be{constructor(e,n){this.shortDelay=e,this.longDelay=n,j(n>e,"Short delay should be less than long delay!"),this.isMobile=Ai()||Ri()}get(){return to()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kt(t,e){j(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ro={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const io=new Be(3e4,6e4);function W(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Y(t,e,n,r,i={}){return mr(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=$e(Object.assign({key:t.config.apiKey},a)).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:d},s);return Pi()||(u.referrerPolicy="no-referrer"),pr.fetch()(gr(t,t.config.apiHost,n,l),u)})}async function mr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ro),e);try{const i=new oo(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ke(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ke(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Ke(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw Ke(t,"user-disabled",a);const h=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fr(t,h,u);x(t,h)}}catch(i){if(i instanceof re)throw i;x(t,"network-request-failed",{message:String(i)})}}async function qe(t,e,n,r,i={}){const s=await Y(t,e,n,r,i);return"mfaPendingCredential"in s&&x(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gr(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kt(t.config,i):`${t.config.apiScheme}://${i}`}function so(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(D(this.auth,"network-request-failed")),io.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ke(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=D(t,e,r);return i.customData._tokenResponse=n,i}function Cn(t){return t!==void 0&&t.enterprise!==void 0}class ao{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return so(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function co(t,e){return Y(t,"GET","/v2/recaptchaConfig",W(t,e))}/**
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
 */async function lo(t,e){return Y(t,"POST","/v1/accounts:delete",e)}async function br(t,e){return Y(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uo(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Gt(r);f(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Pe(St(i.auth_time)),issuedAtTime:Pe(St(i.iat)),expirationTime:Pe(St(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function St(t){return Number(t)*1e3}function Gt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Je("JWT malformed, contained fewer than 3 sections"),null;try{const i=tr(n);return i?JSON.parse(i):(Je("Failed to decode base64 JWT payload"),null)}catch(i){return Je("Caught error parsing JWT payload as JSON",i?.toString()),null}}function An(t){const e=Gt(t);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xe(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof re&&ho(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ho({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ft{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pe(this.lastLoginAt),this.creationTime=Pe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function st(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xe(t,br(n,{idToken:r}));f(i?.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vr(s.providerUserInfo):[],l=mo(t.providerData,a),d=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!l?.length,h=d?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ft(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function po(t){const e=M(t);await st(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mo(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vr(t){return t.map(e=>{var{providerId:n}=e,r=Yt(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function go(t,e){const n=await mr(t,{},async()=>{const r=$e({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=gr(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",pr.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bo(t,e){return Y(t,"POST","/v2/accounts:revokeToken",W(t,e))}/**
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
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):An(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){f(e.length!==0,"internal-error");const n=An(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(f(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await go(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new be;return r&&(f(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(f(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(f(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return $("not implemented")}}/**
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
 */function z(t,e){f(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class F{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ft(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xe(this,this.stsTokenManager.getToken(this.auth,e));return f(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uo(this,e)}reload(){return po(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new F(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await st(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(O(this.auth.app))return Promise.reject(q(this.auth));const e=await this.getIdToken();return await xe(this,lo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,d,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,T=(l=n.tenantId)!==null&&l!==void 0?l:void 0,pe=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,ze=(u=n.createdAt)!==null&&u!==void 0?u:void 0,un=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:bt,emailVerified:hn,isAnonymous:fn,providerData:vt,stsTokenManager:pn}=n;f(bt&&pn,e,"internal-error");const pi=be.fromJSON(this.name,pn);f(typeof bt=="string",e,"internal-error"),z(p,e.name),z(b,e.name),f(typeof hn=="boolean",e,"internal-error"),f(typeof fn=="boolean",e,"internal-error"),z(m,e.name),z(v,e.name),z(T,e.name),z(pe,e.name),z(ze,e.name),z(un,e.name);const yt=new F({uid:bt,auth:e,email:b,emailVerified:hn,displayName:p,isAnonymous:fn,photoURL:v,phoneNumber:m,tenantId:T,stsTokenManager:pi,createdAt:ze,lastLoginAt:un});return vt&&Array.isArray(vt)&&(yt.providerData=vt.map(mi=>Object.assign({},mi))),pe&&(yt._redirectEventId=pe),yt}static async _fromIdTokenResponse(e,n,r=!1){const i=new be;i.updateFromServerResponse(n);const s=new F({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await st(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];f(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new be;l.updateFromIdToken(r);const d=new F({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ft(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(d,u),d}}/**
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
 */const Pn=new Map;function B(t){j(t instanceof Function,"Expected a class definition");let e=Pn.get(t);return e?(j(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pn.set(t,e),e)}/**
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
 */class yr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yr.type="NONE";const Ln=yr;/**
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
 */function Qe(t,e,n){return`firebase:${t}:${e}:${n}`}class ve{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qe(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qe("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?F._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ve(B(Ln),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||B(Ln);const a=Qe(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(a);if(h){const p=F._fromJSON(e,h);u!==s&&(l=p),s=u;break}}catch{}const d=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new ve(s,e,r):(s=d[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new ve(s,e,r))}}/**
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
 */function Rn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Er(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sr(e))return"Blackberry";if(Tr(e))return"Webos";if(_r(e))return"Safari";if((e.includes("chrome/")||Ir(e))&&!e.includes("edge/"))return"Chrome";if(kr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function wr(t=C()){return/firefox\//i.test(t)}function _r(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ir(t=C()){return/crios\//i.test(t)}function Er(t=C()){return/iemobile/i.test(t)}function kr(t=C()){return/android/i.test(t)}function Sr(t=C()){return/blackberry/i.test(t)}function Tr(t=C()){return/webos/i.test(t)}function Jt(t=C()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vo(t=C()){var e;return Jt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yo(){return xi()&&document.documentMode===10}function Cr(t=C()){return Jt(t)||kr(t)||Tr(t)||Sr(t)||/windows phone/i.test(t)||Er(t)}/**
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
 */function Ar(t,e=[]){let n;switch(t){case"Browser":n=Rn(C());break;case"Worker":n=`${Rn(C())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fe}/${r}`}/**
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
 */class wo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const d=e(s);a(d)}catch(d){l(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function _o(t,e={}){return Y(t,"GET","/v2/passwordPolicy",W(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Io=6;class Eo{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Io,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ko{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xn(this),this.idTokenSubscription=new xn(this),this.beforeStateQueue=new wo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=B(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await br(this,{idToken:e}),r=await F._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(O(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&d?.user&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await st(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=no()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(O(this.app))return Promise.reject(q(this));const n=e?M(e):null;return n&&f(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return O(this.app)?Promise.reject(q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return O(this.app)?Promise.reject(q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(B(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _o(this),n=new Eo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bo(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&B(e)||this._popupRedirectResolver;f(n,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[B(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ar(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Zs(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ie(t){return M(t)}class xn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fi(n=>this.observer=n)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function So(t){ft=t}function Pr(t){return ft.loadJS(t)}function To(){return ft.recaptchaEnterpriseScript}function Co(){return ft.gapiScript}function Ao(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Po="recaptcha-enterprise",Lo="NO_RECAPTCHA";class Ro{constructor(e){this.type=Po,this.auth=ie(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{co(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new ao(d);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(d=>{l(d)})})}function i(s,a,l){const d=window.grecaptcha;Cn(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(Lo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&Cn(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=To();d.length!==0&&(d+=l),Pr(d).then(()=>{i(l,s,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}async function On(t,e,n,r=!1){const i=new Ro(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ot(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await On(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await On(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function xo(t,e){const n=ar(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nt(s,e??{}))return i;x(i,"already-initialized")}return n.initialize({options:e})}function Oo(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(B);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Do(t,e,n){const r=ie(t);f(r._canInitEmulator,r,"emulator-config-failed"),f(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Lr(e),{host:a,port:l}=No(e),d=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mo()}function Lr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function No(t){const e=Lr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dn(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Dn(a)}}}function Dn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mo(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $("not implemented")}_getIdTokenResponse(e){return $("not implemented")}_linkToIdToken(e,n){return $("not implemented")}_getReauthenticationResolver(e){return $("not implemented")}}async function Uo(t,e){return Y(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $o(t,e){return qe(t,"POST","/v1/accounts:signInWithPassword",W(t,e))}async function Fo(t,e){return Y(t,"POST","/v1/accounts:sendOobCode",W(t,e))}async function Bo(t,e){return Fo(t,e)}/**
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
 */async function qo(t,e){return qe(t,"POST","/v1/accounts:signInWithEmailLink",W(t,e))}async function Ho(t,e){return qe(t,"POST","/v1/accounts:signInWithEmailLink",W(t,e))}/**
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
 */class Oe extends Qt{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oe(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oe(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ot(e,n,"signInWithPassword",$o);case"emailLink":return qo(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ot(e,r,"signUpPassword",Uo);case"emailLink":return Ho(e,{idToken:n,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ye(t,e){return qe(t,"POST","/v1/accounts:signInWithIdp",W(t,e))}/**
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
 */const jo="http://localhost";class de extends Qt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new de(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yt(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new de(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ye(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ye(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ye(e,n)}buildRequest(){const e={requestUri:jo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$e(n)}return e}}/**
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
 */function Vo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wo(t){const e=Te(Ce(t)).link,n=e?Te(Ce(e)).deep_link_id:null,r=Te(Ce(t)).deep_link_id;return(r?Te(Ce(r)).link:null)||r||n||e||t}class Xt{constructor(e){var n,r,i,s,a,l;const d=Te(Ce(e)),u=(n=d.apiKey)!==null&&n!==void 0?n:null,h=(r=d.oobCode)!==null&&r!==void 0?r:null,p=Vo((i=d.mode)!==null&&i!==void 0?i:null);f(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=d.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Wo(e);try{return new Xt(n)}catch{return null}}}/**
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
 */class ke{constructor(){this.providerId=ke.PROVIDER_ID}static credential(e,n){return Oe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xt.parseLink(n);return f(r,"argument-error"),Oe._fromEmailAndCode(e,r.code,r.tenantId)}}ke.PROVIDER_ID="password";ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class He extends Rr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class K extends He{constructor(){super("facebook.com")}static credential(e){return de._fromParams({providerId:K.PROVIDER_ID,signInMethod:K.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return K.credentialFromTaggedObject(e)}static credentialFromError(e){return K.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return K.credential(e.oauthAccessToken)}catch{return null}}}K.FACEBOOK_SIGN_IN_METHOD="facebook.com";K.PROVIDER_ID="facebook.com";/**
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
 */class G extends He{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return de._fromParams({providerId:G.PROVIDER_ID,signInMethod:G.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return G.credentialFromTaggedObject(e)}static credentialFromError(e){return G.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return G.credential(n,r)}catch{return null}}}G.GOOGLE_SIGN_IN_METHOD="google.com";G.PROVIDER_ID="google.com";/**
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
 */class J extends He{constructor(){super("github.com")}static credential(e){return de._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.GITHUB_SIGN_IN_METHOD="github.com";J.PROVIDER_ID="github.com";/**
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
 */class Q extends He{constructor(){super("twitter.com")}static credential(e,n){return de._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Q.credential(n,r)}catch{return null}}}Q.TWITTER_SIGN_IN_METHOD="twitter.com";Q.PROVIDER_ID="twitter.com";/**
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
 */async function Yo(t,e){return qe(t,"POST","/v1/accounts:signUp",W(t,e))}/**
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
 */class ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await F._fromIdTokenResponse(e,r,i),a=Nn(r);return new ue({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nn(r);return new ue({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class at extends re{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new at(e,n,r,i)}}function xr(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?at._fromErrorAndOperation(t,s,e,r):s})}async function zo(t,e,n=!1){const r=await xe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ue._forOperation(t,"link",r)}/**
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
 */async function Ko(t,e,n=!1){const{auth:r}=t;if(O(r.app))return Promise.reject(q(r));const i="reauthenticate";try{const s=await xe(t,xr(r,i,e,t),n);f(s.idToken,r,"internal-error");const a=Gt(s.idToken);f(a,r,"internal-error");const{sub:l}=a;return f(t.uid===l,r,"user-mismatch"),ue._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&x(r,"user-mismatch"),s}}/**
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
 */async function Or(t,e,n=!1){if(O(t.app))return Promise.reject(q(t));const r="signIn",i=await xr(t,r,e),s=await ue._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Go(t,e){return Or(ie(t),e)}/**
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
 */async function Dr(t){const e=ie(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jo(t,e,n){const r=ie(t);await ot(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Bo)}async function Qo(t,e,n){if(O(t.app))return Promise.reject(q(t));const r=ie(t),a=await ot(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yo).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Dr(t),d}),l=await ue._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Xo(t,e,n){return O(t.app)?Promise.reject(q(t)):Go(M(t),ke.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dr(t),r})}/**
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
 */function Zo(t,e){return M(t).setPersistence(e)}function ea(t,e,n,r){return M(t).onIdTokenChanged(e,n,r)}function ta(t,e,n){return M(t).beforeAuthStateChanged(e,n)}function na(t,e,n,r){return M(t).onAuthStateChanged(e,n,r)}function oe(t){return M(t).signOut()}const ct="__sak";/**
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
 */class Nr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ct,"1"),this.storage.removeItem(ct),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ra=1e3,ia=10;class Mr extends Nr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);yo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ia):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ra)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mr.type="LOCAL";const Ur=Mr;/**
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
 */class $r extends Nr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$r.type="SESSION";const Fr=$r;/**
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
 */function sa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async u=>u(n.origin,s)),d=await sa(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pt.receivers=[];/**
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
 */function Zt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class oa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,d)=>{const u=Zt("",20);i.port1.start();const h=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const b=p;if(b.data.eventId===u)switch(b.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(b.data.response);break;default:clearTimeout(h),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function N(){return window}function aa(t){N().location.href=t}/**
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
 */function Br(){return typeof N().WorkerGlobalScope<"u"&&typeof N().importScripts=="function"}async function ca(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function la(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function da(){return Br()?self:null}/**
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
 */const qr="firebaseLocalStorageDb",ua=1,lt="firebaseLocalStorage",Hr="fbase_key";class je{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mt(t,e){return t.transaction([lt],e?"readwrite":"readonly").objectStore(lt)}function ha(){const t=indexedDB.deleteDatabase(qr);return new je(t).toPromise()}function Bt(){const t=indexedDB.open(qr,ua);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lt,{keyPath:Hr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lt)?e(r):(r.close(),await ha(),e(await Bt()))})})}async function Mn(t,e,n){const r=mt(t,!0).put({[Hr]:e,value:n});return new je(r).toPromise()}async function fa(t,e){const n=mt(t,!1).get(e),r=await new je(n).toPromise();return r===void 0?null:r.value}function Un(t,e){const n=mt(t,!0).delete(e);return new je(n).toPromise()}const pa=800,ma=3;class jr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ma)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Br()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pt._getInstance(da()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ca(),!this.activeServiceWorker)return;this.sender=new oa(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||la()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bt();return await Mn(e,ct,"1"),await Un(e,ct),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fa(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Un(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mt(i,!1).getAll();return new je(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jr.type="LOCAL";const ga=jr;new Be(3e4,6e4);/**
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
 */function ba(t,e){return e?B(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class en extends Qt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ye(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ye(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function va(t){return Or(t.auth,new en(t),t.bypassAuthState)}function ya(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),Ko(n,new en(t),t.bypassAuthState)}async function wa(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),zo(n,new en(t),t.bypassAuthState)}/**
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
 */class Vr{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return va;case"linkViaPopup":case"linkViaRedirect":return wa;case"reauthViaPopup":case"reauthViaRedirect":return ya;default:x(this.auth,"internal-error")}}resolve(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _a=new Be(2e3,1e4);class me extends Vr{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,me.currentPopupAction&&me.currentPopupAction.cancel(),me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){j(this.filter.length===1,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(D(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(D(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(D(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_a.get())};e()}}me.currentPopupAction=null;/**
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
 */const Ia="pendingRedirect",Xe=new Map;class Ea extends Vr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xe.get(this.auth._key());if(!e){try{const r=await ka(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xe.set(this.auth._key(),e)}return this.bypassAuthState||Xe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ka(t,e){const n=Ca(e),r=Ta(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Sa(t,e){Xe.set(t._key(),e)}function Ta(t){return B(t._redirectPersistence)}function Ca(t){return Qe(Ia,t.config.apiKey,t.name)}async function Aa(t,e,n=!1){if(O(t.app))return Promise.reject(q(t));const r=ie(t),i=ba(r,e),a=await new Ea(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Pa=10*60*1e3;class La{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ra(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(D(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pa&&this.cachedEventUids.clear(),this.cachedEventUids.has($n(e))}saveEventToCache(e){this.cachedEventUids.add($n(e)),this.lastProcessedEventTime=Date.now()}}function $n(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wr({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ra(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wr(t);default:return!1}}/**
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
 */async function xa(t,e={}){return Y(t,"GET","/v1/projects",e)}/**
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
 */const Oa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Da=/^https?/;async function Na(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xa(t);for(const n of e)try{if(Ma(n))return}catch{}x(t,"unauthorized-domain")}function Ma(t){const e=$t(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Da.test(n))return!1;if(Oa.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ua=new Be(3e4,6e4);function Fn(){const t=N().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $a(t){return new Promise((e,n)=>{var r,i,s;function a(){Fn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fn(),n(D(t,"network-request-failed"))},timeout:Ua.get()})}if(!((i=(r=N().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=N().gapi)===null||s===void 0)&&s.load)a();else{const l=Ao("iframefcb");return N()[l]=()=>{gapi.load?a():n(D(t,"network-request-failed"))},Pr(`${Co()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw Ze=null,e})}let Ze=null;function Fa(t){return Ze=Ze||$a(t),Ze}/**
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
 */const Ba=new Be(5e3,15e3),qa="__/auth/iframe",Ha="emulator/auth/iframe",ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Va=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wa(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kt(e,Ha):`https://${t.config.authDomain}/${qa}`,r={apiKey:e.apiKey,appName:t.name,v:Fe},i=Va.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$e(r).slice(1)}`}async function Ya(t){const e=await Fa(t),n=N().gapi;return f(n,t,"internal-error"),e.open({where:document.body,url:Wa(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ja,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=D(t,"network-request-failed"),l=N().setTimeout(()=>{s(a)},Ba.get());function d(){N().clearTimeout(l),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const za={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ka=500,Ga=600,Ja="_blank",Qa="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xa(t,e,n,r=Ka,i=Ga){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},za),{width:r.toString(),height:i.toString(),top:s,left:a}),u=C().toLowerCase();n&&(l=Ir(u)?Ja:n),wr(u)&&(e=e||Qa,d.scrollbars="yes");const h=Object.entries(d).reduce((b,[m,v])=>`${b}${m}=${v},`,"");if(vo(u)&&l!=="_self")return Za(e||"",l),new Bn(null);const p=window.open(e||"",l,h);f(p,t,"popup-blocked");try{p.focus()}catch{}return new Bn(p)}function Za(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ec="__/auth/handler",tc="emulator/auth/handler",nc=encodeURIComponent("fac");async function qn(t,e,n,r,i,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fe,eventId:i};if(e instanceof Rr){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$i(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))a[h]=p}if(e instanceof He){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const d=await t._getAppCheckToken(),u=d?`#${nc}=${encodeURIComponent(d)}`:"";return`${rc(t)}?${$e(l).slice(1)}${u}`}function rc({config:t}){return t.emulator?Kt(t,tc):`https://${t.authDomain}/${ec}`}/**
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
 */const Tt="webStorageSupport";class ic{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fr,this._completeRedirectFn=Aa,this._overrideRedirectResult=Sa}async _openPopup(e,n,r,i){var s;j((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await qn(e,n,r,$t(),i);return Xa(e,a,Zt())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qn(e,n,r,$t(),i);return aa(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(j(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ya(e),r=new La(e);return n.register("authEvent",i=>(f(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tt,{type:Tt},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[Tt];a!==void 0&&n(!!a),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Na(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cr()||_r()||Jt()}}const sc=ic;var Hn="@firebase/auth",jn="1.7.9";/**
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
 */class oc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ac(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cc(t){Le(new we("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;f(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ar(t)},u=new ko(r,i,s,d);return Oo(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Le(new we("auth-internal",e=>{const n=ie(e.getProvider("auth").getImmediate());return(r=>new oc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ge(Hn,jn,ac(t)),ge(Hn,jn,"esm2017")}/**
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
 */const lc=5*60,dc=rr("authIdTokenMaxAge")||lc;let Vn=null;const uc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dc)return;const i=n?.token;Vn!==i&&(Vn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hc(t=Bs()){const e=ar(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xo(t,{popupRedirectResolver:sc,persistence:[ga,Ur,Fr]}),r=rr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=uc(s.toString());ta(n,a,()=>a(n.currentUser)),ea(n,l=>a(l))}}const i=Ti("auth");return i&&Do(n,`http://${i}`),n}function fc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}So({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=D("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cc("Browser");const tn={apiKey:"AIzaSyBn3jzEjFynvFo6ITwR-7KciUMB0DjlPv8",authDomain:"kmu-qbank-v2.firebaseapp.com",databaseURL:"https://kmu-qbank-v2-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"kmu-qbank-v2",storageBucket:"kmu-qbank-v2.firebasestorage.app",messagingSenderId:"1056732045080",appId:"1:1056732045080:web:b2c4c1764742c6f707086d"},R={STUDENT_APP_VERSION:"2.0.0",OFFLINE_GRACE_DAYS:3,HEALTH_PULSE_MINUTES:15,ANALYTICS_SYNC_SECONDS:60,DEVICE_LIMIT_DEFAULT:2},pc=tn.databaseURL.replace(/\/$/,"");function Ve(t,e,n={}){const r=String(t||"").replace(/^\/+|\/+$/g,""),i=new URL(`${pc}/${r}.json`);e&&i.searchParams.set("auth",e);for(const[s,a]of Object.entries(n))i.searchParams.set(s,a);return i.toString()}async function mc(t,e){try{const n=await fetch(Ve(t,e),{method:"GET",cache:"no-store"});return n.ok?await n.json():(console.warn(`fbGet ${t} failed (${n.status})`),null)}catch(n){return console.warn(`fbGet ${t} network error:`,n.message),null}}async function gc(t,e,n){const r=await fetch(Ve(t,n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok){const i=await r.text();throw new Error(`fbPut ${t} failed (${r.status}): ${i}`)}return await r.json()}async function bc(t,e,n){const r=await fetch(Ve(t,n),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok){const i=await r.text();throw new Error(`fbPatch ${t} failed (${r.status}): ${i}`)}return await r.json()}async function vc(t,e){const n=await fetch(Ve(t,e),{method:"DELETE"});if(!n.ok){const r=await n.text();throw new Error(`fbDelete ${t} failed (${n.status}): ${r}`)}return!0}async function yc(t,e){const n=await fetch(Ve("",e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok){const r=await n.text();throw new Error(`fbMultiUpdate failed (${n.status}): ${r}`)}return await n.json()}function et(t=1){return{".sv":{increment:t}}}function Yr(t=new Date){const e=t instanceof Date?t:new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${i}`}function wc(t){if(!t)return"—";try{return new Date(t).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}catch{return"—"}}function Ae(t){const e=Math.abs(Math.floor(t)),n=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60;return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Wn(t,e){const n=String(t).split(".").map(s=>parseInt(s,10)||0),r=String(e||"0").split(".").map(s=>parseInt(s,10)||0),i=Math.max(n.length,r.length);for(let s=0;s<i;s++){const a=n[s]||0,l=r[s]||0;if(a>l)return 1;if(a<l)return-1}return 0}function _c(t){return t?String(t).replace(/\[\s*(?:cite:)?\s*\d+(?:[\d,\s]*)\]/gi,"").replace(/\[\s*\d+\s*\]/g,"").replace(/\(\s*Ref:.*?\)/gi,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\\"/g,'"').replace(/\n\s*\n\s*\n/g,`

`).trim():"No educational rationale provided for this item."}function _(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ct(t){const e=Array.isArray(t)?[...t]:[];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function qt(t){return new Promise(e=>setTimeout(e,t))}function Ic(){let t=document.getElementById("kmu-toast-container");return t||(t=document.createElement("div"),t.id="kmu-toast-container",t.style.cssText="position:fixed;top:20px;right:20px;z-index:99999;display:flex;flex-direction:column;gap:10px;pointer-events:none;max-width:360px;",document.body.appendChild(t)),t}function y(t,e="info",n=3500){const r=Ic(),i=document.createElement("div"),s={info:{bg:"rgba(14, 165, 233, 0.15)",border:"#0ea5e9"},success:{bg:"rgba(16, 185, 129, 0.15)",border:"#10b981"},error:{bg:"rgba(239, 68, 68, 0.15)",border:"#ef4444"},warning:{bg:"rgba(245, 158, 11, 0.15)",border:"#f59e0b"}},a=s[e]||s.info;if(i.style.cssText=`background:${a.bg};border:1.5px solid ${a.border};color:#fff;padding:12px 16px;border-radius:12px;font-size:0.85rem;font-weight:600;line-height:1.4;box-shadow:0 8px 24px rgba(0,0,0,0.5);backdrop-filter:blur(12px);pointer-events:auto;cursor:pointer;word-break:break-word;animation:kmuToastIn 0.25s ease-out;`,i.textContent=t,i.onclick=()=>i.remove(),!document.getElementById("kmu-toast-style")){const l=document.createElement("style");l.id="kmu-toast-style",l.textContent="@keyframes kmuToastIn{from{opacity:0;transform:translateX(40px);}to{opacity:1;transform:translateX(0);}}@keyframes kmuToastOut{from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(40px);}}",document.head.appendChild(l)}return r.appendChild(i),n>0&&setTimeout(()=>{i.style.animation="kmuToastOut 0.25s ease-in forwards",setTimeout(()=>i.remove(),250)},n),i}function w(t,e={}){return new Promise(n=>{const{title:r="Confirm",okText:i="Yes",cancelText:s="Cancel",danger:a=!1}=e,l=s&&s.trim().length>0,d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);z-index:99998;display:flex;align-items:center;justify-content:center;padding:20px;";const u=document.createElement("div");u.style.cssText="background:#0d121f;border:1.5px solid #1e293b;border-radius:16px;padding:24px;width:100%;max-width:440px;color:#fff;box-shadow:0 20px 60px rgba(0,0,0,0.9);",u.innerHTML=`
      <h3 style="margin:0 0 12px 0;font-size:1.05rem;font-weight:800;color:${a?"#ef4444":"#0ea5e9"};">${_(r)}</h3>
      <p style="margin:0 0 20px 0;font-size:0.88rem;line-height:1.5;color:#cbd5e1;">${_(t)}</p>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        ${l?`<button id="kmu-confirm-cancel" style="padding:10px 16px;border-radius:10px;background:transparent;border:1.5px solid #334155;color:#94a3b8;font-weight:700;font-size:0.85rem;cursor:pointer;">${_(s)}</button>`:""}
        <button id="kmu-confirm-ok" style="padding:10px 16px;border-radius:10px;background:${a?"#ef4444":"#0ea5e9"};border:none;color:#fff;font-weight:700;font-size:0.85rem;cursor:pointer;">${_(i)}</button>
      </div>`,d.appendChild(u),document.body.appendChild(d);const h=m=>{d.remove(),n(m)};u.querySelector("#kmu-confirm-ok").onclick=()=>h(!0);const p=u.querySelector("#kmu-confirm-cancel");p&&(p.onclick=()=>h(!1)),d.addEventListener("click",m=>{m.target===d&&l&&h(!1)});const b=m=>{m.key==="Escape"&&(document.removeEventListener("keydown",b),h(!l)),m.key==="Enter"&&(document.removeEventListener("keydown",b),h(!0))};document.addEventListener("keydown",b)})}const Ec=cr(tn),A=hc(Ec);Zo(A,Ur).catch(()=>{});const o={uid:null,email:null,name:"Doctor",enrolledYear:"1st Year",deviceId:null,subscription:null,deviceLimit:R.DEVICE_LIMIT_DEFAULT,questions:[],questionVersion:0,analytics:{attempted:0,correct:0,incorrect:0,solvedMap:{},dailyLog:{},examDate:""},pendingAnswerQueue:[],pendingFlagQueue:[],announcements:[],lastOnlineCheck:0,activeScreen:"screen-splash",isVerifying:!1,isRegistering:!1,verifiedThisSession:!1,isPendingUser:!1,healthPulseTimer:null,analyticsSyncTimer:null,clockTimer:null,pendingPollTimer:null,offlineWatcherTimer:null,test:{mode:"tutor",block:"",questionIds:[],responses:{},committed:new Set,flagged:new Set,currIdx:0,sessionSecs:0,totalTimeSpent:0,startedAt:0,endsAt:0,initialLen:0},filtered:[],availableUnsolved:0,availableSolved:0},kc=["A","B","C","D","E"],Sc="kmu_session_",Tc="kmu_stats_",Yn="kmu_device_id",zr="kmu_theme",Kr="kmu_last_read_announcement_ts",nn="kmu_session_cache_",c=t=>document.getElementById(t),S=t=>t?.classList?.remove("hidden"),E=t=>t?.classList?.add("hidden");function ae(t){c(t)?.classList.remove("hidden")}function P(t){c(t)?.classList.add("hidden")}function Cc(t){document.querySelectorAll(".screen").forEach(e=>{e.id==="sidebar-drawer"||e.id==="drawer-backdrop"||e.classList.contains("backdrop-blur")||e.classList.toggle("hidden",e.id!==t)}),o.activeScreen=t}function k(t){Cc(t),t==="screen-dashboard"&&(Ie(),V(),ne(),le(),L())}function Ac(){const t=c("btn-login");t&&(t.disabled=!1);const e=c("btn-register-submit");e&&(e.disabled=!1);const n=c("login-feedback");n&&(n.textContent="");const r=c("input-password");r&&(r.value=""),S(c("auth-form-card")),E(c("auth-pending-card")),S(c("auth-login-fields")),E(c("auth-register-fields")),c("tab-login-btn")?.classList.add("active"),c("tab-register-btn")?.classList.remove("active")}function Pc(t){if(!t)return"";const e=String(t).trim();return e.startsWith("https://")||e.startsWith("http://")?e:""}function rn(){return o.uid?`kmu_pq_${o.uid}`:null}function he(){const t=rn();if(t)try{localStorage.setItem(t,JSON.stringify({answers:o.pendingAnswerQueue,flags:o.pendingFlagQueue}))}catch{}}function Lc(){const t=rn();if(t)try{const e=localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);o.pendingAnswerQueue=Array.isArray(n.answers)?n.answers:[],o.pendingFlagQueue=Array.isArray(n.flags)?n.flags:[]}catch{}}function Gr(){const t=rn();t&&localStorage.removeItem(t),o.pendingAnswerQueue=[],o.pendingFlagQueue=[]}function Jr(){return o.uid?`kmu_last_online_${o.uid}`:null}function Qr(){const t=Jr();if(t){o.lastOnlineCheck=Date.now();try{localStorage.setItem(t,String(o.lastOnlineCheck))}catch{}}}function Rc(){const t=Jr();return t?parseInt(localStorage.getItem(t)||"0",10):0}async function xc(){if(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())try{const n=await(await vi(()=>import("./index-0vyRMRIm.js").then(i=>i.i),[],import.meta.url)).Device.getId(),r=n?.identifier||n?.uuid;if(r)return"and_"+r}catch{}if(window.desktopAPI?.getMachineId)try{const e=window.desktopAPI.getMachineId();if(e)return e}catch{}let t=localStorage.getItem(Yn);return t||(t="web_"+Math.random().toString(36).slice(2,14)+Date.now().toString(36),localStorage.setItem(Yn,t)),t}function Oc(t){return t.startsWith("and_")?"Android Phone":t.startsWith("dsk_")?"Windows PC":"Web App"}async function We(t=!1){try{return await A.currentUser?.getIdToken(t)}catch{return null}}async function I(t){return mc(t,await We())}async function dt(t,e){return gc(t,e,await We())}async function Ht(t,e){return bc(t,e,await We())}async function Dc(t){return vc(t,await We())}async function sn(t){return yc(t,await We())}const Nc="kmu_qbank_cache_v2",_e="questions_by_year";function Xr(){return new Promise((t,e)=>{const n=indexedDB.open(Nc,1);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(_e)||i.createObjectStore(_e,{keyPath:"year"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function Mc(t,e,n){try{const r=await Xr();return new Promise(i=>{const s=r.transaction(_e,"readwrite");s.objectStore(_e).put({year:t,questions:e,version:n,savedAt:Date.now()}),s.oncomplete=()=>i(!0),s.onerror=()=>i(!1)})}catch{return!1}}async function Zr(t){try{const e=await Xr();return new Promise(n=>{const i=e.transaction(_e,"readonly").objectStore(_e).get(t);i.onsuccess=()=>n(i.result||null),i.onerror=()=>n(null)})}catch{return null}}let At=0,Pt=!1;async function Se(t=!1){if(typeof navigator<"u"&&navigator.onLine===!1)return!1;const e=Date.now();if(!t&&e-At<5e3)return Pt;try{const n=new AbortController,r=setTimeout(()=>n.abort(),3e3);return await fetch(tn.databaseURL+"/.json?shallow=true",{method:"GET",cache:"no-store",signal:n.signal}),clearTimeout(r),At=e,Pt=!0,!0}catch{return At=e,Pt=!1,!1}}function ei(){if(o.uid)try{localStorage.setItem(nn+o.uid,JSON.stringify({uid:o.uid,email:o.email,name:o.name,enrolledYear:o.enrolledYear,subscription:o.subscription,deviceLimit:o.deviceLimit,cachedAt:Date.now()}))}catch{}}function Uc(t){try{const e=localStorage.getItem(nn+t);return e?JSON.parse(e):null}catch{return null}}function $c(t){t&&(o.name=t.name||o.name,o.enrolledYear=t.enrolledYear||o.enrolledYear,o.subscription=t.subscription||o.subscription,o.deviceLimit=t.deviceLimit||o.deviceLimit)}function ce(t){if(t||(t=o.uid),!!t)try{localStorage.removeItem(nn+t)}catch{}}function Fc(){localStorage.getItem(zr)==="light"?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme")}function Bc(){const t=document.body.classList.toggle("light-theme");localStorage.setItem(zr,t?"light":"dark")}Fc();function on(){return o.uid?Sc+o.uid:null}function te(){const t=on();!t||o.test.questionIds.length===0||(localStorage.setItem(t,JSON.stringify({mode:o.test.mode,block:o.test.block,questionIds:o.test.questionIds,responses:o.test.responses,committed:Array.from(o.test.committed),flagged:Array.from(o.test.flagged),currIdx:o.test.currIdx,sessionSecs:o.test.sessionSecs,totalTimeSpent:o.test.totalTimeSpent,startedAt:o.test.startedAt,endsAt:o.test.endsAt,initialLen:o.test.initialLen,enrolledYear:o.enrolledYear,savedAt:Date.now()})),Ie())}function fe(){const t=on();t&&localStorage.removeItem(t),Ie()}function an(){const t=on();if(!t)return null;try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}function Ie(){const t=c("dash-resume-card");if(!t)return;const e=an();if(!e||!e.questionIds?.length){E(t);return}const n=Object.keys(e.responses||{}).length;if(n>=e.initialLen){fe();return}c("resume-test-title").textContent=`${e.enrolledYear} · ${e.block} (${(e.mode||"tutor").toUpperCase()})`,c("resume-test-progress-text").textContent=`Solved ${n} of ${e.initialLen} (${e.initialLen-n} remaining)`,S(t)}function ti(){return o.uid?Tc+o.uid:null}function qc(){const t=ti();if(t)try{const e=localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);o.analytics.attempted=n.attempted||0,o.analytics.correct=n.correct||0,o.analytics.incorrect=n.incorrect||0,o.analytics.solvedMap=n.solvedMap||{},o.analytics.dailyLog=n.dailyLog||{},o.analytics.examDate=n.examDate||""}catch{}}function De(){const t=ti();t&&localStorage.setItem(t,JSON.stringify(o.analytics))}async function ni(){if(o.pendingAnswerQueue.length>0)return;const t=await I(`users/${o.uid}/analytics`);t&&(o.analytics.attempted=t.attempted||0,o.analytics.correct=t.correct||0,o.analytics.incorrect=t.incorrect||0,o.analytics.solvedMap=t.solvedMap||{},o.analytics.dailyLog=t.dailyLog||{},o.analytics.examDate=t.examDate||"",De(),V(),ne())}function Hc(t,e){if(o.analytics.solvedMap[t]!==void 0)return;o.analytics.solvedMap[t]=e,o.analytics.attempted++,e?o.analytics.correct++:o.analytics.incorrect++;const n=Yr();o.analytics.dailyLog[n]=(o.analytics.dailyLog[n]||0)+1,o.pendingAnswerQueue.push({qid:t,isCorrect:e,today:n}),De(),he(),V()}async function Ne(){if(!o.pendingAnswerQueue.length||!navigator.onLine)return;const t=[...o.pendingAnswerQueue];o.pendingAnswerQueue=[];try{const e={};let n=0,r=0,i=0;for(const s of t)e[`users/${o.uid}/analytics/solvedMap/${s.qid}`]=s.isCorrect,n++,s.isCorrect?r++:i++;e[`users/${o.uid}/analytics/attempted`]=et(n),e[`users/${o.uid}/analytics/correct`]=et(r),e[`users/${o.uid}/analytics/incorrect`]=et(i),await sn(e),he()}catch{o.pendingAnswerQueue.unshift(...t),he()}}async function Ee(){if(!o.pendingFlagQueue.length||!navigator.onLine)return;const t=[...o.pendingFlagQueue];o.pendingFlagQueue=[];try{const e={};for(const n of t){const r=`reportedQuestions/${n.qid}`;e[`${r}/flagCount`]=et(1),e[`${r}/reportedAt`]=Date.now(),e[`${r}/question`]=n.question,e[`${r}/options`]=n.options,e[`${r}/correctAnswerIndex`]=n.correctAnswerIndex,e[`${r}/explanation`]=n.explanation,e[`${r}/subject`]=n.subject,e[`${r}/block`]=n.block,e[`${r}/year`]=n.year,e[`${r}/lastReportedBy`]=n.lastReportedBy}await sn(e),he()}catch{o.pendingFlagQueue.unshift(...t),he()}}function Lt(){clearInterval(o.analyticsSyncTimer),o.analyticsSyncTimer=setInterval(()=>{document.visibilityState==="visible"&&(Ne(),Ee())},R.ANALYTICS_SYNC_SECONDS*1e3)}function V(){const t=o.analytics;c("metric-attempted")&&(c("metric-attempted").textContent=t.attempted),c("metric-correct")&&(c("metric-correct").textContent=t.correct),c("metric-incorrect")&&(c("metric-incorrect").textContent=t.incorrect),c("metric-accuracy")&&(c("metric-accuracy").textContent=t.attempted>0?Math.round(t.correct/t.attempted*100)+"%":"0%")}function ne(){const t=c("dash-exam-countdown-text"),e=c("analytics-exam-days-badge"),n=c("input-exam-date");n&&o.analytics.examDate&&(n.value=o.analytics.examDate);const r=o.analytics.examDate;if(!r){t&&(t.textContent="No target date set"),e&&(e.textContent="No Date Set");return}const i=new Date;i.setHours(0,0,0,0);const s=new Date(r);s.setHours(0,0,0,0);const a=Math.ceil((s-i)/864e5);let l="";a>1?l=`⏳ ${a} Days Remaining`:a===1?l="⏳ Tomorrow is Exam Day!":a===0?l="🎯 Today is Exam Day!":l="Exam Passed",t&&(t.textContent=l),e&&(e.textContent=a>=0?`${a} Days Left`:"Completed")}function le(){const t=o.subscription,e=c("dash-plan-badge"),n=c("drawer-plan-badge");if(c("drawer-year-badge")&&(c("drawer-year-badge").textContent=o.enrolledYear),c("dash-year-badge")&&(c("dash-year-badge").textContent=o.enrolledYear),c("promo-current-year")&&(c("promo-current-year").textContent=o.enrolledYear),!t||!t.expiresAt){e&&(e.textContent="Standard"),n&&(n.textContent="Standard");return}let i={trial:"3-Day Trial","6months":"6 Months","1year":"1 Year",unlimited:"Lifetime"}[t.tier]||"Subscription";const s=Math.ceil((t.expiresAt-Date.now())/36e5);s>24?i+=` (${Math.ceil(s/24)}d left)`:s>0?i+=` (${s}h left)`:i="EXPIRED",e&&(e.textContent=i),n&&(n.textContent=i)}async function L(){const t=c("dash-offline-banner");if(!t)return;const e=c("dash-offline-text");if(await Se()){E(t);return}const r=gt(),i=Math.max(0,R.OFFLINE_GRACE_DAYS-r.daysSince).toFixed(1);e&&(r.daysSince>9e3?e.textContent="Offline mode — connect to internet to verify account":r.ok?e.textContent=`Offline mode — ${i} days until reconnection required`:e.textContent="Offline grace period ended — reconnect to continue"),S(t)}function Rt(){cn(),o.offlineWatcherTimer=setInterval(async()=>{if(document.visibilityState!=="visible"||!o.uid||o.activeScreen!=="screen-dashboard")return;const t=await Se(),e=c("dash-offline-banner"),n=c("dash-offline-text");if(t){e&&e.classList.add("hidden");return}const r=gt(),i=Math.max(0,R.OFFLINE_GRACE_DAYS-r.daysSince).toFixed(1);if(n&&(r.daysSince>9e3?n.textContent="Offline mode — connect to internet to verify account":r.ok?n.textContent=`Offline mode — ${i} days until reconnection required`:n.textContent="Offline grace period ended — reconnect to continue"),e&&e.classList.remove("hidden"),o.subscription?.expiresAt&&Date.now()>o.subscription.expiresAt){ce(),await w("Your subscription has expired. Please connect to the internet and contact admin (03314170070).",{title:"Subscription Ended",okText:"OK",cancelText:""}),await X();return}if(r.daysSince<9e3&&!r.ok){await w("Offline grace period has ended. Please connect to the internet to continue.",{title:"Reconnection Required",okText:"OK",cancelText:""}),await X();return}},1e4)}function cn(){o.offlineWatcherTimer&&(clearInterval(o.offlineWatcherTimer),o.offlineWatcherTimer=null)}async function ri(){if(!await Se(!0))return{ok:!1,reason:"offline"};let e,n,r,i,s,a,l;try{[e,n,r,i,s,a,l]=await Promise.all([I(`bannedUsers/${o.uid}`),I(`deletedAccounts/${o.uid}`),I(`users/${o.uid}/profile`),I(`pendingApprovals/${o.uid}`),I(`users/${o.uid}/subscription`),I(`users/${o.uid}/deviceLimit`),I(`users/${o.uid}/devices`)])}catch{return{ok:!1,reason:"network"}}if(e===null&&n===null&&r===null&&i===null&&s===null&&a===null&&l===null)return{ok:!1,reason:"network"};if(e===!0)return ce(),{ok:!1,reason:"banned"};if(n&&n.deletedAt)return ce(),{ok:!1,reason:"deleted",info:n};if(!r)return i?{ok:!1,reason:"pending"}:{ok:!1,reason:"no-profile"};if(o.name=r.name||o.name,o.enrolledYear=r.enrolledYear||o.enrolledYear,!s||!s.expiresAt)return i?{ok:!1,reason:"pending"}:{ok:!1,reason:"pending"};if(Date.now()>s.expiresAt)return ce(),{ok:!1,reason:"expired"};o.subscription=s,o.deviceLimit=typeof a=="number"&&a>0?a:R.DEVICE_LIMIT_DEFAULT;const h=Object.keys(l&&typeof l=="object"?l:{}).filter(p=>p&&p!=="null"&&p!=="0"&&p!=="1");if(h.includes(o.deviceId))Ht(`users/${o.uid}/devices/${o.deviceId}`,{lastActive:Date.now()}).catch(()=>{});else{if(h.length>=o.deviceLimit)return{ok:!1,reason:"device-limit",limit:o.deviceLimit};await dt(`users/${o.uid}/devices/${o.deviceId}`,{platform:Oc(o.deviceId),lastActive:Date.now()})}return Ht(`users/${o.uid}/profile`,{lastSeen:Date.now()}).catch(()=>{}),ei(),{ok:!0}}async function ln(t){const e=await Zr(t);if(e?.questions?.length?(o.questions=e.questions,o.questionVersion=e.version||0):(o.questions=[],o.questionVersion=0),!navigator.onLine)return;const n=await I(`meta/questionVersions/${t}`),r=typeof n=="number"?n:0;if(!(r===0&&o.questions.length>0)&&(r>o.questionVersion||o.questions.length===0)){const i=await I(`questions/${t}`);if(i&&typeof i=="object"){const s=Object.values(i).filter(a=>a&&a.id);(s.length>0||r>0)&&(o.questions=s,o.questionVersion=r,await Mc(t,s,r))}}}async function tt(){if(!o.uid||o.isVerifying||!o.verifiedThisSession)return;if(!await Se()){if(await L(),o.subscription?.expiresAt&&Date.now()>o.subscription.expiresAt){ce(),await w("Your subscription has expired. Please connect to the internet and contact admin (03314170070).",{title:"Subscription Ended",okText:"OK",cancelText:""}),await X();return}const e=gt();if(!e.ok&&e.daysSince<9e3){await w("Offline grace period has ended. Please connect to the internet to continue.",{title:"Reconnection Required",okText:"OK",cancelText:""}),await X();return}return}o.isVerifying=!0;try{let e,n,r;try{[e,n,r]=await Promise.all([I(`bannedUsers/${o.uid}`),I(`pendingApprovals/${o.uid}`),I(`users/${o.uid}/subscription`)])}catch{await L();return}if(e===null&&n===null&&r===null){await L();return}if(E(c("dash-offline-banner")),e===!0){ce(),await w("Your account has been suspended by an administrator.",{title:"Access Revoked",okText:"OK",cancelText:""}),await X();return}if(n)return;if(r&&r.expiresAt&&Date.now()>r.expiresAt){ce(),await w("Your subscription has expired.",{title:"Subscription Ended",okText:"OK",cancelText:""}),await X();return}r&&r.expiresAt&&(o.subscription=r,le(),ei());const s=await I(`users/${o.uid}/profile`);if(s?.enrolledYear&&s.enrolledYear!==o.enrolledYear){o.enrolledYear=s.enrolledYear,await dn(o.enrolledYear);return}await Ne(),await Ee(),Qr()}catch{}finally{o.isVerifying=!1}}function xt(){clearInterval(o.healthPulseTimer),o.healthPulseTimer=setInterval(()=>{document.visibilityState==="visible"&&tt()},R.HEALTH_PULSE_MINUTES*60*1e3)}function ii(){clearInterval(o.healthPulseTimer),o.healthPulseTimer=null}async function si(){const t=await I("announcements");if(!t)return;const e=Object.values(t).sort((i,s)=>(s.timestamp||0)-(i.timestamp||0));o.announcements=e;const n=parseInt(localStorage.getItem(Kr)||"0",10),r=c("badge-announcements-count");r&&(e[0]?.timestamp>n?r.classList.remove("hidden"):r.classList.add("hidden"))}function jc(){const t=c("announcements-modal-list");t&&(t.innerHTML="",o.announcements.length?o.announcements.forEach(e=>{const n=document.createElement("div");n.className="glass-panel p-15 border-left-blue bg-dark mb-5";const r=Pc(e.ctaLink);n.innerHTML=`
        <div class="flex-between mb-5">
          <span class="badge badge-trial uppercase">${_(e.category||"NOTICE")}</span>
          <span class="text-xs text-muted">${wc(e.timestamp)}</span>
        </div>
        <div class="font-bold text-white text-sm mb-5">${_(e.title||"")}</div>
        <p class="text-xs text-muted leading-relaxed mb-5">${_(e.body||"")}</p>
        ${r?`<a href="${_(r)}" target="_blank" rel="noopener" class="btn btn-primary text-xs p-5-10 font-bold no-underline inline-flex mt-5">Open Link ➔</a>`:""}
      `,t.appendChild(n)}):t.innerHTML='<p class="text-xs text-muted text-center py-20">No active announcements.</p>',localStorage.setItem(Kr,String(Date.now())),c("badge-announcements-count")?.classList.add("hidden"))}async function oi(){const t=await I("appConfig/versionInfo");if(!t)return;const e=t.latestVersion||R.STUDENT_APP_VERSION,n=t.minRequiredVersion||R.STUDENT_APP_VERSION,r=R.STUDENT_APP_VERSION,i=Wn(r,e)<0,s=Wn(r,n)<0;if(!i&&!s)return;c("update-version-label").textContent=`Available: v${e} (Current: v${r})`,c("update-release-notes").textContent=t.releaseNotes||"Performance and content updates.";const a=(window.desktopAPI?.isDesktop?t.windowsDownloadUrl:t.apkDownloadUrl)||t.apkDownloadUrl;c("btn-download-update").onclick=()=>{if(!a)return y("No download link.","error");window.desktopAPI?.openExternal?window.desktopAPI.openExternal(a):window.open(a,"_blank")},s?E(c("btn-dismiss-update")):(S(c("btn-dismiss-update")),c("btn-dismiss-update").onclick=()=>P("modal-app-update")),ae("modal-app-update")}async function Vc(){const t=c("btn-manual-refresh");if(!(!t||t.classList.contains("spinning"))){t.classList.add("spinning");try{if(!await Se(!0)){await L(),y("No internet — showing cached data.","warning",3e3);return}y("Refreshing...","info",1200);const n=o.enrolledYear,r=await ri();if(!r.ok){if(r.reason==="banned"||r.reason==="deleted"||r.reason==="expired"){await w("Your session has ended. Please sign in again.",{title:"Access Ended",okText:"OK",cancelText:""}),await X();return}if(r.reason==="device-limit"){y("Device limit reached.","warning",4e3);return}if(r.reason==="network"||r.reason==="offline"){y("Network hiccup. Try again.","warning");return}y("Refresh completed.","info",1500);return}if(o.enrolledYear!==n){const i=["1st Year","2nd Year","3rd Year","4th Year","Final Year"];if(i.indexOf(o.enrolledYear)>i.indexOf(n)){await dn(o.enrolledYear);return}}await Promise.all([ln(o.enrolledYear),ni(),si()]),oi(),V(),ne(),le(),Ie(),L(),y("Refreshed.","success",1800)}catch(e){y("Refresh failed: "+e.message,"error")}finally{setTimeout(()=>t.classList.remove("spinning"),500)}}}function Wc(){c("sidebar-drawer")?.classList.add("open"),S(c("drawer-backdrop"))}function U(){c("sidebar-drawer")?.classList.remove("open"),E(c("drawer-backdrop"))}function zn(t){const e=String(t||"").trim();if(!e)return"Z_";const n=e.match(/paper\s*[-–:]?\s*([a-z0-9]+)/i);if(n)return"P_"+n[1].toUpperCase();const r=e.match(/block\s*[-–:]?\s*([a-z0-9]+)/i);if(r)return"B_"+r[1].toUpperCase();const i=e.match(/^(\d+)/);return i?"N_"+i[1]:"Z_"+e.toUpperCase()}function ai(t,e){return zn(t).localeCompare(zn(e),void 0,{numeric:!0,sensitivity:"base"})}function Yc(){c("generator-class-label").textContent=`${o.enrolledYear} CURRICULUM`,E(c("subject-container")),E(c("topic-container")),o.test.block="",ci(0);const t=[...new Set(o.questions.map(n=>n.block).filter(Boolean))].sort(ai),e=c("block-cards-list");if(e.innerHTML="",!t.length){e.innerHTML=`<p class="text-orange text-sm font-bold p-10">No questions cached for ${o.enrolledYear}. Connect to the internet to download your curriculum.</p>`;return}t.forEach(n=>{const r=document.createElement("div");r.className="select-card",r.textContent=n,r.onclick=()=>{e.querySelectorAll(".select-card").forEach(i=>i.classList.remove("selected")),r.classList.add("selected"),o.test.block=n,zc()},e.appendChild(r)})}function zc(){const t=o.questions.filter(r=>r.block===o.test.block),e={};t.forEach(r=>{e[r.subject]=(e[r.subject]||0)+1});const n=c("subject-checkboxes-list");n.innerHTML="",Object.entries(e).sort().forEach(([r,i])=>{n.innerHTML+=`<label class="chk-label"><input type="checkbox" value="${_(r)}" class="subj-chk" checked> <span>${_(r)}</span> <span class="chk-count">${i}</span></label>`}),n.querySelectorAll(".subj-chk").forEach(r=>r.addEventListener("change",ut)),S(c("subject-container")),ut()}function ut(){const t=[...document.querySelectorAll(".subj-chk:checked")].map(i=>i.value),e=o.questions.filter(i=>i.block===o.test.block&&t.includes(i.subject)),n={};e.forEach(i=>{const s=i.topic||"Misc/Others";n[s]=(n[s]||0)+1});const r=c("topic-checkboxes-list");r.innerHTML="",Object.entries(n).sort().forEach(([i,s])=>{r.innerHTML+=`<label class="chk-label"><input type="checkbox" value="${_(i)}" class="top-chk" checked> <span>${_(i)}</span> <span class="chk-count">${s}</span></label>`}),r.querySelectorAll(".top-chk").forEach(i=>i.addEventListener("change",ht)),Object.keys(n).length?S(c("topic-container")):E(c("topic-container")),ht()}function ht(){const t=[...document.querySelectorAll(".subj-chk:checked")].map(n=>n.value),e=[...document.querySelectorAll(".top-chk:checked")].map(n=>n.value);o.filtered=o.questions.filter(n=>n.block===o.test.block&&t.includes(n.subject)&&e.includes(n.topic||"Misc/Others")),o.availableUnsolved=o.filtered.filter(n=>o.analytics.solvedMap[n.id]===void 0).length,o.availableSolved=o.filtered.length-o.availableUnsolved,ci(o.filtered.length)}function ci(t){const e=c("q-count-slider"),n=c("slider-value-display"),r=c("btn-start-quiz"),i=c("pool-composition-info");if(!t){e.max=0,e.value=0,e.disabled=!0,n.textContent="0 Questions",i.textContent="0 Unsolved · 0 Review",r.disabled=!0;return}const s=Math.min(40,t);e.disabled=!1,e.max=t,e.value=s,n.textContent=`${s} Questions`;const a=Math.min(s,o.availableUnsolved);i.textContent=`${a} Unsolved · ${s-a} Review`,r.disabled=!1}function Kc(){const t=parseInt(c("q-count-slider").value,10)||0;if(!t)return;const e=Ct(o.filtered.filter(s=>o.analytics.solvedMap[s.id]===void 0)),n=Ct(o.filtered.filter(s=>o.analytics.solvedMap[s.id]!==void 0));let r=t<=e.length?e.slice(0,t):e.concat(n.slice(0,t-e.length));const i=Ct(r).map(s=>s.id);if(o.test.questionIds=i,o.test.initialLen=i.length,o.test.responses={},o.test.committed=new Set,o.test.flagged=new Set,o.test.currIdx=0,o.test.totalTimeSpent=0,o.test.startedAt=Date.now(),o.test.mode==="timed"){const s=parseInt(c("input-timer-mins").value,10)||60;o.test.sessionSecs=s*60,o.test.endsAt=Date.now()+s*60*1e3}else o.test.sessionSecs=0,o.test.endsAt=0;c("test-header-mode").textContent=o.test.mode.toUpperCase()+" MODE",te(),k("screen-test-engine"),li(),Ye()}function li(){clearInterval(o.clockTimer),o.clockTimer=setInterval(()=>{if(o.test.mode==="timed"&&o.test.endsAt){const t=Math.round((o.test.endsAt-Date.now())/1e3);o.test.sessionSecs=t;const e=c("q-timer-clock");e&&(e.textContent=Ae(t),e.classList.toggle("text-orange",t<300));const n=c("review-timer-badge");n&&(n.textContent=Ae(t)),t<=0&&Me()}else{o.test.sessionSecs=Math.round((Date.now()-o.test.startedAt)/1e3);const t=c("q-timer-clock");t&&(t.textContent=Ae(o.test.sessionSecs));const e=c("review-timer-badge");e&&(e.textContent=Ae(o.test.sessionSecs))}},1e3)}function di(){const t=o.test.questionIds[o.test.currIdx];return o.questions.find(e=>e.id===t)||null}function Ye(){if(o.test.currIdx>=o.test.questionIds.length){Me();return}const t=di();if(!t){Me();return}c("test-header-counter").textContent=`Item ${o.test.currIdx+1} of ${o.test.initialLen}`,c("q-subject-badge").textContent=`${t.subject||"General"} ➔ ${t.topic||"Misc/Others"}`,c("q-stem-text").textContent=t.question,c("btn-flag-question").classList.toggle("text-orange",o.test.flagged.has(t.id));const e=c("q-options-wrapper");e.innerHTML="",E(c("q-rationale-box")),S(c("btn-skip-q")),E(c("btn-next-q"));const n=o.test.responses[t.id];t.options.forEach((r,i)=>{const s=document.createElement("div");s.className="opt-row";const a=document.createElement("button");a.className="opt-btn",a.innerHTML=`<span class="opt-tag">${kc[i]}</span><span>${_(r)}</span>`;const l=document.createElement("button");l.className="opt-cross-btn",l.innerHTML="👁️‍🗨️",l.title="Strike out",l.onclick=d=>{d.stopPropagation(),s.classList.toggle("strikethrough")},n!==void 0?(a.disabled=!0,l.style.display="none",o.test.mode==="tutor"?i===t.correctAnswerIndex?a.classList.add("correct"):i===n&&a.classList.add("incorrect"):i===n&&a.classList.add("timed-selected")):a.onclick=()=>Gc(i,t),s.appendChild(a),s.appendChild(l),e.appendChild(s)}),n!==void 0&&ui(t)}function Gc(t,e){if(o.test.responses[e.id]!==void 0)return;o.test.responses[e.id]=t,document.querySelectorAll("#q-options-wrapper .opt-btn").forEach(r=>r.disabled=!0),document.querySelectorAll("#q-options-wrapper .opt-cross-btn").forEach(r=>r.style.display="none"),document.querySelectorAll("#q-options-wrapper .opt-row").forEach(r=>r.classList.remove("strikethrough"));const n=t===e.correctAnswerIndex;if(o.test.committed.has(e.id)||(o.test.committed.add(e.id),Hc(e.id,n)),o.test.mode==="tutor"){const r=document.querySelectorAll("#q-options-wrapper .opt-btn");n?r[t]?.classList.add("correct"):(r[t]?.classList.add("incorrect"),r[e.correctAnswerIndex]?.classList.add("correct")),ui(e)}else document.querySelectorAll("#q-options-wrapper .opt-btn")[t]?.classList.add("timed-selected");E(c("btn-skip-q")),S(c("btn-next-q")),te()}function ui(t){o.test.mode==="tutor"&&(c("q-rationale-text").textContent=_c(t.explanation),S(c("q-rationale-box")),E(c("btn-skip-q")),S(c("btn-next-q")))}function Jc(){if(o.test.questionIds.length<=1)return;if(o.test.currIdx>=o.test.questionIds.length-1){y("No further questions to skip to.","info");return}const[t]=o.test.questionIds.splice(o.test.currIdx,1);o.test.questionIds.push(t),te(),Ye()}function Qc(){if(o.test.currIdx++,o.test.currIdx>=o.test.questionIds.length){Object.keys(o.test.responses).length>=o.test.initialLen&&fe(),Me();return}te(),Ye()}async function Xc(){const t=di();if(!t)return;const e=t.id;if(o.test.flagged.has(e)){o.test.flagged.delete(e),c("btn-flag-question").classList.remove("text-orange"),te();return}o.test.flagged.add(e),c("btn-flag-question").classList.add("text-orange"),o.pendingFlagQueue.push({qid:e,question:t.question,options:t.options,correctAnswerIndex:t.correctAnswerIndex,explanation:t.explanation,subject:t.subject,block:t.block,year:t.year,lastReportedBy:o.email||"student"}),he(),te(),y("Question flagged. Sent to admin when online.","success"),Ee()}function hi(){const t=c("review-grid-matrix");t.innerHTML="";let e=0,n=0,r=0;o.test.questionIds.slice(0,o.test.initialLen).forEach((i,s)=>{const a=o.test.responses[i]!==void 0,l=o.test.flagged.has(i);a?e++:n++,l&&r++;const d=document.createElement("button");d.className=`matrix-pill ${a?"answered":"unanswered"} ${l?"flagged":""}`,d.textContent=s+1,d.onclick=()=>{o.test.currIdx=s,P("modal-review-grid"),Ye()},t.appendChild(d)}),c("review-stat-answered").textContent=e,c("review-stat-unanswered").textContent=n,c("review-stat-flagged").textContent=r,ae("modal-review-grid")}function Me(){clearInterval(o.clockTimer),o.clockTimer=null,Object.keys(o.test.responses).length>=o.test.initialLen?fe():te();let n=0,r=0;const i={};[...new Set(o.test.questionIds.slice(0,o.test.initialLen))].forEach(m=>{const v=o.questions.find(ze=>ze.id===m);if(!v)return;const T=v.subject||"General";i[T]||(i[T]={t:0,c:0}),i[T].t++;const pe=o.test.responses[m];pe===v.correctAnswerIndex?(n++,i[T].c++):pe!==void 0&&r++});const a=o.test.initialLen,l=n+r,d=l>0?Math.round(n/l*100):0,u=a-l;c("result-score-percent").textContent=d+"%",c("result-correct-count").textContent=n,c("result-incorrect-count").textContent=r,c("result-omitted-count").textContent=u,c("result-time-taken").textContent=Ae(o.test.totalTimeSpent||o.test.sessionSecs);const h=c("result-verdict");let p;l===0?p="No questions attempted":d>=75?p=`Mastery Attained — ${n}/${l} solved`:d>=50?p=`Competent — ${n}/${l} solved`:p=`Critical Revision Required — ${n}/${l} solved`,h.textContent=p,d>=75?h.className="text-green text-xs uppercase font-bold tracking-wide":d>=50?h.className="text-orange text-xs uppercase font-bold tracking-wide":h.className="text-red text-xs uppercase font-bold tracking-wide";const b=c("results-subject-breakdown");b.innerHTML="",Object.entries(i).forEach(([m,v])=>{const T=v.t?Math.round(v.c/v.t*100):0;b.innerHTML+=`
      <div class="glass-panel p-15 border-left-blue bg-dark">
        <div class="flex-between mb-10">
          <div>
            <div class="font-bold text-sm text-white">${_(m)}</div>
            <div class="text-xs text-muted">${v.c} / ${v.t} correct</div>
          </div>
          <div class="font-bold ${T>=60?"text-green":"text-orange"}">${T}%</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width: ${T}%"></div></div>
      </div>`}),k("screen-results")}function Ge(){ne();const t=new Date;let e=0;for(let s=0;s<7;s++){const a=new Date(t);a.setDate(t.getDate()-s);const l=Yr(a);e+=o.analytics.dailyLog[l]||0}c("analytics-daily-average").textContent=(e/7).toFixed(1),c("analytics-weekly-total").textContent=e;const n={};Object.entries(o.analytics.solvedMap).forEach(([s,a])=>{const l=o.questions.find(d=>String(d.id)===String(s));l?.block&&(n[l.block]||(n[l.block]={t:0,c:0}),n[l.block].t++,a===!0&&n[l.block].c++)});const r=c("analytics-blocks-breakdown");r.innerHTML="";const i=Object.keys(n);if(!i.length){r.innerHTML='<p class="text-xs text-muted text-center p-20">Solve questions in a block to generate analytics.</p>';return}i.sort(ai).forEach(s=>{const a=n[s],l=a.t?Math.round(a.c/a.t*100):0,d=document.createElement("div");d.className="glass-panel p-15 border-left-blue bg-dark",d.innerHTML=`
      <div class="flex-between mb-5">
        <div>
          <div class="font-bold text-sm text-white">${_(s)}</div>
          <div class="text-xs text-muted">${a.c} / ${a.t} correct</div>
        </div>
        <div class="font-bold ${l>=65?"text-green":l>=50?"text-orange":"text-red"}">${l}%</div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width: ${l}%"></div></div>
    `,r.appendChild(d)})}const Zc=[{cat:"Electrolytes & Renal",items:[["Sodium (Na+)","136 – 145 mEq/L"],["Potassium (K+)","3.5 – 5.0 mEq/L"],["Chloride (Cl-)","95 – 105 mEq/L"],["Bicarbonate (HCO3-)","22 – 28 mEq/L"],["BUN","7 – 20 mg/dL"],["Serum Creatinine","0.6 – 1.2 mg/dL"],["Serum Calcium","8.5 – 10.5 mg/dL"],["Fasting Plasma Glucose","70 – 99 mg/dL"]]},{cat:"CBC & Coagulation",items:[["Hemoglobin (Male)","13.5 – 17.5 g/dL"],["Hemoglobin (Female)","12.0 – 15.5 g/dL"],["Hematocrit (Male)","41% – 50%"],["Hematocrit (Female)","36% – 44%"],["MCV","80 – 100 fL"],["WBC","4,500 – 11,000 /µL"],["Platelets","150,000 – 450,000 /µL"],["Ferritin","15 – 200 ng/mL"],["PT","11.0 – 13.5 sec"],["INR","0.8 – 1.1"],["aPTT","25 – 35 sec"]]},{cat:"Arterial Blood Gases",items:[["Arterial pH","7.35 – 7.45"],["PaCO2","35 – 45 mmHg"],["PaO2","80 – 100 mmHg"],["HCO3- (Calculated)","22 – 26 mEq/L"],["Anion Gap","8 – 12 mEq/L"]]},{cat:"Hepatic & Pancreatic",items:[["ALT","7 – 56 U/L"],["AST","10 – 40 U/L"],["Total Bilirubin","0.1 – 1.2 mg/dL"],["Direct Bilirubin","0.0 – 0.3 mg/dL"],["Albumin","3.5 – 5.0 g/dL"],["ALP","44 – 147 U/L"],["Amylase","30 – 110 U/L"],["Lipase","0 – 160 U/L"]]},{cat:"Lipids, CSF & Urine",items:[["Total Cholesterol","< 200 mg/dL"],["LDL","< 100 mg/dL"],["HDL","> 40 (M), > 50 (F) mg/dL"],["Triglycerides","< 150 mg/dL"],["CSF Opening Pressure","70 – 180 mm H2O"],["CSF Protein","15 – 45 mg/dL"],["CSF Glucose","45 – 80 mg/dL"],["Urine Specific Gravity","1.005 – 1.030"]]}],el={sodium:"na natrium",potassium:"k kalium",chloride:"cl",bicarbonate:"hco3 bicarb",bun:"urea nitrogen kidney",creatinine:"cr scr kidney renal",calcium:"ca",glucose:"sugar glu fbs rbs",hemoglobin:"hb hgb",hematocrit:"hct pcv packed cell volume",mcv:"mean corpuscular volume",wbc:"white blood cell leucocyte leukocyte",platelets:"plt thrombocyte",ferritin:"iron stores",pt:"prothrombin time",inr:"international normalized ratio",aptt:"activated partial thromboplastin","arterial ph":"ph blood gas abg",paco2:"carbon dioxide abg blood gas",pao2:"oxygen abg blood gas","anion gap":"ag",alt:"sgpt alanine transaminase liver",ast:"sgot aspartate transaminase liver","total bilirubin":"tbili bili","direct bilirubin":"dbili conjugated bili",albumin:"alb",alp:"alkaline phosphatase liver",amylase:"pancreas",lipase:"pancreas","total cholesterol":"tc chol lipid",ldl:"bad cholesterol lipid",hdl:"good cholesterol lipid",triglycerides:"tg lipid",csf:"cerebrospinal spinal fluid",urine:"urinalysis ua"};function tl(t,e){const n=String(t).toLowerCase(),r=String(e).toLowerCase(),i=[];for(const[s,a]of Object.entries(el))n.includes(s)&&i.push(a);return`${n} ${r} ${i.join(" ")}`}function jt(t=""){const e=c("labs-list-container");if(!e)return;e.innerHTML="";const n=t.trim().toLowerCase();Zc.forEach(({cat:r,items:i})=>{const s=n===""||r.toLowerCase().includes(n),a=i.filter(([d,u])=>n===""||s?!0:tl(d,u).includes(n));if(!a.length)return;const l=document.createElement("div");l.innerHTML=`<div class="lab-category-header">${_(r)}</div>`,a.forEach(([d,u])=>{l.innerHTML+=`<div class="lab-item-row"><span class="lab-item-name">${_(d)}</span><span class="lab-item-val">${_(u)}</span></div>`}),e.appendChild(l)}),e.children.length||(e.innerHTML='<p class="text-xs text-muted text-center py-20">No matching lab parameters.</p>')}function nl(){c("tab-login-btn").onclick=()=>{c("tab-login-btn").classList.add("active"),c("tab-register-btn").classList.remove("active"),S(c("auth-login-fields")),E(c("auth-register-fields")),c("login-feedback").textContent=""},c("tab-register-btn").onclick=()=>{c("tab-register-btn").classList.add("active"),c("tab-login-btn").classList.remove("active"),S(c("auth-register-fields")),E(c("auth-login-fields")),c("login-feedback").textContent=""},c("btn-login").onclick=Kn,c("input-password").addEventListener("keydown",t=>{t.key==="Enter"&&Kn()}),c("input-email").addEventListener("keydown",t=>{t.key==="Enter"&&c("input-password")?.focus()}),c("btn-register-submit").onclick=Gn,c("reg-password").addEventListener("keydown",t=>{t.key==="Enter"&&Gn()}),c("btn-forgot-password").onclick=async()=>{const t=c("input-email").value.trim();if(!t)return y("Enter your email first.","warning");try{await Jo(A,t),y(`Password reset sent to ${t}`,"success")}catch(e){y(e.message.replace("Firebase: ",""),"error")}},c("btn-pending-logout").onclick=()=>oe(A)}async function Kn(){const t=c("input-email").value.trim(),e=c("input-password").value,n=c("login-feedback");if(!t||!e){n.textContent="Provide email and password.";return}n.textContent="Signing in...",c("btn-login").disabled=!0;try{await Xo(A,t,e)}catch(r){n.textContent=r.message.replace("Firebase: ",""),c("btn-login").disabled=!1}}async function Gn(){const t=c("reg-name").value.trim(),e=c("reg-email").value.trim(),n=c("reg-year").value,r=c("reg-password").value,i=c("login-feedback");if(!t||!e||!r||!n){i.textContent="Fill all fields.";return}if(r.length<6){i.textContent="Password must be at least 6 characters.";return}i.textContent="Creating account...",c("btn-register-submit").disabled=!0,o.isRegistering=!0;try{const a=(await Qo(A,e,r)).user.uid,l=Date.now(),d={};d[`users/${a}/profile`]={name:t,email:e,enrolledYear:n,registeredAt:l,lastSeen:l},d[`pendingApprovals/${a}`]={uid:a,name:t,email:e,enrolledYear:n,registeredAt:l},await sn(d),await qt(300),c("btn-register-submit").disabled=!1,i.textContent="",o.isRegistering=!1,S(c("auth-pending-card")),E(c("auth-form-card")),k("screen-login"),await fi()}catch(s){o.isRegistering=!1,c("btn-register-submit").disabled=!1,s.code==="auth/email-already-in-use"?i.textContent="Email already registered. Try Sign In.":i.textContent=s.message.replace("Firebase: ","")}}async function X(){try{U()}catch{}if(ii(),cn(),clearInterval(o.analyticsSyncTimer),clearInterval(o.clockTimer),navigator.onLine)try{await Ne(),await Ee()}catch{}if(o.uid&&o.deviceId)try{await Dc(`users/${o.uid}/devices/${o.deviceId}`)}catch{}fe(),o.pendingAnswerQueue.length===0&&o.pendingFlagQueue.length===0?Gr():he(),o.uid=null,o.subscription=null,o.verifiedThisSession=!1,o.isPendingUser=!1,await oe(A)}async function fi(){const t=c("ambassador-contact-list");if(!t)return;const e=await I("ambassadors");if(A.currentUser){if(!e){t.innerHTML='<p class="text-xs text-muted text-center py-10">No ambassadors listed.</p>';return}t.innerHTML="",Object.values(e).forEach(n=>{const r=(n.whatsapp||"").replace(/[^0-9]/g,"");t.innerHTML+=`
      <div class="glass-panel p-10 bg-dark border-left-blue flex-between">
        <div>
          <div class="text-white font-bold text-xs">${_(n.name||"")}</div>
          <div class="text-xs text-muted">${_(n.college||"")}</div>
        </div>
        <a href="https://wa.me/${r}" target="_blank" rel="noopener" class="btn btn-outline text-green hover-bg-green text-xs p-5-10 font-bold no-underline">WhatsApp 💬</a>
      </div>`})}}function gt(){const t=Rc();if(!t)return{ok:!1,daysSince:9999};const e=(Date.now()-t)/864e5;return{ok:e<R.OFFLINE_GRACE_DAYS,daysSince:e}}async function dn(t){fe(),Gr(),o.analytics={attempted:0,correct:0,incorrect:0,solvedMap:{},dailyLog:{},examDate:o.analytics.examDate||""},De(),V(),le();try{await dt(`users/${o.uid}/analytics`,o.analytics)}catch{}ln(t),rl(t)}function rl(t){const e=[{text:"The secret of getting ahead is getting started.",author:"Mark Twain"},{text:"Success is the sum of small efforts repeated day in and day out.",author:"Robert Collier"},{text:"The expert in anything was once a beginner.",author:"Helen Hayes"},{text:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{text:"It always seems impossible until it's done.",author:"Nelson Mandela"},{text:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{text:"The future belongs to those who believe in the beauty of their dreams.",author:"Eleanor Roosevelt"}],n=e[Math.floor(Math.random()*e.length)];c("congrats-new-year").textContent=t,c("congrats-quote").textContent=`"${n.text}"`,c("congrats-quote-author").textContent=`— ${n.author}`,ae("modal-congratulations")}async function il(t){if(o.isRegistering)for(let s=0;s<50&&o.isRegistering;s++)await qt(100);o.uid=t.uid,o.email=t.email,o.name=t.displayName||t.email.split("@")[0],o.deviceId=await xc(),Lc(),qc();const e=Uc(t.uid),n=e?.enrolledYear||null;if(e&&$c(e),S(c("screen-splash")),c("splash-message").textContent="Verifying subscription...",!await Se(!0)){const s=gt(),a=e&&Date.now()-(e.cachedAt||0)<R.OFFLINE_GRACE_DAYS*864e5;if(e?.subscription?.expiresAt&&Date.now()>e.subscription.expiresAt){await w("Your subscription has expired. Please connect to the internet and contact admin (03314170070).",{title:"Subscription Ended",okText:"OK",cancelText:""}),await oe(A);return}if(!a&&!s.ok){await w("Please connect to the internet once to verify your account.",{title:"Internet Required",okText:"OK",cancelText:""}),await oe(A);return}const l=await Zr(o.enrolledYear);l?.questions&&(o.questions=l.questions),c("nav-user-email").textContent=o.email,c("dash-user-name").textContent=o.name,le(),V(),ne(),Ie(),k("screen-dashboard"),await L(),Rt(),xt(),Lt();return}c("splash-message").textContent="Verifying with server...";let i=null;for(let s=0;s<2;s++){try{i=await ri()}catch{i={ok:!1,reason:"network"}}if(i.ok)break;if((i.reason==="no-profile"||i.reason==="network")&&s<1){await qt(600);continue}break}if(!i||!i.ok){switch(i?.reason||"network"){case"offline":case"network":await w("Please check your internet connection and try again.",{title:"Connection Issue",okText:"OK",cancelText:""}),await oe(A);return;case"banned":await w("Your account has been suspended by an administrator.",{title:"Access Revoked",okText:"OK",cancelText:""});break;case"deleted":await w("This account has been removed. Contact admin.",{title:"Account Removed",okText:"OK",cancelText:""});break;case"pending":o.isPendingUser=!0,S(c("auth-pending-card")),E(c("auth-form-card")),k("screen-login"),await fi(),clearInterval(o.pendingPollTimer),o.pendingPollTimer=setInterval(async()=>{if(!o.uid)return;const[a,l]=await Promise.all([I(`users/${o.uid}/subscription`),I(`deletedAccounts/${o.uid}`)]);if(l&&l.deletedAt){clearInterval(o.pendingPollTimer),o.pendingPollTimer=null,await w("Your registration was rejected. Contact admin if this is a mistake.",{title:"Registration Rejected",okText:"OK",cancelText:""}),await oe(A);return}a&&a.expiresAt&&Date.now()<a.expiresAt&&(clearInterval(o.pendingPollTimer),o.pendingPollTimer=null,y("Account activated! Reloading...","success"),setTimeout(()=>location.reload(),1e3))},5e3);return;case"no-profile":await w("Profile setup incomplete. Contact admin.",{title:"Setup Incomplete",okText:"OK",cancelText:""});break;case"expired":await w("Your subscription has expired. Contact admin (03314170070) to renew.",{title:"Subscription Ended",okText:"OK",cancelText:""});break;case"device-limit":await w(`Device limit reached (${i.limit}). Logout from another device or ask admin.`,{title:"Too Many Devices",okText:"OK",cancelText:""});break;default:await w("Verification failed. Please try again.",{title:"Error",okText:"OK",cancelText:""})}await oe(A);return}if(Qr(),o.verifiedThisSession=!0,n&&o.enrolledYear!==n){const s=["1st Year","2nd Year","3rd Year","4th Year","Final Year"];if(s.indexOf(o.enrolledYear)>s.indexOf(n)){c("nav-user-email").textContent=o.email,c("dash-user-name").textContent=o.name,le(),k("screen-dashboard"),await dn(o.enrolledYear),Rt(),xt(),Lt();return}}c("nav-user-email").textContent=o.email,c("dash-user-name").textContent=o.name,le(),V(),ne(),Ie(),k("screen-dashboard"),ln(o.enrolledYear),ni(),si(),oi(),Rt(),xt(),Lt()}na(A,async t=>{t?await il(t):(ii(),cn(),clearInterval(o.analyticsSyncTimer),clearInterval(o.pendingPollTimer),o.pendingPollTimer=null,o.uid=null,o.subscription=null,o.verifiedThisSession=!1,o.isPendingUser=!1,Ac(),k("screen-login"))});async function Jn(){const t=an();if(t&&t.questionIds?.length){const e=Object.keys(t.responses||{}).length;if(e<t.initialLen){if(!await w(`You have an unfinished test (${e}/${t.initialLen} answered). Starting a new one will discard it.`,{title:"Unfinished Test",danger:!0,okText:"Start New",cancelText:"Keep Old"}))return;fe()}}Yc(),k("screen-create-test")}function sl(){c("btn-open-menu").onclick=Wc,c("drawer-backdrop").onclick=U,c("menu-dash-btn").onclick=()=>{U(),k("screen-dashboard")},c("menu-create-btn").onclick=()=>{U(),Jn()},c("menu-analytics-btn").onclick=()=>{U(),Ge(),k("screen-analytics")},c("menu-theme-btn").onclick=()=>{Bc(),U()},c("menu-about-btn").onclick=()=>{U(),ae("modal-about")},c("sidebar-logout-btn").onclick=X,c("menu-promote-btn").onclick=()=>{U(),ae("modal-promotion")},c("btn-close-about").onclick=()=>P("modal-about"),c("btn-close-promotion").onclick=()=>P("modal-promotion"),c("btn-close-labs").onclick=()=>P("modal-lab-values"),c("btn-close-announcements").onclick=()=>P("modal-announcements"),c("card-action-create").onclick=()=>{Jn()};const t=c("card-action-analytics");t&&(t.onclick=()=>{Ge(),k("screen-analytics")}),c("btn-set-exam-dash").onclick=()=>{Ge(),k("screen-analytics")},c("btn-manual-refresh").onclick=Vc,c("btn-resume-test").onclick=ol,c("btn-discard-resume-test").onclick=async()=>{await w("Discard this unfinished session?",{danger:!0,okText:"Discard"})&&fe()},c("btn-back-from-create").onclick=()=>k("screen-dashboard"),c("btn-subj-all").onclick=()=>{document.querySelectorAll(".subj-chk").forEach(n=>n.checked=!0),ut()},c("btn-subj-none").onclick=()=>{document.querySelectorAll(".subj-chk").forEach(n=>n.checked=!1),ut()},c("btn-top-all").onclick=()=>{document.querySelectorAll(".top-chk").forEach(n=>n.checked=!0),ht()},c("btn-top-none").onclick=()=>{document.querySelectorAll(".top-chk").forEach(n=>n.checked=!1),ht()},c("q-count-slider").addEventListener("input",n=>{const r=parseInt(n.target.value,10)||0;c("slider-value-display").textContent=`${r} Questions`;const i=Math.min(r,o.availableUnsolved);c("pool-composition-info").textContent=`${i} Unsolved · ${r-i} Review`}),c("mode-btn-tutor").onclick=()=>{o.test.mode="tutor",c("mode-btn-tutor").classList.add("active"),c("mode-btn-timed").classList.remove("active"),E(c("timed-input-box"))},c("mode-btn-timed").onclick=()=>{o.test.mode="timed",c("mode-btn-timed").classList.add("active"),c("mode-btn-tutor").classList.remove("active"),S(c("timed-input-box"))},c("btn-start-quiz").onclick=Kc,c("btn-skip-q").onclick=Jc,c("btn-next-q").onclick=Qc,c("btn-flag-question").onclick=Xc,c("btn-abandon-test").onclick=hi,c("btn-review-resume").onclick=()=>P("modal-review-grid"),c("btn-review-confirm-end").onclick=()=>{P("modal-review-grid"),Me()},c("btn-open-labs").onclick=()=>{c("input-labs-search").value="",jt(""),ae("modal-lab-values")},c("input-labs-search").addEventListener("input",n=>jt(n.target.value)),c("btn-announcements-bell").onclick=()=>{jc(),ae("modal-announcements")},c("btn-finish-review").onclick=()=>{k("screen-dashboard"),V()},c("btn-back-from-analytics").onclick=()=>k("screen-dashboard"),c("btn-save-exam-date").onclick=()=>{const n=c("input-exam-date").value;if(!n)return y("Select a target date.","warning");o.analytics.examDate=n,De(),ne(),Ht(`users/${o.uid}/analytics`,{examDate:n}).catch(()=>{}),y("Target saved.","success")},c("btn-reset-user-progress").onclick=async()=>{if(await w("Reset all progress? This cannot be undone.",{danger:!0,okText:"Reset Everything"})){o.analytics={attempted:0,correct:0,incorrect:0,solvedMap:{},dailyLog:{},examDate:""},De();try{await dt(`users/${o.uid}/analytics`,o.analytics)}catch{}V(),ne(),Ge(),y("Progress reset.","success")}},c("btn-submit-promotion").onclick=async()=>{const n=c("select-promote-year").value;if(n===o.enrolledYear)return y("Already in that year.","info");P("modal-promotion");try{await dt(`promotionRequests/${o.uid}`,{uid:o.uid,name:o.name,email:o.email,currentYear:o.enrolledYear,requestedYear:n,requestedAt:Date.now()}),y("Promotion request submitted.","success")}catch(r){y("Failed: "+r.message,"error")}};const e=c("btn-congrats-continue");e&&(e.onclick=()=>{P("modal-congratulations"),location.reload()}),window.addEventListener("popstate",()=>{Qn(),history.pushState(null,"",location.href)}),history.pushState(null,"",location.href),window.Capacitor?.Plugins?.App&&window.Capacitor.Plugins.App.addListener("backButton",()=>Qn()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(te(),Ne(),Ee()):document.visibilityState==="visible"&&o.uid&&(L(),setTimeout(()=>tt(),500))}),window.addEventListener("focus",()=>{o.uid&&(L(),tt())}),window.addEventListener("online",()=>{L(),Ne(),Ee(),o.uid&&tt()}),window.addEventListener("offline",()=>{L()})}function Qn(){const t=["modal-lab-values","modal-review-grid","modal-announcements","modal-app-update","modal-about","modal-promotion","modal-congratulations"];for(const e of t)if(!c(e)?.classList.contains("hidden")){P(e);return}if(c("sidebar-drawer")?.classList.contains("open")){U();return}if(o.activeScreen==="screen-analytics"||o.activeScreen==="screen-results"||o.activeScreen==="screen-create-test"){k("screen-dashboard");return}if(o.activeScreen==="screen-test-engine"){hi();return}o.activeScreen==="screen-dashboard"&&window.Capacitor?.Plugins?.App?.exitApp&&window.Capacitor.Plugins.App.exitApp()}function ol(){const t=an();if(!t)return;o.test.mode=t.mode||"tutor",o.test.block=t.block||"",o.test.questionIds=t.questionIds||[],o.test.responses=t.responses||{},o.test.committed=new Set(t.committed||[]),o.test.flagged=new Set(t.flagged||[]),o.test.currIdx=t.currIdx||0,o.test.sessionSecs=t.sessionSecs||0,o.test.totalTimeSpent=t.totalTimeSpent||0,o.test.startedAt=t.startedAt||Date.now(),o.test.endsAt=t.endsAt||0,o.test.initialLen=t.initialLen||o.test.questionIds.length,o.test.mode==="timed"&&o.test.endsAt&&Date.now()>=o.test.endsAt&&(o.test.mode="tutor",o.test.sessionSecs=0,o.test.endsAt=0,y("Time expired. Resuming in tutor mode.","warning"));const e=o.test.questionIds.findIndex(n=>o.test.responses[n]===void 0);e!==-1&&(o.test.currIdx=e),c("test-header-mode").textContent=o.test.mode.toUpperCase()+" MODE",k("screen-test-engine"),li(),Ye()}window.addEventListener("DOMContentLoaded",()=>{nl(),sl(),jt("")});export{vi as _};
