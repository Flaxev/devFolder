import CalcTriangle from './CalcTriangle';
import boxFact from '../magicbox/boxfact.js';
import docItemUtils from '../magicbox/domItemUtils.js';

export default class DragToTime {

	
	

	setPointA(point) {

		this.pointA = point;

	}

	setPointB(point) {

		this.pointB = point;

	}

	getPointA() {

		return this.pointA;
		
	}

	getPointB() {

		return this.pointB;
		
	}

	setReference(ref) {

		this.ref = ref;

	}

	

	mouseDownAction() {

		this.setPointA(docItemUtils.getClickPoint());
		

	}

	mouseUpAction (VarDBtime, Hand) {
		
		this.setPointB(docItemUtils.getClickPoint());

		this.dragToTimeChange(VarDBtime, Hand);
	}

	calcPointAngleDiference() {
		
		const calcTriangle = new CalcTriangle();

		let pointA = this.getPointA();
		let pointB = this.getPointB();
		const ref = docItemUtils.getReference(); 

		const angleA = calcTriangle.calcAngle(ref, pointA);
		const angleB = calcTriangle.calcAngle(ref, pointB);
		// console.log('AngleA', angleA);
		// console.log('AngleB', angleB);
		let angleDif = angleB - angleA;
		// console.log('AngleDiference', (angleDif));

		angleDif = Math.round(angleDif);

		// console.log('AngleDiference', (angleDif));

		

		return angleDif;

	}

	dragToTimeChange(VarDBtime, Hand) {

		// const secH = boxFact.createSec();

		const angleDif = this.calcPointAngleDiference();

		const absAngleDif = Math.abs(angleDif);

		let secRotate = Hand.degToSec(absAngleDif);

		if(angleDif < 0) {secRotate = secRotate * -1;}

		let currentSec = VarDBtime.getSeconds();

		console.log('Current sec ' + currentSec + 'Sec Rotate ' + secRotate);

		currentSec = currentSec + secRotate; 

		VarDBtime.setSeconds(currentSec);





		
	}




}