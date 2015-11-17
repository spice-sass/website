var messages = {};

messages.list = [{
	"user" : "Charlie Sheen",
	"time" : "11:49 AM",
	"message" : "As an expert on everything, I know that this awesome chat interface was built using spice sass mixins. Hawt dang!!",
	"likes" : 3,
	"shares" : 1
},{
	"user" : "Chuck Norris",
	"time" : "11:50 AM",
	"message" : "Yeah I know man... It's so awesome it makes me wanna slam a revolving door and roundhouse kick terrorism in the face!!! Again.",
	"likes" : 1,
	"shares" : 0
},{
	"user" : "Arnie",
	"time" : "11:51 AM",
	"message" : "I'm back",
	"likes" : 0,
	"shares" : 0

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
				<div id="logo-space">
					<h1>Cinnamon</h1>
					<h2>Modern chat app</h2>
				</div>
				<div id="side-main">
					<h3>Groups</h3>
					<ul id="rooms">
						<li><a>Superheroes</a></li>
						<li><a className="active">Movie stars</a></li>
						<li><a>Footballers</a></li>
						<li><a>Animals</a></li>
					</ul>
					<h3>Chats</h3>
					<ul>
						<li><a>Charlie Sheen</a></li>
						<li><a>Arnie<span className="badge">5</span></a></li>
						<li><a>Chuck Norris<span className="badge">7</span></a></li>
						<li><a>Bruce Willis</a></li>
					</ul>
				</div>
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
				"message" : comment,
				"likes" : 0,
				"shares" : 0
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
					<p className="date"><span>Today</span></p>
				</div>
				<div id="message-list" ref="messageList">
					<div ref="messageWrap">
						{this.state.list.map(function(msg){
							return <Message msg={msg}/>
						})}
					</div>
				</div>
				<div id="bottom-bar">
					<form className="line-icon-speech-bubble" onSubmit={this.addComment}>
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
				<img className="fade-in" src="http://placehold.it/60x60" />
				<div className="copy">
					<h4 className="slide-in-left">{msg.user} <span className="time">{msg.time}</span></h4>
					<p className="slide-in-left">{msg.message}</p>
					<ul className="social slide-in-up">
						<li className={msg.likes > 0 ? 'show likes line-icon-heart' :'likes line-icon-heart'}>{msg.likes}</li>
						<li className={msg.shares > 0 ? 'show shares line-icon-share' : 'shares line-icon-share'}>{msg.shares}</li>
					</ul>
				</div>
			</div>
		)
	}
});

React.render(
	<Cinnamon />,
	document.getElementById('cinnamon')
);