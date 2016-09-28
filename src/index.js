import rocky from 'rocky';

/* eslint-disable no-param-reassign */

const fractionToRadian = fraction => fraction * 2 * Math.PI;

const drawHand = (ctx, cx, cy, angle, length, color) => {
  // Find the end points
  const x2 = cx + Math.sin(angle) * length;
  const y2 = cy - Math.cos(angle) * length;

  // Configure how we want to draw the hand
  ctx.lineWidth = 8;
  ctx.strokeStyle = color;

  // Begin drawing
  ctx.beginPath();

  // Move to the center point, then draw the line
  ctx.moveTo(cx, cy);
  ctx.lineTo(x2, y2);

  // Stroke the line (output to display)
  ctx.stroke();
};

rocky.on('draw', ({ context: ctx }) => {
  const d = new Date();

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  const w = ctx.canvas.unobstructedWidth;
  const h = ctx.canvas.unobstructedHeight;

  // Determine the center point of the display
  // and the max size of watch hands
  const cx = w / 2;
  const cy = h / 2;

  // -20 so we're inset 10px on each side
  const maxLength = (Math.min(w, h) - 20) / 2;

  // Calculate the minute hand angle
  const minuteFraction = (d.getMinutes()) / 60;
  const minuteAngle = fractionToRadian(minuteFraction);

  // Draw the minute hand
  drawHand(ctx, cx, cy, minuteAngle, maxLength, 'white');

  // Calculate the hour hand angle
  const hourFraction = (d.getHours() % 12 + minuteFraction) / 12;
  const hourAngle = fractionToRadian(hourFraction);

  // Draw the hour hand
  drawHand(ctx, cx, cy, hourAngle, maxLength * 0.6, 'lightblue');
});

rocky.on('minutechange', () => {
  // Display a message in the system logs
  console.log('Another minute with your Pebble!');

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});
