!function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!o&&c)return c(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../services/apiService"),s=i(r),a=e("./Sidebar"),o=i(a),c=e("./List"),l=i(c),u=e("../../flux/appActions"),h=(i(u),e("../../flux/appStore")),p=i(h),d=React.createClass({displayName:"Docs",getInitialState:function(){return{includes:{},order:[],stylePages:[],activeMix:p["default"].getActive()}},goToMixin:function(e){var t=document.getElementById(e),n=document.getElementById("docs"),i=t.offsetTop;n.scrollTop=i},activeHandler:function(e){this.setState({activeMix:e,activePosition:p["default"].getActivePosition()})},componentDidMount:function(){p["default"].addChangeListener("active",this.activeHandler),this.api=new s["default"],this.api.request("/api/includes.json").end(function(e,t){this.setState({includes:t.body.includes,order:t.body.includesOrder,stylePages:t.body.stylepages})}.bind(this))},render:function(){var e=this.state.order,t=this.state.includes,n=this.state.activeMix,i=this.state.activePosition;return React.createElement("div",{id:"docs-wrapper"},React.createElement(o["default"],{order:e,includes:t,goToMixin:this.goToMixin,active:n,activeP:i}),React.createElement(l["default"],{order:e,includes:t,active:n}))}});n["default"]=d,t.exports=n["default"]},{"../../flux/appActions":10,"../../flux/appStore":12,"../../services/apiService":13,"./List":2,"./Sidebar":7}],2:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./MixinGroup"),s=i(r),a=e("../../flux/appActions"),o=(i(a),React.createClass({displayName:"List",getInitialState:function(){return{scrollPos:0}},componentDidMount:function(){var e=this.docs.getDOMNode();e.onscroll=function(e){this.setState({scrollPos:e.srcElement.scrollTop})}.bind(this)},render:function(){var e=this,t=this.props.includes,n=this.props.active,i=this.state.scrollPos;return React.createElement("div",{id:"docs",ref:function(t){return e.docs=t}},this.props.order.map(function(e){return React.createElement(s["default"],{ord:e,includes:t,active:n,scroll:i})}))}}));n["default"]=o,t.exports=n["default"]},{"../../flux/appActions":10,"./MixinGroup":3}],3:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./MixinTabs"),s=(i(r),e("./MixinItem")),a=i(s),o=e("../../flux/appStore"),c=i(o),l=React.createClass({displayName:"MixinGroup",getInitialState:function(){return{filterTerm:""}},componentDidMount:function(){c["default"].addChangeListener("filter",this.filterHandler)},filterHandler:function(e){this.setState({filterTerm:e.toLowerCase()})},render:function(){var e=this.props.ord,t=this.props.includes,n=this.props.active,i=this.props.scroll,r=t[e].mixins,s=t[e].functions,o=t[e].title,c=t[e].searchTerms,l=t[e].intro;return React.createElement("div",null,c.toLowerCase().indexOf(this.state.filterTerm)>-1&&React.createElement("div",{className:"include-block",id:e},React.createElement("h1",null,{title:o}),l&&React.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),React.createElement("hr",null),r.map(function(e){return React.createElement(a["default"],{data:e,type:"mixin",active:n,scroll:i})}),s&&s.map(function(e){return React.createElement(a["default"],{data:e,type:"func",active:n,scroll:i})})))}});n["default"]=l,t.exports=n["default"]},{"../../flux/appStore":12,"./MixinItem":4,"./MixinTabs":5}],4:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./MixinTabs"),s=i(r),a=e("../../flux/appStore"),o=(i(a),e("../../flux/appActions")),c=i(o),l=e("../../flux/appDispatchers"),u=(i(l),React.createClass({displayName:"MixinItem",componentWillReceiveProps:function(e){if(this.mix){var t=this.mix.getDOMNode(),n=this.props.data.name,i=this.props.active,r=window.innerHeight/1.5,s=t.getBoundingClientRect(),a=s.top+s.height,o=s.top;n!=i&&r>o&&a>r&&c["default"].active(n)}},render:function(){var e=this,t=this.props.data;return React.createElement("div",{className:this.props.type,id:t.name,ref:function(t){return e.mix=t}},React.createElement("h2",{className:"red"},React.createElement("span",{className:"leckerli-one"},"@include")," ",t.name,";"),React.createElement("div",{dangerouslySetInnerHTML:{__html:t.desc}}),t.args>-1&&React.createElement("div",null,React.createElement("h6",null,"Arguments"),React.createElement("p",null,"This mixin takes ",React.createElement("span",null,t.args)," argument",t.args>1&&"s","."),React.createElement("div",{dangerouslySetInnerHTML:{__html:t.params}})),React.createElement("h6",null,"Usage"),React.createElement(s["default"],{data:t}),t.demo&&React.createElement("div",null,React.createElement("h6",null,"Example"),React.createElement("div",{dangerouslySetInnerHTML:{__html:t.demo}})),t.markup&&React.createElement("div",{className:"code html-code"},React.createElement("header",null,React.createElement("ul",null,React.createElement("li",{className:"active"},React.createElement("a",null,"Example HTML")))),React.createElement("div",{className:"code-body scrollbar html",dangerouslySetInnerHTML:{__html:t.markup}})),t.links&&React.createElement("div",null,React.createElement("h6",null,t.linksTitle?t.linksTitle+" :":"See also :"),React.createElement("ul",{className:"mixin-links"},t.links.map(function(e){return React.createElement("li",null,React.createElement("a",{href:"#"+e},"@include "+e))}))),React.createElement("hr",null))}}));n["default"]=u,t.exports=n["default"]},{"../../flux/appActions":10,"../../flux/appDispatchers":11,"../../flux/appStore":12,"./MixinTabs":5}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=React.createClass({displayName:"MixinTabs",getInitialState:function(){return{active:"include"}},switchTabs:function(e){this.setState({active:e})},render:function(){var e=this.props.data,t=this.state.active;return React.createElement("div",{className:"code"},React.createElement("header",null,React.createElement("ul",null,React.createElement("li",{className:"include"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"include")},"@Include")),React.createElement("li",{className:"mixin"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"mixin")},"@Mixin")),React.createElement("li",{className:"output"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"output")},"Output")))),React.createElement("div",{className:"output"==t?"css code-body scrollbar":"scss code-body scrollbar"},React.createElement("div",{dangerouslySetInnerHTML:{__html:e[this.state.active]}})))}});n["default"]=i,t.exports=n["default"]},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../flux/appStore"),r=React.createClass({displayName:"SBLink",getInitialState:function(){return{filterTerm:""}},componentDidMount:function(){i.addChangeListener("filter",this.filterHandler)},filterHandler:function(e){this.setState({filterTerm:e.toLowerCase()})},render:function(){var e=this.props.ord,t=this.props.includes,n=this.props.goToMixin,i=this.props.active;return React.createElement("li",null,t[e].searchTerms.toLowerCase().indexOf(this.state.filterTerm)>-1&&React.createElement("div",null,React.createElement("a",{onClick:n.bind(this,e)},t[e].title),React.createElement("ul",{className:"subnav"},t[e].mixins.map(function(e){return React.createElement(s,{mix:e,goToMixin:n,active:i})}))))}}),s=React.createClass({displayName:"LinkTemplate",componentWillReceiveProps:function(e){var t=this.linkName.getDOMNode(),n=t.getBoundingClientRect().top,r=document.getElementById("sidebar");e.active==this.props.mix.name&&(n-r.scrollTop<0||n>window.innerHeight)&&i.setPosition(n)},render:function(){var e=this,t=this.props.mix,n=this.props.goToMixin,i=this.props.active;return React.createElement("li",{ref:function(t){return e.linkName=t}},React.createElement("a",{className:t.name==i?"active":"",onClick:n.bind(this,t.name)},React.createElement("span",null,"@include")," ",t.name))}});n["default"]=r,t.exports=n["default"]},{"../../flux/appStore":12}],7:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./SBLink"),s=i(r),a=React.createClass({displayName:"Sidebar",componentWillReceiveProps:function(e){this.sideBar.scrollTop=e.activeP},render:function(){var e=this,t=this.props.includes,n=this.props.goToMixin,i=this.props.active;return React.createElement("nav",{className:"page-nav scrollbar",id:"sidebar",ref:function(t){return e.sideBar=t}},React.createElement("ul",{className:"vertical-nav"},this.props.order.map(function(e){return React.createElement(s["default"],{ord:e,includes:t,goToMixin:n,active:i})})))}});n["default"]=a,t.exports=n["default"]},{"./SBLink":6}],8:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../flux/appActions"),s=i(r),a=React.createClass({displayName:"Header",filter:function(){var e=this.refs.search.getDOMNode().value;s["default"].filter(e)},render:function(){return React.createElement("input",{className:"text",ref:"search",onKeyUp:this.filter,placeholder:"Search docs"})}});n["default"]=a,t.exports=n["default"]},{"../../flux/appActions":10}],9:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=e("./components/docs/Docs"),s=i(r),a=e("./components/header/header"),o=i(a);React.render(React.createElement(o["default"],null),document.getElementById("search-docs")),React.render(React.createElement(s["default"],null),document.getElementById("documentation"))},{"./components/docs/Docs":1,"./components/header/header":8}],10:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./appDispatchers"),s=i(r),a={filter:function(e){s["default"].handleFilter({type:"filter",term:e})},active:function(e){s["default"].handleActive({type:"active",name:e})}};n["default"]=a,t.exports=n["default"]},{"./appDispatchers":11}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../node_modules/flux/dist/flux").Dispatcher,r=e("../../node_modules/object-assign/index"),s=r(new i,{handleFilter:function(e){this.dispatch(e)},handleActive:function(e){this.dispatch(e)}});n["default"]=s,t.exports=n["default"]},{"../../node_modules/flux/dist/flux":14,"../../node_modules/object-assign/index":16}],12:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./appDispatchers"),s=i(r),a=e("../../node_modules/object-assign/index"),o=i(a),c=e("events").EventEmitter,l="googleFont",u=0,h=(0,o["default"])({},c.prototype,{setPosition:function(e){u=e},getActive:function(){return l},getActivePosition:function(){return u},emitChange:function(e,t){this.emit(e,t)},addChangeListener:function(e,t){this.setMaxListeners(1/0),this.on(e,t)},removeChangeListener:function(e,t){this.removeListener(e,t)}});s["default"].register(function(e){"filter"==e.type&&h.emitChange(e.type,e.term),"active"==e.type&&h.emitChange(e.type,e.name)}),n["default"]=h,t.exports=n["default"]},{"../../node_modules/object-assign/index":16,"./appDispatchers":11,events:15}],13:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("../../node_modules/superagent/lib/client"),o=i(a),c=function(){function e(){r(this,e)}return s(e,[{key:"request",value:function(e){return o["default"].get(e)}}]),e}();n["default"]=c,t.exports=n["default"]},{"../../node_modules/superagent/lib/client":17}],14:[function(e,t,n){!function(e,i){"object"==typeof n&&"object"==typeof t?t.exports=i():"function"==typeof define&&define.amd?define(i):"object"==typeof n?n.Flux=i():e.Flux=i()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports.Dispatcher=n(1)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(2),s="ID_",a=function(){function e(){i(this,e),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return e.prototype.register=function(e){var t=s+this._lastID++;return this._callbacks[t]=e,t},e.prototype.unregister=function(e){this._callbacks[e]?void 0:r(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",e),delete this._callbacks[e]},e.prototype.waitFor=function(e){this._isDispatching?void 0:r(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var t=0;t<e.length;t++){var n=e[t];this._isPending[n]?this._isHandled[n]?void 0:r(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(this._callbacks[n]?void 0:r(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this._invokeCallback(n))}},e.prototype.dispatch=function(e){this._isDispatching?r(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."):void 0,this._startDispatching(e);try{for(var t in this._callbacks)this._isPending[t]||this._invokeCallback(t)}finally{this._stopDispatching()}},e.prototype.isDispatching=function(){return this._isDispatching},e.prototype._invokeCallback=function(e){this._isPending[e]=!0,this._callbacks[e](this._pendingPayload),this._isHandled[e]=!0},e.prototype._startDispatching=function(e){for(var t in this._callbacks)this._isPending[t]=!1,this._isHandled[t]=!1;this._pendingPayload=e,this._isDispatching=!0},e.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},e}();e.exports=a},function(e,t,n){"use strict";var i=function(e,t,n,i,r,s,a,o){if(void 0===t)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,i,r,s,a,o],u=0;c=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[u++]}))}throw c.framesToPop=1,c}};e.exports=i}])})},{}],15:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function s(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!s(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,s,c,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],o(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,s=new Array(i-1),c=1;i>c;c++)s[c-1]=arguments[c];n.apply(this,s)}else if(a(n)){for(i=arguments.length,s=new Array(i-1),c=1;i>c;c++)s[c-1]=arguments[c];for(l=n.slice(),i=l.length,c=0;i>c;c++)l[c].apply(this,s)}return!0},i.prototype.addListener=function(e,t){var n;if(!r(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned){var n;n=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},i.prototype.removeListener=function(e,t){var n,i,s,o;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(o=s;o-->0;)if(n[o]===t||n[o].listener&&n[o].listener===t){i=o;break}if(0>i)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?r(e._events[t])?1:e._events[t].length:0}},{}],16:[function(e,t,n){"use strict";function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=Object.assign||function(e,t){for(var n,a,o=i(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)r.call(n,l)&&(o[l]=n[l]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(n);for(var u=0;u<a.length;u++)s.call(n,a[u])&&(o[a[u]]=n[a[u]])}}return o}},{}],17:[function(e,t,n){function i(){}function r(e){var t={}.toString.call(e);switch(t){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function s(e){return e===Object(e)}function a(e){if(!s(e))return e;var t=[];for(var n in e)null!=e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function o(e){for(var t,n,i={},r=e.split("&"),s=0,a=r.length;a>s;++s)n=r[s],t=n.split("="),i[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);return i}function c(e){var t,n,i,r,s=e.split(/\r?\n/),a={};s.pop();for(var o=0,c=s.length;c>o;++o)n=s[o],t=n.indexOf(":"),i=n.slice(0,t).toLowerCase(),r=_(n.slice(t+1)),a[i]=r;return a}function l(e){return e.split(/ *; */).shift()}function u(e){return m(e.split(/ *; */),function(e,t){var n=t.split(/ *= */),i=n.shift(),r=n.shift();return i&&r&&(e[i]=r),e},{})}function h(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=c(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function p(e,t){var n=this;f.call(this),this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new h(n)}catch(i){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=i,n.callback(e)}if(n.emit("response",t),e)return n.callback(e,t);if(t.status>=200&&t.status<300)return n.callback(e,t);var r=new Error(t.statusText||"Unsuccessful HTTP response");r.original=e,r.response=t,r.status=t.status,n.callback(r,t)})}function d(e,t){return"function"==typeof t?new p("GET",e).end(t):1==arguments.length?new p("GET",e):new p(e,t)}var f=e("emitter"),m=e("reduce"),v="undefined"==typeof window?this||self:window;d.getXHR=function(){if(!(!v.XMLHttpRequest||v.location&&"file:"==v.location.protocol&&v.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}return!1};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};d.serializeObject=a,d.parseString=o,d.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},d.serialize={"application/x-www-form-urlencoded":a,"application/json":JSON.stringify},d.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},h.prototype.get=function(e){return this.header[e.toLowerCase()]},h.prototype.setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=l(t);var n=u(t);for(var i in n)this[i]=n[i]},h.prototype.parseBody=function(e){var t=d.parse[this.type];return t&&e&&(e.length||e instanceof Object)?t(e):null},h.prototype.setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=4==t||5==t?this.toError():!1,this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},h.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,i="cannot "+t+" "+n+" ("+this.status+")",r=new Error(i);return r.status=this.status,r.method=t,r.url=n,r},d.Response=h,f(p.prototype),p.prototype.use=function(e){return e(this),this},p.prototype.timeout=function(e){return this._timeout=e,this},p.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},p.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},p.prototype.set=function(e,t){if(s(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},p.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},p.prototype.getHeader=function(e){return this._header[e.toLowerCase()]},p.prototype.type=function(e){return this.set("Content-Type",d.types[e]||e),this},p.prototype.accept=function(e){return this.set("Accept",d.types[e]||e),this},p.prototype.auth=function(e,t){var n=btoa(e+":"+t);return this.set("Authorization","Basic "+n),this},p.prototype.query=function(e){return"string"!=typeof e&&(e=a(e)),e&&this._query.push(e),this},p.prototype.field=function(e,t){return this._formData||(this._formData=new v.FormData),this._formData.append(e,t),this},p.prototype.attach=function(e,t,n){return this._formData||(this._formData=new v.FormData),this._formData.append(e,t,n),this},p.prototype.send=function(e){var t=s(e),n=this.getHeader("Content-Type");if(t&&s(this._data))for(var i in e)this._data[i]=e[i];else"string"==typeof e?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+e:e:this._data=(this._data||"")+e):this._data=e;return!t||r(e)?this:(n||this.type("json"),this)},p.prototype.callback=function(e,t){var n=this._callback;this.clearTimeout(),n(e,t)},p.prototype.crossDomainError=function(){var e=new Error("Origin is not allowed by Access-Control-Allow-Origin");e.crossDomain=!0,this.callback(e)},p.prototype.timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},p.prototype.withCredentials=function(){return this._withCredentials=!0,this},p.prototype.end=function(e){var t=this,n=this.xhr=d.getXHR(),s=this._query.join("&"),a=this._timeout,o=this._formData||this._data;this._callback=e||i,n.onreadystatechange=function(){if(4==n.readyState){var e;try{e=n.status}catch(i){e=0}if(0==e){if(t.timedout)return t.timeoutError();if(t.aborted)return;return t.crossDomainError()}t.emit("end")}};var c=function(e){e.total>0&&(e.percent=e.loaded/e.total*100),t.emit("progress",e)};this.hasListeners("progress")&&(n.onprogress=c);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=c)}catch(l){}if(a&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},a)),s&&(s=d.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof o&&!r(o)){var u=this.getHeader("Content-Type"),h=d.serialize[u?u.split(";")[0]:""];h&&(o=h(o))}for(var p in this.header)null!=this.header[p]&&n.setRequestHeader(p,this.header[p]);return this.emit("request",this),n.send(o),this},p.prototype.then=function(e,t){return this.end(function(n,i){n?t(n):e(i)})},d.Request=p,d.get=function(e,t,n){var i=d("GET",e);return"function"==typeof t&&(n=t,t=null),t&&i.query(t),n&&i.end(n),i},d.head=function(e,t,n){var i=d("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&i.send(t),n&&i.end(n),i},d.del=function(e,t){var n=d("DELETE",e);return t&&n.end(t),n},d.patch=function(e,t,n){var i=d("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&i.send(t),n&&i.end(n),i},d.post=function(e,t,n){var i=d("POST",e);return"function"==typeof t&&(n=t,t=null),t&&i.send(t),n&&i.end(n),i},d.put=function(e,t,n){var i=d("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&i.send(t),n&&i.end(n),i},t.exports=d},{emitter:18,reduce:19}],18:[function(e,t,n){function i(e){return e?r(e):void 0}function r(e){for(var t in i.prototype)e[t]=i.prototype[t];return e}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},i.prototype.once=function(e,t){function n(){i.off(e,n),t.apply(this,arguments)}var i=this;return this._callbacks=this._callbacks||{},n.fn=t,this.on(e,n),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===t||i.fn===t){n.splice(r,1);break}return this},i.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks[e];if(n){n=n.slice(0);for(var i=0,r=n.length;r>i;++i)n[i].apply(this,t)}return this},i.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},i.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],19:[function(e,t,n){t.exports=function(e,t,n){for(var i=0,r=e.length,s=3==arguments.length?n:e[i++];r>i;)s=t.call(null,s,e[i],++i,e);return s}},{}]},{},[9]);