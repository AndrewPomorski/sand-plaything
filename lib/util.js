const GLOBAL_GRID_SIZE = 4;

const getMousePos = (canvas, e) => {
  let rect = canvas.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

export {getMousePos, GLOBAL_GRID_SIZE};