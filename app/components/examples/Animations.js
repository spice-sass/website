let Animations = React.createClass({

	getInitialState () {
		return{
			currentClass : "fade-in",
			classes : [
				"fade-in",
				"slide-in-left",
				"slide-in-right"
			]
		}
	},

	switchClass (anim) {

		var self = this;

		if(anim != this.state.currentClass){
			this.setState({
				currentClass : anim
			});
		} else {
			this.setState({
				currentClass : ""
			});

			setTimeout(function(){
				self.setState({
					currentClass : anim
				});
			},10);
		}
	},

	render (){

		var classList = this.state.classes.map(function(anim){
			return <button onClick={this.switchClass.bind(this,anim)}>{anim}</button>
		},this);

		return (
			<div className="container">
				<div className="grid-row">
					<div className="grid-col-8">
						<img className={this.state.currentClass} src="/img/spice-logo.svg"/>
					</div>
				</div>
				<div className="grid-row">
					{classList}
				</div>
			</div>
		)
	}
});

export default Animations;