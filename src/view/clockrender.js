

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';


export default function renderview(VarDBtime,hourHand,minuteHand,secondHand) {
	
	
	
	// var VarDBtime = new TheTime(30,50,14); //secs, mins , hours
	var isAfter= true;
	// var hourhand = new HourHand('#hour',0);
	// var minutehand = new min('#minute',0);
	// var secondhand = new sec('#second',0);
	// var hourHand=boxFact.createHour();
	// var minuteHand=boxFact.createMin();
	// var secondHand=boxFact.createSec();


	hourHand.movePositionDeg(hourHand.hourtodeg(VarDBtime.gethours())+hourHand.mintodeg(VarDBtime.getminutes())+hourHand.sectodeg(VarDBtime.gethours()),isAfter);
	minuteHand.movePositionDeg(minuteHand.mintodeg(VarDBtime.getminutes())+minuteHand.sectodeg(VarDBtime.getSeconds()),isAfter);
	secondHand.movePositionDeg(secondHand.sectodeg(VarDBtime.getSeconds()),isAfter);
	
	



	setTimeout(rendernow(VarDBtime,hourHand,minuteHand,secondHand,isAfter),1000);
	
	var degreees=secondHand.posDegrees;
     
	console.log('retorno los grados:'+ degreees);
	console.log('tiempo son '+VarDBtime.getSeconds()+'segundos');
	console.log('las horas son '+hourHand.hourtodeg(VarDBtime.gethours())+' grados');
	console.log('Son las '+VarDBtime.gethours()+':'+VarDBtime.getminutes()+':'+VarDBtime.getSeconds());



	// setInterval(renderflow(VarDBtime,hourHand,minuteHand,secondHand,isAfter),500);

	

}


// function timeflow1sec(VarDBtime){

// 	var currentSecond = VarDBtime.getSeconds();
// 	VarDBtime.setSecond(currentSecond+1);

// 	return currentSecond+1;
// }

export function rendernow (VarDBtime,hourHand,minuteHand,secondHand,isAfter){

	
	hourHand.movePositionDeg(hourHand.hourtodeg(VarDBtime.gethours())+hourHand.mintodeg(VarDBtime.getminutes())+hourHand.sectodeg(VarDBtime.gethours()),isAfter);
	minuteHand.movePositionDeg(minuteHand.mintodeg(VarDBtime.getminutes())+minuteHand.sectodeg(VarDBtime.getSeconds()),isAfter);
	secondHand.movePositionDeg(secondHand.sectodeg(VarDBtime.getSeconds()),isAfter);
}

// }

// function timeflow(VarDBtime){
// 	return new Promise(resolve => {
// 		setInterval(() => {
// 			resolve(timeflow1sec(VarDBtime));
// 		},500);

// 	});


// 	timeflow(VarDBtime)
// 		.then(rendernow(VarDBtime,hourHand,minuteHand,secondHand,isAfter));
// }






