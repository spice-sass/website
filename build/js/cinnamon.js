(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var messages = {};

messages.list = [{
	"user": "charlie-sheen3000",
	"time": "11:49 AM",
	"message": "I have tiger blood"
}, {
	"user": "Chucknorris",
	"time": "11:50 AM",
	"message": "I can slam a revolving door"
}, {
	"user": "Arnie",
	"time": "11:51 AM",
	"message": "I'm back"
}];

var Cinnamon = React.createClass({
	displayName: "Cinnamon",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(SideBar, null),
			React.createElement(Messages, null)
		);
	}
});

var SideBar = React.createClass({
	displayName: "SideBar",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "sidebar" },
			React.createElement(
				"h1",
				null,
				"Cinnamon"
			),
			React.createElement(
				"h2",
				null,
				"Modern chat app"
			)
		);
	}
});

var Messages = React.createClass({
	displayName: "Messages",

	getInitialState: function getInitialState() {
		return {
			list: messages.list
		};
	},

	render: function render() {
		return React.createElement(
			"div",
			{ id: "messages" },
			React.createElement(
				"div",
				{ id: "top-bar" },
				React.createElement(
					"h3",
					null,
					"Messages"
				)
			),
			React.createElement(
				"div",
				{ id: "message-list" },
				this.state.list.map(function (msg) {
					return React.createElement(Message, { msg: msg });
				})
			)
		);
	}
});

var Message = React.createClass({
	displayName: "Message",

	render: function render() {

		var msg = this.props.msg;

		return React.createElement(
			"div",
			{ className: "message" },
			msg.user
		);
	}
});

React.render(React.createElement(Cinnamon, null), document.getElementById('cinnamon'));

},{}]},{},[1])