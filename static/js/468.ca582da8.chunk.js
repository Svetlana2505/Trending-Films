"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[468],{535:function(n,t,e){e.d(t,{z:function(){return a}});var r,i=e(168),o=e(444).ZP.button(r||(r=(0,i.Z)(["\n  display: block;\n  width: 150px;\n  height: 40px;\n  margin: auto;\n  border: none;\n  border-bottom: 0.5px solid #b8860b;\n  background-color: inherit;\n  color: #b8860b;\n"]))),c=e(184),a=function(n){var t=n.buttonClick;return(0,c.jsx)(o,{onClick:t,type:"button",children:"Loade more"})}},11:function(n,t,e){e.d(t,{U:function(){return x}});var r,i,o,c,a=e(731),u=e(689),s=e(168),p=e(444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px 15px;\n\n  margin-top: -20px;\n  margin-left: -20px;\n"]))),d=p.ZP.li(i||(i=(0,s.Z)(["\n  width: calc((100% - 80px) / 4);\n  margin-top: 20px;\n  margin-left: 20px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 0.5px solid #b8860b;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),l=p.ZP.p(o||(o=(0,s.Z)(["\n  color: #b8860b;\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n"]))),m=p.ZP.div(c||(c=(0,s.Z)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),h=e(184),x=function(n){var t=n.movies,e=(0,u.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f,{children:t&&t.map((function(n){var t=n.id,r=n.title,i=n.poster_path;return(0,h.jsx)(d,{children:(0,h.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:i&&"".concat("https://image.tmdb.org/t/p/w500/").concat(i),alt:""})}),(0,h.jsx)(m,{children:(0,h.jsx)(l,{children:r})})]})},t)}))})})}},468:function(n,t,e){e.r(t);var r=e(982),i=e(885),o=e(565),c=e(791),a=e(11),u=e(535),s=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],p=t[1],f=(0,c.useState)(1),d=(0,i.Z)(f,2),l=d[0],m=d[1];(0,c.useEffect)((function(){(0,o.he)(l).then((function(n){var t=n.data.results;p((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t))}))}))}),[l]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.U,{movies:e}),e.length&&(0,s.jsx)(u.z,{buttonClick:function(){m((function(n){return n+1}))}})]})}},565:function(n,t,e){e.d(t,{Ai:function(){return a},Hx:function(){return p},Mc:function(){return u},he:function(){return c},xc:function(){return s}});var r=e(388),i="e84a2dc7e130243e2513aaa2cdb72d34",o="https://api.themoviedb.org/3/",c=function(n){return(0,r.Z)("".concat(o,"/trending/movie/day"),{params:{api_key:i,page:n}})},a=function(n){return(0,r.Z)("".concat(o,"/search/movie"),{params:{api_key:i,query:n}})},u=function(n){return(0,r.Z)("".concat(o,"/movie/").concat(n),{params:{api_key:i}})},s=function(n){return(0,r.Z)("".concat(o,"movie/").concat(n,"/credits"),{params:{api_key:i}})},p=function(n){return(0,r.Z)("".concat(o,"movie/").concat(n,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=468.ca582da8.chunk.js.map