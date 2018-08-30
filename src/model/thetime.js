export default class TheTime {
				
	constructor(hours,mins,secs,milisecs) {
		this.date = new Date(); 
		this.date.setSeconds(secs);
		this.date.setMinutes(mins);
		this.date.setHours(hours);
		this.date.setMilliseconds(milisecs);    
	}

	getMiliseconds() {

		return(this.date.getMilliseconds());

	}

	getSeconds() {

		return (this.date.getSeconds());
	}

	getminutes() {

		return(this.date.getMinutes());
	}

	gethours() {
		return(this.date.getHours());
	}

	setMiliseconds(milisec) {

		this.date.setMilliseconds(milisec);

	}

	setSeconds(sec) {

		this.date.setSeconds(sec);			
	}

	setMinutes(min) {

		this.date.setMinutes(min);			
	}

	setHours(hour) {

		this.date.setHours(hour);			
	}


}


 