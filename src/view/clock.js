import rendernow from './clockrender';
export default class Clock {

	timeflow (VarDBtime,hourHand,minuteHand,secondHand) {

		const secCurrent = VarDBtime.getSeconds();
	
		let secNew = 0;
	
		secNew = secCurrent + 1;
	
		VarDBtime.setSeconds(secNew);
		rendernow(VarDBtime,hourHand,minuteHand,secondHand);
		
		
	}


	changeTransTime(ticTime) {

		const hands = document.querySelectorAll('#second');
		console.log('HE ENTRADO EN LA FUNCION');
		hands.forEach(function (item, index) {
			let secs = (ticTime / 1000) / 2;
			item.style.transitionDuration = (secs + 's');
			// console.log('trans time is ' + item.style.transitionDuration);
			console.log('HE ENTRADO EN EL FOR EACH');
		});



	}

}