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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzY2MTk5OGE1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVsQixRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDaEIsT0FBTSxFQUFHLGVBQWU7QUFDeEIsT0FBTSxFQUFHLFVBQVU7QUFDbkIsVUFBUyxFQUFHLG9IQUFvSDtBQUNoSSxRQUFPLEVBQUcsQ0FBQztBQUNYLFNBQVEsRUFBRyxDQUFDO0NBQ1osRUFBQztBQUNELE9BQU0sRUFBRyxjQUFjO0FBQ3ZCLE9BQU0sRUFBRyxVQUFVO0FBQ25CLFVBQVMsRUFBRyxnSUFBZ0k7QUFDNUksUUFBTyxFQUFHLENBQUM7QUFDWCxTQUFRLEVBQUcsQ0FBQztDQUNaLEVBQUM7QUFDRCxPQUFNLEVBQUcsT0FBTztBQUNoQixPQUFNLEVBQUcsVUFBVTtBQUNuQixVQUFTLEVBQUcsVUFBVTtBQUN0QixRQUFPLEVBQUcsQ0FBQztBQUNYLFNBQVEsRUFBRyxDQUFDOztDQUVaLENBQUMsQ0FBQzs7QUFHSCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFaEMsT0FBTSxFQUFBLGtCQUFHO0FBQ1IsU0FDQzs7O0dBQ0Msb0JBQUMsT0FBTyxPQUFHO0dBQ1gsb0JBQUMsUUFBUSxPQUFHO0dBQ1AsQ0FDTjtFQUNEO0NBQ0QsQ0FBQyxDQUFDOztBQUVILElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUUvQixPQUFNLEVBQUMsa0JBQUc7QUFDVCxTQUNDOztLQUFLLEVBQUUsRUFBQyxTQUFTO0dBQ2hCOztNQUFLLEVBQUUsRUFBQyxZQUFZO0lBQ25COzs7O0tBQWlCO0lBQ2pCOzs7O0tBQXdCO0lBQ25CO0dBQ047O01BQUssRUFBRSxFQUFDLFdBQVc7SUFDbEI7Ozs7S0FBZTtJQUNmOztPQUFJLEVBQUUsRUFBQyxPQUFPO0tBQ2I7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RUgsS0FBSyxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxRQUFRLE9BQUcsRUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzY2MTk5OGE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1lc3NhZ2VzID0ge307XG5cbm1lc3NhZ2VzLmxpc3QgPSBbe1xuXHRcInVzZXJcIiA6IFwiQ2hhcmxpZSBTaGVlblwiLFxuXHRcInRpbWVcIiA6IFwiMTE6NDkgQU1cIixcblx0XCJtZXNzYWdlXCIgOiBcIkFzIGFuIGV4cGVydCBvbiBldmVyeXRoaW5nLCBJIGtub3cgdGhhdCB0aGlzIGF3ZXNvbWUgY2hhdCBpbnRlcmZhY2Ugd2FzIGJ1aWx0IHVzaW5nIHNwaWNlIHNhc3MgbWl4aW5zLiBIYXd0IGRhbmchIVwiLFxuXHRcImxpa2VzXCIgOiAzLFxuXHRcInNoYXJlc1wiIDogMVxufSx7XG5cdFwidXNlclwiIDogXCJDaHVjayBOb3JyaXNcIixcblx0XCJ0aW1lXCIgOiBcIjExOjUwIEFNXCIsXG5cdFwibWVzc2FnZVwiIDogXCJZZWFoIEkga25vdyBtYW4uLi4gSXQncyBzbyBhd2Vzb21lIGl0IG1ha2VzIG1lIHdhbm5hIHNsYW0gYSByZXZvbHZpbmcgZG9vciBhbmQgcm91bmRob3VzZSBraWNrIHRlcnJvcmlzbSBpbiB0aGUgZmFjZSEhISBBZ2Fpbi5cIixcblx0XCJsaWtlc1wiIDogMSxcblx0XCJzaGFyZXNcIiA6IDBcbn0se1xuXHRcInVzZXJcIiA6IFwiQXJuaWVcIixcblx0XCJ0aW1lXCIgOiBcIjExOjUxIEFNXCIsXG5cdFwibWVzc2FnZVwiIDogXCJJJ20gYmFja1wiLFxuXHRcImxpa2VzXCIgOiAwLFxuXHRcInNoYXJlc1wiIDogMFxuXG59XTtcblxuXG5sZXQgQ2lubmFtb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTaWRlQmFyIC8+XG5cdFx0XHRcdDxNZXNzYWdlcyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxubGV0IFNpZGVCYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGlkPVwic2lkZWJhclwiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibG9nby1zcGFjZVwiPlxuXHRcdFx0XHRcdDxoMT5DaW5uYW1vbjwvaDE+XG5cdFx0XHRcdFx0PGgyPk1vZGVybiBjaGF0IGFwcDwvaDI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwic2lkZS1tYWluXCI+XG5cdFx0XHRcdFx0PGgzPkdyb3VwczwvaDM+XG5cdFx0XHRcdFx0PHVsIGlkPVwicm9vbXNcIj5cblx0XHRcdFx0XHRcdDxsaT48YT5TdXBlcmhlcm9lczwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGNsYXNzTmFtZT1cImFjdGl2ZVwiPk1vdmllIHN0YXJzPC9hPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGE+Rm9vdGJhbGxlcnM8L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaT48YT5BbmltYWxzPC9hPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8aDM+Q2hhdHM8L2gzPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT48YT5DaGFybGllIFNoZWVuPC9hPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGE+QXJuaWU8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPjU8L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGE+Q2h1Y2sgTm9ycmlzPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj43PC9zcGFuPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhPkJydWNlIFdpbGxpczwvYT48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxubGV0IE1lc3NhZ2VzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdGdldEluaXRpYWxTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxpc3QgOiBtZXNzYWdlcy5saXN0XG5cdFx0fVxuXHR9LFxuXG5cdGFkZENvbW1lbnQgKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBjb21tZW50ICA9IHRoaXMucmVmcy5jb21tZW50Qm94LmdldERPTU5vZGUoKS52YWx1ZSxcblx0XHRcdGxpc3QgICAgID0gdGhpcy5zdGF0ZS5saXN0LFxuXHRcdFx0dGVtcGxhdGUgPSB7XG5cdFx0XHRcdFwidXNlclwiIDogXCJOaWNvbGFzIENhZ2VcIixcblx0XHRcdFx0XCJ0aW1lXCIgOiBcIjExOjU1IEFNXCIsXG5cdFx0XHRcdFwibWVzc2FnZVwiIDogY29tbWVudCxcblx0XHRcdFx0XCJsaWtlc1wiIDogMCxcblx0XHRcdFx0XCJzaGFyZXNcIiA6IDBcblx0XHRcdH07XG5cblx0XHRsaXN0LnB1c2godGVtcGxhdGUpO1xuXHRcdHRoaXMucmVmcy5jb21tZW50Qm94LmdldERPTU5vZGUoKS52YWx1ZSA9IFwiXCI7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsaXN0IDogbGlzdFxuXHRcdH0pO1xuXG5cdFx0dmFyIHNjcm9sbCA9IHRoaXMuc2Nyb2xsTXNncztcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHNjcm9sbCgpO1xuXHRcdH0sMTApO1xuXHRcdFxuXHR9LFxuXG5cdHNjcm9sbE1zZ3MgKCkge1xuXG5cdFx0dmFyIG1lc3NhZ2VMaXN0ID0gdGhpcy5yZWZzLm1lc3NhZ2VMaXN0LmdldERPTU5vZGUoKSxcblx0XHRcdG1lc3NhZ2VXcmFwID0gdGhpcy5yZWZzLm1lc3NhZ2VXcmFwLmdldERPTU5vZGUoKSxcblx0XHRcdHZpZXdIZWlnaHQgID0gbWVzc2FnZUxpc3QuY2xpZW50SGVpZ2h0LFxuXHRcdFx0bXNnSGVpZ2h0ICAgPSBtZXNzYWdlV3JhcC5jbGllbnRIZWlnaHQ7XG5cblx0XHRpZihtc2dIZWlnaHQ+dmlld0hlaWdodCl7XG5cdFx0XHRtZXNzYWdlTGlzdC5zY3JvbGxUb3AgPSAobXNnSGVpZ2h0IC0gdmlld0hlaWdodCkgKyAyMDtcblx0XHR9XG5cblx0fSxcblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgaWQ9XCJtZXNzYWdlc1wiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwidG9wLWJhclwiPlxuXHRcdFx0XHRcdDxoMz5NZXNzYWdlczwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGF0ZVwiPjxzcGFuPlRvZGF5PC9zcGFuPjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtZXNzYWdlLWxpc3RcIiByZWY9XCJtZXNzYWdlTGlzdFwiPlxuXHRcdFx0XHRcdDxkaXYgcmVmPVwibWVzc2FnZVdyYXBcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmxpc3QubWFwKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8TWVzc2FnZSBtc2c9e21zZ30vPlxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiYm90dG9tLWJhclwiPlxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImxpbmUtaWNvbi1zcGVlY2gtYnViYmxlXCIgb25TdWJtaXQ9e3RoaXMuYWRkQ29tbWVudH0+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJjb21tZW50Qm94XCIvPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG5sZXQgTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0dmFyIG1zZyA9IHRoaXMucHJvcHMubXNnO1xuXHRcdHZhciBpbWcgPSBtc2cudXNlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBzbGlkZS1pbi11cFwiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImZhZGUtaW5cIiBzcmM9eycvaW1nL3VzZXJzLycraW1nKycuanBnJ30gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInNsaWRlLWluLWxlZnRcIj57bXNnLnVzZXJ9IDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57bXNnLnRpbWV9PC9zcGFuPjwvaDQ+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2xpZGUtaW4tbGVmdFwiPnttc2cubWVzc2FnZX08L3A+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInNvY2lhbCBzbGlkZS1pbi11cFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17bXNnLmxpa2VzID4gMCA/ICdzaG93IGxpa2VzIGxpbmUtaWNvbi1oZWFydCcgOidsaWtlcyBsaW5lLWljb24taGVhcnQnfT57bXNnLmxpa2VzfTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXttc2cuc2hhcmVzID4gMCA/ICdzaG93IHNoYXJlcyBsaW5lLWljb24tc2hhcmUnIDogJ3NoYXJlcyBsaW5lLWljb24tc2hhcmUnfT57bXNnLnNoYXJlc308L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuXHQ8Q2lubmFtb24gLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaW5uYW1vbicpXG4pOyJdfQ==
},{}]},{},[1])