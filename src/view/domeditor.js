export default class DomEditor {

	createinputtextelement (name) {

		let input = document.createElement('input');
		input.type = 'text';
		input.id = name;
		input.placeholder = name;
	
		return input;
	
	}

	createinputform (forminputaction,VarDBtime) {
	
		let secInput = this.createinputtextelement('Second Input');
		
		let minInput = this.createinputtextelement('Minute Input');
	
		let hourInput = this.createinputtextelement('Hour Input');
	
		
		let inputbutton = document.createElement('button');
		inputbutton.type = 'text';
		let t = document.createTextNode('Set The Clock');
		inputbutton.appendChild(t);
	
		inputbutton.onclick = ()=> forminputaction(VarDBtime);	
	
		let inputbox = document.createElement ('div');
		
		inputbox.appendChild(hourInput);
		inputbox.appendChild(minInput);
		inputbox.appendChild(secInput);
	
		inputbox.appendChild(inputbutton);
		
		
		
		
		return inputbox;
	}

	createButtonForaction(btnName,action) {

		var btn = document.createElement('BUTTON');
		var t = document.createTextNode(btnName);
		btn.addEventListener('click', function() {action();});
		btn.appendChild(t);

		return btn;

	}


	forminputaction (VarDBtime) {


		let hourInput = document.getElementById('Hour Input').value;
		let minInput = document.getElementById('Minute Input').value;
		let secInput = document.getElementById('Second Input').value;


		VarDBtime.updateByInput(hourInput,minInput,secInput);

	
	}




}