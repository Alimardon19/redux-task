(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(14),i=a.n(n),r=a(11),o=a(5),l=a(20),s=a(7),j=a(2),d=a(58),b=a(55),O=a(56),h=a(57),u=a(19),m=a(1);var x=Object(r.b)((function(e){return{lavozimSelect:e.LavozimReducer.lavozimlar,daraja:e.DarajaReducer.daraja}}),(function(e){return{AddUser:function(t){e({type:"ADD",payload:t})},EditUser:function(t){e({type:"EDIT",payload:t})}}}))((function(e){var t=e.handleModal,a=e.toggle,c=e.AddUser,n=e.edit,i=e.setEdit,r=e.EditUser,o=e.lavozimSelect,l=e.daraja,s=Object(u.a)(),x=s.register,p=s.handleSubmit,v=s.setValue,f=s.reset;return n&&(v("name",n.name),v("surname",n.surname),v("phone",n.phone),v("position",n.position),v("level",n.level)),Object(m.jsxs)(d.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(b.a,{children:n?"Xodimni o'zgartirish":"Xodim qo'shish"}),Object(m.jsx)(O.a,{children:Object(m.jsxs)("form",{onSubmit:p((function(e){n?(r(Object(j.a)(Object(j.a)({},e),{},{id:n.id})),f(),i(""),a()):(c(e),f(),i(""),a())})),id:"form",children:[Object(m.jsx)("input",Object(j.a)(Object(j.a)({},x("name",{required:!0})),{},{type:"text",placeholder:"Ism",className:"form-control mb-3"})),Object(m.jsx)("input",Object(j.a)(Object(j.a)({},x("surname",{required:!0})),{},{type:"text",placeholder:"Familiya",className:"form-control mb-3"})),Object(m.jsx)("input",Object(j.a)(Object(j.a)({},x("phone",{required:!0})),{},{type:"text",placeholder:"Telefon",className:"form-control mb-3"})),Object(m.jsx)("select",Object(j.a)(Object(j.a)({},x("position",{required:!0})),{},{className:"form-control mb-3",children:l.map((function(e,t){return Object(m.jsxs)("option",{value:e.nomi,children:[" ",e.nomi," "]},t)}))})),Object(m.jsx)("select",Object(j.a)(Object(j.a)({},x("level",{required:!0})),{},{className:"form-control mb-3",children:o.map((function(e,t){return Object(m.jsxs)("option",{value:e.nomi,children:[" ",e.nomi," "]},t)}))}))]})}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)("button",{onClick:function(){f(),i(""),a()},className:"btn btn-dark",children:"Chiqish"}),Object(m.jsx)("button",{form:"form",className:"btn btn-primary",children:" Saqlash "})]})]})}));var p=Object(r.b)((function(e){return{Xodim:e.XodimReducer.xodimlar}}),(function(e){return{deleteUser:function(t){e({type:"DELETE_USER",payload:t})}}}))((function(e){var t=e.Xodim,a=e.deleteUser,n=Object(c.useState)(!1),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(""),h=Object(s.a)(O,2),u=h[0],p=h[1],v=function(){return o((function(e){return!e}))};return Object(m.jsxs)("div",{className:"xodim",children:[Object(m.jsxs)("div",{className:"navs",children:[Object(m.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return p(e.target.value)}}),Object(m.jsx)("h1",{children:" Xodimlar "}),Object(m.jsx)("button",{onClick:v,children:" + Add "})]}),Object(m.jsxs)("table",{className:"table mt-5 table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:" # "}),Object(m.jsx)("th",{children:" Ism "}),Object(m.jsx)("th",{children:" Familiya "}),Object(m.jsx)("th",{children:" Telefon "}),Object(m.jsx)("th",{children:" Lavozim "}),Object(m.jsx)("th",{children:" Ilmiy daraja "}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.filter((function(e){return e.name?e.name.toLowerCase().indexOf(u.toLowerCase())>-1:function(){return e}})).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",t+1," "]}),Object(m.jsxs)("td",{children:[" ",e.name," "]}),Object(m.jsxs)("td",{children:[" ",e.surname," "]}),Object(m.jsxs)("td",{children:[" ",e.phone," "]}),Object(m.jsxs)("td",{children:[" ",e.position," "]}),Object(m.jsxs)("td",{children:[" ",e.level," "]}),Object(m.jsxs)("td",{children:[Object(m.jsx)("i",{className:"bi bi-pencil-fill h4",onClick:function(){return b(e),void v()},children:" "}),Object(m.jsx)("i",{className:"bi bi-trash-fill h4",onClick:function(){return a(t)},children:" "})]})]},t)}))})]}),Object(m.jsx)(x,{edit:d,setEdit:b,handleModal:r,toggle:v})]})}));var v=Object(r.b)(null,(function(e){return{addPosition:function(t){e({type:"ADD_POSITION",payload:t})},editPosition:function(t){e({type:"EDIT_POSITION",payload:t})}}}))((function(e){var t=e.handleModal,a=e.toggle,c=e.addPosition,n=e.editPosition,i=e.edit,r=e.setEdit,o=Object(u.a)(),l=o.handleSubmit,s=o.register,x=o.reset,p=o.setValue;return i&&(p("nomi",i.nomi),p("maosh",i.maosh)),Object(m.jsxs)(d.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(b.a,{children:i?"Lavozimni o'zgartirish":"Lavozim qo'shish"}),Object(m.jsx)(O.a,{children:Object(m.jsxs)("form",{onSubmit:l((function(e){i?(n(Object(j.a)(Object(j.a)({},e),{},{id:i.id})),x(),r(""),a()):(c(e),x(),a())})),id:"form",children:[Object(m.jsx)("input",Object(j.a)(Object(j.a)({},s("nomi",{required:!0})),{},{type:"text",placeholder:"Nomi",className:"form-control mb-4"})),Object(m.jsx)("input",Object(j.a)(Object(j.a)({},s("maosh",{required:!0})),{},{type:"text",placeholder:"Maosh",className:"form-control mb-4"}))]})}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)("button",{onClick:function(){x(),r(""),a()},className:"btn btn-dark",children:"Chiqish"}),Object(m.jsx)("button",{form:"form",className:"btn btn-primary",children:"Saqlash"})]})]})}));var f=Object(r.b)((function(e){return{lavozimlar:e.LavozimReducer.lavozimlar}}),(function(e){return{DeletePosition:function(t){e({type:"DELETE_POSITION",payload:t})}}}))((function(e){var t=e.lavozimlar,a=e.DeletePosition,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(!1),h=Object(s.a)(O,2),u=h[0],x=h[1],p=function(){return x((function(e){return!e}))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"navs",children:[Object(m.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"Search"}),Object(m.jsx)("h1",{children:" Lavozimlar "}),Object(m.jsx)("button",{onClick:p,children:" + Add "})]}),Object(m.jsxs)("table",{className:"table mt-5 table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Nomi"}),Object(m.jsx)("th",{children:"Maosh"}),Object(m.jsx)("th",{children:"  "})]})}),Object(m.jsx)("tbody",{children:t.filter((function(e){return e.nomi?e.nomi.toLowerCase().indexOf(r.toLowerCase())>-1:function(){return e}})).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.nomi}),Object(m.jsx)("td",{children:e.maosh}),Object(m.jsxs)("td",{children:[Object(m.jsx)("i",{className:"bi bi-pencil-fill h4",onClick:function(){return t=e,p(),void b(t);var t},children:" "}),Object(m.jsx)("i",{className:"bi bi-trash-fill h4",onClick:function(){return a(t)},children:" "})]})]},t)}))})]}),Object(m.jsx)(v,{handleModal:u,toggle:p,edit:d,setEdit:b})]})}));var y=Object(r.b)(null,(function(e){return{saveLevel:function(t){e({type:"ADD_LEVEL",payload:t})},editLevel:function(t){e({type:"EDIT_LEVEL",payload:t})}}}))((function(e){var t=e.handleModal,a=e.toggle,c=e.saveLevel,n=e.edit,i=e.setEdit,r=e.editLevel,o=Object(u.a)(),l=o.handleSubmit,s=o.register,x=o.setValue,p=o.reset;return n&&(x("nomi",n.nomi),x("bonus",n.bonus)),Object(m.jsxs)(d.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(b.a,{children:"Daraja qo'shish"}),Object(m.jsx)(O.a,{children:Object(m.jsxs)("form",{onSubmit:l((function(e){n?(r(Object(j.a)(Object(j.a)({},e),{},{id:n.id})),p(),i(""),a()):(c(e),p(),a())})),id:"form",children:[Object(m.jsx)("input",Object(j.a)(Object(j.a)({},s("nomi",{required:!0})),{},{type:"text",className:"form-control mb-4",placeholder:"Nomi"})),Object(m.jsx)("input",Object(j.a)(Object(j.a)({},s("bonus",{required:!0})),{},{type:"text",className:"form-control mb-4",placeholder:"Bonus"}))]})}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)("button",{onClick:function(){p(),i(),a()},className:"btn btn-dark",children:" Chiqish"}),Object(m.jsx)("button",{form:"form",className:"btn btn-primary",children:" Saqlash "})]})]})}));var E=Object(r.b)((function(e){return{darajalar:e.DarajaReducer.daraja}}),(function(e){return{deleteLevel:function(t){e({type:"DELETE_LEVEL",payload:t})}}}))((function(e){var t=e.darajalar,a=e.deleteLevel,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(!1),h=Object(s.a)(O,2),u=h[0],x=h[1],p=function(){return x((function(e){return!e}))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"navs",children:[Object(m.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return o(e.target.value)}}),Object(m.jsx)("h1",{children:" Darajalar "}),Object(m.jsx)("button",{onClick:p,children:" + Add "})]}),Object(m.jsxs)("table",{className:"table mt-5 table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Nomi"}),Object(m.jsx)("th",{children:"Bonus"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.filter((function(e){return e.nomi?e.nomi.toLowerCase().indexOf(r.toLowerCase())>-1:function(){return e}})).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",t+1," "]}),Object(m.jsxs)("td",{children:[" ",e.nomi," "]}),Object(m.jsxs)("td",{children:[" ",e.bonus," "]}),Object(m.jsxs)("td",{children:[Object(m.jsx)("i",{className:"bi bi-pencil-fill h4",onClick:function(){return b(e),void p()},children:" "}),Object(m.jsx)("i",{className:"bi bi-trash-fill h4",onClick:function(){return a(t)},children:" "})]})]},t)}))})]}),Object(m.jsx)(y,{handleModal:u,toggle:p,edit:d,setEdit:b})]})}));var N=function(){var e=Object(o.e)().pathname;return Object(m.jsxs)("div",{className:"block",children:[Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(l.b,{to:"/xodim",children:Object(m.jsx)("h5",{className:"".concat("/xodim"===e?"activ":""),children:" Xodimlar "})}),Object(m.jsx)(l.b,{to:"/lavozim",children:Object(m.jsx)("h5",{className:"".concat("/lavozim"===e?"activ":""),children:" Lavozim "})}),Object(m.jsx)(l.b,{to:"/daraja",children:Object(m.jsx)("h5",{className:"".concat("/daraja"===e?"activ":""),children:" Ilmiy Daraja "})})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/xodim",element:Object(m.jsx)(p,{})}),Object(m.jsx)(o.a,{path:"/lavozim",element:Object(m.jsx)(f,{})}),Object(m.jsx)(o.a,{path:"/daraja",element:Object(m.jsx)(E,{})})]})})]})},g=a(23),L=a(32),D=a.n(L),S=a(6);var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lavozimlar:[{id:1,nomi:"Teamleader",maosh:1e3},{id:2,nomi:"Manager",maosh:1500},{id:3,nomi:"Developer",maosh:2e3}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POSITION":var a=Object(S.a)(e.lavozimlar);return a.push(Object(j.a)(Object(j.a)({},t.payload),{},{id:e.lavozimlar.length+1})),Object(j.a)(Object(j.a)({},e),{},{lavozimlar:Object(S.a)(a)});case"DELETE_POSITION":var c=Object(S.a)(e.lavozimlar);return c.splice(t.payload,1),Object(j.a)(Object(j.a)({},e),{},{lavozimlar:c});case"EDIT_POSITION":console.log(t.payload);var n=e.lavozimlar.map((function(a){return a.id===t.payload.id&&(a=Object(j.a)(Object(j.a)({},e),{},{id:t.payload.id,nomi:t.payload.nomi,maosh:t.payload.nomi})),a}));return console.log(n),e=Object(j.a)(Object(j.a)({},e),{},{lavozimlar:n})}return e};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{daraja:[{id:1,nomi:"Junior",bonus:10},{id:2,nomi:"Middle",bonus:15},{id:3,nomi:"Senior",bonus:30}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_LEVEL":var a=Object(S.a)(e.daraja);return a.splice(t.payload,1),e=Object(j.a)(Object(j.a)({},e),{},{daraja:a});case"ADD_LEVEL":var c=Object(S.a)(e.daraja);return c.push(Object(j.a)(Object(j.a)({},t.payload),{},{id:e.daraja.length+1})),e=Object(j.a)(Object(j.a)({},e),{},{daraja:c});case"EDIT_LEVEL":var n=e.daraja.map((function(a){return a.id===t.payload.id&&(a=Object(j.a)(Object(j.a)({},e),{},{id:t.payload.id,nomi:t.payload.nomi,bonus:t.payload.bonus})),a}));return e=Object(j.a)(Object(j.a)({},e),{},{daraja:n})}return e},I=Object(g.c)(Object(g.b)({XodimReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{xodimlar:[{id:1,name:"Mark",surname:"Otto",phone:123456,position:"Jamoa sardori",level:"Senior"},{id:2,name:"Jacob",surname:"Throton",phone:123456,position:"Developer",level:"Middle"},{id:3,name:"Larry",surname:"theBrid",phone:123456,position:"Developer",level:"Junior"}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var a=e,c=a.xodimlar;return c.push(Object(j.a)(Object(j.a)({},t.payload),{},{id:c.length+1})),Object(j.a)({},e);case"EDIT":var n=e.xodimlar.map((function(e,a){return e.id===t.payload.id&&(e=Object(j.a)(Object(j.a)({},e),{},{id:t.payload.id,name:t.payload.name,surname:t.payload.surname,position:t.payload.position,phone:t.payload.phone,level:t.payload.level})),e}));e=Object(j.a)(Object(j.a)({},e),{},{xodimlar:n});break;case"DELETE_USER":var i=Object(S.a)(e.xodimlar);i.splice(t.payload,1),e=Object(j.a)(Object(j.a)({},e),{},{xodimlar:i});break;default:return e}return e},LavozimReducer:z,DarajaReducer:C}),Object(g.a)(D.a));a(52),a(53);i.a.render(Object(m.jsx)(r.a,{store:I,children:Object(m.jsx)(l.a,{children:Object(m.jsx)(N,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.f09c6cf7.chunk.js.map