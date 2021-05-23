let img;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//bresenham
	alBre(200,0,300,100);
	alBre(200,50,300,50);
	alBre(250,0,250,100);
	alBre(300,0,200,100);


	//punto pendiente
	ecuPP(0,0,100,100);
	ecuPP(0,50,100,50);
	ecuPP(50,0,50,100);
	ecuPP(0,100,100,0);

	//dda
	dda(400,0,500,100);
	dda(400,50,500,50);
	dda(450,0,450,100);
	dda(500,0,400,100);
}

function alBre(x1,y1,x2,y2){
	let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
	let ddy = 2*dy;
    let dxy = 2*dy - 2*dx;

	let sx = (x1 < x2) ? 1 : -1;
	if(x1 == x2) sx = 0;
    let sy = (y1 < y2) ? 1 : -1;
	if(y1 == y2) sy = 0;
	
	let p = ddy - dx;

	let i=0;

	if(dx == 0){
		d = dy;
	}else{
		d = dx;
	}

	while(i != d){
		if (x1 === x2 && y1 === y2) break;
		if(p<0){
			point(x1+=sx , y1);
			p += ddy;
		}else{
			point(x1+=sx, y1+=sy);
			p += dxy;
		}
		console.log(x1,y1);
		i++;
	}
}

function ecuPP(x1,y1,x2,y2){
	let x = x1;
	let y = y1;
	let stepX = 1;
	let stepY = 1;
	const dx = x2 - x1;
	const dy = y2 - y1;

	if (dx == 0) {
		if (dy < 0) stepY = -1;

		while(y != y2){
			point(x,y);
			y += stepY;
		}
	}
	else{
		const m = dy / dx;
		const b = y1 - m * x1;

		if (dx < 0) stepX = -1;
		while(x != x2){
			point(x,y);
			x += stepX;
			y = m * x + b;
		}
	}

	
}

function dda(x1,y1,x2,y2){
	let x = x1;
	let y = y1;
	let stepX = 1;
	let stepY = 1;
	const dx = x2 - x1;
	const dy = y2 - y1;
	const m = dy / dx;

	if (m >= 0) {
		if (m <= 1) {
			if (dx > 0) {
				while(x < x2){
					point(x,y);
					x++;
					y = y + m;
				}
			}
			else{
				while(x > x2){
					point(x,y);
					x--;
					y = y - m;
				}
			}
		}
		else{
			while(y < y2){
				point(x,y);
				y++;
				x = x + 1/ m;
			}
		}
	}
	else{
		if (m <= -1) {
			while(x > x2){
				point(x,y);
				x--;
				y = y - m;
			}
		}
		else{
			while(y2 < y){
				point(x,y);
				y--;
				x = x - 1/ m;
			}
		}
	}


}