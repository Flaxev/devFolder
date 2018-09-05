
import boxFact from '../../src/magicbox/boxfact.js';
jest.mock('../../src/magicbox/objectselector.js');
import obtainElement from '../../src/magicbox/objectselector.js';

let hourHand = boxFact.createHour();
let isAfter = true;
let result = null;
let spinNumber = null;
let clockwise = true;
let desiredAngle = 0;



describe('assert the correct rotation for any given value (either greater or lower than 360)', function() {

	beforeEach(function() {

		

		spinNumber = 0;
		clockwise = true;
		desiredAngle = 0;
		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		hourHand.setPosAbsDegrees(0);
		isAfter = true;
		var dummyElement = document.createElement('div');
		obtainElement.mockImplementation(() => dummyElement);
		hourHand.setObjtarget(obtainElement('default'));


	});
	

	describe('Test for calculation of PositionWanted with function rotationAddSpins', function () { 

		it('Should return 720 deg  WHEN desiredAngle of 0 deg, spinNumber 2 and clockwise', function() { 

			//GIVEN
			spinNumber = 2;
			clockwise = true;
			desiredAngle = 0;
			//WHEN
			result = hourHand.rotationAddSpins(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(720);
		});

		it('Should return -720 deg  WHEN desiredAngle of 0 deg, spinNumber 2 and !clockwise', function() { 

			//GIVEN
			spinNumber = 2;
			clockwise = false;
			desiredAngle = 0;
			//WHEN
			result = hourHand.rotationAddSpins(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(-720);
		});

		it('Should return 45 deg  WHEN desiredAngle of 45 deg, spinNumber 0 and !clockwise', function() { 

			//GIVEN
			spinNumber = 0;
			clockwise = false;
			desiredAngle = 45;
			//WHEN
			result = hourHand.rotationAddSpins(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(45);
		});

		it('Should return 45 deg  WHEN desiredAngle of 45 deg, spinNumber 0 and clockwise', function() { 
			//GIVEN
			spinNumber = 0;
			clockwise = true;
			desiredAngle = 45;
			//WHEN
			result = hourHand.rotationAddSpins(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(45);
		});

		it('Should return 720 deg  WHEN desiredAngle of 0 deg, spinNumber 2 and clockwise', function() { 
			//GIVEN
			spinNumber = 2;
			clockwise = true;
			desiredAngle = 0;
			//WHEN
			result = hourHand.rotationAddSpins(desiredAngle, spinNumber, clockwise);
			//THEN
			expect(result).toBe(720);
		});

	});

	describe('Test for rotation Math calculation with function rotationCalcAngle', function () {

		describe('For GIVEN values between 0 to 360 deg and current positions from 0 to 360 deg', function() {

			it('Should return 90 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 90 deg and clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalcAngle(90, clockwise);
				//THEN
				expect(result).toBe(90);
			});
			
			it('Should return 180 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 180 deg and clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalcAngle(180, clockwise);
				//THEN
				expect(result).toBe(180);
			});

			it('Should return 90 deg GIVEN currentDegPosition of 90 deg WHEN positionWanted of 180 deg and clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(90);
				//WHEN
				result = hourHand.rotationCalcAngle(180, clockwise);
				//THEN
				expect(result).toBe(90);

			});


			it('Should return -90 deg GIVEN currentDegPosition of 180 deg WHEN positionWanted of 90 deg and !clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(180);
				clockwise = false;
				//WHEN
				result = hourHand.rotationCalcAngle(90, clockwise);
				//THEN
				expect(result).toBe(-90);
				
			});

			it('Should return 0 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 0 deg, !clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				clockwise = false;
				//WHEN
				result = hourHand.rotationCalcAngle(0, clockwise);
				//THEN
				expect(result).toBe(0);
				
			});

			it('Should return 0 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 720 deg, clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				
				//WHEN
				result = hourHand.rotationCalcAngle(720, clockwise);
				//THEN
				expect(result).toBe(0);
				
			});

			it('Should return 270 deg GIVEN currentDegPosition of 0 deg WHEN positionWanted of 270 deg, clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(0);
				//WHEN
				result = hourHand.rotationCalcAngle(270, clockwise);
				//THEN
				expect(result).toBe(270);
				
			});

			it('Should return 180 deg GIVEN currentDegPosition of 45 deg WHEN positionWanted of 270 deg, clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(45);
				//WHEN
				result = hourHand.rotationCalcAngle(270, clockwise);
				//THEN
				expect(result).toBe(225);
				
			});

			it('Should return -180 deg GIVEN currentDegPosition of 315 deg WHEN positionWanted of 135 deg, !clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(315);
				clockwise = false;
				//WHEN
				result = hourHand.rotationCalcAngle(135, clockwise);
				//THEN
				expect(result).toBe(-180);
				
			});

			it('Should return -180 deg GIVEN currentDegPosition of 90 deg WHEN positionWanted of 270 deg, !clockwise', function() { 

				console.log('this is the case');

				//GIVEN
				hourHand.setPosDegrees(90);
				clockwise = false;
				//WHEN
				result = hourHand.rotationCalcAngle(270, clockwise);
				//THEN
				expect(result).toBe(-180);
				
			});
			
			it('Should return 180 deg GIVEN currentDegPosition of 270 deg WHEN positionWanted of 90 deg, clockwise', function() { 

				//GIVEN
				hourHand.setPosDegrees(270);
				
				//WHEN
				result = hourHand.rotationCalcAngle(90, clockwise);
				//THEN
				expect(result).toBe(180);
				
			});

		});
		

	});

	describe('Test for rotation CSS calculation with function rotationTranslate', function() {
		
		describe('For GIVEN values from -360 to any positive value', function () { 

			it('Should return 90 for GIVEN currentAbsDegPosition 0 WHEN rotationRelative of 90 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(0);
				//WHEN
				result = hourHand.rotationTranslate(90);
				//THEN
				expect(result).toBe(90);
			});

			it('Should return 0 for GIVEN currentAbsDegPosition 90 WHEN rotationRelative of -90 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(90);
				//WHEN
				result = hourHand.rotationTranslate(-90);
				//THEN
				expect(result).toBe(0);
			});

			it('Should return 90 for GIVEN currentAbsDegPosition 45 WHEN rotationRelative of 45 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(45);
				//WHEN
				result = hourHand.rotationTranslate(45);
				//THEN
				expect(result).toBe(90);
			});
			
			it('Should return 360 for GIVEN currentAbsDegPosition 720 WHEN rotationRelative of -360 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(720);
				//WHEN
				result = hourHand.rotationTranslate(-360);
				//THEN
				expect(result).toBe(360);
			});
			
			it('Should return 720 for GIVEN currentAbsDegPosition 0 WHEN rotationRelative of 720 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(0);
				//WHEN
				result = hourHand.rotationTranslate(720);
				//THEN
				expect(result).toBe(720);
			});

			it('Should return 735 for GIVEN currentAbsDegPosition 720 WHEN rotationRelative of 15 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(720);
				//WHEN
				result = hourHand.rotationTranslate(15);
				//THEN
				expect(result).toBe(735);
			});

			it('Should return 360 for GIVEN currentAbsDegPosition -360 WHEN rotationRelative of 720 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(-360);
				//WHEN
				result = hourHand.rotationTranslate(720);
				//THEN
				expect(result).toBe(360);
			});

			it('Should return 0 for GIVEN currentAbsDegPosition 1440 WHEN rotationRelative of -1440 degrees', function() { 

				//GIVEN
				hourHand.setPosAbsDegrees(1440);
				//WHEN
				result = hourHand.rotationTranslate(-1440);
				//THEN
				expect(result).toBe(0);
			});
		});

		

	});

	describe('Test for spin Math calculation angleRel with function rotationCalcSpins', function () {

		it('should return 2 GIVEN currentAbsDegPosition of 720 WHEN position wanted of 0', function () {

			//GIVEN
			hourHand.setPosAbsDegrees(720);
			//WHEN
			result = hourHand.rotationCalcSpins(0);
			//THEN
			expect(result).toBe(2);
		});

		it('should return 2 GIVEN currentAbsDegPosition of 0 WHEN position wanted of 720', function () {

			//GIVEN
			hourHand.setPosAbsDegrees(0);
			//WHEN
			result = hourHand.rotationCalcSpins(720);
			//THEN
			expect(result).toBe(2);
		});

		it('should return 0 GIVEN currentAbsDegPosition of 720 WHEN position wanted of 745', function () {

			//GIVEN
			hourHand.setPosAbsDegrees(720);
			//WHEN
			result = hourHand.rotationCalcSpins(45);
			//THEN
			expect(result).toBe(2);
		});

	});

	describe('Test for rotation calculation with function rotationRotate', function() {

		it('Should return 361 for GIVEN posAbsDegrees 360, posDegrees 360 WHEN position wanted 1 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(360);
			hourHand.setPosAbsDegrees(360); 
			//WHEN
			result = hourHand.rotationRotate(1, clockwise);
			//THEN
			expect(result).toBe(361);
		});

		it('Should return 360 for GIVEN posAbsDegrees 359, posDegrees 359 WHEN position wanted 360 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(359);
			hourHand.setPosAbsDegrees(359); 
			//WHEN
			result = hourHand.rotationRotate(360, clockwise);
			//THEN
			expect(result).toBe(360);
		});

		it('Should return 361 for GIVEN posAbsDegrees 360, posDegrees 0 WHEN position wanted 1 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(360); 
			//WHEN
			result = hourHand.rotationRotate(1, clockwise);
			//THEN
			expect(result).toBe(361);
		});

		it('Should return 45 for GIVEN posAbsDegrees 0, posDegrees 0 WHEN position wanted 45 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(0); 
			//WHEN
			result = hourHand.rotationRotate(45, clockwise);
			//THEN
			expect(result).toBe(45);
		});

		it('Should return 0 for GIVEN posAbsDegrees 45, posDegrees 45 WHEN position wanted 0 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(45);
			hourHand.setPosAbsDegrees(45);
			clockwise = false; 
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(0);
		});

		it('Should return 0 for GIVEN posAbsDegrees 180, posDegrees 180 WHEN position wanted 0 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(180);
			hourHand.setPosAbsDegrees(180);
			clockwise = false; 
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(0);
		});

		it('Should return 0 for GIVEN posAbsDegrees 270, posDegrees 270 WHEN position wanted 0 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(270);
			hourHand.setPosAbsDegrees(270);
			clockwise = false; 
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(0);
		});

		it('Should return 360 for GIVEN posAbsDegrees 0, posDegrees 0 WHEN position wanted 360 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(0);
			
			//WHEN
			result = hourHand.rotationRotate(360, clockwise);
			//THEN
			expect(result).toBe(360);
		});

		it('Should return 0 for GIVEN posAbsDegrees 0, posDegrees 0 WHEN position wanted 0 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(0);
			
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(0);
		});

		it('Should return 720 for GIVEN posAbsDegrees 720, posDegrees 0 WHEN position wanted 0 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(720);
			clockwise = false;
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(720);
		});

		it('Should return 735 for GIVEN posAbsDegrees 720, posDegrees 0 WHEN position wanted 15 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(0);
			hourHand.setPosAbsDegrees(720);
			
			//WHEN
			result = hourHand.rotationRotate(15, clockwise);
			//THEN
			expect(result).toBe(735);
		});

		it('Should return 720 for GIVEN posAbsDegrees 735, posDegrees 0 WHEN position wanted 0 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(15);
			hourHand.setPosAbsDegrees(735);
			clockwise = false;
			
			//WHEN
			result = hourHand.rotationRotate(0, clockwise);
			//THEN
			expect(result).toBe(720);
		});

		it('Should return  for GIVEN posAbsDegrees 270, posDegrees 270 WHEN position wanted 90 and clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(270);
			hourHand.setPosAbsDegrees(270);
			
			//WHEN
			result = hourHand.rotationRotate(90, clockwise);
			//THEN
			expect(result).toBe(450);
		});

		it('Should return  for GIVEN posAbsDegrees 270, posDegrees 270 WHEN position wanted 90 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(90);
			hourHand.setPosAbsDegrees(450);
			clockwise =	false;
			//WHEN
			result = hourHand.rotationRotate(270, clockwise);
			//THEN
			expect(result).toBe(270);
		});

		it('Should return  for GIVEN posAbsDegrees 270, posDegrees 270 WHEN position wanted 90 and !clockwise', function() {
			//GIVEN
			hourHand.setPosDegrees(90);
			hourHand.setPosAbsDegrees(1170);
			clockwise =	false;
			//WHEN
			result = hourHand.rotationRotate(270, clockwise);
			//THEN
			expect(result).toBe(990);
		});

	});

	

	
});	