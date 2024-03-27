console.log('Hello world!');

// Gets the canvas element
const canvas = document.getElementById("game-frame") as HTMLCanvasElement;

// Gets the canvas context in 2d
const ctx = canvas.getContext("2d");


/* Draw Rectangle */
// Fills the shapes with this color
ctx.fillStyle = "#0099FF";

// Draws a filled rectangle with the following parameters (x, y, width, height)
// (Basically 4 lines, fills the inside, and stroke() in one)
ctx.fillRect(100, 50, 50, 25);

/* Draw line */
// Moves to a point without leaving a line behind
ctx.moveTo(0, 0);
// Plans to draw a line from last point (0, 0) to this point (100, 100).
// Does NOT actually draw anything yet.
ctx.lineTo(100, 100);
// Actually draws everything in the queue
ctx.stroke();

/* Draw Circle */
ctx.beginPath();
// arc(x,y,r,startangle,endangle)
ctx.arc(200, 100, 20, 0, 2 * Math.PI);
ctx.stroke();

/* Draw Shape */
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(100,20);
ctx.lineTo(175,100);
ctx.lineTo(20,100);
ctx.lineTo(20,20);
ctx.stroke();

/* Draw Rotated Rectangle */
// Rotates around current canvas origin,
// which is default (0, 0) or the top left corner
ctx.rotate((50 * Math.PI) / 180);
ctx.fillStyle = "yellow";
ctx.fillRect(100, 0, 80, 20);
// (Undoing the rotation afterwards to return to normal to avoid lingering rotations for future drawings)
ctx.rotate(-(50 * Math.PI) / 180);

// Reset everything, including settings
// Could be what we need to do before drawing the next frame, but still need to test it out.
// ctx.reset();

// Clear everything displayed, but leaves all the other settings
// Could be what we want, might be faster? Internet is unclear.
// context.clearRect(0, 0, canvas.width, canvas.height);