(()=>{"use strict";var t={117:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Plugin=void 0;const i=n(920);e.Plugin=class{constructor(){this.dataExtrator=new i.DataExtractor,this.setupButton()}setupButton(){const t=document.createElement("button");t.textContent="Extrair Dados",t.style.position="fixed",t.style.bottom="20px",t.style.right="20px",t.style.zIndex="1000",t.onclick=()=>this.onButtonClick(),document.body.appendChild(t)}onButtonClick(){return o(this,void 0,void 0,(function*(){this.dataExtrator.extractData(),alert("Dados extraídos e enviados com sucesso!")}))}}},920:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DataExtractor=void 0,e.DataExtractor=class{constructor(){this.themeSwitchCount=0}trackThemeChanges(){new MutationObserver((()=>{this.themeSwitchCount++})).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}getDeviceType(){const t=navigator.userAgent;return/android/i.test(t)?"android":/iphone|ipad|ipod/i.test(t)?"ios":"desktop"}getOS(){var t;const e=null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform;return e.includes("win")?"Windows":e.includes("mac")?"MacOS":e.includes("linux")?"Linux":"Unknown"}extractData(){return{device:this.getDeviceType(),os:this.getOS(),origin:window.location.origin,themeSwitchCount:this.themeSwitchCount}}}}},e={};new(function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(117).Plugin)})();