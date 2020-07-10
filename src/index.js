import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Goal from "./Goal";
import Obstacle from "./Obstacle";
import Population from "./Population";

class App extends React.Component {
    test;
    goal;
    obstacle;

    setup = (p5, parentRef) => {
        p5.createCanvas(1000, 1000).parent(parentRef);

        //set up goal and obstacle
        this.goal = new Goal(p5.width / 2, 10);
        this.obstacle = new Obstacle(p5.width / 2, p5.height / 2);

        // create population
        this.test = new Population(p5, 1000, this.goal, this.obstacle);
    };

    draw = (p5) => {
        p5.background(220);

        // draw goal
        p5.fill(255, 0, 0);
        p5.ellipse(this.goal.pos.x, this.goal.pos.y, 10, 10);

        // draw obstacle
        p5.fill(0, 255, 0);
        p5.ellipse(this.obstacle.pos.x, this.obstacle.pos.y, 12, 12);

        if (this.test.allDotsDead()) {
            // new generation
            this.test.calculateFitness();
            this.test.selection();
            this.test.mutation();
        } else {
            // update dots in population
            this.test.show();
            this.test.update();
        }
    };

    render() {
        return (
            <div className="App">
                <h1>react-p5</h1>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
