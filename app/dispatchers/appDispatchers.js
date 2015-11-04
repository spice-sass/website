const Dispatcher = require("../../node_modules/flux/dist/flux").Dispatcher;
const assign = require("../../node_modules/object-assign/index");

let AppDispatcher = assign(new Dispatcher(),{

	handleScroll (pos){
		this.dispatch({
			pos : pos
		});
	},

	handleFilter (term){
		this.dispatch({
			term : term
		});
	}
});


export default AppDispatcher;