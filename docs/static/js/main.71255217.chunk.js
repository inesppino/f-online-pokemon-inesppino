(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),c=(a(15),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),p=a(6),f=(a(16),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"triangle t-left"}),r.a.createElement("div",{className:"triangle t-right"}))}}]),t}(n.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer-content"},"In\xe9s Pedraza \xa92019"),r.a.createElement("div",{className:"circle c-left"}),r.a.createElement("div",{className:"circle c-right"}))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.getFilter;return r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("label",{htmlFor:"filter"},r.a.createElement("input",{id:"filter",type:"text",placeholder:"Filtra pokemons por nombre...",onKeyUp:e})))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return r.a.createElement("div",{className:"pokemon__wrapper"},r.a.createElement("div",{className:"pokemon__wrapper-fist"},r.a.createElement("img",{className:"pokemon__image",src:e.image,alt:e.name}),r.a.createElement("p",{className:"pokemon__id"},"ID / ",e.id)),r.a.createElement("div",{className:"pokemon__wrapper-second"},r.a.createElement("h2",{className:"pokemon__name"},e.name),r.a.createElement("ul",{className:"pokemon__types"},e.type.map(function(e,t){return r.a.createElement("li",{className:"pokemon__types-item",key:t},e)}))))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.filterPokemons;return r.a.createElement("ul",{className:"main-list"},e.map(function(e){return r.a.createElement("li",{className:"main-list-item",key:e.id},r.a.createElement(v,{pokemon:e}))}))}}]),t}(n.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filterPokemons,a=e.getFilter;return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(k,{getFilter:a}),r.a.createElement(b,{filterPokemons:t})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={havePokemons:!1,pokeList:[],query:""},a.getFilter=a.getFilter.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getSavedLocalStorage()}},{key:"saveLocalStorage",value:function(e,t){localStorage.setItem(t,JSON.stringify(e))}},{key:"getSavedLocalStorage",value:function(){if(null!==localStorage.getItem("pokeList")){var e=JSON.parse(localStorage.getItem("pokeList"));this.setState({pokeList:e,havePokemons:!0})}else this.paintPokemonList()}},{key:"paintPokemonList",value:function(){var e=this,t=[];fetch("https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0").then(function(e){return e.json()}).then(function(a){a.results.map(function(a){var n=fetch(a.url).then(function(e){return e.json()});return n.then(function(a){t.push(a),e.getPokemons(t)}),n})}).catch(function(e){return alert("Ha ocurrido un error: ".concat(e))})}},{key:"getPokemons",value:function(e){var t=this,a=[];e.map(function(e){var n=[];e.types.map(function(e){return n.push(e.type.name)});var r={id:e.id,name:e.name,type:n,image:e.sprites.front_default};return a.push(r),t.setState({pokeList:a.sort(function(e,t){return e.id-t.id}),havePokemons:!0}),a}),this.saveLocalStorage(this.state.pokeList,"pokeList")}},{key:"getFilter",value:function(e){var t=e.currentTarget.value;this.setState({query:t})}},{key:"filterPokemons",value:function(){var e=this.state,t=e.pokeList,a=e.query;return t.filter(function(e){return e.name.toUpperCase().includes(a.toUpperCase())})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement(f,null),r.a.createElement(d,{filterPokemons:this.filterPokemons(),getFilter:this.getFilter}),r.a.createElement(h,null)))}}]),t}(n.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.71255217.chunk.js.map