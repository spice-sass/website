!function e(t,s,r){function a(i,c){if(!s[i]){if(!t[i]){var l="function"==typeof require&&require;if(!c&&l)return l(i,!0);if(n)return n(i,!0);throw new Error("Cannot find module '"+i+"'")}var u=s[i]={exports:{}};t[i][0].call(u.exports,function(e){var s=t[i][1][e];return a(s?s:e)},u,u.exports,e,t,s,r)}return s[i].exports}for(var n="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,s){"use strict";var r=React.createClass({displayName:"Saffron",getInitialState:function(){return{slideAway:!1,success:!1,error:!1,msg:"",user:""}},handleClick:function(){var e=this.refs.textInput.getDOMNode().value,t=(this.refs.passInput.getDOMNode().value,this.success.bind(this));e.length<5||e.length<5?this.setState({error:!0,msg:"Username not recognised"}):(this.setState({slideAway:!0}),setTimeout(function(){t(e)},700))},success:function(e){this.setState({success:!0,error:!1,msg:"",user:e})},render:function(){return React.createElement("div",null,0==this.state.success?React.createElement("form",{className:this.state.slideAway?"lined slide-away":"lined"},React.createElement("label",{className:this.state.error?"slide-in-up error":"slide-in-up"},"Username"),React.createElement("input",{className:"slide-in-up",type:"text",ref:"textInput"}),React.createElement("label",{className:this.state.error?"slide-in-up error":"slide-in-up"},"Password"),React.createElement("input",{className:"slide-in-up",type:"password",ref:"passInput"}),React.createElement("button",{type:"button",onClick:this.handleClick,className:"flat-submit block-icon-check slide-in-up"},"Login"),this.state.error&&React.createElement("p",{className:"error-msg slide-in-up"},this.state.msg)):React.createElement("div",{className:"success-message fade-in"},React.createElement("i",{className:"line-icon-head"}),React.createElement("h5",null,"Welcome back ",this.state.user)))}});React.render(React.createElement(r,null),document.getElementById("saffron-form"))},{}]},{},[1]);