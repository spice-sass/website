class Timing {
	constructor(time,className) {
		this.time      = time;
		this.className = className;

		return {
			d : this.time,
			c : this.className
		}
	}

	static timer(t) {

		return false
	}
}

export default Timing;