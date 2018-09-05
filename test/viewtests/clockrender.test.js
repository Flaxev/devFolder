import boxFact from '../../src/magicbox/boxfact';
jest.mock('../../src/magicbox/objectselector.js');
import obtainElement from '../../src/magicbox/objectselector';
import TheTime from '../../src/model/thetime';

let VarDBTime = new TheTime(0, 0, 0, 0); //hours, mins , secs

let hourHand = boxFact.createHour();
let minHand = boxFact.createMin();
let secHand = boxFact.createSec();
let isAfter = true;
let result = null;
let spinNumber = null;
let clockwise = true;
let desiredAngle = 0;


beforeEach(function() {

	
	result = null;
	let dummyElement = document.createElement('div');
	obtainElement.mockImplementation(() => dummyElement);

	hourHand.setObjtarget(obtainElement('default'));
	minHand.setObjtarget(obtainElement('default'));
	secHand.setObjtarget(obtainElement('default'));

	hourHand.setPosDegrees(0);
	hourHand.setPosValue(0);
	hourHand.setPosAbsDegrees(0);

	minHand.setPosDegrees(0);
	minHand.setPosValue(0);
	minHand.setPosAbsDegrees(0);

	secHand.setPosDegrees(0);
	secHand.setPosValue(0);
	secHand.setPosAbsDegrees(0);



});

describe('Test updatebyinput function', function() {

	describe('Should change in the model same input as provided for each hr,min,sec', function() {

		it('Should change Time model Sec to input', function() { 

			//GIVEN
			let hour = null;
			let min = null;
			let sec = null;
			//WHEN
			hour = 10;
			min = 5;
			sec = 3;
			result = VarDBTime.updateByInput(hour, min, sec);
			//THEN
			expect(VarDBTime.getSeconds()).toBe(sec);
		});

		it('Should change Time model min to input', function() { 

			//GIVEN
			let hour = null;
			let min = null;
			let sec = null;
			//WHEN
			hour = 10;
			min = 5;
			sec = 3;
			result = VarDBTime.updateByInput(hour, min, sec);
			//THEN
			expect(VarDBTime.getMinutes()).toBe(min);
		});


		it('Should change Time model hour to input', function() { 

			//GIVEN
			let hour = null;
			let min = null;
			let sec = null;
			//WHEN
			hour = 10;
			min = 5;
			sec = 3;
			result = VarDBTime.updateByInput(hour, min, sec);
			//THEN
			expect(VarDBTime.getHours()).toBe(hour);
		});
	});




});
