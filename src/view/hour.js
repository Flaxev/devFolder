import ClockHand from './clockhand.js';

export default class Hour extends ClockHand {	
	constructor() {	
		super();
	}
	secToDeg (sec) {
		let deg = ((360 / 12 / 60 / 60) * sec);
        
		return deg;
	}
    
	minToDeg (min) {
		let deg = ((360 / 12 / 60) * min);    
		return deg;
	}
				
	hourToDeg (hour) {
		let deg = ((360 / 12) * hour);    
		return deg;
	}


	hrTotalAngle (DBTime) {

		const hour = DBTime.getHours();
		const min = DBTime.getMinutes();
		const sec = DBTime.getSeconds();

		let hourAngle = ((this.hourToDeg(hour) + this.minToDeg(min) + this.secToDeg(sec)) % 360);
		
		return hourAngle;
	}

}


