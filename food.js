class Food{
constructor(){
this.image = loadImage("images/milk.png")  
this.foodStock=0;
this.lastFed=0;
}
getFoodStock(){
var milkGetRef = database.ref('milk')
}
updateFoodStock(){
var milkUpdateRef = database.ref('milk')
}
deductFood(){
var milkDeductRef = database.ref('milk')
}
dsiplay(){
image(this.image,240,250,15,15)    


}
}
