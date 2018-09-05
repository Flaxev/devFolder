import TheTime from './model/thetime.js';
import boxFact from './magicbox/boxfact.js';
import './index.scss';
import rendernow from './view/clockrender.js';
import DomEditor from './view/domeditor.js';
import Clock from './view/clock.js';
import DragToTime from './control/DragToTime.js';


const clock = new Clock();
const domUtils = new DomEditor();
const dragToTime = new DragToTime();
const VarDBtime = new TheTime(0, 0, 0, 0); 
const hourHand = boxFact.createHour();
const minuteHand = boxFact.createMin();
const secondHand = boxFact.createSec();

clock.setTicTime(1000);
console.log('Tic Time ' + clock.getTicTime());




var btn = domUtils.createButtonForaction('Update To Real Time', ()=> VarDBtime.updateCurrentRealTime());
document.body.appendChild(btn);

let inputform = domUtils.createinputform(domUtils.forminputAction, VarDBtime);
document.body.appendChild(inputform);  
let inputTicTime = domUtils.createinputtextelement('ticTimeInput');
var ticTimeBtn = domUtils.createButtonForaction('Change Tic Time', ()=> domUtils.changeTicTimeAction(VarDBtime, hourHand, minuteHand, secondHand, clock));
document.body.appendChild(inputTicTime);
document.body.appendChild(ticTimeBtn);
VarDBtime.updateCurrentRealTime();

rendernow(VarDBtime, hourHand, minuteHand, secondHand);

document.getElementById('clockPage').addEventListener('mousedown', ()=> dragToTime.mouseDownAction(clock));
document.getElementById('clockPage').addEventListener('mouseup', ()=> dragToTime.mouseUpAction(VarDBtime));




clock.setFlow(VarDBtime, hourHand, minuteHand, secondHand, clock);

