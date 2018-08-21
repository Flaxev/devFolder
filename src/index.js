import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import renderview from './view/clockrender';
import rendernow from './view/clockrender';


var VarDBtime = new TheTime(30,50,14);

var hourHand=boxFact.createHour();
var minuteHand=boxFact.createMin();
var secondHand=boxFact.createSec();

console.log('the current seconds are ' +VarDBtime.getSeconds());

renderview(VarDBtime,hourHand,minuteHand,secondHand);

VarDBtime.setSecond(17);

console.log('the current seconds are ' +VarDBtime.getSeconds());

renderview(VarDBtime,hourHand,minuteHand,secondHand);




