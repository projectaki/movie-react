(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{23:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(33),s=n.n(o),i=(n(40),n(18)),r=n(3),l=(n(23),n(6)),u=n(0),m=function(e){return Object(u.jsxs)("div",{id:"n",className:"navbar",children:[Object(u.jsx)(l.c,{to:{pathname:"/",reset:!0},style:{textDecoration:"none",position:"absolute",left:"2vw"},replace:!0,children:Object(u.jsx)("p",{style:{fontSize:"4vmin",fontWeight:"bold",color:"#E3C11B"},children:"Home"})}),Object(u.jsxs)("div",{style:{fontSize:"4vmin",fontWeight:"900",color:"#1B78E3"},children:[e.isMovie&&"MOVIES",!e.isMovie&&"TV SHOWS",Object(u.jsx)("i",{style:{paddingLeft:"1vw",fontSize:"4vmin"},className:"fas fa-tv fa-2x"})]}),Object(u.jsxs)("div",{className:"link-cont",children:[Object(u.jsx)(l.c,{activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",to:"/Popular",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Popular"})}),Object(u.jsx)(l.c,{to:"/NowPlaying",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsxs)("div",{className:"nav-list-element",children:[e.isMovie&&"In Cinemas",!e.isMovie&&"Now Airing"]})}),Object(u.jsx)(l.c,{to:"/Upcoming",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Upcoming"})})]}),Object(u.jsx)("i",{onClick:function(e){return function(e){e.stopPropagation();var t=document.getElementById("mobile-menu");t.classList.contains("toggle")?t.classList.remove("toggle"):t.classList.add("toggle")}(e)},className:"fas fa-bars fa-1x mobile-icon"}),Object(u.jsxs)("div",{id:"mobile-menu",className:"div-cont-mobile ",style:{zIndex:"1"},children:[Object(u.jsx)(l.c,{activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",to:"/Popular",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Popular"})}),Object(u.jsx)(l.c,{to:"/NowPlaying",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsxs)("div",{className:"nav-list-element",children:[e.isMovie&&"In Cinemas",!e.isMovie&&"Now Airing"]})}),Object(u.jsx)(l.c,{to:"/Upcoming",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Upcoming"})})]})]})},d=n(2),p=n(4),v=n.n(p),g=n(35),j=n(8),b=(n(48),function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.getResults();var n=document.getElementById("search");0===e.length&&n.classList.add("up-pos")},children:[Object(u.jsx)("input",{className:"search-bar search-bar-position",id:"search",type:"search",placeholder:"Search for ".concat(e.isMovie?"movies":"tv shows","..."),required:!0,autoComplete:"off",onChange:function(t){return e.setSearch(t.target.value)},onFocus:function(e){return e.target.value=""}}),Object(u.jsx)("input",{type:"submit",style:{display:"none"}})]})})}),f=n(14),h=n(15),O=n(16),x=n.n(O),y=x.a.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-type":"application/json"}}),S=new(function(){function e(){Object(f.a)(this,e),this.apiKey="?api_key=4198345852c55a862ccb220b37954952"}return Object(h.a)(e,[{key:"findByMovieId",value:function(e){return y.get("/movie/".concat(e).concat(this.apiKey))}},{key:"searchWithQuery",value:function(e){var t=escape(e);return y.get("/search/movie".concat(this.apiKey,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}},{key:"getReccomendation",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getSimilar",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/similar").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getPopular",value:function(e,t){return y.get("https://api.themoviedb.org/3/movie/popular".concat(this.apiKey,"&language=en-US&page=").concat(e),{cancelToken:t})}},{key:"getNowPlaying",value:function(){return y.get("https://api.themoviedb.org/3/movie/now_playing".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getUpcoming",value:function(){return y.get("https://api.themoviedb.org/3/movie/upcoming".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReviews",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReleaseDate",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/release_dates").concat(this.apiKey))}},{key:"getCredits",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits").concat(this.apiKey,"&language=en-US"))}},{key:"getProviders",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/watch/providers").concat(this.apiKey))}}]),e}()),k=new(function(){function e(){Object(f.a)(this,e),this.apiKey="?api_key=4198345852c55a862ccb220b37954952"}return Object(h.a)(e,[{key:"findByMovieId",value:function(e){return y.get("/tv/".concat(e).concat(this.apiKey))}},{key:"searchWithQuery",value:function(e){var t=escape(e);return y.get("/search/tv".concat(this.apiKey,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}},{key:"getReccomendation",value:function(e){return y.get("https://api.themoviedb.org/3/tv/".concat(e,"/recommendations").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getSimilar",value:function(e){return y.get("https://api.themoviedb.org/3/tv/".concat(e,"/similar").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getPopular",value:function(e,t){return y.get("https://api.themoviedb.org/3/tv/popular".concat(this.apiKey,"&language=en-US&page=").concat(e),{cancelToken:t})}},{key:"getNowPlaying",value:function(){return y.get("https://api.themoviedb.org/3/tv/airing_today".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getUpcoming",value:function(){return y.get("https://api.themoviedb.org/3/tv/on_the_air".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReviews",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReleaseDate",value:function(e){return y.get("https://api.themoviedb.org/3/movie/".concat(e,"/release_dates").concat(this.apiKey))}},{key:"getCredits",value:function(e){return y.get("https://api.themoviedb.org/3/tv/".concat(e,"/credits").concat(this.apiKey,"&language=en-US"))}},{key:"getProviders",value:function(e){return y.get("https://api.themoviedb.org/3/tv/".concat(e,"/watch/providers").concat(this.apiKey))}}]),e}()),w=(n(67),function(e){var t=null===e.data.poster_path?"":"http://image.tmdb.org/t/p/w500".concat(e.data.poster_path);return"404"!==e.data&&Object(u.jsx)("div",{className:"movie-card",children:Object(u.jsx)("img",{className:"movie-card-img",src:t,alt:e.data.original_title||e.data.original_name})})}),E=(n(68),function(e){var t=Object(d.f)();return Object(u.jsx)("div",{className:"movie-container",children:e.movies.map((function(e){return Object(u.jsx)(l.b,{to:{pathname:"/MovieProfile/".concat(e.id),movie:e},children:Object(u.jsx)("div",{onClick:function(){return function(){var e=t.location.pathname,n=window.pageYOffset;sessionStorage.setItem("scroll".concat(e),n),window.scrollTo(0,0)}()},className:"movie-card-wrapper",children:Object(u.jsx)(w,{data:e})})},e.id)}))})}),N=(n(69),function(e){var t=e.setNav,n=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),c=Object(r.a)(n,1)[0],o=Object(a.useState)(""),s=Object(r.a)(o,2),i=s[0],l=s[1],m=Object(a.useState)(JSON.parse(sessionStorage.getItem("movies"))||""),p=Object(r.a)(m,2),f=p[0],h=p[1],O=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?S:k),x=Object(r.a)(O,1)[0],y=Object(d.g)();Object(a.useEffect)((function(){t()}),[t]),Object(a.useEffect)((function(){h("")}),[x]),Object(a.useEffect)((function(){var e=document.getElementById("search");!0===y.reset&&(h([]),e.classList.remove("anim","up-pos"),e.classList.add("down-pos"))}),[y]),Object(a.useEffect)((function(){sessionStorage.setItem("movies",JSON.stringify(f))}),[f]),Object(a.useEffect)((function(){var e=document.getElementById("search");f.length>0?(e.classList.remove("down-pos"),e.classList.add("up-pos")):(e.classList.remove("anim","up-pos"),e.classList.add("down-pos"))}),[f]);var w=function(){var e=Object(j.a)(v.a.mark((function e(){var t,n,a,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.searchWithQuery(i);case 2:t=e.sent,n=[],a=Object(g.a)(t.data.results);try{for(a.s();!(c=a.n()).done;)null!==(o=c.value).poster_path&&"en"===o.original_language&&o.popularity>15&&o.vote_count>30&&null!==o.backdrop_path&&n.push(o)}catch(s){a.e(s)}finally{a.f()}h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{search:i,setSearch:l,getResults:w,length:f.length,isMovie:c}),0!==f.length&&Object(u.jsx)(E,{movies:f})]})}),C=(n(70),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{style:{fontSize:"2vw",fontFamily:"sans-serif",fontWeight:"900",color:"#DCEC11"},children:"API provided by https://www.themoviedb.org/"})})}),I=function(e){e.isMovie;var t=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),n=Object(r.a)(t,1)[0],c=Object(d.f)().location.movie,o=Object(d.f)().location.pathname.substring(14),s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],m=i[1],p=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?S:k),g=Object(r.a)(p,1)[0],b=0;Object(a.useEffect)((function(){console.log(l.providers)}),[l]);var f=Object(a.useCallback)(function(){var e=Object(j.a)(v.a.mark((function e(t){var n,a,c,o,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credits:null,rec:null,similar:null,providers:null},e.next=3,g.getCredits(t);case 3:return a=e.sent,e.next=6,g.getReccomendation(t);case 6:return c=e.sent,e.next=9,g.getSimilar(t);case 9:return o=e.sent,e.next=12,g.getProviders(t);case 12:return s=e.sent,e.next=15,Promise.all([a,c,o,s]);case 15:return i=e.sent,n.credits=i[0].data,n.rec=i[1].data.results.filter((function(e){return null!==e.poster_path})),n.similar=i[2].data.results.filter((function(e){return null!==e.poster_path})),n.providers=i[3].data,e.abrupt("return",n);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[g]);return Object(a.useEffect)((function(){var e=!0;void 0!==c&&(m(c),sessionStorage.setItem("movieprofile".concat(o),JSON.stringify(c)));var t=JSON.parse(sessionStorage.getItem("movieprofile".concat(o)));return void 0===t.rec&&f(t.id).then((function(n){var a=Object.assign({},n,t);(function(){var t=Object(j.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sessionStorage.setItem("movieprofile".concat(o),JSON.stringify(a));case 2:n=JSON.parse(sessionStorage.getItem("movieprofile".concat(o))),e&&m(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()})),m(JSON.parse(sessionStorage.getItem("movieprofile".concat(o)))),function(){return e=!1}}),[o,c,f]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"profile-cont",children:[Object(u.jsx)("div",{children:Object(u.jsx)(w,{data:l})}),Object(u.jsxs)("div",{className:"text-cont",children:[Object(u.jsx)("div",{className:"title-cont",children:Object(u.jsxs)("h2",{className:"movie-title",children:[l.original_title||l.original_name," (",Object(u.jsx)("span",{style:{fontSize:"6vmin",fontStyle:"italic",color:"#EAC510"},children:""!==l&&(void 0!==l.release_date&&l.release_date.substring(0,4)||void 0!==l.first_air_date&&l.first_air_date.substring(0,4))}),")"]})}),Object(u.jsx)("div",{className:"desc-cont",children:Object(u.jsx)("p",{className:"movie-desc",children:l.overview})}),Object(u.jsx)("div",{className:"cast",children:""!==l&&void 0!==l.credits&&l.credits.cast.map((function(e){return Object(u.jsxs)("div",{className:"cast-record",children:[Object(u.jsx)("span",{className:"cell",children:e.name}),Object(u.jsx)("span",{className:"cell2",children:e.character})]},b++)}))})]}),Object(u.jsxs)("p",{className:"rating",children:[Object(u.jsx)("i",{style:{paddingRight:"1vw",fontSize:"9vmin",color:"#FFD700",textShadow:"0 0 15px white"},className:"fas fa-star fa-1x"}),Object(u.jsx)("span",{style:{color:"#FFD700",textShadow:"0 0 10px black"},children:l.vote_average})]})]}),Object(u.jsx)("h2",{style:{textAlign:"center",color:"#1B78E3",fontSize:"6vmin"},children:"Reccomended ".concat(n?"movies":"tv shows")}),void 0!==l.rec&&Object(u.jsx)(E,{movies:l.rec}),Object(u.jsx)("h2",{style:{textAlign:"center",color:"#1B78E3",fontSize:"6vmin"},children:"Similar ".concat(n?"movies":"tv shows"," based on keywords and genres")}),void 0!==l.similar&&Object(u.jsx)(E,{movies:l.similar}),Object(u.jsx)(C,{})]})},_=(n(71),n(72),function(){var e=Object(d.f)(),t=Object(a.useState)(JSON.parse(sessionStorage.getItem("".concat(e.location.path)))||[]),n=Object(r.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(JSON.parse(sessionStorage.getItem("".concat(e.location.path,"pages")))||1),i=Object(r.a)(s,2),l=i[0],m=i[1],p=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?S:k),g=Object(r.a)(p,1)[0],b=Object(a.useCallback)(function(){var t=Object(j.a)(v.a.mark((function t(n,a){var s,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},t.next=3,Promise.all(s(n).map(function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getPopular(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:i=t.sent,o(i),sessionStorage.setItem("".concat(e.location.path),JSON.stringify(c)),sessionStorage.setItem("".concat(e.location.path,"pages"),l);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[g,e.location.path,l,c]);Object(a.useEffect)((function(){o([])}),[g]),Object(a.useEffect)((function(){(function(){var t=Object(j.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,parseInt(sessionStorage.getItem("scroll".concat(e.location.pathname)));case 2:n=t.sent,setTimeout((function(){window.scrollTo(0,n)}),100);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.location.pathname]),Object(a.useEffect)((function(){var e=x.a.CancelToken.source();return b(l,e.token).catch((function(e){})),function(){e.cancel("canceled async call")}}),[l,b]);return Object(u.jsxs)(u.Fragment,{children:[null!==c&&c.map((function(e){return 0!==c.length&&Object(u.jsx)(E,{movies:e.data.results},e.data.page)})),Object(u.jsx)("div",{className:"load-cont",children:Object(u.jsx)("div",{className:"load-more-btn",onClick:function(){return function(){m(l+1);var t=e.location.pathname,n=document.body.scrollTop||document.documentElement.scrollTop;sessionStorage.setItem("scroll".concat(t),n)}()},children:"Load more..."})}),Object(u.jsx)(C,{})]})}),L=function(){var e=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?S:k),t=Object(r.a)(e,1)[0],n=Object(d.f)();Object(a.useEffect)((function(){i([])}),[t]),Object(a.useEffect)((function(){var e=parseInt(sessionStorage.getItem("scroll".concat(n.location.pathname)));window.scrollTo(0,e)}),[n.location.pathname]);var c=Object(a.useState)([]),o=Object(r.a)(c,2),s=o[0],i=o[1],l=Object(a.useCallback)(Object(j.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNowPlaying();case 2:n=e.sent,a=n.data.results.filter((function(e){return"en"===e.original_language})),i(a);case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(a.useEffect)((function(){return l()}),[l]),Object(u.jsxs)(u.Fragment,{children:[0!==s.length&&Object(u.jsx)(E,{movies:s}),";"]})},T=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(d.f)(),s=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?S:k),i=Object(r.a)(s,1)[0];Object(a.useEffect)((function(){c([])}),[i]),Object(a.useEffect)((function(){var e=parseInt(sessionStorage.getItem("scroll".concat(o.location.pathname)));window.scrollTo(0,e)}),[o.location.pathname]);var l=Object(a.useCallback)(Object(j.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getUpcoming();case 2:t=e.sent,n=t.data.results.filter((function(e){return"en"===e.original_language})),c(n);case 5:case"end":return e.stop()}}),e)}))),[i]);return Object(a.useEffect)((function(){return l()}),[l]),Object(u.jsx)(u.Fragment,{children:0!==n.length&&Object(u.jsx)(E,{movies:n})})},U=(n(73),function(){var e=Object(d.f)();Object(a.useEffect)((function(){window.onscroll=function(){t()},t(),window.onclick=function(){document.getElementById("mobile-menu").classList.remove("toggle")}}),[]);var t=function(){var e=document.getElementById("top-button");document.body.scrollTop>500||document.documentElement.scrollTop>500?e.style.display="block":e.style.display="none"};return Object(u.jsx)("i",{onClick:function(){return document.body.scrollTop=0,document.documentElement.scrollTop=0,void sessionStorage.setItem("scroll".concat(e.location.pathname),0)},id:"top-button",className:"fas fa-chevron-circle-up fa-3x top-button"})}),K=function(){return Object(u.jsx)("div",{id:"demo",children:"HELLO"})},P=(n(74),function(){Object(a.useEffect)((function(){var e=document.getElementById("n");return e.classList.add("hide-nav"),function(){return e.classList.remove("hide-nav")}}),[]);return Object(u.jsx)("div",{className:"main-page",children:Object(u.jsxs)("div",{className:"select-cont",children:[Object(u.jsx)(l.b,{to:"/Home",style:{textDecoration:"none",color:"black"},children:Object(u.jsx)("div",{onClick:function(){sessionStorage.setItem("SELECTOR","tv")},className:"select",children:"Tv-series"})}),Object(u.jsx)(l.b,{to:"/Home",style:{textDecoration:"none",color:"black"},children:Object(u.jsx)("div",{onClick:function(){sessionStorage.setItem("SELECTOR","movie")},className:"select",children:"Movies"})})]})})});var R=function(){var e=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),t=Object(r.a)(e,2),n=t[0],c=t[1],o=function(){c("movie"===sessionStorage.getItem("SELECTOR"))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{isMovie:n}),Object(u.jsx)(U,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:P}),Object(u.jsx)(d.a,{exact:!0,path:"/Home",render:function(e){return Object(u.jsx)(N,Object(i.a)(Object(i.a)({},e),{},{setNav:o}))}}),Object(u.jsx)(d.a,{exact:!0,path:"/MovieProfile/:id",render:function(e){return Object(u.jsx)(I,Object(i.a)({},e))}}),Object(u.jsx)(d.a,{exact:!0,path:"/Popular",component:_}),Object(u.jsx)(d.a,{exact:!0,path:"/NowPlaying",component:L}),Object(u.jsx)(d.a,{exact:!0,path:"/Upcoming",component:T}),Object(u.jsx)(d.a,{exact:!0,path:"/TEST",component:K})]})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(R,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ca08536a.chunk.js.map