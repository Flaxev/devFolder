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



	getminutes(){

		return(this.date.getMinutes());
	}

	gethours(){
		return(this.date.getHours());
	}

	setSecond(sec){

		this.date.setSeconds(sec);			
	}

}


 