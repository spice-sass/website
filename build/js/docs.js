(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _servicesApiService = require('../../services/apiService');

var _servicesApiService2 = _interopRequireDefault(_servicesApiService);

var _sidebarSidebar = require('./sidebar/Sidebar');

var _sidebarSidebar2 = _interopRequireDefault(_sidebarSidebar);

var _mainList = require('./main/List');

var _mainList2 = _interopRequireDefault(_mainList);

var _fluxAppActions = require('../../flux/appActions');

var _fluxAppActions2 = _interopRequireDefault(_fluxAppActions);

var _fluxAppStore = require('../../flux/appStore');

var _fluxAppStore2 = _interopRequireDefault(_fluxAppStore);

var Docs = React.createClass({
	displayName: 'Docs',

	getInitialState: function getInitialState() {
		return {
			includes: {},
			order: [],
			stylePages: [],
			activeMix: _fluxAppStore2['default'].getActive(),
			filterTerm: ""
		};
	},

	activeHandler: function activeHandler(name) {

		history.pushState(null, null, '#' + name);

		this.setState({
			activeMix: name,
			activePosition: _fluxAppStore2['default'].getActivePosition()
		});
	},

	goToMixin: function goToMixin(mixin) {

		var target = document.getElementById(mixin);
		var docs = document.getElementById('docs');
		var top = target.offsetTop;

		docs.scrollTop = top;
	},

	componentDidMount: function componentDidMount() {

		_fluxAppStore2['default'].addChangeListener('active', this.activeHandler);
		_fluxAppStore2['default'].addChangeListener('filter', this.filterHandler);

		this.api = new _servicesApiService2['default']();
		this.api.request('/api/includes.json').end((function (err, response) {

			this.setState({
				includes: response.body.includes,
				order: response.body.includesOrder,
				stylePages: response.body.stylepages
			});
		}).bind(this));
	},

	filterHandler: function filterHandler(term) {
		this.setState({
			filterTerm: term.toLowerCase()
		});
	},

	render: function render() {

		var order = this.state.order,
		    includes = this.state.includes,
		    active = this.state.activeMix,
		    activeP = this.state.activePosition,
		    goToMixin = this.goToMixin,
		    filterTerm = this.state.filterTerm;

		return React.createElement(
			'div',
			{ id: 'docs-wrapper' },
			React.createElement(_sidebarSidebar2['default'], { order: order, includes: includes, active: active, activeP: activeP, goToMixin: goToMixin, filterTerm: filterTerm }),
			React.createElement(_mainList2['default'], { order: order, includes: includes, active: active, goToMixin: goToMixin, filterTerm: filterTerm })
		);
	}

});

exports['default'] = Docs;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvRG9jcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQ0FBdUIsMkJBQTJCOzs7OzhCQUM5QixtQkFBbUI7Ozs7d0JBQ3RCLGFBQWE7Ozs7OEJBQ1AsdUJBQXVCOzs7OzRCQUN6QixxQkFBcUI7Ozs7QUFFMUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRTVCLGdCQUFlLEVBQUMsMkJBQUU7QUFDakIsU0FBTztBQUNOLFdBQVEsRUFBSyxFQUFFO0FBQ2YsUUFBSyxFQUFRLEVBQUU7QUFDZixhQUFVLEVBQUcsRUFBRTtBQUNmLFlBQVMsRUFBSSwwQkFBUyxTQUFTLEVBQUU7QUFDakMsYUFBVSxFQUFHLEVBQUU7R0FDZixDQUFBO0VBQ0Q7O0FBRUQsY0FBYSxFQUFDLHVCQUFDLElBQUksRUFBRTs7QUFFcEIsU0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFdEMsTUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNiLFlBQVMsRUFBRyxJQUFJO0FBQ2hCLGlCQUFjLEVBQUcsMEJBQVMsaUJBQWlCLEVBQUU7R0FDN0MsQ0FBQyxDQUFDO0VBQ0g7O0FBRUQsVUFBUyxFQUFDLG1CQUFDLEtBQUssRUFBRTs7QUFFakIsTUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxNQUFJLElBQUksR0FBSyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLE1BQUksR0FBRyxHQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRTlCLE1BQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0VBQ3JCOztBQUVELGtCQUFpQixFQUFDLDZCQUFHOztBQUVwQiw0QkFBUyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hELDRCQUFTLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXhELE1BQUksQ0FBQyxHQUFHLEdBQUcscUNBQWdCLENBQUM7QUFDNUIsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FDcEMsR0FBRyxDQUFDLENBQUEsVUFBUyxHQUFHLEVBQUUsUUFBUSxFQUFDOztBQUV4QixPQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2IsWUFBUSxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUTtBQUNwQyxTQUFLLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhO0FBQ25DLGNBQVUsRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVU7SUFDbEMsQ0FBQyxDQUFDO0dBRU4sQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBRWY7O0FBRUQsY0FBYSxFQUFDLHVCQUFDLElBQUksRUFBRTtBQUNwQixNQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2IsYUFBVSxFQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7R0FDL0IsQ0FBQyxDQUFDO0VBQ0g7O0FBRUQsT0FBTSxFQUFDLGtCQUFFOztBQUVSLE1BQUksS0FBSyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztNQUNoQyxRQUFRLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO01BQ2hDLE1BQU0sR0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7TUFDakMsT0FBTyxHQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYztNQUN0QyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVM7TUFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOztBQUVwQyxTQUNDOztLQUFLLEVBQUUsRUFBQyxjQUFjO0dBQ3JCLG1EQUFTLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEFBQUMsRUFBQyxTQUFTLEVBQUUsU0FBUyxBQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsQUFBQyxHQUFFO0dBQzVILDZDQUFNLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEFBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxBQUFDLEdBQUU7R0FDbEcsQ0FDTjtFQUNEOztDQUVELENBQUMsQ0FBQzs7cUJBRVksSUFBSSIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvY29tcG9uZW50cy9kb2NzL0RvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbWFpbi9MaXN0JztcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2ZsdXgvYXBwQWN0aW9ucyc7XG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vZmx1eC9hcHBTdG9yZSc7XG5cbnZhciBEb2NzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdGdldEluaXRpYWxTdGF0ZSAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5jbHVkZXMgICA6IHt9LFxuXHRcdFx0b3JkZXIgICAgICA6IFtdLFxuXHRcdFx0c3R5bGVQYWdlcyA6IFtdLFxuXHRcdFx0YWN0aXZlTWl4ICA6IEFwcFN0b3JlLmdldEFjdGl2ZSgpLFxuXHRcdFx0ZmlsdGVyVGVybSA6IFwiXCJcblx0XHR9XG5cdH0sXG5cblx0YWN0aXZlSGFuZGxlciAobmFtZSkge1xuXG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUobnVsbCxudWxsLCcjJytuYW1lKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlTWl4IDogbmFtZSxcblx0XHRcdGFjdGl2ZVBvc2l0aW9uIDogQXBwU3RvcmUuZ2V0QWN0aXZlUG9zaXRpb24oKVxuXHRcdH0pO1xuXHR9LFxuXG5cdGdvVG9NaXhpbiAobWl4aW4pIHtcblxuXHRcdHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtaXhpbik7XG5cdFx0dmFyIGRvY3MgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NzJyk7XG5cdFx0dmFyIHRvcCAgICA9IHRhcmdldC5vZmZzZXRUb3A7XG5cblx0XHRkb2NzLnNjcm9sbFRvcCA9IHRvcDtcblx0fSxcblxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cblx0XHRBcHBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcignYWN0aXZlJyx0aGlzLmFjdGl2ZUhhbmRsZXIpO1xuXHRcdEFwcFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKCdmaWx0ZXInLHRoaXMuZmlsdGVySGFuZGxlcik7XG5cblx0XHR0aGlzLmFwaSA9IG5ldyBhcGlTZXJ2aWNlKCk7XG5cdFx0dGhpcy5hcGkucmVxdWVzdCgnL2FwaS9pbmNsdWRlcy5qc29uJylcblx0XHRcdC5lbmQoZnVuY3Rpb24oZXJyLCByZXNwb25zZSl7XG5cblx0XHRcdCAgICB0aGlzLnNldFN0YXRlKHtcblx0XHRcdCAgICBcdGluY2x1ZGVzIDogcmVzcG9uc2UuYm9keS5pbmNsdWRlcyxcblx0XHRcdFx0XHRvcmRlciA6IHJlc3BvbnNlLmJvZHkuaW5jbHVkZXNPcmRlcixcblx0XHRcdFx0XHRzdHlsZVBhZ2VzIDogcmVzcG9uc2UuYm9keS5zdHlsZXBhZ2VzXG5cdFx0XHQgICAgfSk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fSxcblxuXHRmaWx0ZXJIYW5kbGVyICh0ZXJtKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmaWx0ZXJUZXJtIDogdGVybS50b0xvd2VyQ2FzZSgpXG5cdFx0fSk7XG5cdH0sXG5cblx0cmVuZGVyICgpe1xuXG5cdFx0dmFyIG9yZGVyICAgICAgPSB0aGlzLnN0YXRlLm9yZGVyLFxuXHRcdFx0aW5jbHVkZXMgICA9IHRoaXMuc3RhdGUuaW5jbHVkZXMsXG5cdFx0XHRhY3RpdmUgICAgID0gdGhpcy5zdGF0ZS5hY3RpdmVNaXgsXG5cdFx0XHRhY3RpdmVQICAgID0gdGhpcy5zdGF0ZS5hY3RpdmVQb3NpdGlvbixcblx0XHRcdGdvVG9NaXhpbiAgPSB0aGlzLmdvVG9NaXhpbixcblx0XHRcdGZpbHRlclRlcm0gPSB0aGlzLnN0YXRlLmZpbHRlclRlcm07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cImRvY3Mtd3JhcHBlclwiPlxuXHRcdFx0XHQ8U2lkZWJhciBvcmRlcj17b3JkZXJ9IGluY2x1ZGVzPXtpbmNsdWRlc30gYWN0aXZlPXthY3RpdmV9IGFjdGl2ZVA9e2FjdGl2ZVB9IGdvVG9NaXhpbj17Z29Ub01peGlufSBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfS8+XG5cdFx0XHRcdDxMaXN0IG9yZGVyPXtvcmRlcn0gaW5jbHVkZXM9e2luY2x1ZGVzfSBhY3RpdmU9e2FjdGl2ZX0gZ29Ub01peGluPXtnb1RvTWl4aW59IGZpbHRlclRlcm09e2ZpbHRlclRlcm19Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jczsiXX0=
},{"../../flux/appActions":11,"../../flux/appStore":13,"../../services/apiService":14,"./main/List":2,"./sidebar/Sidebar":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MixinGroup = require('./MixinGroup');

var _MixinGroup2 = _interopRequireDefault(_MixinGroup);

var _fluxAppActions = require('../../../flux/appActions');

var _fluxAppActions2 = _interopRequireDefault(_fluxAppActions);

var _fluxAppStore = require('../../../flux/appStore');

var _fluxAppStore2 = _interopRequireDefault(_fluxAppStore);

var List = React.createClass({
	displayName: 'List',

	getInitialState: function getInitialState() {
		return {
			scrollPos: 0
		};
	},

	componentDidMount: function componentDidMount() {

		_fluxAppStore2['default'].addChangeListener('jump', this.jumpHandler);

		var docs = this.docs.getDOMNode();
		docs.onscroll = (function (e) {
			this.setState({
				scrollPos: docs.scrollTop
			});
		}).bind(this);
	},

	jumpHandler: function jumpHandler(pos) {
		var docs = document.getElementById('docs');
		docs.scrollTop = pos - 50;
	},

	render: function render() {
		var _this = this;

		var inc = this.props.includes,
		    active = this.props.active,
		    scroll = this.state.scrollPos,
		    goToMixin = this.props.goToMixin,
		    filterTerm = this.props.filterTerm;

		return React.createElement(
			'div',
			{ id: 'docs', ref: function (ref) {
					return _this.docs = ref;
				} },
			React.createElement(
				'div',
				{ id: 'group-wrapper' },
				this.props.order.map(function (ord) {
					return React.createElement(_MixinGroup2['default'], { ord: ord, includes: inc, active: active, scroll: scroll, goToMixin: goToMixin, filterTerm: filterTerm });
				})
			),
			filterTerm != "" && React.createElement(
				'div',
				{ id: 'no-results' },
				React.createElement(
					'h5',
					null,
					'Not found!'
				),
				React.createElement(
					'p',
					null,
					'No results were found for ',
					React.createElement(
						'span',
						{ className: 'term' },
						filterTerm,
						'…'
					)
				),
				React.createElement(
					'p',
					null,
					'Please try filering by another search term.'
				)
			)
		);
	}

});

exports['default'] = List;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzBCQUF1QixjQUFjOzs7OzhCQUNkLDBCQUEwQjs7Ozs0QkFDNUIsd0JBQXdCOzs7O0FBRTdDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU1QixnQkFBZSxFQUFDLDJCQUFFO0FBQ2pCLFNBQU87QUFDTixZQUFTLEVBQUcsQ0FBQztHQUNiLENBQUE7RUFDRDs7QUFFRCxrQkFBaUIsRUFBQyw2QkFBRTs7QUFFbkIsNEJBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFcEQsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQyxNQUFJLENBQUMsUUFBUSxHQUFHLENBQUEsVUFBUyxDQUFDLEVBQUU7QUFDM0IsT0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNiLGFBQVMsRUFBRyxJQUFJLENBQUMsU0FBUztJQUMxQixDQUFDLENBQUE7R0FDRixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0VBQ1o7O0FBRUQsWUFBVyxFQUFDLHFCQUFDLEdBQUcsRUFBRTtBQUNqQixNQUFJLElBQUksR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLE1BQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztFQUMxQjs7QUFFRCxPQUFNLEVBQUEsa0JBQUc7OztBQUVSLE1BQUksR0FBRyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtNQUNuQyxNQUFNLEdBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO01BQzlCLE1BQU0sR0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7TUFDakMsU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztNQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7O0FBRXBDLFNBQ0M7O0tBQUssRUFBRSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsVUFBQyxHQUFHO1lBQUssTUFBSyxJQUFJLEdBQUcsR0FBRztLQUFBLEFBQUM7R0FDNUM7O01BQUssRUFBRSxFQUFDLGVBQWU7SUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ2xDLFlBQU8sK0NBQVksR0FBRyxFQUFFLEdBQUcsQUFBQyxFQUFDLFFBQVEsRUFBRSxHQUFHLEFBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEFBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxBQUFDLEdBQUUsQ0FBQTtLQUMzSCxDQUFDO0lBQ0c7R0FDTCxVQUFVLElBQUksRUFBRSxJQUNoQjs7TUFBSyxFQUFFLEVBQUMsWUFBWTtJQUNuQjs7OztLQUFtQjtJQUNuQjs7OztLQUE2Qjs7UUFBTSxTQUFTLEVBQUMsTUFBTTtNQUFFLFVBQVU7O01BQWdCO0tBQUk7SUFDbkY7Ozs7S0FBa0Q7SUFDN0M7R0FFRixDQUNOO0VBQ0Q7O0NBRUQsQ0FBQyxDQUFDOztxQkFFWSxJQUFJIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1peGluR3JvdXAgZnJvbSAnLi9NaXhpbkdyb3VwJztcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2ZsdXgvYXBwQWN0aW9ucyc7XG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vLi4vZmx1eC9hcHBTdG9yZSc7XG5cbnZhciBMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdGdldEluaXRpYWxTdGF0ZSAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2Nyb2xsUG9zIDogMFxuXHRcdH1cblx0fSxcblxuXHRjb21wb25lbnREaWRNb3VudCAoKXtcblxuXHRcdEFwcFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKCdqdW1wJyx0aGlzLmp1bXBIYW5kbGVyKTtcblxuXHRcdHZhciBkb2NzID0gdGhpcy5kb2NzLmdldERPTU5vZGUoKTtcblx0XHRkb2NzLm9uc2Nyb2xsID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNjcm9sbFBvcyA6IGRvY3Muc2Nyb2xsVG9wXG5cdFx0XHR9KVxuXHRcdH0uYmluZCh0aGlzKVxuXHR9LFxuXG5cdGp1bXBIYW5kbGVyIChwb3MpIHtcblx0XHR2YXIgZG9jcyA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jcycpO1xuXHRcdGRvY3Muc2Nyb2xsVG9wID0gcG9zIC0gNTA7XG5cdH0sXG5cblx0cmVuZGVyKCkge1xuXHRcdFxuXHRcdHZhciBpbmMgICAgICAgID0gdGhpcy5wcm9wcy5pbmNsdWRlcyxcblx0XHRcdGFjdGl2ZSAgICAgPSB0aGlzLnByb3BzLmFjdGl2ZSxcblx0XHRcdHNjcm9sbCAgICAgPSB0aGlzLnN0YXRlLnNjcm9sbFBvcyxcblx0XHRcdGdvVG9NaXhpbiAgPSB0aGlzLnByb3BzLmdvVG9NaXhpbixcblx0XHRcdGZpbHRlclRlcm0gPSB0aGlzLnByb3BzLmZpbHRlclRlcm07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cImRvY3NcIiByZWY9eyhyZWYpID0+IHRoaXMuZG9jcyA9IHJlZn0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJncm91cC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMub3JkZXIubWFwKGZ1bmN0aW9uKG9yZCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPE1peGluR3JvdXAgb3JkPXtvcmR9IGluY2x1ZGVzPXtpbmN9IGFjdGl2ZT17YWN0aXZlfSBzY3JvbGw9e3Njcm9sbH0gZ29Ub01peGluPXtnb1RvTWl4aW59IGZpbHRlclRlcm09e2ZpbHRlclRlcm19Lz5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtmaWx0ZXJUZXJtICE9IFwiXCIgJiZcblx0XHRcdFx0XHQ8ZGl2IGlkPVwibm8tcmVzdWx0c1wiPlxuXHRcdFx0XHRcdFx0PGg1Pk5vdCBmb3VuZCE8L2g1PlxuXHRcdFx0XHRcdFx0PHA+Tm8gcmVzdWx0cyB3ZXJlIGZvdW5kIGZvciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXJtXCI+e2ZpbHRlclRlcm19JmhlbGxpcDs8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PHA+UGxlYXNlIHRyeSBmaWxlcmluZyBieSBhbm90aGVyIHNlYXJjaCB0ZXJtLjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0OyJdfQ==
},{"../../../flux/appActions":11,"../../../flux/appStore":13,"./MixinGroup":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _MixinTabs = require("./MixinTabs");

var _MixinTabs2 = _interopRequireDefault(_MixinTabs);

var _MixinItem = require("./MixinItem");

var _MixinItem2 = _interopRequireDefault(_MixinItem);

// Ancestors - List > Docs
// Children - MixinItem > MixinTabs

var MixinGroup = React.createClass({
	displayName: "MixinGroup",

	render: function render() {

		var group = this.props.ord,
		    inc = this.props.includes,
		    active = this.props.active,
		    scroll = this.props.scroll,
		    goToMixin = this.props.goToMixin,
		    mixins = inc[group].mixins,
		    fns = inc[group].functions,
		    title = inc[group].title,
		    search = inc[group].searchTerms,
		    intro = inc[group].intro;

		return React.createElement(
			"div",
			null,
			search.toLowerCase().indexOf(this.props.filterTerm) > -1 && React.createElement(
				"div",
				{ className: "include-block", id: group },
				React.createElement(
					"h1",
					null,
					{ title: title }
				),
				intro && React.createElement("div", { dangerouslySetInnerHTML: { __html: intro } }),
				React.createElement("hr", null),
				mixins.map(function (mixin) {
					return React.createElement(_MixinItem2["default"], { data: mixin, type: "mixin", active: active, scroll: scroll, goToMixin: goToMixin });
				}),
				fns && fns.map(function (fn) {
					return React.createElement(_MixinItem2["default"], { data: fn, type: "func", active: active, scroll: scroll, goToMixin: goToMixin });
				})
			)
		);
	}
});

exports["default"] = MixinGroup;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9NaXhpbkdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3lCQUFzQixhQUFhOzs7O3lCQUNiLGFBQWE7Ozs7Ozs7QUFNbkMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRWxDLE9BQU0sRUFBQSxrQkFBRzs7QUFFUixNQUFJLEtBQUssR0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7TUFDN0IsR0FBRyxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtNQUMvQixNQUFNLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO01BQzdCLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07TUFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztNQUNoQyxNQUFNLEdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07TUFDN0IsR0FBRyxHQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTO01BQ2hDLEtBQUssR0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSztNQUM1QixNQUFNLEdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVc7TUFDbEMsS0FBSyxHQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRTlCLFNBQ0M7OztHQUNFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFDeEQ7O01BQUssU0FBUyxFQUFDLGVBQWUsRUFBQyxFQUFFLEVBQUUsS0FBSyxBQUFDO0lBQ3hDOzs7S0FBSyxFQUFDLEtBQUssRUFBTCxLQUFLLEVBQUM7S0FBTTtJQUNqQixLQUFLLElBQUksNkJBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEFBQUMsR0FBRztJQUMzRCwrQkFBTTtJQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBUyxLQUFLLEVBQUM7QUFDMUIsWUFBTyw4Q0FBVyxJQUFJLEVBQUUsS0FBSyxBQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEFBQUMsR0FBRSxDQUFBO0tBQ25HLENBQUM7SUFDRCxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEVBQUUsRUFBQztBQUMzQixZQUFPLDhDQUFXLElBQUksRUFBRSxFQUFFLEFBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxNQUFNLEFBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxBQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsQUFBQyxHQUFFLENBQUE7S0FDL0YsQ0FBQztJQUNHO0dBRUYsQ0FDTjtFQUNEO0NBQ0QsQ0FBQyxDQUFDOztxQkFFWSxVQUFVIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9NaXhpbkdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1peGluVGFicyBmcm9tIFwiLi9NaXhpblRhYnNcIjtcbmltcG9ydCBNaXhpbkl0ZW0gZnJvbSBcIi4vTWl4aW5JdGVtXCI7XG5cblxuLy8gQW5jZXN0b3JzIC0gTGlzdCA+IERvY3Ncbi8vIENoaWxkcmVuIC0gTWl4aW5JdGVtID4gTWl4aW5UYWJzXG5cbnZhciBNaXhpbkdyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBncm91cCAgICAgPSB0aGlzLnByb3BzLm9yZCxcblx0XHRcdGluYyAgICAgICA9IHRoaXMucHJvcHMuaW5jbHVkZXMsXG5cdFx0XHRhY3RpdmUgICAgPSB0aGlzLnByb3BzLmFjdGl2ZSxcblx0XHRcdHNjcm9sbCAgICA9IHRoaXMucHJvcHMuc2Nyb2xsLFxuXHRcdFx0Z29Ub01peGluID0gdGhpcy5wcm9wcy5nb1RvTWl4aW4sXG5cdFx0XHRtaXhpbnMgICAgPSBpbmNbZ3JvdXBdLm1peGlucyxcblx0XHRcdGZucyAgICAgICA9IGluY1tncm91cF0uZnVuY3Rpb25zLFxuXHRcdFx0dGl0bGUgICAgID0gaW5jW2dyb3VwXS50aXRsZSxcblx0XHRcdHNlYXJjaCAgICA9IGluY1tncm91cF0uc2VhcmNoVGVybXMsXG5cdFx0XHRpbnRybyAgICAgPSBpbmNbZ3JvdXBdLmludHJvO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtzZWFyY2gudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGVybSkgPiAtMSAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZS1ibG9ja1wiIGlkPXtncm91cH0gPlxuXHRcdFx0XHRcdFx0PGgxPnt7dGl0bGV9fTwvaDE+XG5cdFx0XHRcdFx0XHR7aW50cm8gJiYgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaW50cm99fSAvPn1cdFxuXHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHR7bWl4aW5zLm1hcChmdW5jdGlvbihtaXhpbil7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8TWl4aW5JdGVtIGRhdGE9e21peGlufSB0eXBlPVwibWl4aW5cIiBhY3RpdmU9e2FjdGl2ZX0gc2Nyb2xsPXtzY3JvbGx9IGdvVG9NaXhpbj17Z29Ub01peGlufS8+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdHtmbnMgJiYgZm5zLm1hcChmdW5jdGlvbihmbil7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8TWl4aW5JdGVtIGRhdGE9e2ZufSB0eXBlPVwiZnVuY1wiIGFjdGl2ZT17YWN0aXZlfSBzY3JvbGw9e3Njcm9sbH0gZ29Ub01peGluPXtnb1RvTWl4aW59Lz5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbkdyb3VwOyJdfQ==
},{"./MixinItem":4,"./MixinTabs":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _MixinTabs = require("./MixinTabs");

var _MixinTabs2 = _interopRequireDefault(_MixinTabs);

var _fluxAppActions = require('../../../flux/appActions');

var _fluxAppActions2 = _interopRequireDefault(_fluxAppActions);

var _fluxAppDispatchers = require("../../../flux/appDispatchers");

var _fluxAppDispatchers2 = _interopRequireDefault(_fluxAppDispatchers);

// Ancestors - List > Docs > MixinGroup
// Children -  MixinTabs

var MixinItem = React.createClass({
	displayName: "MixinItem",

	componentDidMount: function componentDidMount() {

		if (this.props.data.name == location.hash.replace('#', '')) {

			var mix = this.mix.getDOMNode(),
			    rect = mix.getBoundingClientRect(),
			    top = rect.top;

			_fluxAppActions2["default"].jumpToTop(top);
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

		if (this.mix) {

			var mix = this.mix.getDOMNode(),
			    name = this.props.data.name,
			    active = this.props.active,
			    wHalf = window.innerHeight / 1.5,
			    rect = mix.getBoundingClientRect(),
			    bottom = rect.top + rect.height,
			    top = rect.top;

			if (name != active && top < wHalf && bottom > wHalf) {
				_fluxAppActions2["default"].active(name);
			}
		}
	},

	render: function render() {
		var _this = this;

		var mixin = this.props.data,
		    goToMixin = this.props.goToMixin,
		    type = this.props.type;

		return React.createElement(
			"div",
			{ className: this.props.type, id: mixin.name, ref: function (ref) {
					return _this.mix = ref;
				} },
			React.createElement(
				"h2",
				null,
				type == "mixin" && React.createElement(
					"span",
					{ className: "leckerli-one" },
					"@include"
				),
				" ",
				mixin.name,
				type == "func" && React.createElement(
					"span",
					null,
					"()"
				),
				";"
			),
			React.createElement("div", { dangerouslySetInnerHTML: { __html: mixin.desc } }),
			mixin.args > -1 && React.createElement(
				"div",
				null,
				React.createElement(
					"h6",
					null,
					"Arguments"
				),
				React.createElement(
					"p",
					null,
					"This mixin takes ",
					React.createElement(
						"span",
						null,
						mixin.args
					),
					" argument",
					mixin.args > 1 && "s",
					"."
				),
				React.createElement("div", { dangerouslySetInnerHTML: { __html: mixin.params } })
			),
			React.createElement(
				"h6",
				null,
				"Usage"
			),
			React.createElement(_MixinTabs2["default"], { data: mixin }),
			mixin.demo && React.createElement(
				"div",
				null,
				React.createElement(
					"h6",
					null,
					"Example"
				),
				React.createElement("div", { dangerouslySetInnerHTML: { __html: mixin.demo } })
			),
			mixin.markup && React.createElement(
				"div",
				{ className: "code html-code" },
				React.createElement(
					"header",
					null,
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							{ className: "active" },
							React.createElement(
								"a",
								null,
								"Example HTML"
							)
						)
					)
				),
				React.createElement("div", { className: "code-body scrollbar html", dangerouslySetInnerHTML: { __html: mixin.markup } })
			),
			mixin.links && React.createElement(
				"div",
				null,
				React.createElement(
					"h6",
					null,
					mixin.linksTitle ? mixin.linksTitle + " :" : 'See also :'
				),
				React.createElement(
					"ul",
					{ className: "mixin-links" },
					mixin.links.map(function (link) {
						return React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ onClick: goToMixin.bind(this, link) },
								'@include ' + link
							)
						);
					})
				)
			),
			React.createElement("hr", null)
		);
	}

});

exports["default"] = MixinItem;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9NaXhpbkl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUJBQXNCLGFBQWE7Ozs7OEJBQ1osMEJBQTBCOzs7O2tDQUN2Qiw4QkFBOEI7Ozs7Ozs7QUFLeEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRWpDLGtCQUFpQixFQUFDLDZCQUFHOztBQUVwQixNQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUM7O0FBRXhELE9BQUksR0FBRyxHQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO09BQ3pCLElBQUksR0FBTSxHQUFHLENBQUMscUJBQXFCLEVBQUU7T0FDckMsR0FBRyxHQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7O0FBRXZCLCtCQUFXLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNoQztFQUNEOztBQUVELDBCQUF5QixFQUFDLG1DQUFDLFNBQVMsRUFBRTs7QUFFckMsTUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDOztBQUVYLE9BQUksR0FBRyxHQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO09BQ2xDLElBQUksR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO09BQzlCLE1BQU0sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07T0FDM0IsS0FBSyxHQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRztPQUN6QixJQUFJLEdBQU0sR0FBRyxDQUFDLHFCQUFxQixFQUFFO09BQ3JDLE1BQU0sR0FBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNO09BQ2hDLEdBQUcsR0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDOztBQUc3QixPQUFHLElBQUksSUFBSSxNQUFNLElBQUssR0FBRyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsS0FBSyxBQUFDLEVBQUM7QUFDM0MsZ0NBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCO0dBQ1Y7RUFDRDs7QUFFRCxPQUFNLEVBQUMsa0JBQUU7OztBQUVSLE1BQUksS0FBSyxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtNQUM5QixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO01BQ2hDLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFN0IsU0FDQzs7S0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUMsRUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQUFBQyxFQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUc7WUFBSyxNQUFLLEdBQUcsR0FBRyxHQUFHO0tBQUEsQUFBQztHQUM3RTs7O0lBQUssSUFBSSxJQUFJLE9BQU8sSUFBSTs7T0FBTSxTQUFTLEVBQUMsY0FBYzs7S0FBZ0I7O0lBQUcsS0FBSyxDQUFDLElBQUk7SUFBRSxJQUFJLElBQUksTUFBTSxJQUFJOzs7O0tBQWU7O0lBQU87R0FDN0gsNkJBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQyxBQUFDLEdBQUc7R0FDckQsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFDZjs7O0lBRUM7Ozs7S0FBa0I7SUFDbEI7Ozs7S0FBb0I7OztNQUFPLEtBQUssQ0FBQyxJQUFJO01BQVE7O0tBQVUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRzs7S0FBTTtJQUNsRiw2QkFBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFDLEFBQUMsR0FBRztJQUVuRDtHQUVQOzs7O0lBQWM7R0FDZCw4Q0FBVyxJQUFJLEVBQUUsS0FBSyxBQUFDLEdBQUc7R0FDekIsS0FBSyxDQUFDLElBQUksSUFDVjs7O0lBQ0M7Ozs7S0FBZ0I7SUFDaEIsNkJBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQyxBQUFDLEdBQUc7SUFDakQ7R0FFTixLQUFLLENBQUMsTUFBTSxJQUNaOztNQUFLLFNBQVMsRUFBQyxnQkFBZ0I7SUFDOUI7OztLQUNDOzs7TUFDQzs7U0FBSSxTQUFTLEVBQUMsUUFBUTtPQUNyQjs7OztRQUFtQjtPQUNmO01BQ0Q7S0FDRztJQUNULDZCQUFLLFNBQVMsRUFBQywwQkFBMEIsRUFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFDLEFBQUMsR0FBRztJQUN4RjtHQUVOLEtBQUssQ0FBQyxLQUFLLElBQ1g7OztJQUNDOzs7S0FBSyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLFlBQVk7S0FBTTtJQUNwRTs7T0FBSSxTQUFTLEVBQUMsYUFBYTtLQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBQztBQUM5QixhQUNDOzs7T0FDQzs7VUFBRyxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEFBQUM7UUFBRSxXQUFXLEdBQUcsSUFBSTtRQUFLO09BQzNELENBQ0w7TUFDRCxDQUFDO0tBQ0U7SUFDQTtHQUVQLCtCQUFNO0dBQ0QsQ0FDTjtFQUNEOztDQUVELENBQUMsQ0FBQzs7cUJBRVksU0FBUyIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvY29tcG9uZW50cy9kb2NzL21haW4vTWl4aW5JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1peGluVGFicyBmcm9tIFwiLi9NaXhpblRhYnNcIjtcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2ZsdXgvYXBwQWN0aW9ucyc7XG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tIFwiLi4vLi4vLi4vZmx1eC9hcHBEaXNwYXRjaGVyc1wiO1xuXG4vLyBBbmNlc3RvcnMgLSBMaXN0ID4gRG9jcyA+IE1peGluR3JvdXBcbi8vIENoaWxkcmVuIC0gIE1peGluVGFic1xuXG52YXIgTWl4aW5JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuXHRcdGlmKHRoaXMucHJvcHMuZGF0YS5uYW1lID09IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsJycpKXtcblxuXHRcdFx0dmFyIG1peCAgICAgPSB0aGlzLm1peC5nZXRET01Ob2RlKCksXG5cdCAgICAgICAgICAgIHJlY3QgICAgPSBtaXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdCAgICAgICAgICAgIHRvcCAgICAgPSByZWN0LnRvcDtcblxuXHQgICAgICAgIEFwcEFjdGlvbnMuanVtcFRvVG9wKHRvcCk7XG5cdFx0fVxuXHR9LFxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuXG5cdFx0aWYodGhpcy5taXgpe1xuXG5cdFx0XHR2YXIgbWl4ICAgICA9IHRoaXMubWl4LmdldERPTU5vZGUoKSxcblx0XHRcdFx0bmFtZSAgICA9IHRoaXMucHJvcHMuZGF0YS5uYW1lLFxuXHRcdFx0XHRhY3RpdmUgID0gdGhpcy5wcm9wcy5hY3RpdmUsXG5cdFx0XHRcdHdIYWxmICAgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxLjUsXG5cdCAgICAgICAgICAgIHJlY3QgICAgPSBtaXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdCAgICAgICAgICAgIGJvdHRvbSAgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0LFxuXHQgICAgICAgICAgICB0b3AgICAgID0gcmVjdC50b3A7XG5cblxuXHRcdFx0aWYobmFtZSAhPSBhY3RpdmUgJiYgKHRvcCA8IHdIYWxmICYmIGJvdHRvbSA+IHdIYWxmKSl7XG4gICAgICAgICAgICBcdEFwcEFjdGlvbnMuYWN0aXZlKG5hbWUpO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0fSxcblxuXHRyZW5kZXIgKCl7XG5cblx0XHR2YXIgbWl4aW4gICAgID0gdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0Z29Ub01peGluID0gdGhpcy5wcm9wcy5nb1RvTWl4aW4sXG5cdFx0XHR0eXBlICAgICAgPSB0aGlzLnByb3BzLnR5cGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMudHlwZX0gaWQ9e21peGluLm5hbWV9IHJlZj17KHJlZikgPT4gdGhpcy5taXggPSByZWZ9PlxuXHRcdFx0XHQ8aDI+e3R5cGUgPT0gXCJtaXhpblwiICYmIDxzcGFuIGNsYXNzTmFtZT1cImxlY2tlcmxpLW9uZVwiPkBpbmNsdWRlPC9zcGFuPn0ge21peGluLm5hbWV9e3R5cGUgPT0gXCJmdW5jXCIgJiYgPHNwYW4+KCk8L3NwYW4+fTs8L2gyPlxuXHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtaXhpbi5kZXNjfX0gLz5cblx0XHRcdFx0e21peGluLmFyZ3MgPiAtMSAmJlxuXHRcdFx0XHRcdDxkaXY+XG5cblx0XHRcdFx0XHRcdDxoNj5Bcmd1bWVudHM8L2g2PlxuXHRcdFx0XHRcdFx0PHA+VGhpcyBtaXhpbiB0YWtlcyA8c3Bhbj57bWl4aW4uYXJnc308L3NwYW4+IGFyZ3VtZW50e21peGluLmFyZ3MgPiAxICYmIFwic1wifS48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtaXhpbi5wYXJhbXN9fSAvPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGg2PlVzYWdlPC9oNj5cblx0XHRcdFx0PE1peGluVGFicyBkYXRhPXttaXhpbn0gLz5cblx0XHRcdFx0e21peGluLmRlbW8gJiZcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGg2PkV4YW1wbGU8L2g2PlxuXHRcdFx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbWl4aW4uZGVtb319IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e21peGluLm1hcmt1cCAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29kZSBodG1sLWNvZGVcIj5cblx0XHRcdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5FeGFtcGxlIEhUTUw8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2RlLWJvZHkgc2Nyb2xsYmFyIGh0bWxcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbWl4aW4ubWFya3VwfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7bWl4aW4ubGlua3MgJiYgXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoNj57bWl4aW4ubGlua3NUaXRsZSA/IG1peGluLmxpbmtzVGl0bGUgKyBcIiA6XCIgOiAnU2VlIGFsc28gOid9PC9oNj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtaXhpbi1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHR7bWl4aW4ubGlua3MubWFwKGZ1bmN0aW9uKGxpbmspe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e2dvVG9NaXhpbi5iaW5kKHRoaXMsbGluayl9PnsnQGluY2x1ZGUgJyArIGxpbmt9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW5JdGVtOyJdfQ==
},{"../../../flux/appActions":11,"../../../flux/appDispatchers":12,"./MixinTabs":5}],5:[function(require,module,exports){
// Ancestors -  List > Docs > MixinGroup > MixinItem

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var MixinTabs = React.createClass({
	displayName: 'MixinTabs',

	getInitialState: function getInitialState() {
		return {
			active: 'include'
		};
	},

	switchTabs: function switchTabs(tab) {
		this.setState({
			active: tab
		});
	},

	render: function render() {

		var data = this.props.data,
		    active = this.state.active;

		return React.createElement(
			'div',
			{ className: 'code' },
			React.createElement(
				'header',
				null,
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						{ className: active == 'include' ? 'active' : '' },
						React.createElement(
							'a',
							{ onClick: this.switchTabs.bind(this, 'include') },
							'Scss'
						)
					),
					React.createElement(
						'li',
						{ className: active == 'output' ? 'active' : '' },
						React.createElement(
							'a',
							{ onClick: this.switchTabs.bind(this, 'output') },
							'Css output'
						)
					),
					React.createElement(
						'li',
						{ className: active == 'mixin' ? 'active' : '' },
						React.createElement(
							'a',
							{ onClick: this.switchTabs.bind(this, 'mixin') },
							'Source code'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: active == 'output' ? "css code-body scrollbar" : "scss code-body scrollbar" },
				React.createElement('div', { dangerouslySetInnerHTML: { __html: data[this.state.active] } })
			)
		);
	}
});

exports['default'] = MixinTabs;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3MvbWFpbi9NaXhpblRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUVqQyxnQkFBZSxFQUFBLDJCQUFHO0FBQ2pCLFNBQU07QUFDTCxTQUFNLEVBQUcsU0FBUztHQUNsQixDQUFBO0VBQ0Q7O0FBRUQsV0FBVSxFQUFBLG9CQUFDLEdBQUcsRUFBRTtBQUNmLE1BQUksQ0FBQyxRQUFRLENBQUM7QUFDYixTQUFNLEVBQUcsR0FBRztHQUNaLENBQUMsQ0FBQztFQUNIOztBQUVELE9BQU0sRUFBQSxrQkFBRzs7QUFFUixNQUFJLElBQUksR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7TUFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUU1QixTQUNDOztLQUFLLFNBQVMsRUFBQyxNQUFNO0dBQ3BCOzs7SUFDQzs7O0tBQ0M7O1FBQUksU0FBUyxFQUFFLE1BQU0sSUFBSSxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsQUFBQztNQUNsRDs7U0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxBQUFDOztPQUFTO01BQ3ZEO0tBQ0w7O1FBQUksU0FBUyxFQUFFLE1BQU0sSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUUsQUFBQztNQUNqRDs7U0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDOztPQUFlO01BQzVEO0tBQ0w7O1FBQUksU0FBUyxFQUFFLE1BQU0sSUFBSSxPQUFPLEdBQUcsUUFBUSxHQUFHLEVBQUUsQUFBQztNQUNoRDs7U0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxBQUFDOztPQUFnQjtNQUM1RDtLQUNEO0lBQ0c7R0FDVDs7TUFBSyxTQUFTLEVBQUUsTUFBTSxJQUFJLFFBQVEsR0FBRyx5QkFBeUIsR0FBRywwQkFBMEIsQUFBQztJQUMzRiw2QkFBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxBQUFDLEdBQUc7SUFDOUQ7R0FDRCxDQUVOO0VBQ0Q7Q0FDRCxDQUFDLENBQUM7O3FCQUVZLFNBQVMiLCJmaWxlIjoiL1VzZXJzL2RhbmllbC5vc2Jvcm5lL3JlcG9zL3dlYnNpdGUvYXBwL2NvbXBvbmVudHMvZG9jcy9tYWluL01peGluVGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuY2VzdG9ycyAtICBMaXN0ID4gRG9jcyA+IE1peGluR3JvdXAgPiBNaXhpbkl0ZW1cblxudmFyIE1peGluVGFicyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRnZXRJbml0aWFsU3RhdGUoKSB7XG5cdFx0cmV0dXJue1xuXHRcdFx0YWN0aXZlIDogJ2luY2x1ZGUnXG5cdFx0fVxuXHR9LFxuXG5cdHN3aXRjaFRhYnModGFiKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmUgOiB0YWJcblx0XHR9KTtcblx0fSxcblxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgZGF0YSAgID0gdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0YWN0aXZlID0gdGhpcy5zdGF0ZS5hY3RpdmU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2RlXCI+XG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlID09ICdpbmNsdWRlJyA/ICdhY3RpdmUnIDogJyd9PlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLnN3aXRjaFRhYnMuYmluZCh0aGlzLCAnaW5jbHVkZScpfT5TY3NzPC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZSA9PSAnb3V0cHV0JyA/ICdhY3RpdmUnIDogJyd9PlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLnN3aXRjaFRhYnMuYmluZCh0aGlzLCAnb3V0cHV0Jyl9PkNzcyBvdXRwdXQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlID09ICdtaXhpbicgPyAnYWN0aXZlJyA6ICcnfT5cblx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dGhpcy5zd2l0Y2hUYWJzLmJpbmQodGhpcywgJ21peGluJyl9PlNvdXJjZSBjb2RlPC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2FjdGl2ZSA9PSAnb3V0cHV0JyA/IFwiY3NzIGNvZGUtYm9keSBzY3JvbGxiYXJcIiA6IFwic2NzcyBjb2RlLWJvZHkgc2Nyb2xsYmFyXCJ9PlxuXHRcdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRhdGFbdGhpcy5zdGF0ZS5hY3RpdmVdfX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdClcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1peGluVGFiczsiXX0=
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fluxAppActions = require('../../../flux/appActions');

var _fluxAppActions2 = _interopRequireDefault(_fluxAppActions);

// Ancestors - Sidebar > Docs

var AppStore = require('../../../flux/appStore');
var SBLink = React.createClass({
	displayName: 'SBLink',

	render: function render() {

		var ord = this.props.ord,
		    inc = this.props.includes,
		    goToMixin = this.props.goToMixin,
		    active = this.props.active,
		    goToMixin = this.props.goToMixin;

		return React.createElement(
			'li',
			null,
			inc[ord].searchTerms.toLowerCase().indexOf(this.props.filterTerm) > -1 && React.createElement(
				'div',
				null,
				React.createElement(
					'a',
					{ className: 'group-title', onClick: goToMixin.bind(this, ord) },
					inc[ord].title
				),
				React.createElement(
					'ul',
					{ className: 'subnav' },
					inc[ord].mixins.map(function (mix) {
						return React.createElement(LinkTemplate, { mix: mix, active: active, goToMixin: goToMixin, type: 'mixin' });
					}),
					inc[ord].functions && inc[ord].functions.map(function (mix) {
						return React.createElement(LinkTemplate, { mix: mix, active: active, goToMixin: goToMixin, type: 'function' });
					})
				)
			)
		);
	}
});

var LinkTemplate = React.createClass({
	displayName: 'LinkTemplate',

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

		var link = this.linkName.getDOMNode(),
		    thisTop = link.getBoundingClientRect().top,
		    sidebar = document.getElementById('sidebar');

		if (nextProps.active == this.props.mix.name && (thisTop - sidebar.scrollTop < 0 || thisTop > window.innerHeight)) {
			AppStore.setPosition(thisTop);
		}
	},

	render: function render() {
		var _this = this;

		var mix = this.props.mix,
		    goToMixin = this.props.goToMixin,
		    type = this.props.type,
		    active = this.props.active;

		return React.createElement(
			'li',
			{ ref: function (ref) {
					return _this.linkName = ref;
				} },
			React.createElement(
				'a',
				{ className: mix.name == active ? 'active' : '', onClick: goToMixin.bind(this, mix.name) },
				type == "mixin" && React.createElement(
					'span',
					null,
					'@include'
				),
				' ',
				mix.name,
				type == "function" && React.createElement(
					'span',
					null,
					'();'
				)
			)
		);
	}
});

exports['default'] = SBLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3Mvc2lkZWJhci9TQkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OEJBQ3VCLDBCQUEwQjs7Ozs7O0FBRGpELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBS25ELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU5QixPQUFNLEVBQUEsa0JBQUc7O0FBRVIsTUFBSSxHQUFHLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO01BQzdCLEdBQUcsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7TUFDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztNQUNoQyxNQUFNLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO01BQzdCLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7QUFFbEMsU0FDQzs7O0dBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRSxDQUFDLENBQUMsSUFDckU7OztJQUNDOztPQUFHLFNBQVMsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxBQUFDO0tBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7S0FBSztJQUNsRjs7T0FBSSxTQUFTLEVBQUMsUUFBUTtLQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBQztBQUNqQyxhQUFPLG9CQUFDLFlBQVksSUFBQyxHQUFHLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEFBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFFLENBQUE7TUFDbkYsQ0FBQztLQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUM7QUFDMUQsYUFBTyxvQkFBQyxZQUFZLElBQUMsR0FBRyxFQUFFLEdBQUcsQUFBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEFBQUMsRUFBQyxTQUFTLEVBQUUsU0FBUyxBQUFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsR0FBRSxDQUFBO01BQ3RGLENBQUM7S0FDRTtJQUNBO0dBRUgsQ0FDTDtFQUNEO0NBQ0QsQ0FBQyxDQUFDOztBQUVILElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUVwQywwQkFBeUIsRUFBQyxtQ0FBQyxTQUFTLEVBQUU7O0FBRXJDLE1BQUksSUFBSSxHQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO01BQ3ZDLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHO01BQzFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUU5QyxNQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEFBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUUsQ0FBQyxJQUFJLE9BQU8sR0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBLEFBQUMsRUFBQztBQUMzRyxXQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQzlCO0VBRUQ7O0FBRUQsT0FBTSxFQUFDLGtCQUFHOzs7QUFFVCxNQUFJLEdBQUcsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7TUFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztNQUNoQyxJQUFJLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO01BQzNCLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFL0IsU0FDQzs7S0FBSSxHQUFHLEVBQUUsVUFBQyxHQUFHO1lBQUssTUFBSyxRQUFRLEdBQUcsR0FBRztLQUFBLEFBQUM7R0FDckM7O01BQUcsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxHQUFHLFFBQVEsR0FBRyxFQUFFLEFBQUMsRUFBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxBQUFDO0lBQ3ZGLElBQUksSUFBSSxPQUFPLElBQUk7Ozs7S0FBcUI7O0lBQUcsR0FBRyxDQUFDLElBQUk7SUFBRSxJQUFJLElBQUksVUFBVSxJQUFJOzs7O0tBQWdCO0lBQ3pGO0dBQ0EsQ0FDTDtFQUNEO0NBQ0QsQ0FBQyxDQUFDOztxQkFFWSxNQUFNIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3Mvc2lkZWJhci9TQkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHBTdG9yZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZsdXgvYXBwU3RvcmUnKTtcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2ZsdXgvYXBwQWN0aW9ucyc7XG5cbi8vIEFuY2VzdG9ycyAtIFNpZGViYXIgPiBEb2NzXG5cbnZhciBTQkxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIG9yZCAgICAgICA9IHRoaXMucHJvcHMub3JkLFxuXHRcdFx0aW5jICAgICAgID0gdGhpcy5wcm9wcy5pbmNsdWRlcyxcblx0XHRcdGdvVG9NaXhpbiA9IHRoaXMucHJvcHMuZ29Ub01peGluLFxuXHRcdFx0YWN0aXZlICAgID0gdGhpcy5wcm9wcy5hY3RpdmUsXG5cdFx0XHRnb1RvTWl4aW4gPSB0aGlzLnByb3BzLmdvVG9NaXhpbjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpPlxuXHRcdFx0XHR7aW5jW29yZF0uc2VhcmNoVGVybXMudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGVybSkgPi0xICYmXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImdyb3VwLXRpdGxlXCIgb25DbGljaz17Z29Ub01peGluLmJpbmQodGhpcyxvcmQpfT57aW5jW29yZF0udGl0bGV9PC9hPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInN1Ym5hdlwiPlxuXHRcdFx0XHRcdFx0XHR7aW5jW29yZF0ubWl4aW5zLm1hcChmdW5jdGlvbihtaXgpe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8TGlua1RlbXBsYXRlIG1peD17bWl4fSBhY3RpdmU9e2FjdGl2ZX0gZ29Ub01peGluPXtnb1RvTWl4aW59IHR5cGU9XCJtaXhpblwiLz5cblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdHtpbmNbb3JkXS5mdW5jdGlvbnMgJiYgaW5jW29yZF0uZnVuY3Rpb25zLm1hcChmdW5jdGlvbihtaXgpe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8TGlua1RlbXBsYXRlIG1peD17bWl4fSBhY3RpdmU9e2FjdGl2ZX0gZ29Ub01peGluPXtnb1RvTWl4aW59IHR5cGU9XCJmdW5jdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2xpPlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBMaW5rVGVtcGxhdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG5cblx0XHR2YXIgbGluayAgICA9IHRoaXMubGlua05hbWUuZ2V0RE9NTm9kZSgpLFxuXHRcdFx0dGhpc1RvcCA9IGxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuXHRcdFx0c2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG5cblx0XHRpZihuZXh0UHJvcHMuYWN0aXZlID09IHRoaXMucHJvcHMubWl4Lm5hbWUgJiYgKCh0aGlzVG9wLXNpZGViYXIuc2Nyb2xsVG9wKTwwIHx8IHRoaXNUb3A+d2luZG93LmlubmVySGVpZ2h0KSl7XG5cdFx0XHRBcHBTdG9yZS5zZXRQb3NpdGlvbih0aGlzVG9wKTtcdFxuXHRcdH1cblxuXHR9LFxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHR2YXIgbWl4ICAgICAgID0gdGhpcy5wcm9wcy5taXgsXG5cdFx0XHRnb1RvTWl4aW4gPSB0aGlzLnByb3BzLmdvVG9NaXhpbixcblx0XHRcdHR5cGUgICAgICA9IHRoaXMucHJvcHMudHlwZSxcblx0XHRcdGFjdGl2ZSAgICA9IHRoaXMucHJvcHMuYWN0aXZlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSByZWY9eyhyZWYpID0+IHRoaXMubGlua05hbWUgPSByZWZ9PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e21peC5uYW1lID09IGFjdGl2ZSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e2dvVG9NaXhpbi5iaW5kKHRoaXMsbWl4Lm5hbWUpfT5cblx0XHRcdFx0XHR7dHlwZSA9PSBcIm1peGluXCIgJiYgPHNwYW4+QGluY2x1ZGU8L3NwYW4+fSB7bWl4Lm5hbWV9e3R5cGUgPT0gXCJmdW5jdGlvblwiICYmIDxzcGFuPigpOzwvc3Bhbj59XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvbGk+XG5cdFx0KVxuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU0JMaW5rOyJdfQ==
},{"../../../flux/appActions":11,"../../../flux/appStore":13}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SBLink = require('./SBLink');

var _SBLink2 = _interopRequireDefault(_SBLink);

// Ancestors - Docs
// Decendents - SBLink

var Sidebar = React.createClass({
	displayName: 'Sidebar',

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var sidebar = document.getElementById('sidebar');
		sidebar.scrollTop = nextProps.activeP - 120;
	},

	render: function render() {
		var _this = this;

		var inc = this.props.includes,
		    goToMixin = this.props.goToMixin,
		    active = this.props.active,
		    filterTerm = this.props.filterTerm;

		return React.createElement(
			'nav',
			{ className: 'page-nav scrollbar', id: 'sidebar', ref: function (ref) {
					return _this.sideBar = ref;
				} },
			React.createElement(
				'ul',
				{ className: 'vertical-nav' },
				this.props.order.map(function (ord) {
					return React.createElement(_SBLink2['default'], { ord: ord, includes: inc, active: active, goToMixin: goToMixin, filterTerm: filterTerm });
				})
			)
		);
	}
});

exports['default'] = Sidebar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2RvY3Mvc2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3NCQUFtQixVQUFVOzs7Ozs7O0FBSzdCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUUvQiwwQkFBeUIsRUFBQyxtQ0FBQyxTQUFTLEVBQUU7QUFDckMsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRCxTQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0VBQzVDOztBQUVELE9BQU0sRUFBQSxrQkFBRzs7O0FBQ1IsTUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO01BQ25DLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7TUFDakMsTUFBTSxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtNQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7O0FBRXBDLFNBQ0M7O0tBQUssU0FBUyxFQUFDLG9CQUFvQixFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRztZQUFLLE1BQUssT0FBTyxHQUFHLEdBQUc7S0FBQSxBQUFDO0dBQ2pGOztNQUFJLFNBQVMsRUFBQyxjQUFjO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBQztBQUNsQyxZQUFPLDJDQUFRLEdBQUcsRUFBRSxHQUFHLEFBQUMsRUFBQyxRQUFRLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEFBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxBQUFDLEdBQUUsQ0FBQTtLQUN2RyxDQUFDO0lBQ0U7R0FDQSxDQUNOO0VBQ0Q7Q0FDRCxDQUFDLENBQUM7O3FCQUVZLE9BQU8iLCJmaWxlIjoiL1VzZXJzL2RhbmllbC5vc2Jvcm5lL3JlcG9zL3dlYnNpdGUvYXBwL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyL1NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU0JMaW5rIGZyb20gJy4vU0JMaW5rJztcblxuLy8gQW5jZXN0b3JzIC0gRG9jc1xuLy8gRGVjZW5kZW50cyAtIFNCTGlua1xuXG52YXIgU2lkZWJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcblx0XHR2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG5cdFx0c2lkZWJhci5zY3JvbGxUb3AgPSBuZXh0UHJvcHMuYWN0aXZlUCAtIDEyMDtcblx0fSxcblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGluYyAgICAgICAgPSB0aGlzLnByb3BzLmluY2x1ZGVzLFxuXHRcdFx0Z29Ub01peGluICA9IHRoaXMucHJvcHMuZ29Ub01peGluLFxuXHRcdFx0YWN0aXZlICAgICA9IHRoaXMucHJvcHMuYWN0aXZlLFxuXHRcdFx0ZmlsdGVyVGVybSA9IHRoaXMucHJvcHMuZmlsdGVyVGVybTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cInBhZ2UtbmF2IHNjcm9sbGJhclwiIGlkPVwic2lkZWJhclwiIHJlZj17KHJlZikgPT4gdGhpcy5zaWRlQmFyID0gcmVmfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInZlcnRpY2FsLW5hdlwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLm9yZGVyLm1hcChmdW5jdGlvbihvcmQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxTQkxpbmsgb3JkPXtvcmR9IGluY2x1ZGVzPXtpbmN9IGFjdGl2ZT17YWN0aXZlfSBnb1RvTWl4aW49e2dvVG9NaXhpbn0gZmlsdGVyVGVybT17ZmlsdGVyVGVybX0vPlxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXX0=
},{"./SBLink":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _fluxAppActions = require('../../flux/appActions');

var _fluxAppActions2 = _interopRequireDefault(_fluxAppActions);

var Header = React.createClass({
	displayName: "Header",

	filter: function filter() {
		var val = this.refs.search.getDOMNode().value;
		_fluxAppActions2["default"].filter(val);
	},

	render: function render() {
		return React.createElement("input", { className: "text", ref: "search", onKeyUp: this.filter, placeholder: "Search docs" });
	}
});

exports["default"] = Header;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OEJBQXVCLHVCQUF1Qjs7OztBQUU5QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFOUIsT0FBTSxFQUFBLGtCQUFFO0FBQ1AsTUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzlDLDhCQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN2Qjs7QUFFRCxPQUFNLEVBQUMsa0JBQUc7QUFDVCxTQUNDLCtCQUFPLFNBQVMsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQUFBQyxFQUFDLFdBQVcsRUFBQyxhQUFhLEdBQUUsQ0FDdEY7RUFDRDtDQUNELENBQUMsQ0FBQzs7cUJBRVksTUFBTSIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vZmx1eC9hcHBBY3Rpb25zJztcblxubGV0IEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRmaWx0ZXIoKXtcblx0XHR2YXIgdmFsID0gdGhpcy5yZWZzLnNlYXJjaC5nZXRET01Ob2RlKCkudmFsdWU7XG5cdFx0QXBwQWN0aW9ucy5maWx0ZXIodmFsKTtcblx0fSxcblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwidGV4dFwiIHJlZj1cInNlYXJjaFwiIG9uS2V5VXA9e3RoaXMuZmlsdGVyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBkb2NzXCIvPlxuXHRcdClcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0=
},{"../../flux/appActions":11}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsDocsDocs = require('./components/docs/Docs');

var _componentsDocsDocs2 = _interopRequireDefault(_componentsDocsDocs);

var _componentsHeaderHeader = require('./components/header/header');

var _componentsHeaderHeader2 = _interopRequireDefault(_componentsHeaderHeader);

var _componentsHeaderThemeSwitch = require('./components/header/themeSwitch');

var _componentsHeaderThemeSwitch2 = _interopRequireDefault(_componentsHeaderThemeSwitch);

// Component Tree
// ===========================================

// -- Header
// -- Docs
//    |-- Sidebar
//        |-- SBLink
//    |
//    |-- List
//        |-- MixinGroup
//            |-- MixinItem
//    	      	  |-- MixinTabs

React.render(React.createElement(_componentsHeaderHeader2['default'], null), document.getElementById('search-docs'));

React.render(React.createElement(_componentsDocsDocs2['default'], null), document.getElementById('documentation'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mYWtlXzYxYmVlYjA3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7a0NBQWlCLHdCQUF3Qjs7OztzQ0FDdEIsNEJBQTRCOzs7OzJDQUN2QixpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6RCxLQUFLLENBQUMsTUFBTSxDQUNWLDhEQUFTLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FDekMsQ0FBQzs7QUFFRixLQUFLLENBQUMsTUFBTSxDQUNWLDBEQUFPLEVBQ0wsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FDM0MsQ0FBQyIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvZmFrZV82MWJlZWIwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2NzIGZyb20gJy4vY29tcG9uZW50cy9kb2NzL0RvY3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgVGhlbWVTd2l0Y2ggZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci90aGVtZVN3aXRjaCc7XG5cblxuLy8gQ29tcG9uZW50IFRyZWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gLS0gSGVhZGVyXG4vLyAtLSBEb2NzXG4vLyAgICB8LS0gU2lkZWJhclxuLy8gICAgICAgIHwtLSBTQkxpbmtcbi8vICAgIHxcbi8vICAgIHwtLSBMaXN0XG4vLyAgICAgICAgfC0tIE1peGluR3JvdXBcbi8vICAgICAgICAgICAgfC0tIE1peGluSXRlbVxuLy8gICAgXHQgICAgICBcdCAgfC0tIE1peGluVGFic1xuXG5SZWFjdC5yZW5kZXIoXG4gXHQ8SGVhZGVyLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1kb2NzJylcbik7XG5cblJlYWN0LnJlbmRlcihcbiBcdDxEb2NzLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50YXRpb24nKVxuKTtcbiJdfQ==
},{"./components/docs/Docs":1,"./components/header/header":8,"./components/header/themeSwitch":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _appDispatchers = require("./appDispatchers");

var _appDispatchers2 = _interopRequireDefault(_appDispatchers);

var AppActions = {

	filter: function filter(term) {
		_appDispatchers2['default'].handleFilter({
			type: 'filter',
			term: term
		});
	},

	active: function active(name) {
		_appDispatchers2['default'].handleActive({
			type: 'active',
			name: name
		});
	},

	jumpToTop: function jumpToTop(top) {
		_appDispatchers2['default'].handleJump({
			type: 'jump',
			pos: top
		});
	}

};

exports['default'] = AppActions;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mbHV4L2FwcEFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OEJBQTBCLGtCQUFrQjs7OztBQUU1QyxJQUFJLFVBQVUsR0FBRzs7QUFFaEIsT0FBTSxFQUFHLGdCQUFTLElBQUksRUFBQztBQUN0Qiw4QkFBYyxZQUFZLENBQUM7QUFDMUIsT0FBSSxFQUFHLFFBQVE7QUFDZixPQUFJLEVBQUcsSUFBSTtHQUNYLENBQUMsQ0FBQztFQUNIOztBQUVELE9BQU0sRUFBRyxnQkFBUyxJQUFJLEVBQUM7QUFDdEIsOEJBQWMsWUFBWSxDQUFDO0FBQzFCLE9BQUksRUFBRyxRQUFRO0FBQ2YsT0FBSSxFQUFHLElBQUk7R0FDWCxDQUFDLENBQUM7RUFDSDs7QUFFRCxVQUFTLEVBQUcsbUJBQVMsR0FBRyxFQUFDO0FBQ3hCLDhCQUFjLFVBQVUsQ0FBQztBQUN4QixPQUFJLEVBQUcsTUFBTTtBQUNiLE1BQUcsRUFBRyxHQUFHO0dBQ1QsQ0FBQyxDQUFDO0VBQ0g7O0NBRUQsQ0FBQTs7cUJBRWMsVUFBVSIsImZpbGUiOiIvVXNlcnMvZGFuaWVsLm9zYm9ybmUvcmVwb3Mvd2Vic2l0ZS9hcHAvZmx1eC9hcHBBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSBcIi4vYXBwRGlzcGF0Y2hlcnNcIjtcblxubGV0IEFwcEFjdGlvbnMgPSB7XG5cblx0ZmlsdGVyIDogZnVuY3Rpb24odGVybSl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVGaWx0ZXIoe1xuXHRcdFx0dHlwZSA6ICdmaWx0ZXInLFxuXHRcdFx0dGVybSA6IHRlcm1cblx0XHR9KTtcblx0fSxcblxuXHRhY3RpdmUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGl2ZSh7XG5cdFx0XHR0eXBlIDogJ2FjdGl2ZScsXG5cdFx0XHRuYW1lIDogbmFtZVxuXHRcdH0pO1xuXHR9LFxuXG5cdGp1bXBUb1RvcCA6IGZ1bmN0aW9uKHRvcCl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVKdW1wKHtcblx0XHRcdHR5cGUgOiAnanVtcCcsXG5cdFx0XHRwb3MgOiB0b3Bcblx0XHR9KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnM7Il19
},{"./appDispatchers":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Dispatcher = require("../../node_modules/flux/dist/flux").Dispatcher;
var assign = require("../../node_modules/object-assign/index");

var AppDispatcher = assign(new Dispatcher(), {

	handleFilter: function handleFilter(payload) {
		this.dispatch(payload);
	},

	handleActive: function handleActive(payload) {
		this.dispatch(payload);
	},

	handleJump: function handleJump(payload) {
		this.dispatch(payload);
	}

});

exports["default"] = AppDispatcher;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mbHV4L2FwcERpc3BhdGNoZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQzNFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOztBQUVqRSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUUsRUFBQzs7QUFFM0MsYUFBWSxFQUFDLHNCQUFDLE9BQU8sRUFBQztBQUNyQixNQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZCOztBQUVELGFBQVksRUFBQyxzQkFBQyxPQUFPLEVBQUM7QUFDckIsTUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUN2Qjs7QUFFRCxXQUFVLEVBQUMsb0JBQUMsT0FBTyxFQUFDO0FBQ25CLE1BQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDdkI7O0NBRUQsQ0FBQyxDQUFDOztxQkFHWSxhQUFhIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mbHV4L2FwcERpc3BhdGNoZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvZmx1eC9kaXN0L2ZsdXhcIikuRGlzcGF0Y2hlcjtcbmNvbnN0IGFzc2lnbiA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleFwiKTtcblxubGV0IEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IERpc3BhdGNoZXIoKSx7XG5cdFxuXHRoYW5kbGVGaWx0ZXIgKHBheWxvYWQpe1xuXHRcdHRoaXMuZGlzcGF0Y2gocGF5bG9hZCk7XG5cdH0sXG5cblx0aGFuZGxlQWN0aXZlIChwYXlsb2FkKXtcblx0XHR0aGlzLmRpc3BhdGNoKHBheWxvYWQpO1xuXHR9LFxuXG5cdGhhbmRsZUp1bXAgKHBheWxvYWQpe1xuXHRcdHRoaXMuZGlzcGF0Y2gocGF5bG9hZCk7XG5cdH1cblxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGF0Y2hlcjsiXX0=
},{"../../node_modules/flux/dist/flux":17,"../../node_modules/object-assign/index":18}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _appDispatchers = require("./appDispatchers");

var _appDispatchers2 = _interopRequireDefault(_appDispatchers);

var _node_modulesObjectAssignIndex = require("../../node_modules/object-assign/index");

var _node_modulesObjectAssignIndex2 = _interopRequireDefault(_node_modulesObjectAssignIndex);

var EventEmitter = require('events').EventEmitter;

var active = "gridClasses";
var activePosition = 0;

var AppStore = (0, _node_modulesObjectAssignIndex2["default"])({}, EventEmitter.prototype, {

	setPosition: function setPosition(pos) {
		activePosition = pos;
	},

	getActive: function getActive() {
		return active;
	},

	getActivePosition: function getActivePosition() {
		return activePosition;
	},

	emitChange: function emitChange(event, data) {
		this.emit(event, data);
	},

	addChangeListener: function addChangeListener(event, callback) {
		this.setMaxListeners(Infinity);
		this.on(event, callback);
	},

	removeChangeListener: function removeChangeListener(event, callback) {
		this.removeListener(event, callback);
	}

});

_appDispatchers2["default"].register(function (payload) {
	if (payload.type == 'filter') {
		AppStore.emitChange(payload.type, payload.term);
	}
	if (payload.type == 'active') {
		AppStore.emitChange(payload.type, payload.name);
	}
	if (payload.type == 'jump') {
		AppStore.emitChange(payload.type, payload.pos);
	}
});

exports["default"] = AppStore;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mbHV4L2FwcFN0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzhCQUEwQixrQkFBa0I7Ozs7NkNBQ3pCLHdDQUF3Qzs7OztBQUUzRCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDOztBQUVwRCxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDM0IsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztBQUV2QixJQUFJLFFBQVEsR0FBRyxnREFBTyxFQUFFLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBQzs7QUFFaEQsWUFBVyxFQUFDLHFCQUFDLEdBQUcsRUFBQztBQUNoQixnQkFBYyxHQUFJLEdBQUcsQ0FBQztFQUN0Qjs7QUFFRCxVQUFTLEVBQUMscUJBQUU7QUFDWCxTQUFPLE1BQU0sQ0FBQztFQUNkOztBQUVELGtCQUFpQixFQUFDLDZCQUFFO0FBQ25CLFNBQU8sY0FBYyxDQUFDO0VBQ3RCOztBQUVELFdBQVUsRUFBQyxvQkFBQyxLQUFLLEVBQUMsSUFBSSxFQUFFO0FBQ3BCLE1BQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pCOztBQUVELGtCQUFpQixFQUFDLDJCQUFDLEtBQUssRUFBQyxRQUFRLEVBQUU7QUFDbEMsTUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixNQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQztFQUMzQjs7QUFFRCxxQkFBb0IsRUFBQyw4QkFBQyxLQUFLLEVBQUMsUUFBUSxFQUFFO0FBQ2xDLE1BQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ3ZDOztDQUVELENBQUMsQ0FBQzs7QUFFSCw0QkFBYyxRQUFRLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDekMsS0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztBQUMzQixVQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9DO0FBQ0QsS0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztBQUMzQixVQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9DO0FBQ0QsS0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBQztBQUN6QixVQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzlDO0NBQ0QsQ0FBQyxDQUFDOztxQkFFWSxRQUFRIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWwub3Nib3JuZS9yZXBvcy93ZWJzaXRlL2FwcC9mbHV4L2FwcFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSBcIi4vYXBwRGlzcGF0Y2hlcnNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4XCI7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIGFjdGl2ZSA9IFwiZ3JpZENsYXNzZXNcIjtcbnZhciBhY3RpdmVQb3NpdGlvbiA9IDA7XG5cbmxldCBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSx7XG5cblx0c2V0UG9zaXRpb24gKHBvcyl7XG5cdFx0YWN0aXZlUG9zaXRpb24gID0gcG9zO1xuXHR9LFxuXG5cdGdldEFjdGl2ZSAoKXtcblx0XHRyZXR1cm4gYWN0aXZlO1xuXHR9LFxuXG5cdGdldEFjdGl2ZVBvc2l0aW9uICgpe1xuXHRcdHJldHVybiBhY3RpdmVQb3NpdGlvbjtcblx0fSxcblxuXHRlbWl0Q2hhbmdlIChldmVudCxkYXRhKSB7XG5cdCAgICB0aGlzLmVtaXQoZXZlbnQsZGF0YSk7XG5cdH0sXG5cblx0YWRkQ2hhbmdlTGlzdGVuZXIgKGV2ZW50LGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5zZXRNYXhMaXN0ZW5lcnMoSW5maW5pdHkpO1xuXHQgICAgdGhpcy5vbihldmVudCxjYWxsYmFjayk7XG5cdH0sXG5cblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXIgKGV2ZW50LGNhbGxiYWNrKSB7XG5cdCAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LGNhbGxiYWNrKTtcblx0fVxuXG59KTtcblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbiAocGF5bG9hZCkge1xuXHRpZihwYXlsb2FkLnR5cGUgPT0gJ2ZpbHRlcicpe1xuXHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UocGF5bG9hZC50eXBlLHBheWxvYWQudGVybSk7XG5cdH1cblx0aWYocGF5bG9hZC50eXBlID09ICdhY3RpdmUnKXtcblx0XHRBcHBTdG9yZS5lbWl0Q2hhbmdlKHBheWxvYWQudHlwZSxwYXlsb2FkLm5hbWUpO1xuXHR9XG5cdGlmKHBheWxvYWQudHlwZSA9PSAnanVtcCcpe1xuXHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UocGF5bG9hZC50eXBlLHBheWxvYWQucG9zKTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlO1xuXG5cbiJdfQ==
},{"../../node_modules/object-assign/index":18,"./appDispatchers":12,"events":16}],14:[function(require,module,exports){
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
},{"../../node_modules/superagent/lib/client":20}],15:[function(require,module,exports){

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

},{}],16:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],17:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Flux"] = factory();
	else
		root["Flux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	module.exports.Dispatcher = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	var invariant = __webpack_require__(2);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ }
/******/ ])
});
;
},{}],18:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],19:[function(require,module,exports){

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
},{}],20:[function(require,module,exports){
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

},{"emitter":15,"reduce":19}]},{},[10])