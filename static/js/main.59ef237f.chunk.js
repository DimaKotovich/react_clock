(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),l=c(5),s=c(4),r=c(1),u=c.n(r),m=(c(12),c(13),c(0)),d=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(t){var n;return Object(o.a)(this,c),(n=e.call(this,t)).state={currentTime:(new Date).toLocaleTimeString()},n.timerId=void 0,n.timerId=null,n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentTime:(new Date).toLocaleTimeString()}),console.log(t.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(t){t!==this.props&&console.log("The Clock was renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){null!==this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentTime;return Object(m.jsx)("div",{className:"clock",children:Object(m.jsx)("div",{"data-cy":"time",className:"clock__time",children:t})})}}]),c}(u.a.Component),b=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockVisible:!0,clockName:"Clock"},t.clockHide=function(){t.setState({clockVisible:!1})},t.clockShow=function(){t.setState({clockVisible:!0})},t.clockSetName=function(){t.setState({clockName:String(Math.floor(10*Math.random()))})},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this.state,e=t.clockVisible,c=t.clockName;return Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)("div",{className:"app__block",children:[Object(m.jsx)("h2",{className:"app__name",children:"".concat(c)}),e&&Object(m.jsx)(d,{clockName:c}),Object(m.jsxs)("div",{className:"app__buttons",children:[Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.clockShow,disabled:e,children:"Show"}),Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.clockSetName,disabled:!e,children:"Rename"}),Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.clockHide,disabled:!e,children:"Hide"})]})]})})}}]),c}(u.a.Component),h=b;a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.59ef237f.chunk.js.map