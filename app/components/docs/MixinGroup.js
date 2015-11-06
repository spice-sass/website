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

		var group  = this.props.ord,
			inc    = this.props.includes,
			active = this.props.active,
			scroll = this.props.scroll,
			mixins = inc[group].mixins,
			fns    = inc[group].functions,
			title  = inc[group].title,
			search = inc[group].searchTerms,
			intro  = inc[group].intro;

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
							return <MixinItem data={fn} type="func" active={active} scroll={scroll}/ >
						})}
					</div>
				}
			</div>
		)
	}
});

export default MixinGroup;