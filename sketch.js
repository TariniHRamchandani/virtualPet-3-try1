//Create variables here
var happydog;
var dog;
var database;
var foodS;
var foodStock;
var feedDog;
var addFoods;
var gameState=Play;


function preload()
{
  //load images here
  //backgroundImg = loadImage("sprites/bg.png");
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale=0.1;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFodd.position(800,95);
  addFood.mousepressed(addFoods);

  readState=database.ref('gameState');
readState.on("value",function(data)){
  gameState=data.val();
}
}


function draw() {  
background(46, 139, 87);

//if(keyWentDown(UP_ARROW)){
//writeStock(foodS);
//dog.addImage(happydogImage);
//}

text("NOTE:press up arrow key to feed Drago milk",250,250);
stroke("blue");
fill("purple");
text("Food:"+foodS,270,250);
if(lastFed>=12){
  text("Last Fed :"+lastFed%12+"PM", 350,30);
}else if(lastFed==0){
  text("Last Fed: 12 AM",350,30);
}else{
  text("Last Fed:"+lastFed+"AM",350,30);
}
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});
  drawSprites();
  //displayfoodclass object
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  
  database.ref('/').update({
    Food:x
  }

  )
}
function feedDog(){
  dog.addImage(happydogImage);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  d
}
function addFoods(){
  foods++;
  dtatbase.ref('/').update({
    food:foodS
  })
}
function update(state){
  database.ref('/').update({
    gameState:state
  });
}
