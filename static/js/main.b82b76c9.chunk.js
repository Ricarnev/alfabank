(this.webpackJsonpalfabank=this.webpackJsonpalfabank||[]).push([[0],{24:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),i=c(5),n=c.n(i),s=(c(24),c(6)),l=c(4),d=c(19),o=c.n(d),b="REMOVE_CARD",j="LIKE",h="SET_CARDS",u="ONLY_LIKED";function k(e){return{type:j,payload:e}}function m(e){return{type:b,payload:e}}function O(e){return{type:h,payload:e}}function f(){return{type:u}}c(48);var p=c.p+"static/media/remove.562b6f7b.svg",x=c.p+"static/media/like.6e367571.svg",y=c.p+"static/media/unlike.810c2b26.svg",v=c(1);function g(e){var t=e.img,c=e.text,a=e.like,r=e.remove,i=e.onLike;return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("button",{className:"card-remove-btn",onClick:r,children:Object(v.jsx)("img",{className:"card-remove-btn-icon",src:p,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"})}),Object(v.jsx)("img",{className:"card-img",src:t,alt:c}),Object(v.jsxs)("div",{className:"card-bottom",children:[Object(v.jsx)("span",{children:c}),Object(v.jsx)("button",{className:"card-like-btn",onClick:i,children:a?Object(v.jsx)("img",{className:"card-like-btn-icon",src:x,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}):Object(v.jsx)("img",{className:"card-like-btn-icon",src:y,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a"})})]})]})}var N=c.p+"static/media/github.04be58c1.svg";var _=Object(s.b)((function(e){return{characters:e.characters,likedCharacters:e.likedCharacters,showOnlyLiked:e.showOnlyLiked,initialized:e.initialized}}),(function(e){return{set_cards:Object(l.a)(O,e),remove_card:Object(l.a)(m,e),like_card:Object(l.a)(k,e),show_only_liked:Object(l.a)(f,e)}}))((function(e){return Object(a.useEffect)((function(){try{o.a.get("https://rickandmortyapi.com/api/character").then((function(t){return e.set_cards(t.data.results)}))}catch(t){console.log(t)}}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{className:"header",children:[Object(v.jsx)("h1",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0410\u043b\u044c\u0444\u0430-\u0411\u0430\u043d\u043a"}),Object(v.jsxs)("a",{className:"github-link",href:"https://github.com/Ricarnev/alfabank",children:["Link on",Object(v.jsx)("img",{className:"github-icon",src:N})]})]}),Object(v.jsxs)("div",{className:"cards-list-container",children:[e.showOnlyLiked?Object(v.jsx)("button",{className:"only-liked-button",onClick:e.show_only_liked,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}):Object(v.jsxs)("button",{className:"only-liked-button",onClick:e.show_only_liked,children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e",Object(v.jsx)("img",{className:"only-liked-icon",src:x,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u0430\u0439\u043a\u0430"})]}),Object(v.jsx)("div",{className:"cards-list",children:!1===e.initialized?Object(v.jsx)("p",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445..."}):e.showOnlyLiked?e.likedCharacters.length>0?e.likedCharacters.map((function(t){return Object(v.jsx)(g,{img:t.image,text:t.name,like:!!t.like,remove:function(){return e.remove_card(t.id)},onLike:function(){return e.like_card(t.id)}})})):Object(v.jsx)("p",{children:'\u041f\u043e\u0445\u043e\u0436\u0435, \u0432\u044b \u0435\u0449\u0435 \u043d\u0435 \u043b\u0430\u0439\u043a\u043d\u0443\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435" \u0438 \u043b\u0430\u0439\u043a\u043d\u0438\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0437\u0434\u0435\u0441\u044c.'}):e.characters.length>0?e.characters.map((function(t){return Object(v.jsx)(g,{img:t.image,text:t.name,like:!!t.like,remove:function(){return e.remove_card(t.id)},onLike:function(){return e.like_card(t.id)}})})):Object(v.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438, \u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0437\u0443\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443."})})]})]})})),C=c(3);var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{characters:[],likedCharacters:[],showOnlyLiked:!1,initialized:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(C.a)(Object(C.a)({},e),{},{characters:e.characters.filter((function(e){return e.id!==t.payload})),likedCharacters:e.likedCharacters.filter((function(e){return e.id!==t.payload}))});case j:return Object(C.a)(Object(C.a)({},e),{},{characters:e.characters.map((function(e){return e.id===t.payload?Object(C.a)(Object(C.a)({},e),{},{like:!e.like}):e})),likedCharacters:e.likedCharacters.filter((function(e){return e.id!==t.payload}))});case h:return Object(C.a)(Object(C.a)({},e),{},{characters:t.payload,initialized:!0});case u:return Object(C.a)(Object(C.a)({},e),{},{likedCharacters:e.characters.filter((function(e){return!0===e.like})),showOnlyLiked:!e.showOnlyLiked});default:return e}},w=Object(l.b)(L);n.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(s.a,{store:w,children:Object(v.jsx)(_,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b82b76c9.chunk.js.map