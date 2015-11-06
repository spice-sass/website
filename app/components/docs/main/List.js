import MixinGroup from './MixinGroup';
import AppActions from '../../../flux/appActions';

var List = React.createClass({

	getInitialState (){
		return {
			scrollPos : 0
		}
	},

	componentDidMount (){

		var docs = this.docs.getDOMNode();
		docs.onscroll = function(e) {
			this.setState({
				scrollPos : e.srcElement.scrollTop
			})
		}.bind(this)
	},

	render() {
		
		var inc    = this.props.includes,
			active = this.props.active,
			scroll = this.state.scrollPos;

		return (
			<div id="docs" ref={(ref) => this.docs = ref}>
				{this.props.order.map(function(ord){
					return <MixinGroup ord={ord} includes={inc} active={active} scroll={scroll}/>
				})}
			</div>
		)
	}

});

export default List;