import { GLOBAL_GRID_SIZE } from './util.js';

const particles = {
  sand: function(x, y) {
    this.color = "#c2b280";
    this.pos = {
      x: x,
      y: y,
    };
    this.update = function(){
      if (this.pos.y + 4 <= 600){
        this.pos.y += GLOBAL_GRID_SIZE;        
      }
    }
  }
};

export {particles};