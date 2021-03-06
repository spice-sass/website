// Ancestors -  List > Docs > MixinGroup > MixinItem

var MixinTabs = React.createClass({

	getInitialState() {
		return{
			active : 'include'
		}
	},

	switchTabs(tab) {
		this.setState({
			active : tab
		});
	},

	render() {

		var data   = this.props.data,
			active = this.state.active;

		return (
			<div className="code">
				<header>
					<ul>
						<li className={active == 'include' ? 'active' : ''}>
							<a onClick={this.switchTabs.bind(this, 'include')}>Scss</a>
						</li>
						<li className={active == 'output' ? 'active' : ''}>
							<a onClick={this.switchTabs.bind(this, 'output')}>Css output</a>
						</li>
						<li className={active == 'mixin' ? 'active' : ''}>
							<a onClick={this.switchTabs.bind(this, 'mixin')}>Source code</a>
						</li>
					</ul>
				</header>
				<div className={active == 'output' ? "css code-body scrollbar" : "scss code-body scrollbar"}>
					<div dangerouslySetInnerHTML={{__html: data[this.state.active]}} />
				</div>
			</div>

		)
	}
});

export default MixinTabs;