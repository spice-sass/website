import React from "../../../node_modules/react/react";

// Ancestors - Sidebar > Docs

var SBLink = React.createClass({

	render() {

		var ord = this.props.ord;
		var inc = this.props.includes;
		var goToMixin = this.props.goToMixin;
		
		return (
			<li>
				<a onClick={goToMixin.bind(this,ord)}>{inc[ord].title}</a>
				<ul className="subnav">
					{inc[ord].mixins.map(function(mix){
						return (
							<li>
								<a onClick={goToMixin.bind(this,mix.name)}><span>@include</span> {mix.name}</a>
							</li>
						)
					})}
				</ul>
			</li>
		)
	}
});

export default SBLink;