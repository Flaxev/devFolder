import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import rendernow from './view/clockrender';



const VarDBtime = new TheTime(0,0,0,0); //hours, mins, secs, millisecs

const hourHand = boxFact.createHour();
const minuteHand = boxFact.createMin();
const secondHand = boxFact.createSec();
window.updateCurrentRealTimeNowPlease = VarDBtime.updateCurrentRealTime();
window.haschanged = false;
var btn = document.createElement('BUTTON');
var t = document.createTextNode('Update To Real Time');
btn.addEventListener('click', function() {VarDBtime.updateCurrentRealTime();});
btn.appendChild(t);
document.body.appendChild(btn);
let inputform = createinputform();
document.body.appendChild(inputform);  
VarDBtime.updateCurrentRealTime();
rendernow(VarDBtime,hourHand,minuteHand,secondHand);

// VarDBtime.setSeconds(57);
// VarDBtime.setHours(23);
// VarDBtime.setMinutes(59);



setInterval( function() { 

	console.log('The window has changed  ' + window.haschanged);

	if(window.haschanged) {

		rendernow(VarDBtime,hourHand,minuteHand,secondHand);
		window.haschanged = false;

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

function createinputtextelement (name) {

	let input = document.createElement('input');
	input.type = 'text';
	input.id = name;
	input.placeholder = name;

	return input;

}

function createinputform () {
	
	let secInput = createinputtextelement('Second Input');
	
	let minInput = createinputtextelement('Minute Input');

	let hourInput = createinputtextelement('Hour Input');

	
	let inputbutton = document.createElement('button');
	inputbutton.type = 'text';
	let t = document.createTextNode('Set The Clock');
	inputbutton.appendChild(t);

	inputbutton.onclick = ()=> forminputaction();	

	let inputbox = document.createElement ('div');
	
	inputbox.appendChild(hourInput);
	inputbox.appendChild(minInput);
	inputbox.appendChild(secInput);

	inputbox.appendChild(inputbutton);


	
	
	return inputbox;
}

function forminputaction () {


	let hourInput = document.getElementById('Hour Input').value;
	let minInput = document.getElementById('Minute Input').value;
	let secInput = document.getElementById('Second Input').value;

	VarDBtime.updateByInput(hourInput,minInput,secInput);

	
}






// setTimeout ( function () {

// 	VarDBtime.setSeconds(0);
// 	VarDBtime.setHours(0);
// 	VarDBtime.setMinutes(0);
// 	window.haschanged = true;

// }, 10000);