import AppDispatcher from "./appDispatchers";
import assign from "../../node_modules/object-assign/index";

const EventEmitter = require('events').EventEmitter;

let AppStore = assign({}, EventEmitter.prototype,{

	emitChange: function(event,data) {
	    this.emit(event,data);
	},

	addChangeListener: function(event,callback) {
		this.setMaxListeners(Infinity);
	    this.on(event,callback);
	},

	removeChangeListener: function(event,callback) {
	    this.removeListener(event,callback);
	}

});

AppDispatcher.register(function (payload) {
	if(payload.type == 'filter'){
		AppStore.emitChange(payload.type,payload.term);
	}
	if(payload.type == 'scroll'){
		AppStore.emitChange(payload.type,payload.pos);
	}
});

export default AppStore;


