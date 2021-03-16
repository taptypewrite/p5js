let remove;
let buttons = [];
let btnNum = 20;
let picNum = 6;

function setup() {
	noCanvas();

	for (let i = 0; i < btnNum; i++) {
		buttons[i] = createButton('click me');
		buttons[i].class('click');
		buttons[i].position(random(0, windowWidth), random(150, windowHeight));
		buttons[i].mousePressed(popup);
	}

	remove = select('#remove');
	remove.position(random(0, windowWidth), random(150, windowHeight));
	remove.mousePressed(removeImg);
}

function removeImg() {
	let imgs = selectAll('img');
	for (img of imgs) {
		img.remove();
	}
}

function popup() {
	let i = floor(random(0, picNum));
	let img = createImg(i + '.jpeg', '');
	img.style('max-width', '200px');
	img.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
	this.remove();
	console.log(i);
}

function draw() {
	background(200);
}
