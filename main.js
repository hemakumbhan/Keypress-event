canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image="";

img_x = 100;
img_y = 100;

function add() {
	console.log("add");
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg(); // setting a function, onloading this variable
	img_imgTag.src = "Alpkey.png";   // load image
}

function uploadimg() {
	console.log("upload");
	ctx.drawImage(img_imgTag,0,0, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		alphabetkey();
	document.getElementById("d1").innerHTML="You pressed Alphabet key";
		}
		else if((keyPressed >=48 && keyPressed <=57)){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key";
		}
		else if((keyPressed >=37 && keyPressed <=40)){
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow key";
		}
		else if((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special key";
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
