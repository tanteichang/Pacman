interface IGameConfig {
  width: number
  height: number
}

function createGame(config: IGameConfig): void {
  const canvas = document.querySelector('canvas');
  if (canvas === null) { throw new Error('canvas not found'); }

  canvas.width = config.width;
  canvas.height = config.height;

  const context = canvas.getContext('2d');
}

function init() {
  createGame({
    width: window.innerWidth,
    height: window.innerHeight,
  });
}

export default init;
