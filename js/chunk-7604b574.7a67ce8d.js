(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7604b574","chunk-55d286b8"],{"07ac":function(t,e,a){var n=a("23e7"),r=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},"0cb2":function(t,e,a){var n=a("7b0b"),r=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,d,l){var u=a+t.length,_=c.length,f=s;return void 0!==d&&(d=n(d),f=o),i.call(l,f,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(u);case"<":o=d[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>_){var l=r(s/10);return 0===l?n:l<=_?void 0===c[l-1]?i.charAt(1):c[l-1]+i.charAt(1):n}o=c[s-1]}return void 0===o?"":o}))}},"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("17c2"),o=a("9112");for(var s in r){var c=n[s],d=c&&c.prototype;if(d&&d.forEach!==i)try{o(d,"forEach",i)}catch(l){d.forEach=i}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1db7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogo"},[a("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[a("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),a("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),a("div",{staticClass:"px-2 py-3 p-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(e,n){return a("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[a("div",{staticClass:"col-auto dialogo__chat__item__person"},[a("img",{attrs:{src:e.personaje.img}}),a("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),a("div",{staticClass:"col dialogo__chat__item__message__container"},[a("div",{staticClass:"dialogo__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble"},[a("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[a("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(n,r){return["*"===n?a("div",{key:"phrase-"+e.id+"-"+r,ref:"phrase-"+e.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===e.id},on:{drop:function(a){return a.preventDefault(),t.onDrop(e.id)},dragenter:function(a){return a.preventDefault(),t.onDragEnter(e.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[e.id]?a("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+r,domProps:{innerHTML:t._s(n)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[a("hr",{staticClass:"my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?a("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()]),a("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[a("Audio",{attrs:{audio:e.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),a("div",{staticClass:"d-flex justify-content-end me-3"},[a("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(a){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])]),a("div",{staticClass:"col-1"})])})),0),t._m(0),a("div",{staticClass:"col dialogo__words"},[a("div",{staticClass:"dialogo__words__content"},[a("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?a("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,ref:"word-"+e.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},domProps:{innerHTML:t._s(e.palabra)},on:{touchstart:function(a){return a.preventDefault(),t.onTouchStart(e.id)},touchmove:function(a){return a.preventDefault(),t.onTouchMove(a,e.id)},touchend:function(a){return a.preventDefault(),t.onTouchEnd(a,e.id)},touchcancel:function(a){return a.preventDefault(),t.onTouchCancel(a,e.id)}}})})):t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(e.palabra)},on:{dragstart:function(a){return t.onStartDrag(e.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),a("div",{staticClass:"dialogo__words__footer"},[t.score?a("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?a("div",{staticClass:"dialogo__score p-3 approved"},[t._m(1)]):t._e(),"disapproved"===t.score?a("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[t._m(2)]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?a("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?a("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?a("button",{on:{click:t.reset}},[t._v("Volver a empezar")]):t._e()]):t._e()])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-md-none"},[a("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-2"},[n("div",{staticClass:"dialogo__score__icon"},[n("img",{attrs:{src:a("86bd")}})])]),n("div",{staticClass:"col"},[n("div",{staticClass:"dialogo__score__text h5 mb-0"},[t._v("¡Muy bien! ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-2"},[n("div",{staticClass:"dialogo__score__icon"},[n("img",{attrs:{src:a("3b23")}})])]),n("div",{staticClass:"col"},[n("div",{staticClass:"dialogo__score__text h5 mb-0"},[t._v("¡Casi!")])])])}],i=a("5530"),o=(a("d81d"),a("7db0"),a("4de4"),a("07ac"),a("caad"),a("2532"),a("ac1f"),a("1276"),a("5319"),a("b2ea")),s={name:"Dialogo",components:{Audio:o["default"]},props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo.dialogo?this.dialogo.dialogo.map((function(e,a){return Object(i["a"])(Object(i["a"])({},e),{},{id:t.uid+a+1,textoIng:t.splitPhrase(e.textoIng),textoEsp:t.splitPhrase(e.textoEsp),personaje:t.dialogo.personajes.find((function(t){return t.nombre===e.personaje}))})})):[]},words:function(){return this.shuffle(this.dialogoComputed.map((function(t){return{palabra:t.palabra,id:t.id}})).filter((function(t){return t.palabra})))},answerWordsIds:function(){return Object.values(this.answers).map((function(t){return t.dragId}))},wordsToShow:function(){var t=this;return this.words.filter((function(e){return!t.answerWordsIds.includes(e.id)}))}},created:function(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag:function(t){this.dragId=t},onEndDrag:function(){this.dragId=null},onDrop:function(t){var e=this;this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find((function(t){return t.id===e.dragId})).palabra}),this.dropId=null)},onDragEnter:function(t){this.dropId=t},onDragLeave:function(){this.dropId=null},onTouchStart:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.add("touch-drag")},onTouchMove:function(t,e){var a=this.$refs["word-".concat(e)][0],n=a.getBoundingClientRect(),r=t.touches[0];a.style.top="".concat(r.clientY-n.height/2,"px"),a.style.left="".concat(r.clientX-n.width/2,"px")},onTouchEnd:function(t,e){var a=this;if(t.changedTouches.length>1)this.resetDragElm(e);else{var n=this.$refs["chat-".concat(this.uid)],r=n.getBoundingClientRect(),i=t.changedTouches[0],o=i.clientX>r.x&&i.clientX<r.x+r.width,s=i.clientY>r.y&&i.clientY<r.y+r.height;if(o&&s){var c,d=this.words.some((function(t){var e=a.$refs["phrase-".concat(t.id)][0],n=e.getBoundingClientRect(),r=25,o=i.clientX>n.x-r&&i.clientX<n.x+n.width+r,s=i.clientY>n.y-r&&i.clientY<n.y+n.height+r;return o&&s&&(c=t.id),o&&s}));d&&this.$set(this.answers,c,{dragId:e,dropId:c,palabra:this.words.find((function(t){return t.id===e})).palabra}),this.resetDragElm(e)}else this.resetDragElm(e)}},onTouchCancel:function(t){this.resetDragElm(t)},resetDragElm:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.remove("touch-drag")},toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(e){return e!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},c=s,d=a("2877"),l=Object(d["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},2532:function(t,e,a){"use strict";var n=a("23e7"),r=a("5a34"),i=a("1d80"),o=a("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(i(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"3b23":function(t,e,a){t.exports=a.p+"img/red-x.76179c7f.svg"},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("50c4"),o=a("a691"),s=a("1d80"),c=a("8aa5"),d=a("0cb2"),l=a("14c3"),u=Math.max,_=Math.min,f=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(a,n){var r=s(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!h&&p||"string"===typeof n&&-1===n.indexOf(g)){var s=a(e,t,this,n);if(s.done)return s.value}var v=r(t),m=String(this),b="function"===typeof n;b||(n=String(n));var C=v.global;if(C){var w=v.unicode;v.lastIndex=0}var y=[];while(1){var E=l(v,m);if(null===E)break;if(y.push(E),!C)break;var x=String(E[0]);""===x&&(v.lastIndex=c(m,i(v.lastIndex),w))}for(var D="",O=0,I=0;I<y.length;I++){E=y[I];for(var T=String(E[0]),j=u(_(o(E.index),m.length),0),P=[],S=1;S<E.length;S++)P.push(f(E[S]));var $=E.groups;if(b){var k=[T].concat(P,j,m);void 0!==$&&k.push($);var A=String(n.apply(void 0,k))}else A=d(T,m,j,P,$,n);j>=O&&(D+=m.slice(O,j)+A,O=j+T.length)}return D+m.slice(O)}]}))},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"6f53":function(t,e,a){var n=a("83ab"),r=a("df75"),i=a("fc6a"),o=a("d1e7").f,s=function(t){return function(e){var a,s=i(e),c=r(s),d=c.length,l=0,u=[];while(d>l)a=c[l++],n&&!o.call(s,a)||u.push(t?[a,s[a]]:s[a]);return u}};t.exports={entries:s(!0),values:s(!1)}},"86bd":function(t,e,a){t.exports=a.p+"img/green-check.f4a3fa01.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},ab13:function(t,e,a){var n=a("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},b2ea:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?n("button",{staticClass:"audio__btn",on:{click:t.play}},[n("img",{attrs:{src:a("5ccd")}})]):n("button",{staticClass:"audio__btn",on:{click:t.pause}},[n("img",{attrs:{src:a("f034")}})]):n("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[n("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},r=[],i=a("8fb3"),o={name:"Audio",mixins:[i["a"]]},s=o,c=a("2877"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports},b64b:function(t,e,a){var n=a("23e7"),r=a("7b0b"),i=a("df75"),o=a("d039"),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(r(t))}})},caad:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").includes,i=a("44d2");n({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),i=a("56ef"),o=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),r=s.f,d=i(n),l={},u=0;while(d.length>u)a=r(n,e=d[u++]),void 0!==a&&c(l,e,a);return l}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),i=a("fc6a"),o=a("06cf").f,s=a("83ab"),c=r((function(){o(1)})),d=!s||c;n({target:"Object",stat:!0,forced:d,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-7604b574.7a67ce8d.js.map