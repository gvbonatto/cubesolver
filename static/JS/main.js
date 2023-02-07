
var x = "c1";
var square11 = document.getElementById('sticker1');
var square21 = document.getElementById('sticker2');
var square31 = document.getElementById('sticker3');
var square41 = document.getElementById('sticker4');
var square51 = document.getElementById('sticker5');
var square61 = document.getElementById('sticker6');
var square71 = document.getElementById('sticker7');
var square81 = document.getElementById('sticker8');
var square91 = document.getElementById('sticker9');
var square12 = document.getElementById('sticker10');
var square22 = document.getElementById('sticker11');
var square32 = document.getElementById('sticker12');
var square42 = document.getElementById('sticker13');
var square52 = document.getElementById('sticker14');
var square62 = document.getElementById('sticker15');
var square72 = document.getElementById('sticker16');
var square82 = document.getElementById('sticker17');
var square92 = document.getElementById('sticker18');
var square13 = document.getElementById('sticker19');
var square23 = document.getElementById('sticker20');
var square33 = document.getElementById('sticker21');
var square43 = document.getElementById('sticker22');
var square53 = document.getElementById('sticker23');
var square63 = document.getElementById('sticker24');
var square73 = document.getElementById('sticker25');
var square83 = document.getElementById('sticker26');
var square93 = document.getElementById('sticker27');
var square14 = document.getElementById('sticker28');
var square24 = document.getElementById('sticker29');
var square34 = document.getElementById('sticker30');
var square44 = document.getElementById('sticker31');
var square54 = document.getElementById('sticker32');
var square64 = document.getElementById('sticker33');
var square74 = document.getElementById('sticker34');
var square84 = document.getElementById('sticker35');
var square94 = document.getElementById('sticker36');
var square15 = document.getElementById('sticker37');
var square25 = document.getElementById('sticker38');
var square35 = document.getElementById('sticker39');
var square45 = document.getElementById('sticker40');
var square55 = document.getElementById('sticker41');
var square65 = document.getElementById('sticker42');
var square75 = document.getElementById('sticker43');
var square85 = document.getElementById('sticker44');
var square95 = document.getElementById('sticker45');
var square16 = document.getElementById('sticker46');
var square26 = document.getElementById('sticker47');
var square36 = document.getElementById('sticker48');
var square46 = document.getElementById('sticker49');
var square56 = document.getElementById('sticker50');
var square66 = document.getElementById('sticker51');
var square76 = document.getElementById('sticker52');
var square86 = document.getElementById('sticker53');
var square96 = document.getElementById('sticker54');

var front = [];
var right = [];
var left = [];
var bottom = [];
var back = [];


function click1(clicked_class){
  x = clicked_class;
}

function click_(clicked_id) {
  var button = document.getElementById(clicked_id);
  button.className = x;
}

function moveRight() {

  right.push(square31.className, square61.className, square91.className,
  square32.className, square62.className, square92.className,
  square33.className, square63.className, square93.className,
  square36.className, square66.className, square96.className,
  square14.className, square24.className, square34.className,
  square44.className, square64.className, square74.className,
  square84.className, square94.className);

  square31.className = right[3];
  square61.className = right[4];
  square91.className = right[5];
  square32.className = right[6];
  square62.className = right[7];
  square92.className = right[8];
  square33.className = right[9];
  square63.className = right[10];
  square93.className = right[11];
  square36.className = right[0];
  square66.className = right[1];
  square96.className = right[2];

  square14.className = right[17];
  square24.className = right[15];
  square34.className = right[12];
  square44.className = right[18];
  square64.className = right[13];
  square74.className = right[19];
  square84.className = right[16];
  square94.className = right[14];

  right = [];
}

function moveLeft() {

  left.push(square11.className, square41.className, square71.className,
  square12.className, square42.className, square72.className,
  square13.className, square43.className, square73.className,
  square16.className, square46.className, square76.className,
  square15.className, square25.className, square35.className,
  square45.className, square65.className, square75.className,
  square85.className, square95.className);

  square11.className = left[9];
  square41.className = left[10];
  square71.className = left[11];
  square12.className = left[0];
  square42.className = left[1];
  square72.className = left[2];
  square13.className = left[3];
  square43.className = left[4];
  square73.className = left[5];
  square16.className = left[6];
  square46.className = left[7];
  square76.className = left[8];

  square15.className = left[17];
  square25.className = left[15];
  square35.className = left[12];
  square45.className = left[18];
  square65.className = left[13];
  square75.className = left[19];
  square85.className = left[16];
  square95.className = left[14];

  left = [];
}

function moveFront() {

  front.push(square71.className, square81.className, square91.className,
  square74.className, square84.className, square94.className,
  square75.className, square85.className, square95.className,
  square13.className, square23.className, square33.className,
  square12.className, square22.className, square32.className,
  square42.className, square62.className, square72.className,
  square82.className, square92.className);

  square71.className = front[6];
  square81.className = front[7];
  square91.className = front[8];
  square74.className = front[0];
  square84.className = front[1];
  square94.className = front[2];
  square13.className = front[5];
  square23.className = front[4];
  square33.className = front[3];
  square75.className = front[11];
  square85.className = front[10];
  square95.className = front[9];

  square12.className = front[17];
  square22.className = front[15];
  square32.className = front[12];
  square42.className = front[18];
  square62.className = front[13];
  square72.className = front[19];
  square82.className = front[16];
  square92.className = front[14];

  front = [];
}

function moveBack() {

  back.push(square11.className, square21.className, square31.className,
  square14.className, square24.className, square34.className,
  square15.className, square25.className, square35.className,
  square73.className, square83.className, square93.className,
  square16.className, square26.className, square36.className,
  square46.className, square66.className, square76.className,
  square86.className, square96.className);

  square11.className = back[3];
  square21.className = back[4];
  square31.className = back[5];
  square14.className = back[11];
  square24.className = back[10];
  square34.className = back[9];
  square73.className = back[8];
  square83.className = back[7];
  square93.className = back[6];
  square15.className = back[0];
  square25.className = back[1];
  square35.className = back[2];

  square16.className = back[17];
  square26.className = back[15];
  square36.className = back[12];
  square46.className = back[18];
  square66.className = back[13];
  square76.className = back[19];
  square86.className = back[16];
  square96.className = back[14];

  back = [];
}

function moveBottom() {

  bottom.push(square72.className, square82.className, square92.className,
  square34.className, square64.className, square94.className,
  square15.className, square45.className, square75.className,
  square16.className, square26.className, square36.className,
  square13.className, square23.className, square33.className,
  square43.className, square63.className, square73.className,
  square83.className, square93.className);

  square72.className = bottom[6];
  square82.className = bottom[7];
  square92.className = bottom[8];
  square34.className = bottom[2];
  square64.className = bottom[1];
  square94.className = bottom[0];
  square15.className = bottom[11];
  square45.className = bottom[10];
  square75.className = bottom[9];
  square16.className = bottom[3];
  square26.className = bottom[4];
  square36.className = bottom[5];

  square13.className = bottom[17];
  square23.className = bottom[15];
  square33.className = bottom[12];
  square43.className = bottom[18];
  square63.className = bottom[13];
  square73.className = bottom[19];
  square83.className = bottom[16];
  square93.className = bottom[14];

  bottom = [];
}

function moveRightac() {

  right.push(square31.className, square61.className, square91.className,
  square32.className, square62.className, square92.className,
  square33.className, square63.className, square93.className,
  square36.className, square66.className, square96.className,
  square14.className, square24.className, square34.className,
  square44.className, square64.className, square74.className,
  square84.className, square94.className);

  square31.className = right[9];
  square61.className = right[10];
  square91.className = right[11];
  square32.className = right[0];
  square62.className = right[1];
  square92.className = right[2];
  square33.className = right[3];
  square63.className = right[4];
  square93.className = right[5];
  square36.className = right[6];
  square66.className = right[7];
  square96.className = right[8];

  square14.className = right[14];
  square24.className = right[16];
  square34.className = right[19];
  square44.className = right[13];
  square64.className = right[18];
  square74.className = right[12];
  square84.className = right[15];
  square94.className = right[17];

  right = [];
}

function moveLeftac() {

  left.push(square11.className, square41.className, square71.className,
  square12.className, square42.className, square72.className,
  square13.className, square43.className, square73.className,
  square16.className, square46.className, square76.className,
  square15.className, square25.className, square35.className,
  square45.className, square65.className, square75.className,
  square85.className, square95.className);

  square11.className = left[3];
  square41.className = left[4];
  square71.className = left[5];
  square12.className = left[6];
  square42.className = left[7];
  square72.className = left[8];
  square13.className = left[9];
  square43.className = left[10];
  square73.className = left[11];
  square16.className = left[0];
  square46.className = left[1];
  square76.className = left[2];

  square15.className = left[14];
  square25.className = left[16];
  square35.className = left[19];
  square45.className = left[13];
  square65.className = left[18];
  square75.className = left[12];
  square85.className = left[15];
  square95.className = left[17];

  left = [];
}

function moveFrontac() {

  front.push(square71.className, square81.className, square91.className,
  square74.className, square84.className, square94.className,
  square75.className, square85.className, square95.className,
  square13.className, square23.className, square33.className,
  square12.className, square22.className, square32.className,
  square42.className, square62.className, square72.className,
  square82.className, square92.className);

  square71.className = front[3];
  square81.className = front[4];
  square91.className = front[5];
  square74.className = front[11];
  square84.className = front[10];
  square94.className = front[9];
  square13.className = front[8];
  square23.className = front[7];
  square33.className = front[6];
  square75.className = front[0];
  square85.className = front[1];
  square95.className = front[2];

  square12.className = front[14];
  square22.className = front[16];
  square32.className = front[19];
  square42.className = front[13];
  square62.className = front[18];
  square72.className = front[12];
  square82.className = front[15];
  square92.className = front[17];

  front = [];
}

function moveBackac() {

  back.push(square11.className, square21.className, square31.className,
  square14.className, square24.className, square34.className,
  square15.className, square25.className, square35.className,
  square73.className, square83.className, square93.className,
  square16.className, square26.className, square36.className,
  square46.className, square66.className, square76.className,
  square86.className, square96.className);

  square11.className = back[6];
  square21.className = back[7];
  square31.className = back[8];
  square14.className = back[0];
  square24.className = back[1];
  square34.className = back[2];
  square73.className = back[5];
  square83.className = back[4];
  square93.className = back[3];
  square15.className = back[11];
  square25.className = back[10];
  square35.className = back[9];

  square16.className = back[14];
  square26.className = back[16];
  square36.className = back[19];
  square46.className = back[13];
  square66.className = back[18];
  square76.className = back[12];
  square86.className = back[15];
  square96.className = back[17];

  back = [];
}

function moveBottomac() {

  bottom.push(square72.className, square82.className, square92.className,
  square34.className, square64.className, square94.className,
  square15.className, square45.className, square75.className,
  square16.className, square26.className, square36.className,
  square13.className, square23.className, square33.className,
  square43.className, square63.className, square73.className,
  square83.className, square93.className);

  square72.className = bottom[5];
  square82.className = bottom[4];
  square92.className = bottom[3];
  square34.className = bottom[9];
  square64.className = bottom[10];
  square94.className = bottom[11];
  square15.className = bottom[0];
  square45.className = bottom[1];
  square75.className = bottom[2];
  square16.className = bottom[8];
  square26.className = bottom[7];
  square36.className = bottom[6];

  square13.className = bottom[14];
  square23.className = bottom[16];
  square33.className = bottom[19];
  square43.className = bottom[13];
  square63.className = bottom[18];
  square73.className = bottom[12];
  square83.className = bottom[15];
  square93.className = bottom[17];

  bottom = [];
}
