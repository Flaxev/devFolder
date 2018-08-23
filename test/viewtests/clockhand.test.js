
import boxFact from '../../src/magicbox/boxfact.js';
jest.mock('../../src/magicbox/objectselector.js');
import obtainElement from '../../src/magicbox/objectselector.js';

var hourHand = boxFact.createHour();
var isAfter = true;




describe('assert the correct rotation for any given value (either greater or lower than 360)',function() {

	beforeEach(function() {
		hourHand.setPosDegrees(0);
		hourHand.setPosValue(0);
		isAfter = true;
		var dummyElement = document.createElement('div');
		obtainElement.mockImplementation(() => dummyElement);
		hourHand.setObjtarget(obtainElement('default'));
	});
	//Tests for operation

	describe('movePositionDeg should return the same value as expected on calcrotation',function() {

		describe('should return the same value as if it was a calcrotation', function() {

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

	describe('For values between 0 and 360 the clock should positionate to any place given its initial position',function() {

		it('should rotate 90 deg for input of 90, pos Degrees of 0 and isAfter',function() {

			//test initial status
			hourHand.setPosDegrees(0);
			isAfter = true;
			//execute
			expect(hourHand.movePositionDeg(90,isAfter)).toBe(90);

		});

		it('should rotate 90 deg for input of 90, pos Degrees of 180 and !isAfter',function() {

			//test initial status
			hourHand.setPosDegrees(180);
			isAfter = false;
			//execute
			expect(hourHand.movePositionDeg(90,isAfter)).toBe(90);

		});


		it('should rotate 45 deg for posDegrees of 0, input of 45 and isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(0);
			isAfter = true;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(45);

		});

		it('should rotate -180 deg for posDegrees of 0, input of 180 and !isAfter',function() {
			//test initial status
			isAfter = false;
			hourHand.setPosDegrees(0);
			//execute
			expect(hourHand.calcRotation(180,isAfter)).toBe(-180);
		
		});

		
		it('should rotate 0 deg for posDegrees of 45, input of 0  and !isAfter',function() {
			//test initial status
			isAfter = false;
			hourHand.setPosDegrees(45);
			//execute
			expect(hourHand.calcRotation(0,isAfter)).toBe(0);
		
		});

		it('should rotate 0 posDegrees of 90 for input of 0  and !isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(90);
			isAfter = false;
			//execute
			expect(hourHand.calcRotation(0,isAfter)).toBe(0);

		});

		it('should rotate 45 for pos degrees of 315, input of 45  and !isAfter',function() {
			//test initial status
			hourHand.setPosDegrees(315);
			isAfter = false;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(45);

		});

		it('should rotate -45 for posDegrees of 45, input of 315 and !isAfter', function() {
			//test initial status
			hourHand.setPosDegrees(45);
			isAfter = false;
			//execute
			expect(hourHand.calcRotation(315,isAfter)).toBe(-45);

		});

		describe('For any range between 0 and +x the clock should position to any place given its initial position',function() {

			it('should return 360 for posDegrees of 720, input of 360 and !isAfter',function() {
				//test initial status
				hourHand.setPosDegrees(720);
				isAfter = false;
				//execute
				expect(hourHand.calcRotation(360,isAfter)).toBe(360);

			});

			it('should return 405 for posDegrees of 765, input of 45  and !isAfter',function() {
				//test initial status
				hourHand.setPosDegrees(765);
				isAfter = false;
				//execute
				expect(hourHand.calcRotation(45,isAfter)).toBe(405);

			});


			it('should return 360 for posDegrees of 1440, input of 45 and isAfter', function() {
				//test initial status
				hourHand.setPosDegrees(1440);
				//execute
				expect(hourHand.calcRotation(45,isAfter)).toBe(1485);

			});

			it('should return -1440 for posDegrees of 1485, input of 45  and isAfter', function() {
				//test initial status
				hourHand.setPosDegrees(1485);
				isAfter = false;
				//execute
				expect(hourHand.calcRotation(45,isAfter)).toBe(1125);
				

			});


		});

	});
});	