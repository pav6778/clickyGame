(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Alisa","image":"../takkenchars/alisa.png"},{"id":2,"name":"Asuka","image":"../public/takkenchars/asuka.png"},{"id":3,"name":"Claudio","image":"public/takkenchars/claudio.png"},{"id":4,"name":"Feng","image":"public/takkenchars/feng.png"},{"id":5,"name":"Heihachi","image":"public/takkenchars/heihachi.png"},{"id":6,"name":"Katarina","image":"public/takkenchars/katarina.png"},{"id":7,"name":"Kazuya","image":"public/takkenchars/kazuya.png"},{"id":8,"name":"Lars","image":"public/takkenchars/lars.png"},{"id":9,"name":"Law","image":"public/takkenchars/law.png"},{"id":10,"name":"Lili","image":"public/takkenchars/lili.png"},{"id":11,"name":"Paul","image":"public/takkenchars/paul.png"},{"id":12,"name":"Shaheen","image":"public/takkenchars/shaheen.png"}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),l=(t(14),t(3)),o=t(4),s=t(7),m=t(5),u=t(8);t(15);var g=function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,e.text))};var h=function(e){return c.a.createElement("div",{className:"float-left "},c.a.createElement("h4",null," Score ",c.a.createElement("span",null,e.score)))};var k=function(e){return c.a.createElement("div",{className:"float-right pl-1"},c.a.createElement("h4",null,"  | Top Score ",c.a.createElement("span",null,e.topScore)))};t(16);var d=function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar fixed-top navbar-warning bg-warning"},c.a.createElement("a",{className:"navbar-brand text-dark",href:"/"},c.a.createElement("h1",null,"Clicky Game")),c.a.createElement(g,{text:e.text}),c.a.createElement("div",null,c.a.createElement(h,{score:e.score}),c.a.createElement(k,{topScore:e.topScore}))))};t(17);var p=function(){return c.a.createElement("div",{className:"header "},c.a.createElement("h2",null,"Clicky Game"),c.a.createElement("h5",null,"Click on an image to earn points, but don't click on any more than once!"))};t(18);var f=function(e){return c.a.createElement("div",{onClick:function(){return e.clickHandle(e.id)},className:"images",role:"img",style:{backgroundImage:"url("+e.image+")"}})},v=t(6);t(19);var E=function(e){return c.a.createElement("div",{className:"wrapper container"},e.children)};var b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).clickHandle=function(e){var a=t.state.clicked.concat(e);t.setState({message:{text:"",score:t.state.message.score+1,topScore:t.state.message.topScore+1}}),console.log(t.state.clicked);for(var n=0;n<t.state.clicked.length;n++)t.state.clicked[n]===e&&t.setState({clicked:[],message:{text:"Sorry, you lost! Try again?",score:0,topScore:0}});setTimeout((function(){t.setState({clicked:a})}),100)},t.state={Chars:v,clicked:[],message:{text:"Click to start the game",score:0,topScore:0}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(d,{text:this.state.message.text,score:this.state.message.score,topScore:this.state.message.topScore}),c.a.createElement(p,null),c.a.createElement(E,null,function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}(this.state.Chars).map((function(a){return c.a.createElement(f,{clickHandle:e.clickHandle,id:a.id,key:a.id,image:a.image})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.3aee0b42.chunk.js.map