"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[192],{535:function(n,t,e){e.d(t,{z:function(){return a}});var r,o=e(168),i=e(444).ZP.button(r||(r=(0,o.Z)(["\n  display: block;\n  width: 150px;\n  height: 40px;\n  margin: auto;\n  border: none;\n  border-bottom: 0.5px solid #b8860b;\n  background-color: inherit;\n  color: #b8860b;\n"]))),c=e(184),a=function(n){var t=n.buttonClick;return(0,c.jsx)(i,{onClick:t,type:"button",children:"Loade more"})}},11:function(n,t,e){e.d(t,{U:function(){return h}});var r,o,i,c,a=e(731),u=e(689),s=e(168),l=e(444),p=l.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px 15px;\n\n  margin-top: -20px;\n  margin-left: -20px;\n"]))),d=l.ZP.li(o||(o=(0,s.Z)(["\n  width: calc((100% - 80px) / 4);\n  margin-top: 20px;\n  margin-left: 20px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 0.5px solid #b8860b;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),f=l.ZP.p(i||(i=(0,s.Z)(["\n  color: #b8860b;\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n"]))),m=l.ZP.div(c||(c=(0,s.Z)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),b=e(184),h=function(n){var t=n.movies,e=(0,u.TH)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p,{children:t&&t.map((function(n){var t=n.id,r=n.title,o=n.poster_path;return(0,b.jsx)(d,{children:(0,b.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:o&&"".concat("https://image.tmdb.org/t/p/w500/").concat(o),alt:""})}),(0,b.jsx)(m,{children:(0,b.jsx)(f,{children:r})})]})},t)}))})})}},192:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,o,i,c=e(982),a=e(885),u=e(791),s=e(731),l=e(168),p=e(444),d=p.ZP.form(r||(r=(0,l.Z)(["\n  width: 300px;\n  margin: auto;\n"]))),f=p.ZP.input(o||(o=(0,l.Z)(["\n  background-color: inherit;\n  border: none;\n  border-bottom: 1px solid grey;\n\n  &:focus {\n    background-color: transparent;\n    outline: 0;\n    color: grey;\n  }\n"]))),m=p.ZP.button(i||(i=(0,l.Z)(["\n  background-color: inherit;\n  border: none;\n  border-bottom: 1px solid grey;\n  color: grey;\n"]))),b=e(184),h=function(n){var t=n.submit;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(d,{onSubmit:t,children:[(0,b.jsx)(f,{type:"text",name:"query",autoComplete:"off"}),(0,b.jsx)(m,{children:"Search"})]})})},x=e(565),g=e(11),v=e(243),Z=e(535),y=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,s.lr)(),i=(0,a.Z)(o,2),l=i[0],p=i[1],d=(0,u.useState)(""),f=(0,a.Z)(d,2),m=f[0],y=f[1],j=(0,u.useState)(!1),k=(0,a.Z)(j,2),w=k[0],_=k[1],P=(0,u.useState)(1),C=(0,a.Z)(P,2),S=C[0],z=C[1];(0,u.useEffect)((function(){y(l.get("query")),m&&(_(!0),(0,x.Ai)(m,S).then((function(n){var t=n.data.results;r((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t))})),_(!1)})))}),[S,m,l]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{submit:function(n){n.preventDefault();var t=n.target;""!==t.elements[0].value&&(p({query:t.elements[0].value}),t.reset(""),r([]))}}),w?(0,b.jsx)(v.p2,{height:"80",width:"80",color:"#b8860b",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.U,{movies:e}),e.length&&(0,b.jsx)(Z.z,{buttonClick:function(){z((function(n){return n+1}))}})]})]})}},565:function(n,t,e){e.d(t,{Ai:function(){return a},Hx:function(){return l},Mc:function(){return u},he:function(){return c},xc:function(){return s}});var r=e(388),o="e84a2dc7e130243e2513aaa2cdb72d34",i="https://api.themoviedb.org/3/",c=function(n){return(0,r.Z)("".concat(i,"/trending/movie/day"),{params:{api_key:o,page:n}})},a=function(n){return(0,r.Z)("".concat(i,"/search/movie"),{params:{api_key:o,query:n}})},u=function(n){return(0,r.Z)("".concat(i,"/movie/").concat(n),{params:{api_key:o}})},s=function(n){return(0,r.Z)("".concat(i,"movie/").concat(n,"/credits"),{params:{api_key:o}})},l=function(n){return(0,r.Z)("".concat(i,"movie/").concat(n,"/reviews"),{params:{api_key:o}})}}}]);
//# sourceMappingURL=192.080e32fc.chunk.js.map