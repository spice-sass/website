import apiService from '../../services/apiService';
import Sidebar from './sidebar/Sidebar';
import List from './main/List';
import AppActions from '../../flux/appActions';
import AppStore from '../../flux/appStore';

var Docs = React.createClass({

	getInitialState (){
		return {
			includes   : {},
			order      : [],
			stylePages : [],
			activeMix  : AppStore.getActive(),
			filterTerm : ""
		}
	},

	activeHandler (name) {

		history.pushState(null,null,'#'+name);

		this.setState({
			activeMix : name,
			activePosition : AppStore.getActivePosition()
		});
	},

	goToMixin (mixin) {

		var target = document.getElementById(mixin);
		var docs   = document.getElementById('docs');
		var top    = target.offsetTop;

		docs.scrollTop = top;
	},

	componentDidMount () {

		AppStore.addChangeListener('active',this.activeHandler);
		AppStore.addChangeListener('filter',this.filterHandler);

		this.api = new apiService();
		this.api.request('/api/includes.json')
			.end(function(err, response){

			    this.setState({
			    	includes : response.body.includes,
					order : response.body.includesOrder,
					stylePages : response.body.stylepages
			    });

			}.bind(this));

	},

	filterHandler (term) {
		this.setState({
			filterTerm : term.toLowerCase()
		});
	},

	render (){

		var order      = this.state.order,
			includes   = this.state.includes,
			active     = this.state.activeMix,
			activeP    = this.state.activePosition,
			goToMixin  = this.goToMixin,
			filterTerm = this.state.filterTerm;

		return (
			<div id="docs-wrapper">
				<Sidebar order={order} includes={includes} active={active} activeP={activeP} goToMixin={goToMixin} filterTerm={filterTerm}/>
				<List order={order} includes={includes} active={active} goToMixin={goToMixin} filterTerm={filterTerm}/>
			</div>
		)
	}

});

export default Docs;