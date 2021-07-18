
var mouse,cat,mouseImg,catImg,bgImg

function preload() {

    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg = loadImage("images/cat1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg3 = loadImage("images/mouse4.png");
    catImg3 = loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse = createSprite(100,600,20,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2;

    cat = createSprite(800,600,20,20);
   cat.addImage(catImg);
  cat.scale = 0.2;

}

function draw() {



    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x< (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("cat",catImg3);
    cat.changeAnimation("cat");
    mouse.addAnimation("mouse",mouseImg3);
    mouse.changeAnimation("mouse")
    cat.x = 200;
}

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){

mouse.addAnimation( "mouseTeasing", mouseImg2);
mouse.changeAnimation("mouseTeasing");
cat.velocityX = -5; 
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning")
mouse.franeDelay = 25

}


}
