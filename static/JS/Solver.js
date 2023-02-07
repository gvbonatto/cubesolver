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
var comandos = document.getElementById('comandos');

var comandos_BV = [];
var comandos_BA = [];
var comandos_BR = [];
var comandos_BL = [];
var comandos_BVR = [];
var comandos_BVL = [];
var comandos_BAR = [];
var comandos_BAL = [];
var comandos_AL = [];
var comandos_AR = [];
var comandos_VR = [];
var comandos_VL = [];
var comandos_yellow = [];
var comandos_yellow_side = [];

var lista_comandos_BV = [];
var lista_comandos_BA = [];
var lista_comandos_BR = [];
var lista_comandos_BL = [];
var lista_comandos_BVR = [];
var lista_comandos_BAR = [];
var lista_comandos_BAL = [];
var lista_comandos_BVL = [];
var lista_comandos_AR = [];
var lista_comandos_AL = [];
var lista_comandos_VL = [];
var lista_comandos_VR = [];
var lista_comandos_yellow = [];

function decodificar(comados, lista_comandos) {
  for (var y = 0; y < comados.length; y++) {

    if (comados[y] == "F") {
      lista_comandos.push("1");
    }

    else if (comados[y] == "F'") {
      lista_comandos.push("2");
    }

    else if (comados[y] == "D") {
      lista_comandos.push("3");
    }

    else if (comados[y] == "D'") {
      lista_comandos.push("4");
    }

    else if (comados[y] == "E") {
      lista_comandos.push("5");
    }

    else if (comados[y] == "E'") {
      lista_comandos.push("6");
    }

    else if (comados[y] == "B") {
      lista_comandos.push("7");
    }

    else if (comados[y] == "B'") {
      lista_comandos.push("8");
    }

    else if (comados[y] == "T") {
      lista_comandos.push("9");
    }

    else if (comados[y] == "T'") {
      lista_comandos.push("10");
    }

    else if (comados[y] == "2F") {
      lista_comandos.push("1", "1");
    }

    else if (comados[y] == "2D") {
      lista_comandos.push("2", "2");
    }

    else if (comados[y] == "2E") {
      lista_comandos.push("3", "3");
    }

    else if (comados[y] == "2B") {
      lista_comandos.push("4", "4");
    }

    else if (comados[y] == "2T") {
      lista_comandos.push("5", "5");
    }
  }
}

function mover(str, ...movimentos) {
  for (var movimento of movimentos) {
    movimento();
    if (movimento.name == "moveFront") {
      str.push("F");
    }

    else if (movimento.name == "moveFrontac") {
      str.push("F'");
    }

    else if (movimento.name == "moveRight") {
      str.push("D");
    }

    else if (movimento.name == "moveRightac") {
      str.push("D'");
    }

    else if (movimento.name == "moveLeft") {
      str.push("E");
    }

    else if (movimento.name == "moveLeftac") {
      str.push("E'");
    }

    else if (movimento.name == "moveBottom") {
      str.push("B");
    }

    else if (movimento.name == "moveBottomac") {
      str.push("B'");
    }

    else if (movimento.name == "moveBackac") {
      str.push("T'");
    }

    else if (movimento.name == "moveBack") {
      str.push("T");
    }
  }
}

function whiteCross() {
  function solve_BV() {
    if (square41.className == "c1" && square65.className == "c6") {
      moveLeft();
      moveLeft();
      moveBottomac();
      moveBack();
      moveBack();
      comandos_BV = ["2E" , "B'" , "2T"];
    }
    else if (square61.className == "c1" && square44.className == "c6") {
      moveRight();
      moveRight();
      moveBottom();
      moveBack();
      moveBack();
      comandos_BV = ["2D" , "B" , "2T"];
    }
    else if (square81.className == "c1" && square22.className == "c6") {
      moveFront();
      moveFront();
      moveBottom();
      moveBottom();
      moveBack();
      moveBack();
      comandos_BV = ["2F" , "2B" , "2T"];
    }

    else if (square22.className == "c1" && square81.className == "c6") {
      moveFront();
      moveRightac();
      moveBottom();
      moveBack();
      moveBack();

      comandos_BV = ["F" , "D'" , "B" , "2T"];

    }
    else if (square42.className == "c1" && square85.className == "c6") {
      moveLeft();

      moveBottomac();

      moveBack();

      moveBack();

      comandos_BV = ["E" , "B'" , "2T"];

    }
    else if (square62.className == "c1" && square84.className == "c6") {
      moveRightac();

      moveBottom();

      moveBack();

      moveBack();

      comandos_BV = ["D'" , "B" , "2T"];

    }
    else if (square82.className == "c1" && square23.className == "c6") {
      moveBottomac();

      moveLeft();

      moveBackac();

      comandos_BV = ["B'" , "E" , "T'"];

    }

    else if (square23.className == "c1" && square82.className == "c6") {
      moveBottom();

      moveBottom();

      moveBack();

      moveBack();

      comandos_BV = ["2B" , "2T"];

    }
    else if (square43.className == "c1" && square45.className == "c6") {
      moveBottomac();
      moveBack();
      moveBack();
      comandos_BV = ["B'" , "2T"];

    }
    else if (square63.className == "c1" && square64.className == "c6") {
      moveBottom();
      moveBack();
      moveBack();

      comandos_BV = ["B" , "2T"];

    }
    else if (square83.className == "c1" && square26.className == "c6") {
      moveBack();

      moveBack();

      comandos_BV = ["2T"];

    }

    else if (square24.className == "c1" && square66.className == "c6") {
      moveBack();

      comandos_BV = ["T"];

    }
    else if (square44.className == "c1" && square61.className == "c6") {
      moveRight();

      moveBack();

      comandos_BV = ["D" , "T"];

    }
    else if (square64.className == "c1" && square63.className == "c6") {
      moveRightac();

      moveBack();

      comandos_BV = ["D'" , "T"];

    }
    else if (square84.className == "c1" && square62.className == "c6") {
      moveRight();

      moveRight();

      moveBack();

      comandos_BV = ["2D" , "T"];

    }

    else if (square25.className == "c1" && square46.className == "c6") {
      moveBackac();

      comandos_BV = ["T'"];

    }
    else if (square45.className == "c1" && square43.className == "c6") {
      moveLeft();

      moveBackac();

      comandos_BV = ["E" , "T'"];

    }
    else if (square65.className == "c1" && square41.className == "c6") {
      moveLeftac();

      moveBackac();

      comandos_BV = ["E'" , "T'"];
    }
    else if (square85.className == "c1" && square42.className == "c6") {
      moveLeft();

      moveLeft();

      moveBackac();

      comandos_BV = ["2E" , "T'"];

    }

    else if (square26.className == "c1" && square83.className == "c6") {
      moveBack();

      moveRight();

      moveBottom();

      moveBack();

      moveBack();

      comandos_BV = ["T" , "D" , "B" , "2T"];

    }
    else if (square46.className == "c1" && square25.className == "c6") {
      moveLeftac();

      moveBottomac();

      moveBack();

      moveBack();

      comandos_BV = ["E'" , "B'" , "2T"];

    }
    else if (square66.className == "c1" && square24.className == "c6") {
      moveRight();

      moveBottom();

      moveBack();

      moveBack();

      comandos_BV = ["D" , "B" , "2T"];

    }
    else if (square86.className == "c1" && square21.className == "c6") {
      moveBack();

      moveLeftac();

      moveBottomac();

      moveBack();

      moveBack();

      comandos_BV = ["T" , "E'" , "B'" , "2T"];

    }
}
  function solve_BA() {
    if (square21.className == "c1" && square86.className == "c2") {
      return;
    }
    else if (square41.className == "c1" && square65.className == "c2") {
      moveLeft();
      moveLeft();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["2E","B","2F"];
    }
    else if (square61.className == "c1" && square44.className == "c2") {
      moveRight();
      moveRight();
      moveBottomac();
      moveFront();
      moveFront();
      comandos_BA = ["2D","B'","2F"];
    }
    else if (square81.className == "c1" && square22.className == "c2") {
      return;
    }

    else if (square22.className == "c1" && square81.className == "c2") {
      moveFront();
      moveRightac();
      moveBottomac();
      moveFront();
      moveFront();
      comandos_BA = ["F" , "D'" , "B'" ,"2F"];
    }
    else if (square42.className == "c1" && square85.className == "c2") {
      moveLeft();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["E", "B" , "2F"];
    }
    else if (square62.className == "c1" && square84.className == "c2") {
      moveRightac();
      moveBottomac();
      moveFront();
      moveFront();
      comandos_BA = ["D'"] , ["B'"] , ["2F"];
    }
    else if (square82.className == "c1" && square23.className == "c2") {
      moveFront();
      moveLeft();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["F" , "E" , "B" , "2F"];
    }

    else if (square23.className == "c1" && square82.className == "c2") {
      moveFront();
      moveFront();
      comandos_BA = ["2F"];
    }
    else if (square43.className == "c1" && square45.className == "c2") {
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["B", "2F"];
    }
    else if (square63.className == "c1" && square64.className == "c2") {
      moveBottomac();
      moveFront();
      moveFront();
      comandos_BA = ["B'" , "2F"];
    }
    else if (square83.className == "c1" && square26.className == "c2") {
      moveBottom();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["2B" , "2F"];
    }

    else if (square24.className == "c1" && square66.className == "c2") {
      moveRight();
      moveRight();
      moveFrontac();
      comandos_BA = ["2D" , "F'"];
    }
    else if (square44.className == "c1" && square61.className == "c2") {
      moveRightac();
      moveFrontac();
      comandos_BA = ["D'" , "F'"];
    }
    else if (square64.className == "c1" && square63.className == "c2") {
      moveRight();
      moveFrontac();
      comandos_BA = ["R" , "F'"];
    }
    else if (square84.className == "c1" && square62.className == "c2") {
      mover(comandos_BA, moveFrontac);
    }

    else if (square25.className == "c1" && square46.className == "c2") {
      moveLeft();
      moveLeft();
      moveFront();
      comandos_BA = ["2E" , "F"];
    }
    else if (square45.className == "c1" && square43.className == "c2") {
      moveLeftac();
      moveFront();
      comandos_BA = ["E'", "F"];
    }
    else if (square65.className == "c1" && square41.className == "c2") {
      moveLeft();
      moveFront();
      comandos_BA = ["L" , "F"];
    }
    else if (square85.className == "c1" && square42.className == "c2") {
      moveFront();
      comandos_BA = ["F"];
    }

    else if (square26.className == "c1" && square83.className == "c2") {
      moveBottom();
      moveBottom();
      moveFront();
      moveLeft();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["2B" , "F" , "E" , "B" , "2F"];
    }
    else if (square46.className == "c1" && square25.className == "c2") {
      moveLeftac();
      moveBottom();
      moveFront();
      moveFront();
      comandos_BA = ["E'" , "B" , "2F"];
    }
    else if (square66.className == "c1" && square24.className == "c2") {
      moveRight();
      moveBottomac();
      moveFront();
      moveFront();
      comandos_BA = ["R" , "B'" , "2F"];
    }
    else if (square86.className == "c1" && square21.className == "c2") {
      return;
    }
  }
  function solve_BR() {
    if (square21.className == "c1" && square86.className == "c5") {
      return;
    }
    else if (square41.className == "c1" && square65.className == "c5") {
      return;
    }
    else if (square61.className == "c1" && square44.className == "c5") {
      moveRight();
      moveRight();
      moveBottom();
      moveBottom();
      moveLeft();
      moveLeft();
      comandos_BR = ["2D" , "2B" , "2E"];
    }
    else if (square81.className == "c1" && square22.className == "c5") {
      return;
    }

    else if (square22.className == "c1" && square81.className == "c5") {
      return;
    }
    else if (square42.className == "c1" && square85.className == "c5") {
      moveLeftac();
      comandos_BR = ["E'"];
    }
    else if (square62.className == "c1" && square84.className == "c5") {
      moveRightac();
      moveBottom();
      moveBottom();
      moveLeft();
      moveLeft();
      comandos_BR = ["D'" , "2B" , "2E"];
    }
    else if (square82.className == "c1" && square23.className == "c5") {
      moveFront();
      moveLeftac();
      moveFrontac();
      comandos_BR = ["F" , "E'" , "F'"];
    }

    else if (square23.className == "c1" && square82.className == "c5") {
      moveBottomac();
      moveLeft();
      moveLeft();
      comandos_BR = ["B'" , "2E"];
    }
    else if (square43.className == "c1" && square45.className == "c5") {
      moveLeft();
      moveLeft();
      comandos_BR = ["2E"];
    }
    else if (square63.className == "c1" && square64.className == "c5") {
      moveBottom();
      moveBottom();
      moveLeft();
      moveLeft();
      comandos_BR = ["2B" , "2E"];
    }
    else if (square83.className == "c1" && square26.className == "c5") {
      moveBottom();
      moveLeft();
      moveLeft();
      comandos_BR = ["B" , "2E"];
    }

    else if (square24.className == "c1" && square66.className == "c5") {
      moveBackac();
      moveBottom();
      moveLeft();
      moveLeft();
      moveBack();
      comandos_BR = ["T'" , "B" - "2E" , "T"];
    }
    else if (square44.className == "c1" && square61.className == "c5") {
      moveRightac();
      moveFront();
      moveBottomac();
      moveLeft();
      moveLeft();
      moveFrontac();
      comandos_BR = ["D'" , "F" , "B'" , "2E" , "F'"];
    }
    else if (square64.className == "c1" && square63.className == "c5") {
      moveBottomac();
      moveFront();
      moveLeftac();
      moveFrontac();
      comandos_BR = ["B' , F , E' , F'"];
    }
    else if (square84.className == "c1" && square62.className == "c5") {
      moveFront();
      moveBottomac();
      moveLeft();
      moveLeft();
      moveFrontac();
      comandos_BR = ["F" , "B'" , "2E" , "F'"];
    }

    else if (square25.className == "c1" && square46.className == "c5") {
      moveBack();
      moveBottom();
      moveBackac();
      moveLeft();
      moveLeft();
      comandos_BR = ["T" , "B" , "T'" , "2E"];
    }
    else if (square45.className == "c1" && square43.className == "c5") {
      moveLeft();
      moveBack();
      moveBottom();
      moveBackac();
      moveLeft();
      moveLeft();
      comandos_BR = ["E" , "T" , "B" , "T'" , "2E"];
    }
    else if (square65.className == "c1" && square41.className == "c5") {
      moveLeftac();
      moveBack();
      moveBottom();
      moveBackac();
      moveLeft();
      moveLeft();
      comandos_BR = ["E'" , "T" , "B" , "T'" , "2E"];
    }
    else if (square85.className == "c1" && square42.className == "c5") {
      moveFrontac();
      moveBottomac();
      moveFront();
      moveLeft();
      moveLeft();
      comandos_BR = ["F'" , "B'" , "F" , "2E"];
    }

    else if (square26.className == "c1" && square83.className == "c5") {
      moveBackac();
      moveLeft();
      moveBack();
      comandos_BR = ["T'" , "E" , "T"];
    }
    else if (square46.className == "c1" && square25.className == "c5") {
      moveLeft();
      comandos_BR = ["E"];
    }
    else if (square66.className == "c1" && square24.className == "c5") {
      moveBack();
      moveBack();
      moveLeft();
      moveBack();
      moveBack();
      comandos_BR = ["2T" , "E" , "2T"];
    }
    else if (square86.className == "c1" && square21.className == "c5") {
      return;
    }
}
  function solve_BL() {
    if (square21.className == "c1" && square86.className == "c4") {
      return;
    }
    else if (square41.className == "c1" && square65.className == "c4") {
      return;
    }
    else if (square61.className == "c1" && square44.className == "c4") {
      return;
    }
    else if (square81.className == "c1" && square22.className == "c4") {
      return;
    }

    else if (square22.className == "c1" && square81.className == "c4") {
      return;
    }
    else if (square42.className == "c1" && square85.className == "c4") {
      moveLeft();
      moveBottom();
      moveLeftac();
      moveBottom();
      moveRight();
      moveRight();
      comandos_BL = ["E" , "B" , "E'" , "B" , "2D"];
    }
    else if (square62.className == "c1" && square84.className == "c4") {
      moveRight();
      comandos_BL = ["D"];
    }
    else if (square82.className == "c1" && square23.className == "c4") {
      moveFrontac();
      moveRight();
      moveFront();
      comandos_BL = ["F'" , "R" , "F"];
    }

    else if (square23.className == "c1" && square82.className == "c4") {
      moveBottom();
      moveRight();
      moveRight();
      comandos_BL = ["B" , "2D"];
    }
    else if (square43.className == "c1" && square45.className == "c4") {
      moveBottom();
      moveBottom();
      moveRight();
      moveRight();
      comandos_BL = ["2B" , "2D"];
    }
    else if (square63.className == "c1" && square64.className == "c4") {
      moveRight();
      moveRight();
      comandos_BL = ["2D"];
    }
    else if (square83.className == "c1" && square26.className == "c4") {
      moveBottomac();
      moveRight();
      moveRight();
      comandos_BL = ["B'" , "2D"];
    }

    else if (square24.className == "c1" && square66.className == "c4") {
      moveBackac();
      moveBottomac();
      moveBack();
      moveRight();
      moveRight();
      comandos_BL = ["T'" , "B'" , "T" , "2D"];
    }
    else if (square44.className == "c1" && square61.className == "c4") {
      moveBack();
      moveRight();
      moveBottomac();
      moveRight();
      moveRight();
      comandos_BL = ["T" , "D" , "B'" , "2D"];
    }
    else if (square64.className == "c1" && square63.className == "c4") {
      moveBottomac();
      moveFrontac();
      moveRight();
      moveFront();
      comandos_BL = ["B'" , "F'" , "D" , "F"];
    }
    else if (square84.className == "c1" && square62.className == "c4") {
      moveFront();
      moveBottom();
      moveFrontac();
      moveRight();
      moveRight();
      comandos_BL = ["F" , "B" , "F'" , "2D"];
    }

    else if (square25.className == "c1" && square46.className == "c4") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveRight();
      moveRight();
      comandos_BL = ["T" , "B'" , "T'" , "2D"];
    }
    else if (square45.className == "c1" && square43.className == "c4") {
      moveBottom();
      moveFrontac();
      moveRight();
      moveFront();
      comandos_BL = ["B" , "F'" , "D" , "F"];
    }
    else if (square65.className == "c1" && square41.className == "c4") {
      return;
    }
    else if (square85.className == "c1" && square42.className == "c4") {
      moveFrontac();
      moveBottom();
      moveFront();
      moveRight();
      moveRight();
      comandos_BL = ["F'" , "B" , "F" , "2D"];
    }
    else if (square26.className == "c1" && square83.className == "c4") {
      moveBack();
      moveRightac();
      moveBackac();
      comandos_BL = ["T" , "D'" , "T'"];
    }
    else if (square46.className == "c1" && square25.className == "c4") {
      moveBack();
      moveBack();
      moveRightac();
      moveBack();
      moveBack();
      comandos_BL = ["2T" , "D'" , "2T"];
    }
    else if (square66.className == "c1" && square24.className == "c4") {
      moveRightac();
      comandos_BL = ["D'"];
    }
    else if (square86.className == "c1" && square21.className == "c4") {
      return;
    }
}


  contar();
  if (contar()) {
    solve_BV();
    solve_BA();
    solve_BR();
    solve_BL();

    decodificar(comandos_BV, lista_comandos_BV);
    decodificar(comandos_BA, lista_comandos_BA);
    decodificar(comandos_BL, lista_comandos_BL);
    decodificar(comandos_BR, lista_comandos_BR);

    if (comandos_BV == [] && comandos_BA == [] && comandos_BL == [] && comandos_BR == []) {
        comandos.value = "A cruz já está feita!";
    } else {
      comandos.value = "Quadrado Verde: " + comandos_BV.join(' - ') + "\n" + "Quadrado Azul: " + comandos_BA.join(' - ') + "\n" + "Quadrado Vermelho: " + comandos_BR.join(' - ') + "\n" + "Quadrado Laranja: " + comandos_BL.join(' - ');

    }
    comandos_BV = [];
    comandos_BA = [];
    comandos_BL = [];
    comandos_BR = [];
  }
  else {
    alert('Verifique seu cubo!');
  }
}

function whiteSide() {
  function solve_BVR() {
    if (square11.className == "c1" && square35.className == "c5" && square76.className == "c6") {
      return;
    }
    else if (square31.className == "c1" && square14.className == "c6" && square96.className == "c5") {
      moveRight();
      moveBottom();
      moveRightac();
      moveLeftac();
      moveBottomac();
      moveLeft();

      comandos_BVR = ["D" , "B" , "D'" , "E'" , "B'" , "E"];
    }
    else if (square91.className == "c1" && square74.className == "c5" && square32.className == "c6") {
      moveRightac();
      moveLeftac();
      moveBottom();
      moveBottom();
      moveLeft();
      moveRight();
      comandos_BVR = ["D'" , "E'" , "2B" , "E" , "D"];
    }
    else if (square71.className == "c1" && square95.className == "c6" && square12.className == "c5") {
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["E" , "B'" , "E'" , "B'" , "T" , "B" , "T'"];
    }

    else if (square12.className == "c1" && square71.className == "c6" && square95.className == "c5") {
      moveFrontac();
      moveBack();
      moveBottomac();
      moveBackac();
      moveFront();

      comandos_BVR = ["F'" , "T" , "B'" , "T'" , "F"];
    }
    else if (square32.className == "c1" && square91.className == "c5" && square74.className == "c6") {
      moveRightac();
      moveBottom();
      moveRight();
      moveLeftac();
      moveBottom();
      moveBottom();
      moveLeft();

      comandos_BVR = ["R'" , "B" , "D" , "E'" , "2B" , "E"];
    }
    else if (square72.className == "c1" && square75.className == "c6" && square13.className == "c5") {
      moveBack();
      moveBottomac();
      moveBackac();

      comandos_BVR = ["T" , "B'" , "T'"];
    }
    else if (square92.className == "c1" && square33.className == "c6" && square94.className == "c5") {
      moveLeftac();
      moveBottom();
      moveBottom();
      moveLeft();

      comandos_BVR = ["E'" , "2B" , "E"];
    }

    else if (square13.className == "c1" && square72.className == "c6" && square75.className == "c5") {
      moveBack();
      moveBottom();
      moveBottom();
      moveBackac();
      moveBottom();
      moveBack();
      moveBottomac();
      moveBackac();

      comandos_BVR = ["T" , "2B" , "T'" , "B" , "T" , "B'" , "T'"];
    }
    else if (square33.className == "c1" && square94.className == "c6" && square92.className == "c5") {
      moveBack();
      moveBottom();
      moveBackac();
      moveBottom();
      moveBack();
      moveBottomac();
      moveBackac();

      comandos_BVR = ["T" , "B" , "T'" , "B" , "T" , "B'" , "T'"];
    }
    else if (square73.className == "c1" && square15.className == "c6" && square16.className == "c5") {
      moveBottom();
      moveBack();
      moveBottom();
      moveBottom();
      moveBackac();
      moveBottom();
      moveBack();
      moveBottomac();
      moveBackac();

      comandos_BVR = ["B" , "T" , "2B" , "T'" , "B" , "T" , "B'" , "T'"];
    }
    else if (square93.className == "c1" && square36.className == "c6" && square34.className == "c5") {
      moveLeftac();
      moveBottom();
      moveBottom();
      moveLeft();
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["E'" , "2B" , "E" , "T" , "B" , "B'"];
    }

    else if (square14.className == "c1" && square92.className == "c6" && square31.className == "c5") {
      moveRight();
      moveLeftac();
      moveBottom();
      moveRightac();
      moveLeft();

      comandos_BVR = ["D" , "E'" , "B" , "D'" , "E"];
    }
    else if (square34.className == "c1" && square93.className == "c6" && square36.className == "c5") {
      moveLeftac();
      moveBottom();
      moveLeft();

      comandos_BVR = ["E'" , "B" , "E"];
    }
    else if (square74.className == "c1" && square91.className == "c6" && square32.className == "c5") {
      moveRightac();
      moveBack();
      moveBottom();
      moveBottom();
      moveBackac();
      moveRight();

      comandos_BVR = ["D'" , "T" , "2B" , "T'" , "D"];
    }
    else if (square94.className == "c1" && square92.className == "c6" && square33.className == "c5") {
      moveBack();
      moveBottom();
      moveBottom();
      moveBackac();

      comandos_BVR = ["T" , "2B" , "T'"];
    }

    else if (square15.className == "c1" && square16.className == "c6" && square73.className == "c5") {
      moveLeftac();
      moveBottomac();
      moveLeft();

      comandos_BVR = ["E'" , "B'" , "E"];
    }
    else if (square35.className == "c1" && square11.className == "c6" && square76.className == "c5") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveLeftac();
      moveBottomac();
      moveLeft();

      comandos_BVR = ["T" , "B'" , "T'" , "E'" , "B'" , "E"];
    }
    else if (square75.className == "c1" && square13.className == "c6" && square72.className == "c5") {
      moveBottomac();
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["B'" , "T" , "B" , "T'"];
    }
    else if (square95.className == "c1" && square12.className == "c6" && square71.className == "c5") {
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottomac();
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["F'" , "B" , "F" , "B'" , "T" , "B" , "T'"];
    }

    else if (square16.className == "c1" && square73.className == "c6" && square15.className == "c5") {
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["T" , "B" , "T'"];
    }
    else if (square36.className == "c1" && square34.className == "c6" && square93.className == "c5") {
      moveBottom();
      moveLeftac();
      moveBottomac();
      moveLeft();

      comandos_BVR = ["B" , "E'" , "B'" , "E"];
    }
    else if (square76.className == "c1" && square35.className == "c6" && square11.className == "c5") {
      moveLeftac();
      moveBottom();
      moveLeft();
      moveBack();
      moveBottom();
      moveBackac();

      comandos_BVR = ["E'" , "B" , "E" , "T" , "B" , "T'"];
    }
    else if (square96.className == "c1" && square31.className == "c6" && square14.className == "c5") {
      moveRight();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveLeftac();
      moveBottomac();
      moveLeft();

      comandos_BVR = ["D" , "B'" , "D'" , "B" , "E'" , "B'" , "E"];
    }

}
  function solve_BVL() {
    if (square11.className == "c1" && square76.className == "c4" && square35.className == "c6") {
      return;
    }
    else if (square31.className == "c1" && square96.className == "c6" && square14.className == "c4") {
      return;
    }
    else if (square71.className == "c1" && square12.className == "c6" && square95.className == "c4") {
      moveLeft();
      moveRight();
      moveBottom();
      moveBottom();
      moveLeftac();
      moveRightac();

      comandos_BVL = ["E" , "D" , "2B" , "E'" , "D'"];
    }
    else if (square91.className == "c1" && square32.className == "c4" && square74.className == "c6") {
      moveRightac();
      moveBottomac();
      moveRight();
      moveBackac();
      moveBottom();
      moveBottom();
      moveBack();

      comandos_BVL = ["D'" , "B'" , "D" , "T'" , "2B" , "T"];
    }

    else if (square12.className == "c1" && square95.className == "c6" && square71.className == "c4") {
      moveRight();
      moveFrontac();
      moveBottom();
      moveBottom();
      moveFront();
      moveRightac();

      comandos_BVL = ["D" , "F'" , "2B" , "F" , "D'"];
    }
    else if (square32.className == "c1" && square74.className == "c6" && square91.className == "c6") {
      moveFront();
      moveBack();
      moveBottom();
      moveBackac().
      moveFrontac();

      comandos_BVL = ["F" , "T" , "B" , "T'" , "F'"];
    }
    else if (square72.className == "c1" && square13.className == "c6" && square75.className == "c4") {
      moveRight();
      moveBottom();
      moveBottom();
      moveRightac();

      comandos_BVL = ["D" , "2B" , "D'"];
    }
    else if (square92.className == "c1" && square94.className == "c6" && square33.className == "c4") {
      moveBackac();
      moveBottom();
      moveBack();

      comandos_BVL = ["T'" , "B" , "T"];
    }

    else if (square13.className == "c1" && square75.className == "c6" && square72.className == "c4") {
      moveBackac();
      moveBottomac();
      moveBack();
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["T'" , "B'" , "T" , "D" , "B" , "D'"];
    }
    else if (square33.className == "c1" && square92.className == "c6" && square94.className == "c4") {
      moveBackac();
      moveBottom();
      moveBottom();
      moveBack();
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["T'" , "2B" , "T" , "D" , "B" , "D'"];
    }
    else if (square73.className == "c1" && square16.className == "c6" && square15.className == "c4") {
      moveBottom();
      moveBackac();
      moveBottomac();
      moveBack();
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["B" , "T'" , "B'" , "T" , "D" , "B" , "D'"];
    }
    else if (square93.className == "c1" && square34.className == "c6" && square36.className == "c4") {
      moveBottomac();
      moveBackac();
      moveBottom();
      moveBottom();
      moveBack();
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["B'" , "T'" , "2B" , "T" , "D" , "B" , "D'"];
    }

    else if (square14.className == "c1" && square31.className == "c6" && square96.className == "c4") {
      moveBackac();
      moveBottom();
      moveBack();
      moveBottomac();
      moveBackac();
      moveBottom();
      moveBack();

      comandos_BVL = ["T'" , "B" , "T" , "B'" , "T'" , "B" , "T"];
    }
    else if (square34.className == "c1" && square36.className == "c6" && square93.className == "c4") {
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["D" , "B" , "D'"];
    }
    else if (square74.className == "c1" && square32.className == "c6" && square91.className == "c4") {
      moveRightac();
      moveBottomac();
      moveRight();
      moveRight();
      moveBottom();
      moveBottom();
      moveRightac();

      comandos_BVL = ["D'" , "B'" , "2D" , "2B" , "D'"];
    }
    else if (square94.className == "c1" && square33.className == "c6" && square92.className == "c4") {
      moveBottom();
      moveBackac();
      moveBottomac();
      moveBack();

      comandos_BVL = ["B" , "T'" , "B'" , "T"];
    }

    else if (square15.className == "c1" && square73.className == "c6" && square16.className == "c4") {
      moveRight();
      moveBottomac();
      moveRightac();

      comandos_BVL = ["D" , "B'" , "D'"];
    }
    else if (square35.className == "c1" && square76.className == "c6" && square11.className == "c4") {
      return;
    }
    else if (square75.className == "c1" && square72.className == "c6" && square13.className == "c4") {
      moveBackac();
      moveBottom();
      moveBottom();
      moveBack();

      comandos_BVL = ["T'" , "2B" , "T"];
    }
    else if (square95.className == "c1" && square71.className == "c6" && square12.className == "c4") {
      moveLeft();
      moveBackac();
      moveBottom();
      moveBottom();
      moveBack();
      moveLeftac();

      comandos_BVL = ["E" , "T'" , "2B" , "T" , "E'"];
    }

    else if (square16.className == "c1" && square15.className == "c6" && square73.className == "c4") {
      moveBottomac();
      moveRight();
      moveBottom();
      moveRightac();

      comandos_BVL = ["B'" , "D" , "B" , "D'"];
    }
    else if (square36.className == "c1" && square93.className == "c6" && square34.className == "c4") {
      moveBackac();
      moveBottomac();
      moveBack();

      comandos_BVL = ["T'" , "B'" , "T"];
    }
    else if (square76.className == "c1" && square11.className == "c6" && square35.className == "c4") {
      return;
    }
    else if (square96.className == "c1" && square14.className == "c6" && square31.className == "c4") {
      moveBackac();
      moveBottomac();
      moveBack();
      moveBottom();
      moveBackac();
      moveBottomac();
      moveBack();

      comandos_BVL = ["T'" , "B'" , "T" , "B" , "T'" , "B'" , "T"];
    }
}
  function solve_BAR() {
    if (square11.className == "c1" && square76.className == "c5" && square35.className == "c2") {
      return;
    }
    else if (square31.className == "c1" && square96.className == "c2" && square14.className == "c5") {
      return;
    }
    else if (square71.className == "c1" && square12.className == "c2" && square95.className == "c4") {
      return;
    }
    else if (square91.className == "c1" && square32.className == "c5" && square74.className == "c2") {
      moveRightac();
      moveBottomac();
      moveRight();
      moveLeft();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["D'" , "B'" , "D" , "E" , "B" , "E'"];
    }

    else if (square12.className == "c1" && square95.className == "c2" && square71.className == "c5") {
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveFrontac();
      moveBottomac();
      moveFront();

      comandos_BAR = ["E" , "B'" , "E'" , "F'" , "B'" , "F"];
    }
    else if (square32.className == "c1" && square74.className == "c5" && square91.className == "c2") {
      moveFront();
      moveBottom();
      moveFront();
      moveFront();
      moveBottom();
      moveBottom();
      moveFront();

      comandos_BAR = ["F" , "B" , "2F" , "2B" , "F"];
    }
    else if (square72.className == "c1" && square13.className == "c2" && square75.className == "c5") {
      moveFrontac();
      moveBottomac();
      moveFront();

      comandos_BAR = ["F'" , "B'" , "F"];
    }
    else if (square92.className == "c1" && square94.className == "c2" && square33.className == "c5") {
      moveBottomac();
      moveLeft();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["B'" , "E" , "B" , "E'"];
    }

    else if (square13.className == "c1" && square75.className == "c2" && square72.className == "c5") {
      moveFrontac();
      moveBottom();
      moveFront();
      moveLeft();
      moveBottom();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["F'" , "B" , "F" , "E" , "2B" , "E'"];
    }
    else if (square33.className == "c1" && square92.className == "c2" && square94.className == "c5") {
      moveFront();
      moveBottomac();
      moveFront();
      moveFront();
      moveBottom();
      moveFront();

      comandos_BAR = ["F" , "B'" , "2F" , "B" , "F"];
    }
    else if (square73.className == "c1" && square16.className == "c2" && square15.className == "c5") {
      moveFrontac();
      moveBottom();
      moveBottom();
      moveFront();
      moveLeft();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["F'" , "2B" , "F" , "E" , "B" , "E'"];
    }
    else if (square93.className == "c1" && square34.className == "c2" && square36.className == "c5") {
      moveLeft();
      moveBottom();
      moveLeftac();
      moveFrontac();
      moveBottomac();
      moveFront();

      comandos_BAR = ["E" , "B" , "E'" , "F'" , "B'" , "F"];
    }

    else if (square14.className == "c1" && square31.className == "c2" && square96.className == "c5") {
      return;
    }
    else if (square34.className == "c1" && square36.className == "c2" && square93.className == "c5") {
      moveFrontac();
      moveBottom();
      moveBottom();
      moveFront();

      comandos_BAR = ["F'" , "2B" , "F"];
    }
    else if (square74.className == "c1" && square32.className == "c2" && square91.className == "c5") {
      moveRightac();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveRight();

      comandos_BAR = ["D'" , "E" , "B'" , "E'" , "D"];
    }
    else if (square94.className == "c1" && square33.className == "c2" && square92.className == "c5") {
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_BAR = ["E" , "B'" , "E'"];
    }

    else if (square15.className == "c1" && square73.className == "c2" && square16.className == "c5") {
      moveBottom();
      moveFrontac();
      moveBottomac();
      moveFront();

      comandos_BAR = ["B" , "F'" , "B'" , "F"];
    }
    else if (square35.className == "c1" && square76.className == "c2" && square11.className == "c5") {
      return;
    }
    else if (square75.className == "c1" && square72.className == "c2" && square13.className == "c5") {
      moveLeft();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["E" , "B" , "E'"];
    }
    else if (square95.className == "c1" && square71.className == "c2" && square12.className == "c5") {
      moveLeft();
      moveBottom();
      moveBottom();
      moveLeftac();
      moveFrontac();
      moveBottom();
      moveBottom();
      moveFront();

      comandos_BAR = ["E" , "2B" , "E'" , "F'" , "2B" - "F"];
    }

    else if (square16.className == "c1" && square15.className == "c2" && square73.className == "c5") {
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_BAR = ["F'" , "B" , "F"];
    }
    else if (square36.className == "c1" && square93.className == "c2" && square34.className == "c5") {
      moveLeft();
      moveBottom();
      moveBottom();
      moveLeftac();

      comandos_BAR = ["E" , "2B" , "E'"];
    }
    else if (square76.className == "c1" && square11.className == "c2" && square35.className == "c5") {
      return;
    }
    else if (square96.className == "c1" && square14.className == "c2" && square31.className == "c5") {
      return;
    }
}
  function solve_BAL() {
    if (square11.className == "c1" && square76.className == "c4" && square35.className == "c2") {
      return;
    }
    else if (square31.className == "c1" && square96.className == "c2" && square14.className == "c4") {
      return;
    }
    else if (square71.className == "c1" && square12.className == "c6" && square95.className == "c4") {
      return;
    }
    else if (square91.className == "c1" && square74.className == "c4" && square32.className == "c2") {
      return;
    }

    else if (square12.className == "c1" && square71.className == "c2" && square95.className == "c4") {
      return;
    }
    else if (square32.className == "c1" && square91.className == "c4" && square74.className == "c2") {
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();
      moveRightac();
      moveBottom();
      moveBottom();
      moveRight();

      comandos_BAL = ["F" , "2B" , "F'" , "D'" , "2B" , "D"];
    }
    else if (square72.className == "c1" && square75.className == "c2" && square13.className == "c4") {
      moveBottom();
      moveRightac();
      moveBottomac();
      moveRight();

      comandos_BAL = ["B" , "D'" , "B'" , "D"];
    }
    else if (square92.className == "c1" && square33.className == "c2" && square94.className == "c4") {
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["F" , "B" , "F'"];
    }

    else if (square13.className == "c1" && square72.className == "c2" && square75.className == "c4") {
      moveRightac();
      moveBottom();
      moveBottom();
      moveRight();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["D'" , "2B" , "D" , "F" , "B" , "F'"];
    }
    else if (square33.className == "c1" && square94.className == "c2" && square92.className == "c4") {
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();
      moveBottomac();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["F" , "2B" , "F'" , "B'" , "F" , "B" , "F'"];
    }
    else if (square73.className == "c1" && square15.className == "c2" && square16.className == "c4") {
      moveRightac();
      moveBottomac();
      moveRight();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["D'" , "B'" , "D" , "F" , "B" , "F'"];
    }
    else if (square93.className == "c1" && square36.className == "c2" && square34.className == "c4") {
      moveBottom();
      moveRightac();
      moveBottomac();
      moveRight();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["B" , "D'" , "B'" , "D" , "F" , "B" , "F'"];
    }

    else if (square14.className == "c1" && square96.className == "c2" && square31.className == "c4") {
      return;
    }
    else if (square34.className == "c1" && square93.className == "c2" && square36.className == "c4") {
      moveBottomac();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["B'" , "F" , "B" , "F'"];
    }
    else if (square74.className == "c1" && square91.className == "c2" && square32.className == "c4") {
      moveRightac();
      moveBottom();
      moveBottom();
      moveRight();
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["D'" , "2B" , "D" , "F" , "2B" , "F'"];
    }
    else if (square94.className == "c1" && square92.className == "c2" && square33.className == "c4") {
      moveRightac();
      moveBottomac();
      moveRight();

      comandos_BAL = ["D'" , "B'" , "D"];
    }

    else if (square15.className == "c1" && square16.className == "c2" && square73.className == "c4") {
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();

      comandos_BAL = ["F" , "2B" , "F'"];
    }
    else if (square35.className == "c1" && square11.className == "c2" && square76.className == "c4") {
      return;
    }
    else if (square75.className == "c1" && square13.className == "c2" && square72.className == "c4") {
      moveRightac();
      moveBottom();
      moveRight();

      comandos_BAL = ["D'" , "B" , "D"];
    }
    else if (square95.className == "c1" && square12.className == "c2" && square71.className == "c4") {
      return;
    }

    else if (square16.className == "c1" && square73.className == "c2" && square15.className == "c4") {
      moveRightac();
      moveBottom();
      moveBottom();
      moveRight();

      comandos_BAL = ["D'" , "2B" , "D"];
    }
    else if (square36.className == "c1" && square34.className == "c2" && square93.className == "c4") {
      moveFront();
      moveBottomac();
      moveFrontac();

      comandos_BAL = ["F" , "B'" , "F'"];
    }
    else if (square76.className == "c1" && square35.className == "c2" && square11.className == "c4") {
      return;
    }
    else if (square96.className == "c1" && square31.className == "c2" && square14.className == "c4") {
      return;
    }
}
  contar();
  if (contar()) {
    solve_BVR();
    solve_BVL();
    solve_BAR();
    solve_BAL();


    decodificar(comandos_BVR, lista_comandos_BVR);
    decodificar(comandos_BVL, lista_comandos_BVL);
    decodificar(comandos_BAR, lista_comandos_BAR);
    decodificar(comandos_BAL, lista_comandos_BAL);

    if (comandos_BAL == [] && comandos_BAR == [] && comandos_BVR == [] && comandos_BVL == []) {
      comandos.value = "Os cantos já estão resolvidos!";
    } else {
      comandos.value = "Quadrado Verde Vermelho: " + comandos_BVR.join(' - ') + "\n" +"Quadrado Verde Laranja: " + comandos_BVL.join(' - ') + "\n" +"Quadrado Azul Vermelho: " + comandos_BAR.join(' - ') + "\n" +"Quadrado Azul Laranja: " + comandos_BAL.join(' - ');
    }


    comandos_BVR = [];
    comandos_BVL = [];
    comandos_BAR = [];
    comandos_BAL = [];
  } else {
    alert("Verifique seu cubo!");
  }
}

function meios() {
  function solve_AR() {
    if (square22.className == "c2" && square81.className == "c5") {
      return;
    }
    else if (square42.className == "c2" && square85.className == "c5") {
      return;
    }
    else if (square62.className == "c2" && square84.className == "c5") {
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFront();
      moveFront();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["D'" , "B" , "D" , "B" , "F" , "B'" , "2F" , "B" , "F" , "B"  , "E" , "B'" , "E'"];
    }
    else if (square82.className == "c2" && square23.className == "c5") {
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["B" , "E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }

    else if (square23.className == "c2" && square82.className == "c5") {
      moveBottom();
      moveBottom();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["2B" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square43.className == "c2" && square45.className == "c5") {
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["B'" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square63.className == "c2" && square64.className == "c5") {
      moveBottom();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();
      comandos_AR = ["B" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square83.className == "c2" && square26.className == "c5") {
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();
      comandos_AR = ["F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }

    else if (square24.className == "c2" && square66.className == "c5") {
      moveBackac();
      moveBottom();
      moveBack();
      moveBottom();
      moveRight();
      moveBottomac();
      moveRightac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront()
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["T'" , "B" , "T" , "B" , "D" , "B'" , "D'" , "B'" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square44.className == "c2" && square61.className == "c5") {
      return;
    }
    else if (square64.className == "c2" && square63.className == "c5") {
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }
    else if (square84.className == "c2" && square62.className == "c5") {
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["D'" , "B" , "D" , "B" , "F" , "B'" , "F'" , "B'" , "E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }

    else if (square25.className == "c2" && square46.className == "c5") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveBottomac();
      moveLeftac();
      moveBottom();
      moveLeft();
      moveBottom();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["T" , "B'" , "T'" , "B'" , "E'" , "B" , "E" , "B" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square45.className == "c2" && square43.className == "c5") {
      moveBottom();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["2B" , "E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }
    else if (square65.className == "c2" && square41.className == "c5") {
      return;
    }
    else if (square85.className == "c2" && square42.className == "c5") {
      moveLeft();
      moveBottom();
      moveBottom();
      moveLeftac();
      moveBottom();
      moveLeft();
      moveBottom();
      moveBottom();
      moveLeftac();
      moveBottom();
      moveFrontac();
      moveBottomac();
      moveFront();

      comandos_AR = ["E" , "2B" , "E'" , "B" , "E" , "2B" , "E'" , "B" , "F'" , "B'" , "F"];
    }

    else if (square26.className == "c2" && square83.className == "c5") {
      moveBottomac();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["B'" , "E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }
    else if (square46.className == "c2" && square25.className == "c5") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveBottomac();
      moveLeftac();
      moveBottom();
      moveLeft();
      moveLeft();
      moveBottomac();
      moveLeftac();
      moveBottomac();
      moveFrontac();
      moveBottom();
      moveFront();

      comandos_AR = ["T" , "B'" , "T'" , "B'" , "E'" , "B" , "2E" , "B'" , "E'" , "B'" , "F'" , "B" , "F"];
    }
    else if (square66.className == "c2" && square24.className == "c5") {
      moveRight();
      moveBottomac();
      moveRightac();
      moveBottomac();
      moveBackac();
      moveBottom();
      moveBack();
      moveBottom();
      moveBottom();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveLeft();
      moveBottomac();
      moveLeftac();

      comandos_AR = ["D" , "B'" , "D'" , "B'" , "T'" , "B" , "T" , "2B" , "F'" , "B" , "F" , "B" , "E" , "B'" , "E'"];
    }
    else if (square86.className == "c2" && square21.className == "c5") {
      return;
    }
  }
  function solve_AL() {
    if (square22.className == "c2" && square81.className == "c4") {
      return;
    }
    else if (square42.className == "c2" && square85.className == "c4") {
      return;
    }
    else if (square62.className == "c2" && square84.className == "c4") {
      return;
    }
    else if (square82.className == "c2" && square23.className == "c4") {
      moveBottomac();
      moveRightac();
      moveBottomac();
      moveRight();
      moveBottom();
      moveFront();
      moveBottom();
      moveFrontac();

      comandos_AL = ["B'" , "D'" , "B'" , "D" , "B" , "F" , "B" , "F'"];
    }

    else if (square23.className == "c2" && square82.className == "c4") {
      moveBottom();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["2B" , "F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }
    else if (square43.className == "c2" && square45.className == "c4") {
      moveBottomac();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["B'" , "F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }
    else if (square63.className == "c2" && square64.className == "c4") {
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["B" , "F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }
    else if (square83.className == "c2" && square26.className == "c4") {
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }

    else if (square24.className == "c2" && square66.className == "c4") {
      moveBackac();
      moveBottom();
      moveBack();
      moveBottom();
      moveRight();
      moveBottomac();
      moveRightac();
      moveBottomac();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["T'" , "B" , "T" , "B" , "D" , "B'" , "D'" , "B'" , "F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }
    else if (square44.className == "c2" && square61.className == "c4") {
      return;
    }
    else if (square64.className == "c2" && square63.className == "c4") {
      moveBottom();
      moveBottom();
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();

      comandos_AL = ["2B" , "D'" , "B" , "D" , "B" , "F" , "B'" , "F'"];
    }
    else if (square84.className == "c2" && square62.className == "c4") {
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();
      moveBottom();
      moveFront();
      moveBottom();
      moveBottom();
      moveFrontac();
      moveBottom();
      moveRightac();
      moveBottomac();
      moveRight();

      comandos_AL = ["F" , "2B" , "F'" , "B" , "F" , "2B" , "F'" , "B" , "D'" , "B'" , "D"];
    }

    else if (square25.className == "c2" && square46.className == "c4") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveBottomac();
      moveLeftac();
      moveBottom();
      moveLeft();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["T" , "B'" , "T'" , "B'" , "E'" , "B" , "E" , "B" , "F" , "B'" , "F'" , "B'" , "D'" ,  "B" , "D"];
    }
    else if (square45.className == "c2" && square43.className == "c4") {
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();

      comandos_AL = ["D'" , "B" , "D" , "B" , "F" , "B'" , "F'"];
    }
    else if (square65.className == "c2" && square41.className == "c4") {
      return;
    }
    else if (square85.className == "c2" && square42.className == "c4") {
      return;
    }

    else if (square26.className == "c2" && square83.className == "c4") {
      moveBottom();
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();

      comandos_AL = ["B" , "D'" , "B" , "D" , "B" , "F" , "B'" , "F'"];
    }
    else if (square46.className == "c2" && square25.className == "c4") {
      moveBack();
      moveBottomac();
      moveBackac();
      moveBottomac();
      moveLeftac();
      moveBottom();
      moveLeft();
      moveBottom();
      moveBottom();
      moveRightac();
      moveBottom();
      moveRight();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();

      comandos_AL = ["T" , "B'" , "T'" , "B'" , "E'" , "B" , "E" , "2B" , "D'" , "B" , "D" , "B" , "F" , "B'" , "F'"];
    }
    else if (square66.className == "c2" && square24.className == "c4") {
      moveRight();
      moveBottomac();
      moveRightac();
      moveBottomac();
      moveBackac();
      moveBottom();
      moveBack();
      moveBottom();
      moveBottom();
      moveFront();
      moveBottomac();
      moveFrontac();
      moveBottomac();
      moveRightac();
      moveBottom();
      moveRight();

      comandos_AL = ["D" , "B'" , "D'" , "B'" , "T'" , "B" , "T" , "2B" , "F" , "B'" , "F'" , "B'" , "D'" , "B" , "D"];
    }
    else if (square86.className == "c2" && square21.className == "c4") {
      return;
    }
  }
  function solve_VL() {
    if (square22.className == "c6" && square81.className == "c4") {
      return;
    }
    else if (square42.className == "c6" && square85.className == "c4") {
      return;
    }
    else if (square62.className == "c6" && square84.className == "c4") {
      return;
    }
    else if (square82.className == "c6" && square23.className == "c4") {
      mover(comandos_VL, moveBottomac, moveRight, moveBottomac, moveRightac,
         moveBottomac, moveBackac, moveBottom, moveBack);
    }

    else if (square23.className == "c6" && square82.className == "c4") {
      mover(comandos_VL, moveBackac, moveBottom, moveBack, moveBottom, moveRight,
        moveBottomac, moveRightac);
    }
    else if (square43.className == "c6" && square45.className == "c4") {
      mover(comandos_VL, moveBottom,moveBackac, moveBottom, moveBack, moveBottom,
         moveRight, moveBottomac, moveRightac);
    }
    else if (square63.className == "c6" && square64.className == "c4") {
      mover(comandos_VL, moveBottomac,moveBackac, moveBottom, moveBack, moveBottom,
         moveRight, moveBottomac, moveRightac);
    }
    else if (square83.className == "c6" && square26.className == "c4") {
      mover(comandos_VL, moveBottom, moveBottom, moveBackac, moveBottom, moveBack,
        moveBottom, moveRight, moveBottomac, moveRightac);
    }

    else if (square24.className == "c6" && square66.className == "c4") {
      mover(comandos_VL, moveRight, moveBottom, moveBottom, moveRightac, moveBottom,
        moveRight, moveBottom, moveBottom, moveRightac, moveBottom, moveBackac, moveBottomac, moveBack);
    }
    else if (square44.className == "c6" && square61.className == "c4") {
      return;
    }
    else if (square64.className == "c6" && square63.className == "c4") {
      mover(comandos_VL, moveBottom, moveBottom, moveRight, moveBottomac,
        moveRightac, moveBottomac, moveBackac, moveBottom, moveBack);
    }
    else if (square84.className == "c6" && square62.className == "c4") {
      return;
    }

    else if (square25.className == "c6" && square46.className == "c4") {
      mover(comandos_VL, moveBack, moveBottomac, moveBackac, moveBottomac,
         moveLeftac, moveBottom, moveLeft, moveBottomac, moveBackac, moveBottom,
          moveBack,moveBottom, moveRight, moveBottomac, moveRightac);
    }
    else if (square45.className == "c6" && square43.className == "c4") {
      mover(comandos_VL, moveRight, moveBottomac, moveRightac,
        moveBottomac, moveBackac, moveBottom, moveBack);
    }
    else if (square65.className == "c6" && square41.className == "c4") {
      return;
    }
    else if (square85.className == "c6" && square42.className == "c4") {
      return;
    }

    else if (square26.className == "c6" && square83.className == "c4") {
      mover(comandos_VL, moveBottom, moveRight, moveBottomac, moveRightac,
         moveBottomac, moveBackac, moveBottom, moveBack);
    }
    else if (square46.className == "c6" && square25.className == "c4") {
      mover(comandos_VL, moveBack, moveBottomac, moveBackac, moveBottomac,
         moveLeftac, moveBottom, moveLeft, moveBottom, moveBottom, moveRight, moveBottomac, moveRightac,
            moveBottomac, moveBackac, moveBottom, moveBack);
    }

    else if (square66.className == "c6" && square24.className == "c4") {
      return;
    }
    else if (square86.className == "c6" && square21.className == "c4") {
      return;
    }
  }
  function solve_VR() {
    if (square22.className == "c6" && square81.className == "c5") {
      return;
    }
    else if (square42.className == "c6" && square85.className == "c5") {
      return;
    }
    else if (square62.className == "c6" && square84.className == "c5") {
      return;
    }
    else if (square82.className == "c6" && square23.className == "c5") {
      mover(comandos_VR, moveBottom, moveLeftac, moveBottom, moveLeft, moveBottom,
        moveBack, moveBottomac, moveBackac);
    }

    else if (square23.className == "c6" && square82.className == "c5") {
      mover(comandos_VR, moveBack, moveBottomac, moveBackac, moveBottomac, moveLeftac,
         moveBottom, moveLeft);
    }
    else if (square43.className == "c6" && square45.className == "c5") {
      mover(comandos_VR, moveBottom, moveBack, moveBottomac, moveBackac, moveBottomac, moveLeftac,
         moveBottom, moveLeft);
    }
    else if (square63.className == "c6" && square64.className == "c5") {
      mover(comandos_VR, moveBottomac, moveBack, moveBottomac, moveBackac, moveBottomac, moveLeftac,
         moveBottom, moveLeft);
    }
    else if (square83.className == "c6" && square26.className == "c5") {
      mover(comandos_VR, moveBottom, moveBottom, moveBack, moveBottomac, moveBackac,
         moveBottomac, moveLeftac, moveBottom, moveLeft);
    }

    else if (square24.className == "c6" && square66.className == "c5") {
      return;
    }
    else if (square44.className == "c6" && square61.className == "c5") {
      return;
    }
    else if (square64.className == "c6" && square63.className == "c5") {
      mover(comandos_VR, moveLeftac, moveBottom, moveLeft, moveBottom,
        moveBack, moveBottomac, moveBackac);
    }
    else if (square84.className == "c6" && square62.className == "c5") {
      return;
    }

    else if (square25.className == "c6" && square46.className == "c5") {
      mover(comandos_VR, moveBack, moveBottom, moveBottom, moveBackac, moveBottom,
         moveBack, moveBottom, moveBottom, moveBackac, moveBottom,
         moveLeftac, moveBottomac, moveLeft);
    }
    else if (square45.className == "c6" && square43.className == "c5") {
      mover(comandos_VR, moveBottom, moveBottom, moveLeftac, moveBottom, moveLeft, moveBottom,
        moveBack, moveBottomac, moveBackac);
    }
    else if (square65.className == "c6" && square41.className == "c5") {
      mover(comandos_VR, moveLeftac, moveBottom, moveLeft, moveBottom,
        moveBack, moveBottomac, moveBackac);
    }
    else if (square85.className == "c6" && square42.className == "c5") {
      return;
    }

    else if (square26.className == "c6" && square83.className == "c5") {
      mover(comandos_VR, moveBottomac, moveLeftac, moveBottom, moveLeft, moveBottom,
        moveBack, moveBottomac, moveBackac);
    }
    else if (square46.className == "c6" && square25.className == "c5") {
      return;
    }
    else if (square66.className == "c6" && square24.className == "c5") {
      return;
    }
    else if (square86.className == "c6" && square21.className == "c5") {
      return;
    }
  }

  contar();
  if (contar) {
    solve_AR();
    solve_AL();
    solve_VL();
    solve_VR();

    decodificar(comandos_AR, lista_comandos_AR);
    decodificar(comandos_AL, lista_comandos_AL);
    decodificar(comandos_VL, lista_comandos_VL);
    decodificar(comandos_VR, lista_comandos_VR);


    comandos.value = "Quadrado Azul Vermelho: " + comandos_AR.join(' - ') + "\n" + "Quadrado Azul Laranja: " + comandos_AL.join(' - ')
    + "\n" + "Quadrado Verde Laranja: " + comandos_VL.join(' - ') + "\n" + "Quadrado Verde Vermelho: " + comandos_VR.join(' - ');

    comandos_VR = [];
    comandos_VL = [];
    comandos_AR = [];
    comandos_AL = [];
  }


}

function yellowCross() {

  contar();
  if(contar()){
    //Apenas o quadrado central
    if (square83.className != "c3" && square23.className != "c3" && square43.className != "c3" && square63.className != "c3" ) {
      mover(comandos_yellow, moveFront, moveLeft, moveBottom, moveLeftac,
      moveBottomac, moveFrontac, moveBack, moveRight, moveBottom, moveRightac,
      moveBottomac, moveRight, moveBottom, moveRightac, moveBottomac, moveBackac);
    }

    //L shape
    else if (square23.className == "c3" && square43.className == "c3") {
      mover(comandos_yellow, moveBack, moveRight, moveBottom, moveRightac,
      moveBottomac, moveRight, moveBottom, moveRightac, moveBottomac, moveBackac);
    }
    else if (square23.className == "c3" && square63.className == "c3") {
      mover(comandos_yellow, moveBottomac, moveBack, moveRight, moveBottom, moveRightac,
      moveBottomac, moveRight, moveBottom, moveRightac, moveBottomac, moveBackac);
    }
    else if (square63.className == "c3" && square83.className == "c3") {
      mover(comandos_yellow, moveBottom, moveBottom, moveBack, moveRight, moveBottom, moveRightac,
      moveBottomac, moveRight, moveBottom, moveRightac, moveBottomac, moveBackac);
    }
    else if (square43.className == "c3" && square83.className == "c3") {
      mover(comandos_yellow, moveBottom, moveBack, moveRight, moveBottom, moveRightac,
      moveBottomac, moveRight, moveBottom, moveRightac, moveBottomac, moveBackac);
    }

    //I shape
    else if (square43.className == "c3" && square63.className == "c3") {
      mover(comandos_yellow, moveFront, moveLeft, moveBottom, moveLeftac,
      moveBottomac, moveFrontac);
    }
    else if (square23.className == "c3" && square83.className == "c3") {
      mover(comandos_yellow, moveBottom, moveFront, moveLeft, moveBottom, moveLeftac,
        moveBottomac, moveFrontac);
    }

    decodificar(comandos_yellow, lista_comandos_yellow);

    comandos.value = "Cruz Amarela: " + comandos_yellow.join(' - ');
    comandos_yellow = [];
  }
}

function yellowSide() {
  if (square33.className == "c3" && square73.className == "c3" && square75.className == "c3") {
    mover(comandos_yellow_side, moveRight, moveFront, moveLeft,
       moveFrontac, moveRightac, moveFront, moveLeftac, moveFrontac);
  }
  else if (square33.className == "c3" && square73.className == "c3" && square34.className == "c3") {
    mover(comandos_yellow_side, moveBottom, moveBottom, moveRight, moveFront, moveLeft,
       moveFrontac, moveRightac, moveFront, moveLeftac, moveFrontac);
  }

  else if (square13.className == "c3" && square93.className == "c3" && square92.className == "c3") {
    mover(comandos_yellow_side, moveBottomac, moveRight, moveFront, moveLeft,
       moveFrontac, moveRightac, moveFront, moveLeftac, moveFrontac);
  }
  else if (square13.className == "c3" && square93.className == "c3" && square94.className == "c3") {
    mover(comandos_yellow_side, moveBottom, moveRight, moveFront, moveLeft,
       moveFrontac, moveRightac, moveFront, moveLeftac, moveFrontac);
  }
}

function contar() {
  var i;
  var quadrados = [];
  quadrados = [square11.className,square21.className,square31.className,
    square41.className,square51.className,square61.className,
    square71.className,square81.className,square91.className,
    square12.className,square22.className,square32.className,
    square42.className,square52.className,square62.className,
    square72.className,square82.className,square92.className,
    square13.className,square23.className,square33.className,
    square43.className,square53.className,square63.className,
    square73.className,square83.className,square93.className,
    square14.className,square24.className,square34.className,
    square44.className,square54.className,square64.className,
    square74.className,square84.className,square94.className,
    square15.className,square25.className,square35.className,
    square45.className,square55.className,square65.className,
    square75.className,square85.className,square95.className,
    square16.className,square26.className,square36.className,
    square46.className,square56.className,square66.className,
    square76.className,square86.className,square96.className];
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
  for (i = 0; i < 54; i++) {
    if (quadrados[i] == "c1") {
      count1++;
    }
    if (quadrados[i] == "c2") {
      count2++;
    }
    if (quadrados[i] == "c3") {
      count3++;
    }
    if (quadrados[i] == "c4") {
      count4++;
    }
    if (quadrados[i] == "c5") {
      count5++;
    }
    if (quadrados[i] == "c6") {
      count6++;
    }
  }

  if (count1 > 9 || count2 > 9 || count3 > 9 || count4 > 9 || count5 > 9 || count6 > 9) {
    return false;
  }
  else {
    return true;
  }
}
