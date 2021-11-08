var apple;
var appleimg;
var garden;
var gardenimg;
var rabbit;
var rabbitimg;
var leafimg;
var orangeLeafimg


function preload()
{
  gardenimg = loadImage("garden.png")
  rabbitimg = loadImage("rabbit.png")
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png")
  orangeLeafimg = loadImage("orangeLeaf.png")
}

function setup()
{
  createCanvas(400,400)
  garden = createSprite(200,200,400,400)
  rabbit = createSprite(200,300)
  garden.addImage("garden_background", gardenimg)
  rabbit.addImage("rabbit_image", rabbitimg)
}

function draw()
{
  background("black")
  rabbit.scale = 0.1
  rabbit.x = World.mouseX
  spawnApples()
  spawnLeaves()
  spawnOrangeLeaves()
  drawSprites()
}

function spawnApples()
{
  if(frameCount%30==0)
  {
    var apple = createSprite(random(0,400), 0)
    apple.scale = 0.1
  apple.velocityY = 5
  apple.addImage("apple_image", appleimg)
  }
}

function spawnLeaves()
{
  if(frameCount%30==0)
  {
    var leaf = createSprite(random(0,400), 0)
    leaf.scale = 0.1
    leaf.velocityY = 5
    leaf.addImage("leaf_image", leafimg)
  }
}

function spawnOrangeLeaves()
{
  if(frameCount%30==0)
  {
    var orangeLeaf = createSprite(random(0,400), 0)
    orangeLeaf.scale = 0.1
    orangeLeaf.velocityY = 7
    orangeLeaf.addImage("orangeLeaf_image", orangeLeafimg)
  }
}