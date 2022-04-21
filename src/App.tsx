import "./styles.css";
import Snake from "./Snake";
import display from "./display";
import Point from "./Point";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import player from "./Player";
import AvoidWallPlayer from "./AvoidWallPlayer";
import checkerboard from "./Checkerboard.png";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
    if (gameCanvas) {
      const ctx = gameCanvas.getContext("2d");
      const floorImage = new Image(256, 256);
      floorImage.src = checkerboard;
      floorImage.onload = () => {
        ctx?.drawImage(floorImage, 0, 0);
      };
    }

    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const snakeOne = new Snake();
    const snakeTwo = new Snake();
    snakeOne.move(5);
    snakeTwo.move(8);
    snakeOne.move(4);
    display("SnakeOne moves a total of:", snakeOne.position, "squares");
    display("SnakeTwo moves a total of:", snakeTwo.position, "squares");
    const worldM = new WorldModel(snakeOne);
    worldM.update(3);
  }, []);
  return (
    <div className="App">
      <pre id="output">
        OUTPUT: <br />
      </pre>
      <canvas width="320" height="480" id="game" />
    </div>
  );
}
