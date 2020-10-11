var door, door1
var tower, tower1
var climber, climber1
var ghost, ghost1
var gameover, gameover1

function preload(){
  tower1 = loadImage("tower.png")
  door1 = loadImage("door.png")
  ghost1 = loadImage("ghost-standing.png")
  climber1 = loadImage("climber.png")
  gameover1 = loadImage("download.jpg")

}
function setup(){
  createCanvas(500, 500)
  tower = createSprite(250, 250, 500, 500)
  tower.addImage("tower1", tower1)
  tower.velocityY =2
  
  ghost = createSprite(300, 300, 30, 30)
  ghost . addImage("ghost1", ghost1)
  ghost.scale = 0.5
  doorGroup=new Group();
  climberGroup=new Group();
  
  gameover = createSprite(250, 250, 500, 500)
  gameover.addImage("gameover1", gameover1)
  gameover.visible = false
  gameover.scale = 3.5
  
}
function draw(){
  background("white")
  if (tower.y>500){
    tower.y = 250
  }
  if (keyDown("space")){
    ghost.velocityY = -5
        
    }
  ghost.velocityY=ghost.velocityY+0.8
  if (keyDown("left_Arrow")){
    ghost.x = ghost.x-5
  }
  if (keyDown("right_Arrow")) {
    ghost.x =ghost.x+5
    
  }
  if(doorGroup.isTouching(ghost)){
    ghost.destroy()
    gameover.visible = true
  }
  if(climberGroup.isTouching(ghost)){
    ghost.destroy()
    gameover.visible = true
  }
  doors()
  drawSprites()
  
}
function doors(){
  if (frameCount%250===0){
    door = createSprite(450, 300, 30, 30)
    door.addImage("door1", door1)
    door.velocityY = 1
    
    climber = createSprite(450, 370, 30, 30)
    climber.addImage("climber1", climber1)
    climber.velocityY=1
  door.x=random(100, 400)  
    climber.x = door.x
    doorGroup.add(door)
    climberGroup.add(climber)
  }
  
}