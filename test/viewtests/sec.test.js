import boxFact from '../../src/magicbox/boxfact.js';
import obtainElement from '../../src/magicbox/objectselector.js';

var secHand=boxFact.createSec();



describe('assert the correct conversion of each *ToDeg method',function (){

//this tests will be practice tests not a real implementation
	it('should return 180 deg for a input of 30 seconds',function(){
		expect(secHand.secToDeg(30)).toBe(180);
	});

	it('should return 90 deg for a input of 15 sec', function(){
		expect(secHand.secToDeg(15)).toBe(90);
	});

	it('should return 720 deg for input of 120 sec', function(){
		expect(secHand.secToDeg(120)).toBe(720);
	});

});
