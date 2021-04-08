(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{25:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(35),o=n.n(s),i=(n(42),n(20)),r=n(3),l=(n(25),n(5)),u=n(0),d=function(e){return Object(u.jsxs)("div",{id:"n",className:"navbar",children:[Object(u.jsx)(l.c,{to:{pathname:"/Home",reset:!0},style:{textDecoration:"none"},replace:!0,children:Object(u.jsxs)("div",{style:{fontSize:"4vh",fontWeight:"900",color:"black",fontFamily:"CeraBold"},children:[e.isMovie&&"Movies",!e.isMovie&&"Tv shows",Object(u.jsx)("i",{style:{paddingLeft:"1vw",fontSize:"3vh",color:"black"},className:"fas fa-tv fa-2x"})]})}),Object(u.jsxs)("div",{className:"link-cont",children:[Object(u.jsx)(l.c,{to:{pathname:"/",reset:!0},style:{textDecoration:"none",marginRight:"2vw"},replace:!0,children:Object(u.jsx)("i",{style:{color:"black",fontSize:"1.8vw"},className:"fas fa-home"})}),Object(u.jsx)(l.c,{activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",to:"/Popular",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Popular"})}),Object(u.jsx)(l.c,{to:"/NowPlaying",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsxs)("div",{className:"nav-list-element",children:[e.isMovie&&"In Cinemas",!e.isMovie&&"Now Airing"]})}),Object(u.jsx)(l.c,{to:"/Upcoming",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Upcoming"})})]}),Object(u.jsx)("i",{onClick:function(e){return function(e){e.stopPropagation();var t=document.getElementById("mobile-menu");t.classList.contains("toggle")?t.classList.remove("toggle"):t.classList.add("toggle")}(e)},className:"fas fa-bars fa-1x mobile-icon",style:{color:"rgb(150, 150, 150)"}}),Object(u.jsxs)("div",{id:"mobile-menu",className:"div-cont-mobile ",style:{zIndex:"1"},children:[Object(u.jsx)(l.c,{to:{pathname:"/",reset:!0},style:{color:"yellow"},className:"nav-link",replace:!0,children:Object(u.jsx)("div",{className:"nav-list-element",children:"Home"})}),Object(u.jsx)(l.c,{activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",to:"/Popular",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Popular"})}),Object(u.jsx)(l.c,{to:"/NowPlaying",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsxs)("div",{className:"nav-list-element",children:[e.isMovie&&"In Cinemas",!e.isMovie&&"Now Airing"]})}),Object(u.jsx)(l.c,{to:"/Upcoming",activeStyle:{backgroundColor:"#CAC40E",color:"black"},className:"nav-link",children:Object(u.jsx)("div",{className:"nav-list-element",children:"Upcoming"})})]})]})},m=n(2),j=n(4),v=n.n(j),p=n(37),g=n(7),b=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{style:{fontSize:"2vw",color:"#DCEC11"},children:"API provided by themoviedb.org & justwatch.com"})})},f=(n(50),function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.getResults()},children:[Object(u.jsx)("input",{className:"search-bar search-bar-position",id:"search",type:"search",placeholder:"Search for ".concat(e.isMovie?"movies":"tv shows","..."),required:!0,autoComplete:"off",onChange:function(t){return e.setSearch(t.target.value)},onFocus:function(e){return e.target.value=""}}),Object(u.jsx)("input",{type:"submit",style:{display:"none"}})]})})}),h=n(17),O=n(18),x=n(19),y=n.n(x),S=y.a.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-type":"application/json"}}),k=new(function(){function e(){Object(h.a)(this,e),this.apiKey="?api_key=4198345852c55a862ccb220b37954952"}return Object(O.a)(e,[{key:"findByMovieId",value:function(e){return S.get("/movie/".concat(e).concat(this.apiKey))}},{key:"searchWithQuery",value:function(e){var t=escape(e);return S.get("/search/movie".concat(this.apiKey,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}},{key:"getReccomendation",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getSimilar",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/similar").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getPopular",value:function(e,t){return S.get("https://api.themoviedb.org/3/movie/popular".concat(this.apiKey,"&language=en-US&page=").concat(e),{cancelToken:t})}},{key:"getNowPlaying",value:function(){return S.get("https://api.themoviedb.org/3/movie/now_playing".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getUpcoming",value:function(){return S.get("https://api.themoviedb.org/3/movie/upcoming".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReviews",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReleaseDate",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/release_dates").concat(this.apiKey))}},{key:"getCredits",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits").concat(this.apiKey,"&language=en-US"))}},{key:"getProviders",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/watch/providers").concat(this.apiKey))}}]),e}()),N=new(function(){function e(){Object(h.a)(this,e),this.apiKey="?api_key=4198345852c55a862ccb220b37954952"}return Object(O.a)(e,[{key:"findByMovieId",value:function(e){return S.get("/tv/".concat(e).concat(this.apiKey))}},{key:"searchWithQuery",value:function(e){var t=escape(e);return S.get("/search/tv".concat(this.apiKey,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}},{key:"getReccomendation",value:function(e){return S.get("https://api.themoviedb.org/3/tv/".concat(e,"/recommendations").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getSimilar",value:function(e){return S.get("https://api.themoviedb.org/3/tv/".concat(e,"/similar").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getPopular",value:function(e,t){return S.get("https://api.themoviedb.org/3/tv/popular".concat(this.apiKey,"&language=en-US&page=").concat(e),{cancelToken:t})}},{key:"getNowPlaying",value:function(){return S.get("https://api.themoviedb.org/3/tv/airing_today".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getUpcoming",value:function(){return S.get("https://api.themoviedb.org/3/tv/on_the_air".concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReviews",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews").concat(this.apiKey,"&language=en-US&page=1"))}},{key:"getReleaseDate",value:function(e){return S.get("https://api.themoviedb.org/3/movie/".concat(e,"/release_dates").concat(this.apiKey))}},{key:"getCredits",value:function(e){return S.get("https://api.themoviedb.org/3/tv/".concat(e,"/credits").concat(this.apiKey,"&language=en-US"))}},{key:"getProviders",value:function(e){return S.get("https://api.themoviedb.org/3/tv/".concat(e,"/watch/providers").concat(this.apiKey))}},{key:"getCountryList",value:function(){return S.get("https://api.themoviedb.org/3/configuration/countries".concat(this.apiKey))}},{key:"getSeasonInfo",value:function(e,t){return S.get("https://api.themoviedb.org/3/tv/".concat(e,"/season/").concat(t).concat(this.apiKey,"&language=en-US"))}}]),e}()),w=(n(69),function(e){var t=null===e.data.poster_path?"":"http://image.tmdb.org/t/p/w500".concat(e.data.poster_path);return void 0!==e.data.poster_path&&Object(u.jsx)("div",{className:"movie-card",children:Object(u.jsx)("img",{className:"movie-card-img",src:t,alt:e.data.original_title||e.data.original_name})})}),E=(n(70),function(e){var t=Object(m.f)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"movie-container",children:e.movies.map((function(e){return Object(u.jsx)(l.b,{to:{pathname:"/MovieProfile/".concat(e.id),movie:e},children:Object(u.jsx)("div",{onClick:function(){return function(){var e=t.location.pathname,n=window.pageYOffset;sessionStorage.setItem("scroll".concat(e),n),window.scrollTo(0,0)}()},className:"movie-card-wrapper",children:Object(u.jsx)(w,{data:e})})},e.id)}))})})}),C=(n(71),function(e){var t=e.setNav,n=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),c=Object(r.a)(n,1)[0],s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],d=Object(a.useState)(JSON.parse(sessionStorage.getItem("movies"))||""),m=Object(r.a)(d,2),j=m[0],h=m[1],O=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?k:N),x=Object(r.a)(O,1)[0];Object(a.useEffect)((function(){t()}),[t]),Object(a.useEffect)((function(){h("")}),[x]),Object(a.useEffect)((function(){sessionStorage.setItem("movies",JSON.stringify(j))}),[j]);var y=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.searchWithQuery(i);case 2:t=e.sent,n=[],a=Object(p.a)(t.data.results);try{for(a.s();!(c=a.n()).done;)null!==(s=c.value).poster_path&&"en"===s.original_language&&s.popularity>15&&s.vote_count>30&&null!==s.backdrop_path&&n.push(s)}catch(o){a.e(o)}finally{a.f()}h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[0===j.length&&Object(u.jsx)("div",{className:"middle-text-cont",children:"An application to help you find similar movies to your favourite content"}),Object(u.jsx)(f,{search:i,setSearch:l,getResults:y,length:j.length,isMovie:c}),0!==j.length&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{movies:j}),Object(u.jsx)(b,{})]})]})}),I=(n(72),n(14)),_=(n(73),function(e){var t=e.providers,n=Object(a.useState)(JSON.parse(sessionStorage.getItem("country"))||"Denmark"),c=Object(r.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(new Map(JSON.parse(sessionStorage.getItem("countryMap")))||new Map),l=Object(r.a)(i,2),d=l[0],m=l[1],j=Object(a.useState)([]),p=Object(r.a)(j,2),b=p[0],f=p[1];return Object(a.useEffect)((function(){if(void 0!==t)if(void 0!==t.results[d.get(s)]){var e=t.results[d.get(s)];void 0!==e.flatrate&&f(e.flatrate)}else f([])}),[s,d,t]),Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getCountryList();case 2:t=e.sent,(n=Object(I.a)(t.data)).sort((function(e,t){return e.english_name<t.english_name?-1:e.english_name>t.english_name?1:0})),a=new Map,n.forEach((function(e){a.set(e.english_name,e.iso_3166_1)})),m(a),sessionStorage.setItem("countryMap",JSON.stringify(Array.from(a)));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===d.size&&e()}),[d]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"prov-disp",children:Object(u.jsx)("select",{className:"country-selector",name:"Country",id:"country",value:s,onChange:function(e){o(e.target.value),sessionStorage.setItem("country",JSON.stringify(e.target.value))},children:Object(I.a)(d.keys()).map((function(e,t){return Object(u.jsx)("option",{value:e,style:{fontSize:"1.5vw",padding:"1vh"},children:e},t)}))})}),Object(u.jsxs)("div",{className:"prov-disp-2",children:[0!==b.length&&b.map((function(e,t){return Object(u.jsx)("img",{style:{marginRight:"1vw"},className:"provider-img",src:"https://image.tmdb.org/t/p/w500".concat(e.logo_path),alt:e.name},t)})),0===b.length&&"No streaming service available in this country..."]})]})}),T=(n(74),function(e){var t=e.seasons,n=e.movieid,c=Object(a.useState)(1),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)([]),d=Object(r.a)(l,2),m=d[0],j=d[1];return Object(a.useEffect)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(t,n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getSeasonInfo(t,n);case 2:a=e.sent,j(a.data.episodes);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()(n,o)}),[n,o]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{className:"season-selector",value:o,onChange:function(e){i(e.target.value)},children:t.map((function(e,t){return Object(u.jsx)("option",{value:e.season_number,children:e.name},t)}))}),Object(u.jsx)("div",{className:"episode-container",children:m.map((function(e,t){return Object(u.jsxs)("div",{className:"episode-record",children:[Object(u.jsxs)("div",{children:["S",e.season_number," E",e.episode_number,":"," ",Object(u.jsx)("span",{className:"episode",id:t,onClick:function(e){var t=document.getElementById("d".concat(e.target.id));"none"===t.style.display?t.style.display="block":t.style.display="none"},children:e.name})]}),Object(u.jsx)("div",{id:"d".concat(t),className:"episode-desc",style:{display:"none"},children:e.overview})]},t)}))})]})})}),K=function(){var e=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),t=Object(r.a)(e,1)[0],n=Object(m.f)().location.movie,c=Object(m.f)().location.pathname.substring(14),s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],d=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?k:N),j=Object(r.a)(d,1)[0],p=0;Object(a.useEffect)((function(){console.log(i)}),[i]);var f=Object(a.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a,c,s,o,i,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credits:null,rec:null,similar:null,providers:null,info:null},e.next=3,j.getCredits(t);case 3:return a=e.sent,e.next=6,j.getReccomendation(t);case 6:return c=e.sent,e.next=9,j.getSimilar(t);case 9:return s=e.sent,e.next=12,j.getProviders(t);case 12:return o=e.sent,e.next=15,j.findByMovieId(t);case 15:return i=e.sent,e.next=18,Promise.all([a,c,s,o,i]);case 18:return r=e.sent,n.credits=r[0].data,n.rec=r[1].data.results.filter((function(e){return null!==e.poster_path})),n.similar=r[2].data.results.filter((function(e){return null!==e.poster_path})),n.providers=r[3].data,n.info=r[4].data,e.abrupt("return",n);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[j]);return Object(a.useEffect)((function(){var e=!0;void 0!==n&&(l(n),sessionStorage.setItem("movieprofile".concat(c),JSON.stringify(n)));var t=JSON.parse(sessionStorage.getItem("movieprofile".concat(c)));return void 0===t.rec&&f(t.id).then((function(n){var a=Object.assign({},n,t);(function(){var t=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sessionStorage.setItem("movieprofile".concat(c),JSON.stringify(a));case 2:n=JSON.parse(sessionStorage.getItem("movieprofile".concat(c))),e&&l(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()})),l(JSON.parse(sessionStorage.getItem("movieprofile".concat(c)))),function(){return e=!1}}),[c,n,f]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"backdrop",src:"http://image.tmdb.org/t/p/original".concat(i.backdrop_path)})}),Object(u.jsxs)("div",{className:"profile-cont",children:[Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{data:i}),Object(u.jsxs)("p",{className:"rating",children:[Object(u.jsx)("i",{style:{paddingRight:"1vw",fontSize:"7vmin",color:"#FFD700",textShadow:"0 0 5px black"},className:"fas fa-star fa-1x"}),Object(u.jsx)("span",{style:{color:"#FFD700",textShadow:"0 0 10px black"},children:i.vote_average})]}),Object(u.jsx)("div",{className:"cast",children:""!==i&&void 0!==i.credits&&i.credits.cast.map((function(e){return Object(u.jsxs)("div",{className:"cast-record",children:[Object(u.jsx)("span",{className:"cell",children:e.name}),Object(u.jsx)("span",{className:"cell2",children:e.character})]},p++)}))})]}),Object(u.jsxs)("div",{className:"text-cont",children:[Object(u.jsx)("div",{className:"title-cont",children:Object(u.jsxs)("h2",{className:"movie-title",children:[i.original_title||i.original_name," (",Object(u.jsx)("span",{style:{fontStyle:"italic",color:"rgb(120,120,120)",marginLeft:"1vw",marginRight:"1vw"},children:""!==i&&(void 0!==i.release_date&&i.release_date.substring(0,4)||void 0!==i.first_air_date&&i.first_air_date.substring(0,4))}),")"]})}),Object(u.jsx)("div",{className:"desc-cont",children:Object(u.jsx)("p",{className:"movie-desc",children:i.overview})}),Object(u.jsx)("div",{className:"prov-cont",children:Object(u.jsx)(_,{providers:i.providers})}),Object(u.jsx)("div",{className:"seas-cont",children:!t&&void 0!==i.info&&Object(u.jsx)(T,{seasons:i.info.seasons,movieid:i.id})})]})]}),Object(u.jsx)("h2",{style:{textAlign:"center",color:"white",fontSize:"6vmin",fontFamily:"CeraBold",padding:"1vh 0"},children:"Recommended ".concat(t?"movies":"tv shows")}),void 0!==i.rec&&Object(u.jsx)(E,{movies:i.rec}),Object(u.jsx)("h2",{style:{textAlign:"center",color:"white",fontSize:"6vmin",padding:"1vh 0"},children:"Similar ".concat(t?"movies":"tv shows"," based on keywords and genres")}),void 0!==i.similar&&Object(u.jsx)(E,{movies:i.similar}),Object(u.jsx)(b,{})]})]})},R=(n(75),n(76),function(){var e=Object(m.f)(),t=Object(a.useState)(JSON.parse(sessionStorage.getItem("".concat(e.location.path)))||[]),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(JSON.parse(sessionStorage.getItem("".concat(e.location.path,"pages")))||1),i=Object(r.a)(o,2),l=i[0],d=i[1],j=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?k:N),p=Object(r.a)(j,1)[0],f=Object(a.useCallback)(function(){var t=Object(g.a)(v.a.mark((function t(n,a){var c,o,i,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=[],o=1;case 2:if(!(o<=n)){t.next=11;break}return t.next=5,p.getPopular(o,a);case 5:i=t.sent,r=i.data.results.filter((function(e){return"en"===e.original_language})),c=[].concat(Object(I.a)(c),Object(I.a)(r));case 8:o++,t.next=2;break;case 11:s(c),sessionStorage.setItem("".concat(e.location.path),JSON.stringify(c)),sessionStorage.setItem("".concat(e.location.path,"pages"),l);case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[p,e.location.path,l]);Object(a.useEffect)((function(){s([])}),[p]),Object(a.useEffect)((function(){(function(){var t=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,parseInt(sessionStorage.getItem("scroll".concat(e.location.pathname)));case 2:n=t.sent,setTimeout((function(){window.scrollTo(0,n)}),100);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.location.pathname]),Object(a.useEffect)((function(){var e=y.a.CancelToken.source();return f(l,e.token).catch((function(e){})),function(){e.cancel("canceled async call")}}),[l,f]);return Object(u.jsxs)(u.Fragment,{children:[null!==c&&0!==c.length&&Object(u.jsx)(E,{movies:c}),Object(u.jsx)("div",{className:"load-cont",children:Object(u.jsx)("div",{className:"load-more-btn",onClick:function(){return function(){d(l+1);var t=e.location.pathname,n=document.body.scrollTop||document.documentElement.scrollTop;sessionStorage.setItem("scroll".concat(t),n)}()},children:"Load more..."})}),Object(u.jsx)(b,{})]})}),U=function(){var e=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?k:N),t=Object(r.a)(e,1)[0],n=Object(m.f)();Object(a.useEffect)((function(){i([])}),[t]),Object(a.useEffect)((function(){var e=parseInt(sessionStorage.getItem("scroll".concat(n.location.pathname)));window.scrollTo(0,e)}),[n.location.pathname]);var c=Object(a.useState)([]),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(a.useCallback)(Object(g.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNowPlaying();case 2:n=e.sent,a=n.data.results.filter((function(e){return"en"===e.original_language})),i(a);case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(a.useEffect)((function(){return l()}),[l]),Object(u.jsxs)(u.Fragment,{children:[0!==o.length&&Object(u.jsx)(E,{movies:o}),Object(u.jsx)(b,{})]})},L=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(m.f)(),o=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")?k:N),i=Object(r.a)(o,1)[0];Object(a.useEffect)((function(){c([])}),[i]),Object(a.useEffect)((function(){var e=parseInt(sessionStorage.getItem("scroll".concat(s.location.pathname)));window.scrollTo(0,e)}),[s.location.pathname]);var l=Object(a.useCallback)(Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getUpcoming();case 2:t=e.sent,n=t.data.results.filter((function(e){return"en"===e.original_language})),c(n);case 5:case"end":return e.stop()}}),e)}))),[i]);return Object(a.useEffect)((function(){return l()}),[l]),Object(u.jsxs)(u.Fragment,{children:[0!==n.length&&Object(u.jsx)(E,{movies:n}),Object(u.jsx)(b,{})]})},M=(n(77),function(){var e=Object(m.f)();Object(a.useEffect)((function(){window.onscroll=function(){t()},t(),window.onclick=function(){document.getElementById("mobile-menu").classList.remove("toggle")}}),[]);var t=function(){var e=document.getElementById("top-button");document.body.scrollTop>500||document.documentElement.scrollTop>500?e.style.display="block":e.style.display="none"};return Object(u.jsx)("i",{onClick:function(){return document.body.scrollTop=0,document.documentElement.scrollTop=0,void sessionStorage.setItem("scroll".concat(e.location.pathname),0)},id:"top-button",className:"fas fa-chevron-circle-up fa-3x top-button"})}),P=(n(78),function(){Object(a.useEffect)((function(){var e=document.getElementById("n");return e.classList.add("hide-nav"),function(){return e.classList.remove("hide-nav")}}),[]);return Object(u.jsx)("div",{className:"main-page",children:Object(u.jsxs)("div",{className:"select-cont",children:[Object(u.jsx)(l.b,{to:"/Home",style:{textDecoration:"none"},children:Object(u.jsx)("div",{onClick:function(){sessionStorage.setItem("SELECTOR","tv")},className:"select",children:"Tv-series"})}),Object(u.jsx)(l.b,{to:"/Home",style:{textDecoration:"none"},children:Object(u.jsx)("div",{onClick:function(){sessionStorage.setItem("SELECTOR","movie")},className:"select",children:"Movies"})})]})})});var F=function(){var e=Object(a.useState)("movie"===sessionStorage.getItem("SELECTOR")),t=Object(r.a)(e,2),n=t[0],c=t[1],s=function(){c("movie"===sessionStorage.getItem("SELECTOR"))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{isMovie:n}),Object(u.jsx)(M,{}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{exact:!0,path:"/",component:P}),Object(u.jsx)(m.a,{exact:!0,path:"/Home",render:function(e){return Object(u.jsx)(C,Object(i.a)(Object(i.a)({},e),{},{setNav:s}))}}),Object(u.jsx)(m.a,{exact:!0,path:"/MovieProfile/:id",render:function(e){return Object(u.jsx)(K,Object(i.a)({},e))}}),Object(u.jsx)(m.a,{exact:!0,path:"/Popular",component:R}),Object(u.jsx)(m.a,{exact:!0,path:"/NowPlaying",component:U}),Object(u.jsx)(m.a,{exact:!0,path:"/Upcoming",component:L}),Object(u.jsx)(m.a,{exact:!0,path:"/TEST",component:_})]})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b85f1497.chunk.js.map