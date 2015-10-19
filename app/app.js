import React from "../node_modules/react/react";
import Header from "./components/header/header";
import apiService from './services/apiService';

var Home = React.createClass({

	getInitialState (){
		return {
			appName : "",
			techStack : []
		}
	},
	
	componentDidMount () {

		this.api = new apiService();
		this.api.request('/api/test')
			.end(function(err, response){

			    this.setState({
			    	appName : response.body.appName,
					techStack : response.body.tech
			    });

			}.bind(this));

	},
	render (){
		return (
			<div className="centre">
				<h1 className="text-centre">{this.state.appName}</h1>
				<ul className="tech-list">
					{this.state.techStack.map(function(tech){
						return <li>{tech}</li>
					})}
				</ul>
			</div>
		)
	}

});


// React.render(
//  	<Home/>,
//     document.getElementById('home')
// );

// var HeaderComponent = document.getElementById('main-header');

// if(HeaderComponent){
// 	React.render(
// 		<Header />,
// 		HeaderComponent
// 	);
// };

