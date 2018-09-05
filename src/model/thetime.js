export default class TheTime {
				
	constructor(hours, mins, secs, milisecs) {
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

	getMinutes() {

		return(this.date.getMinutes());
	}

	getHours() {
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

	updateCurrentRealTime () {

		let currentTime = {
			hour : null,
			min : null,
			sec: null 
		};
		const d = new Date();
	
		currentTime.hour = d.getHours();
		currentTime.min = d.getMinutes();
		currentTime.sec = d.getSeconds();
		
		this.setHours(currentTime.hour);
		this.setMinutes(currentTime.min);
		this.setSeconds(currentTime.sec);

		console.log(' REAL TIME IS : Hours: ' + currentTime.hour + ' Minutes: ' + currentTime.min + ' Seconds: ' + currentTime.sec);
		
		window.haschanged = true;
		
		return currentTime;
	
	
	}

	updateByInput (Hr, min, sec) {

		this.setHours(Hr);
		this.setMinutes(min);
		this.setSeconds(sec);

		window.haschanged = true;

		
	}

	getTotalTimeInSeconds() {

		const secs = ((this.getHours() * 3600) + (this.getMinutes() * 60) + this.getSeconds());

		return secs;
	}

}


 