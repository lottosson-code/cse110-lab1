import Konva from 'konva';

// Create the stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// Create the layer
const layer = new Konva.Layer();
stage.add(layer);

// Create the lemon group
const lemon = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
  draggable: true
});

// Create the lemon body
const body = new Konva.Ellipse({
  x: 0,
  y: 0,
  radiusX: 90,
  radiusY: 45,
  fill: 'yellow',
  stroke: '#c9a000',
  strokeWidth: 3
});

lemon.add(body);

// Create the lemon ends
const leftTip = new Konva.Line({
  points: [-75, -22, -115, 0, -75, 22],
  closed: true,
  fill: 'yellow',
  stroke: '#c9a000',
  strokeWidth: 3,
  lineJoin: 'round'
});

lemon.add(leftTip);

const rightTip = new Konva.Line({
  points: [75, -22, 115, 0, 75, 22],
  closed: true,
  fill: 'yellow',
  stroke: '#c9a000',
  strokeWidth: 3,
  lineJoin: 'round'
});

lemon.add(rightTip);

// Create the stem
const stem = new Konva.Line({
  points: [0, -39, 8, -53, 17, -57],
  stroke: '#6b4423',
  strokeWidth: 5,
  lineCap: 'round',
  lineJoin: 'round'
});

lemon.add(stem);

// Create the leaf
const leaf = new Konva.Ellipse({
  x: 15,
  y: -53,
  radiusX: 15,
  radiusY: 6,
  rotation: -25,
  fill: '#4caf50',
  stroke: '#287a32',
  strokeWidth: 1
});

lemon.add(leaf);

// Add the lemon to the layer
layer.add(lemon);

// Change the cursor on hover
lemon.on('mouseover', () => {
  stage.container().style.cursor = 'pointer';
});

lemon.on('mouseout', () => {
  stage.container().style.cursor = 'default';
});

// Enlarge the lemon when pressed
lemon.on('mousedown touchstart', () => {
  lemon.to({
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 0.1
  });
});

// Restore the lemon size when released
lemon.on('mouseup touchend', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.1
  });
});

stage.on('mouseup touchend', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.1
  });
});
