import DragToTime from '../../src/control/DragToTime.js';
import VarDBtime from '../../src/model/thetime.js';
import boxFact from '../../src/magicbox/boxfact.js';
jest.mock ('../../src/magicbox/domItemUtils.js');
import domItemUtils from '../../src/magicbox/domItemUtils.js';
let varDBtime = new VarDBtime(0, 0, 0, 0);
let secHand = boxFact.createSec();
let dragToTime = new DragToTime();
let point = [0, 0];
let point2 = [0, 0];
let ref = [0, 0];
let result = null;
let timeSBefore = null;
let timeSAfter = null;
beforeEach(function() {

	

	point [0] = 0;

	point [1] = 0;

	point2 [0] = 0;

	point2 [1] = 0;

	ref [0] = 1;

	ref [1] = 1;

	result = null;

	

	
});

describe('Test the transformation from drag in the screen to a equivalent time change in the model', function() {


	describe('Test the setting of new variables in the class', function() {

		it('Should add a point[1,2] in the Class props GIVEN  a point [1,2]', function() {

			//GIVEN
			point [0] = 1;
			point [1] = 2;

			//WHEN
			result = dragToTime.setPointA(point);

			//THEN

			expect(dragToTime.pointA[0]).toBe(1);
			expect(dragToTime.pointA[1]).toBe(2);

		});

		it('Should get a point[1,2] in the Class props GIVEN  a point [1,2] previously set', function() {

			//GIVEN
			point [0] = 1;
			point [1] = 2;

			//WHEN
			dragToTime.setPointA(point);

			result = dragToTime.getPointA();


			//THEN
			expect(result[0]).toEqual(point[0]);
			expect(result[1]).toEqual(point[1]);

		});

	});


	//Sphere radius = 253.9

	describe('Test The calcPoitAngleDiference function', function() {


		it('Should return 90 Deg GIVEN Point A = 0,1 , Point B = 2,1  ref = 1,1 ', function() {

			//given

			point[0] =  1;
			point[1] = 0;
			point2[0] = 2;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);

			//WHEN 
			
			result = dragToTime.calcPointAngleDiference();

			//THEN

			expect(result).toBe(90);
			
			
		});

		it('Should return 90 Deg GIVEN Point A = 0,1 , Point B = 2,1  ref = 1,1', function() {

			//given

			point[0] =  1;
			point[1] = 0;
			point2[0] = 2;
			point2[1] = 0; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);

			//WHEN 
			
			result = dragToTime.calcPointAngleDiference();

			//THEN

			expect(result).toBe(45);
			
			
		});


		it('Should return 270 Deg GIVEN Point A = 1,0 , Point B = 0,1  ref = 1,1', function() {

			//given

			point[0] =  1;
			point[1] = 0;
			point2[0] = 0;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);

			//WHEN 
			
			result = dragToTime.calcPointAngleDiference();

			//THEN

			expect(result).toBe(270);
			
			
		});


		it('Should return 180 Deg GIVEN Point A = 2,1 , Point B = 0,1  ref = 1,1', function() {

			//given

			point[0] =  2;
			point[1] = 1;
			point2[0] = 0;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);

			//WHEN 
			
			result = dragToTime.calcPointAngleDiference();

			//THEN
			
			expect(result).toBe(180);
		});


		it('Should return 180 Deg GIVEN Point A = 0,1  , Point B = 2,1  ref = 1,1', function() {

			//given

			point[0] =  0;
			point[1] = 1;
			point2[0] = 2;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);

			//WHEN 
			
			result = dragToTime.calcPointAngleDiference();

			//THEN
			
			expect(result).toBe(- 180);
		});


	});
	
	describe('Test the dragToTimeChangeSec', function () {

		it('Should update VarDBtime with secs + 30 GIVEN secHand, Point A = 2,1 , Point B = 0,1  ref = 1,1', function() {

			//GIVEN
			point[0] =  2;
			point[1] = 1;
			point2[0] = 0;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);
			timeSBefore = varDBtime.getTotalTimeInSeconds();
			//WHEN

			dragToTime.dragToTimeChange(varDBtime, secHand);

			//THEN

			timeSAfter = varDBtime.getTotalTimeInSeconds();

			expect(timeSAfter).toBe(timeSBefore + 30);

			
		});



		it('Should update VarDBtime with secs + 30 GIVEN secHand, Point A = 2,1 , Point B = 0,1  ref = 1,1', function() {

			//GIVEN
			
			point[0] =  0;
			point[1] = 1;
			point2[0] = 2;
			point2[1] = 1; 

			dragToTime.setPointA(point);
			dragToTime.setPointB(point2);
			domItemUtils.getReference.mockImplementation(() => ref);
			timeSBefore = varDBtime.getTotalTimeInSeconds();
			//WHEN

			dragToTime.dragToTimeChange(varDBtime, secHand);

			//THEN

			timeSAfter = varDBtime.getTotalTimeInSeconds();

			expect(timeSAfter).toBe(timeSBefore - 30);

			
		});

	});	



});