"use strict";(self["webpackChunkdod_app"]=self["webpackChunkdod_app"]||[]).push([[544],{544:function(e,t,o){o.r(t),o.d(t,{startFocusVisible:function(){return c}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],o=!0;const c=e?e.shadowRoot:document,d=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},a=()=>{o=!1,i([])},u=e=>{o=r.includes(e.key),o||i([])},v=e=>{if(o&&e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));i(t)}},f=()=>{c.activeElement===d&&i([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",f),c.addEventListener("touchstart",a),c.addEventListener("mousedown",a);const E=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",f),c.removeEventListener("touchstart",a),c.removeEventListener("mousedown",a)};return{destroy:E,setFocus:i}}}}]);
//# sourceMappingURL=544.4216bd9c.js.map