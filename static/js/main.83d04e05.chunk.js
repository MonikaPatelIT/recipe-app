(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),s=a.n(r),i=(a(24),a(26),a(35)),o=a(37),l=a(36),p=a(5),m=a.n(p),u=a(6),h=a(7),f=a(8),b=a(12),v=a(9),d=a(13),E=function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2em"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName",autoFocus:!0}),n.a.createElement("button",{type:"submit",className:"form__button"},"Search"))},g=a(34),w=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},"if(props.recipes)",e.recipes.map(function(e){return n.a.createElement("div",{className:"col-md-4",key:e.recipe_id,style:{marginBottom:"2em"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipes__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipes__text"},n.a.createElement("h5",{className:"recipes__title"},e.title.lenght<20?"".concat(e.title):"".concat(e.title.substring(0,25))),n.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",n.a.createElement("span",null,e.publisher)," "),n.a.createElement("button",{className:"recipes_buttons"},n.a.createElement(g.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe")))))})))},_="983e1f6038b33c4c960f5ead47996eab",N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getRecipe=function(){var e=Object(u.a)(m.a.mark(function e(t){var c,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=""===t.target.elements.recipeName.value?"chicken":t.target.elements.recipeName.value,console.log(c),t.preventDefault(),e.next=5,fetch("https://www.food2fork.com/api/search?key=".concat(_,"&q=").concat(c,"&page=2&count=5"));case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,a.setState({recipes:r.recipes});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a,c,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("recipes"))){e.next=7;break}console.log(t),a=JSON.parse(t),this.setState({recipes:a}),e.next=16;break;case 7:return"chicken",console.log("Local storage is blank"),e.next=11,fetch("https://www.food2fork.com/api/search?key=".concat(_,"&q=").concat("chicken","&page=2&count=5"));case 11:return c=e.sent,e.next=14,c.json();case 14:n=e.sent,this.setState({recipes:n.recipes});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe Search")),n.a.createElement(E,{getRecipe:this.getRecipe}),n.a.createElement(w,{recipes:this.state.recipes}))}}]),t}(c.Component),k="983e1f6038b33c4c960f5ead47996eab",y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipes:[]},a.componentDidMount=Object(u.a)(m.a.mark(function e(){var t,c,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://www.food2fork.com/api/search?key=".concat(k,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a.setState({activeRecipes:n.recipes[0]});case 8:case"end":return e.stop()}},e,this)})),a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipes;return n.a.createElement("div",{className:"container"},0!==this.state.activeRecipes.length&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("h3",{className:"active-recipe__text"}," ",e.title),n.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher ",n.a.createElement("span",null,e.publisher)),n.a.createElement("p",{className:"active-recipe__website"},"Website:",n.a.createElement("span",null,n.a.createElement("a",{href:e.publisher_url},e.publisher_url))),n.a.createElement("button",{className:"active-recipes__button"},n.a.createElement(g.a,{to:"/"},"Go Home"))))}}]),t}(n.a.Component),x=function(){return n.a.createElement(i.a,{basename:"/"},n.a.createElement(o.a,null,n.a.createElement(l.a,{path:"/",component:N,exact:!0}),n.a.createElement(l.a,{path:"/recipe/:id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.83d04e05.chunk.js.map