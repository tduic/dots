import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
// import Dot from "./Dot";
import Goal from "./Goal";
import Population from "./Population";
// import P5 from "p5";

class App extends React.Component {
    test;
    goal;

    setup = (p5, parentRef) => {
        p5.createCanvas(600, 600).parent(parentRef);
        this.goal = new Goal(300, 10);
        this.test = new Population(p5, 1000, this.goal);
    };

    draw = (p5) => {
        p5.background(220);
        p5.fill(255, 0, 0);
        p5.ellipse(this.goal.pos.x, this.goal.pos.y, 10, 10);

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
