(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a",show:"Modal__show__2I0kq",doNotShow:"Modal__doNotShow__a11_c"}},function(e,t,a){e.exports={OrderSummary__header:"OrderSummary__OrderSummary__header__2RPJ-",OrderSummary__body:"OrderSummary__OrderSummary__body__1eC0K"}},function(e,t,a){e.exports={Layout:"Layout__Layout__2C2_c",content:"Layout__content__2uzgd"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},,function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT"}},function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,,,,,,,,,,function(e,t,a){e.exports={App:"App__App__2NQx7"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,,function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={Spinner:"Spinner__Spinner__1fiyk","sk-rotateplane":"Spinner__sk-rotateplane__28ili"}},,function(e,t,a){e.exports=a(65)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),c=(a(46),a(29)),i=a.n(c),s=a(2),u=a(3),d=a(5),m=a(4),p=a(6),_=a(13),h=a.n(_),g=function(e){return e.children},b=function(e,t){return function(a){return r.a.createElement("div",{className:t},r.a.createElement(e,a))}},f=a(30),E=a.n(f),v=a(31),y=a.n(v),B=function(e){return r.a.createElement("div",{className:y.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"Burger Logo"}))},w=a(14),S=a.n(w),k=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?S.a.active:null},e.children))},O=a(32),C=a.n(O),N=function(e){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(k,{link:"#",active:!0},"Burger Builder"),r.a.createElement(k,{link:"#"},"Checkout"))},j=a(33),D=a.n(j),I=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=a(10),L=a.n(x),T=function(e){return r.a.createElement("header",{className:L.a.Toolbar},r.a.createElement(I,{clicked:e.toggle},"Menu"),r.a.createElement("div",{className:L.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",{className:L.a.DesktopOnly},r.a.createElement(N,null)))},H=a(34),M=a.n(H),P=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},A=a(8),J=a.n(A),W=function(e){var t=[J.a.SideDrawer,J.a.Close];return e.open&&(t=[J.a.SideDrawer,J.a.Open]),r.a.createElement(g,null,r.a.createElement(P,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:J.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},q=b(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(T,{toggle:this.sideDrawerToggleHandler}),r.a.createElement(W,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("header",null,r.a.createElement("p",null,"SideDrawer")),r.a.createElement("main",{className:h.a.content},this.props.children),r.a.createElement("footer",null,"Burger Builder \xa9 2019 by Lypzis."))}}]),t}(n.Component),h.a.Layout),z=a(15),U=a.n(z),F=a(35),R=a(18),Y=a(36),Q=a.n(Y).a.create({baseURL:"https://burguerbuilderapi.firebaseio.com/"}),$=a(11),K=a.n($),V=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(P,{show:this.props.show,clicked:this.props.modalClose}),r.a.createElement("div",{className:[K.a.Modal,this.props.show?K.a.show:K.a.doNotShow].join(" ")},this.props.children))}}]),t}(n.Component),Z=function(e,t){return function(a){function n(){var e;return Object(s.a)(this,n),(e=Object(d.a)(this,Object(m.a)(n).call(this))).errorConfirmedHandler=function(){e.setState({error:null})},e.state={error:null},e.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),e.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})}),e}return Object(p.a)(n,a),Object(u.a)(n,[{key:"componentWillUnmount",value:function(){console.log("Will it unmount ?"),t.interceptors.request.eject(this.reqInterceptor),t.interceptors.request.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(V,{show:this.state.error,modalClose:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},G=a(39),X=a(37),ee=a.n(X),te=a(7),ae=a.n(te),ne=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:ae.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:ae.a.BreadTop},r.a.createElement("div",{className:ae.a.Seeds1}),r.a.createElement("div",{className:ae.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:ae.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:ae.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:ae.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:ae.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),re=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(G.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(ne,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please, add some ingredients! :D")),r.a.createElement("div",{className:ee.a.Burger},r.a.createElement(ne,{type:"bread-top"}),t,r.a.createElement(ne,{type:"bread-bottom"}))},oe=a(9),le=a.n(oe),ce=b(function(e){return r.a.createElement(g,null,r.a.createElement("div",{className:le.a.Label},e.label),r.a.createElement("button",{className:le.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:le.a.More,onClick:e.add},"More"))},le.a.BuildControl),ie=a(16),se=a.n(ie),ue=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],de=b(function(e){return r.a.createElement(g,null,r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),ue.map(function(t){return r.a.createElement(ce,{key:t.label,label:t.label,add:e.addIngredient.bind(void 0,t.type),remove:e.removeIngredient.bind(void 0,t.type),disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:se.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},se.a.BuildControls),me=a(17),pe=a.n(me),_e=function(e){return r.a.createElement("button",{className:[pe.a.Button,pe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},he=a(12),ge=a.n(he),be=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:ge.a.span},t),": ",e.props.ingredients[t])});return r.a.createElement(g,null,r.a.createElement("h3",{className:ge.a.OrderSummary__header},"Your Order"),r.a.createElement("div",{className:ge.a.OrderSummary__body},r.a.createElement("p",null,"A delicious burger with the following ingredients: "),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?")),r.a.createElement(_e,{btnType:"Danger",clicked:this.props.purchaseCancel},"Cancel"),r.a.createElement(_e,{btnType:"Success",clicked:this.props.purchaseContinue},"Continue"))}}]),t}(n.Component),fe=a(38),Ee=a.n(fe),ve=function(){return r.a.createElement("div",{className:Ee.a.Spinner})},ye={salad:.5,cheese:.6,meat:1.4,bacon:.8},Be=Z(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.updateBurger=function(e,t,n){var r=Object(R.a)({},a.state.ingredients);r[n]=e,a.setState({ingredients:r,totalPrice:t}),a.updatePurchaseState(r)},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=a.state.totalPrice+ye[e];a.updateBurger(t,n,e)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=a.state.totalPrice-ye[e];t>=0&&a.updateBurger(t,n,e)},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice.toFixed(2),customer:{name:"Victor Piccoli",address:{street:"Teststret 1",zipCode:"12345",country:"Brazil"},email:"test@test.com"},deliveryMethod:"fastest"};Q.post("/orders.json",e).then(function(e){console.log(e),a.setState({loading:!1,purchasing:!1})}).catch(function(e){console.log(e),a.setState({loading:!1,purchasing:!1})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(U.a.mark(function e(){var t;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.get("/ingredients.json");case 3:t=e.sent,this.setState({ingredients:{salad:t.data.salad,bacon:t.data.bacon,cheese:t.data.cheese,meat:t.data.meat}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:!0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(R.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Sorry, something is preventing the page from loading... :("):r.a.createElement(ve,null);return this.state.ingredients&&(a=r.a.createElement(be,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseContinue:this.purchaseContinueHandler,purchaseCancel:this.purchaseCancelHandler}),n=r.a.createElement(g,null,r.a.createElement(re,{ingredients:this.state.ingredients}),r.a.createElement(de,{disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler,addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler}))),this.state.loading&&(a=r.a.createElement(ve,null)),r.a.createElement(g,null,r.a.createElement(V,{show:this.state.purchasing,modalClose:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),Q),we=function(e){return r.a.createElement("div",{className:i.a.App},r.a.createElement(q,null,r.a.createElement(Be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[40,1,2]]]);
//# sourceMappingURL=main.81b93498.chunk.js.map