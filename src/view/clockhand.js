//ABSTRACT CLASS
import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';

export default class ClockHand {
	
	constructor () {   
		this.objName = null;
		this.objTarget = null;
		this.posDegrees = null;
		this.posValue = null;
	}
	setObjName(objName) {
		this.objName = objName;
	}

	setObjtarget(objTarget) {
		this.objTarget = objTarget;
	}

	setPosDegrees(posDegrees) {
		this.posDegrees = posDegrees;
	}

	setPosValue(posValue) {
		this.posValue = posValue;
	}

	getPosValue() {
		return this.posValue;
	}
	
	
	
	rotateTheElement(angle) {
		// console.log('object name ' + this.objName);
		// console.log('objtarget:'+this.objTarget);
		// console.log('posDegrees Before ' + this.posDegrees);
		// console.log('angle calc' + angle);
		console.log('im gonna do this.' + this.objTarget + ' ' + this.objName + ' style.transform = rotate' + angle + '+deg');
		// angle=this.posDegrees+angle;
		this.objTarget.style.transform = 'rotate(' + angle + 'deg)';
		// this.posDegrees = angle;
		// console.log('posDegrees After ' + this.posDegrees);
		return angle;
	}

	calcRotation (angleInput,isAfter) {

		console.log('case of input ' + angleInput);
		let currentAngle = this.posDegrees;
		let angleResult = null;
		let relCurrentAngle = (currentAngle % 360);
		let relCompCurrentAngle = null ;
		//auxiliary variables 
		let diferAngle = null;
		let relRotation = null;
		

		if((!isAfter) && ((relCurrentAngle - angleInput) < (Math.trunc(currentAngle / 360)))) {

			if(currentAngle < 360 ) {
			
				angleResult =  -(360 - angleInput);
				console.log('angle result is' + angleResult);

				return angleResult;
			
			}
			
			else {

				

				relRotation = 360 - angleInput;
				relCompCurrentAngle = 360 - relCurrentAngle;
				diferAngle = relRotation + relCompCurrentAngle;
				
			

				if(relCompCurrentAngle == relRotation) { 	
					
					diferAngle = 360;
					angleResult = currentAngle  - diferAngle;
					console.log('angle result is' + angleResult);
					return angleResult;
				}
				
				if(!(currentAngle  - diferAngle < 0)) {

					return angleResult = currentAngle  - diferAngle;

				}
					
				
				angleResult = angleInput;

				

				console.log('angle result is' + angleResult);
				return angleResult;

				
				
			}

		}

		else{
			if(currentAngle < 360) {
				angleResult = angleInput; console.log('case 3');
				console.log('angle result is' + angleResult);
				return angleResult;
			}

			else {
				if(angleInput < relCompCurrentAngle) {
					
					angleResult = currentAngle + relCompCurrentAngle + angleInput;
					console.log('angle result is' + angleResult);
					return angleResult;
				}
				else{
					diferAngle = angleInput - relCurrentAngle;
					angleResult = currentAngle + diferAngle;
					console.log('angle result is' + angleResult);
					return angleResult;
				}
			}

		}
		
		
	}		
 
	movePositionDeg (angle,isAfter) {
		console.log('object ' + this.objName + ' Angle input on move is' + angle);
		
		var valangle = angle;
		var rotationresult = this.calcRotation(valangle,isAfter);

		console.log('calc rotation value' + this.objName + ' result' + rotationresult);

		return this.rotateTheElement(rotationresult);
	}


	

	

}



