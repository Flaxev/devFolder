import ClockHand from '../view/clockhand.js';

export default class Sec extends ClockHand {

	constructor() {

		super();
	}


	secToDeg (sec) {
		let deg = ((360 / 60) * sec);
				
		return deg;
	}


	
	milisecToDeg (milisec) {

		let degmili = (((360 / 60) / 1000) * milisec);

		return degmili;

	}



	secTotalAngle (DBTime) {
		
		let degTotal = ((this.secToDeg(DBTime.getSeconds())) + (this.milisecToDeg(DBTime.getMiliseconds())));
		return (degTotal);
	
	}
}