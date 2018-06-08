(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var ThemeSwitch = React.createClass({
	displayName: "ThemeSwitch",

	getInitialState: function getInitialState() {
		return {
			theme: "light"
		};
	},

	toggle: function toggle() {

		if (this.state.theme == "light") {
			this.setState({
				theme: "dark"
			});
		} else {
			this.setState({
				theme: "light"
			});
		}

		var styleSheet = document.getElementById('theme-stylesheet');
		styleSheet.setAttribute("href", '/css/themes/' + this.state.theme + '.css');
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: this.state.theme == "light" ? 'switch theme selected' : 'switch theme', onClick: this.toggle },
			React.createElement(
				"span",
				{ className: "on" },
				"Light"
			),
			React.createElement(
				"span",
				{ className: "off" },
				"Dark"
			)
		);
	}
});

exports["default"] = ThemeSwitch;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2hlYWRlci90aGVtZVN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUVuQyxnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixRQUFLLEVBQUcsT0FBTztHQUNmLENBQUE7RUFDRDs7QUFFRCxPQUFNLEVBQUMsa0JBQUc7O0FBRVQsTUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUM7QUFDOUIsT0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNiLFNBQUssRUFBRyxNQUFNO0lBQ2QsQ0FBQyxDQUFDO0dBQ0gsTUFBTTtBQUNOLE9BQUksQ0FBQyxRQUFRLENBQUM7QUFDYixTQUFLLEVBQUcsT0FBTztJQUNmLENBQUMsQ0FBQTtHQUNGOztBQUVELE1BQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM3RCxZQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUM7RUFFeEU7O0FBRUQsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7S0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxHQUFHLHVCQUF1QixHQUFHLGNBQWMsQUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxBQUFDO0dBQzNHOztNQUFNLFNBQVMsRUFBQyxJQUFJOztJQUFhO0dBQ2pDOztNQUFNLFNBQVMsRUFBQyxLQUFLOztJQUFZO0dBQzdCLENBQ047RUFDRDtDQUNELENBQUMsQ0FBQzs7cUJBRVksV0FBVyIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvY29tcG9uZW50cy9oZWFkZXIvdGhlbWVTd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVGhlbWVTd2l0Y2ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGhlbWUgOiBcImxpZ2h0XCJcblx0XHR9XG5cdH0sXG5cblx0dG9nZ2xlICgpIHtcblxuXHRcdGlmKHRoaXMuc3RhdGUudGhlbWUgPT0gXCJsaWdodFwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0aGVtZSA6IFwiZGFya1wiXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRoZW1lIDogXCJsaWdodFwiXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHZhciBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXN0eWxlc2hlZXQnKTtcblx0XHRzdHlsZVNoZWV0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgJy9jc3MvdGhlbWVzLycrdGhpcy5zdGF0ZS50aGVtZSsnLmNzcycpO1xuXG5cdH0sXG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGhlbWUgPT0gXCJsaWdodFwiID8gJ3N3aXRjaCB0aGVtZSBzZWxlY3RlZCcgOiAnc3dpdGNoIHRoZW1lJ30gb25DbGljaz17dGhpcy50b2dnbGV9PlxuXHRcdFx0XHQgPHNwYW4gY2xhc3NOYW1lPVwib25cIj5MaWdodDwvc3Bhbj5cblx0XHRcdFx0IDxzcGFuIGNsYXNzTmFtZT1cIm9mZlwiPkRhcms8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN3aXRjaDsiXX0=
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Logo = React.createClass({
	displayName: "Logo",

	getInitialState: function getInitialState() {
		return {
			seqClasses: ""
		};
	},

	componentDidMount: function componentDidMount() {

		var delay = 0;
		var timeLine = [{
			"state": "chilli-pepper",
			"duration": 600
		}, {
			"state": "scale-down",
			"duration": 300
		}, {
			"state": "s-show",
			"duration": 100
		}, {
			"state": "e-show",
			"duration": 100
		}, {
			"state": "p-show",
			"duration": 100
		}, {
			"state": "c-show",
			"duration": 100
		}, {
			"state": "strap-show",
			"duration": 300
		}, {
			"state": "buttons-show",
			"duration": 300
		}, {
			"state": "version-show",
			"duration": 300
		}];

		var apply = this.applyClasses.bind(this);

		timeLine.forEach(function (frame, index) {
			setTimeout(function () {
				apply(frame.state);
			}, delay);

			delay += frame.duration;
		});
	},

	applyClasses: function applyClasses(className) {

		this.setState({
			seqClasses: this.state.seqClasses += " " + className
		});

		console.log(this.state.seqClasses);
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: 'centre-y text-centre ' + this.state.seqClasses },
			React.createElement(
				"div",
				{ id: "main-logo" },
				React.createElement(
					"svg",
					{ className: "slide-in-down", viewBox: "-180 204.3 481 188" },
					React.createElement(
						"g",
						{ className: "logo-wrapper" },
						React.createElement(
							"g",
							{ className: "chilli" },
							React.createElement("path", { className: "light-red", d: "M74.2,247c11,3.6,17.3,13.3,14.8,22.9c-5.3,21.1-19.9,37.7-4.9,76.9c9.1,23.9,5.5,24,0.5,24.4 s-28-6.8-44.4-44.6c-12.4-28.5-14.4-65.4-6.7-74.2c4.1-4.7,12.6-7.1,19.2-8.6c4.6-1.1,9.5-0.8,14.1,0.7L74.2,247z" }),
							React.createElement("path", { className: "dark-red", d: "M53.4,248.7c0.8-2.4-2.1-4.5-4.9-3.6c-5,1.6-11.8,3.8-15,7.5c-7.7,8.8-5.7,45.7,6.7,74.2 c13.3,30.7,34.4,41,41.8,43.7c0.7,0.3,1.5-0.5,1-1.1C33.3,312.6,45.9,271.3,53.4,248.7z" }),
							React.createElement("path", { className: "highlight", d: "M75.9,272.1l1.2,1.3c0.7,0.7,1.3,2.2,0.8,3.4c-6.5,14.5-9.1,23.7-5.2,52.6c0.7,4.9-16.4-42.4-0.3-58 C74.2,269.7,74.5,270.6,75.9,272.1z" }),
							React.createElement("path", { className: "light-green", d: "M31,261.5c-0.6-5.7,0.7-10.9,6.3-14.1c8.1-4.4,39.6-9.2,47.5,5c10.1,18.1-1.7,5.2-22.4,8.4 c-6,0.9-17,9.7-26.6,6.5C33.7,266.7,31.2,263.2,31,261.5z" }),
							React.createElement("path", { className: "dark-green", d: "M48.5,265.7c-1.3,4.9-12.7,1.7-12.7,1.7c-2.1-0.7-4.7-4.3-4.9-5.8c-0.6-5.7,0.7-10.9,6.3-14.1 c0,0,11.5-4.5,19.3-3.9C56.6,243.6,53.9,246.3,48.5,265.7z" }),
							React.createElement("path", { className: "light-green", d: "M57.3,244.2c0,0-1.7-23.3,10.2-23.7c0,0-1.5,3,1.9,3.5c0,0-10.9,13.7-9.4,19.2S57.3,244.2,57.3,244.2z" })
						),
						React.createElement(
							"g",
							{ className: "sp" },
							React.createElement("path", { className: "text s", d: "M-159.5,310.5v6.2c0,5.3,6.7,8.5,14.5,8.5c8.4,0,14.3-3.6,14.3-10.2c0-8.4-9.4-11-18.9-14.8 c-11-4.2-21.8-9.2-21.8-23.9c0-16.6,13.5-23,27.7-23c13,0,26.2,5,26.2,14.5v10.8h-14V273c0-4.2-6.2-6.4-12.3-6.4 c-6.7,0-12.3,2.8-12.3,9.1c0,7.6,7.7,10.2,16.3,13.5c12.3,4.4,24.6,9.3,24.6,24.8c0,16.9-14.2,24.6-29.8,24.6 c-13.7,0-28.4-6.2-28.4-18.6v-9.4h13.9V310.5z" }),
							React.createElement("path", { className: "text p", d: "M-73.7,325.8h9.9v-59.7h-9.9v-11.5h39.5c4.9,0,9.9,0.3,13.9,2.1c8.9,3.7,14.8,12.9,14.8,24.4 c0,11.7-6.2,21.7-15.7,25.1c-3.8,1.3-8,1.6-12.7,1.6h-14.8v17.9h10v11.4h-35.1L-73.7,325.8L-73.7,325.8z M-35.8,295.7 c3.5,0,6-0.5,8.4-1.6c4.4-2.2,6.7-6.9,6.7-12.9c0-5.7-2.2-10.1-6-12.3c-2.3-1.4-5.2-2-8.9-2h-12.9v28.8 C-48.5,295.7-35.8,295.7-35.8,295.7z" })
						),
						React.createElement(
							"g",
							{ className: "ce" },
							React.createElement("path", { className: "text c", d: "M154.7,253.2c10,0,32.2,3.5,32.2,16.5v11.2H173v-6.4c0-6.2-10.9-8.3-17.7-8.3c-15.9,0-27.5,11.2-27.5,28.6 c0,18.6,12.1,30.7,28.4,30.7c5,0,17.9-1.6,17.9-8.1V311h13.8v11.3c0,12.3-21.3,16.3-32.7,16.3c-25,0-43.1-18.9-43.1-43 C112.1,271.1,130.7,253.2,154.7,253.2z" }),
							React.createElement("path", { className: "text e", d: "M229.7,325.8h9.9v-59.7h-9.9v-11.5H291v21.3h-13v-9.1h-23.1v22.7H282v12.2h-27.2v23.2h24.9v-9.3h13v21.5h-63 L229.7,325.8L229.7,325.8z" })
						)
					)
				)
			),
			React.createElement(
				"h2",
				{ id: "strap", className: "roboto-slab" },
				'The sass library for tasty web interfaces'
			),
			React.createElement(
				"a",
				{ href: "#installation", className: "button flat-secondary block-icon-download" },
				"Installation"
			),
			React.createElement(
				"a",
				{ href: "/documentation", className: "button flat-primary block-icon-open-book" },
				"View Docs"
			),
			React.createElement(
				"p",
				{ className: "version-number" },
				'Version ' + versionNumber
			)
		);
	}
});

exports["default"] = Logo;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2hvbWUvTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU1QixnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixhQUFVLEVBQUcsRUFBRTtHQUNmLENBQUE7RUFDRDs7QUFFRCxrQkFBaUIsRUFBQyw2QkFBRzs7QUFFcEIsTUFBSSxLQUFLLEdBQU0sQ0FBQyxDQUFDO0FBQ2pCLE1BQUksUUFBUSxHQUFHLENBQUM7QUFDZixVQUFPLEVBQU0sZUFBZTtBQUM1QixhQUFVLEVBQUcsR0FBRztHQUNoQixFQUFDO0FBQ0QsVUFBTyxFQUFNLFlBQVk7QUFDekIsYUFBVSxFQUFHLEdBQUc7R0FDaEIsRUFBQztBQUNELFVBQU8sRUFBTSxRQUFRO0FBQ3JCLGFBQVUsRUFBRyxHQUFHO0dBQ2hCLEVBQUM7QUFDRCxVQUFPLEVBQU0sUUFBUTtBQUNyQixhQUFVLEVBQUcsR0FBRztHQUNoQixFQUFDO0FBQ0QsVUFBTyxFQUFNLFFBQVE7QUFDckIsYUFBVSxFQUFHLEdBQUc7R0FDaEIsRUFBQztBQUNELFVBQU8sRUFBTSxRQUFRO0FBQ3JCLGFBQVUsRUFBRyxHQUFHO0dBQ2hCLEVBQUM7QUFDRCxVQUFPLEVBQUcsWUFBWTtBQUN0QixhQUFVLEVBQUssR0FBRztHQUNsQixFQUFDO0FBQ0QsVUFBTyxFQUFHLGNBQWM7QUFDeEIsYUFBVSxFQUFLLEdBQUc7R0FDbEIsRUFBQztBQUNELFVBQU8sRUFBRyxjQUFjO0FBQ3hCLGFBQVUsRUFBSyxHQUFHO0dBQ2xCLENBQUMsQ0FBQzs7QUFFSCxNQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFekMsVUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUssRUFBQyxLQUFLLEVBQUM7QUFDckMsYUFBVSxDQUFDLFlBQU07QUFDaEIsU0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixFQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVULFFBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFBO0dBQ3ZCLENBQUMsQ0FBQztFQUNIOztBQUVELGFBQVksRUFBQyxzQkFBQyxTQUFTLEVBQUM7O0FBRXZCLE1BQUksQ0FBQyxRQUFRLENBQUM7QUFDYixhQUFVLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLFNBQVM7R0FDckQsQ0FBQyxDQUFDOztBQUVILFNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNuQzs7QUFFRCxPQUFNLEVBQUMsa0JBQUc7QUFDVCxTQUNDOztLQUFLLFNBQVMsRUFBRSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQUFBQztHQUMvRDs7TUFBSyxFQUFFLEVBQUMsV0FBVztJQUNsQjs7T0FBSyxTQUFTLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxvQkFBb0I7S0FDMUQ7O1FBQUcsU0FBUyxFQUFDLGNBQWM7TUFDMUI7O1NBQUcsU0FBUyxFQUFDLFFBQVE7T0FDcEIsOEJBQU0sU0FBUyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsME1BQ2lGLEdBQUU7T0FDakgsOEJBQU0sU0FBUyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsNEtBQ3lELEdBQUU7T0FDeEYsOEJBQU0sU0FBUyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMscUlBQ00sR0FBRTtPQUN0Qyw4QkFBTSxTQUFTLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxpSkFDeUIsR0FBRTtPQUMzRCw4QkFBTSxTQUFTLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxxSkFDMkIsR0FBRTtPQUM1RCw4QkFBTSxTQUFTLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxvR0FBb0csR0FBRTtPQUNuSTtNQUNKOztTQUFHLFNBQVMsRUFBQyxJQUFJO09BQ2hCLDhCQUFNLFNBQVMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLDhWQUdtQixHQUFFO09BQ2hELDhCQUFNLFNBQVMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLHFWQUdVLEdBQUU7T0FDcEM7TUFDSjs7U0FBRyxTQUFTLEVBQUMsSUFBSTtPQUNoQiw4QkFBTSxTQUFTLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxpUUFFWSxHQUFFO09BQ3pDLDhCQUFNLFNBQVMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG9JQUNBLEdBQUU7T0FDMUI7TUFDRDtLQUNDO0lBQ0Q7R0FDTjs7TUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxhQUFhO0lBQUUsMkNBQTJDO0lBQU07R0FDekY7O01BQUcsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsMkNBQTJDOztJQUFpQjtHQUM5Rjs7TUFBRyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLDBDQUEwQzs7SUFBYztHQUMzRjs7TUFBRyxTQUFTLEVBQUMsZ0JBQWdCO0lBQUUsVUFBVSxHQUFDLGFBQWE7SUFBSztHQUN2RCxDQUNOO0VBQ0Q7Q0FDRCxDQUFDLENBQUM7O3FCQUVZLElBQUkiLCJmaWxlIjoiL1VzZXJzL2RhbmllbC5vc2Jvcm5lL3JlcG9zL3dlYnNpdGUvYXBwL2NvbXBvbmVudHMvaG9tZS9Mb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExvZ28gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VxQ2xhc3NlcyA6IFwiXCJcblx0XHR9XG5cdH0sXG5cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXG5cdFx0dmFyIGRlbGF5ICAgID0gMDtcblx0XHR2YXIgdGltZUxpbmUgPSBbe1xuXHRcdFx0XCJzdGF0ZVwiICAgIDogXCJjaGlsbGktcGVwcGVyXCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgOiA2MDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiAgICA6IFwic2NhbGUtZG93blwiLFxuXHRcdFx0XCJkdXJhdGlvblwiIDogMzAwXHRcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiAgICA6IFwicy1zaG93XCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgOiAxMDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiAgICA6IFwiZS1zaG93XCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgOiAxMDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiAgICA6IFwicC1zaG93XCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgOiAxMDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiAgICA6IFwiYy1zaG93XCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgOiAxMDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiA6IFwic3RyYXAtc2hvd1wiLFxuXHRcdFx0XCJkdXJhdGlvblwiICAgOiAzMDBcblx0XHR9LHtcblx0XHRcdFwic3RhdGVcIiA6IFwiYnV0dG9ucy1zaG93XCIsXG5cdFx0XHRcImR1cmF0aW9uXCIgICA6IDMwMFxuXHRcdH0se1xuXHRcdFx0XCJzdGF0ZVwiIDogXCJ2ZXJzaW9uLXNob3dcIixcblx0XHRcdFwiZHVyYXRpb25cIiAgIDogMzAwXHRcdFx0XG5cdFx0fV07XG5cblx0XHR2YXIgYXBwbHkgPSB0aGlzLmFwcGx5Q2xhc3Nlcy5iaW5kKHRoaXMpO1xuXG5cdFx0dGltZUxpbmUuZm9yRWFjaChmdW5jdGlvbihmcmFtZSxpbmRleCl7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YXBwbHkoZnJhbWUuc3RhdGUpO1xuXHRcdFx0fSxkZWxheSk7XG5cblx0XHRcdGRlbGF5ICs9IGZyYW1lLmR1cmF0aW9uXG5cdFx0fSk7XG5cdH0sXG5cblx0YXBwbHlDbGFzc2VzIChjbGFzc05hbWUpe1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZXFDbGFzc2VzIDogdGhpcy5zdGF0ZS5zZXFDbGFzc2VzICs9IFwiIFwiICsgY2xhc3NOYW1lXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlcUNsYXNzZXMpO1xuXHR9LFxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnY2VudHJlLXkgdGV4dC1jZW50cmUgJyArIHRoaXMuc3RhdGUuc2VxQ2xhc3Nlc30+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLWxvZ29cIj5cblx0XHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cInNsaWRlLWluLWRvd25cIiB2aWV3Qm94PVwiLTE4MCAyMDQuMyA0ODEgMTg4XCI+XG5cdFx0XHRcdFx0XHQ8ZyBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGcgY2xhc3NOYW1lPVwiY2hpbGxpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPVwibGlnaHQtcmVkXCIgZD1cIk03NC4yLDI0N2MxMSwzLjYsMTcuMywxMy4zLDE0LjgsMjIuOWMtNS4zLDIxLjEtMTkuOSwzNy43LTQuOSw3Ni45YzkuMSwyMy45LDUuNSwyNCwwLjUsMjQuNFxuXHRcdFx0XHRcdFx0XHRcdFx0cy0yOC02LjgtNDQuNC00NC42Yy0xMi40LTI4LjUtMTQuNC02NS40LTYuNy03NC4yYzQuMS00LjcsMTIuNi03LjEsMTkuMi04LjZjNC42LTEuMSw5LjUtMC44LDE0LjEsMC43TDc0LjIsMjQ3elwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9XCJkYXJrLXJlZFwiIGQ9XCJNNTMuNCwyNDguN2MwLjgtMi40LTIuMS00LjUtNC45LTMuNmMtNSwxLjYtMTEuOCwzLjgtMTUsNy41Yy03LjcsOC44LTUuNyw0NS43LDYuNyw3NC4yXG5cdFx0XHRcdFx0XHRcdFx0XHRjMTMuMywzMC43LDM0LjQsNDEsNDEuOCw0My43YzAuNywwLjMsMS41LTAuNSwxLTEuMUMzMy4zLDMxMi42LDQ1LjksMjcxLjMsNTMuNCwyNDguN3pcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCIgZD1cIk03NS45LDI3Mi4xbDEuMiwxLjNjMC43LDAuNywxLjMsMi4yLDAuOCwzLjRjLTYuNSwxNC41LTkuMSwyMy43LTUuMiw1Mi42YzAuNyw0LjktMTYuNC00Mi40LTAuMy01OFxuXHRcdFx0XHRcdFx0XHRcdFx0Qzc0LjIsMjY5LjcsNzQuNSwyNzAuNiw3NS45LDI3Mi4xelwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9XCJsaWdodC1ncmVlblwiIGQ9XCJNMzEsMjYxLjVjLTAuNi01LjcsMC43LTEwLjksNi4zLTE0LjFjOC4xLTQuNCwzOS42LTkuMiw0Ny41LDVjMTAuMSwxOC4xLTEuNyw1LjItMjIuNCw4LjRcblx0XHRcdFx0XHRcdFx0XHRcdGMtNiwwLjktMTcsOS43LTI2LjYsNi41QzMzLjcsMjY2LjcsMzEuMiwyNjMuMiwzMSwyNjEuNXpcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPVwiZGFyay1ncmVlblwiIGQ9XCJNNDguNSwyNjUuN2MtMS4zLDQuOS0xMi43LDEuNy0xMi43LDEuN2MtMi4xLTAuNy00LjctNC4zLTQuOS01LjhjLTAuNi01LjcsMC43LTEwLjksNi4zLTE0LjFcblx0XHRcdFx0XHRcdFx0XHRcdGMwLDAsMTEuNS00LjUsMTkuMy0zLjlDNTYuNiwyNDMuNiw1My45LDI0Ni4zLDQ4LjUsMjY1Ljd6XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT1cImxpZ2h0LWdyZWVuXCIgZD1cIk01Ny4zLDI0NC4yYzAsMC0xLjctMjMuMywxMC4yLTIzLjdjMCwwLTEuNSwzLDEuOSwzLjVjMCwwLTEwLjksMTMuNy05LjQsMTkuMlM1Ny4zLDI0NC4yLDU3LjMsMjQ0LjJ6XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDxnIGNsYXNzTmFtZT1cInNwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPVwidGV4dCBzXCIgZD1cIk0tMTU5LjUsMzEwLjV2Ni4yYzAsNS4zLDYuNyw4LjUsMTQuNSw4LjVjOC40LDAsMTQuMy0zLjYsMTQuMy0xMC4yYzAtOC40LTkuNC0xMS0xOC45LTE0Ljhcblx0XHRcdFx0XHRcdFx0XHRcdGMtMTEtNC4yLTIxLjgtOS4yLTIxLjgtMjMuOWMwLTE2LjYsMTMuNS0yMywyNy43LTIzYzEzLDAsMjYuMiw1LDI2LjIsMTQuNXYxMC44aC0xNFYyNzNjMC00LjItNi4yLTYuNC0xMi4zLTYuNFxuXHRcdFx0XHRcdFx0XHRcdFx0Yy02LjcsMC0xMi4zLDIuOC0xMi4zLDkuMWMwLDcuNiw3LjcsMTAuMiwxNi4zLDEzLjVjMTIuMyw0LjQsMjQuNiw5LjMsMjQuNiwyNC44YzAsMTYuOS0xNC4yLDI0LjYtMjkuOCwyNC42XG5cdFx0XHRcdFx0XHRcdFx0XHRjLTEzLjcsMC0yOC40LTYuMi0yOC40LTE4LjZ2LTkuNGgxMy45VjMxMC41elwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBjbGFzc05hbWU9XCJ0ZXh0IHBcIiBkPVwiTS03My43LDMyNS44aDkuOXYtNTkuN2gtOS45di0xMS41aDM5LjVjNC45LDAsOS45LDAuMywxMy45LDIuMWM4LjksMy43LDE0LjgsMTIuOSwxNC44LDI0LjRcblx0XHRcdFx0XHRcdFx0XHRcdGMwLDExLjctNi4yLDIxLjctMTUuNywyNS4xYy0zLjgsMS4zLTgsMS42LTEyLjcsMS42aC0xNC44djE3LjloMTB2MTEuNGgtMzUuMUwtNzMuNywzMjUuOEwtNzMuNywzMjUuOHogTS0zNS44LDI5NS43XG5cdFx0XHRcdFx0XHRcdFx0XHRjMy41LDAsNi0wLjUsOC40LTEuNmM0LjQtMi4yLDYuNy02LjksNi43LTEyLjljMC01LjctMi4yLTEwLjEtNi0xMi4zYy0yLjMtMS40LTUuMi0yLTguOS0yaC0xMi45djI4Ljhcblx0XHRcdFx0XHRcdFx0XHRcdEMtNDguNSwyOTUuNy0zNS44LDI5NS43LTM1LjgsMjk1Ljd6XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDxnIGNsYXNzTmFtZT1cImNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggY2xhc3NOYW1lPVwidGV4dCBjXCIgZD1cIk0xNTQuNywyNTMuMmMxMCwwLDMyLjIsMy41LDMyLjIsMTYuNXYxMS4ySDE3M3YtNi40YzAtNi4yLTEwLjktOC4zLTE3LjctOC4zYy0xNS45LDAtMjcuNSwxMS4yLTI3LjUsMjguNlxuXHRcdFx0XHRcdFx0XHRcdFx0YzAsMTguNiwxMi4xLDMwLjcsMjguNCwzMC43YzUsMCwxNy45LTEuNiwxNy45LTguMVYzMTFoMTMuOHYxMS4zYzAsMTIuMy0yMS4zLDE2LjMtMzIuNywxNi4zYy0yNSwwLTQzLjEtMTguOS00My4xLTQzXG5cdFx0XHRcdFx0XHRcdFx0XHRDMTEyLjEsMjcxLjEsMTMwLjcsMjUzLjIsMTU0LjcsMjUzLjJ6XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGNsYXNzTmFtZT1cInRleHQgZVwiIGQ9XCJNMjI5LjcsMzI1LjhoOS45di01OS43aC05Ljl2LTExLjVIMjkxdjIxLjNoLTEzdi05LjFoLTIzLjF2MjIuN0gyODJ2MTIuMmgtMjcuMnYyMy4yaDI0Ljl2LTkuM2gxM3YyMS41aC02M1xuXHRcdFx0XHRcdFx0XHRcdFx0TDIyOS43LDMyNS44TDIyOS43LDMyNS44elwiLz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGgyIGlkPVwic3RyYXBcIiBjbGFzc05hbWU9XCJyb2JvdG8tc2xhYlwiPnsnVGhlIHNhc3MgbGlicmFyeSBmb3IgdGFzdHkgd2ViIGludGVyZmFjZXMnfTwvaDI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjaW5zdGFsbGF0aW9uXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGZsYXQtc2Vjb25kYXJ5IGJsb2NrLWljb24tZG93bmxvYWRcIj5JbnN0YWxsYXRpb248L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCIvZG9jdW1lbnRhdGlvblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGF0LXByaW1hcnkgYmxvY2staWNvbi1vcGVuLWJvb2tcIj5WaWV3IERvY3M8L2E+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZlcnNpb24tbnVtYmVyXCI+eydWZXJzaW9uICcrdmVyc2lvbk51bWJlcn08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvOyJdfQ==
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _servicesApiService = require('../../services/apiService');

var _servicesApiService2 = _interopRequireDefault(_servicesApiService);

var Preview = (function (_React$Component) {
	_inherits(Preview, _React$Component);

	function Preview() {
		_classCallCheck(this, Preview);

		_get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).call(this);
	}

	_createClass(Preview, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.api = new _servicesApiService2['default']();
			this.api.request('/api/includes.json').end((function (err, response) {

				this.setState({
					includes: response.body.includes
				});

				console.log(response.body.includes);
			}).bind(this));
		}
	}, {
		key: 'render',
		value: function render() {

			console.log(this.state);

			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'code-wrapper' },
					React.createElement('div', { className: 'top-bar' }),
					React.createElement(
						'div',
						{ className: 'sass-block' },
						this.state && React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.includes.grid.mixins[0].include } })
					),
					React.createElement(
						'div',
						{ className: 'css-block' },
						this.state && React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.includes.grid.mixins[0].output } })
					)
				)
			);
		}
	}]);

	return Preview;
})(React.Component);

;

exports['default'] = Preview;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2hvbWUvUHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUF1QiwyQkFBMkI7Ozs7SUFFNUMsT0FBTztXQUFQLE9BQU87O0FBRUQsVUFGTixPQUFPLEdBRUU7d0JBRlQsT0FBTzs7QUFHWCw2QkFISSxPQUFPLDZDQUdIO0VBQ1I7O2NBSkksT0FBTzs7U0FNTSw2QkFBRzs7QUFFcEIsT0FBSSxDQUFDLEdBQUcsR0FBRyxxQ0FBZ0IsQ0FBQztBQUM1QixPQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUNwQyxHQUFHLENBQUMsQ0FBQSxVQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUM7O0FBRXhCLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDYixhQUFRLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRO0tBQ2pDLENBQUMsQ0FBQzs7QUFFSCxXQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFdEMsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ2Y7OztTQUVNLGtCQUFHOztBQUVULFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUV4QixVQUNDOztNQUFLLFNBQVMsRUFBQyxXQUFXO0lBRXpCOztPQUFLLFNBQVMsRUFBQyxjQUFjO0tBRTVCLDZCQUFLLFNBQVMsRUFBQyxTQUFTLEdBQ2xCO0tBRU47O1FBQUssU0FBUyxFQUFDLFlBQVk7TUFDekIsSUFBSSxDQUFDLEtBQUssSUFDViw2QkFBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxBQUFDLEdBQUc7TUFFbEY7S0FFTjs7UUFBSyxTQUFTLEVBQUMsV0FBVztNQUN4QixJQUFJLENBQUMsS0FBSyxJQUNWLDZCQUFLLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLEFBQUMsR0FBRztNQUVqRjtLQUVEO0lBRUQsQ0FDTjtHQUNEOzs7UUFqREksT0FBTztHQUFTLEtBQUssQ0FBQyxTQUFTOztBQW1EbkMsQ0FBQzs7cUJBRVksT0FBTyIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvY29tcG9uZW50cy9ob21lL1ByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlJztcblxuY2xhc3MgUHJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuXHRcdHRoaXMuYXBpID0gbmV3IGFwaVNlcnZpY2UoKTtcblx0XHR0aGlzLmFwaS5yZXF1ZXN0KCcvYXBpL2luY2x1ZGVzLmpzb24nKVxuXHRcdFx0LmVuZChmdW5jdGlvbihlcnIsIHJlc3BvbnNlKXtcblxuXHRcdFx0ICAgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ICAgIFx0aW5jbHVkZXMgOiByZXNwb25zZS5ib2R5LmluY2x1ZGVzXG5cdFx0XHQgICAgfSk7XG5cblx0XHRcdCAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ib2R5LmluY2x1ZGVzKVxuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuXG5cdFx0cmV0dXJuIChcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29kZS13cmFwcGVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2Fzcy1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5pbmNsdWRlcy5ncmlkLm1peGluc1swXS5pbmNsdWRlfX0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3NzLWJsb2NrXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZSAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmluY2x1ZGVzLmdyaWQubWl4aW5zWzBdLm91dHB1dH19IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59IDtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldztcbiJdfQ==
},{"../../services/apiService":5}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsHomePreview = require('./components/home/Preview');

var _componentsHomePreview2 = _interopRequireDefault(_componentsHomePreview);

var _componentsHomeLogo = require('./components/home/Logo');

var _componentsHomeLogo2 = _interopRequireDefault(_componentsHomeLogo);

var _componentsHeaderThemeSwitch = require('./components/header/themeSwitch');

var _componentsHeaderThemeSwitch2 = _interopRequireDefault(_componentsHeaderThemeSwitch);

document.body.className = 'animations';

React.render(React.createElement(_componentsHomeLogo2['default'], null), document.getElementById('intro-pane'));

React.render(React.createElement(_componentsHeaderThemeSwitch2['default'], null), document.getElementById('theme-switcher'));

// React.render(
//  	<Preview/>,
//     document.getElementById('preview')
// );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzdiZTkzZGYzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUNBQW9CLDJCQUEyQjs7OztrQ0FDM0Isd0JBQXdCOzs7OzJDQUNwQixpQ0FBaUM7Ozs7QUFHekQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDOztBQUV2QyxLQUFLLENBQUMsTUFBTSxDQUNYLDBEQUFRLEVBQ1IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FDckMsQ0FBQzs7QUFFRixLQUFLLENBQUMsTUFBTSxDQUNYLG1FQUFlLEVBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6QyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzdiZTkzZGYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvUHJldmlldyc7XG5pbXBvcnQgTG9nbyAgICBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9Mb2dvJztcbmltcG9ydCBUaGVtZVN3aXRjaCBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL3RoZW1lU3dpdGNoJztcblxuXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdhbmltYXRpb25zJztcblxuUmVhY3QucmVuZGVyKFxuXHQ8TG9nbyAvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludHJvLXBhbmUnKVxuKTtcblxuUmVhY3QucmVuZGVyKFxuXHQ8VGhlbWVTd2l0Y2ggLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zd2l0Y2hlcicpXG4pO1xuXG4vLyBSZWFjdC5yZW5kZXIoXG4vLyAgXHQ8UHJldmlldy8+LFxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3Jylcbi8vICk7Il19
},{"./components/header/themeSwitch":1,"./components/home/Logo":2,"./components/home/Preview":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _node_modulesSuperagentLibClient = require("../../node_modules/superagent/lib/client");

var _node_modulesSuperagentLibClient2 = _interopRequireDefault(_node_modulesSuperagentLibClient);

var apiService = (function () {
	function apiService() {
		_classCallCheck(this, apiService);
	}

	_createClass(apiService, [{
		key: "request",
		value: function request(url) {
			return _node_modulesSuperagentLibClient2["default"].get(url);
		}
	}]);

	return apiService;
})();

exports["default"] = apiService;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9zZXJ2aWNlcy9hcGlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzsrQ0FBaUIsMENBQTBDOzs7O0lBRXJELFVBQVU7VUFBVixVQUFVO3dCQUFWLFVBQVU7OztjQUFWLFVBQVU7O1NBRVIsaUJBQUMsR0FBRyxFQUFDO0FBQ1gsVUFBTyw2Q0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDckI7OztRQUpJLFVBQVU7OztxQkFPRCxVQUFVIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9zZXJ2aWNlcy9hcGlTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhUVFAgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnRcIjtcblxuY2xhc3MgYXBpU2VydmljZSB7XG5cblx0cmVxdWVzdCh1cmwpe1xuXHRcdHJldHVybiBIVFRQLmdldCh1cmwpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVNlcnZpY2U7Il19
},{"../../node_modules/superagent/lib/client":8}],6:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],7:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],8:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? (this || self)
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":6,"reduce":7}]},{},[4])