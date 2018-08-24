
/*import hour from '../src/view/hour.js';
import min from '../src/view/min.js';
import sec from '../src/view/sec.js';
import TheTime from '../src/model/thetime.js';


var timerdb= new TheTime(30,15,9);
var hourhand = new hour('hour',0);
var minhand = new min('min',0);
var sechand = new sec('sec',0);



describe('Testing the basic degrees calculation position in each child class', function() {
 
	test('sec should position to 180 when input of 30 from db ', function(){
		
		expect(sechand.sectodeg(timerdb.getseconds())).toBe(180);

	});

	test('min should position to 90 when input of 15 from db ', function(){

		expect(minhand.mintodeg(timerdb.getminutes())).toBe(90);
	});

	test('hour should position to 270 when input of 9 from db ', function(){

		expect(hourhand.hourtodeg(timerdb.gethours())).toBe(270);

	});

});




// var assert = require('assert');
// var should = require('should');
// let hour = require('../../view/hour.js');

// let min = require('../../view/min.js');
// let sec = require('../../view/sec.js');
// let TheTime = require('../../model/thetime.js');

// console.log("time is  = "+timerdb.gethours()+":"+timerdb.getminutes()+":"+timerdb.getseconds());
// console.log("hour position of"+timerdb.gethours()+" hour "+hourhand.hourtodeg(timerdb.gethours()));
// console.log("hour position of"+timerdb.getminutes()+" hour "+minhand.mintodeg(timerdb.getminutes()));
// console.log("sec position of "+timerdb.getseconds()+" sec "+sechand.sectodeg(timerdb.getseconds()));
*/