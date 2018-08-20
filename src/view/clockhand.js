//ABSTRACT CLASS


export default class ClockHand {

	constructor (){   
		var objName;
		var objTarget;
		var posDegrees;    
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
	
	rotateTheElement(angle){
		console.log('object name '+this.objName);
		console.log('objtarget:'+this.objTarget);
		console.log('angle calc'+angle);
		console.log('im gonna do this.'+this.objTarget+'style.transform = rotate'+angle+'+deg');
		this.objTarget.style.transform = 'rotate(' + angle + 'deg)';

	}

	calcRotation (angle,isAfter){

		console.log('-----------------------------------------------------------------------------');

		console.log('posDegrees is ' + this.posDegrees);
		console.log('angle input is ' + angle);
		console.log('isafter is ' + isAfter);
		var rotate=0;
		var posRel=this.posDegrees%360;
		var angleRel=angle%360;
		var absdiference=Math.abs(angleRel-posRel);
		var absrealdiference = Math.abs(angle-this.posDegrees);
		var isAngleRelBigger=true;

		console.log('posRel is'+posRel);
		console.log('angleRel is'+angleRel);
		
		if(posRel>angleRel){
			isAngleRelBigger=false;
		}
		console.log('absdiference is '+ absdiference);

		var angleSpins= (Math.trunc(angle/360));
		var posDegSpins= (Math.trunc(this.posDegrees/360));
		var diferenceSpins=(Math.trunc(absrealdiference/360));
		var hasSpinned = 0;

		if(diferenceSpins>0){hasSpinned =1;}
		console.log('isAngleRelBigger '+isAngleRelBigger);
		console.log('abs real diference is ' + absrealdiference);
		console.log('number of angle spins over 360= '+angleSpins);
		console.log('number of position spins over 360= '+posDegSpins);
		console.log('number of diference spins over 360= '+diferenceSpins);
		

		//point is after the initial position
		if(isAfter){
			
			if(isAngleRelBigger){
				console.log('case 1');
				rotate=this.posDegrees+(absdiference)+(360*hasSpinned*(diferenceSpins-1));
			}

			else{
				console.log('case 2');
				let distTo360=360-posRel;
				console.log('distTo360 '+distTo360);
				rotate=angleRel+distTo360+(hasSpinned*(posRel*2+(360*diferenceSpins)));
			}
				
		}

		//point is before the inital position
		else{
			if(isAngleRelBigger){
				console.log('case 3');
				let distTo360=360-angleRel;
				console.log('distTo360 '+distTo360);
				rotate=-(distTo360+posRel)-(360*hasSpinned*(diferenceSpins-1));
			}
			
			else{
				console.log('case 4');
				rotate=-absdiference;
			}
		}
		
		this.posDegrees=rotate;	

		return rotate;
	}
 
	movePositionDeg (angle,isAfter) {
		this.rotateTheElement(this.calcRotation(angle,isAfter));
	}

}



