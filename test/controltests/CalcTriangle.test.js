
import CalcTriangle from '../../src/control/CalcTriangle.js';

const calcTriangle = new CalcTriangle();

let sideA = null;
let sideB = null;
let result = null;
let sideC = null;
let isSin = true;
let aSinCos = null;
let point = [-1, -1];
let ref	= [-1, -1];
let triangle = [-1, -1, -1];
let rad = 0;


beforeEach(function () {

	sideA = null;
	sideB = null;
	sideC = null;
	result = null;
	isSin = true;
	aSinCos = null;
	
	point [0] = 0;
	point [1] = 0;
	ref	[0] = 0;
	ref	[1] = 0;
	rad = 0;


});

describe('Test the math utils', function () {

	describe('Test	the radsToDeg fucntion', function () {

		it('Should return 180/PI WHEN 1 rad', function () {
			
			//WHEN
			rad = 1;
			result = calcTriangle.radsToDeg(rad);

			//THEN
			expect(result).toBe(180 / Math.PI);

		});


	});


});

describe('Test the Math operation to return angle given a point relative to a reference ', function() {

	describe('Test function for calcTriangleSide', function() {

		it('Should return 5 GIVEN side a = 3 and side b = 4  ', function () {

			//GIVEN
			sideA = 3;
			sideB = 4;

			//WHEN
			result = calcTriangle.calcTriangleSide(sideA, sideB);

			//THEN

			expect(result).toBe(5);


		});

		it('Should return 17 GIVEN side a = 8 and side b = 15  ', function () {


			//GIVEN
			sideA = 8;
			sideB = 15;

			//WHEN
			result = calcTriangle.calcTriangleSide(sideA, sideB);

			//THEN

			expect(result).toBe(17);




		});


		it('Should return 13 GIVEN side a = 12 and side b = 5  ', function () {


			//GIVEN
			sideA = 12;
			sideB = 5;

			//WHEN
			result = calcTriangle.calcTriangleSide(sideA, sideB);

			//THEN

			expect(result).toBe(13);

		});

	

	});

	describe('Test function for calcTriangleSinCos', function() {

		it('Should return 3/5 GIVEN sideA= 3, sideB = 4 sideC = 5  and sincos ', function () {


			//GIVEN
			sideA = 3;
			sideB = 4;
			sideC = 5;
			
			isSin = true;

			//WHEN
			result = calcTriangle.calcTriangleSinCos(sideA, sideB, sideC, isSin);

			//THEN

			expect(result).toBe(3 / 5);



		});


		it('Should return 4/5 GIVEN sideA= 3, sideB = 4 sideC = 5  and !sincos ', function () {


			//GIVEN
			sideA = 3;
			sideB = 4;
			sideC = 5;
			
			isSin = false;

			//WHEN
			result = calcTriangle.calcTriangleSinCos(sideA, sideB, sideC, isSin);

			//THEN

			expect(result).toBe(4 / 5);



		});

		it('Should return 3/5 GIVEN sideA= 3, sideB = 4 sideC = 5  and sincos ', function () {


			//GIVEN
			sideA = 1;
			sideB = 1;
			sideC = calcTriangle.calcTriangleSide(1, 1);
			
			isSin = true;

			//WHEN
			result = calcTriangle.calcTriangleSinCos(sideA, sideB, sideC, isSin);

			//THEN

			expect(result).toBe(sideA / sideC);



		});

	});

	describe('Test function for calcAngleSinCos', function() {

		it('Should return arcsin of 0.6 GIVEN aSinCos = 0.6 and isSin', function() {

			//GIVEN
			aSinCos = 0.6;
			
			isSin = true;

			//WHEN
			result = calcTriangle.calcAngleSinCos(aSinCos, isSin);

			//THEN

			expect(result).toBe(calcTriangle.radsToDeg(Math.asin(0.6)));

		});

		it('Should return arccos of 0.6 GIVEN aSinCos = 0.6 and !isSin', function() {

			//GIVEN
			aSinCos = 0.6;
			
			isSin = false;

			//WHEN
			result = calcTriangle.calcAngleSinCos(aSinCos, isSin);

			//THEN

			expect(result).toBe(calcTriangle.radsToDeg(Math.acos(0.6)));

		});

		it('Should return arcsin of 0.6 GIVEN aSinCos = 0.6 and isSin', function() {

			//GIVEN
			aSinCos = 1 / calcTriangle.calcTriangleSide(1, 1);
			
			isSin = true;

			//WHEN
			result = calcTriangle.calcAngleSinCos(aSinCos, isSin);

			//THEN

			expect(result).toBe(44.99999999999999);

		});


	});

	describe('Test function for	calcPointQuadrant', function() { //neeeds refactor simplification

		it('Should return 1 GIVEN ref[10][10] WHEN point[11][9]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 9;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(1);
		});

		it('Should return 2 GIVEN ref[10][10] WHEN point[11][11]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 11;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(2);
		});

		it('Should return 3 GIVEN ref[10][10] WHEN point[9][11]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 11;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(3);
		});

		it('Should return 4 GIVEN ref[10][10] WHEN point[9][9]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 9;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(4);
		});

		it('Should return 0 GIVEN ref[10][10] WHEN point[10][10]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 10;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(0);
		});

		it('Should return 1 GIVEN ref[10][10] WHEN point[11][8]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 8;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(1);
		});

		it('Should return 2 GIVEN ref[10][10] WHEN point[11][12]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 12;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(2);
		});

		it('Should return 3 GIVEN ref[10][10] WHEN point[8][11]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 8;
			point[1] = 11;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(3);
		});

		it('Should return 4 GIVEN ref[10][10] WHEN point[9][8]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 8;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(4);
		});


		it('Should return 2 GIVEN ref[10][10] WHEN point[11][10]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 10;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(2);
		});


		it('Should return 3 GIVEN ref[10][10] WHEN point[10][11]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 11;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(3);
		});


		it('Should return 4 GIVEN ref[10][10] WHEN point[9][10]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 10;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(4);
		});


		it('Should return 1 GIVEN ref[10][10] WHEN point[10][9]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 9;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(1);
		});

		it('Should return 0 GIVEN ref[10][10] WHEN point[10][10]', function() {

			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 10;
			result = calcTriangle.calcPointQuadrant(ref, point);
			//THEN
			expect(result).toBe(0);
		});

	});

	describe('Test function for translateSide given point and quadrant', function () {

		it('Should return triangle=[1,2,x] GIVEN ref = [10,10] WHEN point[11,8]', function() {

			
			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 8;
			
			result = calcTriangle.translateToSideTriangle(ref, point);
			//THEN
			triangle[0] = 1;
			triangle[1] = 2;
			triangle[2] = calcTriangle.calcTriangleSide(triangle[0], triangle[1]);
			expect(result).toEqual(triangle);

		});

		it('Should return triangle=[2,1,x] GIVEN ref = [10,10] WHEN point[11,12]', function() {

			
			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 12;
			result = calcTriangle.translateToSideTriangle(ref, point);
			//THEN
			triangle[0] = 2;
			triangle[1] = 1;
			triangle[2] = calcTriangle.calcTriangleSide(triangle[0], triangle[1]);
			expect(result).toEqual(triangle);

		});


		it('Should return triangle=[2,1,x] GIVEN ref = [10,10] WHEN point[8,11]', function() {

			
			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 8;
			point[1] = 11;
			result = calcTriangle.translateToSideTriangle(ref, point);
			//THEN
			triangle[0] = 2;
			triangle[1] = 1;
			triangle[2] = calcTriangle.calcTriangleSide(triangle[0], triangle[1]);
			expect(result).toEqual(triangle);

		});

		it('Should return triangle=[2,1,x] GIVEN ref = [10,10] WHEN point[9,8]', function() {

			
			//GIVEN
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 8;
			result = calcTriangle.translateToSideTriangle(ref, point);
			//THEN
			triangle[0] = 2;
			triangle[1] = 1;
			triangle[2] = calcTriangle.calcTriangleSide(triangle[0], triangle[1]);
			expect(result).toEqual(triangle);

		});


	} );

	describe('Test function for calcAngle', function() {

		it('Should return 314.99999999999999 GIVEN ref = 10,10 WHEN point = 9, 9', function() { 

			//GIVEN
			//quad 4
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 9;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(314.99999999999999);
			
		});

		it('Should return 134.99999999999999 GIVEN ref = 10,10 WHEN point = 11, 11', function() { 

			//GIVEN
			//quad 2
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 11;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(134.99999999999999);
			
		});

		it('Should return 44.99999999999999 GIVEN ref = 10,10 WHEN point = 11, 9', function() { 

			//GIVEN
			//quad 1
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 9;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(44.99999999999999);
			
		});

		it('Should return 224.99999999999999 GIVEN ref = 10,10 WHEN point = 9, 11', function() { 

			//GIVEN
			//quad 3
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 11;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(224.99999999999999);
			
		});

		it('Should return 90 GIVEN ref = 10,10 WHEN point = 11, 10', function() { 

			//GIVEN
			//quad 3
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 11;
			point[1] = 10;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(90);
			
		});

		it('Should return 180 GIVEN ref = 10,10 WHEN point = 10, 11', function() { 

			//GIVEN
			//quad 3
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 11;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(180);
			
		});

		it('Should return 270 GIVEN ref = 10,10 WHEN point = 9, 10', function() { 

			//GIVEN
			//quad 3
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 9;
			point[1] = 10;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(270);
			
		});

		it('Should return 0 GIVEN ref = 10,10 WHEN point = 10, 9', function() { 

			//GIVEN
			//quad 3
			ref[0] = 10;
			ref[1] = 10;
			//WHEN
			point[0] = 10;
			point[1] = 9;
			// console.log('point before' + point);
			result = calcTriangle.calcAngle(ref, point);
			//THEN
			expect(result).toBe(0);
			
		});

	});

});