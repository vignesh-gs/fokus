(this.webpackJsonpfokus=this.webpackJsonpfokus||[]).push([[0],{17:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),c=t.n(r),a=t(5),o=t.n(a),u=(t(17),t(10)),s=t(3),d=t(4),l=Object(d.b)({name:"tasks",initialState:[],reducers:{create:function(n,e){var t=e.payload;n.push(t)},remove:function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))},update:function(n,e){var t=e.payload;n.forEach((function(n){n.id===t.id&&(n=t)}))},tick:function(n,e){var t=e.payload;n.forEach((function(n){n.id===t&&(n.remainingTime=n.remainingTime-1)}))},reset:function(n,e){var t=e.payload;n.forEach((function(n){n.id===t&&(n.remainingTime=n.time,n.isRunning=!1)}))},toggleIsRunning:function(n,e){var t=e.payload;n.forEach((function(n){n.id===t&&(n.isRunning=!n.isRunning)}))},decrement:function(n,e){var t=e.payload;n.forEach((function(n){n.id===t&&(n.remainingTime-=1)}))}}}),f=l.actions,j=f.create,b=f.remove,m=(f.update,f.reset),p=f.toggleIsRunning,v=f.tick,g=l.reducer;function h(n){var e=n.task,t=Object(s.b)();return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}((function(){e.remainingTime>0?t(v(e.id)):0===e.remainingTime&&t(p(e.id))}),e.isRunning?1e3:null),Object(i.jsxs)("div",{style:{padding:"10px",width:"200px",margin:"20px auto",border:"orange solid 1px",borderRadius:"5px"},children:[Object(i.jsx)("p",{children:e.content}),Object(i.jsx)("p",{children:e.remainingTime}),Object(i.jsx)("button",{onClick:function(){return t(b(e.id))},children:"remove"}),Object(i.jsx)("button",{onClick:function(){return t(p(e.id))},children:"play/pause"}),Object(i.jsx)("button",{onClick:function(){return t(m(e.id))},children:"reset"})]},e.id)}function O(){var n=Object(s.c)((function(n){return n.tasks})),e=Object(s.b)(),t=Object(r.useState)(""),c=Object(u.a)(t,2),a=c[0],o=c[1],d=Object(r.useState)(""),l=Object(u.a)(d,2),f=l[0],b=l[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"text",onChange:function(n){return o(n.target.value)}}),Object(i.jsx)("input",{type:"number",onChange:function(n){return b(n.target.value)}}),Object(i.jsx)("input",{type:"button",value:"submit task",onClick:function(){var n={id:Math.floor(1e4*Math.random()),content:a,time:f,remainingTime:f,isRunning:!1};e(j(n))}}),n.map((function(n){return Object(i.jsx)(h,{task:n})}))]})}var x=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(O,{})})},k=Object(d.b)({name:"counter",initialState:{value:0},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}}}),y=k.actions,w=(y.increment,y.decrement,y.incrementByAmount,k.reducer),R=Object(d.a)({reducer:{counter:w,tasks:g}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.a,{store:R,children:Object(i.jsx)(x,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.420e284f.chunk.js.map