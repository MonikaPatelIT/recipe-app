(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),s=a.n(r),i=(a(24),a(26),a(35)),o=a(37),l=a(36),p=a(5),u=a.n(p),m=a(6),h=a(7),f=a(8),v=a(12),w=a(9),b=a(13),d=a(34),g="983e1f6038b33c4c960f5ead47996eab",k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[]},a.getRecipe=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=""===t.target.elements.recipeName.value?"chicken":t.target.elements.recipeName.value,console.log(n),t.preventDefault(),e.next=5,fetch("https://www.food2fork.com/api/search?key=".concat(g,"&q=").concat(n,"&page=2&count=5"));case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,a.setState({recipes:r.recipes});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"chicken",console.log("chicken"),e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat(g,"&q=").concat("chicken","&page=2&count=5"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,this.setState({recipes:a.recipes}),console.log(a);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Recipe Search")))}}]),t}(n.Component),E="983e1f6038b33c4c960f5ead47996eab",j=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(c)))).state={activeRecipes:[]},a.componentDidMount=Object(m.a)(u.a.mark(function e(){var t,n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://www.food2fork.com/api/search?key=".concat(E,"&q=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a.setState({activeRecipes:c.recipes[0]});case 8:case"end":return e.stop()}},e,this)})),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipes;return c.a.createElement("div",{className:"container"},0!==this.state.activeRecipes.length&&c.a.createElement("div",{className:"active-recipe"},c.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),c.a.createElement("h3",{className:"active-recipe__text"}," ",e.title),c.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher ",c.a.createElement("span",null,e.publisher)),c.a.createElement("p",{className:"active-recipe__website"},"Website:",c.a.createElement("span",null,c.a.createElement("a",{href:e.publisher_url},e.publisher_url))),c.a.createElement("button",{className:"active-recipes__button"},c.a.createElement(d.a,{to:"/"},"Go Home"))))}}]),t}(c.a.Component),y=function(){return c.a.createElement(i.a,{basename:"/"},c.a.createElement(o.a,null,c.a.createElement(l.a,{path:"/",component:k,exact:!0}),c.a.createElement(l.a,{path:"/recipe/:id",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.b4d0f32b.chunk.js.map