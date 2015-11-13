var Icons = React.createClass({

	getInitialState () {

		var blockIcons = ["controller-fast-backward", "arrow-with-circle-down", "arrow-with-circle-left", "arrow-with-circle-right", "arrow-with-circle-up", "cloud", "controller-fast-forward", "controller-jump-to-start", "controller-next", "controller-paus", "controller-play", "controller-record", "controller-stop", "controller-volume", "dots-three-horizontal", "dots-three-vertical", "download", "flow-branch", "flow-cascade", "flow-line", "flow-parallel", "flow-tree", "install", "layers", "open-book", "resize-100", "resize-full-screen", "save", "select-arrows", "trash", "triangle-down", "triangle-left", "triangle-right", "triangle-up", "uninstall", "upload-to-cloud", "upload", "add-user", "aircraft", "align-bottom", "align-horizontal-middle", "align-left", "align-right", "align-top", "align-vertical-middle", "area-graph", "back-in-time", "back", "bar-graph", "battery", "beamed-note", "block", "book", "browser", "brush", "bucket", "cake", "calculator", "calendar", "camera", "ccw", "chat", "check", "circle", "circular-graph", "clapperboard", "code", "cog", "colours", "compass", "copy", "credit-card", "credit", "cross", "cw", "cycle", "database", "dial-pad", "direction", "document", "documents", "drink", "drive", "drop", "edit", "email", "emoji-happy", "emoji-neutral", "emoji-sad", "erase", "eraser", "export", "eye", "folder", "forward", "funnel", "game-controller", "gauge", "globe", "graduation-cap", "grid", "hair-cross", "hand", "heart-outlined", "heart", "help-with-circle", "help", "home", "hour-glass", "inbox", "infinity", "info-with-circle", "key", "keyboard", "lab-flask", "landline", "laptop", "leaf", "level-down", "level-up", "lifebuoy", "light-bulb", "light-up", "line-graph", "link", "list", "location", "lock-open", "lock", "log-out", "login", "loop", "magnet", "magnifying-glass", "mail", "map", "menu", "message", "mobile", "mouse", "music", "network", "new-message", "news", "old-mobile", "old-phone", "palette", "paper-plane", "pencil", "phone", "pie-chart", "pin", "plus", "popup", "power-plug", "price-ribbon", "price-tag", "print", "progress-empty", "progress-full", "progress-one", "progress-two", "publish", "quote", "radio", "reply-all", "reply", "retweet", "rocket", "round-brush", "rss", "ruler", "scissors", "share-alternitive", "share", "shopping-basket", "shopping-cart", "shuffle", "signal", "sound-mix", "sports-club", "spreadsheet", "squared-cross", "squared-minus", "squared-plus", "star-outlined", "star", "stopwatch", "suitcase", "swap", "switch", "tablet", "tag", "text", "thermometer", "thunder-cloud", "ticket", "time-slot", "tv", "typing"];
		var lineIcons  = ["eye", "paper-clip", "mail", "toggle", "layout", "link", "bell", "lock", "unlock", "ribbon", "image", "signal", "target", "clipboard", "clock", "watch", "air-play", "camera", "video", "disc", "printer", "monitor", "server", "cog", "heart", "paragraph", "align-justify", "align-left", "align-center", "align-right", "book", "layers", "stack", "stack-2", "paper", "paper-stack", "search", "zoom-in", "zoom-out", "reply", "circle-plus", "circle-minus", "circle-check", "circle-cross", "square-plus", "square-minus", "square-check", "square-cross", "microphone", "record", "skip-back", "rewind", "play", "pause", "stop", "fast-forward", "skip-forward", "shuffle", "repeat", "folder", "umbrella", "moon", "thermometer", "drop", "sun", "cloud", "cloud-upload", "cloud-download", "upload", "download", "location", "location-2", "map", "battery", "head", "briefcase", "speech-bubble", "anchor", "globe", "box", "reload", "share", "marquee", "marquee-plus", "marquee-minus", "tag", "power", "command", "alt", "esc", "bar-graph", "bar-graph-2", "pie-graph", "star", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "volume", "mute", "content-right", "content-left", "grid", "grid-2", "columns", "loader", "bag", "ban", "flag", "trash", "expand", "contract", "maximize", "minimize", "plus", "minus", "check", "cross", "move", "delete", "menu", "archive", "inbox", "outbox", "file", "file-add", "file-subtract", "help", "open", "ellipsis"];

		return{
			blockIcons : blockIcons,
			lineIcons  : lineIcons
		}
	},

	render () {
		return (
			<div className="container">
				<h4>Line Icons</h4>
				{this.state.blockIcons.map(function(icon){
					return(
						<div className="icon-example">
							<span className={'block-icon-'+icon}></span>
							<p className="tooltip-body">{'.block-icon-'+icon}</p>
						</div>
					)
				})}
			</div>
		)
	}
});

export default Icons;