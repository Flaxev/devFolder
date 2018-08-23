import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import renderview from './view/clockrender';
// import rendernow from './view/clockrender';


var VarDBtime = new TheTime(14,50,30); //hours, mins , secs

var hourHand = boxFact.createHour();
var minuteHand = boxFact.createMin();
var secondHand = boxFact.createSec();

// console.log('the current seconds are ' +VarDBtime.getSeconds());

// renderview(VarDBtime,hourHand,minuteHand,secondHand);

// VarDBtime.setSeconds(10);
// console.log('the current seconds are ' +VarDBtime.getSeconds());

// renderview(VarDBtime,hourHand,minuteHand,secondHand);

renderview(VarDBtime,hourHand,minuteHand,secondHand);

VarDBtime.setSeconds(15);

console.log('the current seconds are ' + VarDBtime.getSeconds());

renderview(VarDBtime,hourHand,minuteHand,secondHand);



// VarDBtime.setSeconds();
// VarDBtime.setMinutes();
// VarDBtime.setHours();






