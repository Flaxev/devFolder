import boxFact from '../../src/magicbox/boxfact.js';
import obtainElement from '../../src/magicbox/objectselector.js';

var hourHand = boxFact.createHour();



describe('assert the correct conversion of each *ToDeg method',function () {

//this tests will be practice tests not a real implementation
	it('should return 180 deg for a input of 21600 seconds',function() {
		expect(hourHand.secToDeg(21600)).toBe(180);
	});

	it('should return 90 deg for a input of 180 minutes', function() {
		expect(hourHand.minToDeg(180)).toBe(90);
	});

	it('should return 360 deg for input of 12 h', function() {
		expect(hourHand.hourToDeg(12)).toBe(360);
	});

	it('should return 720 deg for input of 24 h', function() {
		expect(hourHand.hourToDeg(24)).toBe(720);

	});

});
