export default class TheTime {
				
	constructor(hours,mins,secs){
		this.date = new Date(); 
		this.date.setSeconds(secs);
		this.date.setMinutes(mins);
		this.date.setHours(hours);    
	}

	getSeconds(){

		return (this.date.getSeconds());
	}



	getminutes(){

		return(this.date.getMinutes());
	}

	gethours(){
		return(this.date.getHours());
	}

	setSeconds(sec){

		this.date.setSeconds(sec);			
	}

	setMinutes(min){

		this.date.setSeconds(min);			
	}

	setHours(hour){

		this.date.setSeconds(hour);			
	}
}


 