import SBLink from './SBLink';

// Ancestors - Docs
// Decendants - SBLink

var Sidebar = React.createClass({

	componentWillReceiveProps (nextProps) {

		//console.log(nextProps.activeP);

		this.sideBar.scrollTop = nextProps.activeP;

	},

	render() {
		var inc       = this.props.includes,
			goToMixin = this.props.goToMixin,
			active    = this.props.active;

		return (
			<nav className="page-nav scrollbar" id="sidebar" ref={(ref) => this.sideBar = ref}>
				<ul className="vertical-nav">
					{this.props.order.map(function(ord){
						return <SBLink ord={ord} includes={inc} goToMixin={goToMixin} active={active}/>
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;