import AppDispatcher from "./appDispatchers";
import assign from "../../node_modules/object-assign/index";

const EventEmitter = require('events').EventEmitter;

var active = "googleFont";

let AppStore = assign({}, EventEmitter.prototype,{

	setActive : function(name){
		active = name;
	},

	getActive : function(){
		return active;
	},

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
	if(payload.type == 'active'){
		AppStore.emitChange(payload.type,payload.name);
	}
});

export default AppStore;


