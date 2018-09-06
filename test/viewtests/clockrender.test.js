import boxFact from '../../src/magicbox/boxfact';
jest.mock('../../src/magicbox/objectselector.js');
import obtainElement from '../../src/magicbox/objectselector';
import TheTime from '../../src/model/thetime';
import rendernow from '../../src/view/clockrender';

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

	VarDBTime.setHours(0);
	VarDBTime.setMinutes(0);
	VarDBTime.setSeconds(0);
	VarDBTime.setMiliseconds(0);

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


describe('Test the rendernow function', function() {


	it('Should return rotation result (hourrotation = 0, minuterotation = 0, secrotation = 0) GIVEN previous time (0 hours, 0 minutes, 0 seconds)', function() {

		//GIVEN



		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(0);
		VarDBTime.setMiliseconds(0);


		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		hourHand.setPosAbsDegrees(0);
	
		minHand.setPosDegrees(0);
		minHand.setPosValue(0);
		minHand.setPosAbsDegrees(0);
	
		secHand.setPosDegrees(0);
		secHand.setPosValue(0);
		secHand.setPosAbsDegrees(0);

		//WHEN 

		result = rendernow(VarDBTime, hourHand, minHand, secHand );

		//THEN

		expect(result.hourrotation).toBe(0);
		expect(result.minuterotation).toBe(0);
		expect(result.secrotation).toBe(0);

	});


	it('Should return rotation result (hourrotation > 0 secrotation, minuterotation > 0, secrotation = 180) GIVEN previous time (0 hours, 0 minutes, 30 seconds)', function() {

		//GIVEN



		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(30);
		VarDBTime.setMiliseconds(0);


		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		hourHand.setPosAbsDegrees(0);
	
		minHand.setPosDegrees(0);
		minHand.setPosValue(0);
		minHand.setPosAbsDegrees(0);
	
		secHand.setPosDegrees(0);
		secHand.setPosValue(0);
		secHand.setPosAbsDegrees(0);

		//WHEN 

		result = rendernow(VarDBTime, hourHand, minHand, secHand );

		//THEN

		expect(result.hourrotation).toBeGreaterThan(0);
		expect(result.minuterotation).toBeGreaterThan(0);
		expect(result.secrotation).toBe(180);

	});



	it('Should return rotation result (hourrotation > 0 secrotation, minuterotation > 0, secrotation = 180) GIVEN previous time (0 hours, 0 minutes, 30 seconds)', function() {

		//GIVEN

		//PREVIOUS STATE

		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(30);
		VarDBTime.setMiliseconds(0);

		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		hourHand.setPosAbsDegrees(0);
	
		minHand.setPosDegrees(0);
		minHand.setPosValue(0);
		minHand.setPosAbsDegrees(0);
	
		secHand.setPosDegrees(0);
		secHand.setPosValue(0);
		secHand.setPosAbsDegrees(0);

		rendernow(VarDBTime, hourHand, minHand, secHand );

		//CURRENT STATE

		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(0);
		VarDBTime.setMiliseconds(0);

		//WHEN 

		result = rendernow(VarDBTime, hourHand, minHand, secHand );

		//THEN

		expect(result.hourrotation).toBe(0);
		expect(result.minuterotation).toBe(0);
		expect(result.secrotation).toBe(0);

	});


	it('Should return rotation result (hourrotation > 0 secrotation, minuterotation > 0, secrotation = 180) GIVEN previous time (0 hours, 0 minutes, 30 seconds)', function() {

		//GIVEN

		//PREVIOUS STATE

		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(45);
		VarDBTime.setMiliseconds(0);

		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		hourHand.setPosAbsDegrees(0);
	
		minHand.setPosDegrees(0);
		minHand.setPosValue(0);
		minHand.setPosAbsDegrees(0);
	
		secHand.setPosDegrees(0);
		secHand.setPosValue(0);
		secHand.setPosAbsDegrees(0);

		rendernow(VarDBTime, hourHand, minHand, secHand );

		//CURRENT STATE

		VarDBTime.setHours(0);
		VarDBTime.setMinutes(0);
		VarDBTime.setSeconds(15);
		VarDBTime.setMiliseconds(0);

		//WHEN 

		result = rendernow(VarDBTime, hourHand, minHand, secHand );

		//THEN

		expect(result.hourrotation).toBe(0);
		expect(result.minuterotation).toBe(0);
		expect(result.secrotation).toBe(90);

	});




});


