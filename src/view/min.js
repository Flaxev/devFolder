import ClockHand from '../view/clockhand.js';

export default class Min extends ClockHand {

	constructor(){
		super();
	}
	secToDeg (sec) {
		let deg= ((360/60/60)*sec);
								
		return deg;
	}
				
	minToDeg (min) {
		let deg= ((360/60)*min);    
		return deg;
	}

	
}


 