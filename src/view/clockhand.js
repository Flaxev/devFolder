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
	

 
	movepositiondeg (angle) {
		console.log('object name '+this.objName);
		console.log('angle'+angle);
		console.log('objtarget:'+this.objTarget);
		console.log('posDegrees is'+this.posDegrees);
		var rotate=angle-(this.posDegrees % 360);
		this.posDegrees=angle;	

		console.log('im gonna do this.'+this.objTarget+'style.transform = rotate'+rotate+'+deg');
		this.objTarget.style.transform = 'rotate(' + rotate + 'deg)';
	}
}
