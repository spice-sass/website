import AppStore from '../../flux/appStore';

// Ancestors - Sidebar > Docs

var SBLink = React.createClass({

	getInitialState () {
		return{
			filterTerm : ""
		}
	},

	componentDidMount () {
		AppStore.addChangeListener('filter',this.filterHandler);
	},

	filterHandler (term) {
		this.setState({
			filterTerm : term.toLowerCase()
		});
	},

	render() {

		var ord = this.props.ord;
		var inc = this.props.includes;
		var goToMixin = this.props.goToMixin;
		
		return (
			<li>
				{inc[ord].searchTerms.toLowerCase().indexOf(this.state.filterTerm) >-1 &&
					<div>
						<a onClick={goToMixin.bind(this,ord)}>{inc[ord].title}</a>
						<ul className="subnav">
							{inc[ord].mixins.map(function(mix){
								return (
									<li>
										<a onClick={goToMixin.bind(this,mix.name)}><span>@include</span> {mix.name}</a>
									</li>
								)
							})}
						</ul>
					</div>
				}
			</li>
		)
	}
});

export default SBLink;