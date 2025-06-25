//Retrieve background canvas and establish rendering context.
const main = document.getElementById("animBackground");
const rend = main.getContext("2d");

//Frame counter, blob radius scale, and permitted 'blob' colors with alpha values.
var fTime = 0;
var blobRad = 1;
const cols = ["rgba(137, 180, 250, ", "rgba(166, 227, 161, ", "rgba(249, 226, 175, ", "rgba(245, 194, 231, "];
var colAlpha = [1, 1, 1, 1];
var colAlphaTarget = [1, 1, 1, 1];

//Permit the canvas to rescale to the window.
var width, height;
function size() {
	rend.canvas.width = window.innerWidth;
	rend.canvas.height = window.innerHeight;
	width = main.width;
	height = main.height;
}
size();
window.addEventListener("resize", size);

//Watch the mouse coordinates to add a slight offset to the effect when the mouse is moved.
var mouseX, mouseY;
function mouse(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
}
window.addEventListener("mousemove", mouse);
mouseX = width/2;
mouseY = height/2;

//Full clear the canvas for the next frame.
function forget() {
	rend.clearRect(0, 0, width, height);
}

//Particle array and associated class.
var pars = [];
class Part {
	constructor(r, theta, rad, col) {
		this.r = r;
		this.theta = theta;
		this.rad = rad;
		this.col = col;
	}

	show() {
		//Draw the particle with respect to color, distance from origin, mouse position, frame count, and radius.
		rend.fillStyle = cols[this.col] + String(colAlpha[this.col]) + ")";
		rend.beginPath();
		rend.arc(width/2 + (1-blobRad) * (this.r*Math.cos(fTime/(this.r) + this.theta) + (width/2 - mouseX)/100 - this.rad/2), height/2 + (1-blobRad) * (this.r*Math.sin(fTime/(this.r) + this.theta) + (height/2 - mouseY)/100 - this.rad/2), this.rad*10*(1-blobRad), 0, 6.28);
		rend.fill();
	}
}

//Make blobs transparent depending on which buttons are pressed.
function blobHide(ind, set) {
	for(var i = 0; i < 4; i ++) {
		if(ind != i) {colAlphaTarget[i] = set;}
	}
}

//Assign events to each button.
document.getElementById("discordlink").addEventListener("mouseenter", () => blobHide(0, 0));
document.getElementById("discordlink").addEventListener("mouseleave", () => blobHide(0, 1));

document.getElementById("github").addEventListener("mouseenter", () => blobHide(1, 0));
document.getElementById("github").addEventListener("mouseleave", () => blobHide(1, 1));

document.getElementById("pcparts").addEventListener("mouseenter", () => blobHide(2, 0));
document.getElementById("pcparts").addEventListener("mouseleave", () => blobHide(2, 1));

document.getElementById("youtube").addEventListener("mouseenter", () => blobHide(3, 0));
document.getElementById("youtube").addEventListener("mouseleave", () => blobHide(3, 1));

//Randomly generate 50 'blobs'.
for(var i = 0; i < 50; i ++) {
	pars.push(new Part((Math.random()*width/250)+i*width/60, Math.random()*(6.28), (Math.max(i, 10)*width)/2000, Math.floor(Math.random()*4)));
}

//Main function.
function draw() {
	forget();
	
	//Progress time. Note - frameRate is NOT capped.
	fTime += 0.3;
	
	//Intro animation.
	blobRad *= 0.98;
	
	//Display all objects.
	for(var i = pars.length - 1; i > 0; i --) {
		pars[i].show();
	}
	
	//Make color transparency approach the target value.
	for(var i = 0; i < 4; i ++) {
		colAlpha[i] = (colAlpha[i]*19 + colAlphaTarget[i]*1) / 20;
	}
	
	//Restart the main loop after rendering.
	window.requestAnimationFrame(draw);
}
draw();