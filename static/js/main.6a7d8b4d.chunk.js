(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},,function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a",show:"Modal__show__2I0kq",doNotShow:"Modal__doNotShow__a11_c"}},function(e,t,a){e.exports={OrderSummary__header:"OrderSummary__OrderSummary__header__2RPJ-",OrderSummary__body:"OrderSummary__OrderSummary__body__1eC0K"}},,function(e,t,a){e.exports={Layout:"Layout__Layout__2C2_c",content:"Layout__content__2uzgd"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},,,,function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT"}},function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,,,,,,,,,,,,function(e,t,a){e.exports={App:"App__App__2NQx7"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__19WaN"}},,,function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,,function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={Spinner:"Spinner__Spinner__1fiyk","sk-rotateplane":"Spinner__sk-rotateplane__28ili"}},function(e,t,a){e.exports={BurgerBuilder:"BurgerBuilder__BurgerBuilder__1gdQN"}},function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},,function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),c=a.n(o),l=a(13),i=(a(62),a(12)),s=a(42),u=a.n(s),d=a(2),m=a(3),p=a(5),h=a(4),_=a(6),g=a(22),b=a.n(g),f=function(e){return e.children},E=function(e,t){return function(a){return r.a.createElement("div",{className:t},r.a.createElement(e,a))}},v=a(43),y=a.n(v),k=a(44),B=a.n(k),C=function(e){return r.a.createElement("div",{className:B.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:y.a,alt:"Burger Logo"}))},O=a(23),w=a.n(O),S=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement(l.b,{to:e.link,className:e.active?w.a.active:null},e.children))},N=a(47),j=a.n(N),D=function(e){return r.a.createElement("ul",{className:j.a.NavigationItems},r.a.createElement(S,{link:"/burger-builder"},"Burger Builder"),r.a.createElement(S,{link:"/checkout"},"Checkout"))},I=a(48),x=a.n(I),L=function(e){return r.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=a(18),H=a.n(T),M=function(e){return r.a.createElement("header",{className:H.a.Toolbar},r.a.createElement(L,{clicked:e.toggle},"Menu"),r.a.createElement("div",{className:H.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:H.a.DesktopOnly},r.a.createElement(D,null)))},P=a(49),A=a.n(P),U=function(e){return e.show?r.a.createElement("div",{className:A.a.Backdrop,onClick:e.clicked}):null},W=a(15),J=a.n(W),R=function(e){var t=[J.a.SideDrawer,J.a.Close];return e.open&&(t=[J.a.SideDrawer,J.a.Open]),r.a.createElement(f,null,r.a.createElement(U,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:J.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(D,null))))},q=E(function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(M,{toggle:this.sideDrawerToggleHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("header",null,r.a.createElement("p",null,"SideDrawer")),r.a.createElement("main",{className:b.a.content},this.props.children),r.a.createElement("footer",null,"Burger Builder \xa9 2019 by Lypzis."))}}]),t}(n.Component),b.a.Layout),Y=a(26),z=a.n(Y),F=a(50),Q=a(29),$=a(51),K=a.n($).a.create({baseURL:"https://burguerbuilderapi.firebaseio.com/"}),Z=a(19),V=a.n(Z),G=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(U,{show:this.props.show,clicked:this.props.modalClose}),r.a.createElement("div",{className:[V.a.Modal,this.props.show?V.a.show:V.a.doNotShow].join(" ")},this.props.children))}}]),t}(n.Component),X=function(e,t){return function(a){function n(){var e;return Object(d.a)(this,n),(e=Object(p.a)(this,Object(h.a)(n).call(this))).errorConfirmedHandler=function(){e.setState({error:null})},e.state={error:null},e.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),e.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})}),e}return Object(_.a)(n,a),Object(m.a)(n,[{key:"componentWillUnmount",value:function(){console.log("Will it unmount ?"),t.interceptors.request.eject(this.reqInterceptor),t.interceptors.request.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(G,{show:this.state.error,modalClose:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},ee=a(56),te=a(52),ae=a.n(te),ne=a(11),re=a.n(ne),oe=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:re.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:re.a.BreadTop},r.a.createElement("div",{className:re.a.Seeds1}),r.a.createElement("div",{className:re.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:re.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:re.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:re.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:re.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),ce=Object(i.g)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(ee.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(oe,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please, add some ingredients! :D")),r.a.createElement("div",{className:ae.a.Burger},r.a.createElement(oe,{type:"bread-top"}),t,r.a.createElement(oe,{type:"bread-bottom"}))}),le=a(17),ie=a.n(le),se=E(function(e){return r.a.createElement(f,null,r.a.createElement("div",{className:ie.a.Label},e.label),r.a.createElement("button",{className:ie.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ie.a.More,onClick:e.add},"More"))},ie.a.BuildControl),ue=a(27),de=a.n(ue),me=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],pe=E(function(e){return r.a.createElement(f,null,r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),me.map(function(t){return r.a.createElement(se,{key:t.label,label:t.label,add:e.addIngredient.bind(void 0,t.type),remove:e.removeIngredient.bind(void 0,t.type),disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:de.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},de.a.BuildControls),he=a(28),_e=a.n(he),ge=function(e){return r.a.createElement("button",{className:[_e.a.Button,_e.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},be=a(20),fe=a.n(be),Ee=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:fe.a.span},t),": ",e.props.ingredients[t])});return r.a.createElement(f,null,r.a.createElement("h3",{className:fe.a.OrderSummary__header},"Your Order"),r.a.createElement("div",{className:fe.a.OrderSummary__body},r.a.createElement("p",null,"A delicious burger with the following ingredients: "),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?")),r.a.createElement(ge,{btnType:"Danger",clicked:this.props.purchaseCancel},"Cancel"),r.a.createElement(ge,{btnType:"Success",clicked:this.props.purchaseContinue},"Continue"))}}]),t}(n.Component),ve=a(53),ye=a.n(ve),ke=function(){return r.a.createElement("div",{className:ye.a.Spinner})},Be=a(54),Ce=a.n(Be),Oe={salad:.5,cheese:.6,meat:1.4,bacon:.8},we=X(function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.updateBurger=function(e,t,n){var r=Object(Q.a)({},a.state.ingredients);r[n]=e,a.setState({ingredients:r,totalPrice:t}),a.updatePurchaseState(r)},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=a.state.totalPrice+Oe[e];a.updateBurger(t,n,e)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=a.state.totalPrice-Oe[e];t>=0&&a.updateBurger(t,n,e)},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?".concat(n)})},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.get("/ingredients.json");case 3:t=e.sent,this.setState({ingredients:{salad:t.data.salad,bacon:t.data.bacon,cheese:t.data.cheese,meat:t.data.meat}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:!0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(Q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Sorry, something is preventing the page from loading... :("):r.a.createElement(ke,null);return this.state.ingredients&&(a=r.a.createElement(Ee,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseContinue:this.purchaseContinueHandler,purchaseCancel:this.purchaseCancelHandler}),n=r.a.createElement(f,null,r.a.createElement("div",{className:Ce.a.BurgerBuilder},r.a.createElement(ce,{ingredients:this.state.ingredients}),r.a.createElement(pe,{disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler,addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler})))),this.state.loading&&(a=r.a.createElement(ke,null)),r.a.createElement(f,null,r.a.createElement(G,{show:this.state.purchasing,modalClose:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),K),Se=a(55),Ne=a.n(Se),je=function(e){return r.a.createElement("div",{className:Ne.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes good!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(ce,{ingredients:e.ingredients})),r.a.createElement(ge,{btnType:"Danger",clicked:e.cancelOrder},"Cancel"),r.a.createElement(ge,{btnType:"Success",clicked:e.continueOrder},"Continue"))},De=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:1,bacon:1,cheese:1,meat:1}},a.cancelCheckoutHandler=function(){a.props.history.goBack()},a.continueCheckoutHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},a=!0,n=!1,r=void 0;try{for(var o,c=e.entries()[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var l=o.value;t[l[0]]=+l[1]}}catch(i){n=!0,r=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}this.setState({ingredients:{salad:t.salad,bacon:t.bacon,cheese:t.cheese,meat:t.meat}})}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(je,{ingredients:this.state.ingredients,cancelOrder:this.cancelCheckoutHandler,continueOrder:this.continueCheckoutHandler}))}}]),t}(n.Component),Ie=function(e){return r.a.createElement("div",{className:u.a.App},r.a.createElement(q,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/burger-builder",component:we}),r.a.createElement(i.b,{path:"/checkout",component:De}),r.a.createElement(i.a,{from:"/",to:"/burger-builder"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=r.a.createElement(l.a,null,r.a.createElement(Ie,null));c.a.render(xe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[57,1,2]]]);
//# sourceMappingURL=main.6a7d8b4d.chunk.js.map