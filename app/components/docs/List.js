import React from "../../../node_modules/react/react";
import MixinGroup from './MixinGroup';

var List = React.createClass({

	render() {
		var inc = this.props.includes;
		return (
			<div className="scrollbar" id="docs">
				{this.props.order.map(function(ord){
					return <MixinGroup ord={ord} includes={inc}/>
				})}
			</div>
		)
	}
});

export default List;