import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Goal from "./Goal";
import { Ellipse, Line } from "./Obstacles";
import Population from "./Population";

class App extends React.Component {
    test;
    goal;
    obstacles = [];

    setObstacles = (p5) => {
        // for (let i = 0; i < num; i++) {
        //     const rw = Math.floor(Math.random() * p5.width);
        //     const rh = Math.floor(Math.random() * p5.height);
        //     this.obstacles.push(new Ellipse(rw, rh));
        // }

        // this.obstacles.push(hnew Ellipse(300, 200));
        this.obstacles.push(new Line(0, 600, 800, 800));
        this.obstacles.push(new Line(400, 1000, 500, 500));
        this.obstacles.push(new Line(0, 600, 200, 200));
        console.log(this.obstacles);
    };

    setup = (p5, parentRef) => {
        p5.createCanvas(1000, 1000).parent(parentRef);

        //set up goal and obstacles
        this.goal = new Goal(p5.width / 2, 10);
        // this.setObstacle(p5, Math.floor(Math.random() * 10));
        // this.setObstacleLine(p5);
        this.setObstacles(p5);

        // create population
        this.test = new Population(p5, 2000, this.goal, this.obstacles);
    };

    drawEllipse = (p5, e) => {
        p5.stroke(0, 0, 0);
        p5.strokeWeight(1);
        p5.fill(255, 0, 0);
        p5.ellipse(e.pos.x, e.pos.y, 10, 10);
    };

    drawLine = (p5, e) => {
        p5.stroke(255, 0, 0);
        p5.strokeWeight(10);
        p5.line(e.p1.x, e.p1.y, e.p2.x, e.p2.y);
    };

    draw = (p5) => {
        p5.background(220);

        // draw goal
        p5.fill(0, 255, 0);
        p5.ellipse(this.goal.pos.x, this.goal.pos.y, 10, 10);

        // draw obstacle
        // p5.fill(0, 255, 0);
        // p5.strokeWeight(10);
        // eslint-disable-next-line
        this.obstacles.map((e) => {
            e instanceof Ellipse
                ? this.drawEllipse(p5, e)
                : this.drawLine(p5, e);
        });

        p5.stroke(0, 0, 0);
        p5.strokeWeight(1);

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
