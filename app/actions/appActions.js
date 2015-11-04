import AppDispatcher from "../dispatchers/appDispatchers";

let AppActions = {

	scroll : function(pos){
		AppDispatcher.handleScroll({
			pos:pos
		});
	},

	filter : function(term){
		AppDispatcher.handleFilter({
			term:term
		});
	}

}

export default AppActions;