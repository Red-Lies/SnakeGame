import "./styles.css";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

class SnackController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }
  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight() {
    this.slitherer.turnRight();
  }
  get snakePosition() {
    return this.slitherer.position;
  }
  get snakeDirection() {
    return this.slitherer.direction;
  }
  get worldWidth() {
    return this.snakeWorld.worldWidth;
  }
  get worldHeight() {
    return this.snakeWorld.worldHeight;
  }
}

export default SnackController;
