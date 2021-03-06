import MixinGroup from './MixinGroup';
import AppActions from '../../../flux/appActions';
import AppStore from '../../../flux/appStore';

var List = React.createClass({

	getInitialState (){
		return {
			scrollPos : 0
		}
	},

	componentDidMount (){

		AppStore.addChangeListener('jump',this.jumpHandler);

		var docs = this.docs.getDOMNode();
		docs.onscroll = function(e) {
			this.setState({
				scrollPos : docs.scrollTop
			})
		}.bind(this)
	},

	jumpHandler (pos) {
		var docs =  document.getElementById('docs');
		docs.scrollTop = pos - 50;
	},

	render() {
		
		var inc        = this.props.includes,
			active     = this.props.active,
			scroll     = this.state.scrollPos,
			goToMixin  = this.props.goToMixin,
			filterTerm = this.props.filterTerm;

		return (
			<div id="docs" ref={(ref) => this.docs = ref}>
				<div id="group-wrapper">
					{this.props.order.map(function(ord){
						return <MixinGroup ord={ord} includes={inc} active={active} scroll={scroll} goToMixin={goToMixin} filterTerm={filterTerm}/>
					})}
				</div>
				{filterTerm != "" &&
					<div id="no-results">
						<h5>Not found!</h5>
						<p>No results were found for <span className="term">{filterTerm}&hellip;</span></p>
						<p>Please try filering by another search term.</p>
					</div>
				}
			</div>
		)
	}

});

export default List;