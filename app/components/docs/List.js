import MixinGroup from './MixinGroup';
import AppActions from '../../flux/appActions';

var List = React.createClass({

	componentDidMount (){

		var docs = this.docs.getDOMNode();
		docs.onscroll = function(e) {
			AppActions.scroll(e.srcElement.scrollTop);
		}
	},

	render() {
		
		var inc = this.props.includes;
		return (
			<div id="docs" ref={(ref) => this.docs = ref}>
				{this.props.order.map(function(ord){
					return <MixinGroup ord={ord} includes={inc}/>
				})}
			</div>
		)
	}

});

export default List;