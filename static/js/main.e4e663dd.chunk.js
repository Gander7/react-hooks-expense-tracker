(this["webpackJsonpreact-expense-tracker"]=this["webpackJsonpreact-expense-tracker"]||[]).push([[0],[,,function(e,t,n){e.exports={incomeExpense:"IncomeExpenses_incomeExpense__LwRy_",money:"IncomeExpenses_money__2tiwM",plus:"IncomeExpenses_plus__CX5nm",minus:"IncomeExpenses_minus__1KHV1"}},function(e,t,n){e.exports={plus:"Transaction_plus__3a_3L",minus:"Transaction_minus__Uqon9",deleteBtn:"Transaction_deleteBtn__2igGq",transaction:"Transaction_transaction__1Gg0S"}},function(e,t,n){e.exports={title:"Balance_title__29b7t",text:"Balance_text__3axa2"}},,,,function(e,t,n){e.exports={list:"TransactionList_list__32NIO"}},,,function(e,t,n){e.exports={btn:"AddTransaction_btn__2YzTp"}},,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(1),u=n(12),s=n(5),i=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)({},e,{transactions:[].concat(Object(u.a)(e.transactions),[t.payload])});default:return e}},m={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},d=Object(a.createContext)(m),p=function(e){var t=e.children,n=Object(a.useReducer)(i,m),c=Object(l.a)(n,2),o=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:o.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})},getCurrencyFormatter:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}}},t)},f=n(4),E=n.n(f),x=function(){var e=Object(a.useContext)(d),t=e.transactions,n=(0,e.getCurrencyFormatter)(),c=t.reduce((function(e,t){return e+t.amount}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:E.a.title},"Balance"),r.a.createElement("h4",{className:E.a.text},n.format(c)))},_=n(2),b=n.n(_),y=function(){var e=Object(a.useContext)(d),t=e.transactions,n=(0,e.getCurrencyFormatter)(),c=t.map((function(e){return e.amount})),o=c.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),l=c.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:b.a.incomeExpense},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"".concat(b.a.money," ").concat(b.a.plus)},n.format(o))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"".concat(b.a.money," ").concat(b.a.minus)},n.format(Math.abs(l)))))},O=n(3),v=n.n(O),T=function(e){var t=e.transaction,n=Object(a.useContext)(d),c=n.deleteTransaction,o=(0,n.getCurrencyFormatter)(),l=t.amount<0?v.a.minus:[v.a.plus,v.a.transaction].join(" ");return r.a.createElement("li",{className:l},t.text," ",r.a.createElement("span",null,o.format(t.amount)),r.a.createElement("button",{className:v.a.deleteBtn,onClick:function(){return c(t.id)}},"x"))},N=n(8),g=n.n(N),h=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:g.a.list},e.sort((function(e,t){return t.id-e.id})).map((function(e){return r.a.createElement(T,{key:e.id,transaction:e})}))))},j=n(13),C=n(9),S=n.n(C),A=n(10),F=n.n(A),I=(n(19),{prefix:"$",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:7,allowNegative:!0,allowLeadingZeros:!1}),w=function(e){e.maskOptions;var t=Object(j.a)(e,["maskOptions"]),n=F()(I);return r.a.createElement(S.a,Object.assign({type:"text",mask:n},t))},k=n(11),D=n.n(k),L=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),s=u[0],i=u[1],m=Object(a.useState)(null),p=Object(l.a)(m,2),f=p[0],E=p[1],x=Object(a.useContext)(d),_=x.addTransaction,b=x.transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add New Transaction"),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var t={id:b.length+1,text:n,amount:+s.replace("$","").replace(/[,]/g,"")};_(t),c(""),i(""),f.focus()}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Text"),r.a.createElement("input",{type:"text",maxLength:"40",ref:function(e){return E(e)},value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Amount (positive = income)"),r.a.createElement(w,{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:D.a.btn},"Add Transaction")))};n(20);var B=function(){return r.a.createElement(p,null,r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(y,null),r.a.createElement(L,null),r.a.createElement(h,null)))};o.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e4e663dd.chunk.js.map