import apiService from '../../services/apiService';

class Preview extends React.Component {

	constructor() {
		super();
	}

	componentDidMount () {

		this.api = new apiService();
		this.api.request('/api/includes.json')
			.end(function(err, response){

			    this.setState({
			    	includes : response.body.includes
			    });

			    console.log(response.body.includes)

			}.bind(this));
	}

	render () {

		console.log(this.state);

		return (		
			<div className="container">

				<div className="code-wrapper">

					<div className="top-bar">
					</div>

					<div className="sass-block">
					</div>

					<div className="css-block">
						{this.state &&
							<div dangerouslySetInnerHTML={{__html: this.state.includes.grid.mixins[0].output}} />
						}
					</div>

				</div>

			</div>
		)
	}

} ;

export default Preview;
