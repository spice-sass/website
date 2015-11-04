import MixinTabs from "./MixinTabs";
import MixinItem from "./MixinItem";
import AppStore from '../../stores/appStore';
import AppActions from '../../actions/appActions';

// Ancestors - List > Docs

var MixinGroup = React.createClass({

	getInitialState () {
		return{
			filterTerm : ""
		}
	},

	componentDidMount () {
		AppStore.addChangeListener('filter',this.filterHandler);
		AppStore.addChangeListener('scroll',this.onScrollHandler);
	},

	filterHandler (term) {

		this.setState({
			filterTerm : term.toLowerCase()
		});
	},

	onScrollHandler (event) {

		var group = this.group.getDOMNode(),
			top   = group.getBoundingClientRect().top;

		console.log(top,event);
	},

	render() {

		var group  = this.props.ord;
		var inc    = this.props.includes;
		var mixins = inc[group].mixins;
		var fns    = inc[group].functions;
		var title  = inc[group].title;

		return (
			<div className="include-block" id={group} ref={(ref) => this.group = ref}>
				<h1>{{title}}</h1>	
				<hr />
				{mixins.map(function(mixin){
					return <MixinItem data={mixin} type="mixin"/>
				})}
				{fns && fns.map(function(fn){
					return <MixinItem data={fn} type="function"/>
				})}
			</div>
		)
	}
});

export default MixinGroup;