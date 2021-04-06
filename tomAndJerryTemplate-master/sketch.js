var canvase,bg,together,tom,tom1,tom2,jerry1,jerry2;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
tom1 = loadAnimation("images/cat1.png")
tom2 = loadAnimation("images/cat2.png","images/cat3.png")
tom3 = loadAnimation("images/cat4.png")
jerry1 = loadAnimation("images/mouse1.png")
jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3 = loadAnimation("images/mouse4.png")
    
}

function setup(){
    canvase = createCanvas  (1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("tomsleeping",tom1)
    tom.scale = 0.2;
    jerry = createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerry1)
    jerry.scale = 0.16;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry **********collide
    if (tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0
        tom.addAnimation("tomlastImage",tom3)
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomlastImage")
        jerry.addAnimation("jerrylastImage",jerry3)
        jerry.scale = 0.16;
        jerry.changeAnimation("jerrylastImage")
        
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -3
    tom.addAnimation("tomrunning",tom2)
    tom.changeAnimation("tomrunning")
    jerry.addAnimation("jerryteasing",jerry2)
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryteasing")
}
  


}
