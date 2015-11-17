var messages = {};

messages.list = [{
	"user" : "charlie-sheen3000",
	"time" : "11:49 AM",
	"message" : "I have tiger blood"
},{
	"user" : "Chucknorris",
	"time" : "11:50 AM",
	"message" : "I can slam a revolving door"
},{
	"user" : "Arnie",
	"time" : "11:51 AM",
	"message" : "I'm back"
}];


let Cinnamon = React.createClass({

	render() {
		return(
			<div>
				<SideBar />
				<Messages />
			</div>
		)
	}
});

let SideBar = React.createClass({

	render () {
		return(
			<div id="sidebar">
				<h1>Cinnamon</h1>
				<h2>Modern chat app</h2>
			</div>
		)
	}
});

let Messages = React.createClass({

	getInitialState () {
		return {
			list : messages.list
		}
	},

	render () {
		return(
			<div id="messages">
				<div id="top-bar">
					<h3>Messages</h3>
				</div>
				<div id="message-list">
					{this.state.list.map(function(msg){
						return <Message msg={msg}/>
					})}
				</div>
				<div id="bottom-bar">
					derp
				</div>
			</div>
		)
	}
});

let Message = React.createClass({

	render () {

		var msg = this.props.msg;

		return(
			<div className="message">
				<img src="http://placehold.it/60x60" />
				<div className="copy">
					<h4>{msg.user}</h4>
					<p>{msg.message}</p>
				</div>
			</div>
		)
	}
});

React.render(
	<Cinnamon />,
	document.getElementById('cinnamon')
);