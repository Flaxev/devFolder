import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import rendernow from './view/clockrender';



const VarDBtime = new TheTime(0,0,0,0); //hours, mins, secs, millisecs

const hourHand = boxFact.createHour();
const minuteHand = boxFact.createMin();
const secondHand = boxFact.createSec();
let haschanged = false;

VarDBtime.updateCurrentRealTime();
rendernow(VarDBtime,hourHand,minuteHand,secondHand);

// VarDBtime.setSeconds(57);
// VarDBtime.setHours(23);
// VarDBtime.setMinutes(59);



setInterval( function() { 

	if(haschanged) {

		rendernow(VarDBtime,hourHand,minuteHand,secondHand);
		haschanged = false;

	}

	else {

		timeflow ();

	}
	


}, 1000);



function timeflow () {

	const secCurrent = VarDBtime.getSeconds();

	let secNew = 0;

	secNew = secCurrent + 1;

	VarDBtime.setSeconds(secNew);
	rendernow(VarDBtime,hourHand,minuteHand,secondHand);
	
	
}




// setTimeout ( function () {

// 	VarDBtime.setSeconds(0);
// 	VarDBtime.setHours(0);
// 	VarDBtime.setMinutes(0);
// 	haschanged = true;

// }, 10000);