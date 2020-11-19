//Create variables here
var dog,dogimage, dogimage1, foodStock,water, database;
function preload()
{
  //load images here
  dogimage=loadImage('images/dogImg.png')
  dogimage1=loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  food=database.ref('food');
  food.on("value",readStock)
  dog=createSprite(250,250)
  dog.addImage(dogimage);
  dog.scale=0.5
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
 
if (keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogimage1);
}
fill(0)
textSize(20);
text("Note press UP_ARROW Key To Feed Dog Milk!",10,50)
text("feed remaining "+food,170,100)
}


function readStock(data){
  food=data.val();
}
function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}