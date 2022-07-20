var canvas=new fabric.Canvas("myCanvas");
var blockImgWidth=30;
var blockImgHeigth=30;
var playerX=10;
var playerY=10;
var playerObject=" ";
var blockImgObject=" ";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY, left:playerX
        });
        canvas.add(playerObject)
    })
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObject=Img;
        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeigth);
        blockImgObject.set({
            top:playerY, left:playerX
        });
        canvas.add(blockImgObject)
    })
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p e shift pressionadas juntas");
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}

function up (){
    if (playerY >= 0){
        playerY = playerY - blockImgHeigth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down (){
    if (playerY <= 500){
        playerY = playerY + blockImgHeigth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left (){
    if (playerX >= 0){
        playerX = playerX - blockImgHeigth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right (){
    if (playerX <= 850){
        playerX = playerX + blockImgHeigth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}