
let docItemUtils  = {

	getReference : function() {
		
		const rect  = document.getElementById('clock').getBoundingClientRect();
		let reference = [];
		reference [0] = rect.left + (rect.width / 2);
		reference [1] = rect.top + (rect.height / 2);
		console.log('reference is ', reference);

		return reference;
	},

};