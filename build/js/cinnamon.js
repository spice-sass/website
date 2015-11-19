(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var messages = {};

messages.list = [{
	"user": "Charlie Sheen",
	"time": "11:49 AM",
	"message": "As an expert on everything, I know that this awesome chat interface was built using spice sass mixins. Hawt dang!!",
	"likes": 3,
	"shares": 1
}, {
	"user": "Chuck Norris",
	"time": "11:50 AM",
	"message": "Yeah I know man... It's so awesome it makes me wanna slam a revolving door and roundhouse kick terrorism in the face!!! Again.",
	"likes": 1,
	"shares": 0
}, {
	"user": "Arnie",
	"time": "11:51 AM",
	"message": "I'm back",
	"likes": 0,
	"shares": 0

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
				"div",
				{ id: "logo-space" },
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
			),
			React.createElement(
				"div",
				{ id: "side-main" },
				React.createElement(
					"h3",
					null,
					"Groups"
				),
				React.createElement(
					"ul",
					{ id: "rooms" },
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
							{ className: "active" },
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
				),
				React.createElement(
					"h3",
					null,
					"Chats"
				),
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							null,
							"Charlie Sheen"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							null,
							"Arnie",
							React.createElement(
								"span",
								{ className: "badge" },
								"5"
							)
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							null,
							"Chuck Norris",
							React.createElement(
								"span",
								{ className: "badge" },
								"7"
							)
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							null,
							"Bruce Willis"
						)
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
			"time": "11:55 AM",
			"message": comment,
			"likes": 0,
			"shares": 0
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
				),
				React.createElement(
					"p",
					{ className: "date" },
					React.createElement(
						"span",
						null,
						"Today"
					)
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
					{ className: "line-icon-speech-bubble", onSubmit: this.addComment },
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
		var img = msg.user.toLowerCase().replace(" ", "-");

		return React.createElement(
			"div",
			{ className: "message slide-in-up" },
			React.createElement("img", { className: "fade-in", src: '/img/users/' + img + '.jpg' }),
			React.createElement(
				"div",
				{ className: "copy" },
				React.createElement(
					"h4",
					{ className: "slide-in-left" },
					msg.user,
					" ",
					React.createElement(
						"span",
						{ className: "time" },
						msg.time
					)
				),
				React.createElement(
					"p",
					{ className: "slide-in-left" },
					msg.message
				),
				React.createElement(
					"ul",
					{ className: "social slide-in-up" },
					React.createElement(
						"li",
						{ className: msg.likes > 0 ? 'show likes line-icon-heart' : 'likes line-icon-heart' },
						msg.likes
					),
					React.createElement(
						"li",
						{ className: msg.shares > 0 ? 'show shares line-icon-share' : 'shares line-icon-share' },
						msg.shares
					)
				)
			)
		);
	}
});

React.render(React.createElement(Cinnamon, null), document.getElementById('cinnamon'));

},{}]},{},[1])