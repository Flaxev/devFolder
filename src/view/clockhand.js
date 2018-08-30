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
	
	




	//Main rotation
	rotationRotate (positionWanted,clockwise) {

		let angle = null;
		let angleRel = null;
		const currentDegPosition = this.getPosDegrees();
		let spins = null;


		angleRel = this.rotationCalcAngle(positionWanted,clockwise);
		
		if(Math.abs(positionWanted - currentDegPosition) >= 360) {

			spins = this.rotationCalcSpins(positionWanted);
			console.log('CalcSpins result = ' + spins);
			angleRel = this.rotationAddSpins(angleRel, spins, clockwise);

		}
		
		angle = this.rotationTranslate(angleRel);

		this.setPosDegrees(positionWanted % 360);
		this.setPosAbsDegrees(angle);


		this.rotationRotateAction(angle);

		return angle;
	}

	rotationCalcAngle(positionWanted,clockwise) {

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

					console.log('case 1');

				}

				if(positionWanted < currentPosition) {

					rotationRelative = complementaryPositionCurrent + positionWanted;

					console.log('case 2');

					error = false;

				}

			}

			if(!clockwise) {

				if(positionWanted > currentPosition) {

					rotationRelative = - (complementaryPositionWanted + currentPosition);

					console.log('case 3');

					error = false;

				}

				if(positionWanted < currentPosition) {

					rotationRelative = - (currentPosition - positionWanted);

					console.log('case 4');

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
		
		console.log('im gonna do this.' + this.objTarget + ' ' + this.objName + ' style.transform = rotate' + angle + '+deg');
		
		this.objTarget.style.transform = 'rotate(' + angle + 'deg)';
		
		return angle;
	}





	

	

}



