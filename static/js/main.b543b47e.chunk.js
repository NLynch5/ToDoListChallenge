(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(7),s=n.n(i),a=(n(12),n(4)),r=n(6),d=(n(13),n(0));function u(t){var e=t.todo,n=t.index,o=t.completeTodo,c=t.removeTodo;return Object(d.jsxs)("div",{className:"todo",style:{textDecoration:e.isCompleted?"line-through":""},children:[e.text,Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return o(n)},children:"DONE - Great Job!"}),Object(d.jsx)("button",{onClick:function(){return c(n)},children:"x"})]})]})}function l(t){var e=t.addTodo,n=c.a.useState(" "),o=Object(r.a)(n,2),i=o[0],s=o[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i&&(e(i),s(""))},children:[Object(d.jsx)("input",{type:"text",className:"input",value:i,onChange:function(t){return s(t.target.value)}}),Object(d.jsx)("button",{children:"Add to List"})]})}var j=function(){var t=c.a.useState([{text:"Big Shop",isCompleted:!1},{text:"Haircut",isCompleted:!1},{text:"Christmas Shopping",isCompleted:!1}]),e=Object(r.a)(t,2),n=e[0],o=e[1],i=function(t){var e=Object(a.a)(n);e[t].isCompleted=!0,o(e)},s=function(t){var e=Object(a.a)(n);e.splice(t,1),o(e)};return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{children:"Natalie To Do List :"}),Object(d.jsxs)("div",{className:"todoList",children:[n.map((function(t,e){return Object(d.jsx)(u,{index:e,todo:t,completeTodo:i,removeTodo:s},e)})),Object(d.jsx)(l,{addTodo:function(t){var e=[].concat(Object(a.a)(n),[{text:t}]);o(e)}})]})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.b543b47e.chunk.js.map