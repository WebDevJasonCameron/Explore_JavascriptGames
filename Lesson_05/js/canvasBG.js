// Create linear gradient
const grad = ctx.createLinearGradient(0, 100, 280, 100);
grad.addColorStop(0, "lightblue");
grad.addColorStop(1, "darkblue");

// Fill rectangle with gradient
ctx.fillStyle = grad;
ctx.fillRect(window.innerWidth, window.innerHeight, 280, 130);

