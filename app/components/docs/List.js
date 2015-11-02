import MixinGroup from './MixinGroup';

var List = React.createClass({

	render() {
		var inc = this.props.includes;
		return (
			<div className="scrollbar" id="docs">
				<div className="include-block" id="getting-started">
					<h1>Getting Started</h1>
					<hr />

					<div id="installation">
						<h2 className="red">Installation</h2>
						<p>{'Spice is available for download via npm or bower'}</p>
						<h5>npm</h5>
						<blockquote>npm install spice-sass</blockquote>
						<h5>Bower</h5>
						<blockquote>bower install spice-sass</blockquote>
					</div>

					<hr />
					
				</div>

				{this.props.order.map(function(ord){
					return <MixinGroup ord={ord} includes={inc}/>
				})}
			</div>
		)
	}
});

export default List;