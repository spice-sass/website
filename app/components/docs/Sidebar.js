import SBLink from './SBLink';

// Ancestors - Docs
// Decendants - SBLink

var Sidebar = React.createClass({

	render() {
		var inc = this.props.includes;
		var goToMixin = this.props.goToMixin;
		return (
			<nav className="vertical page-nav scrollbar" id="sidebar">
				<ul>
					<li>
						<a onClick={goToMixin.bind(this,'getting-started')}>Getting Started</a>
						<ul className="subnav">
							<li>
								<a onClick={goToMixin.bind(this,'installation')}>Installation</a>
							</li>
						</ul>
					</li>
				</ul>
				<ul>
					{this.props.order.map(function(ord){
						return <SBLink ord={ord} includes={inc} goToMixin={goToMixin}/>
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;