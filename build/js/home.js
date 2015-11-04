(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = (function (_React$Component) {
	_inherits(Logo, _React$Component);

	function Logo() {
		_classCallCheck(this, Logo);

		_get(Object.getPrototypeOf(Logo.prototype), "constructor", this).call(this);
	}

	_createClass(Logo, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"svg",
				{ className: "slide-in-down", viewBox: "0 0 481 188" },
				React.createElement(
					"g",
					{ className: "logo-wrapper" },
					React.createElement(
						"g",
						{ className: "chilli" },
						React.createElement("path", { className: "light-red", d: "M257.4,32.2c13.4,4.4,21,16.2,18,27.9c-6.5,25.7-24.2,45.8-5.9,93.5c11.1,29.1,6.7,29.2,0.6,29.7 s-34.1-8.3-54-54.2c-15.1-34.6-17.5-79.5-8.2-90.2c5-5.7,15.3-8.6,23.4-10.5c5.6-1.3,11.6-1,17.1,0.8L257.4,32.2z" }),
						React.createElement("path", { className: "dark-red", d: "M232.1,34.2c1-2.9-2.5-5.5-5.9-4.4c-6.1,1.9-14.4,4.6-18.3,9.1c-9.4,10.7-6.9,55.6,8.2,90.2 c16.2,37.3,41.8,49.8,50.8,53.1c0.9,0.4,1.8-0.6,1.2-1.3C207.7,111.9,223,61.7,232.1,34.2z" }),
						React.createElement("path", { className: "highlight", d: "M259.5,62.7l1.4,1.6c0.8,0.9,1.6,2.7,1,4.1c-7.9,17.6-11.1,28.8-6.3,64c0.8,6-19.9-51.6-0.4-70.5 C257.4,59.7,257.8,60.9,259.5,62.7z" }),
						React.createElement("path", { className: "light-green", d: "M204.9,49.8c-0.7-6.9,0.8-13.3,7.7-17.1c9.8-5.4,48.1-11.2,57.8,6.1c12.3,22-2.1,6.3-27.2,10.2 c-7.3,1.1-20.7,11.8-32.4,7.9C208.2,56.1,205.1,51.8,204.9,49.8z" }),
						React.createElement("path", { className: "dark-green", d: "M226.2,54.9c-1.6,6-15.4,2.1-15.4,2.1c-2.6-0.9-5.7-5.2-5.9-7.1c-0.7-6.9,0.8-13.3,7.7-17.1 c0,0,14-5.5,23.5-4.7C236,28,232.7,31.3,226.2,54.9z" }),
						React.createElement("path", { className: "light-green", d: "M236.8,28.8c0,0-2.1-28.3,12.4-28.8c0,0-1.8,3.7,2.3,4.3c0,0-13.3,16.7-11.4,23.3S236.8,28.8,236.8,28.8z" })
					),
					React.createElement(
						"g",
						{ className: "sp" },
						React.createElement("path", { className: "text s", d: "M20.5,106.2v6.2c0,5.3,6.7,8.5,14.5,8.5c8.4,0,14.3-3.6,14.3-10.2c0-8.4-9.4-11-18.9-14.8 C19.4,91.7,8.6,86.7,8.6,72c0-16.6,13.5-23,27.7-23c13,0,26.2,5,26.2,14.5v10.8H48.5v-5.6c0-4.2-6.2-6.4-12.3-6.4 c-6.7,0-12.3,2.8-12.3,9.1c0,7.6,7.7,10.2,16.3,13.5c12.3,4.4,24.6,9.3,24.6,24.8c0,16.9-14.2,24.6-29.8,24.6 c-13.7,0-28.4-6.2-28.4-18.6v-9.4H20.5z" }),
						React.createElement("path", { className: "text p", d: "M106.3,121.5h9.9V61.8h-9.9V50.3h39.5c4.9,0,9.9,0.3,13.9,2.1c8.9,3.7,14.8,12.9,14.8,24.4 c0,11.7-6.2,21.7-15.7,25.1c-3.8,1.3-8,1.6-12.7,1.6h-14.8v17.9h10v11.4h-35.1V121.5z M144.2,91.4c3.5,0,6-0.5,8.4-1.6 c4.4-2.2,6.7-6.9,6.7-12.9c0-5.7-2.2-10.1-6-12.3c-2.3-1.4-5.2-2-8.9-2h-12.9v28.8H144.2z" })
					),
					React.createElement(
						"g",
						{ className: "ce" },
						React.createElement("path", { className: "text c", d: "M334.7,48.9c10,0,32.2,3.5,32.2,16.5v11.2H353v-6.4c0-6.2-10.9-8.3-17.7-8.3c-15.9,0-27.5,11.2-27.5,28.6 c0,18.6,12.1,30.7,28.4,30.7c5,0,17.9-1.6,17.9-8.1v-6.4h13.8V118c0,12.3-21.3,16.3-32.7,16.3c-25,0-43.1-18.9-43.1-43 C292.1,66.8,310.7,48.9,334.7,48.9z" }),
						React.createElement("path", { className: "text e", d: "M409.7,121.5h9.9V61.8h-9.9V50.3H471v21.3h-13v-9.1h-23.1v22.7H462v12.2h-27.2v23.2h24.9v-9.3h13v21.5h-63 V121.5z" })
					)
				)
			);
		}
	}]);

	return Logo;
})(React.Component);

exports["default"] = Logo;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (function (_React$Component) {
	_inherits(Preview, _React$Component);

	function Preview() {
		_classCallCheck(this, Preview);

		_get(Object.getPrototypeOf(Preview.prototype), "constructor", this).call(this);
	}

	_createClass(Preview, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "container" },
				React.createElement("div", { className: "sass-block" }),
				React.createElement("div", { className: "css-block" })
			);
		}
	}]);

	return Preview;
})(React.Component);

;

exports["default"] = Preview;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timing = (function () {
	function Timing(time, className) {
		_classCallCheck(this, Timing);

		this.time = time;
		this.className = className;

		return {
			d: this.time,
			c: this.className
		};
	}

	_createClass(Timing, null, [{
		key: "timer",
		value: function timer(t) {

			return false;
		}
	}]);

	return Timing;
})();

exports["default"] = Timing;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsHomePreview = require('./components/home/Preview');

var _componentsHomePreview2 = _interopRequireDefault(_componentsHomePreview);

var _componentsHomeLogo = require('./components/home/Logo');

var _componentsHomeLogo2 = _interopRequireDefault(_componentsHomeLogo);

var _componentsHomeTiming = require('./components/home/Timing');

var _componentsHomeTiming2 = _interopRequireDefault(_componentsHomeTiming);

console.log(new _componentsHomeTiming2['default']('d', 7000));

React.render(React.createElement(_componentsHomeLogo2['default'], null), document.getElementById('main-logo'));

React.render(React.createElement(_componentsHomePreview2['default'], null), document.getElementById('preview'));

},{"./components/home/Logo":1,"./components/home/Preview":2,"./components/home/Timing":3}]},{},[4])