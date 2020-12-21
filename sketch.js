var object1,object2,object3,object4,object5;
var object6,object7,object8,object9,object10;
var xobject1,xobject2,xobject3,xobject4,xobject5;
var xobject6,xobject7,xobject8,xobject9,xobject10;
var object1img,object2img,object3img,object4img,object5img;
var object6img,object7img,object8img,object9img,object10img;
var hobject1,hobject2,hobject3,hobject4,hobject5;
var hobject6,hobject7,hobject8,hobject9,hobject10;
var backgroundimg , xobjectimg;
var click = 10 ;
var score = 0;
var objectLeft = 10;
var hint = 3;
// var dog = 0;
var gameState = 0;k

function preload(){
backgroundimg = loadImage("HIDDEN KITCHEN PICS/image.png");
object1img = loadImage("HIDDEN KITCHEN PICS/1_2.png");
//object1 = loadImage("HIDDEN KITCHEN PICS/1_2.png");
object2img = loadImage("HIDDEN KITCHEN PICS/1_7.png");
// object2 = loadImage("HIDDEN KITCHEN PICS/1_7.png");
object3img = loadImage("HIDDEN KITCHEN PICS/1_12.png");
// object3 = loadImage("HIDDEN KITCHEN PICS/1_12.png");
object4img = loadImage("HIDDEN KITCHEN PICS/1_16.png");
// object4 = loadImage("HIDDEN KITCHEN PICS/1_16.png");
object5img = loadImage("HIDDEN KITCHEN PICS/1_17.png");
// object5 = loadImage("HIDDEN KITCHEN PICS/1_17.png");
object6img = loadImage("HIDDEN KITCHEN PICS/1_19.png");
// object6 = loadImage("HIDDEN KITCHEN PICS/1_19.png");
object7img = loadImage("HIDDEN KITCHEN PICS/1_20.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_20.png");
object8img = loadImage("HIDDEN KITCHEN PICS/1_22.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_22.png");
object9img = loadImage("HIDDEN KITCHEN PICS/1_23.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_23.png");
object10img = loadImage("HIDDEN KITCHEN PICS/1_27.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_27.png");
xobjectimg = loadImage("HIDDEN KITCHEN PICS/x.png");
}
function setup() {
  createCanvas(1000,600);
  object1 = createSprite(50,25+ 5,50,50);
  object1.addImage(object1img);
  
  object2 = createSprite(100,25+ 5,50,50);
  object2.addImage(object2img);

  object3 = createSprite(150,25+ 5,50,50);
  object3.addImage(object3img);

  object4 = createSprite(200,25+ 5,50,50);
  object4.addImage(object4img);
  object4.scale = 0.75  

  object5 = createSprite(250,25+ 5,50,50);
  object5.addImage(object5img);
  object5.scale = 0.65  

  object6 = createSprite(300,25+ 5,50,50);
  object6.addImage(object6img);
  object6.scale = 0.5  

  object7 = createSprite(350,25+ 5,50,50);
  object7.addImage(object7img);
  object7.scale = 1.25  

  object8 = createSprite(400,25+ 5,50,50);
  object8.addImage(object8img);
  object8.scale = 0.3  

  object9 = createSprite(450,25+ 5,50,50);
  object9.addImage(object9img);
  object9.scale = 0.5  

  object10 = createSprite(500,25+ 5,50,50);
  object10.addImage(object10img);
  object10.scale = 0.75  

  xobject1 = createSprite(50,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject1.visible = false;

  xobject2 = createSprite(100,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject2.visible = false;

  xobject3 = createSprite(150,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject3.visible = false;

  xobject4 = createSprite(200,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject4.visible = false;

  xobject5 = createSprite(250,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject5.visible = false;

  object6 = createSprite(300,25+ 5,50,50);
  object6.addImage(object6img);
  object6.scale = 0.5  

  object7 = createSprite(350,25+ 5,50,50);
  object7.addImage(object7img);
  object7.scale = 1.25  

  object8 = createSprite(400,25+ 5,50,50);
  object8.addImage(object8img);
  object8.scale = 0.3  

  object9 = createSprite(450,25+ 5,50,50);
  object9.addImage(object9img);
  object9.scale = 0.5  

  object10 = createSprite(500,25+ 5,50,50);
  object10.addImage(object10img);
  object10.scale = 0.75  



  hobject1 = createSprite(962,380,30,30);
//hobject1.visible = true ;
  hobject1.addImage(object1img);
  hobject1.scale = 0.5;
  
  hobject2 = createSprite(765,335,30,30);
  //hobject1.visible = true ;
  hobject2.addImage(object2img);
  hobject2.scale = 0.5;

  hobject3 = createSprite(589,365,30,30);
  //hobject1.visible = true ;
  hobject3.addImage(object3img);
  hobject3.scale = 0.60;

  hobject4 = createSprite(500,399.5,30,30);
  //hobject1.visible = true ;
    hobject4.addImage(object4img);
    hobject4.scale = 0.5;

  hobject5 = createSprite(475,467,30,30);
  //hobject1.visible = true ;
  hobject5.addImage(object5img);
  hobject5.scale = 0.5;
  
  hobject6 = createSprite(415 ,399,30,30);
  //hobject1.visible = true ;
    hobject6.addImage(object6img);
    hobject6.scale = 0.5;

    hobject7 = createSprite(395 ,405.5,30,30);
    //hobject1.visible = true ;
      hobject7.addImage(object7img);
      hobject7.scale = 0.55;
  
    
    
  hobject8 = createSprite(377.5 ,470,30,30);
  //hobject1.visible = true ;
    hobject8.addImage(object8img);
    hobject8.scale = 0.5;
    
  
   hobject9 = createSprite(259 ,415,30,30);
   //hobject1.visible = true ;
    hobject9.addImage(object9img);
    hobject9.scale = 0.6;
  
    
  hobject10 = createSprite(107 ,425,30,30);
  //hobject1.visible = true ;
    hobject10.addImage(object10img);
    hobject10.scale = 0.5;
        
 }

function draw() {
  background(backgroundimg);
  strokeWeight(0) ;
  fill("cyan")
  rect(0,0,1000,85);

  if(mousePressedOver(hobject1)){
    hobject1.tint = "white";
    hobject1.destroy();
    xobject1.visible = true;
   // dog = 1; 
     
      click -= 1;
      score += 100;
      objectLeft -= 1;
    
   } 
   
   if(mousePressedOver(hobject2)){
    hobject2.tint = "white";
    hobject2.destroy();
   
      click -= 1;
      score += 100;
      objectLeft -= 1;
 
   } 
   if(mousePressedOver(hobject3)){
    hobject3.tint = "white";
    hobject3.destroy();
   
      click -= 1;
      score += 100;
      objectLeft -= 1;
    
   } 
   if(mousePressedOver(hobject4)){
    hobject4.tint = "white";
    hobject4.destroy();
    
      click -= 1;
      score += 100;
      objectLeft -= 1;
   
   } 
   if(mousePressedOver(hobject5)){
    hobject5.tint = "white";
    hobject5.destroy();
   
      click -= 1;
      score += 100;
      objectLeft -= 1;
   
   } 
   if(mousePressedOver(hobject6)){
    hobject6.tint = "white";
    hobject6.destroy();
 
      click -= 1;
      score += 100;
      objectLeft -= 1;
    
   } 
   if(mousePressedOver(hobject7)){
    hobject7.tint = "white";
    hobject7.destroy();
  
      click -= 1;
      score += 100;
      objectLeft -= 1;
    
   } 
   if(mousePressedOver(hobject8)){
    hobject8.tint = "white";
    hobject8.destroy();
  
      click -= 1;
      score += 100;
      objectLeft -= 1;
    
   } 
   if(mousePressedOver(hobject9)){
    hobject9.tint = "white";
    hobject9.destroy();
    
      click -= 1;
      score += 100;
      objectLeft -= 1;
     
   } 
   
   if(mousePressedOver(hobject10)){
    hobject10.tint = "white";
    hobject10.destroy();
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
   } 

   
  drawSprites();
  fill("black");
  textSize(25 )
  text(score , 800 , 20+ 5);
  text(click, 800, 50+ 5);
  text(objectLeft,700,20+ 5)
}


/* winning condition if dog === 10 && click <= 0 
display you won the game gameState === 2; 
elseif dog!== 10 && click === 0
display you lose try again gameState === 1 */