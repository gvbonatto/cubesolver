(function() {
 var socket = io();
 var moverFrente = document.getElementById('moveF');
 var moverFrenteAC = document.getElementById('moveFac');
 var moverDireita = document.getElementById('moveR');
 var moverDireitaAC = document.getElementById('moveRac');
 var moverEsquerda = document.getElementById('moveL');
 var moverEsquerdaAC = document.getElementById('moveLac');
 var moverTras = document.getElementById('moveT');
 var moverTrasAC = document.getElementById('moveTac');
 var moverBottom= document.getElementById('moveB');
 var moverBottomAC = document.getElementById('moveBac');
 var send = document.getElementById('SendCode');
 var i;

 moverFrente.addEventListener("click", function(){
   socket.emit('input-text', "1");
 });

 moverFrenteAC.addEventListener("click", function(){
   socket.emit('input-text', "2");
 });

 moverDireita.addEventListener("click", function(){
   socket.emit('input-text', "3");
 });

 moverDireitaAC.addEventListener("click", function(){
   socket.emit('input-text', "4");
 });

 moverEsquerda.addEventListener("click", function(){
   socket.emit('input-text', "5");
 });

 moverEsquerdaAC.addEventListener("click", function(){
   socket.emit('input-text', "6");
 });

 moverTras.addEventListener("click", function(){
   socket.emit('input-text', "7");
 });

 moverTrasAC.addEventListener("click", function(){
   socket.emit('input-text', "8");
 });
 moverBottom.addEventListener("click", function(){
   socket.emit('input-text', "9");
 });

 moverBottomAC.addEventListener("click", function(){
   socket.emit('input-text', "10");
 });

 send.addEventListener("click", function(){
   for (i = 0; i < lista_comandos_BV.length; i++) {
     socket.emit('input-text', lista_comandos_BV[i]);
   }

   for (i = 0; i < lista_comandos_BA.length; i++) {
     socket.emit('input-text', lista_comandos_BA[i]);
   }

   for (i = 0; i < lista_comandos_BR.length; i++) {
     socket.emit('input-text', lista_comandos_BR[i]);
   }

   for (i = 0; i < lista_comandos_BL.length; i++) {
     socket.emit('input-text', lista_comandos_BL[i]);
   }

   for (i = 0; i < lista_comandos_BVR.length; i++) {
     socket.emit('input-text', lista_comandos_BVR[i]);
   }

   for (i = 0; i < lista_comandos_BVL.length; i++) {
     socket.emit('input-text', lista_comandos_BVL[i]);
   }

   for (i = 0; i < lista_comandos_BAR.length; i++) {
     socket.emit('input-text', lista_comandos_BAR[i]);
   }

   for (i = 0; i < lista_comandos_BAL.length; i++) {
     socket.emit('input-text', lista_comandos_BAL[i]);
   }


   for (i = 0; i < lista_comandos_VR.length; i++) {
     socket.emit('input-text', lista_comandos_VR[i]);
   }

   for (i = 0; i < lista_comandos_VL.length; i++) {
     socket.emit('input-text', lista_comandos_VL[i]);
   }
   for (i = 0; i < lista_comandos_AL.length; i++) {
     socket.emit('input-text', lista_comandos_AL[i]);
   }

   for (i = 0; i < lista_comandos_AR.length; i++) {
     socket.emit('input-text', lista_comandos_AR[i]);
   }


   lista_comandos_BL = [];
   lista_comandos_BR = [];
   lista_comandos_BA = [];
   lista_comandos_BV = [];
   lista_comandos_BAR = [];
   lista_comandos_BVL = [];
   lista_comandos_BAL = [];
   lista_comandos_BVR = [];
   lista_comandos_AL = [];
   lista_comandos_AR = [];
   lista_comandos_VL = [];
   lista_comandos_VR = [];
 });
})();
