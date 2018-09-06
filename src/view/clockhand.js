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
	
	




	
	rotationRotate (positionWanted, clockwise) {

		console.log('position wanted' + positionWanted );

		let angle = null;
		let angleRelWanted = null;
		const currentDegPosition = this.getPosDegrees();
		let spins = null;


		angleRelWanted = this.rotationCalcAngle(positionWanted, clockwise);
		
		if(Math.abs(positionWanted - currentDegPosition) >= 360) {

			spins = this.rotationCalcSpins(positionWanted);
			
			angleRelWanted = this.rotationAddSpins(angleRelWanted, spins, clockwise);

		}
		
		angle = this.rotationTranslate(angleRelWanted);

		this.setPosDegrees(positionWanted % 360);
		this.setPosAbsDegrees(angle);


		this.rotationRotateAction(angle);

		console.log('position wanted' + positionWanted + 'angle ' +  angle);

		return angle;
	}

	rotationCalcAngle(positionWanted, clockwise) {

		let rotationRelative = null;
		let currentPosition = this.getPosDegrees();
		positionWanted = positionWanted % 360;

		const complementaryPositionWanted = 360 - positionWanted;
		const complementaryPositionCurrent = 360 - currentPosition;
		let error = true;

	

		if(positionWanted != currentPosition) {

			if(clockwise) {

				if(positionWanted > currentPosition) {

					rotationRelative = positionWanted - currentPosition;

					error = false;

					

				}

				if(positionWanted < currentPosition) {

					rotationRelative = complementaryPositionCurrent + positionWanted;

					

					error = false;

				}

			}

			if(!clockwise) {

				if(positionWanted > currentPosition) {

					rotationRelative = - (complementaryPositionWanted + currentPosition);


					error = false;

				}

				if(positionWanted < currentPosition) {

					rotationRelative = - (currentPosition - positionWanted);


					error = false;

				}

			}
		}

		if(positionWanted == currentPosition) {
			
			rotationRelative = 0; 
			
			error = false;
		}

		if (error) { console.log('error value');}

		return(rotationRelative);

	}

	rotationCalcSpins (positionWanted) {

		const currentAbsDegPosition = this.getPosAbsDegrees();
		let spinNumber = null;
		const wantedSpins = Math.trunc(positionWanted / 360);
		const currentSpins = Math.trunc(currentAbsDegPosition / 360);
		

		spinNumber = Math.abs(currentSpins - wantedSpins);
		
		return spinNumber;
	}

	rotationAddSpins (desiredAngle, spinNumber, clockwise) {

		let positionWanted = null;
		let ckWise = 0;
		
		if(spinNumber > 0) {
		
			if(clockwise) {

				ckWise = 1;

			}

			else {

				ckWise = -1;
			}

			positionWanted = (desiredAngle + (spinNumber * 360 * ckWise));

		}

		else { 

			positionWanted = desiredAngle ;

		}

		return positionWanted;
	}
	
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

	rotationRotateAction(angle) {
		
		// console.log('im gonna do this.' + this.objTarget + ' ' + this.objName + ' style.transform = rotate' + angle + '+deg');
		
		this.objTarget.style.transform = 'rotate(' + angle + 'deg)';
		
		return angle;
	}





	

	

}



