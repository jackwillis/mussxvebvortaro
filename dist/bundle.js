!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){return e.entries[t]||null}function o(e){return(e.dataset.eo||e.innerText).toLowerCase()}function i(e){var t=document.createElement("dl");return e.forEach(function(e){var n=e[0],r=e[1],o=r.en,i=document.createElement("dt");if(r.noLink)i.innerText=n;else{var a=document.createElement("a");a.href=function(e){return"https://wiktionary.org/wiki/"+encodeURIComponent(e)+"#Esperanto"}(n),a.target="_blank",a.innerText=n,i.appendChild(a)}i.setAttribute("lang","eo");var d=document.createElement("dd");d.innerText=o,t.appendChild(i),t.appendChild(d)}),t}t.__esModule=!0;var a="no-entry";function d(e){var t=!1,n=function(){var e=document.createElement("div");e.classList.add("eo-tooltip"),e.setAttribute("role","tooltip"),e.setAttribute("aria-hidden","true");var t=document.createElement("button");t.classList.add("eo-close"),t.innerText="X",t.setAttribute("aria-label","Close"),t.disabled=!0;var n=document.createElement("div");return e.appendChild(t),e.appendChild(n),document.body.appendChild(e),{tooltip:e,tooltipBody:n,closeButton:t}}(),d=n.tooltip,c=n.tooltipBody,u=n.closeButton;function s(t){c.innerHTML="";var n=o(t),a=function(e,t){var n=r(e,t);if(!n)return[];var o=n.refs||[];return[t].concat(o).map(function(t){return[t,e.entries[t]]})}(e,n);0===a.length?c.innerHTML="<p>No dictionary entry for <strong>"+n+"</strong>.</p>":c.appendChild(i(a)),d.style.top=t.offsetTop+t.offsetHeight+"px",d.style.left=t.offsetLeft+t.offsetWidth/2+"px",d.setAttribute("aria-hidden","false");var u=t.parentElement.getBoundingClientRect().right;d.getBoundingClientRect().right>u&&(d.style.left=u-d.offsetWidth+"px");var s=document.querySelector("[data-eo][aria-describedby]");s&&s.removeAttribute("aria-describedby");var l="eo-tooltip-"+Math.random().toString(36).slice(2);d.id=l,t.setAttribute("aria-describedby",l)}function l(e){t=e,u.disabled=!e}function f(){d.setAttribute("aria-hidden","true"),l(!1)}var p=document.querySelectorAll("[data-eo]");[].slice.call(p).forEach(function(n){var i=o(n);function d(){s(n),n,l(!0)}r(e,i)||n.classList.add(a),n.setAttribute("tabindex","0"),n.addEventListener("click",function(e){e.stopPropagation()}),n.addEventListener("focus",d),n.addEventListener("touchstart",d);var c=null;n.addEventListener("mouseenter",function(){clearTimeout(c),c=setTimeout(function(){t||s(n)},500)}),n.addEventListener("mouseleave",function(){clearTimeout(c),t||f()})}),u.addEventListener("click",f),document.body.parentElement.addEventListener("click",f),d.addEventListener("click",function(e){e.stopPropagation()}),document.addEventListener("keypress",function(e){"Escape"===e.key&&f()})}t.esperantoReader=d,document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("script[data-vortaro]"),t=e&&e.dataset.vortaro;t&&function(e){var t=new XMLHttpRequest;function n(t){console.error("Could not load dictionary file "+e+": "+t)}t.onload=function(){if(200===t.status){var e=JSON.parse(t.responseText);d(e)}else n("HTTP status "+t.status)},t.onerror=t.onabort=n,t.open("GET",e),t.send()}(t)})}]);