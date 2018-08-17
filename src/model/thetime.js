export default class TheTime {
				
	constructor(secs,mins,hours){
		this.date = new Date(); 
		this.date.setSeconds(secs);
		this.date.setMinutes(mins);
		this.date.setHours(hours);    
	}

	getSeconds(){

		return (this.date.getSeconds());
	}



	getMinutes(){

		return(this.date.getMinutes());
	}

	getHours(){
		return(this.date.getHours());
	}

	setSecond(sec){

		this.date.setSeconds(sec);			
	}

}


 