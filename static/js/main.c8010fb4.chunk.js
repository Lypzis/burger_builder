(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,,,,,function(e,t,a){e.exports={Layout:"Layout__Layout__1SGjM",content:"Layout__content__ciN7r"}},,,function(e,t,a){e.exports={App:"App__App__2NQx7"}},function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f"}},,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(22),a(11)),i=a.n(c),s=a(8),d=a.n(s),u=function(e){return e.children},m=function(e,t){return function(a){return r.a.createElement("div",{className:t},r.a.createElement(e,a))}},_=m(function(e){return r.a.createElement(u,null,r.a.createElement("header",null,r.a.createElement("p",null,"Toolbar, SideDrawer, Backdrop")),r.a.createElement("main",{className:d.a.content},e.children),r.a.createElement("footer",null,"Burger Builder \xa9 2019 by Lypzis."))},d.a.Layout),p=a(15),b=a(3),g=a(4),B=a(6),v=a(5),f=a(7),E=a(14),h=a(12),y=a.n(h),C=a(1),k=a.n(C),I=function(e){function t(){return Object(b.a)(this,t),Object(B.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:k.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:k.a.BreadTop},r.a.createElement("div",{className:k.a.Seeds1}),r.a.createElement("div",{className:k.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:k.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:k.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:k.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:k.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),N=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(E.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(I,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please, add some ingredients! :D")),r.a.createElement("div",{className:y.a.Burger},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))},j=a(2),w=a.n(j),L=m(function(e){return r.a.createElement(u,null,r.a.createElement("div",{className:w.a.Label},e.label),r.a.createElement("button",{className:w.a.Less,onClick:e.remove},"Less"),r.a.createElement("button",{className:w.a.More,onClick:e.add},"More"))},w.a.BuildControl),O=a(13),S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],x=m(function(e){return r.a.createElement(u,null,S.map(function(t){return r.a.createElement(L,{key:t.label,label:t.label,add:e.addIngredient.bind(void 0,t.type),remove:e.removeIngredient.bind(void 0,t.type)})}))},a.n(O).a.BuildControls),M={salad:.5,cheese:.6,meat:1.4,bacon:.8},A=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(B.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},purchased:!0,totalPrice:4},a.updateBurger=function(e,t,n){var r=Object(p.a)({},a.state.ingredients);r[n]=e,a.setState({ingredients:r,totalPrice:t})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=a.state.totalPrice+M[e];a.updateBurger(t,n,e)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=a.state.totalPrice-M[e];a.updateBurger(t,n,e)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(N,{ingredients:this.state.ingredients}),r.a.createElement(x,{addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler}))}}]),t}(n.Component);var H=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(_,null,r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.c8010fb4.chunk.js.map