import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Dot from "./Dot";

class App extends React.Component {
    y = 0;
    direction = "^";
    dot;

    setup = (p5, parentRef) => {
        p5.createCanvas(400, 400).parent(parentRef);
        this.dot = new Dot(p5);
        this.dot.pos = p5.createVector(p5.width / 2, p5.width / 2);
        this.dot.vel = p5.createVector(0, 1);
        this.dot.acc = p5.createVector(1, 0);
    };

    draw = () => {
        this.dot.show();
        this.dot.move();
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
