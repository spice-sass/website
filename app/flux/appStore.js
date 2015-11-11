import AppDispatcher from "./appDispatchers";
import assign from "../../node_modules/object-assign/index";

const EventEmitter = require('events').EventEmitter;

var active = "gridClasses";
var activePosition = 0;

let AppStore = assign({}, EventEmitter.prototype,{

	setPosition (pos){
		activePosition  = pos;
	},

	getActive (){
		return active;
	},

	getActivePosition (){
		return activePosition;
	},

	emitChange (event,data) {
	    this.emit(event,data);
	},

	addChangeListener (event,callback) {
		this.setMaxListeners(Infinity);
	    this.on(event,callback);
	},

	removeChangeListener (event,callback) {
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
	if(payload.type == 'jump'){
		AppStore.emitChange(payload.type,payload.pos);
	}
});

export default AppStore;


