(function(t){function e(e){for(var s,l,n=e[0],i=e[1],c=e[2],p=0,m=[];p<n.length;p++)l=n[p],a[l]&&m.push(a[l][0]),a[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,n=1;n<o.length;n++){var i=o[n];0!==a[i]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var s={},a={app:0},r=[];function l(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=s,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(o,s,function(e){return t[e]}.bind(null,s));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("64a9"),a=o.n(s);a.a},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",[s("img",{attrs:{src:o("5b62")}}),s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("li",[s("router-link",{attrs:{to:"/browsers"}},[t._v("Browsers")])],1),s("li",[s("router-link",{attrs:{to:"/extensions"}},[t._v("Extensions")])],1),s("li",[s("router-link",{attrs:{to:"/apps"}},[t._v("Apps")])],1),s("li",[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),s("img",{staticStyle:{position:"absolute",left:"5px",bottom:"5px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-No%20longer%20available-inactive.svg"}}),s("img",{staticStyle:{position:"absolute",left:"5px",bottom:"59px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Available%20soon-yellow.svg"}}),s("img",{staticStyle:{position:"absolute",left:"5px",bottom:"86px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Working-success.svg"}}),s("img",{staticStyle:{position:"absolute",left:"5px",bottom:"32px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Blocked by LSR7-red.svg"}}),s("span",{staticStyle:{"font-size":"15px",position:"absolute",left:"5px",bottom:"111px"}},[t._v("What do the colors mean?")])],1)},r=[],l={name:"App",metaInfo:{title:"",titleTemplate:"%s • salad242",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"}]}},n=l,i=(o("034f"),o("2877")),c=Object(i["a"])(n,a,r,!1,null,null,null),u=c.exports,p=o("8c4f"),m=o("58ca"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",[s("span",{staticClass:"title"},[s("img",{staticClass:"shadow",attrs:{src:o("5b62")}})]),s("h3",[t._v("Please select a category above.")])])])}],f={name:"Home",metaInfo:{title:"Home"}},h=f,b=Object(i["a"])(h,d,g,!1,null,null,null),v=b.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"browsers"},[o("ul",{staticClass:"list"},[o("span",{staticClass:"title"},[t._v("Browsers")]),t._l(t.items,function(t){return o("li",[o("a",{attrs:{href:""+t.url}},[o("img",{staticClass:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])})],2)])},w=[],x={name:"Browsers",metaInfo:{title:"Browsers"},data:function(){return{items:[{name:"Potato",color:"red",url:"https://chrome.google.com/webstore/detail//eikdpecakdfglplkafngboigefiojocg"},{name:"Avocado",color:"success",url:"https://chrome.google.com/webstore/detail//bgkdgnahbdfddpagnmpkhbgdpepmbjbf"},{name:"Kermit's Meme Browser",color:"success",url:"https://chrome.google.com/webstore/detail//jpieeijbjnjpfclbbbmfnoncedamonga"},{name:"Steve The Monkey",color:"success",url:"https://chrome.google.com/webstore/detail//ldjkakppecnkjfcmbcehbmphmkdbhbkj"},{name:"Earls Browser",color:"success",url:"https://chrome.google.com/webstore/detail//bajbkoongpoeddacnegpakakhemifgmk"},{name:"Fortnite Sans Browser",color:"success",url:"https://chrome.google.com/webstore/detail//klkodfbmmgmfpmlgmfgfkekeilkdcdmh"},{name:"Patrick",color:"success",url:"https://chrome.google.com/webstore/detail//cnhcbpmjemifplbaopldlikncpcifjgf"},{name:"Cherry",color:"success",url:"https://chrome.google.com/webstore/detail//odgpbeipjlaiompgjpfjgpdddoephckk"},{name:"Rainboww",color:"success",url:"https://chrome.google.com/webstore/detail//ckfbmfccloijkilcokojoecmeipgdbmb"}]}}},_=x,j=Object(i["a"])(_,k,w,!1,null,null,null),y=j.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"extensions"},[o("ul",{staticClass:"list"},[o("span",{staticClass:"title"},[t._v("Extensions")]),t._l(t.items,function(t){return o("li",[o("a",{attrs:{href:""+t.url}},[o("img",{staticClass:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])})],2)])},O=[],E={name:"Extensions",metaInfo:{title:"Extensions"},data:function(){return{items:[{name:"Quizlet Assistant",color:"yellow",url:"https://chrome.google.com/webstore/detail//onomhgmepnaepoahbgffmjameginfgkm"},{name:"salAD Blocker",color:"yellow",url:"https://chrome.google.com/webstore/detail//ddmladhkbigkncghbhnkebioboipfcpk"}]}}},S=E,A=Object(i["a"])(S,C,O,!1,null,null,null),P=A.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"apps"},[o("ul",{staticClass:"list"},[o("span",{staticClass:"title"},[t._v("Apps")]),t._l(t.items,function(t){return o("li",[o("a",{attrs:{href:""+t.url}},[o("img",{staticClass:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])})],2)])},$=[],I={name:"Apps",metaInfo:{title:"Apps"},data:function(){return{items:[{name:"None yet.",color:"blue",url:""}]}}},M=I,T=Object(i["a"])(M,B,$,!1,null,null,null),D=T.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"apps"},[o("ul",{staticClass:"list"},[o("span",{staticClass:"title"},[t._v("Contact")]),t._l(t.items,function(t){return o("li",[o("a",{attrs:{href:""+t.url}},[o("img",{staticClass:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])})],2)])},W=[],q={name:"Contact",metaInfo:{title:"Contact"},data:function(){return{items:[{name:"Email",color:"blue",url:"mailto:jacob@salad242.gq"},{name:"Discord",color:"blue",url:"javascript:alert('I am ThePqtatoGalaxy#9001 on Discord')"},{name:"Camden's Discord Server",color:"blue",url:"https://discord.gg/W8MC5dE"}]}}},z=q,J=Object(i["a"])(z,H,W,!1,null,null,null),N=J.exports;const R=[{path:"/",component:v},{path:"/browsers",component:y},{path:"/extensions",component:P},{path:"/apps",component:D},{path:"/contact",component:N}];var F=R;s["a"].config.productionTip=!1,s["a"].use(m["a"]),s["a"].use(p["a"]);const G=new p["a"]({routes:F});new s["a"]({router:G,render:t=>t(u)}).$mount("#app")},"5b62":function(t,e,o){t.exports=o.p+"img/logo.f23fc558.png"},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.b8e3ac62.js.map