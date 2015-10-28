!function e(t,n,r){function a(s,l){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!l&&c)return c(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var o=n[s]={exports:{}};t[s][0].call(o.exports,function(e){var n=t[s][1][e];return a(n?n:e)},o,o.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../services/apiService"),i=r(a),s=e("./Sidebar"),l=r(s),c=e("./List"),o=r(c),u=React.createClass({displayName:"Docs",getInitialState:function(){return{includes:{},order:[],stylePages:[]}},goToMixin:function(e){var t=document.getElementById(e),n=document.getElementById("docs"),r=t.offsetTop;n.scrollTop=r},componentDidMount:function(){this.api=new i["default"],this.api.request("/api/includes.json").end(function(e,t){this.setState({includes:t.body.includes,order:t.body.includesOrder,stylePages:t.body.stylepages})}.bind(this))},render:function(){return React.createElement("div",{id:"docs-wrapper"},React.createElement(l["default"],{order:this.state.order,includes:this.state.includes,goToMixin:this.goToMixin}),React.createElement(o["default"],{order:this.state.order,includes:this.state.includes}))}});n["default"]=u,t.exports=n["default"]},{"../../services/apiService":9,"./List":2,"./Sidebar":6}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./MixinGroup"),i=r(a),s=React.createClass({displayName:"List",render:function(){var e=this.props.includes;return React.createElement("div",{className:"scrollbar",id:"docs"},React.createElement("div",{className:"include-block",id:"getting-started"},React.createElement("h1",null,"Getting Started"),React.createElement("hr",null),React.createElement("div",{id:"installation"},React.createElement("h2",{className:"red"},"Installation"),React.createElement("p",null,"Spice is available for download via npm or bower"),React.createElement("h5",null,"npm"),React.createElement("blockquote",null,"npm install sass-includes"),React.createElement("h5",null,"Bower"),React.createElement("blockquote",null,"bower install includes")),React.createElement("hr",null)),this.props.order.map(function(t){return React.createElement(i["default"],{ord:t,includes:e})}))}});n["default"]=s,t.exports=n["default"]},{"./MixinGroup":3}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./MixinTabs"),i=r(a),s=React.createClass({displayName:"MixinGroup",render:function(){var e=this.props.ord,t=this.props.includes,n=t[e].mixins,r=t[e].functions,a=t[e].title;return React.createElement("div",{className:"include-block",id:e},React.createElement("h1",null,{title:a}),React.createElement("hr",null),n.map(function(e){return React.createElement("div",{className:"mixin",id:e.name},React.createElement("h2",{className:"red"},React.createElement("span",{className:"leckerli-one"},"@include")," ",e.name,";"),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.args>-1&&React.createElement("div",null,React.createElement("h6",null,"Arguments"),React.createElement("p",null,"This mixin takes ",React.createElement("span",null,e.args)," argument",e.args>1&&"s","."),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.params}})),React.createElement("h6",null,"Usage"),React.createElement(i["default"],{data:e}),e.demo&&React.createElement("div",null,React.createElement("h6",null,"Example"),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.demo}})),e.markup&&React.createElement("div",{className:"code html-code"},React.createElement("header",null,React.createElement("ul",null,React.createElement("li",{className:"active"},React.createElement("a",null,"Example HTML")))),React.createElement("div",{className:"code-body scrollbar html",dangerouslySetInnerHTML:{__html:e.markup}})),e.links&&React.createElement("div",null,React.createElement("h6",null,e.linksTitle?e.linksTitle+" :":"See also :"),React.createElement("ul",{className:"mixin-links"},e.links.map(function(e){return React.createElement("li",null,React.createElement("a",{href:"#"+e},"@include "+e))}))),React.createElement("hr",null))}),r&&r.map(function(e){return React.createElement("div",{className:"function",id:e.name},React.createElement("h2",{className:"red"},e.name,"();"),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.args>-1&&React.createElement("div",null,React.createElement("h6",null,"Arguments"),React.createElement("p",null,"This function takes ",React.createElement("span",null,e.args)," argument",e.args>1&&"s","."),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.params}})),React.createElement("h6",null,"Usage"),React.createElement(i["default"],{data:e}),e.demo&&React.createElement("div",null,React.createElement("h6",null,"Example"),React.createElement("div",{dangerouslySetInnerHTML:{__html:e.demo}})),e.markup&&React.createElement("div",{className:"code html-code"},React.createElement("header",null,React.createElement("ul",null,React.createElement("li",{className:"active"},React.createElement("a",null,"Example HTML")))),React.createElement("div",{className:"code-body scrollbar html",dangerouslySetInnerHTML:{__html:e.markup}})),e.links&&React.createElement("div",null,React.createElement("h6",null,e.linksTitle?e.linksTitle+" :":"See also :"),React.createElement("ul",{className:"mixin-links"},e.links.map(function(e){return React.createElement("li",null,React.createElement("a",{href:"#"+e},"@include "+e))}))),React.createElement("hr",null))}))}});n["default"]=s,t.exports=n["default"]},{"./MixinTabs":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=React.createClass({displayName:"MixinTabs",getInitialState:function(){return{active:"include"}},switchTabs:function(e){this.setState({active:e})},render:function(){var e=this.props.data,t=this.state.active;return React.createElement("div",{className:"code"},React.createElement("header",null,React.createElement("ul",null,React.createElement("li",{className:"include"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"include")},"@Include")),React.createElement("li",{className:"mixin"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"mixin")},"@Mixin")),React.createElement("li",{className:"output"==t?"active":""},React.createElement("a",{onClick:this.switchTabs.bind(this,"output")},"Output")))),React.createElement("div",{className:"output"==t?"css code-body scrollbar":"scss code-body scrollbar"},React.createElement("div",{className:"slide-in-up",dangerouslySetInnerHTML:{__html:e[this.state.active]}})))}});n["default"]=r,t.exports=n["default"]},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=React.createClass({displayName:"SBLink",render:function(){var e=this.props.ord,t=this.props.includes,n=this.props.goToMixin;return React.createElement("li",null,React.createElement("a",{onClick:n.bind(this,e)},t[e].title),React.createElement("ul",{className:"subnav"},t[e].mixins.map(function(e){return React.createElement("li",null,React.createElement("a",{onClick:n.bind(this,e.name)},React.createElement("span",null,"@include")," ",e.name))})))}});n["default"]=r,t.exports=n["default"]},{}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./SBLink"),i=r(a),s=React.createClass({displayName:"Sidebar",render:function(){var e=this.props.includes,t=this.props.goToMixin;return React.createElement("nav",{className:"vertical-nav page-nav scrollbar",id:"sidebar"},React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{onClick:t.bind(this,"getting-started")},"Getting Started"),React.createElement("ul",{className:"subnav"},React.createElement("li",null,React.createElement("a",{onClick:t.bind(this,"installation")},"Installation"))))),React.createElement("ul",null,this.props.order.map(function(n){return React.createElement(i["default"],{ord:n,includes:e,goToMixin:t})})))}});n["default"]=s,t.exports=n["default"]},{"./SBLink":5}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=React.createClass({displayName:"Header",filter:function(){var e=this.refs.search.getDOMNode().value;console.log(e)},render:function(){return React.createElement("input",{className:"text",ref:"search",onKeyUp:this.filter,placeholder:"Search docs"})}});n["default"]=r,t.exports=n["default"]},{}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=e("./components/docs/Docs"),i=r(a),s=e("./components/header/header");r(s);React.render(React.createElement(i["default"],null),document.getElementById("documentation"))},{"./components/docs/Docs":1,"./components/header/header":7}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("../../node_modules/superagent/lib/client"),l=r(s),c=function(){function e(){a(this,e)}return i(e,[{key:"request",value:function(e){return l["default"].get(e)}}]),e}();n["default"]=c,t.exports=n["default"]},{"../../node_modules/superagent/lib/client":10}],10:[function(e,t,n){function r(){}function a(e){var t={}.toString.call(e);switch(t){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(e){return e===Object(e)}function s(e){if(!i(e))return e;var t=[];for(var n in e)null!=e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function l(e){for(var t,n,r={},a=e.split("&"),i=0,s=a.length;s>i;++i)n=a[i],t=n.split("="),r[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);return r}function c(e){var t,n,r,a,i=e.split(/\r?\n/),s={};i.pop();for(var l=0,c=i.length;c>l;++l)n=i[l],t=n.indexOf(":"),r=n.slice(0,t).toLowerCase(),a=y(n.slice(t+1)),s[r]=a;return s}function o(e){return e.split(/ *; */).shift()}function u(e){return f(e.split(/ *; */),function(e,t){var n=t.split(/ *= */),r=n.shift(),a=n.shift();return r&&a&&(e[r]=a),e},{})}function d(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=c(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function h(e,t){var n=this;m.call(this),this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new d(n)}catch(r){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=r,n.callback(e)}if(n.emit("response",t),e)return n.callback(e,t);if(t.status>=200&&t.status<300)return n.callback(e,t);var a=new Error(t.statusText||"Unsuccessful HTTP response");a.original=e,a.response=t,a.status=t.status,n.callback(a,t)})}function p(e,t){return"function"==typeof t?new h("GET",e).end(t):1==arguments.length?new h("GET",e):new h(e,t)}var m=e("emitter"),f=e("reduce"),v="undefined"==typeof window?this||self:window;p.getXHR=function(){if(!(!v.XMLHttpRequest||v.location&&"file:"==v.location.protocol&&v.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}return!1};var y="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};p.serializeObject=s,p.parseString=l,p.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},p.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},p.parse={"application/x-www-form-urlencoded":l,"application/json":JSON.parse},d.prototype.get=function(e){return this.header[e.toLowerCase()]},d.prototype.setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=o(t);var n=u(t);for(var r in n)this[r]=n[r]},d.prototype.parseBody=function(e){var t=p.parse[this.type];return t&&e&&(e.length||e instanceof Object)?t(e):null},d.prototype.setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=4==t||5==t?this.toError():!1,this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},d.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",a=new Error(r);return a.status=this.status,a.method=t,a.url=n,a},p.Response=d,m(h.prototype),h.prototype.use=function(e){return e(this),this},h.prototype.timeout=function(e){return this._timeout=e,this},h.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},h.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},h.prototype.set=function(e,t){if(i(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},h.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},h.prototype.getHeader=function(e){return this._header[e.toLowerCase()]},h.prototype.type=function(e){return this.set("Content-Type",p.types[e]||e),this},h.prototype.accept=function(e){return this.set("Accept",p.types[e]||e),this},h.prototype.auth=function(e,t){var n=btoa(e+":"+t);return this.set("Authorization","Basic "+n),this},h.prototype.query=function(e){return"string"!=typeof e&&(e=s(e)),e&&this._query.push(e),this},h.prototype.field=function(e,t){return this._formData||(this._formData=new v.FormData),this._formData.append(e,t),this},h.prototype.attach=function(e,t,n){return this._formData||(this._formData=new v.FormData),this._formData.append(e,t,n),this},h.prototype.send=function(e){var t=i(e),n=this.getHeader("Content-Type");if(t&&i(this._data))for(var r in e)this._data[r]=e[r];else"string"==typeof e?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+e:e:this._data=(this._data||"")+e):this._data=e;return!t||a(e)?this:(n||this.type("json"),this)},h.prototype.callback=function(e,t){var n=this._callback;this.clearTimeout(),n(e,t)},h.prototype.crossDomainError=function(){var e=new Error("Origin is not allowed by Access-Control-Allow-Origin");e.crossDomain=!0,this.callback(e)},h.prototype.timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},h.prototype.withCredentials=function(){return this._withCredentials=!0,this},h.prototype.end=function(e){var t=this,n=this.xhr=p.getXHR(),i=this._query.join("&"),s=this._timeout,l=this._formData||this._data;this._callback=e||r,n.onreadystatechange=function(){if(4==n.readyState){var e;try{e=n.status}catch(r){e=0}if(0==e){if(t.timedout)return t.timeoutError();if(t.aborted)return;return t.crossDomainError()}t.emit("end")}};var c=function(e){e.total>0&&(e.percent=e.loaded/e.total*100),t.emit("progress",e)};this.hasListeners("progress")&&(n.onprogress=c);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=c)}catch(o){}if(s&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},s)),i&&(i=p.serializeObject(i),this.url+=~this.url.indexOf("?")?"&"+i:"?"+i),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof l&&!a(l)){var u=this.getHeader("Content-Type"),d=p.serialize[u?u.split(";")[0]:""];d&&(l=d(l))}for(var h in this.header)null!=this.header[h]&&n.setRequestHeader(h,this.header[h]);return this.emit("request",this),n.send(l),this},h.prototype.then=function(e,t){return this.end(function(n,r){n?t(n):e(r)})},p.Request=h,p.get=function(e,t,n){var r=p("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},p.head=function(e,t,n){var r=p("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},p.del=function(e,t){var n=p("DELETE",e);return t&&n.end(t),n},p.patch=function(e,t,n){var r=p("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},p.post=function(e,t,n){var r=p("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},p.put=function(e,t,n){var r=p("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},t.exports=p},{emitter:11,reduce:12}],11:[function(e,t,n){function r(e){return e?a(e):void 0}function a(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){r.off(e,n),t.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var r,a=0;a<n.length;a++)if(r=n[a],r===t||r.fn===t){n.splice(a,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks[e];if(n){n=n.slice(0);for(var r=0,a=n.length;a>r;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],12:[function(e,t,n){t.exports=function(e,t,n){for(var r=0,a=e.length,i=3==arguments.length?n:e[r++];a>r;)i=t.call(null,i,e[r],++r,e);return i}},{}]},{},[8]);