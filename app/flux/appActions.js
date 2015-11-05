import AppDispatcher from "./appDispatchers";

let AppActions = {

	filter : function(term){
		AppDispatcher.handleFilter({
			type : 'filter',
			term : term
		});
	},

	active : function(name){
		AppDispatcher.handleActive({
			type : 'active',
			name : name
		});
	}

}

export default AppActions;