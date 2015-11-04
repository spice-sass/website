import MixinTabs from "./MixinTabs";
import AppStore from '../../stores/appStore';
import AppActions from '../../actions/appActions';

// Ancestors - List > Docs

var MixinGroup = React.createClass({

	getInitialState () {
		return{
			filterTerm : ""
		}
	},

	componentDidMount () {
		AppStore.addChangeListener('filter',this.filterHandler);
		AppStore.addChangeListener('scroll',this.onScrollHandler);
	},

	filterHandler (term) {

		this.setState({
			filterTerm : term.toLowerCase()
		});
	},

	onScrollHandler (event) {

		var group = this.group.getDOMNode(),
			top   = group.getBoundingClientRect().top;

		console.log(top,event);
	},

	render() {

		var group  = this.props.ord;
		var inc    = this.props.includes;
		var mixins = inc[group].mixins;
		var fns    = inc[group].functions;
		var title  = inc[group].title;

		return (
			<div className="include-block" id={group} ref={(ref) => this.group = ref}>
				<h1>{{title}}</h1>	
				<hr />
				{mixins.map(function(mixin){
					return (
						<div className="mixin" id={mixin.name}>
							<h2 className="red"><span className="leckerli-one">@include</span> {mixin.name};</h2>
							<div dangerouslySetInnerHTML={{__html: mixin.desc}} />
							{mixin.args > -1 &&
								<div>

									<h6>Arguments</h6>
									<p>This mixin takes <span>{mixin.args}</span> argument{mixin.args > 1 && "s"}.</p>
									<div dangerouslySetInnerHTML={{__html: mixin.params}} />

								</div>
							}
							<h6>Usage</h6>
							<MixinTabs data={mixin} />
							{mixin.demo &&
								<div>
									<h6>Example</h6>
									<div dangerouslySetInnerHTML={{__html: mixin.demo}} />
								</div>
							}
							{mixin.markup &&
								<div className="code html-code">
									<header>
										<ul>
											<li className="active">
												<a>Example HTML</a>
											</li>
										</ul>
									</header>
									<div className="code-body scrollbar html" dangerouslySetInnerHTML={{__html: mixin.markup}} />
								</div>
							}
							{mixin.links && 
								<div>
									<h6>{mixin.linksTitle ? mixin.linksTitle + " :" : 'See also :'}</h6>
									<ul className="mixin-links">
										{mixin.links.map(function(link){
											return (
												<li>
													<a href={'#' + link}>{'@include ' + link}</a>
												</li>
											)
										})}
									</ul>
								</div>
							}
							<hr />
						</div>
					)
				})}
				{fns && fns.map(function(fn){
					return (
						<div className="function" id={fn.name}>
							<h2 className="red">{fn.name}();</h2>
							<div dangerouslySetInnerHTML={{__html: fn.desc}} />
							{fn.args > -1 &&
								<div>

									<h6>Arguments</h6>
									<p>This function takes <span>{fn.args}</span> argument{fn.args > 1 && "s"}.</p>
									<div dangerouslySetInnerHTML={{__html: fn.params}} />

								</div>
							}
							<h6>Usage</h6>
							<MixinTabs data={fn} />
							{fn.demo &&
								<div>
									<h6>Example</h6>
									<div dangerouslySetInnerHTML={{__html: fn.demo}} />
								</div>
							}
							{fn.markup &&
								<div className="code html-code">
									<header>
										<ul>
											<li className="active">
												<a>Example HTML</a>
											</li>
										</ul>
									</header>
									<div className="code-body scrollbar html" dangerouslySetInnerHTML={{__html: fn.markup}} />
								</div>
							}
							{fn.links && 
								<div>
									<h6>{fn.linksTitle ? fn.linksTitle + " :" : 'See also :'}</h6>
									<ul className="mixin-links">
										{fn.links.map(function(link){
											return (
												<li>
													<a href={'#' + link}>{'@include ' + link}</a>
												</li>
											)
										})}
									</ul>
								</div>
							}
							<hr />
						</div>
					)
				})}
			</div>
		)
	}
});

export default MixinGroup;