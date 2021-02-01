//Create variables here
    var dog;
    var dogImg;
var  food;
    function preload()
    {
      
    dogImg = loadImage("images/dogImg1.png")
      
    }

    function setup() {
      createCanvas(500, 500);

      dog = createSprite(250,250,10,10);
      dog.addImage("dogImg",dogImg);
      dog.scale = 0.3;
      food = new Food()
}


    function draw() {  
      background("cadetBlue");

      if(keyDown(LEFT_ARROW)){
      changePosition(-1,0)
      }  

      else if (keyDown(RIGHT_ARROW)){
      changePosition(1,0);
      }

      else if (keyDown(UP_ARROW)){
      changePosition(0,-1);
      }

      else if (keyDown(DOWN_ARROW)){
      changePosition(0,1) 
      }
      food.display();
      drawSprites();
}

      function changePosition (x,y){
        
      dog.x = dog.x + x;
      dog.y = dog.y + y;  
      
}


