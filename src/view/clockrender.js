

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';



function clockwise (time1, time2) {

	let clockwise =	true;
	if (!( (time1 == 0) && (time2 == 59))) {
		if(time1 < time2) { 
			clockwise = false;
		}
	}


	return clockwise;
}

function clockwisehr(time1, time2) {
	let clockwise =	true;
	if (!( (time1 == 0) && (time2 == 23))) {
		if(time1 < time2) {
			
			clockwise = false;

		}
	}

	
	return clockwise;
}


export default function rendernow (VarDBtime, hourHand, minuteHand, secondHand) {

	var hour = VarDBtime.gethours();	
	var	currentHour = hourHand.getPosValue();
	var minutes = VarDBtime.getminutes();
	var	currentMin = minuteHand.getPosValue();
	var seconds = VarDBtime.getSeconds();
	var	currentSec = secondHand.getPosValue();
	
	


	const hrClockwise = clockwisehr(hour, currentHour);
	
	
	
	const minClockwise = clockwise(minutes, currentMin);
	
	
	const secClockwise = clockwise(seconds, currentSec);
	


	hourHand.setPosValue(hour);
	minuteHand.setPosValue(minutes);
	secondHand.setPosValue(seconds);


	
	const hourAngle = hourHand.hrTotalAngle(VarDBtime);
	const minuteAngle = minuteHand.minTotalAngle(VarDBtime);
	const secAngle = secondHand.secTotalAngle(VarDBtime);





	const hourrotation = hourHand.rotationRotate(hourAngle, hrClockwise);
	
	const minuterotation = minuteHand.rotationRotate(minuteAngle, minClockwise);
	
	const secrotation = secondHand.rotationRotate(secAngle, secClockwise);

	var rotationresult = {
		hourrotation : hourrotation,
		minuterotation : minuterotation,
		secrotation : secrotation
	};

	return rotationresult;
}

