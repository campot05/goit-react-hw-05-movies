"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(439),c=e(689),p=e(791),u=e(984),i=e(168),o=e(444).ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  margin: 20px auto 0px auto;\n  padding: 0;\n  justify-contect: center;\n  li {\n    width: 175px;\n    margin-right: 20px;\n    margin-bottom: 20px;\n    background-color: #fff;\n    text-align: center;\n    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n      0px 2px 1px rgb(0 0 0 / 20%);\n    border-radius: 0px 0px 4px 4px;\n  }\n\n  img {\n    width: 100%;\n    display: block;\n    height: 260px;\n  }\n  p {\n    font-size: 18px;\n  }\n  b {\n    font-size: 22px;\n  }\n"]))),s=e(184),l=function(){var n=(0,p.useState)(null),t=(0,a.Z)(n,2),e=t[0],r=t[1],i=(0,c.UO)().id;return(0,p.useEffect)((function(){(0,u.Xw)(i).then((function(n){r(n.cast.slice(0,10))}))}),[i]),(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)(o,{children:e.map((function(n){var t=n.cast_id,e=n.name,r=n.character,a=n.profile_path;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w500/").concat(a):"https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png",alt:"text"}),(0,s.jsx)("p",{children:e}),(0,s.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}},984:function(n,t,e){e.d(t,{ZS:function(){return i},Xw:function(){return f},r3:function(){return s},Jh:function(){return x}});var r=e(861),a=e(757),c=e.n(a),p=e(243),u="be93eef600e8fe429646a6ef82601194";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function s(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}p.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=387.424e909c.chunk.js.map