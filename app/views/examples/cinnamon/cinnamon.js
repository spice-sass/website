var messages = {};

messages.list = [{
	"user" : "Charlie Sheen",
	"time" : "11:49 AM",
	"message" : "I have tiger blood"
},{
	"user" : "Chuck Norris",
	"time" : "11:50 AM",
	"message" : "I can slam a revolving door"
},{
	"user" : "Arnie",
	"time" : "11:51 AM",
	"message" : "I'm back"
},{
	"user" : "Sigourney Weaver",
	"time" : "11:51 AM",
	"message" : "Bishop"
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
				<ul className="rooms">
					<li><a>Superheroes</a></li>
					<li><a>Movie stars</a></li>
					<li><a>Footballers</a></li>
					<li><a>Animals</a></li>
				</ul>
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

	addComment (e) {

		e.preventDefault();

		var comment  = this.refs.commentBox.getDOMNode().value,
			list     = this.state.list,
			template = {
				"user" : "Nicolas Cage",
				"time" : "11:51 AM",
				"message" : comment
			};

		list.push(template);
		this.refs.commentBox.getDOMNode().value = "";
		this.setState({
			list : list
		});

		var scroll = this.scrollMsgs;

		setTimeout(function(){
			scroll();
		},10);
		
	},

	scrollMsgs () {

		var messageList = this.refs.messageList.getDOMNode(),
			messageWrap = this.refs.messageWrap.getDOMNode(),
			viewHeight  = messageList.clientHeight,
			msgHeight   = messageWrap.clientHeight;

		if(msgHeight>viewHeight){
			messageList.scrollTop = (msgHeight - viewHeight) + 20;
		}

	},

	render () {
		return(
			<div id="messages">
				<div id="top-bar">
					<h3>Messages</h3>
				</div>
				<div id="message-list" ref="messageList">
					<div ref="messageWrap">
						{this.state.list.map(function(msg){
							return <Message msg={msg}/>
						})}
					</div>
				</div>
				<div id="bottom-bar">
					<form onSubmit={this.addComment}>
						<input type="text" ref="commentBox"/>
					</form>
				</div>
			</div>
		)
	}
});

let Message = React.createClass({

	render () {

		var msg = this.props.msg;

		return(
			<div className="message slide-in-up">
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