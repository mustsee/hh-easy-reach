(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Re={},js=[],Ct=()=>{},A0=()=>!1,wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),su=t=>t.startsWith("onUpdate:"),Ue=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R0=Object.prototype.hasOwnProperty,de=(t,e)=>R0.call(t,e),W=Array.isArray,qs=t=>Ai(t)==="[object Map]",Ea=t=>Ai(t)==="[object Set]",Wh=t=>Ai(t)==="[object Date]",Z=t=>typeof t=="function",qe=t=>typeof t=="string",tn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",iu=t=>(Ce(t)||Z(t))&&Z(t.then)&&Z(t.catch),bp=Object.prototype.toString,Ai=t=>bp.call(t),k0=t=>Ai(t).slice(8,-1),Ap=t=>Ai(t)==="[object Object]",ou=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N0=/-(\w)/g,nn=Ia(t=>t.replace(N0,(e,n)=>n?n.toUpperCase():"")),O0=/\B([A-Z])/g,_r=Ia(t=>t.replace(O0,"-$1").toLowerCase()),Ta=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),vc=Ia(t=>t?`on${Ta(t)}`:""),Qn=(t,e)=>!Object.is(t,e),Eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},kp=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Qh;const Np=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?L0(s):au(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(qe(t)||Ce(t))return t}const P0=/;(?![^(]*\))/g,D0=/:([^]+)/,x0=/\/\*[^]*?\*\//g;function L0(t){const e={};return t.replace(x0,"").split(P0).forEach(n=>{if(n){const s=n.split(D0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ei(t){let e="";if(qe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ei(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const M0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F0=nu(M0);function Op(t){return!!t||t===""}function $0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Sa(t[s],e[s]);return n}function Sa(t,e){if(t===e)return!0;let n=Wh(t),s=Wh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=tn(t),s=tn(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?$0(t,e):!1;if(n=Ce(t),s=Ce(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Sa(t[o],e[o]))return!1}}return String(t)===String(e)}function U0(t,e){return t.findIndex(n=>Sa(n,e))}const Pp=t=>!!(t&&t.__v_isRef===!0),B0=t=>qe(t)?t:t==null?"":W(t)||Ce(t)&&(t.toString===bp||!Z(t.toString))?Pp(t)?B0(t.value):JSON.stringify(t,Dp,2):String(t),Dp=(t,e)=>Pp(e)?Dp(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[_c(s,i)+" =>"]=r,n),{})}:Ea(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_c(n))}:tn(e)?_c(e):Ce(e)&&!W(e)&&!Ap(e)?String(e):e,_c=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class xp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Lp(t){return new xp(t)}function V0(t,e=St){e&&e.active&&e.effects.push(t)}function Mp(){return St}function j0(t){St&&St.cleanups.push(t)}let ms;class cu{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,V0(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Zn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(q0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),es()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jn,n=ms;try{return jn=!0,ms=this,this._runnings++,Yh(this),this.fn()}finally{Jh(this),this._runnings--,ms=n,jn=e}}stop(){this.active&&(Yh(this),Jh(this),this.onStop&&this.onStop(),this.active=!1)}}function q0(t){return t.value}function Yh(t){t._trackId++,t._depsLength=0}function Jh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Fp(t.deps[e],t);t.deps.length=t._depsLength}}function Fp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let jn=!0,Jc=0;const $p=[];function Zn(){$p.push(jn),jn=!1}function es(){const t=$p.pop();jn=t===void 0?!0:t}function lu(){Jc++}function uu(){for(Jc--;!Jc&&Xc.length;)Xc.shift()()}function Up(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Fp(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Xc=[];function Bp(t,e,n){lu();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Xc.push(s.scheduler)))}uu()}const Vp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Bo=new WeakMap,ys=Symbol(""),Zc=Symbol("");function Et(t,e,n){if(jn&&ms){let s=Bo.get(t);s||Bo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Vp(()=>s.delete(n))),Up(ms,r)}}function mn(t,e,n,s,r,i){const o=Bo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!tn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?ou(n)&&a.push(o.get("length")):(a.push(o.get(ys)),qs(t)&&a.push(o.get(Zc)));break;case"delete":W(t)||(a.push(o.get(ys)),qs(t)&&a.push(o.get(Zc)));break;case"set":qs(t)&&a.push(o.get(ys));break}lu();for(const c of a)c&&Bp(c,4);uu()}function H0(t,e){const n=Bo.get(t);return n&&n.get(e)}const z0=nu("__proto__,__v_isRef,__isVue"),jp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn)),Xh=K0();function K0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)Et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zn(),lu();const s=te(this)[e].apply(this,n);return uu(),es(),s}}),t}function G0(t){tn(t)||(t=String(t));const e=te(this);return Et(e,"has",t),e.hasOwnProperty(t)}class qp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?o_:Gp:i?Kp:zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!r){if(o&&de(Xh,n))return Reflect.get(Xh,n,s);if(n==="hasOwnProperty")return G0}const a=Reflect.get(e,n,s);return(tn(n)?jp.has(n):z0(n))||(r||Et(e,"get",n),i)?a:Ke(a)?o&&ou(n)?a:a.value:Ce(a)?r?Qp(a):Vt(a):a}}class Hp extends qp{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=ti(i);if(!Vo(s)&&!ti(s)&&(i=te(i),s=te(s)),!W(e)&&Ke(i)&&!Ke(s))return c?!1:(i.value=s,!0)}const o=W(e)&&ou(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,s,r);return e===te(r)&&(o?Qn(s,i)&&mn(e,"set",n,s):mn(e,"add",n,s)),a}deleteProperty(e,n){const s=de(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&mn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!tn(n)||!jp.has(n))&&Et(e,"has",n),s}ownKeys(e){return Et(e,"iterate",W(e)?"length":ys),Reflect.ownKeys(e)}}class W0 extends qp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Q0=new Hp,Y0=new W0,J0=new Hp(!0);const hu=t=>t,Ca=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(Qn(e,i)&&Et(r,"get",e),Et(r,"get",i));const{has:o}=Ca(r),a=s?hu:n?gu:ni;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(Qn(t,r)&&Et(s,"has",t),Et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ro(t,e=!1){return t=t.__v_raw,!e&&Et(te(t),"iterate",ys),Reflect.get(t,"size",t)}function Zh(t){t=te(t);const e=te(this);return Ca(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function ef(t,e){e=te(e);const n=te(this),{has:s,get:r}=Ca(n);let i=s.call(n,t);i||(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Qn(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function tf(t){const e=te(this),{has:n,get:s}=Ca(e);let r=n.call(e,t);r||(t=te(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mn(e,"delete",t,void 0),i}function nf(){const t=te(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function io(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?hu:t?gu:ni;return!t&&Et(a,"iterate",ys),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function oo(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=qs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?hu:e?gu:ni;return!e&&Et(i,"iterate",c?Zc:ys),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function X0(){const t={get(i){return no(this,i)},get size(){return ro(this)},has:so,add:Zh,set:ef,delete:tf,clear:nf,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return ro(this)},has:so,add:Zh,set:ef,delete:tf,clear:nf,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return ro(this,!0)},has(i){return so.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!1)},s={get(i){return no(this,i,!0,!0)},get size(){return ro(this,!0)},has(i){return so.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),s[i]=oo(i,!0,!0)}),[t,n,e,s]}const[Z0,e_,t_,n_]=X0();function fu(t,e){const n=e?t?n_:t_:t?e_:Z0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(de(n,r)&&r in s?n:s,r,i)}const s_={get:fu(!1,!1)},r_={get:fu(!1,!0)},i_={get:fu(!0,!1)};const zp=new WeakMap,Kp=new WeakMap,Gp=new WeakMap,o_=new WeakMap;function a_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:a_(k0(t))}function Vt(t){return ti(t)?t:du(t,!1,Q0,s_,zp)}function Wp(t){return du(t,!1,J0,r_,Kp)}function Qp(t){return du(t,!0,Y0,i_,Gp)}function du(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=c_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function vs(t){return ti(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function ti(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function Yp(t){return t?!!t.__v_raw:!1}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function pu(t){return Object.isExtensible(t)&&Rp(t,"__v_skip",!0),t}const ni=t=>Ce(t)?Vt(t):t,gu=t=>Ce(t)?Qp(t):t;class Jp{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cu(()=>e(this._value),()=>Io(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return(!e._cacheable||e.effect.dirty)&&Qn(e._value,e._value=e.effect.run())&&Io(e,4),Xp(e),e.effect._dirtyLevel>=2&&Io(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function l_(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new Jp(s,r,i||!r,n)}function Xp(t){var e;jn&&ms&&(t=te(t),Up(ms,(e=t.dep)!=null?e:t.dep=Vp(()=>t.dep=void 0,t instanceof Jp?t:void 0)))}function Io(t,e=4,n,s){t=te(t);const r=t.dep;r&&Bp(r,e)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function fn(t){return Zp(t,!1)}function u_(t){return Zp(t,!0)}function Zp(t,e){return Ke(t)?t:new h_(t,e)}class h_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:ni(e)}get value(){return Xp(this),this._value}set value(e){const n=this.__v_isShallow||Vo(e)||ti(e);e=n?e:te(e),Qn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ni(e),Io(this,4))}}function Yt(t){return Ke(t)?t.value:t}const f_={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function eg(t){return vs(t)?t:new Proxy(t,f_)}function d_(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=g_(t,n);return e}class p_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return H0(te(this._object),this._key)}}function g_(t,e,n){const s=t[e];return Ke(s)?s:new p_(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ri(r,e,n)}}function Pt(t,e,n,s){if(Z(t)){const r=qn(t,e,n,s);return r&&iu(r)&&r.catch(i=>{Ri(i,e,n)}),r}if(W(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Pt(t[i],e,n,s));return r}}function Ri(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Zn(),qn(c,null,10,[t,o,a]),es();return}}m_(t,n,r,s)}function m_(t,e,n,s=!0){console.error(t)}let si=!1,el=!1;const at=[];let zt=0;const Hs=[];let Dn=null,ls=0;const tg=Promise.resolve();let mu=null;function wr(t){const e=mu||tg;return t?e.then(this?t.bind(this):t):e}function y_(t){let e=zt+1,n=at.length;for(;e<n;){const s=e+n>>>1,r=at[s],i=ri(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function yu(t){(!at.length||!at.includes(t,si&&t.allowRecurse?zt+1:zt))&&(t.id==null?at.push(t):at.splice(y_(t.id),0,t),ng())}function ng(){!si&&!el&&(el=!0,mu=tg.then(rg))}function v_(t){const e=at.indexOf(t);e>zt&&at.splice(e,1)}function tl(t){W(t)?Hs.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?ls+1:ls))&&Hs.push(t),ng()}function sf(t,e,n=si?zt+1:0){for(;n<at.length;n++){const s=at[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;at.splice(n,1),n--,s()}}}function sg(t){if(Hs.length){const e=[...new Set(Hs)].sort((n,s)=>ri(n)-ri(s));if(Hs.length=0,Dn){Dn.push(...e);return}for(Dn=e,ls=0;ls<Dn.length;ls++){const n=Dn[ls];n.active!==!1&&n()}Dn=null,ls=0}}const ri=t=>t.id==null?1/0:t.id,__=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rg(t){el=!1,si=!0,at.sort(__);const e=Ct;try{for(zt=0;zt<at.length;zt++){const n=at[zt];n&&n.active!==!1&&qn(n,null,14)}}finally{zt=0,at.length=0,sg(),si=!1,mu=null,(at.length||Hs.length)&&rg()}}function w_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Re;f&&(r=n.map(p=>qe(p)?p.trim():p)),h&&(r=n.map(Uo))}let a,c=s[a=vc(e)]||s[a=vc(nn(e))];!c&&i&&(c=s[a=vc(_r(e))]),c&&Pt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,r)}}function ig(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=ig(l,e,!0);u&&(a=!0,Ue(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ue(o,i),Ce(t)&&s.set(t,o),o)}function ba(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,_r(e))||de(t,e))}let He=null,og=null;function jo(t){const e=He;return He=t,og=t&&t.type.__scopeId||null,e}function nl(t,e=He,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vf(-1);const i=jo(e);let o;try{o=t(...r)}finally{jo(i),s._d&&vf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:p,ctx:m,inheritAttrs:v}=t,T=jo(t);let D,S;try{if(n.shapeFlag&4){const j=r||s,k=j;D=xt(l.call(k,j,u,h,p,f,m)),S=a}else{const j=e;D=xt(j.length>1?j(h,{attrs:a,slots:o,emit:c}):j(h,null)),S=e.props?a:I_(a)}}catch(j){Hr.length=0,Ri(j,t,1),D=ae(ct)}let b=D;if(S&&v!==!1){const j=Object.keys(S),{shapeFlag:k}=b;j.length&&k&7&&(i&&j.some(su)&&(S=T_(S,i)),b=yn(b,S,!1,!0))}return n.dirs&&(b=yn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),D=b,jo(T),D}function E_(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(Es(r)){if(r.type!==ct||r.children==="v-if"){if(n)return;n=r}}else return}return n}const I_=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},T_=(t,e)=>{const n={};for(const s in t)(!su(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function S_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?rf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ba(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?rf(s,o,l):!0:!!o;return!1}function rf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function vu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ag="components";function C_(t,e){return A_(ag,t,!0,e)||t}const b_=Symbol.for("v-ndc");function A_(t,e,n=!0,s=!1){const r=He||Qe;if(r){const i=r.type;if(t===ag){const a=S1(i,!1);if(a&&(a===e||a===nn(e)||a===Ta(nn(e))))return i}const o=of(r[t]||i[t],e)||of(r.appContext[t],e);return!o&&s?i:o}}function of(t,e){return t&&(t[e]||t[nn(e)]||t[Ta(nn(e))])}const R_=t=>t.__isSuspense;let sl=0;const k_={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){if(t==null)N_(e,n,s,r,i,o,a,c,l);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}O_(t,e,n,s,r,o,a,c,l)}},hydrate:P_,normalize:D_},rO=k_;function ii(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function N_(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=cg(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(ii(t,"onPending"),ii(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),zs(f,t.ssFallback)):f.resolve(!1,!0)}function O_(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:m,pendingBranch:v,isInFallback:T,isHydrating:D}=h;if(v)h.pendingBranch=f,Kt(f,v)?(c(v,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():T&&(D||(c(m,p,n,s,r,null,i,o,a),zs(h,p)))):(h.pendingId=sl++,D?(h.isHydrating=!1,h.activeBranch=v):l(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,p,n,s,r,null,i,o,a),zs(h,p))):m&&Kt(f,m)?(c(m,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Kt(f,m))c(m,f,n,s,r,h,i,o,a),zs(h,f);else if(ii(e,"onPending"),h.pendingBranch=f,f.shapeFlag&512?h.pendingId=f.component.suspenseId:h.pendingId=sl++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:S,pendingId:b}=h;S>0?setTimeout(()=>{h.pendingId===b&&h.fallback(p)},S):S===0&&h.fallback(p)}}function cg(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:m,o:{parentNode:v,remove:T}}=l;let D;const S=L_(t);S&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const b=t.props?kp(t.props.timeout):void 0,j=i,k={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:sl++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,J=!1){const{vnode:K,activeBranch:N,pendingBranch:H,pendingId:ie,effects:L,parentComponent:ce,container:be}=k;let Me=!1;k.isHydrating?k.isHydrating=!1:A||(Me=N&&H.transition&&H.transition.mode==="out-in",Me&&(N.transition.afterLeave=()=>{ie===k.pendingId&&(f(H,be,i===j?m(N):i,0),tl(L))}),N&&(v(N.el)!==k.hiddenContainer&&(i=m(N)),p(N,ce,k,!0)),Me||f(H,be,i,0)),zs(k,H),k.pendingBranch=null,k.isInFallback=!1;let le=k.parent,ge=!1;for(;le;){if(le.pendingBranch){le.effects.push(...L),ge=!0;break}le=le.parent}!ge&&!Me&&tl(L),k.effects=[],S&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!J&&e.resolve()),ii(K,"onResolve")},fallback(A){if(!k.pendingBranch)return;const{vnode:J,activeBranch:K,parentComponent:N,container:H,namespace:ie}=k;ii(J,"onFallback");const L=m(K),ce=()=>{k.isInFallback&&(h(null,A,H,L,N,null,ie,a,c),zs(k,A))},be=A.transition&&A.transition.mode==="out-in";be&&(K.transition.afterLeave=ce),k.isInFallback=!0,p(K,N,null,!0),be||ce()},move(A,J,K){k.activeBranch&&f(k.activeBranch,A,J,K),k.container=A},next(){return k.activeBranch&&m(k.activeBranch)},registerDep(A,J,K){const N=!!k.pendingBranch;N&&k.deps++;const H=A.vnode.el;A.asyncDep.catch(ie=>{Ri(ie,A,0)}).then(ie=>{if(A.isUnmounted||k.isUnmounted||k.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:L}=A;fl(A,ie,!1),H&&(L.el=H);const ce=!H&&A.subTree.el;J(A,L,v(H||A.subTree.el),H?null:m(A.subTree),k,o,K),ce&&T(ce),vu(A,L.el),N&&--k.deps===0&&k.resolve()})},unmount(A,J){k.isUnmounted=!0,k.activeBranch&&p(k.activeBranch,n,A,J),k.pendingBranch&&p(k.pendingBranch,n,A,J)}};return k}function P_(t,e,n,s,r,i,o,a,c){const l=e.suspense=cg(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function D_(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=af(s?n.default:n),t.ssFallback=s?af(n.fallback):ae(ct)}function af(t){let e;if(Z(t)){const n=sr&&t._c;n&&(t._d=!1,Pe()),t=t(),n&&(t._d=!0,e=Ot,Ng())}return W(t)&&(t=E_(t)),t=xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function x_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):tl(t)}function zs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,vu(s,r))}function L_(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function Aa(t,e,n=Qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Zn();const a=Is(n),c=Pt(e,n,t,o);return a(),es(),c});return s?r.unshift(i):r.push(i),i}}const Tn=t=>(e,n=Qe)=>{(!Pa||t==="sp")&&Aa(t,(...s)=>e(...s),n)},M_=Tn("bm"),Ra=Tn("m"),F_=Tn("bu"),lg=Tn("u"),ug=Tn("bum"),ka=Tn("um"),$_=Tn("sp"),U_=Tn("rtg"),B_=Tn("rtc");function V_(t,e=Qe){Aa("ec",t,e)}function iO(t,e){if(He===null)return t;const n=Da(He),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Re]=e[r];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Fn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function is(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Zn(),Pt(c,n,8,[t.el,a,t,e]),es())}}function oO(t,e,n,s){let r;const i=n&&n[s];if(W(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}/*! #__NO_SIDE_EFFECTS__ */function Er(t,e){return Z(t)?(()=>Ue({name:t.name},e,{setup:t}))():t}const Vr=t=>!!t.type.__asyncLoader;function aO(t,e,n={},s,r){if(He.isCE||He.parent&&Vr(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Pe();const o=i&&hg(i(n)),a=Pg(wt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function hg(t){return t.some(e=>Es(e)?!(e.type===ct||e.type===wt&&!hg(e.children)):!0)?t:null}const rl=t=>t?xg(t)?Da(t):rl(t.parent):null,jr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rl(t.parent),$root:t=>rl(t.root),$emit:t=>t.emit,$options:t=>_u(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,yu(t.update)}),$nextTick:t=>t.n||(t.n=wr.bind(t.proxy)),$watch:t=>c1.bind(t)}),Ec=(t,e)=>t!==Re&&!t.__isScriptSetup&&de(t,e),j_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(s,e))return o[e]=1,s[e];if(r!==Re&&de(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==Re&&de(n,e))return o[e]=4,n[e];il&&(o[e]=0)}}const u=jr[e];let h,f;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ec(r,e)?(r[e]=n,!0):s!==Re&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&de(t,o)||Ec(e,o)||(a=i[0])&&de(a,o)||de(s,o)||de(jr,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cf(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function cO(t){const e=Su();let n=t();return hl(),iu(n)&&(n=n.catch(s=>{throw Is(e),s})),[n,()=>Is(e)]}let il=!0;function q_(t){const e=_u(t),n=t.proxy,s=t.ctx;il=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:v,deactivated:T,beforeDestroy:D,beforeUnmount:S,destroyed:b,unmounted:j,render:k,renderTracked:A,renderTriggered:J,errorCaptured:K,serverPrefetch:N,expose:H,inheritAttrs:ie,components:L,directives:ce,filters:be}=e;if(l&&H_(l,s,null),o)for(const ge in o){const ye=o[ge];Z(ye)&&(s[ge]=ye.bind(n))}if(r){const ge=r.call(n,n);Ce(ge)&&(t.data=Vt(ge))}if(il=!0,i)for(const ge in i){const ye=i[ge],an=Z(ye)?ye.bind(n,n):Z(ye.get)?ye.get.bind(n,n):Ct,bn=!Z(ye)&&Z(ye.set)?ye.set.bind(n):Ct,jt=Se({get:an,set:bn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>jt.value,set:vt=>jt.value=vt})}if(a)for(const ge in a)fg(a[ge],s,n,ge);if(c){const ge=Z(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ye=>{To(ye,ge[ye])})}u&&lf(u,t,"c");function le(ge,ye){W(ye)?ye.forEach(an=>ge(an.bind(n))):ye&&ge(ye.bind(n))}if(le(M_,h),le(Ra,f),le(F_,p),le(lg,m),le(l1,v),le(u1,T),le(V_,K),le(B_,A),le(U_,J),le(ug,S),le(ka,j),le($_,N),W(H))if(H.length){const ge=t.exposed||(t.exposed={});H.forEach(ye=>{Object.defineProperty(ge,ye,{get:()=>n[ye],set:an=>n[ye]=an})})}else t.exposed||(t.exposed={});k&&t.render===Ct&&(t.render=k),ie!=null&&(t.inheritAttrs=ie),L&&(t.components=L),ce&&(t.directives=ce)}function H_(t,e,n=Ct){W(t)&&(t=ol(t));for(const s in t){const r=t[s];let i;Ce(r)?"default"in r?i=Mt(r.from||s,r.default,!0):i=Mt(r.from||s):i=Mt(r),Ke(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function lf(t,e,n){Pt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fg(t,e,n,s){const r=s.includes(".")?Sg(n,s):()=>n[s];if(qe(t)){const i=e[t];Z(i)&&qr(r,i)}else if(Z(t))qr(r,t.bind(n));else if(Ce(t))if(W(t))t.forEach(i=>fg(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&qr(r,i,t)}}function _u(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>qo(c,l,o,!0)),qo(c,e,o)),Ce(e)&&i.set(e,c),c}function qo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qo(t,i,n,!0),r&&r.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:uf,props:hf,emits:hf,methods:Lr,computed:Lr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Lr,directives:Lr,watch:G_,provide:uf,inject:K_};function uf(t,e){return e?t?function(){return Ue(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function K_(t,e){return Lr(ol(t),ol(e))}function ol(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Lr(t,e){return t?Ue(Object.create(null),t,e):e}function hf(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ue(Object.create(null),cf(t),cf(e??{})):e}function G_(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const s in e)n[s]=gt(t[s],e[s]);return n}function dg(){return{app:null,config:{isNativeTag:A0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function Q_(t,e){return function(s,r=null){Z(s)||(s=Ue({},s)),r!=null&&!Ce(r)&&(r=null);const i=dg(),o=new WeakSet;let a=!1;const c=i.app={_uid:W_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:b1,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ae(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Da(f.component)}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Ks;Ks=c;try{return l()}finally{Ks=u}}};return c}}let Ks=null;function To(t,e){if(Qe){let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Qe||He;if(s||Ks){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ks._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function Y_(){return!!(Qe||He||Ks)}const pg={},gg=()=>Object.create(pg),mg=t=>Object.getPrototypeOf(t)===pg;function J_(t,e,n,s=!1){const r={},i=gg();t.propsDefaults=Object.create(null),yg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function X_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ba(t.emitsOptions,f))continue;const p=e[f];if(c)if(de(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=nn(f);r[m]=al(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{yg(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=_r(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=al(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],l=!0)}l&&mn(t.attrs,"set","")}function yg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Br(c))continue;const l=e[c];let u;r&&de(r,u=nn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ba(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=al(r,c,h,l[h],t,!de(l,h))}}return o}function al(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Is(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===_r(n))&&(s=!0))}return s}function vg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,p]=vg(h,e,!0);Ue(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,js),js;if(W(i))for(let u=0;u<i.length;u++){const h=nn(i[u]);ff(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=nn(u);if(ff(h)){const f=i[u],p=o[h]=W(f)||Z(f)?{type:f}:Ue({},f);if(p){const m=gf(Boolean,p.type),v=gf(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function ff(t){return t[0]!=="$"&&!Br(t)}function df(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function pf(t,e){return df(t)===df(e)}function gf(t,e){return W(e)?e.findIndex(n=>pf(n,t)):Z(e)&&pf(e,t)?0:-1}const _g=t=>t[0]==="_"||t==="$stable",wu=t=>W(t)?t.map(xt):[xt(t)],Z_=(t,e,n)=>{if(e._n)return e;const s=nl((...r)=>wu(e(...r)),n);return s._c=!1,s},wg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_g(r))continue;const i=t[r];if(Z(i))e[r]=Z_(r,i,s);else if(i!=null){const o=wu(i);e[r]=()=>o}}},Eg=(t,e)=>{const n=wu(e);t.slots.default=()=>n},e1=(t,e)=>{const n=t.slots=gg();if(t.vnode.shapeFlag&32){const s=e._;s?(Ue(n,e),Rp(n,"_",s,!0)):wg(e,n)}else e&&Eg(t,e)},t1=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ue(r,e),!n&&a===1&&delete r._):(i=!e.$stable,wg(e,r)),o=e}else e&&(Eg(t,e),o={default:1});if(i)for(const a in r)!_g(a)&&o[a]==null&&delete r[a]};function cl(t,e,n,s,r=!1){if(W(t)){t.forEach((f,p)=>cl(f,e&&(W(e)?e[p]:e),n,s,r));return}if(Vr(s)&&!r)return;const i=s.shapeFlag&4?Da(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Ke(l)&&(l.value=null)),Z(c))qn(c,a,12,[o,u]);else{const f=qe(c),p=Ke(c);if(f||p){const m=()=>{if(t.f){const v=f?de(h,c)?h[c]:u[c]:c.value;r?W(v)&&ru(v,i):W(v)?v.includes(i)||v.push(i):f?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,_t(m,n)):m()}}}const _t=x_;function n1(t){return s1(t)}function s1(t,e){const n=Np();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ct,insertStaticContent:m}=t,v=(d,g,y,I=null,_=null,P=null,F=void 0,O=null,x=!!g.dynamicChildren)=>{if(d===g)return;d&&!Kt(d,g)&&(I=w(d),vt(d,_,P,!0),d=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:C,ref:V,shapeFlag:Y}=g;switch(C){case Oa:T(d,g,y,I);break;case ct:D(d,g,y,I);break;case Co:d==null&&S(g,y,I,F);break;case wt:L(d,g,y,I,_,P,F,O,x);break;default:Y&1?k(d,g,y,I,_,P,F,O,x):Y&6?ce(d,g,y,I,_,P,F,O,x):(Y&64||Y&128)&&C.process(d,g,y,I,_,P,F,O,x,z)}V!=null&&_&&cl(V,d&&d.ref,P,g||d,!g)},T=(d,g,y,I)=>{if(d==null)s(g.el=a(g.children),y,I);else{const _=g.el=d.el;g.children!==d.children&&l(_,g.children)}},D=(d,g,y,I)=>{d==null?s(g.el=c(g.children||""),y,I):g.el=d.el},S=(d,g,y,I)=>{[d.el,d.anchor]=m(d.children,g,y,I,d.el,d.anchor)},b=({el:d,anchor:g},y,I)=>{let _;for(;d&&d!==g;)_=f(d),s(d,y,I),d=_;s(g,y,I)},j=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),r(d),d=y;r(g)},k=(d,g,y,I,_,P,F,O,x)=>{g.type==="svg"?F="svg":g.type==="math"&&(F="mathml"),d==null?A(g,y,I,_,P,F,O,x):N(d,g,_,P,F,O,x)},A=(d,g,y,I,_,P,F,O)=>{let x,C;const{props:V,shapeFlag:Y,transition:G,dirs:re}=d;if(x=d.el=o(d.type,P,V&&V.is,V),Y&8?u(x,d.children):Y&16&&K(d.children,x,null,I,_,Ic(d,P),F,O),re&&is(d,null,I,"created"),J(x,d,d.scopeId,F,I),V){for(const Ae in V)Ae!=="value"&&!Br(Ae)&&i(x,Ae,null,V[Ae],P,d.children,I,_,st);"value"in V&&i(x,"value",null,V.value,P),(C=V.onVnodeBeforeMount)&&Ht(C,I,d)}re&&is(d,null,I,"beforeMount");const ue=r1(_,G);ue&&G.beforeEnter(x),s(x,g,y),((C=V&&V.onVnodeMounted)||ue||re)&&_t(()=>{C&&Ht(C,I,d),ue&&G.enter(x),re&&is(d,null,I,"mounted")},_)},J=(d,g,y,I,_)=>{if(y&&p(d,y),I)for(let P=0;P<I.length;P++)p(d,I[P]);if(_){let P=_.subTree;if(g===P){const F=_.vnode;J(d,F,F.scopeId,F.slotScopeIds,_.parent)}}},K=(d,g,y,I,_,P,F,O,x=0)=>{for(let C=x;C<d.length;C++){const V=d[C]=O?Ln(d[C]):xt(d[C]);v(null,V,g,y,I,_,P,F,O)}},N=(d,g,y,I,_,P,F)=>{const O=g.el=d.el;let{patchFlag:x,dynamicChildren:C,dirs:V}=g;x|=d.patchFlag&16;const Y=d.props||Re,G=g.props||Re;let re;if(y&&os(y,!1),(re=G.onVnodeBeforeUpdate)&&Ht(re,y,g,d),V&&is(g,d,y,"beforeUpdate"),y&&os(y,!0),C?H(d.dynamicChildren,C,O,y,I,Ic(g,_),P):F||ye(d,g,O,null,y,I,Ic(g,_),P,!1),x>0){if(x&16)ie(O,g,Y,G,y,I,_);else if(x&2&&Y.class!==G.class&&i(O,"class",null,G.class,_),x&4&&i(O,"style",Y.style,G.style,_),x&8){const ue=g.dynamicProps;for(let Ae=0;Ae<ue.length;Ae++){const _e=ue[Ae],Ge=Y[_e],Dt=G[_e];(Dt!==Ge||_e==="value")&&i(O,_e,Ge,Dt,_,d.children,y,I,st)}}x&1&&d.children!==g.children&&u(O,g.children)}else!F&&C==null&&ie(O,g,Y,G,y,I,_);((re=G.onVnodeUpdated)||V)&&_t(()=>{re&&Ht(re,y,g,d),V&&is(g,d,y,"updated")},I)},H=(d,g,y,I,_,P,F)=>{for(let O=0;O<g.length;O++){const x=d[O],C=g[O],V=x.el&&(x.type===wt||!Kt(x,C)||x.shapeFlag&70)?h(x.el):y;v(x,C,V,null,I,_,P,F,!0)}},ie=(d,g,y,I,_,P,F)=>{if(y!==I){if(y!==Re)for(const O in y)!Br(O)&&!(O in I)&&i(d,O,y[O],null,F,g.children,_,P,st);for(const O in I){if(Br(O))continue;const x=I[O],C=y[O];x!==C&&O!=="value"&&i(d,O,C,x,F,g.children,_,P,st)}"value"in I&&i(d,"value",y.value,I.value,F)}},L=(d,g,y,I,_,P,F,O,x)=>{const C=g.el=d?d.el:a(""),V=g.anchor=d?d.anchor:a("");let{patchFlag:Y,dynamicChildren:G,slotScopeIds:re}=g;re&&(O=O?O.concat(re):re),d==null?(s(C,y,I),s(V,y,I),K(g.children||[],y,V,_,P,F,O,x)):Y>0&&Y&64&&G&&d.dynamicChildren?(H(d.dynamicChildren,G,y,_,P,F,O),(g.key!=null||_&&g===_.subTree)&&Ig(d,g,!0)):ye(d,g,y,V,_,P,F,O,x)},ce=(d,g,y,I,_,P,F,O,x)=>{g.slotScopeIds=O,d==null?g.shapeFlag&512?_.ctx.activate(g,y,I,F,x):be(g,y,I,_,P,F,x):Me(d,g,x)},be=(d,g,y,I,_,P,F)=>{const O=d.component=_1(d,I,_);if(Na(d)&&(O.ctx.renderer=z),w1(O),O.asyncDep){if(_&&_.registerDep(O,le,F),!d.el){const x=O.subTree=ae(ct);D(null,x,g,y)}}else le(O,d,g,y,_,P,F)},Me=(d,g,y)=>{const I=g.component=d.component;if(S_(d,g,y))if(I.asyncDep&&!I.asyncResolved){ge(I,g,y);return}else I.next=g,v_(I.update),I.effect.dirty=!0,I.update();else g.el=d.el,I.vnode=g},le=(d,g,y,I,_,P,F)=>{const O=()=>{if(d.isMounted){let{next:V,bu:Y,u:G,parent:re,vnode:ue}=d;{const Ls=Tg(d);if(Ls){V&&(V.el=ue.el,ge(d,V,F)),Ls.asyncDep.then(()=>{d.isUnmounted||O()});return}}let Ae=V,_e;os(d,!1),V?(V.el=ue.el,ge(d,V,F)):V=ue,Y&&Eo(Y),(_e=V.props&&V.props.onVnodeBeforeUpdate)&&Ht(_e,re,V,ue),os(d,!0);const Ge=wc(d),Dt=d.subTree;d.subTree=Ge,v(Dt,Ge,h(Dt.el),w(Dt),d,_,P),V.el=Ge.el,Ae===null&&vu(d,Ge.el),G&&_t(G,_),(_e=V.props&&V.props.onVnodeUpdated)&&_t(()=>Ht(_e,re,V,ue),_)}else{let V;const{el:Y,props:G}=g,{bm:re,m:ue,parent:Ae}=d,_e=Vr(g);if(os(d,!1),re&&Eo(re),!_e&&(V=G&&G.onVnodeBeforeMount)&&Ht(V,Ae,g),os(d,!0),Y&&xe){const Ge=()=>{d.subTree=wc(d),xe(Y,d.subTree,d,_,null)};_e?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ge()):Ge()}else{const Ge=d.subTree=wc(d);v(null,Ge,y,I,d,_,P),g.el=Ge.el}if(ue&&_t(ue,_),!_e&&(V=G&&G.onVnodeMounted)){const Ge=g;_t(()=>Ht(V,Ae,Ge),_)}(g.shapeFlag&256||Ae&&Vr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&d.a&&_t(d.a,_),d.isMounted=!0,g=y=I=null}},x=d.effect=new cu(O,Ct,()=>yu(C),d.scope),C=d.update=()=>{x.dirty&&x.run()};C.id=d.uid,os(d,!0),C()},ge=(d,g,y)=>{g.component=d;const I=d.vnode.props;d.vnode=g,d.next=null,X_(d,g.props,I,y),t1(d,g.children,y),Zn(),sf(d),es()},ye=(d,g,y,I,_,P,F,O,x=!1)=>{const C=d&&d.children,V=d?d.shapeFlag:0,Y=g.children,{patchFlag:G,shapeFlag:re}=g;if(G>0){if(G&128){bn(C,Y,y,I,_,P,F,O,x);return}else if(G&256){an(C,Y,y,I,_,P,F,O,x);return}}re&8?(V&16&&st(C,_,P),Y!==C&&u(y,Y)):V&16?re&16?bn(C,Y,y,I,_,P,F,O,x):st(C,_,P,!0):(V&8&&u(y,""),re&16&&K(Y,y,I,_,P,F,O,x))},an=(d,g,y,I,_,P,F,O,x)=>{d=d||js,g=g||js;const C=d.length,V=g.length,Y=Math.min(C,V);let G;for(G=0;G<Y;G++){const re=g[G]=x?Ln(g[G]):xt(g[G]);v(d[G],re,y,null,_,P,F,O,x)}C>V?st(d,_,P,!0,!1,Y):K(g,y,I,_,P,F,O,x,Y)},bn=(d,g,y,I,_,P,F,O,x)=>{let C=0;const V=g.length;let Y=d.length-1,G=V-1;for(;C<=Y&&C<=G;){const re=d[C],ue=g[C]=x?Ln(g[C]):xt(g[C]);if(Kt(re,ue))v(re,ue,y,null,_,P,F,O,x);else break;C++}for(;C<=Y&&C<=G;){const re=d[Y],ue=g[G]=x?Ln(g[G]):xt(g[G]);if(Kt(re,ue))v(re,ue,y,null,_,P,F,O,x);else break;Y--,G--}if(C>Y){if(C<=G){const re=G+1,ue=re<V?g[re].el:I;for(;C<=G;)v(null,g[C]=x?Ln(g[C]):xt(g[C]),y,ue,_,P,F,O,x),C++}}else if(C>G)for(;C<=Y;)vt(d[C],_,P,!0),C++;else{const re=C,ue=C,Ae=new Map;for(C=ue;C<=G;C++){const Tt=g[C]=x?Ln(g[C]):xt(g[C]);Tt.key!=null&&Ae.set(Tt.key,C)}let _e,Ge=0;const Dt=G-ue+1;let Ls=!1,zh=0;const Nr=new Array(Dt);for(C=0;C<Dt;C++)Nr[C]=0;for(C=re;C<=Y;C++){const Tt=d[C];if(Ge>=Dt){vt(Tt,_,P,!0);continue}let qt;if(Tt.key!=null)qt=Ae.get(Tt.key);else for(_e=ue;_e<=G;_e++)if(Nr[_e-ue]===0&&Kt(Tt,g[_e])){qt=_e;break}qt===void 0?vt(Tt,_,P,!0):(Nr[qt-ue]=C+1,qt>=zh?zh=qt:Ls=!0,v(Tt,g[qt],y,null,_,P,F,O,x),Ge++)}const Kh=Ls?i1(Nr):js;for(_e=Kh.length-1,C=Dt-1;C>=0;C--){const Tt=ue+C,qt=g[Tt],Gh=Tt+1<V?g[Tt+1].el:I;Nr[C]===0?v(null,qt,y,Gh,_,P,F,O,x):Ls&&(_e<0||C!==Kh[_e]?jt(qt,y,Gh,2):_e--)}}},jt=(d,g,y,I,_=null)=>{const{el:P,type:F,transition:O,children:x,shapeFlag:C}=d;if(C&6){jt(d.component.subTree,g,y,I);return}if(C&128){d.suspense.move(g,y,I);return}if(C&64){F.move(d,g,y,z);return}if(F===wt){s(P,g,y);for(let Y=0;Y<x.length;Y++)jt(x[Y],g,y,I);s(d.anchor,g,y);return}if(F===Co){b(d,g,y);return}if(I!==2&&C&1&&O)if(I===0)O.beforeEnter(P),s(P,g,y),_t(()=>O.enter(P),_);else{const{leave:Y,delayLeave:G,afterLeave:re}=O,ue=()=>s(P,g,y),Ae=()=>{Y(P,()=>{ue(),re&&re()})};G?G(P,ue,Ae):Ae()}else s(P,g,y)},vt=(d,g,y,I=!1,_=!1)=>{const{type:P,props:F,ref:O,children:x,dynamicChildren:C,shapeFlag:V,patchFlag:Y,dirs:G,memoIndex:re}=d;if(Y===-2&&(_=!1),O!=null&&cl(O,null,y,d,!0),re!=null&&(g.renderCache[re]=void 0),V&256){g.ctx.deactivate(d);return}const ue=V&1&&G,Ae=!Vr(d);let _e;if(Ae&&(_e=F&&F.onVnodeBeforeUnmount)&&Ht(_e,g,d),V&6)to(d.component,y,I);else{if(V&128){d.suspense.unmount(y,I);return}ue&&is(d,null,g,"beforeUnmount"),V&64?d.type.remove(d,g,y,z,I):C&&(P!==wt||Y>0&&Y&64)?st(C,g,y,!1,!0):(P===wt&&Y&384||!_&&V&16)&&st(x,g,y),I&&Ds(d)}(Ae&&(_e=F&&F.onVnodeUnmounted)||ue)&&_t(()=>{_e&&Ht(_e,g,d),ue&&is(d,null,g,"unmounted")},y)},Ds=d=>{const{type:g,el:y,anchor:I,transition:_}=d;if(g===wt){xs(y,I);return}if(g===Co){j(d);return}const P=()=>{r(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:F,delayLeave:O}=_,x=()=>F(y,P);O?O(d.el,P,x):x()}else P()},xs=(d,g)=>{let y;for(;d!==g;)y=f(d),r(d),d=y;r(g)},to=(d,g,y)=>{const{bum:I,scope:_,update:P,subTree:F,um:O,m:x,a:C}=d;mf(x),mf(C),I&&Eo(I),_.stop(),P&&(P.active=!1,vt(F,d,g,y)),O&&_t(O,g),_t(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},st=(d,g,y,I=!1,_=!1,P=0)=>{for(let F=P;F<d.length;F++)vt(d[F],g,y,I,_)},w=d=>d.shapeFlag&6?w(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let B=!1;const $=(d,g,y)=>{d==null?g._vnode&&vt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,y),B||(B=!0,sf(),sg(),B=!1),g._vnode=d},z={p:v,um:vt,m:jt,r:Ds,mt:be,mc:K,pc:ye,pbc:H,n:w,o:t};let ve,xe;return e&&([ve,xe]=e(z)),{render:$,hydrate:ve,createApp:Q_($,ve)}}function Ic({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function r1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ig(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ln(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ig(o,a)),a.type===Oa&&(a.el=o.el)}}function i1(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tg(e)}function mf(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const o1=Symbol.for("v-scx"),a1=()=>Mt(o1);function So(t,e){return Eu(t,null,e)}const ao={};function qr(t,e,n){return Eu(t,e,n)}function Eu(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=Re){if(e&&i){const A=e;e=(...J)=>{A(...J),k()}}const c=Qe,l=A=>s===!0?A:Fn(A,s===!1?1:void 0);let u,h=!1,f=!1;if(Ke(t)?(u=()=>t.value,h=Vo(t)):vs(t)?(u=()=>l(t),h=!0):W(t)?(f=!0,h=t.some(A=>vs(A)||Vo(A)),u=()=>t.map(A=>{if(Ke(A))return A.value;if(vs(A))return l(A);if(Z(A))return qn(A,c,2)})):Z(t)?e?u=()=>qn(t,c,2):u=()=>(p&&p(),Pt(t,c,3,[m])):u=Ct,e&&s){const A=u;u=()=>Fn(A())}let p,m=A=>{p=b.onStop=()=>{qn(A,c,4),p=b.onStop=void 0}},v;if(Pa)if(m=Ct,e?n&&Pt(e,c,3,[u(),f?[]:void 0,m]):u(),r==="sync"){const A=a1();v=A.__watcherHandles||(A.__watcherHandles=[])}else return Ct;let T=f?new Array(t.length).fill(ao):ao;const D=()=>{if(!(!b.active||!b.dirty))if(e){const A=b.run();(s||h||(f?A.some((J,K)=>Qn(J,T[K])):Qn(A,T)))&&(p&&p(),Pt(e,c,3,[A,T===ao?void 0:f&&T[0]===ao?[]:T,m]),T=A)}else b.run()};D.allowRecurse=!!e;let S;r==="sync"?S=D:r==="post"?S=()=>_t(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),S=()=>yu(D));const b=new cu(u,Ct,S),j=Mp(),k=()=>{b.stop(),j&&ru(j.effects,b)};return e?n?D():T=b.run():r==="post"?_t(b.run.bind(b),c&&c.suspense):b.run(),v&&v.push(k),k}function c1(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Sg(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Is(this),a=Eu(r,i.bind(s),n);return o(),a}function Sg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Fn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))Fn(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Fn(t[s],e,n);else if(Ea(t)||qs(t))t.forEach(s=>{Fn(s,e,n)});else if(Ap(t)){for(const s in t)Fn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Fn(t[s],e,n)}return t}const Na=t=>t.type.__isKeepAlive;function l1(t,e){Cg(t,"a",e)}function u1(t,e){Cg(t,"da",e)}function Cg(t,e,n=Qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Aa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Na(r.parent.vnode)&&h1(s,e,n,r),r=r.parent}}function h1(t,e,n,s){const r=Aa(e,t,s,!0);ka(()=>{ru(s[e],r)},n)}const xn=Symbol("_leaveCb"),co=Symbol("_enterCb");function bg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ra(()=>{t.isMounted=!0}),ug(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],Ag={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},Rg=t=>{const e=t.subTree;return e.component?Rg(e.component):e},f1={name:"BaseTransition",props:Ag,setup(t,{slots:e}){const n=Su(),s=bg();return()=>{const r=e.default&&Iu(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const f of r)if(f.type!==ct){i=f;break}}const o=te(t),{mode:a}=o;if(s.isLeaving)return Tc(i);const c=yf(i);if(!c)return Tc(i);let l=oi(c,o,s,n,f=>l=f);nr(c,l);const u=n.subTree,h=u&&yf(u);if(h&&h.type!==ct&&!Kt(c,h)&&Rg(n).type!==ct){const f=oi(h,o,s,n);if(nr(h,f),a==="out-in"&&c.type!==ct)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Tc(i);a==="in-out"&&c.type!==ct&&(f.delayLeave=(p,m,v)=>{const T=kg(s,h);T[String(h.key)]=h,p[xn]=()=>{m(),p[xn]=void 0,delete l.delayedLeave},l.delayedLeave=v})}return i}}},d1=f1;function kg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function oi(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:T,onAppear:D,onAfterAppear:S,onAppearCancelled:b}=e,j=String(t.key),k=kg(n,t),A=(N,H)=>{N&&Pt(N,s,9,H)},J=(N,H)=>{const ie=H[1];A(N,H),W(N)?N.every(L=>L.length<=1)&&ie():N.length<=1&&ie()},K={mode:o,persisted:a,beforeEnter(N){let H=c;if(!n.isMounted)if(i)H=T||c;else return;N[xn]&&N[xn](!0);const ie=k[j];ie&&Kt(t,ie)&&ie.el[xn]&&ie.el[xn](),A(H,[N])},enter(N){let H=l,ie=u,L=h;if(!n.isMounted)if(i)H=D||l,ie=S||u,L=b||h;else return;let ce=!1;const be=N[co]=Me=>{ce||(ce=!0,Me?A(L,[N]):A(ie,[N]),K.delayedLeave&&K.delayedLeave(),N[co]=void 0)};H?J(H,[N,be]):be()},leave(N,H){const ie=String(t.key);if(N[co]&&N[co](!0),n.isUnmounting)return H();A(f,[N]);let L=!1;const ce=N[xn]=be=>{L||(L=!0,H(),be?A(v,[N]):A(m,[N]),N[xn]=void 0,k[ie]===t&&delete k[ie])};k[ie]=t,p?J(p,[N,ce]):ce()},clone(N){const H=oi(N,e,n,s,r);return r&&r(H),H}};return K}function Tc(t){if(Na(t))return t=yn(t),t.children=null,t}function yf(t){if(!Na(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Z(n.default))return n.default()}}function nr(t,e){t.shapeFlag&6&&t.component?nr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Iu(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===wt?(o.patchFlag&128&&r++,s=s.concat(Iu(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?yn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const p1=t=>t.__isTeleport,wt=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),Hr=[];let Ot=null;function Pe(t=!1){Hr.push(Ot=t?null:[])}function Ng(){Hr.pop(),Ot=Hr[Hr.length-1]||null}let sr=1;function vf(t){sr+=t}function Og(t){return t.dynamicChildren=sr>0?Ot||js:null,Ng(),sr>0&&Ot&&Ot.push(t),t}function Fe(t,e,n,s,r,i){return Og(Ee(t,e,n,s,r,i,!0))}function Pg(t,e,n,s,r){return Og(ae(t,e,n,s,r,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Dg=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Ke(t)||Z(t)?{i:He,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,s=0,r=null,i=t===wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dg(e),ref:e&&bo(e),scopeId:og,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:He};return a?(Tu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),sr>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const ae=g1;function g1(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===b_)&&(t=ct),Es(t)){const a=yn(t,e,!0);return n&&Tu(a,n),sr>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag=-2,a}if(C1(t)&&(t=t.__vccOpts),e){e=m1(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=ei(a)),Ce(c)&&(Yp(c)&&!W(c)&&(c=Ue({},c)),e.style=au(c))}const o=qe(t)?1:R_(t)?128:p1(t)?64:Ce(t)?4:Z(t)?2:0;return Ee(t,e,n,s,r,o,i,!0)}function m1(t){return t?Yp(t)||mg(t)?Ue({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Sn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Dg(l),ref:e&&e.ref?n&&i?W(i)?i.concat(bo(e)):[i,bo(e)]:bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&nr(u,c.clone(u)),u}function ll(t=" ",e=0){return ae(Oa,null,t,e)}function lO(t,e){const n=ae(Co,null,t);return n.staticCount=e,n}function Sc(t="",e=!1){return e?(Pe(),Pg(ct,null,t)):ae(ct,null,t)}function xt(t){return t==null||typeof t=="boolean"?ae(ct):W(t)?ae(wt,null,t.slice()):typeof t=="object"?Ln(t):ae(Oa,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Tu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Tu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!mg(e)?e._ctx=He:r===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[ll(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sn(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ei([e.class,s.class]));else if(r==="style")e.style=au([e.style,s.style]);else if(wa(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Pt(t,e,7,[n,s])}const y1=dg();let v1=0;function _1(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||y1,i={uid:v1++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(s,r),emitsOptions:ig(s,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=w_.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const Su=()=>Qe||He;let Ho,ul;{const t=Np(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>Qe=n),ul=e("__VUE_SSR_SETTERS__",n=>Pa=n)}const Is=t=>{const e=Qe;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},hl=()=>{Qe&&Qe.scope.off(),Ho(null)};function xg(t){return t.vnode.shapeFlag&4}let Pa=!1;function w1(t,e=!1){e&&ul(e);const{props:n,children:s}=t.vnode,r=xg(t);J_(t,n,r,e),e1(t,s);const i=r?E1(t,e):void 0;return e&&ul(!1),i}function E1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,j_);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?T1(t):null,i=Is(t);Zn();const o=qn(s,t,0,[t.props,r]);if(es(),i(),iu(o)){if(o.then(hl,hl),e)return o.then(a=>{fl(t,a,e)}).catch(a=>{Ri(a,t,0)});t.asyncDep=o}else fl(t,o,e)}else Lg(t,e)}function fl(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=eg(e)),Lg(t,n)}let _f;function Lg(t,e,n){const s=t.type;if(!t.render){if(!e&&_f&&!s.render){const r=s.template||_u(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ue(Ue({isCustomElement:i,delimiters:a},o),c);s.render=_f(r,l)}}t.render=s.render||Ct}{const r=Is(t);Zn();try{q_(t)}finally{es(),r()}}}const I1={get(t,e){return Et(t,"get",""),t[e]}};function T1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,I1),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(eg(pu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}})):t.proxy}function S1(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function C1(t){return Z(t)&&"__vccOpts"in t}const Se=(t,e)=>l_(t,e,Pa);function hs(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!W(e)?Es(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Es(n)&&(n=[n]),ae(t,e,n))}const b1="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const A1="http://www.w3.org/2000/svg",R1="http://www.w3.org/1998/Math/MathML",un=typeof document<"u"?document:null,wf=un&&un.createElement("template"),k1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?un.createElementNS(A1,t):e==="mathml"?un.createElementNS(R1,t):n?un.createElement(t,{is:n}):un.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wf.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=wf.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rn="transition",Or="animation",rr=Symbol("_vtc"),Mg=(t,{slots:e})=>hs(d1,$g(t),e);Mg.displayName="Transition";const Fg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},N1=Mg.props=Ue({},Ag,Fg),as=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ef=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function $g(t){const e={};for(const L in t)L in Fg||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=O1(r),v=m&&m[0],T=m&&m[1],{onBeforeEnter:D,onEnter:S,onEnterCancelled:b,onLeave:j,onLeaveCancelled:k,onBeforeAppear:A=D,onAppear:J=S,onAppearCancelled:K=b}=e,N=(L,ce,be)=>{On(L,ce?u:a),On(L,ce?l:o),be&&be()},H=(L,ce)=>{L._isLeaving=!1,On(L,h),On(L,p),On(L,f),ce&&ce()},ie=L=>(ce,be)=>{const Me=L?J:S,le=()=>N(ce,L,be);as(Me,[ce,le]),If(()=>{On(ce,L?c:i),ln(ce,L?u:a),Ef(Me)||Tf(ce,s,v,le)})};return Ue(e,{onBeforeEnter(L){as(D,[L]),ln(L,i),ln(L,o)},onBeforeAppear(L){as(A,[L]),ln(L,c),ln(L,l)},onEnter:ie(!1),onAppear:ie(!0),onLeave(L,ce){L._isLeaving=!0;const be=()=>H(L,ce);ln(L,h),ln(L,f),Bg(),If(()=>{L._isLeaving&&(On(L,h),ln(L,p),Ef(j)||Tf(L,s,T,be))}),as(j,[L,be])},onEnterCancelled(L){N(L,!1),as(b,[L])},onAppearCancelled(L){N(L,!0),as(K,[L])},onLeaveCancelled(L){H(L),as(k,[L])}})}function O1(t){if(t==null)return null;if(Ce(t))return[Cc(t.enter),Cc(t.leave)];{const e=Cc(t);return[e,e]}}function Cc(t){return kp(t)}function ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[rr]||(t[rr]=new Set)).add(e)}function On(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[rr];n&&(n.delete(e),n.size||(t[rr]=void 0))}function If(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let P1=0;function Tf(t,e,n,s){const r=t._endId=++P1,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ug(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Ug(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${Rn}Delay`),i=s(`${Rn}Duration`),o=Sf(r,i),a=s(`${Or}Delay`),c=s(`${Or}Duration`),l=Sf(a,c);let u=null,h=0,f=0;e===Rn?o>0&&(u=Rn,h=o,f=i.length):e===Or?l>0&&(u=Or,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Rn:Or:null,f=u?u===Rn?i.length:c.length:0);const p=u===Rn&&/\b(transform|all)(,|$)/.test(s(`${Rn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Sf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cf(n)+Cf(t[s])))}function Cf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bg(){return document.body.offsetHeight}function D1(t,e,n){const s=t[rr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bf=Symbol("_vod"),x1=Symbol("_vsh"),L1=Symbol(""),M1=/(^|;)\s*display\s*:/;function F1(t,e,n){const s=t.style,r=qe(n);let i=!1;if(n&&!r){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ao(s,a,"")}else for(const o in e)n[o]==null&&Ao(s,o,"");for(const o in n)o==="display"&&(i=!0),Ao(s,o,n[o])}else if(r){if(e!==n){const o=s[L1];o&&(n+=";"+o),s.cssText=n,i=M1.test(n)}}else e&&t.removeAttribute("style");bf in t&&(t[bf]=i?s.display:"",t[x1]&&(s.display="none"))}const Af=/\s*!important$/;function Ao(t,e,n){if(W(n))n.forEach(s=>Ao(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$1(t,e);Af.test(n)?t.setProperty(_r(s),n.replace(Af,""),"important"):t[s]=n}}const Rf=["Webkit","Moz","ms"],bc={};function $1(t,e){const n=bc[e];if(n)return n;let s=nn(e);if(s!=="filter"&&s in t)return bc[e]=s;s=Ta(s);for(let r=0;r<Rf.length;r++){const i=Rf[r]+s;if(i in t)return bc[e]=i}return e}const kf="http://www.w3.org/1999/xlink";function Nf(t,e,n,s,r,i=F0(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kf,e.slice(6,e.length)):t.setAttributeNS(kf,e,n):n==null||i&&!Op(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tn(n)?String(n):n)}function U1(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Op(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function us(t,e,n,s){t.addEventListener(e,n,s)}function B1(t,e,n,s){t.removeEventListener(e,n,s)}const Of=Symbol("_vei");function V1(t,e,n,s,r=null){const i=t[Of]||(t[Of]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=j1(e);if(s){const l=i[e]=z1(s,r);us(t,a,l,c)}else o&&(B1(t,a,o,c),i[e]=void 0)}}const Pf=/(?:Once|Passive|Capture)$/;function j1(t){let e;if(Pf.test(t)){e={};let s;for(;s=t.match(Pf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Ac=0;const q1=Promise.resolve(),H1=()=>Ac||(q1.then(()=>Ac=0),Ac=Date.now());function z1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pt(K1(s,n.value),e,5,[s])};return n.value=t,n.attached=H1(),n}function K1(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Df=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,G1=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?D1(t,s,l):e==="style"?F1(t,n,s):wa(e)?su(e)||V1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W1(t,e,s,l))?(U1(t,e,s,i,o,a,c),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nf(t,e,s,l,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Nf(t,e,s,l))};function W1(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Df(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Df(e)&&qe(n)?!1:e in t}const Vg=new WeakMap,jg=new WeakMap,zo=Symbol("_moveCb"),xf=Symbol("_enterCb"),qg={name:"TransitionGroup",props:Ue({},N1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Su(),s=bg();let r,i;return lg(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Z1(r[0].el,n.vnode.el,o))return;r.forEach(Y1),r.forEach(J1);const a=r.filter(X1);Bg(),a.forEach(c=>{const l=c.el,u=l.style;ln(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l[zo]=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l[zo]=null,On(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=te(t),a=$g(o);let c=o.tag||wt;if(r=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(r.push(u),nr(u,oi(u,a,s,n)),Vg.set(u,u.el.getBoundingClientRect()))}i=e.default?Iu(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&nr(u,oi(u,a,s,n))}return ae(c,null,i)}}},Q1=t=>delete t.mode;qg.props;const uO=qg;function Y1(t){const e=t.el;e[zo]&&e[zo](),e[xf]&&e[xf]()}function J1(t){jg.set(t,t.el.getBoundingClientRect())}function X1(t){const e=Vg.get(t),n=jg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function Z1(t,e,n){const s=t.cloneNode(),r=t[rr];r&&r.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=Ug(s);return i.removeChild(s),o}const Ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Eo(e,n):e};function ew(t){t.target.composing=!0}function Lf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gs=Symbol("_assign"),hO={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Gs]=Ko(r);const i=s||r.props&&r.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Uo(a)),t[Gs](a)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",ew),us(t,"compositionend",Lf),us(t,"change",Lf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Gs]=Ko(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Uo(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},fO={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ea(e);us(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Uo(Go(o)):Go(o));t[Gs](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,wr(()=>{t._assigning=!1})}),t[Gs]=Ko(s)},mounted(t,{value:e,modifiers:{number:n}}){Mf(t,e)},beforeUpdate(t,e,n){t[Gs]=Ko(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Mf(t,e)}};function Mf(t,e,n){const s=t.multiple,r=W(e);if(!(s&&!r&&!Ea(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],c=Go(a);if(s)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(c)):a.selected=U0(e,c)>-1}else a.selected=e.has(c);else if(Sa(Go(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Go(t){return"_value"in t?t._value:t.value}const tw=Ue({patchProp:G1},k1);let Ff;function nw(){return Ff||(Ff=n1(tw))}const Hg=(...t)=>{const e=nw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=rw(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,sw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rw(t){return qe(t)?document.querySelector(t):t}const nt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},iw={},ow={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},aw=Ee("path",{d:"M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"},null,-1),cw=[aw];function lw(t,e){return Pe(),Fe("svg",ow,cw)}const uw=nt(iw,[["render",lw]]),hw={},fw={fill:"currentColor",viewBox:"0 0 24 24"},dw=Ee("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"},null,-1),pw=[dw];function gw(t,e){return Pe(),Fe("svg",fw,pw)}const mw=nt(hw,[["render",gw]]),yw={},vw={viewBox:"0 0 24 24"},_w=Ee("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[Ee("rect",{width:"18",height:"14",x:"3",y:"5",rx:"2"}),Ee("path",{d:"m3 7 9 6 9-6"})],-1),ww=[_w];function Ew(t,e){return Pe(),Fe("svg",vw,ww)}const Iw=nt(yw,[["render",Ew]]),Tw={},Sw={fill:"currentColor",viewBox:"0 0 24 24"},Cw=Ee("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"},null,-1),bw=[Cw];function Aw(t,e){return Pe(),Fe("svg",Sw,bw)}const Rw=nt(Tw,[["render",Aw]]),kw={},Nw={"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24"},Ow=Ee("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"},null,-1),Pw=[Ow];function Dw(t,e){return Pe(),Fe("svg",Nw,Pw)}const xw=nt(kw,[["render",Dw]]),Lw={},Mw={viewBox:"0 0 24 24"},Fw=Ee("path",{fill:"currentColor",d:"M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z"},null,-1),$w=[Fw];function Uw(t,e){return Pe(),Fe("svg",Mw,$w)}const Bw=nt(Lw,[["render",Uw]]),Vw={},jw={viewBox:"0 0 24 24"},qw=Ee("path",{fill:"currentColor",d:"M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"},null,-1),Hw=[qw];function zw(t,e){return Pe(),Fe("svg",jw,Hw)}const Kw=nt(Vw,[["render",zw]]),Gw={},Ww={viewBox:"0 0 24 24"},Qw=Ee("path",{fill:"currentColor",d:"M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"},null,-1),Yw=[Qw];function Jw(t,e){return Pe(),Fe("svg",Ww,Yw)}const Xw=nt(Gw,[["render",Jw]]),Zw={},eE={fill:"currentColor",viewBox:"0 0 24 24"},tE=Ee("path",{d:"m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"},null,-1),nE=[tE];function sE(t,e){return Pe(),Fe("svg",eE,nE)}const rE=nt(Zw,[["render",sE]]),iE={},oE={fill:"currentColor",viewBox:"0 0 24 24"},aE=Ee("path",{d:"m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"},null,-1),cE=[aE];function lE(t,e){return Pe(),Fe("svg",oE,cE)}const uE=nt(iE,[["render",lE]]),hE={},fE={fill:"currentColor",viewBox:"0 0 24 24"},dE=Ee("path",{d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"},null,-1),pE=[dE];function gE(t,e){return Pe(),Fe("svg",fE,pE)}const mE=nt(hE,[["render",gE]]),yE={},vE={fill:"currentColor",viewBox:"0 0 20 20"},_E=Ee("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},null,-1),wE=[_E];function EE(t,e){return Pe(),Fe("svg",vE,wE)}const IE=nt(yE,[["render",EE]]),TE={},SE={fill:"currentColor",viewBox:"0 0 24 24"},CE=Ee("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z"},null,-1),bE=[CE];function AE(t,e){return Pe(),Fe("svg",SE,bE)}const RE=nt(TE,[["render",AE]]),kE={},NE={fill:"currentColor",viewBox:"0 0 24 24"},OE=Ee("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"},null,-1),PE=[OE];function DE(t,e){return Pe(),Fe("svg",NE,PE)}const xE=nt(kE,[["render",DE]]),LE={},ME={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},FE=Ee("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"},null,-1),$E=[FE];function UE(t,e){return Pe(),Fe("svg",ME,$E)}const BE=nt(LE,[["render",UE]]),ki={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ir={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},yt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},VE={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},zg={dangerouslyHTMLString:!1,multiple:!0,position:ki.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},jE={rtl:!1,newestOnTop:!1,toastClassName:""},Kg={...zg,...jE};({...zg,type:yt.DEFAULT});var we=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(we||{}),dl=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(dl||{});const qE={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},HE={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},zE={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},KE={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Gg(t){let e=qE;if(!t||typeof t=="string")switch(t){case"flip":e=KE;break;case"zoom":e=zE;break;case"slide":e=HE;break}else e=t;return e}function GE(t){return t.containerId||String(t.position)}const xa="will-unmount";function WE(t=ki.TOP_RIGHT){return!!document.querySelector(".".concat(we.CSS_NAMESPACE,"__toast-container--").concat(t))}function QE(t=ki.TOP_RIGHT){return"".concat(we.CSS_NAMESPACE,"__toast-container--").concat(t)}function YE(t,e,n=!1){const s=["".concat(we.CSS_NAMESPACE,"__toast-container"),"".concat(we.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(we.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return Ws(e)?e({position:t,rtl:n,defaultClassName:s}):"".concat(s," ").concat(e||"")}function JE(t){var e;const{position:n,containerClassName:s,rtl:r=!1,style:i={}}=t,o=we.CSS_NAMESPACE,a=QE(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(xa)),h=c||document.createElement("div"),f=document.createElement("div");f.className=YE(n,s,r),f.dataset.testid="".concat(we.CSS_NAMESPACE,"__toast-container--").concat(n),f.id=GE(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const m=i[p];f.style[p]=m}return c||(h.className=we.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(f),f}function pl(t){var e,n,s;const r=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(r);i&&i.removeEventListener("animationend",pl,!1);try{ai[r].unmount(),(s=document.getElementById(r))==null||s.remove(),delete ai[r],delete Xe[r]}catch{}}const ai=Vt({});function XE(t,e){const n=document.getElementById(String(e));n&&(ai[n.id]=t)}function gl(t,e=!0){const n=String(t);if(!ai[n])return;const s=document.getElementById(n);s&&s.classList.add(xa),e?(eI(t),s&&s.addEventListener("animationend",pl,!1)):pl(n),sn.items=sn.items.filter(r=>r.containerId!==t)}function ZE(t){for(const e in ai)gl(e,t);sn.items=[]}function Wg(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...Gg(s.transition)};const r=s.appendPosition?"".concat(s.exit,"--").concat(s.position):s.exit;n.className+=" ".concat(r),e&&e(n)}}function eI(t){for(const e in Xe)if(e===t)for(const n of Xe[e]||[])Wg(n)}function tI(t){const e=Ni().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Cu(t){return document.getElementById(t)}function nI(t){const e=Cu(t.containerId);return e&&e.classList.contains(xa)}function $f(t){var e;const n=Es(t.content)?te(t.content.props):null;return n??te((e=t.data)!=null?e:{})}function sI(t){return t?sn.items.filter(e=>e.containerId===t).length>0:sn.items.length>0}function rI(){if(sn.items.length>0){const t=sn.items.shift();Ro(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Xe=Vt({}),sn=Vt({items:[]});function Ni(){const t=te(Xe);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function iI(t){return Ni().find(e=>e.toastId===t)}function Ro(t,e={}){if(nI(e)){const n=Cu(e.containerId);n&&n.addEventListener("animationend",ml.bind(null,t,e),!1)}else ml(t,e)}function ml(t,e={}){const n=Cu(e.containerId);n&&n.removeEventListener("animationend",ml.bind(null,t,e),!1);const s=Xe[e.containerId]||[],r=s.length>0;if(!r&&!WE(e.position)){const i=JE(e),o=Hg(SI,e);o.mount(i),XE(o,i.id)}r&&(e.position=s[0].position),wr(()=>{e.updateId?Jt.update(e):Jt.add(t,e)})}const Jt={add(t,e){const{containerId:n=""}=e;n&&(Xe[n]=Xe[n]||[],Xe[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,r;e.newestOnTop?(s=Xe[n])==null||s.unshift(e):(r=Xe[n])==null||r.push(e),e.onOpen&&e.onOpen($f(e))},e.delay||0))},remove(t){if(t){const e=tI(t);if(e){const n=Xe[e];let s=n.find(r=>r.toastId===t);Xe[e]=n.filter(r=>r.toastId!==t),!Xe[e].length&&!sI(e)&&gl(e,!1),rI(),wr(()=>{s!=null&&s.onClose&&(s.onClose($f(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Xe[e]=Xe[e]||[];const n=Xe[e].find(s=>s.toastId===t.toastId);n&&setTimeout(()=>{for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const r=t[s];n[s]=r}},t.delay||0)}},clear(t,e=!0){t?gl(t,e):ZE(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",Jt.dismissCallback,!1),setTimeout(()=>{Jt.remove(n)}))},dismiss(t){if(t){const e=Ni();for(const n of e)if(n.toastId===t){Wg(n,s=>{s.addEventListener("animationend",Jt.dismissCallback,!1)});break}}}},Qg=Vt({}),Wo=Vt({});function Yg(){return Math.random().toString(36).substring(2,9)}function oI(t){return typeof t=="number"&&!isNaN(t)}function yl(t){return typeof t=="string"}function Ws(t){return typeof t=="function"}function La(...t){return Sn(...t)}function ko(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function aI(t={}){Qg["".concat(we.CSS_NAMESPACE,"-default-options")]=t}function cI(){return Qg["".concat(we.CSS_NAMESPACE,"-default-options")]||Kg}function lI(){return document.documentElement.classList.contains("dark")?"dark":"light"}var No=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(No||{});const Jg={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:ki.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:ir.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:yt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},uI={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:yt.DEFAULT},theme:{type:String,required:!1,default:ir.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},hI=Er({name:"ProgressBar",props:uI,setup(t,{attrs:e}){const n=fn(),s=Se(()=>t.hide?"true":"false"),r=Se(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=Se(()=>["".concat(we.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(we.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(we.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(we.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(we.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(we.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=Se(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=Se(()=>t.controlledProgress?null:c),u=Se(()=>t.controlledProgress?c:null);return So(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>ae("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),fI=Er({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:ir.AUTO},type:{type:String,required:!1,default:ir.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>ae("button",{class:"".concat(we.CSS_NAMESPACE,"__close-button ").concat(we.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[ae("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[ae("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Ma=({theme:t,type:e,path:n,...s})=>ae("svg",Sn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},s),[ae("path",{d:n},null)]);function dI(t){return ae(Ma,Sn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function pI(t){return ae(Ma,Sn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function gI(t){return ae(Ma,Sn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function mI(t){return ae(Ma,Sn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function yI(){return ae("div",{class:"".concat(we.CSS_NAMESPACE,"__spinner")},null)}const vl={info:pI,warning:dI,success:gI,error:mI,spinner:yI},vI=t=>t in vl;function _I({theme:t,type:e,isLoading:n,icon:s}){let r;const i={theme:t,type:e};return n?r=vl.spinner():s===!1?r=void 0:ko(s)?r=te(s):Ws(s)?r=s(i):Es(s)?r=yn(s,i):yl(s)||oI(s)?r=s:vI(e)&&(r=vl[e](i)),r}const wI=()=>{};function EI(t,e,n=we.COLLAPSE_DURATION){const{scrollHeight:s,style:r}=t,i=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=s+"px",r.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,i)})})}function II(t){const e=fn(!1),n=fn(!1),s=fn(!1),r=fn(No.Enter),i=Vt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||we.COLLAPSE_DURATION}),o=i.done||wI,a=Se(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=Se(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=Se(()=>t.pauseOnHover?{onMouseenter:T,onMouseleave:v}:{});function u(){const S=a.value.split(" ");f().addEventListener(dl.ENTRANCE_ANIMATION_END,v,{once:!0});const b=k=>{const A=f();k.target===A&&(A.dispatchEvent(new Event(dl.ENTRANCE_ANIMATION_END)),A.removeEventListener("animationend",b),A.removeEventListener("animationcancel",b),r.value===No.Enter&&k.type!=="animationcancel"&&A.classList.remove(...S))},j=()=>{const k=f();k.classList.add(...S),k.addEventListener("animationend",b),k.addEventListener("animationcancel",b)};t.pauseOnFocusLoss&&p(),j()}function h(){if(!f())return;const S=()=>{const j=f();j.removeEventListener("animationend",S),i.collapse?EI(j,o,i.collapseDuration):o()},b=()=>{const j=f();r.value=No.Exit,j&&(j.className+=" ".concat(c.value),j.addEventListener("animationend",S))};n.value||(s.value?S():setTimeout(b))}function f(){return t.toastRef.value}function p(){document.hasFocus()||T(),window.addEventListener("focus",v),window.addEventListener("blur",T)}function m(){window.removeEventListener("focus",v),window.removeEventListener("blur",T)}function v(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function T(){e.value=!1}function D(S){S&&(S.stopPropagation(),S.preventDefault()),n.value=!1}return So(h),So(()=>{const S=Ni();n.value=S.findIndex(b=>b.toastId===i.toastId)>-1}),So(()=>{t.isLoading!==void 0&&(t.loading.value?T():v())}),Ra(u),ka(()=>{t.pauseOnFocusLoss&&m()}),{isIn:n,isRunning:e,hideToast:D,eventHandlers:l}}const TI=Er({name:"ToastItem",inheritAttrs:!1,props:Jg,setup(t){const e=fn(),n=Se(()=>!!t.isLoading),s=Se(()=>t.progress!==void 0&&t.progress!==null),r=Se(()=>_I(t)),i=Se(()=>["".concat(we.CSS_NAMESPACE,"__toast"),"".concat(we.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(we.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(we.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=II({toastRef:e,loading:n,done:()=>{Jt.remove(t.toastId)},...Gg(t.transition),...t});return()=>ae("div",Sn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[ae("div",{role:t.role,"data-testid":"toast-body",class:"".concat(we.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[r.value!=null&&ae("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(we.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(we.CSS_NAMESPACE,"--animate-icon ").concat(we.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[ko(r.value)?hs(te(r.value),{theme:t.theme,type:t.type}):Ws(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),ae("div",{"data-testid":"toast-content"},[ko(t.content)?hs(te(t.content),{toastProps:te(t),closeToast:c,data:t.data}):Ws(t.content)?t.content({toastProps:te(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?hs("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&ae(fI,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),ko(t.closeButton)?hs(te(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):Ws(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,ae(hI,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let zr=0;function Xg(){typeof window>"u"||(zr&&window.cancelAnimationFrame(zr),zr=window.requestAnimationFrame(Xg),Wo.lastUrl!==window.location.href&&(Wo.lastUrl=window.location.href,Jt.clear()))}const SI=Er({name:"ToastifyContainer",inheritAttrs:!1,props:Jg,setup(t){const e=Se(()=>t.containerId),n=Se(()=>Xe[e.value]||[]),s=Se(()=>n.value.filter(r=>r.position===t.position));return Ra(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Xg)}),ka(()=>{typeof window<"u"&&zr&&(window.cancelAnimationFrame(zr),Wo.lastUrl="")}),()=>ae(wt,null,[s.value.map(r=>{const{toastId:i=""}=r;return ae(TI,Sn({key:i},r),null)})])}});let Rc=!1;function Zg(){const t=[];return Ni().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(xa)&&t.push(e)}),t}function CI(t){const e=Zg().length,n=t??0;return n>0&&e+sn.items.length>=n}function bI(t){CI(t.limit)&&!t.updateId&&sn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function ts(t,e,n={}){if(Rc)return;n=La(cI(),{type:e},te(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Yg()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=lI()),bI(n),Wo.lastUrl=window.location.href,n.multiple?sn.items.length?n.updateId&&Ro(t,n):Ro(t,n):(Rc=!0,Oe.clearAll(void 0,!1),setTimeout(()=>{Ro(t,n)},0),setTimeout(()=>{Rc=!1},390)),n.toastId}const Oe=(t,e)=>ts(t,yt.DEFAULT,e);Oe.info=(t,e)=>ts(t,yt.DEFAULT,{...e,type:yt.INFO});Oe.error=(t,e)=>ts(t,yt.DEFAULT,{...e,type:yt.ERROR});Oe.warning=(t,e)=>ts(t,yt.DEFAULT,{...e,type:yt.WARNING});Oe.warn=Oe.warning;Oe.success=(t,e)=>ts(t,yt.DEFAULT,{...e,type:yt.SUCCESS});Oe.loading=(t,e)=>ts(t,yt.DEFAULT,La(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));Oe.dark=(t,e)=>ts(t,yt.DEFAULT,La(e,{theme:ir.DARK}));Oe.remove=t=>{t?Jt.dismiss(t):Jt.clear()};Oe.clearAll=(t,e)=>{Jt.clear(t,e)};Oe.isActive=t=>{let e=!1;return e=Zg().findIndex(n=>n.toastId===t)>-1,e};Oe.update=(t,e={})=>{setTimeout(()=>{const n=iI(t);if(n){const s=te(n),{content:r}=s,i={...s,...e,toastId:e.toastId||t,updateId:Yg()},o=i.render||r;delete i.render,ts(o,i.type,i)}},0)};Oe.done=t=>{Oe.update(t,{isLoading:!1,progress:1})};Oe.promise=AI;function AI(t,{pending:e,error:n,success:s},r){var i,o,a;let c;const l={...r||{},autoClose:!1};e&&(c=yl(e)?Oe.loading(e,l):Oe.loading(e.render,{...l,...e}));const u={autoClose:(i=r==null?void 0:r.autoClose)!=null?i:!0,closeOnClick:(o=r==null?void 0:r.closeOnClick)!=null?o:!0,closeButton:(a=r==null?void 0:r.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(p,m,v)=>{if(m==null){Oe.remove(c);return}const T={type:p,...u,...r,data:v},D=yl(m)?{render:m}:m;return c?Oe.update(c,{...T,...D,isLoading:!1}):Oe(D.render,{...T,...D,isLoading:!1}),v},f=Ws(t)?t():t;return f.then(p=>{h("success",s,p)}).catch(p=>{h("error",n,p)}),f}Oe.POSITION=ki;Oe.THEME=ir;Oe.TYPE=yt;Oe.TRANSITIONS=VE;const em={install(t,e={}){RI(e)}};typeof window<"u"&&(window.Vue3Toastify=em);function RI(t={}){const e=La(Kg,t);aI(e)}var kI=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let tm;const Fa=t=>tm=t,nm=Symbol();function _l(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kr||(Kr={}));function NI(){const t=Lp(!0),e=t.run(()=>fn({}));let n=[],s=[];const r=pu({install(i){Fa(r),r._a=i,i.provide(nm,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!kI?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const sm=()=>{};function Uf(t,e,n,s=sm){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Mp()&&j0(r),r}function Ms(t,...e){t.slice().forEach(n=>{n(...e)})}const OI=t=>t();function wl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];_l(r)&&_l(s)&&t.hasOwnProperty(n)&&!Ke(s)&&!vs(s)?t[n]=wl(r,s):t[n]=s}return t}const PI=Symbol();function DI(t){return!_l(t)||!t.hasOwnProperty(PI)}const{assign:Pn}=Object;function xI(t){return!!(Ke(t)&&t.effect)}function LI(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=d_(n.state.value[t]);return Pn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=pu(Se(()=>{Fa(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=rm(t,l,e,n,s,!0),c}function rm(t,e,n={},s,r,i){let o;const a=Pn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],p;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),fn({});let v;function T(K){let N;l=u=!1,typeof K=="function"?(K(s.state.value[t]),N={type:Kr.patchFunction,storeId:t,events:p}):(wl(s.state.value[t],K),N={type:Kr.patchObject,payload:K,storeId:t,events:p});const H=v=Symbol();wr().then(()=>{v===H&&(l=!0)}),u=!0,Ms(h,N,s.state.value[t])}const D=i?function(){const{state:N}=n,H=N?N():{};this.$patch(ie=>{Pn(ie,H)})}:sm;function S(){o.stop(),h=[],f=[],s._s.delete(t)}function b(K,N){return function(){Fa(s);const H=Array.from(arguments),ie=[],L=[];function ce(le){ie.push(le)}function be(le){L.push(le)}Ms(f,{args:H,name:K,store:k,after:ce,onError:be});let Me;try{Me=N.apply(this&&this.$id===t?this:k,H)}catch(le){throw Ms(L,le),le}return Me instanceof Promise?Me.then(le=>(Ms(ie,le),le)).catch(le=>(Ms(L,le),Promise.reject(le))):(Ms(ie,Me),Me)}}const j={_p:s,$id:t,$onAction:Uf.bind(null,f),$patch:T,$reset:D,$subscribe(K,N={}){const H=Uf(h,K,N.detached,()=>ie()),ie=o.run(()=>qr(()=>s.state.value[t],L=>{(N.flush==="sync"?u:l)&&K({storeId:t,type:Kr.direct,events:p},L)},Pn({},c,N)));return H},$dispose:S},k=Vt(j);s._s.set(t,k);const J=(s._a&&s._a.runWithContext||OI)(()=>s._e.run(()=>(o=Lp()).run(e)));for(const K in J){const N=J[K];if(Ke(N)&&!xI(N)||vs(N))i||(m&&DI(N)&&(Ke(N)?N.value=m[K]:wl(N,m[K])),s.state.value[t][K]=N);else if(typeof N=="function"){const H=b(K,N);J[K]=H,a.actions[K]=N}}return Pn(k,J),Pn(te(k),J),Object.defineProperty(k,"$state",{get:()=>s.state.value[t],set:K=>{T(N=>{Pn(N,K)})}}),s._p.forEach(K=>{Pn(k,o.run(()=>K({store:k,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(k.$state,m),l=!0,u=!0,k}function MI(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Y_();return a=a||(l?Mt(nm,null):null),a&&Fa(a),a=tm,a._s.has(s)||(i?rm(s,e,r,a):LI(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $s=typeof document<"u";function FI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function kc(t,e){const n={};for(const s in e){const r=e[s];n[s]=$t(r)?r.map(t):t(r)}return n}const Gr=()=>{},$t=Array.isArray,im=/#/g,$I=/&/g,UI=/\//g,BI=/=/g,VI=/\?/g,om=/\+/g,jI=/%5B/g,qI=/%5D/g,am=/%5E/g,HI=/%60/g,cm=/%7B/g,zI=/%7C/g,lm=/%7D/g,KI=/%20/g;function bu(t){return encodeURI(""+t).replace(zI,"|").replace(jI,"[").replace(qI,"]")}function GI(t){return bu(t).replace(cm,"{").replace(lm,"}").replace(am,"^")}function El(t){return bu(t).replace(om,"%2B").replace(KI,"+").replace(im,"%23").replace($I,"%26").replace(HI,"`").replace(cm,"{").replace(lm,"}").replace(am,"^")}function WI(t){return El(t).replace(BI,"%3D")}function QI(t){return bu(t).replace(im,"%23").replace(VI,"%3F")}function YI(t){return t==null?"":QI(t).replace(UI,"%2F")}function ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JI=/\/$/,XI=t=>t.replace(JI,"");function Nc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=nT(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ci(o)}}function ZI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&or(e.matched[s],n.matched[r])&&um(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function um(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tT(t[n],e[n]))return!1;return!0}function tT(t,e){return $t(t)?Vf(t,e):$t(e)?Vf(e,t):t===e}function Vf(t,e){return $t(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function nT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Wr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wr||(Wr={}));function sT(t){if(!t)if($s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XI(t)}const rT=/^[^#]+#/;function iT(t,e){return t.replace(rT,"#")+e}function oT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $a=()=>({left:window.scrollX,top:window.scrollY});function aT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=oT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jf(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function cT(t,e){Il.set(t,e)}function lT(t){const e=Il.get(t);return Il.delete(t),e}let uT=()=>location.protocol+"//"+location.host;function hm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Bf(c,"")}return Bf(n,t)+s+r}function hT(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=hm(t,location),m=n.value,v=e.value;let T=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}T=v?f.position-v.position:0}else s(p);r.forEach(D=>{D(n.value,m,{delta:T,type:li.pop,direction:T?T>0?Wr.forward:Wr.back:Wr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:$a()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function qf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?$a():null}}function fT(t){const{history:e,location:n}=window,s={value:hm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uT()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=Ie({},e.state,qf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ie({},r.value,e.state,{forward:c,scroll:$a()});i(u.current,u,!0);const h=Ie({},qf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function dT(t){t=sT(t);const e=fT(t),n=hT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ie({location:"",base:t,go:s,createHref:iT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),dT(t)}function gT(t){return typeof t=="string"||t&&typeof t=="object"}function fm(t){return typeof t=="string"||typeof t=="symbol"}const dm=Symbol("");var Hf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hf||(Hf={}));function ar(t,e){return Ie(new Error,{type:t,[dm]:!0},e)}function cn(t,e){return t instanceof Error&&dm in t&&(e==null||!!(t.type&e))}const zf="[^/]+?",mT={sensitive:!1,strict:!1,start:!0,end:!0},yT=/[.+*?^${}()[\]/\\]/g;function vT(t,e){const n=Ie({},mT,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(yT,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:v,optional:T,regexp:D}=f;i.push({name:m,repeatable:v,optional:T});const S=D||zf;if(S!==zf){p+=10;try{new RegExp(`(${S})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+j.message)}}let b=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(b=T&&l.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),r+=b,p+=20,T&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:T}=p,D=m in l?l[m]:"";if($t(D)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=$t(D)?D.join("/"):D;if(!S)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function _T(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=_T(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Kf(s))return 1;if(Kf(r))return-1}return r.length-s.length}function Kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wT={type:0,value:""},ET=/[a-zA-Z0-9_]/;function IT(t){if(!t)return[[]];if(t==="/")return[[wT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:ET.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function TT(t,e,n){const s=vT(IT(t.path),n),r=Ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ST(t,e){const n=[],s=new Map;e=Qf({strict:!1,end:!0,sensitive:!1},e);function r(h){return s.get(h)}function i(h,f,p){const m=!p,v=CT(h);v.aliasOf=p&&p.record;const T=Qf(e,h),D=[v];if("alias"in h){const j=typeof h.alias=="string"?[h.alias]:h.alias;for(const k of j)D.push(Ie({},v,{components:p?p.record.components:v.components,path:k,aliasOf:p?p.record:v}))}let S,b;for(const j of D){const{path:k}=j;if(f&&k[0]!=="/"){const A=f.record.path,J=A[A.length-1]==="/"?"":"/";j.path=f.record.path+(k&&J+k)}if(S=TT(j,f,T),p?p.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),m&&h.name&&!Wf(S)&&o(h.name)),gm(S)&&c(S),v.children){const A=v.children;for(let J=0;J<A.length;J++)i(A[J],S,p&&p.children[J])}p=p||S}return b?()=>{o(b)}:Gr}function o(h){if(fm(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const f=RT(h,n);n.splice(f,0,h),h.record.name&&!Wf(h)&&s.set(h.record.name,h)}function l(h,f){let p,m={},v,T;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw ar(1,{location:h});T=p.record.name,m=Ie(Gf(f.params,p.keys.filter(b=>!b.optional).concat(p.parent?p.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&Gf(h.params,p.keys.map(b=>b.name))),v=p.stringify(m)}else if(h.path!=null)v=h.path,p=n.find(b=>b.re.test(v)),p&&(m=p.parse(v),T=p.record.name);else{if(p=f.name?s.get(f.name):n.find(b=>b.re.test(f.path)),!p)throw ar(1,{location:h,currentLocation:f});T=p.record.name,m=Ie({},f.params,h.params),v=p.stringify(m)}const D=[];let S=p;for(;S;)D.unshift(S.record),S=S.parent;return{name:T,path:v,params:m,matched:D,meta:AT(D)}}t.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Gf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function CT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AT(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Qf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function RT(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;pm(t,e[i])<0?s=i:n=i+1}const r=kT(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function kT(t){let e=t;for(;e=e.parent;)if(gm(e)&&pm(t,e)===0)return e}function gm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function NT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(om," "),o=i.indexOf("="),a=ci(o<0?i:i.slice(0,o)),c=o<0?null:ci(i.slice(o+1));if(a in e){let l=e[a];$t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yf(t){let e="";for(let n in t){const s=t[n];if(n=WI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(s)?s.map(i=>i&&El(i)):[s&&El(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function OT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=$t(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const PT=Symbol(""),Jf=Symbol(""),Au=Symbol(""),Ru=Symbol(""),Tl=Symbol("");function Pr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(ar(4,{from:n,to:e})):f instanceof Error?c(f):gT(f)?c(ar(2,{from:e,to:f})):(o&&s.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(f=>c(f))})}function Oc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(DT(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Mn(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=FI(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&Mn(p,n,s,o,a,r)()}))}}return i}function DT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xf(t){const e=Mt(Au),n=Mt(Ru),s=Se(()=>{const c=Yt(t.to);return e.resolve(c)}),r=Se(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(or.bind(null,u));if(f>-1)return f;const p=Zf(c[l-2]);return l>1&&Zf(u)===p&&h[h.length-1].path!==p?h.findIndex(or.bind(null,c[l-2])):f}),i=Se(()=>r.value>-1&&FT(n.params,s.value.params)),o=Se(()=>r.value>-1&&r.value===n.matched.length-1&&um(n.params,s.value.params));function a(c={}){return MT(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Gr):Promise.resolve()}return{route:s,href:Se(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const xT=Er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xf,setup(t,{slots:e}){const n=Vt(Xf(t)),{options:s}=Mt(Au),r=Se(()=>({[ed(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ed(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),LT=xT;function MT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!$t(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ed=(t,e,n)=>t??e??n,$T=Er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Tl),r=Se(()=>t.route||s.value),i=Mt(Jf,0),o=Se(()=>{let l=Yt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Se(()=>r.value.matched[o.value]);To(Jf,Se(()=>o.value+1)),To(PT,a),To(Tl,r);const c=fn();return qr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!or(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return td(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,T=hs(f,Ie({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return td(n.default,{Component:T,route:l})||T}}});function td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mm=$T;function UT(t){const e=ST(t.routes,t),n=t.parseQuery||NT,s=t.stringifyQuery||Yf,r=t.history,i=Pr(),o=Pr(),a=Pr(),c=u_(kn);let l=kn;$s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,w=>""+w),h=kc.bind(null,YI),f=kc.bind(null,ci);function p(w,B){let $,z;return fm(w)?($=e.getRecordMatcher(w),z=B):z=w,e.addRoute(z,$)}function m(w){const B=e.getRecordMatcher(w);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(w=>w.record)}function T(w){return!!e.getRecordMatcher(w)}function D(w,B){if(B=Ie({},B||c.value),typeof w=="string"){const g=Nc(n,w,B.path),y=e.resolve({path:g.path},B),I=r.createHref(g.fullPath);return Ie(g,y,{params:f(y.params),hash:ci(g.hash),redirectedFrom:void 0,href:I})}let $;if(w.path!=null)$=Ie({},w,{path:Nc(n,w.path,B.path).path});else{const g=Ie({},w.params);for(const y in g)g[y]==null&&delete g[y];$=Ie({},w,{params:h(g)}),B.params=h(B.params)}const z=e.resolve($,B),ve=w.hash||"";z.params=u(f(z.params));const xe=ZI(s,Ie({},w,{hash:GI(ve),path:z.path})),d=r.createHref(xe);return Ie({fullPath:xe,hash:ve,query:s===Yf?OT(w.query):w.query||{}},z,{redirectedFrom:void 0,href:d})}function S(w){return typeof w=="string"?Nc(n,w,c.value.path):Ie({},w)}function b(w,B){if(l!==w)return ar(8,{from:B,to:w})}function j(w){return J(w)}function k(w){return j(Ie(S(w),{replace:!0}))}function A(w){const B=w.matched[w.matched.length-1];if(B&&B.redirect){const{redirect:$}=B;let z=typeof $=="function"?$(w):$;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=S(z):{path:z},z.params={}),Ie({query:w.query,hash:w.hash,params:z.path!=null?{}:w.params},z)}}function J(w,B){const $=l=D(w),z=c.value,ve=w.state,xe=w.force,d=w.replace===!0,g=A($);if(g)return J(Ie(S(g),{state:typeof g=="object"?Ie({},ve,g.state):ve,force:xe,replace:d}),B||$);const y=$;y.redirectedFrom=B;let I;return!xe&&eT(s,z,$)&&(I=ar(16,{to:y,from:z}),jt(z,z,!0,!1)),(I?Promise.resolve(I):H(y,z)).catch(_=>cn(_)?cn(_,2)?_:bn(_):ye(_,y,z)).then(_=>{if(_){if(cn(_,2))return J(Ie({replace:d},S(_.to),{state:typeof _.to=="object"?Ie({},ve,_.to.state):ve,force:xe}),B||y)}else _=L(y,z,!0,d,ve);return ie(y,z,_),_})}function K(w,B){const $=b(w,B);return $?Promise.reject($):Promise.resolve()}function N(w){const B=xs.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(w):w()}function H(w,B){let $;const[z,ve,xe]=BT(w,B);$=Oc(z.reverse(),"beforeRouteLeave",w,B);for(const g of z)g.leaveGuards.forEach(y=>{$.push(Mn(y,w,B))});const d=K.bind(null,w,B);return $.push(d),st($).then(()=>{$=[];for(const g of i.list())$.push(Mn(g,w,B));return $.push(d),st($)}).then(()=>{$=Oc(ve,"beforeRouteUpdate",w,B);for(const g of ve)g.updateGuards.forEach(y=>{$.push(Mn(y,w,B))});return $.push(d),st($)}).then(()=>{$=[];for(const g of xe)if(g.beforeEnter)if($t(g.beforeEnter))for(const y of g.beforeEnter)$.push(Mn(y,w,B));else $.push(Mn(g.beforeEnter,w,B));return $.push(d),st($)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),$=Oc(xe,"beforeRouteEnter",w,B,N),$.push(d),st($))).then(()=>{$=[];for(const g of o.list())$.push(Mn(g,w,B));return $.push(d),st($)}).catch(g=>cn(g,8)?g:Promise.reject(g))}function ie(w,B,$){a.list().forEach(z=>N(()=>z(w,B,$)))}function L(w,B,$,z,ve){const xe=b(w,B);if(xe)return xe;const d=B===kn,g=$s?history.state:{};$&&(z||d?r.replace(w.fullPath,Ie({scroll:d&&g&&g.scroll},ve)):r.push(w.fullPath,ve)),c.value=w,jt(w,B,$,d),bn()}let ce;function be(){ce||(ce=r.listen((w,B,$)=>{if(!to.listening)return;const z=D(w),ve=A(z);if(ve){J(Ie(ve,{replace:!0}),z).catch(Gr);return}l=z;const xe=c.value;$s&&cT(jf(xe.fullPath,$.delta),$a()),H(z,xe).catch(d=>cn(d,12)?d:cn(d,2)?(J(d.to,z).then(g=>{cn(g,20)&&!$.delta&&$.type===li.pop&&r.go(-1,!1)}).catch(Gr),Promise.reject()):($.delta&&r.go(-$.delta,!1),ye(d,z,xe))).then(d=>{d=d||L(z,xe,!1),d&&($.delta&&!cn(d,8)?r.go(-$.delta,!1):$.type===li.pop&&cn(d,20)&&r.go(-1,!1)),ie(z,xe,d)}).catch(Gr)}))}let Me=Pr(),le=Pr(),ge;function ye(w,B,$){bn(w);const z=le.list();return z.length?z.forEach(ve=>ve(w,B,$)):console.error(w),Promise.reject(w)}function an(){return ge&&c.value!==kn?Promise.resolve():new Promise((w,B)=>{Me.add([w,B])})}function bn(w){return ge||(ge=!w,be(),Me.list().forEach(([B,$])=>w?$(w):B()),Me.reset()),w}function jt(w,B,$,z){const{scrollBehavior:ve}=t;if(!$s||!ve)return Promise.resolve();const xe=!$&&lT(jf(w.fullPath,0))||(z||!$)&&history.state&&history.state.scroll||null;return wr().then(()=>ve(w,B,xe)).then(d=>d&&aT(d)).catch(d=>ye(d,w,B))}const vt=w=>r.go(w);let Ds;const xs=new Set,to={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:v,resolve:D,options:t,push:j,replace:k,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:an,install(w){const B=this;w.component("RouterLink",LT),w.component("RouterView",mm),w.config.globalProperties.$router=B,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),$s&&!Ds&&c.value===kn&&(Ds=!0,j(r.location).catch(ve=>{}));const $={};for(const ve in kn)Object.defineProperty($,ve,{get:()=>c.value[ve],enumerable:!0});w.provide(Au,B),w.provide(Ru,Wp($)),w.provide(Tl,c);const z=w.unmount;xs.add(w),w.unmount=function(){xs.delete(w),xs.size<1&&(l=kn,ce&&ce(),ce=null,c.value=kn,Ds=!1,ge=!1),z()}}};function st(w){return w.reduce((B,$)=>B.then(()=>N($)),Promise.resolve())}return to}function BT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>or(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>or(l,c))||r.push(c))}return[n,s,r]}function VT(t){return Mt(Ru)}const jT="/hh-easy-reach/logout.png",qT="modulepreload",HT=function(t){return"/hh-easy-reach/"+t},nd={},sd=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=HT(i),i in nd)return;nd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":qT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/**
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
 */const ym=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ym(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new KT;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GT=function(t){const e=ym(t);return vm.encodeByteArray(e,!0)},Qo=function(t){return GT(t).replace(/\./g,"")},_m=function(t){try{return vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QT=()=>WT().__FIREBASE_DEFAULTS__,YT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_m(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return QT()||YT()||JT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wm=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Em=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},Im=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function eS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function nS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rS(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iS(){try{return typeof indexedDB=="object"}catch{return!1}}function oS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const aS="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aS,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,a,s)}}function cS(t,e){return t.replace(lS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const lS=/\{\$([^}]+)}/g;function uS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(rd(i)&&rd(o)){if(!Yo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
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
 */function Pi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hS(t,e){const n=new fS(t,e);return n.subscribe.bind(n)}class fS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Pc),r.error===void 0&&(r.error=Pc),r.complete===void 0&&(r.complete=Pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class Ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cs="[DEFAULT]";/**
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
 */class pS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ZT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mS(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(t){return t===cs?void 0:t}function mS(t){return t.instantiationMode==="EAGER"}/**
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
 */class yS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const vS={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},_S=pe.INFO,wS={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},ES=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=wS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=ES,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const IS=(t,e)=>e.some(n=>t instanceof n);let id,od;function TS(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,Sl=new WeakMap,Sm=new WeakMap,Dc=new WeakMap,Ou=new WeakMap;function CS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),Ou.set(e,t),e}function bS(t){if(Sl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AS(t){Cl=t(Cl)}function RS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xc(this),e,...n);return Sm.set(s,e.sort?e.sort():[e]),Hn(s)}:SS().includes(t)?function(...e){return t.apply(xc(this),e),Hn(Tm.get(this))}:function(...e){return Hn(t.apply(xc(this),e))}}function kS(t){return typeof t=="function"?RS(t):(t instanceof IDBTransaction&&bS(t),IS(t,TS())?new Proxy(t,Cl):t)}function Hn(t){if(t instanceof IDBRequest)return CS(t);if(Dc.has(t))return Dc.get(t);const e=kS(t);return e!==t&&(Dc.set(t,e),Ou.set(e,t)),e}const xc=t=>Ou.get(t);function NS(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const OS=["get","getKey","getAll","getAllKeys","count"],PS=["put","add","delete","clear"],Lc=new Map;function ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=PS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||OS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Lc.set(e,i),i}AS(t=>({...t,get:(e,n,s)=>ad(e,n)||t.get(e,n,s),has:(e,n)=>!!ad(e,n)||t.has(e,n)}));/**
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
 */class DS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",cd="0.9.13";/**
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
 */const Ss=new Nu("@firebase/app"),LS="@firebase/app-compat",MS="@firebase/analytics-compat",FS="@firebase/analytics",$S="@firebase/app-check-compat",US="@firebase/app-check",BS="@firebase/auth",VS="@firebase/auth-compat",jS="@firebase/database",qS="@firebase/database-compat",HS="@firebase/functions",zS="@firebase/functions-compat",KS="@firebase/installations",GS="@firebase/installations-compat",WS="@firebase/messaging",QS="@firebase/messaging-compat",YS="@firebase/performance",JS="@firebase/performance-compat",XS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eC="@firebase/storage",tC="@firebase/storage-compat",nC="@firebase/firestore",sC="@firebase/firestore-compat",rC="firebase",iC="9.23.0";/**
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
 */const Al="[DEFAULT]",oC={[bl]:"fire-core",[LS]:"fire-core-compat",[FS]:"fire-analytics",[MS]:"fire-analytics-compat",[US]:"fire-app-check",[$S]:"fire-app-check-compat",[BS]:"fire-auth",[VS]:"fire-auth-compat",[jS]:"fire-rtdb",[qS]:"fire-rtdb-compat",[HS]:"fire-fn",[zS]:"fire-fn-compat",[KS]:"fire-iid",[GS]:"fire-iid-compat",[WS]:"fire-fcm",[QS]:"fire-fcm-compat",[YS]:"fire-perf",[JS]:"fire-perf-compat",[XS]:"fire-rc",[ZS]:"fire-rc-compat",[eC]:"fire-gcs",[tC]:"fire-gcs-compat",[nC]:"fire-fst",[sC]:"fire-fst-compat","fire-js":"fire-js",[rC]:"fire-js-all"};/**
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
 */const Jo=new Map,Rl=new Map;function aC(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cr(t){const e=t.name;if(Rl.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Rl.set(e,t);for(const n of Jo.values())aC(n,t);return!0}function Pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Oi("app","Firebase",cC);/**
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
 */class lC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ir=iC;function Cm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Al,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw zn.create("bad-app-name",{appName:String(r)});if(n||(n=Em()),!n)throw zn.create("no-options");const i=Jo.get(r);if(i){if(Yo(n,i.options)&&Yo(s,i.config))return i;throw zn.create("duplicate-app",{appName:r})}const o=new yS(r);for(const c of Rl.values())o.addComponent(c);const a=new lC(n,s,o);return Jo.set(r,a),a}function bm(t=Al){const e=Jo.get(t);if(!e&&t===Al&&Em())return Cm();if(!e)throw zn.create("no-app",{appName:t});return e}function Kn(t,e,n){var s;let r=(s=oC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}cr(new Ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uC="firebase-heartbeat-database",hC=1,ui="firebase-heartbeat-store";let Mc=null;function Am(){return Mc||(Mc=NS(uC,hC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function fC(t){try{return await(await Am()).transaction(ui).objectStore(ui).get(Rm(t))}catch(e){if(e instanceof Cn)Ss.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function ld(t,e){try{const s=(await Am()).transaction(ui,"readwrite");await s.objectStore(ui).put(e,Rm(t)),await s.done}catch(n){if(n instanceof Cn)Ss.warn(n.message);else{const s=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(s.message)}}}function Rm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dC=1024,pC=30*24*60*60*1e3;class gC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ud();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=pC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ud(),{heartbeatsToSend:n,unsentEntries:s}=mC(this._heartbeatsCache.heartbeats),r=Qo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ud(){return new Date().toISOString().substring(0,10)}function mC(t,e=dC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),hd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iS()?oS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hd(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vC(t){cr(new Ts("platform-logger",e=>new DS(e),"PRIVATE")),cr(new Ts("heartbeat",e=>new gC(e),"PRIVATE")),Kn(bl,cd,t),Kn(bl,cd,"esm2017"),Kn("fire-js","")}vC("");function Du(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=km,Nm=new Oi("auth","Firebase",km());/**
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
 */const Xo=new Nu("@firebase/auth");function wC(t,...e){Xo.logLevel<=pe.WARN&&Xo.warn(`Auth (${Ir}): ${t}`,...e)}function Oo(t,...e){Xo.logLevel<=pe.ERROR&&Xo.error(`Auth (${Ir}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw xu(t,...e)}function Xt(t,...e){return xu(t,...e)}function Om(t,e,n){const s=Object.assign(Object.assign({},_C()),{[e]:n});return new Oi("auth","Firebase",s).create(e,{appName:t.name})}function EC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rn(t,"argument-error"),Om(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nm.create(t,...e)}function se(t,e,...n){if(!t)throw xu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function vn(t,e){t||dn(e)}/**
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
 */function kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IC(){return fd()==="http:"||fd()==="https:"}function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IC()||nS()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=tS()||sS()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lu(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bC=new Di(3e4,6e4);function Dm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,n,s,r={}){return xm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pm.fetch()(Lm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},CC),e);try{const r=new RC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw lo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Om(t,u,l);rn(t,u)}}catch(r){if(r instanceof Cn)throw r;rn(t,"network-request-failed",{message:String(r)})}}async function AC(t,e,n,s,r={}){const i=await xi(t,e,n,s,r);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Lu(t.config,r):`${t.config.apiScheme}://${r}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),bC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Xt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function kC(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function NC(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(t,e=!1){const n=It(t),s=await n.getIdToken(e),r=Mu(s);se(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qr(Fc(r.auth_time)),issuedAtTime:Qr(Fc(r.iat)),expirationTime:Qr(Fc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function Mu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=_m(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function PC(t){const e=Mu(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cn&&DC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await hi(t,NC(n,{idToken:s}));se(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FC(i.providerUserInfo):[],a=MC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LC(t){const e=It(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function FC(t){return t.map(e=>{var{providerId:n}=e,s=Du(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function $C(t,e){const n=await xm(t,{},async()=>{const s=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Lm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await $C(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fi;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(se(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Nn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _s{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _s(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hi(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:j,isAnonymous:k,providerData:A,stsTokenManager:J}=n;se(b&&J,e,"internal-error");const K=fi.fromJSON(this.name,J);se(typeof b=="string",e,"internal-error"),Nn(h,e.name),Nn(f,e.name),se(typeof j=="boolean",e,"internal-error"),se(typeof k=="boolean",e,"internal-error"),Nn(p,e.name),Nn(m,e.name),Nn(v,e.name),Nn(T,e.name),Nn(D,e.name),Nn(S,e.name);const N=new _s({uid:b,auth:e,email:f,emailVerified:j,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:K,createdAt:D,lastLoginAt:S});return A&&Array.isArray(A)&&(N.providerData=A.map(H=>Object.assign({},H))),T&&(N._redirectEventId=T),N}static async _fromIdTokenResponse(e,n,s=!1){const r=new fi;r.updateFromServerResponse(n);const i=new _s({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zo(i),i}}/**
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
 */const dd=new Map;function pn(t){vn(t instanceof Function,"Expected a class definition");let e=dd.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dd.set(t,e),e)}/**
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
 */class Fm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fm.type="NONE";const pd=Fm;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Po(this.userKey,r.apiKey,i),this.fullPersistenceKey=Po("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_s._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qs(pn(pd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||pn(pd);const o=Po(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_s._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Qs(i,e,s))}}/**
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
 */function gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jm(e))return"Blackberry";if(qm(e))return"Webos";if(Fu(e))return"Safari";if((e.includes("chrome/")||Um(e))&&!e.includes("edge/"))return"Chrome";if(Vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $m(t=dt()){return/firefox\//i.test(t)}function Fu(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Um(t=dt()){return/crios\//i.test(t)}function Bm(t=dt()){return/iemobile/i.test(t)}function Vm(t=dt()){return/android/i.test(t)}function jm(t=dt()){return/blackberry/i.test(t)}function qm(t=dt()){return/webos/i.test(t)}function Ua(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UC(t=dt()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return rS()&&document.documentMode===10}function Hm(t=dt()){return Ua(t)||Vm(t)||qm(t)||jm(t)||/windows phone/i.test(t)||Bm(t)}function VC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zm(t,e=[]){let n;switch(t){case"Browser":n=gd(dt());break;case"Worker":n=`${gd(dt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ir}/${s}`}async function Km(t,e){return xi(t,"GET","/v2/recaptchaConfig",Dm(t,e))}function md(t){return t!==void 0&&t.enterprise!==void 0}class Gm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function jC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Xt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",jC().appendChild(s)})}function qC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const HC="https://www.google.com/recaptcha/enterprise.js?render=",zC="recaptcha-enterprise",KC="NO_RECAPTCHA";class GC{constructor(e){this.type=zC,this.auth=Li(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Km(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;md(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(KC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&md(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wm(HC+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class WC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class QC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new WC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?It(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await Km(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Gm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new GC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return It(t)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=hS(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function YC(t,e){const n=Pu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Yo(i,e??{}))return r;rn(r,"already-initialized")}return n.initialize({options:e})}function JC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function XC(t,e,n){const s=Li(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Qm(e),{host:o,port:a}=ZC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||eb()}function Qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZC(t){const e=Qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:vd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:vd(o)}}}function vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function Ys(t,e){return AC(t,"POST","/v1/accounts:signInWithIdp",Dm(t,e))}/**
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
 */const tb="http://localhost";class Cs extends Ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Du(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Cs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
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
 */class $u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends $u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends Mi{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class hn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Un extends Mi{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Bn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _s._fromIdTokenResponse(e,s,r),o=_d(s);return new lr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=_d(s);return new lr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function _d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends Cn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ea(e,n,s,r)}}function Jm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,s):i})}async function nb(t,e,n=!1){const s=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lr._forOperation(t,"link",s)}/**
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
 */async function sb(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await hi(t,Jm(s,r,e,t),n);se(i.idToken,s,"internal-error");const o=Mu(i.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),lr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(s,"user-mismatch"),i}}/**
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
 */async function rb(t,e,n=!1){const s="signIn",r=await Jm(t,s,e),i=await lr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function ib(t,e,n,s){return It(t).onIdTokenChanged(e,n,s)}function ob(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function ab(t,e,n,s){return It(t).onAuthStateChanged(e,n,s)}function Xm(t){return It(t).signOut()}const ta="__sak";/**
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
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cb(){const t=dt();return Fu(t)||Ua(t)}const lb=1e3,ub=10;class ey extends Zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cb()&&VC(),this.fallbackToPolling=Hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);BC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ub):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ey.type="LOCAL";const hb=ey;/**
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
 */class ty extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ty.type="SESSION";const ny=ty;/**
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
 */function fb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ba(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await fb(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
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
 */function Uu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class db{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Uu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zt(){return window}function pb(t){Zt().location.href=t}/**
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
 */function sy(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function gb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yb(){return sy()?self:null}/**
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
 */const ry="firebaseLocalStorageDb",vb=1,na="firebaseLocalStorage",iy="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function _b(){const t=indexedDB.deleteDatabase(ry);return new Fi(t).toPromise()}function Nl(){const t=indexedDB.open(ry,vb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(na,{keyPath:iy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(na)?e(s):(s.close(),await _b(),e(await Nl()))})})}async function wd(t,e,n){const s=Va(t,!0).put({[iy]:e,value:n});return new Fi(s).toPromise()}async function wb(t,e){const n=Va(t,!1).get(e),s=await new Fi(n).toPromise();return s===void 0?null:s.value}function Ed(t,e){const n=Va(t,!0).delete(e);return new Fi(n).toPromise()}const Eb=800,Ib=3;class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ib)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(yb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gb(),!this.activeServiceWorker)return;this.sender=new db(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await wd(e,ta,"1"),await Ed(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>wb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Va(r,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oy.type="LOCAL";const Tb=oy;new Di(3e4,6e4);/**
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
 */function ay(t,e){return e?pn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bu extends Ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sb(t){return rb(t.auth,new Bu(t),t.bypassAuthState)}function Cb(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),sb(n,new Bu(t),t.bypassAuthState)}async function bb(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),nb(n,new Bu(t),t.bypassAuthState)}/**
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
 */class cy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sb;case"linkViaPopup":case"linkViaRedirect":return bb;case"reauthViaPopup":case"reauthViaRedirect":return Cb;default:rn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ab=new Di(2e3,1e4);async function Rb(t,e,n){const s=Li(t);EC(t,e,$u);const r=ay(s,n);return new fs(s,"signInViaPopup",e,r).executeNotNull()}class fs extends cy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ab.get())};e()}}fs.currentPopupAction=null;/**
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
 */const kb="pendingRedirect",Do=new Map;class Nb extends cy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const s=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(t,e){const n=xb(e),s=Db(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Pb(t,e){Do.set(t._key(),e)}function Db(t){return pn(t._redirectPersistence)}function xb(t){return Po(kb,t.config.apiKey,t.name)}async function Lb(t,e,n=!1){const s=Li(t),r=ay(s,e),o=await new Nb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Mb=10*60*1e3;class Fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ly(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}}function Id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
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
 */async function Ub(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
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
 */const Bb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vb=/^https?/;async function jb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ub(t);for(const n of e)try{if(qb(n))return}catch{}rn(t,"unauthorized-domain")}function qb(t){const e=kl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Vb.test(n))return!1;if(Bb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Hb=new Di(3e4,6e4);function Td(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zb(t){return new Promise((e,n)=>{var s,r,i;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),n(Xt(t,"network-request-failed"))},timeout:Hb.get()})}if(!((r=(s=Zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=qC("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Wm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xo=null,e})}let xo=null;function Kb(t){return xo=xo||zb(t),xo}/**
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
 */const Gb=new Di(5e3,15e3),Wb="__/auth/iframe",Qb="emulator/auth/iframe",Yb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xb(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lu(e,Qb):`https://${t.config.authDomain}/${Wb}`,s={apiKey:e.apiKey,appName:t.name,v:Ir},r=Jb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Pi(s).slice(1)}`}async function Zb(t){const e=await Kb(t),n=Zt().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:Xb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},Gb.get());function c(){Zt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const eA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tA=500,nA=600,sA="_blank",rA="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(t,e,n,s=tA,r=nA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=dt().toLowerCase();n&&(a=Um(l)?sA:n),$m(l)&&(e=e||rA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(UC(l)&&a!=="_self")return oA(e||"",a),new Sd(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch{}return new Sd(h)}function oA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const aA="__/auth/handler",cA="emulator/auth/handler",lA=encodeURIComponent("fac");async function Cd(t,e,n,s,r,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ir,eventId:r};if(e instanceof $u){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${lA}=${encodeURIComponent(c)}`:"";return`${uA(t)}?${Pi(a).slice(1)}${l}`}function uA({config:t}){return t.emulator?Lu(t,cA):`https://${t.authDomain}/${aA}`}/**
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
 */const $c="webStorageSupport";class hA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ny,this._completeRedirectFn=Lb,this._overrideRedirectResult=Pb}async _openPopup(e,n,s,r){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cd(e,n,s,kl(),r);return iA(e,o,Uu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Cd(e,n,s,kl(),r);return pb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Zb(e),s=new Fb(e);return n.register("authEvent",r=>(se(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hm()||Fu()||Ua()}}const fA=hA;var bd="@firebase/auth",Ad="0.23.2";/**
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
 */class dA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gA(t){cr(new Ts("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zm(t)},l=new QC(s,r,i,c);return JC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cr(new Ts("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(s=>new dA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(bd,Ad,pA(t)),Kn(bd,Ad,"esm2017")}/**
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
 */const mA=5*60,yA=Im("authIdTokenMaxAge")||mA;let Rd=null;const vA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yA)return;const r=n==null?void 0:n.token;Rd!==r&&(Rd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sa(t=bm()){const e=Pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YC(t,{popupRedirectResolver:fA,persistence:[Tb,hb,ny]}),s=Im("authTokenSyncURL");if(s){const i=vA(s);ob(n,i,()=>i(n.currentUser)),ib(n,o=>i(o))}const r=wm("auth");return r&&XC(n,`http://${r}`),n}gA("Browser");const Vu=MI("user",{state:()=>({user:null}),getters:{userDisplayName(t){if(t.user)return t.user.displayName},userEmail(t){if(t.user)return t.user.email}},actions:{setUser(t){this.user=t}}});var _A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,ju=ju||{},ee=_A||self;function ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $i(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wA(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++EA)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),EA=0;function IA(t,e,n){return t.call.apply(t.bind,arguments)}function TA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=IA:ut=TA,ut.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ns(){this.s=this.s,this.o=this.o}var SA=0;ns.prototype.s=!1;ns.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SA!=0)&&wA(this)};ns.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function kd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ja(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var CA=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function di(t){return/^[\s\xa0]*$/.test(t)}function qa(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return qa().indexOf(t)!=-1}function Hu(t){return Hu[" "](t),t}Hu[" "]=function(){};function bA(t,e){var n=v2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var AA=Gt("Opera"),ur=Gt("Trident")||Gt("MSIE"),hy=Gt("Edge"),Ol=hy||ur,fy=Gt("Gecko")&&!(qa().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),RA=qa().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function dy(){var t=ee.document;return t?t.documentMode:void 0}var Pl;e:{var Bc="",Vc=function(){var t=qa();if(fy)return/rv:([^\);]+)(\)|;)/.exec(t);if(hy)return/Edge\/([\d\.]+)/.exec(t);if(ur)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RA)return/WebKit\/(\S+)/.exec(t);if(AA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vc&&(Bc=Vc?Vc[1]:""),ur){var jc=dy();if(jc!=null&&jc>parseFloat(Bc)){Pl=String(jc);break e}}Pl=Bc}var Dl;if(ee.document&&ur){var Nd=dy();Dl=Nd||parseInt(Pl,10)||void 0}else Dl=void 0;var kA=Dl;function pi(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fy){e:{try{Hu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:NA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pi.$.h.call(this)}}Je(pi,ht);var NA={2:"touch",3:"pen",4:"mouse"};pi.prototype.h=function(){pi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ui="closure_listenable_"+(1e6*Math.random()|0),OA=0;function PA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++OA,this.fa=this.ia=!1}function Ha(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function DA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function py(t){const e={};for(const n in t)e[n]=t[n];return e}const Od="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gy(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Od.length;i++)n=Od[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function za(t){this.src=t,this.g={},this.h=0}za.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ll(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function xl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=uy(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ll(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),qc={};function my(t,e,n,s,r){if(s&&s.once)return vy(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)my(t,e[i],n,s,r);return null}return n=Qu(n),t&&t[Ui]?t.O(e,n,$i(s)?!!s.capture:!!s,r):yy(t,e,n,!1,s,r)}function yy(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=$i(r)?!!r.capture:!!r,a=Wu(t);if(a||(t[Ku]=a=new za(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=xA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)CA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xA(){function t(n){return e.call(t.src,t.listener,n)}const e=LA;return t}function vy(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vy(t,e[i],n,s,r);return null}return n=Qu(n),t&&t[Ui]?t.P(e,n,$i(s)?!!s.capture:!!s,r):yy(t,e,n,!0,s,r)}function _y(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_y(t,e[i],n,s,r);else s=$i(s)?!!s.capture:!!s,n=Qu(n),t&&t[Ui]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ll(i,n,s,r),-1<n&&(Ha(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ll(e,n,s,r)),(n=-1<t?e[t]:null)&&Gu(n))}function Gu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ui])xl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wu(e))?(xl(n,t),n.h==0&&(n.src=null,e[Ku]=null)):Ha(t)}}}function wy(t){return t in qc?qc[t]:qc[t]="on"+t}function LA(t,e){if(t.fa)t=!0;else{e=new pi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Gu(t),t=n.call(s,e)}return t}function Wu(t){return t=t[Ku],t instanceof za?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qu(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function Ye(){ns.call(this),this.i=new za(this),this.S=this,this.J=null}Je(Ye,ns);Ye.prototype[Ui]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){_y(this,t,e,n,s)};function tt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var r=e;e=new ht(s,t),gy(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ho(o,s,!0,e)&&r}if(o=e.g=t,r=ho(o,s,!0,e)&&r,r=ho(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ho(o,s,!1,e)&&r}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ha(n[s]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ho(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&xl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Yu=ee.JSON.stringify;class MA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function FA(){var t=Ju;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $A{constructor(){this.h=this.g=null}add(e,n){const s=Ey.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ey=new MA(()=>new UA,t=>t.reset());class UA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VA(t){ee.setTimeout(()=>{throw t},0)}let gi,mi=!1,Ju=new $A,Iy=()=>{const t=ee.Promise.resolve(void 0);gi=()=>{t.then(jA)}};var jA=()=>{for(var t;t=FA();){try{t.h.call(t.g)}catch(n){VA(n)}var e=Ey;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mi=!1};function Ka(t,e){Ye.call(this),this.h=t||1,this.g=e||ee,this.j=ut(this.qb,this),this.l=Date.now()}Je(Ka,Ye);M=Ka.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(Xu(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Ka.$.N.call(this),Xu(this),delete this.g};function Zu(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function Ty(t){t.g=Zu(()=>{t.g=null,t.i&&(t.i=!1,Ty(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qA extends ns{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ty(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(t){ns.call(this),this.h=t,this.g={}}Je(yi,ns);var Pd=[];function Sy(t,e,n,s){Array.isArray(n)||(n&&(Pd[0]=n.toString()),n=Pd);for(var r=0;r<n.length;r++){var i=my(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Cy(t){zu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gu(e)},t),t.g={}}yi.prototype.N=function(){yi.$.N.call(this),Cy(this)};yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ga(){this.g=!0}Ga.prototype.Ea=function(){this.g=!1};function HA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function zA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Vs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GA(t,n)+(s?" "+s:"")})}function KA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ga.prototype.info=function(){};function GA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Yu(n)}catch{return e}}var Ns={},Dd=null;function Wa(){return Dd=Dd||new Ye}Ns.Ta="serverreachability";function by(t){ht.call(this,Ns.Ta,t)}Je(by,ht);function vi(t){const e=Wa();tt(e,new by(e))}Ns.STAT_EVENT="statevent";function Ay(t,e){ht.call(this,Ns.STAT_EVENT,t),this.stat=e}Je(Ay,ht);function mt(t){const e=Wa();tt(e,new Ay(e,t))}Ns.Ua="timingevent";function Ry(t,e){ht.call(this,Ns.Ua,t),this.size=e}Je(Ry,ht);function Bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ky={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eh(){}eh.prototype.h=null;function xd(t){return t.h||(t.h=t.i())}function Ny(){}var Vi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function th(){ht.call(this,"d")}Je(th,ht);function nh(){ht.call(this,"c")}Je(nh,ht);var Ml;function Ya(){}Je(Ya,eh);Ya.prototype.g=function(){return new XMLHttpRequest};Ya.prototype.i=function(){return{}};Ml=new Ya;function ji(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new yi(this),this.P=WA,t=Ol?125:void 0,this.V=new Ka(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var WA=45e3,Fl={},ra={};M=ji.prototype;M.setTimeout=function(t){this.P=t};function $l(t,e,n){t.L=1,t.v=Xa(_n(e)),t.s=n,t.S=!0,Py(t,null)}function Py(t,e){t.G=Date.now(),qi(t),t.A=_n(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),By(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Oy,t.g=av(t.l,n?e:null,!t.s),0<t.O&&(t.M=new qA(ut(t.Pa,t,t.g),t.O)),Sy(t.U,t.g,"readystatechange",t.nb),e=t.I?py(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),vi(),HA(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ol||this.g&&(this.h.h||this.g.ja()||$d(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?vi(3):vi(2)),Ja(this);var n=this.g.da();this.ca=n;t:if(Dy(this)){var s=$d(this.g);t="";var r=s.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),Yr(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!di(a)){var l=a;break t}}l=null}if(n=l)Vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,n);else{this.i=!1,this.o=3,mt(12),ds(this),Yr(this);break e}}this.S?(xy(this,u,o),Ol&&this.i&&u==3&&(Sy(this.U,this.V,"tick",this.mb),this.V.start())):(Vs(this.j,this.m,o,null),Ul(this,o)),u==4&&ds(this),this.i&&!this.J&&(u==4?sv(this.l,this):(this.i=!1,qi(this)))}else g2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),ds(this),Yr(this)}}}catch{}finally{}};function Dy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function xy(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=QA(t,n),r==ra){e==4&&(t.o=4,mt(14),s=!1),Vs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fl){t.o=4,mt(15),Vs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Vs(t.j,t.m,r,null),Ul(t,r);Dy(t)&&r!=ra&&r!=Fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ch(e),e.M=!0,mt(11))):(Vs(t.j,t.m,n,"[Invalid Chunked Response]"),ds(t),Yr(t))}M.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.C<e.length&&(Ja(this),xy(this,t,e),this.i&&t!=4&&qi(this))}};function QA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ra:(n=Number(e.substring(n,s)),isNaN(n)?Fl:(s+=1,s+n>e.length?ra:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,ds(this)};function qi(t){t.Y=Date.now()+t.P,Ly(t,t.P)}function Ly(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bi(ut(t.lb,t),e)}function Ja(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KA(this.j,this.A),this.L!=2&&(vi(),mt(17)),ds(this),this.o=2,Yr(this)):Ly(this,this.Y-t)};function Yr(t){t.l.H==0||t.J||sv(t.l,t)}function ds(t){Ja(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xu(t.V),Cy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Bl(n.i,t))){if(!t.K&&Bl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)aa(n),tc(n);else break e;ah(n),mt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bi(ut(n.ib,n),6e3));if(1>=qy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ps(n,11)}else if((t.K||n.g==t)&&aa(n),!di(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(sh(i,i.h),i.h=null))}if(s.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,ke(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=ov(s,s.J?s.pa:null,s.Y),o.K){Hy(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Ja(a),qi(a)),s.g=o}else tv(s);0<n.j.length&&nc(n)}else l[0]!="stop"&&l[0]!="close"||ps(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ps(n,7):oh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}vi(4)}catch{}}function YA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function JA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function My(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JA(t),s=YA(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ws(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ws){this.h=t.h,ia(this,t.j),this.s=t.s,this.g=t.g,oa(this,t.m),this.l=t.l;var e=t.i,n=new _i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ld(this,n),this.o=t.o}else t&&(e=String(t).match(Fy))?(this.h=!1,ia(this,e[1]||"",!0),this.s=Mr(e[2]||""),this.g=Mr(e[3]||"",!0),oa(this,e[4]),this.l=Mr(e[5]||"",!0),Ld(this,e[6]||"",!0),this.o=Mr(e[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}ws.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fr(e,Md,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fr(e,Md,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fr(n,n.charAt(0)=="/"?t2:e2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fr(n,s2)),t.join("")};function _n(t){return new ws(t)}function ia(t,e,n){t.j=n?Mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ld(t,e,n){e instanceof _i?(t.i=e,r2(t.i,t.h)):(n||(e=Fr(e,n2)),t.i=new _i(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Xa(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Md=/[#\/\?@]/g,e2=/[#\?:]/g,t2=/[#\?]/g,n2=/[#\?@]/g,s2=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ss(t){t.g||(t.g=new Map,t.h=0,t.i&&XA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=_i.prototype;M.add=function(t,e){ss(this),this.i=null,t=Tr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $y(t,e){ss(t),e=Tr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Uy(t,e){return ss(t),e=Tr(t,e),t.g.has(e)}M.forEach=function(t,e){ss(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.ta=function(){ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){ss(this);let e=[];if(typeof t=="string")Uy(this,t)&&(e=e.concat(this.g.get(Tr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ss(this),this.i=null,t=Tr(this,t),Uy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function By(t,e,n){$y(t,e),0<n.length&&(t.i=null,t.g.set(Tr(t,e),qu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Tr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function r2(t,e){e&&!t.j&&(ss(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($y(this,s),By(this,r,n))},t)),t.j=e}var i2=class{constructor(t,e){this.g=t,this.map=e}};function Vy(t){this.l=t||o2,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var o2=10;function jy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qy(t){return t.h?1:t.g?t.g.size:0}function Bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sh(t,e){t.g?t.g.add(e):t.h=e}function Hy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vy.prototype.cancel=function(){if(this.i=zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qu(t.i)}var a2=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function c2(){this.g=new a2}function l2(t,e,n){const s=n||"";try{My(t,function(r,i){let o=r;$i(r)&&(o=Yu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function u2(t,e){const n=new Ga;if(ee.Image){const s=new Image;s.onload=uo(fo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=uo(fo,n,s,"TestLoadImage: error",!1,e),s.onabort=uo(fo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=uo(fo,n,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function fo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hi(t){this.l=t.fc||null,this.j=t.ob||!1}Je(Hi,eh);Hi.prototype.g=function(){return new Za(this.l,this.j)};Hi.prototype.i=function(t){return function(){return t}}({});function Za(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Za,Ye);var rh=0;M=Za.prototype;M.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=rh};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ky(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ky(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):wi(this),this.readyState==3&&Ky(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,zi(this))};M.Ya=function(t){this.g&&(this.response=t,zi(this))};M.ka=function(){this.g&&zi(this)};function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var h2=ee.JSON.parse;function $e(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gy,this.L=this.M=!1}Je($e,Ye);var Gy="",f2=/^https?$/i,d2=["POST","PUT"];M=$e.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?xd(this.u):xd(Ml),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Fd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ee.FormData&&t instanceof ee.FormData,!(0<=uy(d2,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yy(this),0<this.B&&((this.L=p2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Zu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fd(this,i)}};function p2(t){return ur&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Fd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wy(t),ec(t)}function Wy(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),ec(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),$e.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Qy(this):this.kb())};M.kb=function(){Qy(this)};function Qy(t){if(t.h&&typeof ju<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)Zu(t.La,0,t);else if(tt(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Fy)[1]||null;!r&&ee.self&&ee.self.location&&(r=ee.self.location.protocol.slice(0,-1)),s=!f2.test(r?r.toLowerCase():"")}n=s}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var i=2<Wt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Wy(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){Yy(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Yy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),h2(e)}};function $d(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function g2(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(di(t[s]))continue;var n=BA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}DA(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jy(t){let e="";return zu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ih(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Jy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xy(t){this.Ga=0,this.j=[],this.l=new Ga,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dr("baseRetryDelayMs",5e3,t),this.hb=Dr("retryDelaySeedMs",1e4,t),this.eb=Dr("forwardChannelMaxRetries",2,t),this.xa=Dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Vy(t&&t.concurrentRequestLimit),this.Ja=new c2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Xy.prototype;M.ra=8;M.H=1;function oh(t){if(Zy(t),t.H==3){var e=t.W++,n=_n(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Ki(t,n),e=new ji(t,t.l,e),e.L=2,e.v=Xa(_n(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=av(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qi(e)}iv(t)}function tc(t){t.g&&(ch(t),t.g.cancel(),t.g=null)}function Zy(t){tc(t),t.u&&(ee.clearTimeout(t.u),t.u=null),aa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function nc(t){if(!jy(t.i)&&!t.m){t.m=!0;var e=t.Na;gi||Iy(),mi||(gi(),mi=!0),Ju.add(e,t),t.C=0}}function m2(t,e){return qy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bi(ut(t.Na,t,e),rv(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ji(this,this.l,t);let i=this.s;if(this.U&&(i?(i=py(i),gy(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ev(this,r,e),n=_n(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Ki(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Jy(i)))+"&"+e:this.o&&ih(n,this.o,i)),sh(this.i,r),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),r.aa=!0,$l(r,n,null)):$l(r,n,e),this.H=2}}else this.H==3&&(t?Ud(this,t):this.j.length==0||jy(this.i)||Ud(this))};function Ud(t,e){var n;e?n=e.m:n=t.W++;const s=_n(t.I);ke(s,"SID",t.K),ke(s,"RID",n),ke(s,"AID",t.V),Ki(t,s),t.o&&t.s&&ih(s,t.o,t.s),n=new ji(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ev(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),sh(t.i,n),$l(n,s,e)}function Ki(t,e){t.na&&zu(t.na,function(n,s){ke(e,s,n)}),t.h&&My({},function(n,s){ke(e,s,n)})}function ev(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ut(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{l2(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function tv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;gi||Iy(),mi||(gi(),mi=!0),Ju.add(e,t),t.A=0}}function ah(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bi(ut(t.Ma,t),rv(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,nv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bi(ut(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),tc(this),nv(this))};function ch(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function nv(t){t.g=new ji(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Ki(t,e),t.o&&t.s&&ih(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Xa(_n(e)),n.s=null,n.S=!0,Py(n,t)}M.ib=function(){this.v!=null&&(this.v=null,tc(this),ah(this),mt(19))};function aa(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function sv(t,e){var n=null;if(t.g==e){aa(t),ch(t),t.g=null;var s=2}else if(Bl(t.i,e))n=e.F,Hy(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Wa(),tt(s,new Ry(s,n)),nc(t)}else tv(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&m2(t,e)||s==2&&ah(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ps(t,5);break;case 4:ps(t,10);break;case 3:ps(t,6);break;default:ps(t,2)}}}function rv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ps(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ut(t.pb,t);n||(n=new ws("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||ia(n,"https"),Xa(n)),u2(n.toString(),s)}else mt(2);t.H=0,t.h&&t.h.za(e),iv(t),Zy(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function iv(t){if(t.H=0,t.ma=[],t.h){const e=zy(t.i);(e.length!=0||t.j.length!=0)&&(kd(t.ma,e),kd(t.ma,t.j),t.i.i.length=0,qu(t.j),t.j.length=0),t.h.ya()}}function ov(t,e,n){var s=n instanceof ws?_n(n):new ws(n);if(s.g!="")e&&(s.g=e+"."+s.g),oa(s,s.m);else{var r=ee.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ws(null);s&&ia(i,s),e&&(i.g=e),r&&oa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ke(s,n,e),ke(s,"VER",t.ra),Ki(t,s),s}function av(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new $e(new Hi({ob:!0})):new $e(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function cv(){}M=cv.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function ca(){if(ur&&!(10<=Number(kA)))throw Error("Environmental error: no available transport.")}ca.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Ye.call(this),this.g=new Xy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!di(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!di(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}Je(At,Ye);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ov(t,null,t.Y),nc(t)};At.prototype.close=function(){oh(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yu(t),t=n);e.j.push(new i2(e.fb++,t)),e.H==3&&nc(e)};At.prototype.N=function(){this.g.h=null,delete this.j,oh(this.g),delete this.g,At.$.N.call(this)};function lv(t){th.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(lv,th);function uv(){nh.call(this),this.status=1}Je(uv,nh);function Sr(t){this.g=t}Je(Sr,cv);Sr.prototype.Ba=function(){tt(this.g,"a")};Sr.prototype.Aa=function(t){tt(this.g,new lv(t))};Sr.prototype.za=function(t){tt(this.g,new uv)};Sr.prototype.ya=function(){tt(this.g,"b")};function y2(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(Ut,y2);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)zc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){zc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){zc(this,s),r=0;break}}this.h=r,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var v2={};function lh(t){return-128<=t&&128>t?bA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Js;if(0>t)return et(Qt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Vl;return new Te(e,0)}function hv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return et(hv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),s=Js,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Qt(Math.pow(e,i)),s=s.R(i).add(Qt(o))):(s=s.R(n),s=s.add(Qt(o)))}return s}var Vl=4294967296,Js=lh(0),jl=lh(1),Bd=lh(16777216);M=Te.prototype;M.ea=function(){if(kt(this))return-et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Vl+s)*e,e*=Vl}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(kt(this))return"-"+et(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,s="";;){var r=ua(n,e).g;n=la(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,gn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}M.X=function(t){return t=la(this,t),kt(t)?-1:gn(t)?0:1};function et(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(jl)}M.abs=function(){return kt(this)?et(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function la(t,e){return t.add(et(e))}M.R=function(t){if(gn(this)||gn(t))return Js;if(kt(this))return kt(t)?et(this).R(et(t)):et(et(this).R(t));if(kt(t))return et(this.R(et(t)));if(0>this.X(Bd)&&0>t.X(Bd))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,po(n,2*s+2*r),n[2*s+2*r+1]+=i*c,po(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,po(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,po(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function po(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xr(t,e){this.g=t,this.h=e}function ua(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new xr(Js,Js);if(kt(t))return e=ua(et(t),e),new xr(et(e.g),et(e.h));if(kt(e))return e=ua(t,et(e)),new xr(et(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jl,s=e;0>=s.X(t);)n=Vd(n),s=Vd(s);var r=Fs(n,1),i=Fs(s,1);for(s=Fs(s,2),n=Fs(n,2);!gn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Fs(s,1),n=Fs(n,1)}return e=la(t,r.R(e)),new xr(r,e)}for(r=Js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Qt(n),o=i.R(e);kt(o)||0<o.X(t);)n-=s,i=Qt(n),o=i.R(e);gn(i)&&(i=jl),r=r.add(i),t=la(t,o)}return new xr(r,t)}M.gb=function(t){return ua(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function Vd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function Fs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(r,t.h)}ca.prototype.createWebChannel=ca.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;ky.COMPLETE="complete";Ny.EventType=Vi;Vi.OPEN="a";Vi.CLOSE="b";Vi.ERROR="c";Vi.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Qt;Te.fromString=hv;var _2=function(){return new ca},w2=function(){return Wa()},Kc=Qa,E2=ky,I2=Ns,jd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},T2=Hi,go=Ny,S2=$e,C2=Ut,Xs=Te;const qd="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Cr="9.23.0";/**
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
 */const bs=new Nu("@firebase/firestore");function Hd(){return bs.logLevel}function q(t,...e){if(bs.logLevel<=pe.DEBUG){const n=e.map(uh);bs.debug(`Firestore (${Cr}): ${t}`,...n)}}function wn(t,...e){if(bs.logLevel<=pe.ERROR){const n=e.map(uh);bs.error(`Firestore (${Cr}): ${t}`,...n)}}function hr(t,...e){if(bs.logLevel<=pe.WARN){const n=e.map(uh);bs.warn(`Firestore (${Cr}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function De(t,e){t||X()}function oe(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class A2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R2{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new fv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new it(e)}}class k2{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class N2{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new k2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new O2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function D2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class dv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=D2(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function fr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new ze(0,0))}static max(){return new ne(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Ei{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const x2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ei{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return x2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function L2(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(s===1e9?new ze(n+1,0):new ze(n,s));return new Yn(r,Q.empty(),e)}function M2(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yn(ne.min(),Q.empty(),-1)}static max(){return new Yn(ne.max(),Q.empty(),-1)}}function F2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const $2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==$2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}hh.ct=-1;function sc(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function B2(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ze.RED,this.left=r??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ze(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kd(this.data.getIterator())}getIteratorFrom(e){return new Kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ft(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new gv("Invalid base64 string: "+r):r}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(De(!!t),typeof t=="string"){let e=0;const n=V2.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dh(t){const e=t.mapValue.fields.__previous_value__;return fh(e)?dh(e):e}function Ii(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class j2{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:q2(t)?9007199254740991:10:X()}function on(t,e){if(t===e)return!0;const n=Rs(t);if(n!==Rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Jn(s.timestampValue),o=Jn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return As(s.bytesValue).isEqual(As(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?ha(i)===ha(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return fr(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(zd(i)!==zd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!on(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Si(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function dr(t,e){if(t===e)return 0;const n=Rs(t),s=Rs(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gd(t.timestampValue,e.timestampValue);case 4:return Gd(Ii(t),Ii(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=As(r),a=As(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me(Ve(r.latitude),Ve(i.latitude));return o!==0?o:me(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=dr(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===yo.mapValue&&i===yo.mapValue)return 0;if(r===yo.mapValue)return 1;if(i===yo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const f=dr(o[a[u]],c[l[u]]);if(f!==0)return f}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Jn(t),s=Jn(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function pr(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Jn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ql(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ql(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Wd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hl(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function Qd(t){return!!t&&"nullValue"in t}function Yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lo(t){return!!t&&"mapValue"in t}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=lt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Jr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){br(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Nt(Jr(this.value))}}function mv(t){const e=[];return br(t.fields,(n,s)=>{const r=new lt([n]);if(Lo(s)){const i=mv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
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
 */class ot{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,ne.min(),ne.min(),ne.min(),Nt.empty(),0)}static newFoundDocument(e,n,s,r){return new ot(e,1,n,ne.min(),s,r,0)}static newNoDocument(e,n){return new ot(e,2,n,ne.min(),ne.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,ne.min(),ne.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Jd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=dr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function H2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yv{}class je extends yv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new K2(e,n,s):n==="array-contains"?new Q2(e,s):n==="in"?new Y2(e,s):n==="not-in"?new J2(e,s):n==="array-contains-any"?new X2(e,s):new je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new G2(e,s):new W2(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(dr(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(dr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends yv{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Bt(e,n)}matches(e){return vv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vv(t){return t.op==="and"}function _v(t){return z2(t)&&vv(t)}function z2(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function zl(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+pr(t.value);if(_v(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function wv(t,e){return t instanceof je?function(n,s){return s instanceof je&&n.op===s.op&&n.field.isEqual(s.field)&&on(n.value,s.value)}(t,e):t instanceof Bt?function(n,s){return s instanceof Bt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&wv(i,s.filters[o]),!0):!1}(t,e):void X()}function Ev(t){return t instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${pr(e.value)}`}(t):t instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ev).join(" ,")+"}"}(t):"Filter"}class K2 extends je{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class G2 extends je{constructor(e,n){super(e,"in",n),this.keys=Iv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W2 extends je{constructor(e,n){super(e,"not-in",n),this.keys=Iv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Iv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class Q2 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&Si(n.arrayValue,this.value)}}class Y2 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class J2 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class X2 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Si(this.value.arrayValue,s))}}/**
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
 */class Z2{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Zd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Z2(t,e,n,s,r,i,o)}function gh(t){const e=oe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>zl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pr(s)).join(",")),e.dt=n}return e.dt}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!H2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xd(t.startAt,e.startAt)&&Xd(t.endAt,e.endAt)}function Kl(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ar{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function eR(t,e,n,s,r,i,o,a){return new Ar(t,e,n,s,r,i,o,a)}function Tv(t){return new Ar(t)}function ep(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Sv(t){return t.collectionGroup!==null}function er(t){const e=oe(t);if(e.wt===null){e.wt=[];const n=rc(e),s=yh(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Zs(n)),e.wt.push(new Zs(lt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Zs(lt.keyField(),i))}}}return e.wt}function En(t){const e=oe(t);if(!e._t)if(e.limitType==="F")e._t=Zd(e.path,e.collectionGroup,er(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of er(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Zs(i.field,o))}const s=e.endAt?new fa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new fa(e.startAt.position,e.startAt.inclusive):null;e._t=Zd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Gl(t,e){e.getFirstInequalityField(),rc(t);const n=t.filters.concat([e]);return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function da(t,e,n){return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return mh(En(t),En(e))&&t.limitType===e.limitType}function Cv(t){return`${gh(En(t))}|lt:${t.limitType}`}function Wl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ev(s)).join(", ")}]`),sc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pr(s)).join(",")),`Target(${n})`}(En(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of er(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Jd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,er(n),s)||n.endAt&&!function(r,i,o){const a=Jd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,er(n),s))}(t,e)}function tR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bv(t){return(e,n)=>{let s=!1;for(const r of er(t)){const i=nR(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function nR(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?dr(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return pv(this.inner)}size(){return this.innerSize}}/**
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
 */const sR=new Le(Q.comparator);function In(){return sR}const Av=new Le(Q.comparator);function $r(...t){let e=Av;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=Av;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function gs(){return Xr()}function kv(){return Xr()}function Xr(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const rR=new Le(Q.comparator),iR=new ft(Q.comparator);function he(...t){let e=iR;for(const n of t)e=e.add(n);return e}const oR=new ft(me);function aR(){return oR}/**
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
 */function Nv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function Ov(t){return{integerValue:""+t}}function cR(t,e){return B2(e)?Ov(e):Nv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ac{constructor(){this._=void 0}}function lR(t,e,n){return t instanceof pa?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&fh(r)&&(r=dh(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ci?Dv(t,e):t instanceof bi?xv(t,e):function(s,r){const i=Pv(s,r),o=tp(i)+tp(s.gt);return Hl(i)&&Hl(s.gt)?Ov(o):Nv(s.serializer,o)}(t,e)}function uR(t,e,n){return t instanceof Ci?Dv(t,e):t instanceof bi?xv(t,e):n}function Pv(t,e){return t instanceof ga?Hl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class pa extends ac{}class Ci extends ac{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Lv(e);for(const s of t.elements)n.some(r=>on(r,s))||n.push(s);return{arrayValue:{values:n}}}class bi extends ac{constructor(e){super(),this.elements=e}}function xv(t,e){let n=Lv(e);for(const s of t.elements)n=n.filter(r=>!on(r,s));return{arrayValue:{values:n}}}class ga extends ac{constructor(e,n){super(),this.serializer=e,this.gt=n}}function tp(t){return Ve(t.integerValue||t.doubleValue)}function Lv(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ci&&s instanceof Ci||n instanceof bi&&s instanceof bi?fr(n.elements,s.elements,on):n instanceof ga&&s instanceof ga?on(n.gt,s.gt):n instanceof pa&&s instanceof pa}(t.transform,e.transform)}class fR{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vh(t.key,Ft.none()):new Qi(t.key,t.data,Ft.none());{const n=t.data,s=Nt.empty();let r=new ft(lt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Os(t.key,s,new Lt(r.toArray()),Ft.none())}}function dR(t,e,n){t instanceof Qi?function(s,r,i){const o=s.value.clone(),a=sp(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Os?function(s,r,i){if(!Mo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=sp(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Fv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Zr(t,e,n,s){return t instanceof Qi?function(r,i,o,a){if(!Mo(r.precondition,i))return o;const c=r.value.clone(),l=rp(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Os?function(r,i,o,a){if(!Mo(r.precondition,i))return o;const c=rp(r.fieldTransforms,a,i),l=i.data;return l.setAll(Fv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Mo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function pR(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Pv(s.transform,r||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(s.field,i))}return n||null}function np(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fr(n,s,(r,i)=>hR(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends cc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Os extends cc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function sp(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,uR(o,a,n[r]))}return s}function rp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,lR(i,o,e))}return s}class vh extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gR extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mR{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&dR(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Mv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(n,s)=>np(n,s))&&fr(this.baseMutations,e.baseMutations,(n,s)=>np(n,s))}}class _h{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=rR;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _h(e,n,s,r)}}/**
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
 */class yR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class vR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,fe;function _R(t){switch(t){default:return X();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function $v(t){if(t===void 0)return wn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Be.OK:return E.OK;case Be.CANCELLED:return E.CANCELLED;case Be.UNKNOWN:return E.UNKNOWN;case Be.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Be.INTERNAL:return E.INTERNAL;case Be.UNAVAILABLE:return E.UNAVAILABLE;case Be.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Be.NOT_FOUND:return E.NOT_FOUND;case Be.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Be.ABORTED:return E.ABORTED;case Be.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Be.DATA_LOSS:return E.DATA_LOSS;default:return X()}}(fe=Be||(Be={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vo}static getOrCreateInstance(){return vo===null&&(vo=new wh),vo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vo=null;/**
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
 */function wR(){return new TextEncoder}/**
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
 */const ER=new Xs([4294967295,4294967295],0);function ip(t){const e=wR().encode(t),n=new C2;return n.update(e),new Uint8Array(n.digest())}function op(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xs([n,s],0),new Xs([r,i],0)]}class Eh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ur(`Invalid padding: ${n}`);if(s<0)throw new Ur(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Xs.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Xs.fromNumber(s)));return r.compare(ER)===1&&(r=new Xs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=ip(e),[s,r]=op(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=ip(e),[s,r]=op(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lc(ne.min(),r,new Le(me),In(),he())}}class Yi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Yi(s,n,he(),he(),he())}}/**
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
 */class Fo{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Uv{constructor(e,n){this.targetId=e,this.Vt=n}}class Bv{constructor(e,n,s=pt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ap{constructor(){this.St=0,this.Dt=lp(),this.Ct=pt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=he(),n=he(),s=he();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Yi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=lp()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class IR{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=In(),this.zt=cp(),this.Wt=new Le(me)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Kl(o))if(r===0){const a=new Q(o.path);this.Yt(s,a,ot.newNoDocument(a,ne.min()))}else De(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=wh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,p,m,v,T,D;const S={localCacheCount:u,existenceFilterCount:h.count},b=h.unchangedNames;return b&&(S.bloomFilter={applied:l===0,hashCount:(f=b==null?void 0:b.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(m=(p=b==null?void 0:b.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(D=(T=b==null?void 0:b.bits)===null||T===void 0?void 0:T.padding)!==null&&D!==void 0?D:0}),S}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=As(i).toUint8Array()}catch(u){if(u instanceof gv)return hr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Eh(c,o,a)}catch(u){return hr(u instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Kl(a.target)){const c=new Q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ot.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=he();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new lc(e,n,this.Wt,this.jt,s);return this.jt=In(),this.zt=cp(),this.Wt=new Le(me),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ap,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ft(me),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ap),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function cp(){return new Le(Q.comparator)}function lp(){return new Le(Q.comparator)}const TR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CR=(()=>({and:"AND",or:"OR"}))();class bR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AR(t,e){return ma(t,e.toTimestamp())}function en(t){return De(!!t),ne.fromTimestamp(function(e){const n=Jn(e);return new ze(n.seconds,n.nanos)}(t))}function Ih(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jv(t){const e=Ne.fromString(t);return De(Kv(e)),e}function Yl(t,e){return Ih(t.databaseId,e.path)}function Gc(t,e){const n=jv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(qv(n))}function Jl(t,e){return Ih(t.databaseId,e)}function RR(t){const e=jv(t);return e.length===4?Ne.emptyPath():qv(e)}function Xl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function up(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),pt.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),pt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:$v(c.code);return new U(l,c.message||"")}(o);n=new Bv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Gc(t,s.document.name),i=en(s.document.updateTime),o=s.document.createTime?en(s.document.createTime):ne.min(),a=new Nt({mapValue:{fields:s.document.fields}}),c=ot.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Fo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Gc(t,s.document),i=s.readTime?en(s.readTime):ne.min(),o=ot.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Gc(t,s.document),i=s.removedTargetIds||[];n=new Fo([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new vR(r,i),a=s.targetId;n=new Uv(a,o)}}return n}function NR(t,e){let n;if(e instanceof Qi)n={update:up(t,e.key,e.value)};else if(e instanceof vh)n={delete:Yl(t,e.key)};else if(e instanceof Os)n={update:up(t,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof gR))return X();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof pa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ci)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ga)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:AR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function OR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?en(s.updateTime):en(r);return i.isEqual(ne.min())&&(i=en(r)),new fR(i,s.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[Jl(t,e.path)]}}function DR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return zv(Bt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Us(u.field),direction:MR(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ql(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function xR(t){let e=RR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Hv(u);return h instanceof Bt&&_v(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Zs(Bs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new fa(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new fa(f,h)}(n.endAt)),eR(e,r,o,i,a,"F",c,l)}function LR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bs(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bs(e.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bs(e.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bs(e.unaryFilter.field);return je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return je.create(Bs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(n=>Hv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function MR(t){return TR[t]}function FR(t){return SR[t]}function $R(t){return CR[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Bs(t){return lt.fromServerFormat(t.fieldPath)}function zv(t){return t instanceof je?function(e){if(e.op==="=="){if(Yd(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NAN"}};if(Qd(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yd(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NOT_NAN"}};if(Qd(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(e.field),op:FR(e.op),value:e.value}}}(t):t instanceof Bt?function(e){const n=e.getFilters().map(s=>zv(s));return n.length===1?n[0]:{compositeFilter:{op:$R(e.op),filters:n}}}(t):X()}function UR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vn{constructor(e,n,s,r,i=ne.min(),o=ne.min(),a=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BR{constructor(e){this.fe=e}}function VR(t){const e=xR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?da(e,e.limit,"L"):e}/**
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
 */class jR{constructor(){this.rn=new qR}addToCollectionParentIndex(e,n){return this.rn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Yn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class qR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ft(Ne.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ft(Ne.comparator)).toArray()}}/**
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
 */class gr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new gr(0)}static Mn(){return new gr(-1)}}/**
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
 */class HR{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class KR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Zr(s.mutation,r,Lt.empty(),ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=In();const o=Xr(),a=Xr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Os)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Zr(u.mutation,l,u.mutation.getFieldMask(),ze.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new zR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Xr();let r=new Le((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Lt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||he()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=kv();u.forEach(f=>{if(!i.has(f)){const p=Mv(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(gs());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:Rv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let r=$r();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=$r();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new Ar(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ot.newInvalidDocument(l)))});let o=$r();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Zr(l.mutation,c,Lt.empty(),ze.now()),oc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class GR{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return R.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:en(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:VR(s.bundledQuery),readTime:en(s.readTime)}}(n)),R.resolve()}}/**
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
 */class WR{constructor(){this.overlays=new Le(Q.comparator),this.ls=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gs();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=gs(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=gs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yR(n,s));let i=this.ls.get(n);i===void 0&&(i=he(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Th{constructor(){this.fs=new ft(We.ds),this.ws=new ft(We._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new We(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new We(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new Q(new Ne([])),s=new We(n,e),r=new We(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Q(new Ne([])),s=new We(n,e),r=new We(n,e+1);let i=he();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class We{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Q.comparator(e.key,n.key)||me(e.As,n.As)}static _s(e,n){return me(e.As,n.As)||Q.comparator(e.key,n.key)}}/**
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
 */class QR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ft(We.ds)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mR(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new We(n,0),r=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ft(me);return n.forEach(r=>{const i=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),R.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Q.isDocumentKey(i)||(i=i.child(""));const o=new We(new Q(i),0);let a=new ft(me);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),R.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return R.forEach(n.mutations,r=>{const i=new We(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new We(n,0),r=this.Rs.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YR{constructor(e){this.Ds=e,this.docs=new Le(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let s=In();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ot.newInvalidDocument(r))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=In();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||F2(M2(u),s)<=0||(r.has(u.key)||oc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Cs(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new JR(this)}getSize(e){return R.resolve(this.size)}}class JR extends HR{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class XR{constructor(e){this.persistence=e,this.xs=new Rr(n=>gh(n),mh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Th,this.targetCount=0,this.Ms=gr.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),R.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new gr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Fn(n),R.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.ks.containsKey(n))}}/**
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
 */class ZR{constructor(e,n){this.$s={},this.overlays={},this.Os=new hh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new XR(this),this.indexManager=new jR,this.remoteDocumentCache=function(s){return new YR(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new BR(n),this.qs=new GR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new QR(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){q("MemoryPersistence","Starting transaction:",e);const r=new ek(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return R.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class ek extends U2{constructor(e){super(),this.currentSequenceNumber=e}}class Sh{constructor(e){this.persistence=e,this.Qs=new Th,this.js=null}static zs(e){return new Sh(e)}get Ws(){if(this.js)return this.js;throw X()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),R.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ws,s=>{const r=Q.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,ne.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return R.or([()=>R.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Ch{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=he(),r=he();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ch(e,n.fromCache,s,r)}}/**
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
 */class tk{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(ep(n))return R.resolve(null);let s=En(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=da(n,null,"F"),s=En(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=he(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,da(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return ep(n)||r.isEqual(ne.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Hd()<=pe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wl(n)),this.Wi(e,o,n,L2(r,-1)))})}ji(e,n){let s=new ft(bv(e));return n.forEach((r,i)=>{oc(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Hd()<=pe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Wl(n)),this.Ui.getDocumentsMatchingQuery(e,n,Yn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nk{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Le(me),this.Yi=new Rr(i=>gh(i),mh),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KR(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function sk(t,e,n,s){return new nk(t,e,n,s)}async function Gv(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=he();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function rk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=R.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);De(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Wv(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function ik(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(pt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,v,T){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,p,u)&&a.push(n.Bs.updateTargetData(i,p))});let c=In(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ok(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(ne.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function ok(t,e,n){let s=he(),r=he();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=In();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function ak(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ck(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Vn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Zl(t,e,n){const s=oe(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wi(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function hp(t,e,n){const s=oe(t);let r=ne.min(),i=he();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.Yi.get(l);return h!==void 0?R.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,En(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:ne.min(),n?i:he())).next(a=>(lk(s,tR(e),a),{documents:a,ir:i})))}function lk(t,e,n){let s=t.Xi.get(e)||ne.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class fp{constructor(){this.activeTargetIds=aR()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uk{constructor(){this.Hr=new fp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new fp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hk{Yr(e){}shutdown(){}}/**
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
 */class dp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _o=null;function Wc(){return _o===null?_o=268435456+Math.round(2147483648*Math.random()):_o++,"0x"+_o.toString(16)}/**
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
 */const fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dk{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const rt="WebChannelConnection";class pk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Wc(),a=this.To(e,n);q("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(q("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw hr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=fk[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Wc();return new Promise((o,a)=>{const c=new S2;c.setWithCredentials(!0),c.listenOnce(E2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kc.NO_ERROR:const u=c.getResponseJson();q(rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Kc.TIMEOUT:q(rt,`RPC '${e}' ${i} timed out`),a(new U(E.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const h=c.getStatus();if(q(rt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(p.status);a(new U(m,p.message))}else a(new U(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(E.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(rt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);q(rt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Wc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_2(),a=w2(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new T2({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");q(rt,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const m=new dk({ro:T=>{p?q(rt,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(f||(q(rt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),q(rt,`RPC '${e}' stream ${r} sending:`,T),h.send(T))},oo:()=>h.close()}),v=(T,D,S)=>{T.listen(D,b=>{try{S(b)}catch(j){setTimeout(()=>{throw j},0)}})};return v(h,go.EventType.OPEN,()=>{p||q(rt,`RPC '${e}' stream ${r} transport opened.`)}),v(h,go.EventType.CLOSE,()=>{p||(p=!0,q(rt,`RPC '${e}' stream ${r} transport closed`),m.wo())}),v(h,go.EventType.ERROR,T=>{p||(p=!0,hr(rt,`RPC '${e}' stream ${r} transport errored:`,T),m.wo(new U(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,go.EventType.MESSAGE,T=>{var D;if(!p){const S=T.data[0];De(!!S);const b=S,j=b.error||((D=b[0])===null||D===void 0?void 0:D.error);if(j){q(rt,`RPC '${e}' stream ${r} received error:`,j);const k=j.status;let A=function(K){const N=Be[K];if(N!==void 0)return $v(N)}(k),J=j.message;A===void 0&&(A=E.INTERNAL,J="Unknown error status: "+k+" with message "+j.message),p=!0,m.wo(new U(A,J)),h.close()}else q(rt,`RPC '${e}' stream ${r} received:`,S),m._o(S)}}),v(a,I2.STAT_EVENT,T=>{T.stat===jd.PROXY?q(rt,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===jd.NOPROXY&&q(rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function Qc(){return typeof document<"u"?document:null}/**
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
 */function uc(t){return new bR(t,!0)}/**
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
 */class Qv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Yv{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Qv(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new U(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gk extends Yv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=kR(this.serializer,e),s=function(r){if(!("targetChange"in r))return ne.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ne.min():i.readTime?en(i.readTime):ne.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Xl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Kl(a)?{documents:PR(r,a)}:{query:DR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Vv(r,i.resumeToken);const c=Ql(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(ne.min())>0){o.readTime=ma(r,i.snapshotVersion.toTimestamp());const c=Ql(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=LR(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.Wo(n)}}class mk extends Yv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=OR(e.writeResults,e.commitTime),s=en(e.commitTime);return this.listener.cu(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Xl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>NR(this.serializer,s))};this.Wo(n)}}/**
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
 */class yk extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(E.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(E.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class vk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(wn(n),this.mu=!1):q("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class _k{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ps(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.vu.add(4),await Ji(c),c.bu.set("Unknown"),c.vu.delete(4),await hc(c)}(this))})}),this.bu=new vk(s,r)}}async function hc(t){if(Ps(t))for(const e of t.Ru)await e(!0)}async function Ji(t){for(const e of t.Ru)await e(!1)}function Jv(t,e){const n=oe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Rh(n)?Ah(n):kr(n).Ko()&&bh(n,e))}function Xv(t,e){const n=oe(t),s=kr(n);n.Au.delete(e),s.Ko()&&Zv(n,e),n.Au.size===0&&(s.Ko()?s.jo():Ps(n)&&n.bu.set("Unknown"))}function bh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}kr(t).su(e)}function Zv(t,e){t.Vu.qt(e),kr(t).iu(e)}function Ah(t){t.Vu=new IR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),kr(t).start(),t.bu.gu()}function Rh(t){return Ps(t)&&!kr(t).Uo()&&t.Au.size>0}function Ps(t){return oe(t).vu.size===0}function e0(t){t.Vu=void 0}async function wk(t){t.Au.forEach((e,n)=>{bh(t,e)})}async function Ek(t,e){e0(t),Rh(t)?(t.bu.Iu(e),Ah(t)):t.bu.set("Unknown")}async function Ik(t,e,n){if(t.bu.set("Online"),e instanceof Bv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ya(t,s)}else if(e instanceof Fo?t.Vu.Ht(e):e instanceof Uv?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ne.min()))try{const s=await Wv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),Zv(r,a);const u=new Vn(l.target,a,c,l.sequenceNumber);bh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await ya(t,s)}}async function ya(t,e,n){if(!Wi(e))throw e;t.vu.add(1),await Ji(t),t.bu.set("Offline"),n||(n=()=>Wv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await hc(t)})}function t0(t,e){return e().catch(n=>ya(t,n,e))}async function fc(t){const e=oe(t),n=Xn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Tk(e);)try{const r=await ak(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,Sk(e,r)}catch(r){await ya(e,r)}n0(e)&&s0(e)}function Tk(t){return Ps(t)&&t.Eu.length<10}function Sk(t,e){t.Eu.push(e);const n=Xn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function n0(t){return Ps(t)&&!Xn(t).Uo()&&t.Eu.length>0}function s0(t){Xn(t).start()}async function Ck(t){Xn(t).hu()}async function bk(t){const e=Xn(t);for(const n of t.Eu)e.uu(n.mutations)}async function Ak(t,e,n){const s=t.Eu.shift(),r=_h.from(s,e,n);await t0(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await fc(t)}async function Rk(t,e){e&&Xn(t).ou&&await async function(n,s){if(r=s.code,_R(r)&&r!==E.ABORTED){const i=n.Eu.shift();Xn(n).Qo(),await t0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(n)}var r}(t,e),n0(t)&&s0(t)}async function pp(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=Ps(n);n.vu.add(3),await Ji(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await hc(n)}async function kk(t,e){const n=oe(t);e?(n.vu.delete(2),await hc(n)):e||(n.vu.add(2),await Ji(n),n.bu.set("Unknown"))}function kr(t){return t.Su||(t.Su=function(e,n,s){const r=oe(e);return r.fu(),new gk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:wk.bind(null,t),ao:Ek.bind(null,t),nu:Ik.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Rh(t)?Ah(t):t.bu.set("Unknown")):(await t.Su.stop(),e0(t))})),t.Su}function Xn(t){return t.Du||(t.Du=function(e,n,s){const r=oe(e);return r.fu(),new mk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Ck.bind(null,t),ao:Rk.bind(null,t),au:bk.bind(null,t),cu:Ak.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await fc(t)):(await t.Du.stop(),t.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class kh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new kh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Wi(t))return new U(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class tr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=$r(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof tr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new tr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class gp{constructor(){this.Cu=new Le(Q.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):X():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class mr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mr(e,n,tr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Nk{constructor(){this.Nu=void 0,this.listeners=[]}}class Ok{constructor(){this.queries=new Rr(e=>Cv(e),ic),this.onlineState="Unknown",this.ku=new Set}}async function Pk(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Nk),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Nh(o,`Initialization of query '${Wl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Oh(n)}async function Dk(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function xk(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Oh(n)}function Lk(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Oh(t){t.ku.forEach(e=>{e.next()})}class Mk{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new mr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class r0{constructor(e){this.key=e}}class i0{constructor(e){this.key=e}}class Fk{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=he(),this.mutatedKeys=he(),this.tc=bv(e),this.ec=new tr(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new gp,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=oc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;f&&p?f.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),T=!0):this.rc(f,p)||(s.track({type:2,doc:p}),T=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),T=!0):f&&!p&&(s.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new mr(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new gp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=he(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new i0(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new r0(s))}),n}hc(e){this.Yu=e.ir,this.Zu=he();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return mr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $k{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Uk{constructor(e){this.key=e,this.fc=!1}}class Bk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Rr(a=>Cv(a),ic),this._c=new Map,this.mc=new Set,this.gc=new Le(Q.comparator),this.yc=new Map,this.Ic=new Th,this.Tc={},this.Ec=new Map,this.Ac=gr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Vk(t,e){const n=Jk(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await ck(n.localStore,En(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await jk(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Jv(n.remoteStore,o)}return r}async function jk(t,e,n,s,r){t.Rc=(h,f,p)=>async function(m,v,T,D){let S=v.view.sc(T);S.zi&&(S=await hp(m.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,S)));const b=D&&D.targetChanges.get(v.targetId),j=v.view.applyChanges(S,m.isPrimaryClient,b);return yp(m,v.targetId,j.cc),j.snapshot}(t,h,f,p);const i=await hp(t.localStore,e,!0),o=new Fk(e,i.ir),a=o.sc(i.documents),c=Yi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);yp(t,n,l.cc);const u=new $k(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function qk(t,e){const n=oe(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!ic(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xv(n.remoteStore,s.targetId),eu(n,s.targetId)}).catch(Gi)):(eu(n,s.targetId),await Zl(n.localStore,s.targetId,!0))}async function Hk(t,e,n){const s=Xk(t);try{const r=await function(i,o){const a=oe(i),c=ze.now(),l=o.reduce((f,p)=>f.add(p.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=In(),m=he();return a.Zi.getEntries(f,l).next(v=>{p=v,p.forEach((T,D)=>{D.isValidDocument()||(m=m.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const T=[];for(const D of o){const S=pR(D,u.get(D.key).overlayedDocument);S!=null&&T.push(new Os(D.key,S,mv(S.value.mapValue),Ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Rv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Le(me)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Xi(s,r.changes),await fc(s.remoteStore)}catch(r){const i=Nh(r,"Failed to persist write");n.reject(i)}}async function o0(t,e){const n=oe(t);try{const s=await ik(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?De(o.fc):r.removedDocuments.size>0&&(De(o.fc),o.fc=!1))}),await Xi(n,s,e)}catch(s){await Gi(s)}}function mp(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Oh(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zk(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Le(Q.comparator);o=o.insert(i,ot.newNoDocument(i,ne.min()));const a=he().add(i),c=new lc(ne.min(),new Map,new Le(me),o,a);await o0(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Ph(s)}else await Zl(s.localStore,e,!1).then(()=>eu(s,e,n)).catch(Gi)}async function Kk(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await rk(n.localStore,e);c0(n,s,null),a0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xi(n,r)}catch(r){await Gi(r)}}async function Gk(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);c0(s,e,n),a0(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xi(s,r)}catch(r){await Gi(r)}}function a0(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function c0(t,e,n){const s=oe(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||l0(t,s)})}function l0(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Xv(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ph(t))}function yp(t,e,n){for(const s of n)s instanceof r0?(t.Ic.addReference(s.key,e),Wk(t,s)):s instanceof i0?(q("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||l0(t,s.key)):X()}function Wk(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(q("SyncEngine","New document in limbo: "+n),t.mc.add(s),Ph(t))}function Ph(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Q(Ne.fromString(e)),s=t.Ac.next();t.yc.set(s,new Uk(n)),t.gc=t.gc.insert(n,s),Jv(t.remoteStore,new Vn(En(Tv(n.path)),s,"TargetPurposeLimboResolution",hh.ct))}}async function Xi(t,e,n){const s=oe(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ch.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Wi(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,m)}}}(s.localStore,i))}async function Qk(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const s=await Gv(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new U(E.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xi(n,s.er)}}function Yk(t,e){const n=oe(t),s=n.yc.get(e);if(s&&s.fc)return he().add(s.key);{let r=he();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function Jk(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zk.bind(null,e),e.dc.nu=xk.bind(null,e.eventManager),e.dc.Pc=Lk.bind(null,e.eventManager),e}function Xk(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gk.bind(null,e),e}class vp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sk(this.persistence,new tk,e.initialUser,this.serializer)}createPersistence(e){return new ZR(Sh.zs,this.serializer)}createSharedClientState(e){return new uk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await kk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ok}createDatastore(e){const n=uc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new pk(r));var r;return function(i,o,a,c){return new yk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>mp(this.syncEngine,a,0),o=dp.D()?new dp:new hk,new _k(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Bk(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);q("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ji(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class eN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tN{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=dv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Nh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Gv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sN(t);q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>pp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pp(e.remoteStore,i)),t._onlineComponents=e}function nN(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nN(n))throw n;hr("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new vp)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Yc(t,new vp);return t._offlineComponents}async function u0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await _p(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await _p(t,new Zk))),t._onlineComponents}function rN(t){return u0(t).then(e=>e.syncEngine)}async function iN(t){const e=await u0(t),n=e.eventManager;return n.onListen=Vk.bind(null,e.syncEngine),n.onUnlisten=qk.bind(null,e.syncEngine),n}function oN(t,e,n={}){const s=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new eN({next:h=>{i.enqueueAndForget(()=>Dk(r,u)),h.fromCache&&a.source==="server"?c.reject(new U(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Mk(o,l,{includeMetadataChanges:!0,Ku:!0});return Pk(r,u)}(await iN(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function h0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wp=new Map;/**
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
 */function f0(t,e,n){if(!n)throw new U(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aN(t,e,n,s){if(e===!0&&s===!0)throw new U(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ep(t){if(!Q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ip(t){if(Q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dc(t);throw new U(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cN(t,e){if(e<=0)throw new U(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Tp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new U(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class pc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new b2;switch(n.type){case"firstParty":return new N2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wp.get(e);n&&(q("ComponentProvider","Removing Datastore"),wp.delete(e),n.terminate())}(this),Promise.resolve()}}function lN(t,e,n,s={}){var r;const i=(t=ks(t,pc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=it.MOCK_USER;else{a=eS(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(l)}t._authCredentials=new A2(new fv(a,c))}}/**
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
 */class bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class rs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Wn extends rs{constructor(e,n,s){super(e,n,Tv(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Q(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function va(t,e,...n){if(t=It(t),f0("collection","path",e),t instanceof pc){const s=Ne.fromString(e,...n);return Ip(s),new Wn(t,null,s)}{if(!(t instanceof bt||t instanceof Wn))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return Ip(s),new Wn(t.firestore,null,s)}}function Dh(t,e,...n){if(t=It(t),arguments.length===1&&(e=dv.A()),f0("doc","path",e),t instanceof pc){const s=Ne.fromString(e,...n);return Ep(s),new bt(t,null,new Q(s))}{if(!(t instanceof bt||t instanceof Wn))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return Ep(s),new bt(t.firestore,t instanceof Wn?t.converter:null,new Q(s))}}/**
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
 */class uN{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Qv(this,"async_queue_retry"),this.Xc=()=>{const n=Qc();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Gn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wi(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=kh.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&X()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Zi extends pc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new uN,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||p0(this),this._firestoreClient.terminate()}}function hN(t,e){const n=typeof t=="object"?t:bm(),s=typeof t=="string"?t:e||"(default)",r=Pu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=XT("firestore");i&&lN(r,...i)}return r}function d0(t){return t._firestoreClient||p0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function p0(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new j2(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,h0(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new tN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(pt.fromBase64String(e))}catch(n){throw new U(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yr(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class g0{constructor(e){this._methodName=e}}/**
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
 */class Lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const fN=/^__.*__$/;class dN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}function m0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Mh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _a(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(m0(this.ca)&&fN.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class pN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||uc(e)}ya(e,n,s,r=!1){return new Mh({ca:e,methodName:n,ga:s,path:lt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fh(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new pN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function y0(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);w0("Data must be an object, but it was:",o,s);const a=v0(s,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=mN(e,h,n);if(!o.contains(f))throw new U(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);vN(u,f)||u.push(f)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dN(new Nt(a),c,l)}function gN(t,e,n,s=!1){return $h(n,t.ya(s?4:3,e))}function $h(t,e){if(_0(t=It(t)))return w0("Unsupported field value:",e,t),v0(t,e);if(t instanceof g0)return function(n,s){if(!m0(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=$h(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=It(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cR(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ze.fromDate(n);return{timestampValue:ma(s.serializer,r)}}if(n instanceof ze){const r=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ma(s.serializer,r)}}if(n instanceof Lh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yr)return{bytesValue:Vv(s.serializer,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ih(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${dc(n)}`)}(t,e)}function v0(t,e){const n={};return pv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(s,r)=>{const i=$h(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Lh||t instanceof yr||t instanceof bt||t instanceof g0)}function w0(t,e,n){if(!_0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=dc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function mN(t,e,n){if((e=It(e))instanceof xh)return e._internalPath;if(typeof e=="string")return E0(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const yN=new RegExp("[~\\*/\\[\\]]");function E0(t,e,n){if(e.search(yN)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(E.INVALID_ARGUMENT,a+t+c)}function vN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class I0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _N(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _N extends I0{data(){return super.data()}}function gc(t,e){return typeof e=="string"?E0(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
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
 */function wN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class Bh extends Uh{}function tu(t,e,...n){let s=[];e instanceof Uh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Vh).length,o=r.filter(a=>a instanceof mc).length;if(i>1||i>0&&o>0)throw new U(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class mc extends Bh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mc(e,n,s)}_apply(e){const n=this._parse(e);return T0(e._query,n),new rs(e.firestore,e.converter,Gl(e._query,n))}_parse(e){const n=Fh(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Cp(u,l);const f=[];for(const p of u)f.push(Sp(a,r,p));h={arrayValue:{values:f}}}else h=Sp(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Cp(u,l),h=gN(o,i,u,l==="in"||l==="not-in");return je.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function EN(t,e,n){const s=e,r=gc("where",t);return mc._create(r,s,n)}class Vh extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)T0(i,a),i=Gl(i,a)}(e._query,n),new rs(e.firestore,e.converter,Gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends Bh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new U(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Zs(r,i);return function(a,c){if(yh(a)===null){const l=rc(a);l!==null&&S0(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new rs(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ar(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function IN(t,e="asc"){const n=e,s=gc("orderBy",t);return jh._create(s,n)}class qh extends Bh{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new qh(e,n,s)}_apply(e){return new rs(e.firestore,e.converter,da(e._query,this._limit,this._limitType))}}function TN(t){return cN("limit",t),qh._create("limit",t,"F")}function Sp(t,e,n){if(typeof(n=It(n))=="string"){if(n==="")throw new U(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sv(e)&&n.indexOf("/")!==-1)throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ne.fromString(n));if(!Q.isDocumentKey(s))throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Wd(t,new Q(s))}if(n instanceof bt)return Wd(t,n._key);throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(n)}.`)}function Cp(t,e){if(!Array.isArray(t)||t.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T0(t,e){if(e.isInequality()){const s=rc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new U(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=yh(t);i!==null&&S0(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function S0(t,e,n){if(!n.isEqual(e))throw new U(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class SN{convertValue(e,n="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return br(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Lh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=dh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);De(Kv(s));const r=new Ti(s.get(1),s.get(3)),i=new Q(s.popFirst(5));return r.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function C0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CN extends I0{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $o extends CN{data(e={}){return super.data(e)}}class bN{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new wo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $o(this._firestore,this._userDataWriter,s.key,s,new wo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:AN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class RN extends SN{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function b0(t){t=ks(t,rs);const e=ks(t.firestore,Zi),n=d0(e),s=new RN(e);return wN(t._query),oN(n,t._query).then(r=>new bN(e,s,t,r))}function kN(t,e,n){t=ks(t,bt);const s=ks(t.firestore,Zi),r=C0(t.converter,e,n);return Hh(s,[y0(Fh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ft.none())])}function NN(t){return Hh(ks(t.firestore,Zi),[new vh(t._key,Ft.none())])}function ON(t,e){const n=ks(t.firestore,Zi),s=Dh(t),r=C0(t.converter,e);return Hh(n,[y0(Fh(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ft.exists(!1))]).then(()=>s)}function Hh(t,e){return function(n,s){const r=new Gn;return n.asyncQueue.enqueueAndForget(async()=>Hk(await rN(n),s,r)),r.promise}(d0(t),e)}(function(t,e=!0){(function(n){Cr=n})(Ir),cr(new Ts("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Zi(new R2(n.getProvider("auth-internal")),new P2(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Kn(qd,"3.13.0",t),Kn(qd,"3.13.0","esm2017")})();var PN="firebase",DN="9.23.0";/**
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
 */Kn(PN,DN,"app");const xN="AIzaSyBpJBT-rpGhuTSW7IoKhPbb3wS1KKBSvec",LN={apiKey:xN,authDomain:"hh-easy-reach.firebaseapp.com",projectId:"hh-easy-reach",storageBucket:"hh-easy-reach.appspot.com",messagingSenderId:"180032379271",appId:"1:180032379271:web:0d70108e46a2d661fd1b22"},MN=Cm(LN),vr=hN(MN),dO="https://europe-west2-hh-easy-reach.cloudfunctions.net/",pO=async(t,e=null)=>{let n;e?n=tu(va(vr,t),IN(e)):n=tu(va(vr,t));const s=await b0(n);return Array.from(s.docs).map(i=>({...i.data(),id:i.id}))},gO=async(t,e)=>{await kN(Dh(vr,t),e,{merge:!0})},mO=async(t,e)=>{const n=va(vr,t);return await ON(n,e)},yO=async(t,e)=>{const n=Dh(vr,t,e);return await NN(n)},FN=async t=>{const e=tu(va(vr,"users"),EN("email","==",t),TN(1)),n=await b0(e);if(Array.from(n.docs).map(r=>({...r.data(),id:r.id})).length)return!0;throw new Error("User not authorized to log in")},$N={__name:"HomeView",setup(t){const e=Vu(),n=()=>{const r=new hn;Rb(sa(),r).then(i=>{FN(i.user.email).then(()=>{e.setUser(i.user),yc.push({name:"Arrivals"})}).catch(o=>{console.log(o.message),s()})}).catch(i=>{console.log("error",i)})},s=()=>{Xm(sa()).then(()=>{e.setUser(null)}).catch(r=>console.log("error",r))};return(r,i)=>(Pe(),Fe("main",null,[Ee("div",{class:"flex justify-center mt-20"},[Ee("button",{onClick:n,class:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}," Sign in with Google ")])]))}},yc=UT({history:pT("/hh-easy-reach"),routes:[{path:"/",name:"Home",component:$N},{path:"/arrivals",name:"Arrivals",component:()=>sd(()=>import("./ArrivalsView-e94c5bfd.js"),["assets/ArrivalsView-e94c5bfd.js","assets/SelectSkeleton-ed0fb570.js","assets/ArrivalsView-9bb43f66.css"]),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>sd(()=>import("./SettingsView-e4999b30.js"),["assets/SettingsView-e4999b30.js","assets/SelectSkeleton-ed0fb570.js","assets/SettingsView-71ad89fb.css"]),meta:{requiresAuth:!0}}]}),UN=()=>new Promise((t,e)=>{const n=Vu();ab(sa(),s=>{s?(n.setUser(s),t(s)):(n.setUser(null),e("User not logged in"))})});yc.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await UN(),n()}catch(s){console.log(s),n("/")}else n()});const BN={class:"border-b border-gray-200 bg-orange-600"},VN={class:"max-w-screen-xl flex justify-between mx-auto px-6 xl:px-0"},jN=Ee("div",{class:"logo flex items-center"},[Ee("div",{class:"truncate text-white font-medium border-l-4 border-orange-400 transition hover:text-gray-100 my-4 px-3 py-1"},[Ee("span",{class:"sm:hidden"}," HH/ER "),Ee("span",{class:"hidden sm:block"},"HH - Easy Reach")])],-1),qN={key:0,class:"flex items-center gap-4"},HN=Ee("img",{src:jT,alt:"Logout icon"},null,-1),zN=[HN],KN={__name:"HeaderMenu",setup(t){const e=VT(),n=o=>e.path===o?"bg-orange-400":"",s=()=>e.path==="/arrivals"||e.path==="/settings",r=Vu(),i=()=>{Xm(sa()).then(()=>{r.setUser(null)}).catch(o=>console.log("error",o)).finally(()=>yc.push("/"))};return(o,a)=>{const c=C_("router-link");return Pe(),Fe("header",BN,[Ee("div",VN,[jN,Yt(r).user&&s?(Pe(),Fe("div",qN,[ae(c,{to:"/arrivals",class:ei(`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${n("/arrivals")}`)},{default:nl(()=>[ll("ARRIVALS")]),_:1},8,["class"]),ae(c,{to:"/settings",class:ei(`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${n("/settings")}`)},{default:nl(()=>[ll("SETTINGS")]),_:1},8,["class"])])):Sc("",!0),Yt(r).user?(Pe(),Fe("div",{key:1,onClick:i,class:"hidden sm:flex text-white items-center px-4 cursor-pointer hover:text-gray-100"}," Sign out ")):Sc("",!0),Yt(r).user?(Pe(),Fe("div",{key:2,onClick:i,class:"w-12 flex sm:hidden text-white items-center px-4 cursor-pointer hover:text-gray-100"},zN)):Sc("",!0)])])}}},GN={},WN={class:"text-center border-t border-gray-200 bg-orange-600 py-2"},QN=Ee("span",{class:"text-white"},"2024",-1),YN=[QN];function JN(t,e){return Pe(),Fe("footer",WN,YN)}const XN=nt(GN,[["render",JN]]);const ZN={class:"flex flex-col h-screen justify-between text-slate-800"},eO={class:"mb-auto bg-white"},tO={class:"max-w-screen-xl mx-auto px-6 xl:px-0"},nO={__name:"App",setup(t){return(e,n)=>(Pe(),Fe("div",ZN,[ae(KN),Ee("main",eO,[Ee("div",tO,[ae(Yt(mm))])]),ae(XN)]))}},sO=nt(nO,[["__scopeId","data-v-8ebac9e5"]]),eo=Hg(sO);eo.component("EditIcon",uw).component("EmailIcon",mw).component("EmailLightIcon",Iw).component("WhatsAppIcon",Rw).component("CancelIcon",xw).component("ThumbsDownIcon",Bw).component("ThumbsUpIcon",Kw).component("SentIcon",Xw).component("LeftTriangleIcon",rE).component("RightTriangleIcon",uE).component("RefreshIcon",mE).component("GuestsIcon",IE).component("ProgressionIcon",RE).component("LoadIcon",xE).component("ArrowDownIcon",BE);eo.use(em,{autoClose:3e3,transition:"slide",hideProgressBar:!0});eo.use(NI());eo.use(yc);eo.mount("#app");export{hO as A,Ra as B,lO as C,yO as D,ze as E,wt as F,qr as G,Mg as H,rO as S,uO as T,nt as _,mO as a,Se as b,Fe as c,MI as d,C_ as e,dO as f,Ee as g,ae as h,Yt as i,ll as j,cO as k,Oe as l,Pg as m,ei as n,Pe as o,iO as p,pO as q,aO as r,gO as s,B0 as t,Vu as u,oO as v,nl as w,fO as x,fn as y,Sc as z};
