let Saffron = React.createClass({

	getInitialState (){
		return{
			slideAway : false,
			success : false,
			error : false,
			msg : "",
			user : ""
		}
	},

	handleClick () {

		var textVal = this.refs.textInput.getDOMNode().value,
			passVal = this.refs.passInput.getDOMNode().value,
			success = this.success.bind(this);

		if(textVal.length < 5 || textVal.length < 5){
			this.setState({
				error : true,
				msg : "Username not recognised"
			})
		} else {
			this.setState({
				slideAway : true
			});	
			setTimeout(function(){
				success(textVal);
			},700);
		}
	},

	success (user) {
		this.setState({
			success : true,
			error : false,
			msg : "",
			user : user
		});
	},

	render () {
		return(
			<div>
				{this.state.success == false ? 
					<form className={this.state.slideAway ? "lined slide-away" : "lined"}>
						<label className={this.state.error ? 'slide-in-up error' : 'slide-in-up'}>Username</label>
						<input className="slide-in-up" type="text" ref="textInput"/>

						<label className={this.state.error ? 'slide-in-up error' : 'slide-in-up'}>{'Password'}</label>
						<input className="slide-in-up" type="password" ref="passInput"/>

						<button type="button" onClick={this.handleClick} className="flat-submit block-icon-check slide-in-up">Login</button>

						{this.state.error && <p className="error-msg slide-in-up">{this.state.msg}</p> }
					</form>
				:
					<div className="success-message fade-in">
						<i className="line-icon-head"></i>
						<h5>Welcome back {this.state.user}</h5>
					</div>
				}
			</div>
		)
	}
});

React.render(
	<Saffron />,
	document.getElementById('saffron-form')
);