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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzYwMThhODM1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRS9CLGdCQUFlLEVBQUMsMkJBQUU7QUFDakIsU0FBTTtBQUNMLFlBQVMsRUFBRyxLQUFLO0FBQ2pCLFVBQU8sRUFBRyxLQUFLO0FBQ2YsUUFBSyxFQUFHLEtBQUs7QUFDYixNQUFHLEVBQUcsRUFBRTtBQUNSLE9BQUksRUFBRyxFQUFFO0dBQ1QsQ0FBQTtFQUNEOztBQUVELFlBQVcsRUFBQyx1QkFBRzs7QUFFZCxNQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLO01BQ25ELE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLO01BQ2hELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkMsTUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztBQUMzQyxPQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2IsU0FBSyxFQUFHLElBQUk7QUFDWixPQUFHLEVBQUcseUJBQXlCO0lBQy9CLENBQUMsQ0FBQTtHQUNGLE1BQU07QUFDTixPQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2IsYUFBUyxFQUFHLElBQUk7SUFDaEIsQ0FBQyxDQUFDO0FBQ0gsYUFBVSxDQUFDLFlBQVU7QUFDcEIsV0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLEVBQUMsR0FBRyxDQUFDLENBQUM7R0FDUDtFQUNEOztBQUVELFFBQU8sRUFBQyxpQkFBQyxJQUFJLEVBQUU7QUFDZCxNQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2IsVUFBTyxFQUFHLElBQUk7QUFDZCxRQUFLLEVBQUcsS0FBSztBQUNiLE1BQUcsRUFBRyxFQUFFO0FBQ1IsT0FBSSxFQUFHLElBQUk7R0FDWCxDQUFDLENBQUM7RUFDSDs7QUFFRCxPQUFNLEVBQUMsa0JBQUc7QUFDVCxTQUNDOzs7R0FDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLEdBQzNCOztNQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxPQUFPLEFBQUM7SUFDcEU7O09BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLGFBQWEsQUFBQzs7S0FBaUI7SUFDMUYsK0JBQU8sU0FBUyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxXQUFXLEdBQUU7SUFFNUQ7O09BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLGFBQWEsQUFBQztLQUFFLFVBQVU7S0FBUztJQUM5RiwrQkFBTyxTQUFTLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLFdBQVcsR0FBRTtJQUVoRTs7T0FBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxBQUFDLEVBQUMsU0FBUyxFQUFDLDBDQUEwQzs7S0FBZTtJQUVuSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSTs7T0FBRyxTQUFTLEVBQUMsdUJBQXVCO0tBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO0tBQUs7SUFDeEUsR0FFUDs7TUFBSyxTQUFTLEVBQUMseUJBQXlCO0lBQ3ZDLDJCQUFHLFNBQVMsRUFBQyxnQkFBZ0IsR0FBSztJQUNsQzs7OztLQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7S0FBTTtJQUNsQztHQUVGLENBQ047RUFDRDtDQUNELENBQUMsQ0FBQzs7QUFFSCxLQUFLLENBQUMsTUFBTSxDQUNYLG9CQUFDLE9BQU8sT0FBRyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQ3ZDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2RhbmllbC5vc2Jvcm5lL3JlcG9zL3dlYnNpdGUvYXBwL2Zha2VfNjAxOGE4MzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU2FmZnJvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRnZXRJbml0aWFsU3RhdGUgKCl7XG5cdFx0cmV0dXJue1xuXHRcdFx0c2xpZGVBd2F5IDogZmFsc2UsXG5cdFx0XHRzdWNjZXNzIDogZmFsc2UsXG5cdFx0XHRlcnJvciA6IGZhbHNlLFxuXHRcdFx0bXNnIDogXCJcIixcblx0XHRcdHVzZXIgOiBcIlwiXG5cdFx0fVxuXHR9LFxuXG5cdGhhbmRsZUNsaWNrICgpIHtcblxuXHRcdHZhciB0ZXh0VmFsID0gdGhpcy5yZWZzLnRleHRJbnB1dC5nZXRET01Ob2RlKCkudmFsdWUsXG5cdFx0XHRwYXNzVmFsID0gdGhpcy5yZWZzLnBhc3NJbnB1dC5nZXRET01Ob2RlKCkudmFsdWUsXG5cdFx0XHRzdWNjZXNzID0gdGhpcy5zdWNjZXNzLmJpbmQodGhpcyk7XG5cblx0XHRpZih0ZXh0VmFsLmxlbmd0aCA8IDUgfHwgdGV4dFZhbC5sZW5ndGggPCA1KXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRlcnJvciA6IHRydWUsXG5cdFx0XHRcdG1zZyA6IFwiVXNlcm5hbWUgbm90IHJlY29nbmlzZWRcIlxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNsaWRlQXdheSA6IHRydWVcblx0XHRcdH0pO1x0XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHN1Y2Nlc3ModGV4dFZhbCk7XG5cdFx0XHR9LDcwMCk7XG5cdFx0fVxuXHR9LFxuXG5cdHN1Y2Nlc3MgKHVzZXIpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Y2Nlc3MgOiB0cnVlLFxuXHRcdFx0ZXJyb3IgOiBmYWxzZSxcblx0XHRcdG1zZyA6IFwiXCIsXG5cdFx0XHR1c2VyIDogdXNlclxuXHRcdH0pO1xuXHR9LFxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VjY2VzcyA9PSBmYWxzZSA/IFxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUF3YXkgPyBcImxpbmVkIHNsaWRlLWF3YXlcIiA6IFwibGluZWRcIn0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVycm9yID8gJ3NsaWRlLWluLXVwIGVycm9yJyA6ICdzbGlkZS1pbi11cCd9PlVzZXJuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJzbGlkZS1pbi11cFwiIHR5cGU9XCJ0ZXh0XCIgcmVmPVwidGV4dElucHV0XCIvPlxuXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVycm9yID8gJ3NsaWRlLWluLXVwIGVycm9yJyA6ICdzbGlkZS1pbi11cCd9PnsnUGFzc3dvcmQnfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwic2xpZGUtaW4tdXBcIiB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzSW5wdXRcIi8+XG5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImZsYXQtc3VibWl0IGJsb2NrLWljb24tY2hlY2sgc2xpZGUtaW4tdXBcIj5Mb2dpbjwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5lcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2cgc2xpZGUtaW4tdXBcIj57dGhpcy5zdGF0ZS5tc2d9PC9wPiB9XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ6XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzLW1lc3NhZ2UgZmFkZS1pblwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwibGluZS1pY29uLWhlYWRcIj48L2k+XG5cdFx0XHRcdFx0XHQ8aDU+V2VsY29tZSBiYWNrIHt0aGlzLnN0YXRlLnVzZXJ9PC9oNT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuXHQ8U2FmZnJvbiAvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhZmZyb24tZm9ybScpXG4pOyJdfQ==
},{}]},{},[1])