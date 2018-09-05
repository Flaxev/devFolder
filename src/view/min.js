import ClockHand from './clockhand.js';

export default class Min extends ClockHand {

	constructor() {
		super();
	}
	secToDeg (sec) {
		let deg = ((360 / 60 / 60) * sec);
								
		return deg;
	}
				
	minToDeg (min) {
		let deg = ((360 / 60) * min);    
		return deg;
	}


	minTotalAngle (DBTime) {

		const min = DBTime.getMinutes();
		const sec = DBTime.getSeconds();

		let minuteAngle = this.minToDeg(min) + this.secToDeg(sec);
		
		return minuteAngle;
	}

	
}


 