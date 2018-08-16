import ClockHand from '../view/clockhand.js';

export default class Sec extends ClockHand {

	constructor(){

		super();
	}


	sectodeg (sec) {
		let deg= ((360/60)*sec);
				
		return deg;
	}




}




