import CalcTriangle from './CalcTriangle';
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

	getReference() {

		const rect  = document.getElementById('clock').getBoundingClientRect();
		let reference = [];
		reference [0] = rect.left + (rect.width / 2);
		reference [1] = rect.top + (rect.height / 2);

		

		console.log('reference is ', reference);

		return reference;
	}


	getClickPoint (pointNumber) {

		const coordx = event.clientX;
		const coordy = event.clientY;
		

		// const caster = call.id;

		const point = [coordx, coordy];

		

		if(pointNumber == 1) {
			this.setPointA(point);
			console.log(this.getPointA());
		}

		else if (pointNumber == 2) {

			this.setPointB(point);
			console.log(this.getPointB());
			this.calcPointAngleDiference();

		}
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

	dragToTimeChangeSec() {

		const angledif = this.calcPointAngleDiference();

		


	}




}