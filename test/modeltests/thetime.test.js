import TheTime from '../../src/model/thetime.js';



const VarDBtime = new TheTime(0, 0, 0, 0); //hours, mins, secs, millisecs
let result = null;


beforeAll (function () {

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
			expect(result.hour).toBe(VarDBtime.getHours());

		});

		it('Should return currentTime.min equal to VarDBtime min prop WHEN called', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result.min).toBe(VarDBtime.getMinutes());

		});

		it('Should return currentTime.sec equal to VarDBtime sec prop WHEN called', function() {

			//WHEN
			result = VarDBtime.updateCurrentRealTime();
			//THEN
			expect(result.sec).toBe(VarDBtime.getSeconds());

		});


	});

	describe('Testing getTotatlTimeInSeconds', function () {

		it('Should return 0 s GIVEN 0 hours 0 min 0 sec', function () { 

			//Given
			VarDBtime.setHours(0);
			VarDBtime.setMinutes(0);
			VarDBtime.setSeconds(0);
			
			

			//WHEN

			result = VarDBtime.getTotalTimeInSeconds();


			//Then

			expect(result).toBe(0);
		});


		it('Should return 60 s GIVEN 0 hours 1 min 0 sec', function () { 

			//Given
			VarDBtime.setHours(0);
			VarDBtime.setMinutes(1);
			VarDBtime.setSeconds(0);

			//WHEN

			result = VarDBtime.getTotalTimeInSeconds();


			//Then

			expect(result).toBe(60);
		});



		it('Should return 60 s GIVEN 1 hours 0 min 0 sec', function () { 

			//Given
			VarDBtime.setHours(1);
			VarDBtime.setMinutes(0);
			VarDBtime.setSeconds(0);

			//WHEN

			result = VarDBtime.getTotalTimeInSeconds();


			//Then

			expect(result).toBe(3600);
		});


		it('Should return 60 s GIVEN 0 hours 0 min 59 sec', function () { 

			//Given
			VarDBtime.setHours(0);
			VarDBtime.setMinutes(0);
			VarDBtime.setSeconds(59);

			//WHEN

			result = VarDBtime.getTotalTimeInSeconds();


			//Then

			expect(result).toBe(59);
		});



	});

	describe('Test updatebyinput function', function() {

		describe('Should change in the model same input as provided for each hr,min,sec', function() {
	
			it('Should change Time model Sec = 3 from input', function() { 
	
				//GIVEN
				let hour = null;
				let min = null;
				let sec = null;
				//WHEN
				hour = 10;
				min = 5;
				sec = 3;
				result = VarDBtime.updateByInput(hour, min, sec);
				//THEN
				expect(VarDBtime.getSeconds()).toBe(sec);
			});
	
			it('Should change Time model min = 5 from input', function() { 
	
				//GIVEN
				let hour = null;
				let min = null;
				let sec = null;
				//WHEN
				hour = 10;
				min = 5;
				sec = 3;
				result = VarDBtime.updateByInput(hour, min, sec);
				//THEN
				expect(VarDBtime.getMinutes()).toBe(min);
			});
	
	
			it('Should change Time model hour = 10 from input', function() { 
	
				//GIVEN
				let hour = null;
				let min = null;
				let sec = null;
				//WHEN
				hour = 10;
				min = 5;
				sec = 3;
				result = VarDBtime.updateByInput(hour, min, sec);
				//THEN
				expect(VarDBtime.getHours()).toBe(hour);
			});
		});
	
	
	
	
	});
	

});