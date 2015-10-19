import React from "../../../node_modules/react/react";

let Header = React.createClass({

	filter(){

		var val = this.refs.search.getDOMNode().value;
		console.log(val);
	},

	render () {
		return (
			<input className="text" ref="search" onKeyUp={this.filter} placeholder="Search docs"/>
		)
	}
});

export default Header;