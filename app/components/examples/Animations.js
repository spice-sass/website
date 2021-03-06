let Animations = React.createClass({

	getInitialState () {
		return{
			currentClass : "fade-in",
			enters : [
				"fade-in",
				"slide-in-up",
				"slide-in-down",
				"slide-in-left",
				"slide-in-right",
				"rotate-in"
			],
			exits : [
				"slide-out-up",
				"slide-out-down",
				"slide-out-left",
				"slide-out-right"
			]
		}
	},

	switchClass (anim) {

		var self = this;

		if(anim != this.state.currentClass){
			this.setState({
				currentClass : anim
			});
		} else {
			this.setState({
				currentClass : ""
			});

			setTimeout(function(){
				self.setState({
					currentClass : anim
				});
			},10);
		}
	},

	render (){

		function niceName(str){
			var newStr = str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
			return newStr
		}

		var enterList = this.state.enters.map(function(anim){
			return <button className={this.state.currentClass == anim ? "active" : ""} onClick={this.switchClass.bind(this,anim)}>{niceName(anim)}</button>
		},this);

		var exitList = this.state.exits.map(function(anim){
			return <button className={this.state.currentClass == anim ? "active" : ""} onClick={this.switchClass.bind(this,anim)}>{niceName(anim)}</button>
		},this);

		return (
			<div className="container">
				<h1>Animations</h1>
				<p>Click on the buttons below to see examples of the preset animations with a staggering effect</p>
				<div className="grid-row">
					<div className="grid-col-8" id="main-logo">
						<svg className="slide-in-down" viewBox="-180 204.3 481 188">
							<g className="logo-wrapper">
								<path className={'text s '+this.state.currentClass} d="M-159.5,310.5v6.2c0,5.3,6.7,8.5,14.5,8.5c8.4,0,14.3-3.6,14.3-10.2c0-8.4-9.4-11-18.9-14.8
									c-11-4.2-21.8-9.2-21.8-23.9c0-16.6,13.5-23,27.7-23c13,0,26.2,5,26.2,14.5v10.8h-14V273c0-4.2-6.2-6.4-12.3-6.4
									c-6.7,0-12.3,2.8-12.3,9.1c0,7.6,7.7,10.2,16.3,13.5c12.3,4.4,24.6,9.3,24.6,24.8c0,16.9-14.2,24.6-29.8,24.6
									c-13.7,0-28.4-6.2-28.4-18.6v-9.4h13.9V310.5z"/>
								<path className={"text p "+this.state.currentClass} d="M-73.7,325.8h9.9v-59.7h-9.9v-11.5h39.5c4.9,0,9.9,0.3,13.9,2.1c8.9,3.7,14.8,12.9,14.8,24.4
									c0,11.7-6.2,21.7-15.7,25.1c-3.8,1.3-8,1.6-12.7,1.6h-14.8v17.9h10v11.4h-35.1L-73.7,325.8L-73.7,325.8z M-35.8,295.7
									c3.5,0,6-0.5,8.4-1.6c4.4-2.2,6.7-6.9,6.7-12.9c0-5.7-2.2-10.1-6-12.3c-2.3-1.4-5.2-2-8.9-2h-12.9v28.8
									C-48.5,295.7-35.8,295.7-35.8,295.7z"/>
								<g className={"chilli "+this.state.currentClass}>
									<path className="light-red" d="M74.2,247c11,3.6,17.3,13.3,14.8,22.9c-5.3,21.1-19.9,37.7-4.9,76.9c9.1,23.9,5.5,24,0.5,24.4
										s-28-6.8-44.4-44.6c-12.4-28.5-14.4-65.4-6.7-74.2c4.1-4.7,12.6-7.1,19.2-8.6c4.6-1.1,9.5-0.8,14.1,0.7L74.2,247z"/>
									<path className="dark-red" d="M53.4,248.7c0.8-2.4-2.1-4.5-4.9-3.6c-5,1.6-11.8,3.8-15,7.5c-7.7,8.8-5.7,45.7,6.7,74.2
										c13.3,30.7,34.4,41,41.8,43.7c0.7,0.3,1.5-0.5,1-1.1C33.3,312.6,45.9,271.3,53.4,248.7z"/>
									<path className="highlight" d="M75.9,272.1l1.2,1.3c0.7,0.7,1.3,2.2,0.8,3.4c-6.5,14.5-9.1,23.7-5.2,52.6c0.7,4.9-16.4-42.4-0.3-58
										C74.2,269.7,74.5,270.6,75.9,272.1z"/>
									<path className="light-green" d="M31,261.5c-0.6-5.7,0.7-10.9,6.3-14.1c8.1-4.4,39.6-9.2,47.5,5c10.1,18.1-1.7,5.2-22.4,8.4
										c-6,0.9-17,9.7-26.6,6.5C33.7,266.7,31.2,263.2,31,261.5z"/>
									<path className="dark-green" d="M48.5,265.7c-1.3,4.9-12.7,1.7-12.7,1.7c-2.1-0.7-4.7-4.3-4.9-5.8c-0.6-5.7,0.7-10.9,6.3-14.1
										c0,0,11.5-4.5,19.3-3.9C56.6,243.6,53.9,246.3,48.5,265.7z"/>
									<path className="light-green" d="M57.3,244.2c0,0-1.7-23.3,10.2-23.7c0,0-1.5,3,1.9,3.5c0,0-10.9,13.7-9.4,19.2S57.3,244.2,57.3,244.2z"/>
								</g>
								<path className={"text c "+this.state.currentClass} d="M154.7,253.2c10,0,32.2,3.5,32.2,16.5v11.2H173v-6.4c0-6.2-10.9-8.3-17.7-8.3c-15.9,0-27.5,11.2-27.5,28.6
									c0,18.6,12.1,30.7,28.4,30.7c5,0,17.9-1.6,17.9-8.1V311h13.8v11.3c0,12.3-21.3,16.3-32.7,16.3c-25,0-43.1-18.9-43.1-43
									C112.1,271.1,130.7,253.2,154.7,253.2z"/>
								<path className={"text e "+this.state.currentClass} d="M229.7,325.8h9.9v-59.7h-9.9v-11.5H291v21.3h-13v-9.1h-23.1v22.7H282v12.2h-27.2v23.2h24.9v-9.3h13v21.5h-63
									L229.7,325.8L229.7,325.8z"/>
							</g>
						</svg>
					</div>
					<div className="grid-col-3 grid-col-indent-1" id="anim-list">
						<p className={this.state.currentClass}>Spice animation mixins</p>
						<p className={this.state.currentClass}>are a great way to add</p>
						<p className={this.state.currentClass}>a little more finesse</p>
						<p className={this.state.currentClass}>to your user interface.</p>
						<p className={this.state.currentClass}>Click the buttons to demo.</p>
					</div>
				</div>
				<div className="grid-row">
					<h6>Entrances</h6>
					<div className="button-group animations">
						{enterList}
					</div>
					<h6>Exits</h6>
					<div className="button-group animations">
						{exitList}
					</div>
					<h6>Attention grabbers</h6>
					<div className="grid-row">
						<button className="grabber magic flat-secondary">Magic</button>
						<button className="grabber elastic flat-secondary">Elastic</button>
						<button className="grabber pulse flat-secondary">Pulse</button>
					</div>
				</div>
			</div>
		)
	}
});

export default Animations;