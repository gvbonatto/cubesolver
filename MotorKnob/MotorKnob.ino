const int dir1 = 55;
const int pul1 = 54;
const int ena1 = 38;
const int dir2 = 6;
const int pul2 = 3;
const int dir3 = 5;
const int pul3 = 2;
const int dir4 = 13;
const int pul4 = 11;
const int dir5 = 12;
const int pul5 = 10;

char charRead;
String inputString ="";

void setup() {
  Serial.begin(9600);
  pinMode(dir1, OUTPUT);
  pinMode(pul1, OUTPUT);
  pinMode(dir2, OUTPUT);
  pinMode(pul2, OUTPUT);
  pinMode(dir3, OUTPUT);
  pinMode(pul3, OUTPUT);
  pinMode(dir4, OUTPUT);
  pinMode(pul4, OUTPUT);
  pinMode(dir5, OUTPUT);
  pinMode(pul5, OUTPUT);
  pinMode(ena1, OUTPUT);

  digitalWrite(ena1, LOW);
}

void loop() {
 if (Serial.available()) {
   charRead = Serial.read();
   if(charRead != 'T'){
     inputString += charRead;
   } else {
     if(inputString == "1"){
       for (int i = 0; i < 100; i++) {
         digitalWrite(dir1, 1);
         digitalWrite(pul1, 1);
         delayMicroseconds(500);
         digitalWrite(pul1, 0);
         delayMicroseconds(500);
       }
     } else if(inputString == "2") {
       for (int i = 0; i < 100; i++) {
         digitalWrite(dir1, 0);
         digitalWrite(pul1, 1);
         delayMicroseconds(500);
         digitalWrite(pul1, 0);
         delayMicroseconds(500);
       }
     } else if(inputString == "3") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir2, 0);
         digitalWrite(pul2, 1);
         delayMicroseconds(1);
         digitalWrite(pul2, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "4") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir2, 1);
         digitalWrite(pul2, 1);
         delayMicroseconds(1);
         digitalWrite(pul2, 0);
         delayMicroseconds(1);
       }
     }
          else if(inputString == "5") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir3, 0);
         digitalWrite(pul3, 1);
         delayMicroseconds(1);
         digitalWrite(pul3, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "6") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir3, 1);
         digitalWrite(pul3, 1);
         delayMicroseconds(1);
         digitalWrite(pul3, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "7") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir4, 0);
         digitalWrite(pul4, 1);
         delayMicroseconds(1);
         digitalWrite(pul4, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "8") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir4, 1);
         digitalWrite(pul4, 1);
         delayMicroseconds(1);
         digitalWrite(pul4, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "9") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir5, 0);
         digitalWrite(pul5, 1);
         delayMicroseconds(1);
         digitalWrite(pul5, 0);
         delayMicroseconds(1);
       }
     }
     else if(inputString == "10") {
       for (int i = 0; i < 6250; i++) {
         digitalWrite(dir5, 1);
         digitalWrite(pul5, 1);
         delayMicroseconds(1);
         digitalWrite(pul5, 0);
         delayMicroseconds(1);
       }
     }

     inputString = "";
    }
  }
}
