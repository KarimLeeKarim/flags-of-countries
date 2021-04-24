(this["webpackJsonpflags-of-countries"]=this["webpackJsonpflags-of-countries"]||[]).push([[0],{37:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(14),r=a.n(c),i=(a(37),a(26)),o=a(9),l=a.n(o),d=a(13),j=a(15),u=a(16),h=a(19),p=a(18),b=a(28),x=a.n(b),O=a(1),f=function(e){var t=e.darkMode;e.statusOfMode;return Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsx)("p",{className:"navbar__text",children:"Where in the world?"}),Object(O.jsxs)("p",{onClick:t,className:"navbar__button",children:[Object(O.jsx)(x.a,{className:"fas fa-moon"}),"Dark Mode"]})]})},m=a(29),v=a.n(m),g=a(12),y=function(e){var t=e.countries;return Object(O.jsx)("div",{id:"countries",children:t.map((function(e){return Object(O.jsx)(g.b,{to:"/country/".concat(e.name),children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{src:e.flag,width:"286px",height:"190px",className:"card-img-top",alt:"flag"}),Object(O.jsxs)("div",{className:"card__body",children:[Object(O.jsx)("h5",{className:"card-title",children:e.name}),Object(O.jsxs)("p",{className:"card-text",children:["Population: ",e.population]}),Object(O.jsxs)("p",{className:"card-text",children:["Region: ",e.region]}),Object(O.jsxs)("p",{className:"card-text",children:["Capital: ",e.capital]})]})]})},e.alpha2Code)}))})},N=function(e){var t=e.countries,a=e.inputTarget,n=e.choose;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"main",children:[Object(O.jsxs)("div",{className:"searching",children:[Object(O.jsxs)("div",{className:"search",children:[Object(O.jsx)(v.a,{className:"fas fa-search"}),Object(O.jsx)("input",{type:"text",id:"input",placeholder:"Search for a country...",onChange:a})]}),Object(O.jsxs)("select",{selected:!0,id:"regionsSelector",onChange:n,children:[Object(O.jsx)("option",{selected:!0,disabled:!0,children:"Filter by Region"}),Object(O.jsx)("option",{children:"All"}),Object(O.jsx)("option",{children:"Africa"}),Object(O.jsx)("option",{children:"Asia"}),Object(O.jsx)("option",{children:"Europe"}),Object(O.jsx)("option",{children:"Oceania"})]})]}),Object(O.jsx)(y,{countries:t})]})})},C=a(31),k=a(30),D=a.n(k),w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selCountry:{}},e.fetchData=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,s,c,r,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return s=t.sent,c=Object(C.a)(s,1),r=c[0],t.next=10,fetch("https://restcountries.eu/rest/v2/all");case 10:return i=t.sent,t.next=13,i.json();case 13:o=t.sent,e.setState({alldata:o,selCountry:r});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCountryByCode=function(t){var a=e.state.alldata.find((function(e){return e.alpha3Code===t}));return a?a.name:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.fetchData(e)}},{key:"componentDidUpdate",value:function(){this.fetchData(this.props.match.params.id)}},{key:"shouldComponentUpdate",value:function(e,t){return e.match.params.id!=this.props.match.params.id||t.selCountry.name!=this.state.selCountry.name}},{key:"render",value:function(){var e=this,t=this.state.selCountry;return t.name?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("section",{id:"city",children:[Object(O.jsx)("button",{id:"back",children:Object(O.jsxs)(g.b,{to:"/",children:[Object(O.jsx)(D.a,{className:"fas fa-long-arrow-alt-left"}),"Back"]})}),Object(O.jsxs)("div",{className:"city__info",children:[Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:t.flag,className:"card-img-top",alt:t.flag})}),Object(O.jsxs)("div",{className:"countrInfo",children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsxs)("div",{className:"countrInfo__info",children:[Object(O.jsxs)("div",{className:"info__first",children:[Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Native name"}),": ",t.name]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Population"}),": ",t.population]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Region"}),": ",t.region]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Sub Region"}),": ",t.subregion]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Capital"}),": ",t.capital]})]}),Object(O.jsxs)("div",{className:"info__second",children:[Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Top Level Domain"}),": ",t.topLevelDomain]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Currencies"}),": ",t.currencies[0].code]}),Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Languages"}),": ",t.region]})]})]}),Object(O.jsx)("div",{className:"borderr",children:Object(O.jsxs)("p",{className:"p",children:[Object(O.jsx)("span",{children:"Border Countries :"}),t.borders.map((function(t){return Object(O.jsx)("button",{children:Object(O.jsx)(g.b,{to:"/country/".concat(e.getCountryByCode(t)),children:t})})}))]})})]})]})]})}):Object(O.jsx)("div",{children:"Loading..."})}}]),a}(n.Component),B=a(3),_=(a(46),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={CountryDataBasa:[],inputOfValue:"",choosenRegion:"",dark:!1},e.darkMode=function(){e.state.dark?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode"),e.setState({dark:!e.state.dark})},e.input=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=a.target.value,s=e.state.CountryDataBasa.filter((function(e){return e.name.toLowerCase().includes(n)||e.name.includes(n)})),e.setState({CountryDataBasa:s});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.choosenRegion=function(t){var a=t.target.options[t.target.selectedIndex].text;e.setState({choosenRegion:a}),e.fetchByRegion(a)},e.fetchData=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({CountryDataBasa:n});case 7:case"end":return t.stop()}}),t)}))),e.fetchByRegion=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/region/".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,"All"===a?e.fetchData():e.setState({CountryDataBasa:s});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{darkMode:this.darkMode,statusOfMode:this.state.dark}),Object(O.jsxs)(B.c,{children:[Object(O.jsx)(B.a,{exact:!0,path:"/",children:Object(O.jsx)(N,{countries:this.state.CountryDataBasa,inputTarget:this.input,choose:this.choosenRegion})}),Object(O.jsx)(B.a,{exact:!0,path:"/country/:id",location:this.props.location,render:function(t){return Object(O.jsx)(w,Object(i.a)(Object(i.a)({},t),{},{alldata:e.state.CountryDataBasa}))}})]})]})}}]),a}(n.Component));r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(_,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.188d6c1a.chunk.js.map