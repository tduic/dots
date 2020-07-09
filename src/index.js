import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Dot from "./Dot";

class App extends React.Component {
    dot;

    setup = (p5, parentRef) => {
        p5.createCanvas(4000, 4000).parent(parentRef);
        this.dot = new Dot(p5);
        this.dot.pos = [p5.width / 2, p5.height / 2];
        this.dot.vel = [0, 0];
        this.dot.acc = [0, 0];
        // this.dot.pos = p5.createVector(p5.width / 2, p5.height / 2);
        // this.dot.pos.x = p5.width / 2;
        // this.dot.pos.y = p5.height / 2;
        // this.dot.vel = p5.createVector(0, 0);
        // this.dot.vel.x = 0;
        // this.dot.vel.y = 0;
        // this.dot.acc = p5.createVector(0, 0);
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
