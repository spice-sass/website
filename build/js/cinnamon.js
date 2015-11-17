(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var messages = {};

messages.list = [{
	"user": "Charlie Sheen",
	"time": "11:49 AM",
	"message": "I have tiger blood"
}, {
	"user": "Chuck Norris",
	"time": "11:50 AM",
	"message": "I can slam a revolving door"
}, {
	"user": "Arnie",
	"time": "11:51 AM",
	"message": "I'm back"
}, {
	"user": "Sigourney Weaver",
	"time": "11:51 AM",
	"message": "Bishop"
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
			),
			React.createElement(
				"ul",
				{ className: "rooms" },
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						null,
						"Superheroes"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						null,
						"Movie stars"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						null,
						"Footballers"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						null,
						"Animals"
					)
				)
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

	addComment: function addComment(e) {

		e.preventDefault();

		var comment = this.refs.commentBox.getDOMNode().value,
		    list = this.state.list,
		    template = {
			"user": "Nicolas Cage",
			"time": "11:51 AM",
			"message": comment
		};

		list.push(template);
		this.refs.commentBox.getDOMNode().value = "";
		this.setState({
			list: list
		});

		var scroll = this.scrollMsgs;

		setTimeout(function () {
			scroll();
		}, 10);
	},

	scrollMsgs: function scrollMsgs() {

		var messageList = this.refs.messageList.getDOMNode(),
		    messageWrap = this.refs.messageWrap.getDOMNode(),
		    viewHeight = messageList.clientHeight,
		    msgHeight = messageWrap.clientHeight;

		if (msgHeight > viewHeight) {
			messageList.scrollTop = msgHeight - viewHeight + 20;
		}
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
				{ id: "message-list", ref: "messageList" },
				React.createElement(
					"div",
					{ ref: "messageWrap" },
					this.state.list.map(function (msg) {
						return React.createElement(Message, { msg: msg });
					})
				)
			),
			React.createElement(
				"div",
				{ id: "bottom-bar" },
				React.createElement(
					"form",
					{ onSubmit: this.addComment },
					React.createElement("input", { type: "text", ref: "commentBox" })
				)
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
			{ className: "message slide-in-up" },
			React.createElement("img", { src: "http://placehold.it/60x60" }),
			React.createElement(
				"div",
				{ className: "copy" },
				React.createElement(
					"h4",
					null,
					msg.user
				),
				React.createElement(
					"p",
					null,
					msg.message
				)
			)
		);
	}
});

React.render(React.createElement(Cinnamon, null), document.getElementById('cinnamon'));

},{}]},{},[1])