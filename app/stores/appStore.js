import AppDispatcher from "../dispatchers/appDispatchers";
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
	if(payload.term){
		AppStore.emitChange('filter',payload.term.term);
	}
	if(payload.pos){
		AppStore.emitChange('scroll',payload.pos.pos);
	}
});

export default AppStore;


