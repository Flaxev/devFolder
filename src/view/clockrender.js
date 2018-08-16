

import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';




export default function renderview () {
	
	
	var VarDBtime = new TheTime(30,50,14); //secs, mins , hours

	// var hourhand = new HourHand('#hour',0);
	// var minutehand = new min('#minute',0);
	// var secondhand = new sec('#second',0);
	var hourHand=boxFact.createHour();
	var minuteHand=boxFact.createMin();
	var secondHand=boxFact.createSec();
	hourHand.movepositiondeg(hourHand.hourtodeg(VarDBtime.gethours())+hourHand.mintodeg(VarDBtime.getminutes())+hourHand.sectodeg(VarDBtime.gethours()));
	minuteHand.movepositiondeg(minuteHand.mintodeg(VarDBtime.getminutes())+minuteHand.sectodeg(VarDBtime.getseconds()));
	secondHand.movepositiondeg(secondHand.sectodeg(VarDBtime.getseconds()));

	var degreees=secondHand.posGrados;
     
	console.log('retorno los grados:'+ degreees);
	console.log('tiempo son '+VarDBtime.getseconds()+'segundos');
	console.log('las horas son '+hourHand.hourtodeg(VarDBtime.gethours())+' grados');

	console.log('Son las '+VarDBtime.gethours()+':'+VarDBtime.getminutes()+':'+VarDBtime.getseconds());

}
