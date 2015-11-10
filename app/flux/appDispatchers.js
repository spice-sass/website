const Dispatcher = require("../../node_modules/flux/dist/flux").Dispatcher;
const assign = require("../../node_modules/object-assign/index");

let AppDispatcher = assign(new Dispatcher(),{
	
	handleFilter (payload){
		this.dispatch(payload);
	},

	handleActive (payload){
		this.dispatch(payload);
	},

	handleJump (payload){
		this.dispatch(payload);
	}

});


export default AppDispatcher;