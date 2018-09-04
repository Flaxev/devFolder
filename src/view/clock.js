import rendernow from './clockrender';

export default class Clock {



	setTicTime(ticT) {

		this.ticTime = ticT;

	}

	getTicTime() {
		return this.ticTime;
	}

	timeflow (VarDBtime) {
		VarDBtime.setSeconds(VarDBtime.getSeconds() + 1);	
	}

	changeTransTime(ticTime) {

		const hands = document.querySelectorAll('.clocktrans');
		
		hands.forEach(function (item, index) {
			let secs = (ticTime / 1000) / 2;
			item.style.transitionDuration = (secs + 's');
		});
	}

	setFlow(VarDBtime, hourHand, minuteHand, secondHand, clock) {
		if(!(clock.timeFlowPid == null)) {
			clearInterval(this.timeFlowPid);
		}

		clock.timeFlowPid = setInterval( function() { 
		
			rendernow(VarDBtime, hourHand, minuteHand, secondHand);
			
		}, clock.getTicTime() / 5);

		

		if(!(clock.renderFlowPid == null)) {
			clearInterval(clock.renderFlowPid);
		}

		clock.renderFlowPid	= setInterval( function() {

			rendernow(VarDBtime, hourHand, minuteHand, secondHand);
			clock.timeflow (VarDBtime, hourHand, minuteHand, secondHand);

		}, clock.getTicTime());


	}

	





}