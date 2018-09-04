import TheTime from '../../src/model/thetime.js';



const VarDBtime = new TheTime(0, 0, 0, 0); //hours, mins, secs, millisecs
let result = null;

beforeEach (function () {

	VarDBtime.setSeconds(0);
	VarDBtime.setHours(0);
	VarDBtime.setMinutes(0);
	
});

describe('Testing for methods in the Model', function () {

	describe('Testing updateCurrentRealTime so', function () {

		it('Should return currentTime not null on call.', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result).not.toBe(null);

		});

		it('Should return currentTime.hour equal to VarDBtime hour prop WHEN called', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result.hour).toBe(VarDBtime.gethours());

		});

		it('Should return currentTime.min equal to VarDBtime min prop WHEN called', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result.min).toBe(VarDBtime.getminutes());

		});

		it('Should return currentTime.sec equal to VarDBtime sec prop WHEN called', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result.sec).toBe(VarDBtime.getSeconds());

		});


	});

});