

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';


export default function renderview(VarDBtime,hourHand,minuteHand,secondHand) {
	
	
	var DBtime=VarDBtime;
	var hourH = hourHand;
	var minH = minuteHand;
	var secH = secondHand;
	
	
	// var VarDBtime = new TheTime(30,50,14); //hours, mins , secs
	var isAfter= true;
	// hourHand.movePositionDeg(hourHand.hourToDeg(currentHourDeg)+hourHand.minToDeg(currentMinDeg)+hourHand.secToDeg(currenSecDeg),isAfter);
	// minuteHand.movePositionDeg(minuteHand.minToDeg(currentMinDeg)+minuteHand.secToDeg(currenSecDeg),isAfter);
	// secondHand.movePositionDeg(secondHand.secToDeg(currenSecDeg),isAfter);
	
	
	rendernow(DBtime,hourH,minH,secH,isAfter);


	// setTimeout(rendernow(VarDBtime,hourHand,minuteHand,secondHand,isAfter),1000);
	
	var degreees=secondHand.posDegrees;
     
	console.log('retorno los grados:'+ degreees);
	console.log('tiempo son '+VarDBtime.getSeconds()+'segundos');
	console.log('las horas son '+hourHand.hourToDeg(VarDBtime.gethours())+' grados');
	console.log('Son las '+VarDBtime.gethours()+':'+VarDBtime.getminutes()+':'+VarDBtime.getSeconds());



	// setInterval(renderflow(VarDBtime,hourHand,minuteHand,secondHand,isAfter),500);

	

}


// function timeflow1sec(VarDBtime){

// 	var currentSecond = VarDBtime.getSeconds();
// 	VarDBtime.setSecond(currentSecond+1);

// 	return currentSecond+1;
// }


function rendernow (VarDBtime,hourHand,minuteHand,secondHand,isAfter){

	var hour=VarDBtime.gethours();	
	var	currentHour=hourHand.getPosValue();
	var minutes=VarDBtime.getminutes();
	var	currentMin=minuteHand.getPosValue();
	var seconds=VarDBtime.getSeconds();
	var	currentSec=secondHand.getPosValue();
	
	console.log('second is time = '+seconds);
	console.log('second is current = '+currentSec);


	var hourIsAfter = true;

	if(hour<=currentHour){
		hourIsAfter = false;
	}
	
	console.log('hour is after = '+hourIsAfter);
	
	var minIsAfter = true;
	
	if(minutes<=currentMin){
		minIsAfter = false;
	}
	console.log('min is after = '+minIsAfter);
	
	var secIsAfter = true;

	console.log('second compare '+(seconds>=currentSec));

	if((seconds<=currentSec)){
		secIsAfter = false;
	}

	
	console.log('second is after = '+secIsAfter);
	

	console.log('Hours: '+hour+' Minutes: '+minutes+' Seconds: '+seconds);


	//moveTotalRotation start

	var hourAngle= hourHand.hourToDeg(hour)+hourHand.minToDeg(minutes)+hourHand.secToDeg(seconds);
	console.log('hour total Angle is :'+hourAngle);
	hourHand.movePositionDeg(hourAngle,hourIsAfter);
	var minuteAngle = minuteHand.minToDeg(minutes)+minuteHand.secToDeg(seconds);
	console.log('minute total Angle is :'+minuteAngle);
	minuteHand.movePositionDeg(minuteAngle,minIsAfter);
	var secAngle = secondHand.secToDeg(seconds);
	console.log('second total Angle is :'+secAngle);
	secondHand.movePositionDeg(secAngle,secIsAfter);
	hourHand.setPosValue(hour);
	minuteHand.setPosValue(minutes);
	secondHand.setPosValue(seconds);
	//moveTotalRotation finish

	// moveTotalRotation (VarDBtime,hour,hourIsAfter,minutes,minIsAfter,seconds,secIsAfter,hourHand,minuteHand,secondHand);


	// hourHand.movePositionDeg(hourHand.hourToDeg(VarDBtime.gethours())+hourHand.minToDeg(VarDBtime.getminutes())+hourHand.secToDeg(VarDBtime.gethours()),hourIsAfter);
	// minuteHand.movePositionDeg(minuteHand.minToDeg(VarDBtime.getminutes())+minuteHand.secToDeg(VarDBtime.getSeconds()),minIsAfter);
	// secondHand.movePositionDeg(secondHand.secToDeg(VarDBtime.getSeconds()),secIsAfter);
}

function moveTotalRotation (VarDBtime,hourIsAfter,minIsAfter,secIsAfter,hourHand,minuteHand,secondHand) {

	var hour=VarDBtime.gethours();	
	hourHand.setPosValue(hour);
	var minutes=VarDBtime.getminutes();
	minuteHand.setPosValue(minutes);
	var seconds=VarDBtime.getSeconds();
	secondHand.setPosValue(seconds);

	var hourAngle= hourHand.hourToDeg(hour)+hourHand.minToDeg(minutes)+hourHand.secToDeg(seconds);
	console.log('hour total Angle is :'+hourAngle);
	hourHand.movePositionDeg(hourAngle,hourIsAfter);
	var minuteAngle = minuteHand.minToDeg(minutes)+minuteHand.secToDeg(seconds);
	console.log('minute total Angle is :'+minuteAngle);
	minuteHand.movePositionDeg(minuteAngle,minIsAfter);
	var secAngle = secondHand.secToDeg(seconds);
	console.log('second total Angle is :'+secAngle);
	secondHand.movePositionDeg(secAngle,secIsAfter);

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






