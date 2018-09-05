import CalcTriangle from './CalcTriangle';
import boxFact from '../magicbox/boxfact.js';

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

		this.setPointA(this.getClickPoint());
		

	}

	mouseUpAction (VarDBtime) {
		
		this.setPointB(this.getClickPoint());

		this.dragToTimeChangeSec(VarDBtime);
	}

	getClickPoint () {

		const coordx = event.clientX;
		const coordy = event.clientY;
		
		const point = [coordx, coordy];

		return point;
	}	

	calcPointAngleDiference() {
		
		const calcTriangle = new CalcTriangle();

		let pointA = this.getPointA();
		let pointB = this.getPointB();
		const ref = this.getReference(); 

		const angleA = calcTriangle.calcAngle(ref, pointA);
		const angleB = calcTriangle.calcAngle(ref, pointB);
		console.log('AngleA', angleA);
		console.log('AngleB', angleB);
		const angleDif = angleB - angleA;
		console.log('AngleDiference', (angleDif));

		return angleDif;

	}

	dragToTimeChangeSec(VarDBtime) {

		const secH = boxFact.createSec();

		const angleDif = this.calcPointAngleDiference();

		const absAngleDif = Math.abs(angleDif);

		let secRotate = secH.degToSec(absAngleDif);

		if(angleDif < 0) {secRotate = secRotate * -1;}

		let currentSec = VarDBtime.getSeconds();

		console.log('Current sec ' + currentSec + 'Sec Rotate ' + secRotate);

		currentSec = currentSec + secRotate; 

		VarDBtime.setSeconds(currentSec);





		
	}




}