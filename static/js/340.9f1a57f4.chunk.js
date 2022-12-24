"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[340],{340:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,c,a,s,l,d,u,x,h,p,f,m=t(885),v=t(689),Z=t(791),g=t(565),j=t(185),b=t(168),_=t(444),y=t(731),w=(0,_.ZP)(y.OL)(r||(r=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  color: grey;\n"]))),P=_.ZP.span(i||(i=(0,b.Z)(["\n  font-size: 15px;\n  font-weight: 600;\n  margin-left: 5px;\n  color: grey;\n"]))),k=_.ZP.ul(o||(o=(0,b.Z)(["\n  border-bottom: 1px solid #b8860b;\n  padding: 15px 0;\n"]))),C=_.ZP.li(c||(c=(0,b.Z)(["\n  display: flex;\n"]))),O=_.ZP.div(a||(a=(0,b.Z)(["\n  margin-left: 20px;\n  padding: 15px 0;\n"]))),H=_.ZP.h2(s||(s=(0,b.Z)(["\n  margin-bottom: 10px;\n  color: #b8860b;\n"]))),L=_.ZP.p(l||(l=(0,b.Z)(["\n  margin-bottom: 10px;\n  color: grey;\n"]))),M=_.ZP.p(d||(d=(0,b.Z)(["\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #b8860b;\n"]))),S=t(184),z=function(n){var e,t=n.movie,r=t.genres,i=t.poster_path,o=t.release_date,c=t.title,a=t.vote_average,s=t.overview,l=r.map((function(n){return n.name})).join(", "),d=(0,v.TH)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(w,{to:(null===d||void 0===d||null===(e=d.state)||void 0===e?void 0:e.from)||"/",children:[(0,S.jsx)(j.CBx,{}),(0,S.jsx)(P,{children:"Go back"})]}),(0,S.jsx)(k,{children:(0,S.jsxs)(C,{children:[(0,S.jsx)("img",{src:i&&"".concat("https://image.tmdb.org/t/p/w500/").concat(i),alt:"",width:"200"}),(0,S.jsxs)(O,{children:[(0,S.jsxs)(H,{children:[c," (",o.slice(0,4),")"]}),(0,S.jsxs)(L,{children:["User Score: ",Math.round(10*a),"%"]}),(0,S.jsx)(M,{children:"Overview:"}),(0,S.jsx)(L,{children:s}),(0,S.jsx)(M,{children:"Genres:"}),(0,S.jsx)(L,{children:l})]})]})})]})},A=_.ZP.div(u||(u=(0,b.Z)(["\n  padding: 20px 0;\n  border-bottom: 1px solid #b8860b;\n"]))),F=_.ZP.h2(x||(x=(0,b.Z)(["\n  text-align: center;\n  color: #b8860b;\n"]))),G=_.ZP.ul(h||(h=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),T=_.ZP.li(p||(p=(0,b.Z)(["\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),U=(0,_.ZP)(y.OL)(f||(f=(0,b.Z)(["\n  color: grey;\n\n  &.active {\n    color: #b8860b;\n  }\n"]))),q=function(){var n,e,t=(0,v.TH)();return(0,S.jsxs)(A,{children:[(0,S.jsx)(F,{children:"Additional information"}),(0,S.jsxs)(G,{children:[(0,S.jsx)(T,{children:(0,S.jsx)(U,{to:"cast",state:{from:null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,S.jsx)(T,{children:(0,S.jsx)(U,{to:"reviews",state:{from:null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from},children:"Reviews"})})]})]})},B=function(){var n=(0,v.UO)().movieId,e=(0,Z.useState)(null),t=(0,m.Z)(e,2),r=t[0],i=t[1];return(0,Z.useEffect)((function(){(0,g.Mc)(n).then((function(n){var e=n.data;i(e)}))}),[n]),(0,S.jsxs)(S.Fragment,{children:[r&&(0,S.jsx)(z,{movie:r}),(0,S.jsx)(q,{}),(0,S.jsx)(Z.Suspense,{fallback:(0,S.jsx)("h1",{children:"Load children"}),children:(0,S.jsx)(v.j3,{})})]})}},565:function(n,e,t){t.d(e,{Ai:function(){return a},Hx:function(){return d},Mc:function(){return s},he:function(){return c},xc:function(){return l}});var r=t(388),i="e84a2dc7e130243e2513aaa2cdb72d34",o="https://api.themoviedb.org/3/",c=function(n){return(0,r.Z)("".concat(o,"/trending/movie/day"),{params:{api_key:i,page:n}})},a=function(n){return(0,r.Z)("".concat(o,"/search/movie"),{params:{api_key:i,query:n}})},s=function(n){return(0,r.Z)("".concat(o,"/movie/").concat(n),{params:{api_key:i}})},l=function(n){return(0,r.Z)("".concat(o,"movie/").concat(n,"/credits"),{params:{api_key:i}})},d=function(n){return(0,r.Z)("".concat(o,"movie/").concat(n,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=340.9f1a57f4.chunk.js.map