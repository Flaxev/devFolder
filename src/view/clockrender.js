

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';



// function clockwiseMinSec (time1, time2) {

// 	let clockwise =	true;
// 	if (!( (time1 == 0) && (time2 == 59))) {
// 		if(time1 < time2) { 
// 			clockwise = false;
// 		}
// 	}


// 	return clockwise;
// }

// function clockwisehr(time1, time2) {
// 	let clockwise =	true;
// 	if (!( (time1 == 0) && (time2 == 23))) {
// 		if(time1 < time2) {
			
// 			clockwise = false;

// 		}
// 	}

	
// 	return clockwise;
// }

function clockwiseTotal (time1, time2) {

	let clockwise = true;

	if(time1 < time2) {

		clockwise = false;

	}

	return clockwise;

}



export default function rendernow (VarDBtime, hourHand, minuteHand, secondHand) {

	var hour = VarDBtime.getHours();	
	var	currentHour = hourHand.getPosValue();
	var minutes = VarDBtime.getMinutes();
	var	currentMin = minuteHand.getPosValue();
	var seconds = VarDBtime.getSeconds();
	var	currentSec = secondHand.getPosValue();


	const totalTimeCurrent = ((currentHour * 3600) + (currentMin  * 60) + (currentSec));
	const totalTimeBefore = VarDBtime.getTotalTimeInSeconds();
	
	const clockwiseMovement = clockwiseTotal(totalTimeBefore, totalTimeCurrent);

	console.log('clockwisemovement ' + clockwiseMovement);

	// const hrClockwise = clockwisehr(hour, currentHour);
	
	// console.log('hrClockwise ' + hrClockwise);
	
	// const minClockwise = clockwiseMinSec(minutes, currentMin);
	// console.log('minClockwise ' + minClockwise);
	
	// const secClockwise = clockwiseMinSec(seconds, currentSec);
	// console.log('secClockwise ' + secClockwise);


	hourHand.setPosValue(hour);
	minuteHand.setPosValue(minutes);
	secondHand.setPosValue(seconds);


	
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

