(window["webpackJsonpreact-mini-app"]=window["webpackJsonpreact-mini-app"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),c=t.n(o),l=(t(64),t(38)),i=(t(65),t(66),t(109)),s=t(110),m=t(54),u=t(112),d=t(111);function f(){return r.a.createElement(i.a,{bg:"light",expand:"lg"},r.a.createElement(i.a.Brand,{href:"#"},"Movie Catalog"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"w-75"},r.a.createElement(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"})),r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(d.a,{title:"Vigneshwaran",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#"},"Logout")))))}function p(){return r.a.createElement("div",null,r.a.createElement("p",null,"Pagination"))}var E=t(113);function g(e){var a=e.Title,t=e.Year,n=e.imdbID,o=e.Poster;return r.a.createElement("div",{className:"col-12 col-md-3 mb-5"},r.a.createElement(E.a,{style:{width:"18rem"}},r.a.createElement(E.a.Img,{variant:"top",src:o}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,a),r.a.createElement(E.a.Text,null,t," ",n," example text to build on the card title and make up the bulk of the card's content."))))}var h=t(26),v=t.n(h);v.a.defaults.baseURL="http://www.omdbapi.com/",v.a.interceptors.request.use((function(e){return console.log("start api"),e}),(function(e){return console.log("end api"),Promise.reject(e)})),v.a.interceptors.response.use((function(e){return console.log("end api"),e}),(function(e){return console.log("end api"),Promise.reject(e)}));var b=v.a;function w(e){var a=e.searchInfo;return console.log({searchInfo:a}),r.a.createElement("div",{className:"my-5"},r.a.createElement("h4",null,"You searched for: Batman, ",a," results found"))}var y=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){console.log("init"),b.get("?i=tt3896198&apikey=fa281222&s=magic&page=3").then((function(e){console.log(e.data),o(e.data.Search),m(e.data.totalResults)})).catch((function(e){console.log(e)})).finally((function(){}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(w,{searchInfo:s}),r.a.createElement("section",{className:"container-fluid"},r.a.createElement("div",{className:"row"},t&&t.map((function(e,a){return r.a.createElement(g,Object.assign({key:a},e))})))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,a,t){e.exports=t(106)},64:function(e,a,t){},66:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.8832acd2.chunk.js.map