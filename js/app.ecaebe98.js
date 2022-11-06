(function(){"use strict";var t={6115:function(t,e,s){var o=s(144),n=s(998),i=s(6190),a=s(9582),l=s(120),r=s(4127),u=s(266),h=s(2150),c=s(9780),p=s(5125),k=s(4324),y=s(5808),f=s(7397),m=s(4525),_=s(6037),E=s(2928),P=s(1713),d=s(7808),g=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(n.Z,[e(E.Z,[e(h.Z,[e(P.Z,{staticClass:"text-center mt-8"},[e(u.Z,{attrs:{cols:"12"}},[e(p.Z,{on:{submit:t.checkSkylink}},[e(P.Z,{staticClass:"text-left",attrs:{"no-gutters":""}},[e(u.Z,{attrs:{cols:"12"}},[e(d.Z,{attrs:{label:"Skylink","append-icon":"mdi-magnify"},on:{"click:append":t.checkSkylink},model:{value:t.skylink,callback:function(e){t.skylink=e},expression:"skylink"}})],1),e(u.Z,{attrs:{cols:"12"}},[e(y.Z,[e(f.Z,{attrs:{value:!1,"prepend-icon":"mdi-cog"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(_.V9,[t._v("Options")])]},proxy:!0}])},[e(m.Z,[e(P.Z,[e(u.Z,{attrs:{cols:"6"}},[e("h3",{staticClass:"h3 font-weight-regular"},[t._v("Portals:")]),e(P.Z,{attrs:{"no-gutters":""}},[e(u.Z,{attrs:{cols:"4"}},[e(l.Z,{attrs:{label:"Siasky.net"},on:{click:t.onPortalCheckbox},model:{value:t.portal1,callback:function(e){t.portal1=e},expression:"portal1"}})],1),e(u.Z,{attrs:{cols:"4"}},[e(l.Z,{attrs:{label:"Skynetfree.net"},on:{click:t.onPortalCheckbox},model:{value:t.portal2,callback:function(e){t.portal2=e},expression:"portal2"}})],1),e(u.Z,{attrs:{cols:"4"}},[e(l.Z,{attrs:{label:"Skynetpro.net"},on:{click:t.onPortalCheckbox},model:{value:t.portal3,callback:function(e){t.portal3=e},expression:"portal3"}})],1),e(u.Z,{attrs:{cols:"4"}},[e(l.Z,{attrs:{label:"Web3portal.com"},on:{click:t.onPortalCheckbox},model:{value:t.portal4,callback:function(e){t.portal4=e},expression:"portal4"}})],1),e(u.Z,{attrs:{cols:"4"}},[e(l.Z,{attrs:{label:"Skynet.cool"},on:{click:t.onPortalCheckbox},model:{value:t.portal5,callback:function(e){t.portal5=e},expression:"portal5"}})],1)],1)],1),e(u.Z,{attrs:{cols:"6"}},[e("h3",{staticClass:"h3 font-weight-regular"},[t._v(" Health check timeout: ")]),e(P.Z,[e(u.Z,{attrs:{cols:"3"}},[e(l.Z,{attrs:{label:"1s"},on:{click:t.onTimeoutCheckbox},model:{value:t.timeout1,callback:function(e){t.timeout1=e},expression:"timeout1"}})],1),e(u.Z,{attrs:{cols:"3"}},[e(l.Z,{attrs:{label:"2s"},on:{click:t.onTimeoutCheckbox},model:{value:t.timeout2,callback:function(e){t.timeout2=e},expression:"timeout2"}})],1),e(u.Z,{attrs:{cols:"3"}},[e(l.Z,{attrs:{label:"5s"},on:{click:t.onTimeoutCheckbox},model:{value:t.timeout5,callback:function(e){t.timeout5=e},expression:"timeout5"}})],1),e(u.Z,{attrs:{cols:"3"}},[e(l.Z,{attrs:{label:"10s"},on:{click:t.onTimeoutCheckbox},model:{value:t.timeout10,callback:function(e){t.timeout10=e},expression:"timeout10"}})],1)],1)],1),e(u.Z,{attrs:{cols:"12"}},[e("h3",{staticClass:"h3 font-weight-regular"},[t._v(" Portal API Keys: ")]),e(P.Z,[e(u.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{label:"Skynetfree.net API Key"},on:{input:t.textInput},model:{value:t.SKYNETFREE_API_KEY,callback:function(e){t.SKYNETFREE_API_KEY=e},expression:"SKYNETFREE_API_KEY"}})],1),e(u.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{label:"Skynetpro.net API Key"},on:{input:t.textInput},model:{value:t.SKYNETPRO_API_KEY,callback:function(e){t.SKYNETPRO_API_KEY=e},expression:"SKYNETPRO_API_KEY"}})],1),e(u.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{label:"Web3portal.com API Key"},on:{input:t.textInput},model:{value:t.WEB3PORTAL_API_KEY,callback:function(e){t.WEB3PORTAL_API_KEY=e},expression:"WEB3PORTAL_API_KEY"}})],1),e(u.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{label:"Skynet.cool API Key"},on:{input:t.textInput},model:{value:t.SKYNETCOOL_API_KEY,callback:function(e){t.SKYNETCOOL_API_KEY=e},expression:"SKYNETCOOL_API_KEY"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),e(u.Z,{attrs:{cols:"12"}},[e(a.Z,[e(c.Z,{staticClass:"elevation-1",attrs:{dense:"","sort-desc":"","sort-by":"health",items:t.skylinks,headers:t.headers,"items-per-page":-1},scopedSlots:t._u([{key:"item.portal",fn:function({item:s}){return[e("div",[t._v(" "+t._s(s.portal)+" ")])]}},{key:"item.health",fn:function({item:s}){return[e(r.Z,{staticClass:"ma-1",attrs:{dark:"",color:t.healthColor(s.health)}},[t._v(" "+t._s(s.health)+" ")])]}},{key:"item.actions",fn:function({item:s}){return[e(i.Z,{attrs:{loading:s.pinning,small:"",icon:""},on:{click:function(e){return t.pin(s)}}},[e(k.Z,[t._v("mdi-pin")])],1)]}}],null,!0)})],1)],1)],1)],1)],1)],1)},Z=[],K=s(2482),b=(s(7658),s(1929)),S=function(t,e,s,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(i<3?n(a):i>3?n(e,s,a):n(e,s))||a);return i>3&&a&&Object.defineProperty(e,s,a),a};let v=class extends b.w3{constructor(...t){super(...t),(0,K.Z)(this,"portals",[]),(0,K.Z)(this,"skylink",""),(0,K.Z)(this,"skylinks",[]),(0,K.Z)(this,"headers",[{text:"Portal",value:"portal"},{text:"Health",value:"health"},{text:"Timeout",value:"timeout",width:100},{text:"Pin",value:"actions",sortable:!1,width:24}]),(0,K.Z)(this,"timeouts",[]),(0,K.Z)(this,"timeout1",!0),(0,K.Z)(this,"timeout2",!0),(0,K.Z)(this,"timeout5",!1),(0,K.Z)(this,"timeout10",!1),(0,K.Z)(this,"portal1",!1),(0,K.Z)(this,"portal2",!0),(0,K.Z)(this,"portal3",!0),(0,K.Z)(this,"portal4",!1),(0,K.Z)(this,"portal5",!1),(0,K.Z)(this,"SKYNETFREE_API_KEY",""),(0,K.Z)(this,"SKYNETPRO_API_KEY",""),(0,K.Z)(this,"SKYNETCOOL_API_KEY",""),(0,K.Z)(this,"WEB3PORTAL_API_KEY","")}async getHealth(t){const e=this.portals[t];for(const o of this.timeouts)try{const s=await fetch(`${e}/skynet/health/skylink/${this.skylink}?nocache=true&timeout=${o}`,{headers:this.fetchHeaders(e)}),n=await s.json();this.$set(this.skylinks,t,{portal:new URL(e).host,health:n?.basesectorredundancy??0,timeout:o})}catch(s){console.error(s),this.$set(this.skylinks,t,{portal:new URL(e).host,health:-1,timeout:o})}}async checkSkylink(t){t.preventDefault(),this.setLocalStorage(),this.onTimeoutCheckbox(),this.onPortalCheckbox(),this.skylinks=[],this.portals.forEach(((t,e)=>{this.getHealth(e),this.$set(this.skylinks,e,{portal:new URL(t).host,pinning:!1,timeout:1,health:0})}))}togglePinning(t,e){const s=this.skylinks.indexOf(t);this.$set(this.skylinks,s,{...t,pinning:e})}async pin(t){const e=this.skylinks.indexOf(t),s=this.portals[e];try{this.togglePinning(t,!0),await fetch(`${s}/skynet/pin/${this.skylink}`,{headers:this.fetchHeaders(s),method:"POST"}),this.togglePinning(t,!1),this.getHealth(e)}catch(o){console.error(o),this.togglePinning(t,!1),this.getHealth(e)}}fetchHeaders(t){let e={};return t.includes("skynetfree.net")?e={"Skynet-Api-Key":this.SKYNETFREE_API_KEY}:t.includes("skynetpro.net")?e={"Skynet-Api-Key":this.SKYNETPRO_API_KEY}:t.includes("skynet.cool")?e={"Skynet-Api-Key":this.SKYNETCOOL_API_KEY}:t.includes("web3portal.com")&&(e={"Skynet-Api-Key":this.WEB3PORTAL_API_KEY}),e}healthColor(t){return t>=10?"green":t>=6?"light-green":t>=3?"amber":"red"}onTimeoutCheckbox(){this.setLocalStorage();let t=[];this.timeout1&&t.push(1),this.timeout2&&t.push(2),this.timeout5&&t.push(5),this.timeout10&&t.push(10),this.timeouts=t}onPortalCheckbox(){this.setLocalStorage();let t=[];this.portal1&&t.push("https://eu-fin-1.siasky.net","https://eu-fin-2.siasky.net","https://eu-fin-3.siasky.net","https://eu-fin-4.siasky.net","https://eu-fin-5.siasky.net","https://eu-fin-6.siasky.net","https://eu-fin-9.siasky.net","https://eu-fin-10.siasky.net","https://eu-fin-11.siasky.net","https://eu-fin-12.siasky.net","https://eu-fin-13.siasky.net","https://eu-fin-14.siasky.net","https://eu-fin-15.siasky.net","https://eu-ger-1.siasky.net","https://eu-ger-2.siasky.net","https://eu-ger-3.siasky.net","https://eu-ger-4.siasky.net","https://eu-ger-5.siasky.net","https://eu-ger-6.siasky.net","https://eu-ger-7.siasky.net","https://eu-ger-8.siasky.net","https://eu-ger-9.siasky.net","https://eu-ger-10.siasky.net","https://eu-ger-11.siasky.net","https://eu-ger-12.siasky.net","https://eu-pol-1.siasky.net","https://eu-pol-2.siasky.net","https://eu-pol-3.siasky.net","https://eu-pol-4.siasky.net","https://eu-pol-5.siasky.net","https://us-pa-1.siasky.net","https://us-pa-2.siasky.net","https://us-va-1.siasky.net","https://us-va-2.siasky.net","https://us-va-3.siasky.net","https://us-va-4.siasky.net","https://us-va-5.siasky.net","https://us-la-2.siasky.net"),this.portal2&&t.push("https://eu-nl-102.skynetfree.net","https://eu-nl-103.skynetfree.net","https://eu-nl-104.skynetfree.net"),this.portal3&&t.push("https://eu-nl-101.skynetpro.net","https://eu-pol-101.skynetpro.net","https://eu-pol-102.skynetpro.net","https://us-va-101.skynetpro.net","https://us-tx-101.skynetpro.net","https://us-tx-102.skynetpro.net"),this.portal4&&t.push("https://web3portal.com"),this.portal5&&t.push("https://skynet.cool"),this.portals=t}setLocalStorage(){const t={skylink:this.skylink,skylinks:this.skylinks,timeout1:this.timeout1,timeout2:this.timeout2,timeout5:this.timeout5,timeout10:this.timeout10,portal1:this.portal1,portal2:this.portal2,portal3:this.portal3,portal4:this.portal4,portal5:this.portal5,SKYNETFREE_API_KEY:this.SKYNETFREE_API_KEY,SKYNETPRO_API_KEY:this.SKYNETPRO_API_KEY,SKYNETCOOL_API_KEY:this.SKYNETCOOL_API_KEY,WEB3PORTAL_API_KEY:this.WEB3PORTAL_API_KEY};localStorage.setItem("sldSettings",JSON.stringify(t))}loadLocalStorage(){const t=JSON.parse(localStorage.getItem("sldSettings")??"");this.skylink=t.skylink,this.skylinks=t.skylinks,this.timeout1=t.timeout1,this.timeout2=t.timeout2,this.timeout5=t.timeout5,this.timeout10=t.timeout10,this.portal1=t.portal1,this.portal2=t.portal2,this.portal3=t.portal3,this.portal4=t.portal4,this.portal5=t.portal5,this.SKYNETFREE_API_KEY=t.SKYNETFREE_API_KEY,this.SKYNETPRO_API_KEY=t.SKYNETPRO_API_KEY,this.SKYNETCOOL_API_KEY=t.SKYNETCOOL_API_KEY,this.WEB3PORTAL_API_KEY=t.WEB3PORTAL_API_KEY}textInput(){this.setLocalStorage()}mounted(){localStorage.getItem("sldSettings")||this.setLocalStorage(),this.loadLocalStorage()}};v=S([b.wA],v);var Y=v,O=Y,A=s(1001),x=(0,A.Z)(O,g,Z,!1,null,null,null),I=x.exports,T=s(1705);o.ZP.use(T.Z);var C=new T.Z({theme:{dark:!0}});o.ZP.config.productionTip=!1,new o.ZP({vuetify:C,render:t=>t(I)}).$mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,i){if(!o){var a=1/0;for(h=0;h<t.length;h++){o=t[h][0],n=t[h][1],i=t[h][2];for(var l=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[r])}))?o.splice(r--,1):(l=!1,i<a&&(a=i));if(l){t.splice(h--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var h=t.length;h>0&&t[h-1][2]>i;h--)t[h]=t[h-1];t[h]=[o,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],l=o[1],r=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(r)var h=r(s)}for(e&&e(o);u<a.length;u++)i=a[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(h)},o=self["webpackChunkskylink_doctor"]=self["webpackChunkskylink_doctor"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(6115)}));o=s.O(o)})();
//# sourceMappingURL=app.ecaebe98.js.map