
import ClockHand from '../view/clockhand.js';
import Hour from '../view/hour.js';
import Min from '../view/min.js';
import Sec from '../view/sec.js';
import obtainElement from './objectselector.js';




var boxFact = {

	createHour : function () {

		let hourInstance = new Hour();

		
		let objTarget = obtainElement('#hour');

		console.log('el elemento es: ');
		console.log(objTarget);
		hourInstance.setPosDegrees(0);
		hourInstance.setObjtarget(objTarget);
		hourInstance.setObjName('#hour');

		return hourInstance;
	},

	createMin : function() {

		let minInstance = new Min();
		let objTarget = obtainElement('#minute');
		console.log('el elemento es: ');
		console.log(objTarget);
		
		minInstance.setPosDegrees(0);
		minInstance.setObjtarget(objTarget);
		minInstance.setObjName('#minute');

		return minInstance;
	},

	createSec : function() {
		
		let objTarget = obtainElement('#second');

		console.log('el elemento es: ');
		console.log(objTarget);
		let secInstance = new Sec();
		secInstance.setPosDegrees(0);
		secInstance.setObjtarget(objTarget);
		secInstance.setObjName('#second');

		return secInstance;
	},
	
};


export default boxFact;