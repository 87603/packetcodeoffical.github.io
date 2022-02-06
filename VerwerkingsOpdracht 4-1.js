 
  

function setup(){
    createCanvas(800,600);
    background(173,216,230);

    x = width/2;
    y = height/2;
}
function draw(){
    //huis
    fill(105,105,105);
    rect(190,320,20,70)//schoorsteen
    fill(105,105,105)
    triangle(200,300,180,320,219,320)//schoorsteenDriehoek
    fill(255,0,25);
    triangle(250,300,150,450,350,450);//dak
    fill(0,0,255);
    rect(170,450,160,130);//muur
    fill(255);
    rect(180,500,30,30);//raamL
    rect(280,500,30,30);//raamR
    fill(220,20,60);
    rect(225,500,40,80);//deur   
    //huis
    
 
    //WOLK1
    noStroke();
    fill(255);
    ellipse(50,50,60,50);
    ellipse(80,40,60,50);
    ellipse(130,50,60,50);
    ellipse(70,70,60,50);
    ellipse(110,65,60,50);
    ellipse(140,60,50,50);
    ellipse(35,70,60,50);
    //WOLK1
    
    //WOLK2
    noStroke();
    fill(255);
    ellipse(500,50,60,50);
    ellipse(570,40,60,50);
    ellipse(530,30,60,50);
    ellipse(610,30,60,50);
    ellipse(650,65,60,50);
    ellipse(600,60,50,50);
    ellipse(550,70,60,50);
    //WOLK2

}
 