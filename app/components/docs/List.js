import MixinGroup from './MixinGroup';

var List = React.createClass({

	scrollHandler (){
		console.log('derp');
	},

	componentDidMount (){

		var docs = this.docs.getDOMNode();
		docs.addEventListener('scroll',this.scrollHandler);
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