var windowHeight;
var windowWidth;

windowWidth = window.innerWidth;
windowHeight = window.innerHeigh;



function setup() {
	createCanvas(windowWidth,1080);  // 1080 monitor (fullscreen drawing)
}


function draw() {
	if(mouseIsPressed) {
		fill(0);
	}

	else {
		fill(255);
	}

	ellipse(mouseX, mouseY, 80, 80);
}

