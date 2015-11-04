import AppActions from '../../actions/appActions';

let Header = React.createClass({

	filter(){
		var val = this.refs.search.getDOMNode().value;
		AppActions.filter(val);
	},

	render () {
		return (
			<input className="text" ref="search" onKeyUp={this.filter} placeholder="Search docs"/>
		)
	}
});

export default Header;