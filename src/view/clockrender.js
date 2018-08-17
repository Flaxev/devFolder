import TheTime from '../model/thetime.js';
import boxFact from '../magicbox/boxfact.js';


export default function renderView () {
	
	var VarDBtime = new TheTime(30,50,14); //secs, mins , hours

	var currentHour = VarDBtime.getHours();
	var currentMin = VarDBtime.getMinutes();
	var currentSec = VarDBtime.getSeconds();
	var hourHand=boxFact.createHour();
	var minuteHand=boxFact.createMin();
	var secondHand=boxFact.createSec();

	hourHand.movepositiondeg(hourHand.totalDegs(currentHour,currentMin,currentSec));
	minuteHand.movepositiondeg(minuteHand.totalDegs(currentMin,currentSec));
	secondHand.movepositiondeg(secondHand.secToDeg(currentSec));

	var degreees=secondHand.posDegrees;
     
	console.log('retorno los grados:'+ degreees);
	console.log('tiempo son '+VarDBtime.getSeconds()+'segundos');
	console.log('las horas son '+hourHand.hourToDeg(VarDBtime.getHours())+' grados');

	console.log('Son las '+VarDBtime.getHours()+':'+VarDBtime.getMinutes()+':'+VarDBtime.getSeconds());

}
