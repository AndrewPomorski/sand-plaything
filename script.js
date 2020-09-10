import {particles} from './lib/particles.js';
import {getMousePos} from './lib/util.js';

const FPS = 30;
const entities = [];

const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const dpi = window.devicePixelRatio;

const style_height = +getComputedStyle(canvas)
  .getPropertyValue("height")
  .slice(0, -2);
const style_width = +getComputedStyle(canvas)
  .getPropertyValue("width")
  .slice(0, -2);

canvas.setAttribute("height", style_height * dpi);
canvas.setAttribute("width", style_width * dpi);


canvas.addEventListener('mousemove', evt => {
    const mousePos = getMousePos(canvas, evt);
    const newPart = new particles.sand;
    newPart.pos = {
      x: mousePos.x * 2,
      y: mousePos.y * 2
    }
    entities.push(newPart);
});

var updateDisplay = function() {
  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  
  for (let i = 0; i < entities.length; i++) {
    const ent = entities[i];
    ctx.fillStyle = ent.color;
    ent.update();
    ctx.fillRect(ent.pos.x, ent.pos.y, 8, 8);
  }
  


  setTimeout(() => {
    requestAnimationFrame(() => {
      updateDisplay();
    });
  }, 1000 / FPS);
};

updateDisplay();
