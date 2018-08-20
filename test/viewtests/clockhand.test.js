import ClockHand from '../../src/view/clockhand.js';
import boxFact from '../../src/magicbox/boxfact.js';
import obtainElement from '../../src/magicbox/objectselector.js';

var hourHand=boxFact.createHour();
var isAfter = true;


describe('assert the correct rotation for any given value (either greater or lower than 360)',function(){

	beforeEach(function(){
		hourHand.setPosDegrees(0);
		isAfter = true;
	});

	describe('For values between 0 and 360 the clock should positionate to any place given its initial position',function(){

		it('should rotate 45 deg for input of 45, posDegrees of 0 and isAfter',function(){
			//test initial status
			hourHand.setPosDegrees(0);
			isAfter=true;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(45);

		});

		it('should rotate -45 deg for input of 0, posDegrees of 45 and !isAfter',function(){
			//test initial status
			isAfter=false;
			hourHand.setPosDegrees(45);
			//execute
			expect(hourHand.calcRotation(0,isAfter)).toBe(-45);
		
		});


		it('should rotate + 270 for input of 0, posDegrees of 90 and isAfter',function(){
			//test initial status
			hourHand.setPosDegrees(90);
			//execute
			expect(hourHand.calcRotation(0,isAfter)).toBe(270);

		});

		it('should rotate -270 for input of 45, pos degrees of 315 and !isAfter',function(){
			//test initial status
			hourHand.setPosDegrees(315);
			isAfter=false;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(-270);

		});

		it('should rotate -90 for input of 315, posDegrees of 45 and !isAfter', function(){
			//test initial status
			hourHand.setPosDegrees(45);
			isAfter=false;
			//execute
			expect(hourHand.calcRotation(315,isAfter)).toBe(-90);

		});



	});

	describe('For any range between 0 and +x the clock should position to any place given its initial position',function(){

		it('should return -360 for input of 360, posDegrees of 720 and !isAfter',function(){
			//test initial status
			hourHand.setPosDegrees(720);
			isAfter = false;
			//execute
			expect(hourHand.calcRotation(360,isAfter)).toBe(-360);

		});

		it('should return -720 for input of 45 posDegrees of 765 and !isAfter',function(){
			//test initial status
			hourHand.setPosDegrees(765);
			isAfter = false;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(-720);//returns 360

		});


		it('should return 1485 for input of 1440 posDegrees of 45 and isAfter', function(){
			//test initial status
			hourHand.setPosDegrees(45);
			//execute
			expect(hourHand.calcRotation(1440,isAfter)).toBe(1485);

		});

		it('should return -1440 for input of 45 posDegrees of 1485 and isAfter', function(){
			//test initial status
			hourHand.setPosDegrees(1485);
			isAfter=false;
			//execute
			expect(hourHand.calcRotation(45,isAfter)).toBe(-1440);
			

		});


		it('should return 1485 for input of 45 posDegrees of 1485 and isAfter', function(){
			//test initial status
			hourHand.setPosDegrees(45);
			isAfter=true;
			//execute
			expect(hourHand.calcRotation(1440,isAfter)).toBe(1485);
			

		});

		it('should return 1485 for input of 45 posDegrees of 1485 and isAfter', function(){
			//test initial status
			hourHand.setPosDegrees(45);
			isAfter=false;
			//execute
			expect(hourHand.calcRotation(1440,isAfter)).toBe(-45);
			

		});




	});
});