import apiService from '../../services/apiService';
import Sidebar from './sidebar/Sidebar';
import List from './main/List';
import AppActions from '../../flux/appActions';
import AppStore from '../../flux/appStore';

var Docs = React.createClass({

	getInitialState (){
		return {
			includes : {},
			order : [],
			stylePages : [],
			activeMix : AppStore.getActive()
		}
	},

	goToMixin(mixin){

		var target = document.getElementById(mixin);
		var docs   = document.getElementById('docs');
		var top    = target.offsetTop;

		docs.scrollTop = top;
	},

	activeHandler (name) {
		this.setState({
			activeMix : name,
			activePosition : AppStore.getActivePosition()
		});
	},

	componentDidMount () {

		AppStore.addChangeListener('active',this.activeHandler);

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

	render (){

		var order    = this.state.order,
			includes = this.state.includes,
			active   = this.state.activeMix,
			activeP  = this.state.activePosition;

		return (
			<div id="docs-wrapper">
				<Sidebar order={order} includes={includes} goToMixin={this.goToMixin} active={active} activeP={activeP}/>
				<List order={order} includes={includes} active={active} />
			</div>
		)
	}

});

export default Docs;