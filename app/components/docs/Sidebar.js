import SBLink from './SBLink';

// Ancestors - Docs
// Decendants - SBLink

var Sidebar = React.createClass({

	render() {
		var inc = this.props.includes;
		var goToMixin = this.props.goToMixin;
		return (
			<nav className="page-nav scrollbar" id="sidebar">
				<ul className="vertical-nav">
					{this.props.order.map(function(ord){
						return <SBLink ord={ord} includes={inc} goToMixin={goToMixin}/>
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;