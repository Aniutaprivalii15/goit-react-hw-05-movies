"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{967:function(e,t,r){r.d(t,{e:function(){return v}});var n=r(689),a=r(87),s="Movie_films__item__XjYQD",i="Movie_films__img__oRpl4",c="Movie_films__description__jdGN4",u="Movie_films__name__a5NeB",o="Movie_films__container__Cc0lZ",f="Movie_films__info__y7jS6",l="Movie_films__rating__wPIad",m=r(184),_=function(e){var t=e.movie,r=(0,n.TH)();return(0,m.jsxs)(a.rU,{to:"/movies/".concat(t.id),className:s,state:{from:r},children:[(0,m.jsx)("div",{className:i,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.original_title,loading:"lazy"})}),(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("p",{className:u,children:t.title||t.name}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("p",{className:f,children:t.release_date||t.first_air_date}),(0,m.jsx)("span",{className:l,children:t.vote_average.toFixed(2)})]})]})]},t.id)},p="MovieList_films__YHG2-",v=function(e){var t=e.movies;return(0,m.jsx)("ul",{className:p,children:t.map((function(e){return(0,m.jsx)(_,{movie:e})}))})}},530:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(439),a=r(791),s=r(87),i=r(818),c=r(967),u="Movies_Searchbar__x0Q8w",o="Movies_SearchForm__wjo2h",f="Movies_SearchFormButton__8YSXn",l="Movies_SearchFormButtonLabel__wEI6R",m="Movies_SearchFormInput__bFrPB",_=r(184);var p=function(){var e,t=(0,a.useState)([]),r=(0,n.Z)(t,2),p=r[0],v=r[1],d=(0,a.useState)(""),h=(0,n.Z)(d,2),x=h[0],j=h[1],g=(0,s.lr)(),w=(0,n.Z)(g,2),b=w[0],N=w[1],Z=null!==(e=b.get("query"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){Z&&(j(Z),(0,i.Ph)(Z).then((function(e){var t=e.results;v(t)})))}),[Z]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("header",{className:u,children:(0,_.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),N({query:x})},children:[(0,_.jsx)("button",{type:"submit",className:f,children:(0,_.jsx)("span",{className:l,children:"Search"})}),(0,_.jsx)("input",{className:m,type:"text",autoComplete:"off",name:"searchMovie",autoFocus:!0,placeholder:"Search movie",onChange:function(e){return j(e.target.value)}})]})}),(0,_.jsx)("main",{children:(0,_.jsx)(c.e,{movies:p})})]})}},818:function(e,t,r){r.d(t,{JN:function(){return c},Ku:function(){return l},Pg:function(){return o},Ph:function(){return u},fI:function(){return f}});var n=r(861),a=r(757),s=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"f9c0bb738fb5ed39704a871786e56353"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=530.8c214ba4.chunk.js.map