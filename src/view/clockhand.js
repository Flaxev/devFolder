//ABSTRACT CLASS
import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';

export default class ClockHand {
	
	constructor () {   
		this.objName = null;
		this.objTarget = null;
		this.posDegrees = null;
		this.posAbsDegrees = null;
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
	
	setPosAbsDegrees(posAbsDegrees) {
		this.posAbsDegrees = posAbsDegrees;
	}

	setPosValue(posValue) {
		this.posValue = posValue;
	}

	getPosValue() {
		return this.posValue;
	}

	getPosDegrees () {
		return this.posDegrees;
	}

	getPosAbsDegrees () {
		return this.posAbsDegrees;
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

	rotationValue (angleInput,isAfter) {

		console.log('case of input ' + angleInput);
		let currentAngle = this.posDegrees;
		let angleResult = null;
		let relCurrentAngle = (currentAngle % 360);
		let relCompCurrentAngle = null ;
		//auxiliary variables 
		let diferAngle = null;
		let relRotation = null;


		const rotationrelative = this.rotationCalc(angleInput);
		return this.rotationTranslate(rotationrelative);
		/*
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
		
		*/
	}
	
	//rotation Translate will transform the desired rotation into a value that produces the desired effect on values for transform-rotate css method.
	rotationTranslate(rotationRelative) {
		let rotateValue = null;
		const currentAbsDegPosition = this.getPosAbsDegrees();
		let error = true;
		
		if(rotationRelative == 0) {
			rotateValue = currentAbsDegPosition;
		}
		
		if(-360 < rotationRelative < 360) {

			rotateValue = currentAbsDegPosition + rotationRelative;
			error = !error;
		}

		else { 
			
			rotateValue = currentAbsDegPosition + rotationRelative; 
			error = !error;
		}

		if(error) { console.log ('error input'); }
		
		return rotateValue;
	}
	
	//rotation calc will return the value diference that should be moved to attain the desired position
	rotationCalc(positionWanted) {

		let rotationRelative = null;

		if(0 <= positionWanted <= 360) {
			
			const currentDegPosition = this.getPosDegrees();
			const positionDiference = positionWanted - currentDegPosition;
			let error = true;

			if(positionWanted > currentDegPosition) {

				rotationRelative = positionDiference;
				error = !error;	
			}

			if(positionWanted < currentDegPosition) {

				rotationRelative = positionDiference;
				error = !error;

			}

			if(positionWanted == currentDegPosition) {rotationRelative = 0; error = !error;}

			if (error) {

				console.log('error value');

			}
		}

		

		return(rotationRelative);

	}



	translateToAbsoluteAngle (desiredAngle, spinNumber, clockwise) {

		let positionWanted = null;
		let ckWise = 0;
		
		if(spinNumber > 0) {
		
			if(clockwise) {

				ckWise = 1;

			}

			else {

				ckWise = -1;
			}

			positionWanted = (desiredAngle + (spinNumber * 360)) * ckWise;

		}

		else { 

			positionWanted = desiredAngle ;

		}

		return positionWanted;
	}
	


	



	movePositionDeg (angle,isAfter) {
		console.log('object ' + this.objName + ' Angle input on move is' + angle);
		
		var valangle = angle;
		var rotationresult = this.rotationValue(valangle,isAfter);

		console.log('calc rotation value' + this.objName + ' result' + rotationresult);

		return this.rotateTheElement(rotationresult);
	}


	

	

}



