import MixinTabs from "./MixinTabs";
import MixinItem from "./MixinItem";


// Ancestors - List > Docs
// Children - MixinItem > MixinTabs

var MixinGroup = React.createClass({

	render() {

		var group     = this.props.ord,
			inc       = this.props.includes,
			active    = this.props.active,
			scroll    = this.props.scroll,
			goToMixin = this.props.goToMixin,
			mixins    = inc[group].mixins,
			fns       = inc[group].functions,
			title     = inc[group].title,
			search    = inc[group].searchTerms,
			intro     = inc[group].intro;

		return (
			<div>
				{search.toLowerCase().indexOf(this.props.filterTerm) > -1 &&
					<div className="include-block" id={group} >
						<h1>{{title}}</h1>
						{intro && <div dangerouslySetInnerHTML={{__html: intro}} />}	
						<hr />
						{mixins.map(function(mixin){
							return <MixinItem data={mixin} type="mixin" active={active} scroll={scroll} goToMixin={goToMixin}/>
						})}
						{fns && fns.map(function(fn){
							return <MixinItem data={fn} type="func" active={active} scroll={scroll} goToMixin={goToMixin}/>
						})}
					</div>
				}
			</div>
		)
	}
});

export default MixinGroup;