var img;
var img2;
function preload () {
  img = loadImage ("sup.png");
  img2 = loadImage ("GA.jpg");
  img3 = loadImage ("sup2.png");
}
function setup() {
  createCanvas(1480, 860);
}

function draw() {


  background (255, 0, 0)
  image(img3, mouseX, mouseY);   // Top
  image(img3, mouseX/2, mouseY/2); // Middle
  image(img3, mouseX*2, mouseY*2); // Bottom

   if (mouseIsPressed == true) {
   createCanvas(1480, 860);
image(img2, 0, 0);
  image(img, mouseX, mouseY);   // Top
  image(img, mouseX/2, mouseY/2); // Middle
  image(img, mouseX*2, mouseY*2); // Bottom
     noCursor();
  }
  else {
    fill(0);   // Black
    noCursor();

  }




}
