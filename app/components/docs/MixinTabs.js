import React from "../../../node_modules/react/react";

// Ancestors - MixinGroup > List > Docs

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
							<a onClick={this.switchTabs.bind(this, 'include')}>@Include</a>
						</li>
						<li className={active == 'mixin' ? 'active' : ''}>
							<a onClick={this.switchTabs.bind(this, 'mixin')}>@Mixin</a>
						</li>
						<li className={active == 'output' ? 'active' : ''}>
							<a onClick={this.switchTabs.bind(this, 'output')}>Output</a>
						</li>
					</ul>
				</header>
				<div className={active == 'output' ? "css code-body scrollbar" : "scss code-body scrollbar"}>
					<div className="slide-in-up" dangerouslySetInnerHTML={{__html: data[this.state.active]}} />
				</div>
			</div>

		)
	}
});

export default MixinTabs;