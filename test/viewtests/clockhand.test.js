
import boxFact from '../../src/magicbox/boxfact.js';
jest.mock('../../src/magicbox/objectselector.js');
import obtainElement from '../../src/magicbox/objectselector.js';

let hourHand = boxFact.createHour();
let isAfter = true;
let result = null;
let spinNumber = null;
let clockwise = true;
let desiredAngle = 0;



describe('assert the correct rotation for any given value (either greater or lower than 360)',function() {

	beforeEach(function() {
		spinNumber = 0;
		clockwise = true;
		desiredAngle = 0;
		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		isAfter = true;
		var dummyElement = document.createElement('div');
		obtainElement.mockImplementation(() => dummyElement);
		hourHand.setObjtarget(obtainElement('default'));
	});
	//Tests for operation

	xdescribe('movePositionDeg should return the same value as expected on calcrotation',function() {

		xdescribe('should return the same value as if it was a calcrotation', function() {

			it('should return 90 for posDegrees of 180 input of 90 and !isafter',function() {

				//test initial status
				hourHand.setPosDegrees(180);
				isAfter = false;
				//execute
				expect(hourHand.movePositionDeg(90,isAfter)).toBe(90);
			
			});


			it('should return 90 for posDegrees of 180 input of 90 and !isafter',function() {

				//test initial status
				hourHand.setPosDegrees(15);
				isAfter = false;
				//execute
				expect(hourHand.movePositionDeg(270,isAfter)).toBe(-90);
			
			});

			it('should return 270 for posDegrees of 375 input of 270 and !isafter',function() {

				//test initial status
				hourHand.setPosDegrees(375);
				isAfter = false;
				//execute
				expect(hourHand.movePositionDeg(270,isAfter)).toBe(270);
			
			});


		});
	});

	//INPUT MUST BE BETWEEN -360 AND 360.

	//Tests for calculation


	//IT TEMPLATE
	/*	

			it('Should return 90 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 90 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalc();
				//THEN
				expect(result).toBe(90);
			});



	*/

	describe('Test for calculation of PositionWanted with function transalteToAbsoluteAngle', function () { 

		it('Should return 720 deg  WHEN desiredAngle of 0 deg, spinNumber 2 and clockwise',function() { 

			//GIVEN
			spinNumber = 2;
			clockwise = true;
			desiredAngle = 0;
			//WHEN
			result = hourHand.translateToAbsoluteAngle(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(720);
		});

		it('Should return -720 deg  WHEN desiredAngle of 0 deg, spinNumber 2 and !clockwise',function() { 

			//GIVEN
			spinNumber = 2;
			clockwise = false;
			desiredAngle = 0;
			//WHEN
			result = hourHand.translateToAbsoluteAngle(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(-720);
		});

		it('Should return 45 deg  WHEN desiredAngle of 45 deg, spinNumber 0 and !clockwise',function() { 

			//GIVEN
			spinNumber = 0;
			clockwise = false;
			desiredAngle = 45;
			//WHEN
			result = hourHand.translateToAbsoluteAngle(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(45);
		});

		it('Should return 45 deg  WHEN desiredAngle of 45 deg, spinNumber 0 and clockwise',function() { 
			//GIVEN
			spinNumber = 0;
			clockwise = true;
			desiredAngle = 45;
			//WHEN
			result = hourHand.translateToAbsoluteAngle(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(45);
		});

	});

	describe('Test for rotation Math calculation with function rotationCalc', function () {

		describe('For GIVEN values between 0 to 360 deg and current positions from 0 to 360 deg',function() {

			it('Should return 90 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 90 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalc(90);
				//THEN
				expect(result).toBe(90);
			});
			
			it('Should return 180 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 180 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalc(180);
				//THEN
				expect(result).toBe(180);
			});

			it('Should return 90 deg GIVEN currentDegPosition of 90 deg WHEN positionWanted of 180 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(90);
				//WHEN
				result = hourHand.rotationCalc(180);
				//THEN
				expect(result).toBe(90);

			});


			it('Should return -90 deg GIVEN currentDegPosition of 180 deg WHEN positionWanted of 90 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(180);
				//WHEN
				result = hourHand.rotationCalc(90);
				//THEN
				expect(result).toBe(-90);
				
			});

			it('Should return -360 deg GIVEN currentDegPosition of 360 deg WHEN positionWanted of 0 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(360);
				//WHEN
				result = hourHand.rotationCalc(0);
				//THEN
				expect(result).toBe(-360);
				
			});


			it('Should return 270 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 270 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalc(270);
				//THEN
				expect(result).toBe(270);
				
			});

			it('Should return 180 deg GIVEN currentDegPosition of 45 deg WHEN positionWanted of 270 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(45);
				//WHEN
				result = hourHand.rotationCalc(270);
				//THEN
				expect(result).toBe(225);
				
			});

			it('Should return -180 deg GIVEN currentDegPosition of 315 deg WHEN positionWanted of 135 deg and isAfter',function() { 

				//GIVEN
				hourHand.setPosDegrees(315);
				//WHEN
				result = hourHand.rotationCalc(135);
				//THEN
				expect(result).toBe(-180);
				
			});
		

		});

		describe('For GIVEN any current position and WHEN any input',function() {

			xit('should return -360 GIVEN currentDegPosition of 0 deg, currentAbsDegPosotion of 720 WHEN position wanted of 360 deg', function() { 


				//GIVEN
				hourHand.setPosDegrees(0);
				hourHand.setPosAbsDegrees(720);
				//WHEN
				result = hourHand.rotationCalc(360);
				//THEN
				expect(result).toBe(-360);

			});

		});

		

	});

	describe('Test for rotation CSS calculation with function rotationTranslate', function() {
		
		describe('For GIVEN values from -360 to any positive value', function () { 

			it('Should return 90 for GIVEN currentAbsDegPosition 0 WHEN rotationRelative of 90 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(0);
				//WHEN
				result = hourHand.rotationTranslate(90);
				//THEN
				expect(result).toBe(90);
			});

			it('Should return 0 for GIVEN currentAbsDegPosition 90 WHEN rotationRelative of -90 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(90);
				//WHEN
				result = hourHand.rotationTranslate(-90);
				//THEN
				expect(result).toBe(0);
			});

			it('Should return 90 for GIVEN currentAbsDegPosition 45 WHEN rotationRelative of 45 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(45);
				//WHEN
				result = hourHand.rotationTranslate(45);
				//THEN
				expect(result).toBe(90);
			});
			
			it('Should return 360 for GIVEN currentAbsDegPosition 720 WHEN rotationRelative of -360 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(720);
				//WHEN
				result = hourHand.rotationTranslate(-360);
				//THEN
				expect(result).toBe(360);
			});
			
			it('Should return 720 for GIVEN currentAbsDegPosition 0 WHEN rotationRelative of 720 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(0);
				//WHEN
				result = hourHand.rotationTranslate(720);
				//THEN
				expect(result).toBe(720);
			});

			it('Should return 360 for GIVEN currentAbsDegPosition -360 WHEN rotationRelative of 720 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(-360);
				//WHEN
				result = hourHand.rotationTranslate(720);
				//THEN
				expect(result).toBe(360);
			});

			it('Should return 0 for GIVEN currentAbsDegPosition 1440 WHEN rotationRelative of -1440 degrees',function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(1440);
				//WHEN
				result = hourHand.rotationTranslate(-1440);
				//THEN
				expect(result).toBe(0);
			});
		});

	});

	describe('For values between 0 and 360 the clock should positionate to any place given its initial position',function() {

		xit('should not rotate when the current position is given as parameter', function() {




		});

		xit('should rotate 90 deg for input of 90, pos Degrees of 0 and isAfter',function() {
			//test initial status // GIVEN
			hourHand.setPosDegrees(0);
			isAfter = true;

			// WHEN
			const result = hourHand.movePositionDeg(90, isAfter);
			// THEN
			expect(result).toBe(90);
		});

		xit('should rotate 90 deg for input of 90, pos Degrees of 180 and !isAfter',function() {

			//test initial status
			hourHand.setPosDegrees(180);
			isAfter = false;
			//execute
			expect(hourHand.movePositionDeg(90,isAfter)).toBe(90);

		});


		xit('should rotate 45 deg for posDegrees of 0, input of 45 and isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(0);
			isAfter = true;
			//execute
			expect(hourHand.rotationValue(45,isAfter)).toBe(45);

		});

		xit('should rotate -180 deg for posDegrees of 0, input of 180 and !isAfter',function() {
			//test initial status
			isAfter = false;
			hourHand.setPosDegrees(0);
			//execute
			expect(hourHand.rotationValue(180,isAfter)).toBe(-180);
		
		});

		xit('should rotate 0 deg for posDegrees of 45, input of 0  and !isAfter',function() {
			//test initial status
			isAfter = false;
			hourHand.setPosDegrees(45);
			//execute
			expect(hourHand.rotationValue(0,isAfter)).toBe(0);
		
		});

		xit('should rotate 0 posDegrees of 90 for input of 0  and !isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(90);
			isAfter = false;
			//execute
			expect(hourHand.rotationValue(0,isAfter)).toBe(0);

		});

		xit('should rotate 45 for pos degrees of 315, input of 45  and !isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(315);
			isAfter = false;
			//execute
			expect(hourHand.rotationValue(45,isAfter)).toBe(45);

		});

		xit('should rotate -45 for posDegrees of 45, input of 315 and !isAfter', function() {
			//test initial status
			hourHand.setPosDegrees(45);
			isAfter = false;
			//execute
			expect(hourHand.rotationValue(315,isAfter)).toBe(-45);

		});

		xdescribe('For any range between 0 and +x the clock should position to any place given its initial position',function() {

			it('should return 360 for posDegrees of 720, input of 360 and !isAfter',function() {
				//test initial status
				hourHand.setPosDegrees(720);
				isAfter = false;
				//execute
				expect(hourHand.rotationValue(360,isAfter)).toBe(360);

			});

			it('should return 405 for posDegrees of 765, input of 45  and !isAfter',function() {
				//test initial status
				hourHand.setPosDegrees(765);
				isAfter = false;
				//execute
				expect(hourHand.rotationValue(45,isAfter)).toBe(405);

			});


			it('should return 360 for posDegrees of 1440, input of 45 and isAfter', function() {
				//test initial status
				hourHand.setPosDegrees(1440);
				//execute
				expect(hourHand.rotationValue(45,isAfter)).toBe(1485);

			});

			it('should return -1440 for posDegrees of 1485, input of 45  and isAfter', function() {
				//test initial status
				hourHand.setPosDegrees(1485);
				isAfter = false;
				//execute
				expect(hourHand.rotationValue(45,isAfter)).toBe(1125);
				

			});


		});

	});
});	