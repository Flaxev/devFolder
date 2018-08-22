import boxFact from '../../src/magicbox/boxfact.js';
import obtainElement from '../../src/magicbox/objectselector.js';

var minHand=boxFact.createMin();



describe('assert the correct conversion of each *ToDeg method',function (){

//this tests will be practice tests not a real implementation
	it('should return 180 deg for a input of 1800 seconds',function(){
		expect(minHand.secToDeg(1800)).toBe(180);
	});

	it('should return 90 deg for a input of 15 min', function(){
		expect(minHand.minToDeg(15)).toBe(90);
	});

	it('should return 360 deg for input of 60 min', function(){
		expect(minHand.minToDeg(60)).toBe(360);
	});

	it('should return 720 deg for input of 120 min', function(){
		expect(minHand.minToDeg(120)).toBe(720);
	});

});
