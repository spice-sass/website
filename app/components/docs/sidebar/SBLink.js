const AppStore = require('../../../flux/appStore');
import AppActions from '../../../flux/appActions';

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

		var ord       = this.props.ord;
		var inc       = this.props.includes;
		var goToMixin = this.props.goToMixin;
		var active    = this.props.active;
		var goToMixin = this.props.goToMixin;
		
		return (
			<li>
				{inc[ord].searchTerms.toLowerCase().indexOf(this.state.filterTerm) >-1 &&
					<div>
						<a onClick={goToMixin.bind(this,ord)}>{inc[ord].title}</a>
						<ul className="subnav">
							{inc[ord].mixins.map(function(mix){
								return <LinkTemplate mix={mix} active={active} goToMixin={goToMixin}/>
							})}
						</ul>
					</div>
				}
			</li>
		)
	}
});

var LinkTemplate = React.createClass({

	componentWillReceiveProps (nextProps) {

		var link    = this.linkName.getDOMNode(),
			thisTop = link.getBoundingClientRect().top,
			sidebar = document.getElementById('sidebar');

		if(nextProps.active == this.props.mix.name && ((thisTop-sidebar.scrollTop)<0 || thisTop>window.innerHeight)){
			AppStore.setPosition(thisTop);	
		}

	},

	render () {

		var mix       = this.props.mix;
		var goToMixin = this.props.goToMixin;
		var active    = this.props.active;

		return (
			<li ref={(ref) => this.linkName = ref}>
				<a className={mix.name == active ? 'active' : ''} onClick={goToMixin.bind(this,mix.name)}><span>@include</span> {mix.name}</a>
			</li>
		)
	}
});

export default SBLink;