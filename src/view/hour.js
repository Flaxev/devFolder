import ClockHand from '../view/clockhand.js';

export default class Hour extends ClockHand {
		
	constructor(){ 
		super();
	}
	sectodeg (sec) {
		let deg= ((360/12/60/60)*sec);
        
		return deg;
	}
    
	mintodeg (min) {
		let deg= ((360/12/60)*min);    
		return deg;
	}
				
	hourtodeg (hour) {
		let deg= ((360/12)*hour);    
		return deg;
	}
}


// static create(objname,posgrados,possecs, utils) {
// 	ClockHand.create(objname,posgrados, utils, Hour);
// }
