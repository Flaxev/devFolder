import DragToTime from '../../src/control/DragToTime.js';

let dragToTime = new DragToTime();
let point = [0, 0];
let result = null;
beforeEach(function() {

	

	point [0] = 0;

	point [1] = 0;

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




});