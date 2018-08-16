//ABSTRACT CLASS


export default class ClockHand {

	constructor (){   
		var objName;
		var objTarget;
		var posGrados;    
	}
	setObjName(objName) {
		this.objName=objName;
	}

	setObjtarget(objTarget){
		this.objTarget=objTarget;
	}

	setPosGrados(posGrados){
		this.posGrados=posGrados;
	}
	

 
	movepositiondeg (angle) {
		console.log('object name '+this.objName);
		console.log('angle'+angle);
		console.log('objtarget:'+this.objTarget);
		console.log('posgrados is'+this.posGrados);
		var rotate=angle-(this.posGrados % 360);
		this.posGrados=angle;	

		console.log('im gonna do this.'+this.objTarget+'style.transform = rotate'+rotate+'+deg');
		this.objTarget.style.transform = 'rotate(' + rotate + 'deg)';
	}
}



// static create(objName, posgrados, utils=util, Ctor=ClockHand) {
// 	const instance = new Ctor(utils);
// 	instance.setObjName(objName);

// 	return instance;
// }
