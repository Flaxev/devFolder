

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';




function clockwiseTotal (time1, time2) {

	let clockwise = true;

	if(time1 < time2) {

		clockwise = false;

	}

	return clockwise;

}



export default function rendernow (VarDBtime, hourHand, minuteHand, secondHand) {

	var newHour = VarDBtime.getHours();	
	var newMinutes = VarDBtime.getMinutes();
	var newSeconds = VarDBtime.getSeconds();
	
	var	oldHour = hourHand.getPosValue();
	var	oldMin = minuteHand.getPosValue();
	var	oldSec = secondHand.getPosValue();


	const totalTimeOld = ((oldHour * 3600) + (oldMin  * 60) + (oldSec));
	const totalTimeNew = VarDBtime.getTotalTimeInSeconds();
	
	const clockwiseMovement = clockwiseTotal(totalTimeNew, totalTimeOld);

	console.log('clockwisemovement ' + clockwiseMovement);

	hourHand.setPosValue(newHour);
	minuteHand.setPosValue(newMinutes);
	secondHand.setPosValue(newSeconds);

	const hourAngle = hourHand.hrTotalAngle(VarDBtime);
	const minuteAngle = minuteHand.minTotalAngle(VarDBtime);
	const secAngle = secondHand.secTotalAngle(VarDBtime);


	const hourrotation = hourHand.rotationRotate(hourAngle, clockwiseMovement);
	
	const minuterotation = minuteHand.rotationRotate(minuteAngle, clockwiseMovement);
	
	const secrotation = secondHand.rotationRotate(secAngle, clockwiseMovement);

	var rotationresult = {
		hourrotation : hourrotation,
		minuterotation : minuterotation,
		secrotation : secrotation
	};

	return rotationresult;
}

