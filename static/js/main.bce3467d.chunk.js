(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,n){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3hQ2A","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__FXdl8"}},11:function(e,t,n){e.exports={Overlay:"Modal_Overlay__1Qc2p",Modal:"Modal_Modal__181Zg"}},12:function(e,t,n){e.exports={ButtonContainer:"Button_ButtonContainer__3fFkT",Button:"Button_Button__2m2fW"}},14:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__2iW8N"}},20:function(e,t,n){},21:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(4),l=n.n(o),i=(n(20),n(13)),u=n(3),s=(n(21),n(8)),m=(n(22),["title","titleId"]);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){var n=e.title,c=e.titleId,o=h(e,m);return r.createElement("svg",b({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("g",null,r.createElement("path",{d:"M66.8,62.1l-0.5,0.5L59,55.3c4.3-5.1,6.9-11.7,6.9-18.9c0-7.7-3.1-15.2-8.6-20.7C51.8,10.1,44.2,7,36.5,7 C20.3,7,7.2,20.2,7.2,36.4c0,7.9,3.1,15.3,8.7,20.9c5.5,5.5,12.8,8.5,20.5,8.5c0.1,0,0.1,0,0.2,0c7.2,0,13.8-2.6,18.9-6.9l7.3,7.3 L62,66.9c-1,1-1,2.6,0,3.5l20.8,20.8c2.3,2.3,6.1,2.3,8.4,0l0,0c2.3-2.3,2.3-6.1,0-8.4L70.3,62.1C69.3,61.1,67.8,61.1,66.8,62.1z  M36.5,60.7c0,0-0.1,0-0.1,0c-6.4,0-12.5-2.5-17-7c-4.6-4.6-7.2-10.8-7.2-17.3C12.2,22.9,23.1,12,36.5,12c6.4,0,12.6,2.6,17.2,7.2 c4.6,4.6,7.2,10.8,7.2,17.2C60.9,49.8,50,60.7,36.5,60.7z"}),r.createElement("path",{d:"M16.8,36.4c0,2.1,0.3,4.1,0.9,6.1c0.5,1.4,2.1,2.1,3.5,1.5l0,0c1.1-0.5,1.7-1.8,1.3-3c-0.5-1.5-0.7-3-0.7-4.6 c0-3.7,1.4-7.2,3.9-9.9c0.8-0.9,0.8-2.3,0.1-3.2l0,0c-1-1.2-2.7-1.2-3.8-0.1C18.7,26.7,16.8,31.4,16.8,36.4z"}))))}var j=r.forwardRef(f),d=(n.p,n(5)),g=n.n(d),p=n(1);function O(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],o=a[1];return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{className:g.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},children:[Object(p.jsxs)("button",{type:"submit",className:g.a.SearchFormButton,children:[Object(p.jsx)(j,{width:"25",height:"25"}),Object(p.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})]}),Object(p.jsx)("input",{className:g.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var v=n(10),x=n.n(v);function y(e){var t=e.id,n=e.webformatURL,a=e.tags,r=e.largeImageURL,c=e.openModal;return Object(p.jsx)("li",{id:t,onClick:c,className:x.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:n,alt:a,"data-img":r,className:x.a.ImageGalleryItemImage})})}var S=n(14),_=n.n(S);function I(e){var t=e.pictures,n=e.openModal;return Object(p.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(p.jsx)(y,{webformatURL:a,largeImageURL:r,openModal:n},t)}))})}var w=n(11),L=n.n(w),B=document.querySelector("#root");function F(e){var t=e.modalImage,n=e.onToggleModal;Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return Object(o.createPortal)(Object(p.jsx)("div",{className:L.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(p.jsx)("div",{className:L.a.Modal,children:Object(p.jsx)("img",{src:t,alt:""})})}),B)}var C=n(12),M=n.n(C);function k(e){var t=e.fetchImages;return Object(p.jsx)("div",{className:M.a.ButtonContainer,children:Object(p.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load more..."})})}var E=n(15),N=n.n(E),G=function(){return Object(p.jsx)("div",{class:"Loader",children:Object(p.jsx)(N.a,{type:"Bars",color:"#00BFFF",height:100,width:100,timeout:3e3})})};function T(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),o=Object(u.a)(c,2),l=o[0],m=o[1],b=Object(r.useState)(null),h=Object(u.a)(b,2),f=(h[0],h[1]),j=Object(r.useState)(1),d=Object(u.a)(j,2),g=d[0],v=d[1],x=Object(r.useState)(!1),y=Object(u.a)(x,2),S=y[0],_=y[1],w=Object(r.useState)(!1),L=Object(u.a)(w,2),B=L[0],C=L[1],M=Object(r.useState)([]),E=Object(u.a)(M,2),N=E[0],T=E[1];Object(r.useEffect)((function(){""!==n&&R()}),[n]);var R=function(e){_(!0),function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","&page=").concat(e,"&key=13128632-519e28f670cc6f8f58c4d9c9f&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),1e3)}))})).then((function(e){return e.json()})).then((function(e){return e.hits}))}(n,g).then((function(e){m((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),v(g+1)})).catch((function(e){f("\u041e\u0448\u0438\u0431\u043a\u0430")})).then((function(){e&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){_(!1)}))},P=function(){C(!B)};return Object(p.jsxs)("div",{class:"App",children:[Object(p.jsx)(O,{onSubmit:function(e){a(e),m([]),v(1)}}),Object(p.jsx)(I,{openModal:function(e){T(e.target.dataset.img),P()},pictures:l}),S&&Object(p.jsx)(G,{}),l.length>0&&Object(p.jsx)(k,{fetchImages:function(){R(!0)}}),B&&Object(p.jsx)(F,{onToggleModal:P,modalImage:N}),Object(p.jsx)(s.a,{autoClose:3e3})]})}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};l.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),R()},5:function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__3pBL3",SearchForm:"Searchbar_SearchForm__2ETRm",SearchFormButton:"Searchbar_SearchFormButton__Wwoug",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__10qZE",SearchFormInput:"Searchbar_SearchFormInput__18L5M"}}},[[44,1,2]]]);
//# sourceMappingURL=main.bce3467d.chunk.js.map