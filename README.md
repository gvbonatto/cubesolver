# Fëanor: A Rubik's Cube robot solver
This project was design in 2020 as a presentation of the Federal Institute of Paraná. It took me 6 months to develop the algorithm and the mechanic project.

# Hardware
At first, I used an Arduino Uno to connect five stepper motors Nema 17, but it didn't have enough digital ports and was very slow. After that, I changed to an Arduino Mega with a Ramps 1.4. I also used a 12V 20A power supply to power the motors.


![Captura de tela 2023-02-07 184605](https://user-images.githubusercontent.com/87787577/217373777-1514ac25-5de6-4cf1-b5d7-772261bbcb3e.png) ![Captura de tela 2023-02-07 184712](https://user-images.githubusercontent.com/87787577/217374048-4d1f1a5d-cb30-48f5-9028-0073819169c5.png)

# Algorithm
The algorithm was based in the begginer's solver method, without the upside face, so i needed to create a new method to finish the cube. First I map the faces and treat each individually square to position in the right place. The code is computed in the Web and then send to the Arduino via Serial Port.

**Front-end:** HTML, JavaScript and CSS (I didn't use any framework).

**Back-end:** Node.js.

![CUbe](https://user-images.githubusercontent.com/87787577/217373184-0d9c7edd-1a6c-4e4d-b098-10cee44aabdf.png)

# Mechanic 
All the project was 3D printed. For the CAD part, I designed all the parts in Fusion360.

![image](https://user-images.githubusercontent.com/87787577/217374242-b18041cb-c47d-4367-a50e-727a1c7cdea3.png)

# Final Project
Link: https://youtube.com/shorts/0vgbW99-I1c?feature=share
