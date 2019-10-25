(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),l=(n(14),n(1)),i=n(2),s=n(3),u=n(5),d=n(4),p=n(6);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=Object(o.createContext)(),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={productsList:[],cart:{totalAmount:0,quantity:0},displayModal:!1},n.updateProductList=function(e){n.setState({productsList:e})},n.closeModal=function(){n.setState({displayModal:!1,productsList:n.state.productsList.map((function(e){return f({},e,{count:0})})),cart:{totalAmount:0,quantity:0}})},n.showModal=function(){n.state.cart.totalAmount>0&&n.setState({displayModal:!0})},n.updateProductCount=function(e,t){var o=n.state.productsList.map((function(n){return n.productId===e&&"ADD"===t?f({},n,{count:n.count+1}):n.productId===e&&"ADD_TO_CART"===t&&0===n.count?f({},n,{count:n.count+1}):n.productId===e&&n.count>0&&"SUB"===t?f({},n,{count:n.count-1}):n}));n.calculateCheckout(o),n.setState({productsList:o})},n.calculateCheckout=function(e){var t=0,o=0;e.forEach((function(e){e.count>0&&(t+=e.count*e.mrf,o+=e.count)})),n.setState({cart:{totalAmount:t,quantity:o}})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(v.Provider,{value:f({},this.state,{updateProductList:this.updateProductList,updateProductCount:this.updateProductCount,showModal:this.showModal,closeModal:this.closeModal})},this.props.children)}}]),t}(o.Component);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(o.useContext)(v).updateProductCount,n={backgroundColor:"#4CAF50",padding:"10px",borderRadius:"50%"};return a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"col-6"},a.a.createElement("button",{className:"button",onClick:function(){return t(e.productId,"ADD_TO_CART")}},"Add to Cart")),a.a.createElement("div",{className:"col-6"},a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"col-4"},a.a.createElement("button",{style:y({},n),onClick:function(){return t(e.productId,"ADD")}},"+")),a.a.createElement("div",{className:"col-4"},e.count),a.a.createElement("div",{className:"col-4"},a.a.createElement("button",{style:y({},n),onClick:function(){return t(e.productId,"SUB")}},"-")))))},E=function(e){var t=e.product,n=t.imageUrl,o=t.offerText,r=t.brandName,c=t.productName,l=t.price,i=t.mrf,s=t.quantity,u=t.count,d=t.productId;return a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"col-3 col-s-1"}),a.a.createElement("div",{className:"col-3 col-s-5 align-center border-line"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 col-s-12"},a.a.createElement("img",{src:n,alt:"product"}))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 col-s-12"},a.a.createElement("div",null,o," OFF")))),a.a.createElement("div",{className:"col-3 col-s-5 align-left border-line",style:{margin:"auto"}},a.a.createElement("h2",{style:{color:"green"}},r),a.a.createElement("p",null,c),a.a.createElement("div",null,s),a.a.createElement("div",null,"MRP ",l),a.a.createElement("div",{style:{fontWeight:700}},"Rs ",i),a.a.createElement(O,{count:u,productId:d})),a.a.createElement("div",{className:"col-3 col-s-1"}))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/products",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{count:0})}));e.context.updateProductList(n)})).catch((function(e){console.log("Error Reading data "+e)}))}},{key:"render",value:function(){var e=this.context.productsList;return a.a.createElement("div",{style:{height:"90vh",overflow:"scroll"}},e&&e.map((function(e){return a.a.createElement(E,{product:e,key:e.productId})})))}}]),t}(o.Component);w.contextType=v;var j=w,P=function(){var e=Object(o.useContext)(v),t=e.cart,n=e.showModal;return a.a.createElement("div",{className:"row footer flex"},a.a.createElement("div",{className:"col-3 col-s-1"}),a.a.createElement("div",{className:"col-3 col-s-5",style:{backgroundColor:"pink",fontSize:20,fontWeight:700,color:"black"}},a.a.createElement("div",null,a.a.createElement("span",null,"Qty "),a.a.createElement("span",null,t.quantity)),a.a.createElement("div",null,a.a.createElement("span",null,"Total "),a.a.createElement("span",null,t.totalAmount))),a.a.createElement("div",{className:"col-3 col-s-5",style:{backgroundColor:"pink"}},a.a.createElement("button",{className:"button",onClick:n},"Check Out")),a.a.createElement("div",{className:"col-3 col-s-1"}))},N=function(){var e=Object(o.useContext)(v),t=e.displayModal,n=e.cart,r=e.closeModal;return a.a.createElement("div",{id:"myModal",className:"modal",style:{display:t?"block":"none"}},a.a.createElement("div",{className:"modal-content"},a.a.createElement("span",{className:"close",onClick:r},"\xd7"),a.a.createElement("p",{className:"align-center"},"Total Amount: ",n.totalAmount),a.a.createElement("p",{className:"align-center"},"Transaction Successful!!!")))};var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,null,a.a.createElement(j,null),a.a.createElement(P,null),a.a.createElement(N,null)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.21c10b42.chunk.js.map