import boxFact from '../../src/magicbox/boxfact.js';
import obtainElement from '../../src/magicbox/objectselector.js';

var secHand = boxFact.createSec();

let sec = null;
let result = null;
let deg = null;


beforeEach(function () {

	sec = 0;
	result = null;
	deg = 0;


});

describe('assert the correct conversion of each *ToDeg method', function () {

//this tests will be practice tests not a real implementation
	it('should return 180 deg for a input of 30 seconds', function() {
		expect(secHand.secToDeg(30)).toBe(180);
	});

	it('should return 90 deg for a input of 15 sec', function() {
		expect(secHand.secToDeg(15)).toBe(90);
	});

	it('should return 720 deg for input of 120 sec', function() {
		expect(secHand.secToDeg(120)).toBe(720);
	});

});

describe('assert the correct conversion of the degToSec method', function () {

	it('Should return 1 sec GIVEN 6 deg input', function () {

		//GIVEN
		deg = 6;

		//WHEN

		result = secHand.degToSec(deg);

		//THEN

		expect(result).toBe(1);



	});

	it('Should return 60 sec GIVEN 360 deg input', function () {

		//GIVEN
		deg = 360;

		//WHEN

		result = secHand.degToSec(deg);

		//THEN

		expect(result).toBe(60);

	});

	it('Should return 30 sec GIVEN 180 deg input', function () {

		//GIVEN
		deg = 180;

		//WHEN

		result = secHand.degToSec(deg);

		//THEN

		expect(result).toBe(30);

	});


});
