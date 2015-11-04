import MixinTabs from "./MixinTabs";

var MixinItem = React.createClass({

	render (){

		var mixin = this.props.data;
		return (
			<div className={this.props.type} id={mixin.name}>
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
	}

});

export default MixinItem;