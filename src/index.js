import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import rendernow from './view/clockrender';
import DomEditor from './view/domeditor.js';
import Clock from './view/clock.js';


const clock = new Clock();
const domUtils = new DomEditor();
const VarDBtime = new TheTime(0,0,0,0); 
var ticTime = 1000;
const hourHand = boxFact.createHour();
const minuteHand = boxFact.createMin();
const secondHand = boxFact.createSec();

window.haschanged = false;


var btn = domUtils.createButtonForaction('Update To Real Time',() => VarDBtime.updateCurrentRealTime());
document.body.appendChild(btn);

let inputform = domUtils.createinputform(domUtils.forminputaction,VarDBtime);
document.body.appendChild(inputform);  

VarDBtime.updateCurrentRealTime();

rendernow(VarDBtime,hourHand,minuteHand,secondHand);



setInterval( function() { 

	console.log('The window has changed  ' + window.haschanged);

	if(window.haschanged) {
		clock.changeTransTime(this.ticTime);
		rendernow(VarDBtime,hourHand,minuteHand,secondHand);
		window.haschanged = false;

	}

	else {
		clock.changeTransTime(this.ticTime);
		clock.timeflow (VarDBtime,hourHand,minuteHand,secondHand);

	}
	


}, ticTime);












// function changeTransTime(ticTime) {

// 	const hands = document.querySelectorAll('#second');
// 	console.log('HE ENTRADO EN LA FUNCION');
// 	hands.forEach(function (item, index) {
// 		let secs = (ticTime / 1000) / 2;
// 		item.style.transitionDuration = (secs + 's');
// 		// console.log('trans time is ' + item.style.transitionDuration);
// 		console.log('HE ENTRADO EN EL FOR EACH');
// 	});



// }


// function timeflow () {

// 	const secCurrent = VarDBtime.getSeconds();

// 	let secNew = 0;

// 	secNew = secCurrent + 1;

// 	VarDBtime.setSeconds(secNew);
// 	rendernow(VarDBtime,hourHand,minuteHand,secondHand);
	
	
// }

// const ticTimeInput = createinputtextelement('ticTimeInput');

// let ticTimeBtn = document.createElement('BUTTON');
// var ticText = document.createTextNode('Set Tic Time');

// ticTimeBtn.addEventListener('click', updateTransTime);
// ticTimeBtn.appendChild(ticText);
// document.body.appendChild(ticTimeInput);
// document.body.appendChild(ticTimeBtn);




// var btn = document.createElement('BUTTON');
// var t = document.createTextNode('Update To Real Time');

// btn.addEventListener('click', function() {VarDBtime.updateCurrentRealTime();});
// btn.appendChild(t);

// function forminputaction (updateTimeinput) {


// 	let hourInput = document.getElementById('Hour Input').value;
// 	let minInput = document.getElementById('Minute Input').value;
// 	let secInput = document.getElementById('Second Input').value;

	
// 	VarDBtime.updateByInput(hourInput,minInput,secInput);

	
// }

// function updateTransTime() {

// 	let ticTimer = document.getElementById('ticTimeInput').value;
// 	console.log('Tic TIme is ' + ticTimer);
// 	this.ticTime = ticTimer;

// }






// setTimeout ( function () {

// 	VarDBtime.setSeconds(0);
// 	VarDBtime.setHours(0);
// 	VarDBtime.setMinutes(0);
// 	changeTransTime(2);
// 	window.haschanged = true;

// }, 10000);


// function createinputtextelement (name) {

// 	let input = document.createElement('input');
// 	input.type = 'text';
// 	input.id = name;
// 	input.placeholder = name;

// 	return input;

// }

// function createinputform () {
	
// 	let secInput = createinputtextelement('Second Input');
	
// 	let minInput = createinputtextelement('Minute Input');

// 	let hourInput = createinputtextelement('Hour Input');

	
// 	let inputbutton = document.createElement('button');
// 	inputbutton.type = 'text';
// 	let t = document.createTextNode('Set The Clock');
// 	inputbutton.appendChild(t);

// 	inputbutton.onclick = ()=> forminputaction();	

// 	let inputbox = document.createElement ('div');
	
// 	inputbox.appendChild(hourInput);
// 	inputbox.appendChild(minInput);
// 	inputbox.appendChild(secInput);

// 	inputbox.appendChild(inputbutton);
	
	
	
	
// 	return inputbox;
// }