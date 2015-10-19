import apiService from '../../services/apiService';
import Sidebar from './Sidebar';
import List from './List';

var Docs = React.createClass({

	getInitialState (){
		return {
			includes : {},
			order : [],
			stylePages : []
		}
	},

	goToMixin(mixin){

		var target = document.getElementById(mixin);
		var docs   = document.getElementById('docs');
		var top    = target.offsetTop;

		docs.scrollTop = top;
	},
	
	componentDidMount () {

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
		return (
			<div id="docs-wrapper">
				<Sidebar order={this.state.order} includes={this.state.includes} goToMixin={this.goToMixin} />
				<List order={this.state.order} includes={this.state.includes}/>
			</div>
		)
	}

});

export default Docs;