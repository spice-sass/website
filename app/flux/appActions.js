import AppDispatcher from "./appDispatchers";

let AppActions = {

	scroll : function(pos){
		AppDispatcher.handleEvent({
			type : 'scroll',
			pos  : pos
		});
	},

	filter : function(term){
		AppDispatcher.handleEvent({
			type : 'filter',
			term : term
		});
	}

}

export default AppActions;