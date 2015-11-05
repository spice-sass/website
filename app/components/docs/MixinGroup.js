import MixinTabs from "./MixinTabs";
import MixinItem from "./MixinItem";
import AppStore from '../../flux/appStore';

// Ancestors - List > Docs
// Children - MixinItem > MixinTabs

var MixinGroup = React.createClass({

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

		var group  = this.props.ord;
		var inc    = this.props.includes;
		var active = this.props.active;
		var scroll = this.props.scroll;
		var mixins = inc[group].mixins;
		var fns    = inc[group].functions;
		var title  = inc[group].title;
		var search = inc[group].searchTerms;
		var intro  = inc[group].intro;

		return (
			<div>
				{search.toLowerCase().indexOf(this.state.filterTerm) > -1 &&
					<div className="include-block" id={group} >
						<h1>{{title}}</h1>
						{intro && <div dangerouslySetInnerHTML={{__html: intro}} />}	
						<hr />
						{mixins.map(function(mixin){
							return <MixinItem data={mixin} type="mixin" active={active} scroll={scroll}/ >
						})}
						{fns && fns.map(function(fn){
							return <MixinItem data={fn} type="function" active={active} scroll={scroll}/ >
						})}
					</div>
				}
			</div>
		)
	}
});

export default MixinGroup;