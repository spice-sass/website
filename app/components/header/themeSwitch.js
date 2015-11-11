let ThemeSwitch = React.createClass({

	getInitialState () {
		return {
			theme : "light"
		}
	},

	toggle () {

		if(this.state.theme == "light"){
			this.setState({
				theme : "dark"
			});
		} else {
			this.setState({
				theme : "light"
			})
		}

		var styleSheet = document.getElementById('theme-stylesheet');
		styleSheet.setAttribute("href", '/css/themes/'+this.state.theme+'.css');

	},

	render () {
		return (
			<div className={this.state.theme == "light" ? 'switch theme selected' : 'switch theme'} onClick={this.toggle}>
				 <span className="on">Light</span>
				 <span className="off">Dark</span>
			</div>
		)
	}
});

export default ThemeSwitch;