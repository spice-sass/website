import SBLink from './SBLink';

// Ancestors - Docs
// Decendents - SBLink

var Sidebar = React.createClass({

	componentWillReceiveProps (nextProps) {
		var sidebar = document.getElementById('sidebar');
		sidebar.scrollTop = nextProps.activeP - 120;
	},

	render() {
		var inc       = this.props.includes,
			goToMixin = this.props.goToMixin,
			active    = this.props.active;

		return (
			<nav className="page-nav scrollbar" id="sidebar" ref={(ref) => this.sideBar = ref}>
				<ul className="vertical-nav">
					{this.props.order.map(function(ord){
						return <SBLink ord={ord} includes={inc} active={active} goToMixin={goToMixin}/>
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;