
export default class CalcTriangle {



	radsToDeg (rads) {
		//180°/π

		return (rads * 180 / (Math.PI));

	}

	calcTriangleSide(sideA, sideB) {
		let sideC;

		sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

		return sideC;
	}

	calcTriangleSinCos(sideA, sideB, sideC, isSin) {

		let aSinCos = null;

		if(isSin) {

			aSinCos = sideA / sideC;

		}

		else {

			aSinCos = sideB / sideC;
		
		}
		return aSinCos;
	}

	calcAngleSinCos(aSinCos, isSin) {

		let angle = null;

		if(isSin) {

			angle = Math.asin(aSinCos);

		}

		else {

			angle = Math.acos(aSinCos);

		}


		angle = this.radsToDeg(angle);

		return angle;

	}

	calcPointQuadrant(ref, point) {
		let quadrant = 0;
		let rx = null;
		let ry = null;
		let px = null;
		let py = null;
		rx = ref[0];
		ry = ref[1];
		px = point[0];
		py = point[1];

		
		if((px > rx) && (py < ry)) {

			quadrant = 1;

		}

		else if((px > rx) && (py > ry)) {

			quadrant = 2;

		}

		else if((px < rx) && (py > ry)) {

			quadrant = 3;

		}

		else if((px < rx) && (py < ry)) {

			quadrant = 4;

		}

		else if((px > rx) && (py == ry)) {

			quadrant = 2;

		}

		else if((px == rx) && (py > ry)) {

			quadrant = 3;

		}

		else if((px < rx) && (py == ry)) {

			quadrant = 4;

		}

		else if((px == rx) && (py < ry)) {

			quadrant = 1;

		}

		else if((px == rx) && (py == ry)) {

			quadrant = 0;

		}
		




		return quadrant;
	}

	translateToSideTriangle(ref, point) {

		let quadrant = 0;
		let rx = null;
		let ry = null;
		let px = null;
		let py = null;
		let sideA = null;
		let sideB = null;
		let sideC = null;
		
		rx = ref[0];
		ry = ref[1];
		px = point[0];
		py = point[1];
		

		let triangle = [-1, -1, -1];
		quadrant = this.calcPointQuadrant(ref, point);

		// console.log('quadrant is ' +  quadrant);
		if(quadrant == 1) {

			sideA = Math.abs(px - rx);
			sideB = Math.abs(ry - py);
			sideC = this.calcTriangleSide(sideA, sideB);

			triangle[0] = sideA;
			triangle[1] = sideB;
			triangle[2] = sideC;
		}

		else if(quadrant == 2) {

			sideA = Math.abs(py - ry);
			sideB = Math.abs(px - rx);
			sideC = this.calcTriangleSide(sideA, sideB);

			triangle[0] = sideA;
			triangle[1] = sideB;
			triangle[2] = sideC;
		}


		else if(quadrant == 3) {

			sideA = Math.abs(rx - px);
			sideB = Math.abs(py - ry);
			sideC = this.calcTriangleSide(sideA, sideB);

			triangle[0] = sideA;
			triangle[1] = sideB;
			triangle[2] = sideC;
		}


		else if(quadrant == 4) {

			sideA = Math.abs(ry - py);
			sideB = Math.abs(rx - px);
			sideC = this.calcTriangleSide(sideA, sideB);

			triangle[0] = sideA;
			triangle[1] = sideB;
			triangle[2] = sideC;
		}

		else {

			triangle[0] = 0;
			triangle[1] = 0;
			triangle[2] = 0;

		}



		return triangle;
	}

	calcAngle(ref, point) {
		// console.log('point ' + point);
		// console.log('ref ' + ref);
		let angle = null;
		let angleAdd = null;
		let isSin = true;
		let triangle = this.translateToSideTriangle(ref, point);
		// console.log('triangle ' + triangle);
		let quadrant = this.calcPointQuadrant(ref, point);
		// console.log('quadrant ' + quadrant);
		let sinA = this.calcTriangleSinCos(triangle[0], triangle[1], triangle[2], isSin);
		// console.log('sinA ' + sinA);
		angle = this.calcAngleSinCos(sinA, isSin);
		// console.log('angle ' + angle);

		switch (quadrant) {
		
		case 1 : 

			angleAdd = 0;

			break;

		case 2 : 

			angleAdd = 90;

			break;

		case 3 : 

			angleAdd = 180;

			break;

		case 4 : 

			angleAdd = 270;

			break;

		}

		angle = angle + angleAdd;
		
		return angle;
	}

}