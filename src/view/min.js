import ClockHand from '../view/clockhand.js';

export default class Min extends ClockHand {

	constructor(){
		super();
	}
	sectodeg (sec) {
		let deg= ((360/60/60)*sec);
								
		return deg;
	}
				
	mintodeg (min) {
		let deg= ((360/60)*min);    
		return deg;
	}
}


 