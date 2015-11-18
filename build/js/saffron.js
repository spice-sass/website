(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Saffron = React.createClass({
	displayName: "Saffron",

	getInitialState: function getInitialState() {
		return {
			slideAway: false,
			success: false,
			error: false,
			msg: "",
			user: ""
		};
	},

	handleClick: function handleClick() {

		var textVal = this.refs.textInput.getDOMNode().value,
		    passVal = this.refs.passInput.getDOMNode().value,
		    success = this.success.bind(this);

		if (textVal.length < 5 || textVal.length < 5) {
			this.setState({
				error: true,
				msg: "Username not recognised"
			});
		} else {
			this.setState({
				slideAway: true
			});
			setTimeout(function () {
				success(textVal);
			}, 700);
		}
	},

	success: function success(user) {
		this.setState({
			success: true,
			error: false,
			msg: "",
			user: user
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			this.state.success == false ? React.createElement(
				"form",
				{ className: this.state.slideAway ? "lined slide-away" : "lined" },
				React.createElement(
					"label",
					{ className: this.state.error ? 'slide-in-up error' : 'slide-in-up' },
					"Username"
				),
				React.createElement("input", { className: "slide-in-up", type: "text", ref: "textInput" }),
				React.createElement(
					"label",
					{ className: this.state.error ? 'slide-in-up error' : 'slide-in-up' },
					'Password'
				),
				React.createElement("input", { className: "slide-in-up", type: "password", ref: "passInput" }),
				React.createElement(
					"button",
					{ type: "button", onClick: this.handleClick, className: "flat-submit block-icon-check slide-in-up" },
					"Login"
				),
				this.state.error && React.createElement(
					"p",
					{ className: "error-msg slide-in-up" },
					this.state.msg
				)
			) : React.createElement(
				"div",
				{ className: "success-message fade-in" },
				React.createElement("i", { className: "line-icon-head" }),
				React.createElement(
					"h5",
					null,
					"Welcome back ",
					this.state.user
				)
			)
		);
	}
});

React.render(React.createElement(Saffron, null), document.getElementById('saffron-form'));

},{}]},{},[1])