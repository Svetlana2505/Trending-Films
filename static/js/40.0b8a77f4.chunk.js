"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[40],{40:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,c,a,o,u=t(885),s=t(791),f=t(689),p=t(565),h=t(168),m=t(444),d=m.ZP.ul(r||(r=(0,h.Z)(["\n  padding: 20px 0;\n"]))),v=m.ZP.p(i||(i=(0,h.Z)(["\n  color: #b8860b;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]))),l=m.ZP.li(c||(c=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),g=m.ZP.p(a||(a=(0,h.Z)(["\n  font-size: 15px;\n  line-height: 1.2;\n  color: grey;\n"]))),x=m.ZP.p(o||(o=(0,h.Z)(["\n  color: grey;\n  text-align: center;\n"]))),Z=t(184),_=function(n){var e=n.message;return(0,Z.jsx)(x,{children:e})},y=function(n){var e=n.reviews;return(0,Z.jsx)(Z.Fragment,{children:e.length?(0,Z.jsx)(d,{children:e.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,Z.jsxs)(l,{children:[(0,Z.jsxs)(v,{children:["Author: ",e]}),(0,Z.jsx)(g,{children:t})]},r)}))}):(0,Z.jsx)(_,{message:"We don't have any reviews for this movie"})})},j=function(){var n=(0,s.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,f.UO)().movieId;return(0,s.useEffect)((function(){(0,p.Hx)(i).then((function(n){var e=n.data.results;r(e)}))}),[i]),(0,Z.jsx)(Z.Fragment,{children:t&&(0,Z.jsx)(y,{reviews:t})})}},565:function(n,e,t){t.d(e,{Ai:function(){return o},Hx:function(){return f},Mc:function(){return u},he:function(){return a},xc:function(){return s}});var r=t(388),i="e84a2dc7e130243e2513aaa2cdb72d34",c="https://api.themoviedb.org/3/",a=function(n){return(0,r.Z)("".concat(c,"/trending/movie/day"),{params:{api_key:i,page:n}})},o=function(n){return(0,r.Z)("".concat(c,"/search/movie"),{params:{api_key:i,query:n}})},u=function(n){return(0,r.Z)("".concat(c,"/movie/").concat(n),{params:{api_key:i}})},s=function(n){return(0,r.Z)("".concat(c,"movie/").concat(n,"/credits"),{params:{api_key:i}})},f=function(n){return(0,r.Z)("".concat(c,"movie/").concat(n,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=40.0b8a77f4.chunk.js.map