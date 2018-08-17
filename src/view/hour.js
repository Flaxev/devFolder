import ClockHand from '../view/clockhand.js';

export default class Hour extends ClockHand {
		
	constructor(){ 
		super();
	}
	secToDeg (sec) {
		let deg= ((360/12/60/60)*sec);
        
		return deg;
	}
    
	minToDeg (min) {
		let deg= ((360/12/60)*min);    
		return deg;
	}
				
	hourToDeg (hour) {
		let deg= ((360/12)*hour);    
		return deg;
	}

	totalDegs (hour,min,sec){

		var Total=this.hourToDeg(hour)+this.minToDeg(min)+this.secToDeg(sec);
		return Total;
	}
}
