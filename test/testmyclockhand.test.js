
import ClockHand from '../src/view/clockhand.js';
import HourHand from '../src/view/hour.js';
import min from '../src/view/min.js';
import sec from '../src/view/sec.js';
import TheTime from '../src/model/thetime.js';






var timerdb= new TheTime(30,15,9);
// var hourhand = new hour('hour',0);
var minhand = new min('min',0);
var sechand = new sec('sec',0);

jest.mock('../src/view/clockhand.js');



describe('clockhand moveposition testing', ()=> {
	describe('should return value within 360 degres', ()=> {

		beforeEach(()=> {
			ClockHand.mockClear();
		});

		it('Check if hour called class constructor',()=>{
			//Show that the constructor is being called
			const hourhand = new HourHand('hour',0);
			expect(ClockHand).toHaveBeenCalled();


		});

			
	});

});