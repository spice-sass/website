import MixinTabs from "./MixinTabs";
import AppActions from '../../../flux/appActions';
import AppDispatcher from "../../../flux/appDispatchers";

// Ancestors - List > Docs > MixinGroup
// Children -  MixinTabs

var MixinItem = React.createClass({

	componentDidMount () {

		if(this.props.data.name == location.hash.replace('#','')){

			var mix     = this.mix.getDOMNode(),
	            rect    = mix.getBoundingClientRect(),
	            top     = rect.top;

	        AppActions.jumpToTop(top);
		}
	},

	componentWillReceiveProps (nextProps) {

		if(this.mix){

			var mix     = this.mix.getDOMNode(),
				name    = this.props.data.name,
				active  = this.props.active,
				wHalf   = window.innerHeight / 1.5,
	            rect    = mix.getBoundingClientRect(),
	            bottom  = rect.top + rect.height,
	            top     = rect.top;


			if(name != active && (top < wHalf && bottom > wHalf)){
            	AppActions.active(name);
            }
		}
	},

	render (){

		var mixin     = this.props.data,
			goToMixin = this.props.goToMixin,
			type      = this.props.type;

		return (
			<div className={this.props.type} id={mixin.name} ref={(ref) => this.mix = ref}>
				<h2>{type == "mixin" && <span className="leckerli-one">@include</span>} {mixin.name}{type == "func" && <span>()</span>};</h2>
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
										<a onClick={goToMixin.bind(this,link)}>{'@include ' + link}</a>
									</li>
								)
							})}
						</ul>
					</div>
				}
				<hr />
			</div>
		)
	}

});

export default MixinItem;