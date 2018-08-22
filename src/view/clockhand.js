//ABSTRACT CLASS
import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';

export default class ClockHand {

	constructor (){   
		var objName;
		var objTarget;
		var posDegrees;
		var posValue;    
	}
	setObjName(objName) {
		this.objName=objName;
	}

	setObjtarget(objTarget){
		this.objTarget=objTarget;
	}

	setPosDegrees(posDegrees){
		this.posDegrees=posDegrees;
	}

	setPosValue(posValue){
		this.posValue=posValue;
	}

	getPosValue(){
		return this.posValue;
	}
	
	
	
	rotateTheElement(angle){
		console.log('object name '+this.objName);
		// console.log('objtarget:'+this.objTarget);

		console.log('posDegrees Before '+ this.posDegrees);
		console.log('angle calc'+angle);
		console.log('im gonna do this.'+this.objTarget+' '+this.objName+' style.transform = rotate'+angle+'+deg');
		// angle=this.posDegrees+angle;
		this.objTarget.style.transform = 'rotate(' + angle + 'deg)';
		this.posDegrees=angle;
		console.log('posDegrees After '+ this.posDegrees);
		return angle;
	}

	calcRotation (angle,isAfter){

		// console.log('-----------------------------------------------------------------------------');

		console.log('object '+this.objName+' Angle input is'+angle);
		console.log('object '+this.objName+' After is'+isAfter);

		var rotate=0;
		var posRel=this.posDegrees%360; //0 to pos
		var angleRel=angle%360; //0 to angle
		var compPosRel = 360-posRel;//360 to angle
		var compAngleRel = 360 - angleRel;//360 to angle
		var absdiference=Math.abs(angleRel-posRel);
		var compAbsDiference = Math.abs(360 - absdiference);
		var absrealdiference = Math.abs(angle-this.posDegrees);
		var isAngleRelBigger=true;
		// console.log('fixed Values chart : ////////////////////////////////////////////');
		// console.log('posDegrees is ' + this.posDegrees);
		// console.log('angle input is ' + angle);
		// console.log('isafter is ' + isAfter);
		// console.log('posRel is '+posRel);
		// console.log('angleRel is '+angleRel);	
		// console.log('compPosRel is '+compPosRel);
		// console.log('compAngleRel is '+compAngleRel);
		
		if(posRel>angleRel){
			isAngleRelBigger=false;
		}
		

		var angleSpins= (Math.trunc(angle/360));
		var posDegSpins= (Math.trunc(this.posDegrees/360));
		var diferenceSpins=(Math.trunc(absrealdiference/360));
		var hasSpinned = 0;var hourHand=boxFact.createHour();
		var minuteHand=boxFact.createMin();
		var secondHand=boxFact.createSec();

		// console.log('Computed Values chart : ////////////////////////////////////////////');

		
		// console.log('absdiference is '+ absdiference);
		// console.log('isAngleRelBigger '+isAngleRelBigger);
		// console.log('abs real diference is ' + absrealdiference);
		// console.log('number of angle spins over 360= '+angleSpins);
		// console.log('number of position spins over 360= '+posDegSpins);
		// console.log('number of diference spins over 360= '+diferenceSpins);
		var spinnedDiference = Math.abs(angleSpins-posDegSpins);
		// console.log('spinned diferences '+spinnedDiference);
		if(spinnedDiference>0){hasSpinned =1;}
		

		//point is after the initial position 
		if(isAfter){
			
			if(isAngleRelBigger){
				// console.log('case 1');
				rotate=this.posDegrees+(absdiference)+(360*hasSpinned*(diferenceSpins-1));
			}

			else{
				// console.log('case 2');
				let distTo360=360-posRel;
				// console.log('distTo360 '+distTo360);
				rotate=angleRel+distTo360+(hasSpinned*(posRel*2+(360*diferenceSpins)));
			}
				
		}

		//point is before the inital position !isAfter
		else{
			if(isAngleRelBigger){
				// consoleit.log('case 3');
				if(!hasSpinned){
					rotate=-compAbsDiference;
				}
				else{
					rotate = -(posRel-angleRel+(360*spinnedDiference));
				} 
			}
			
			else{
				// console.log('case 4');
				rotate=-absdiference;
			}
		}
		
		
		console.log('object '+this.objName+' Angle output is'+rotate);
		return rotate;
	}
 
	movePositionDeg (angle,isAfter) {
		console.log('object '+this.objName+' Angle input on move is'+angle);
		
		var valangle = angle;
		var rotationresult = this.calcRotation(valangle,isAfter);

		console.log('calc rotation value'+this.objName+' result'+rotationresult);

		return this.rotateTheElement(rotationresult);
	}


	

	

}



