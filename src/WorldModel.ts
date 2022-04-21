import "./styles.css";
import Snake from "./Snake";

class WorldModel {
  private oneSnake: Snake;
  private width: number;
  private height: number;

  constructor(oneSnake: Snake, width: number, height: number) {
    this.oneSnake = oneSnake;
    this.width = width;
    this.height = height;
  }
  update(steps: number) {
    this.oneSnake.move(steps);
  }
  get oSnake() {
    return this.oneSnake;
  }

  get worldWidth() {
    return this.width;
  }

  get worldHeight() {
    return this.height;
  }
}

export default WorldModel;
