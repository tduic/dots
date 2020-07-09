import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Dot from "./Dot";
import P5 from "p5";

class App extends React.Component {
    dot;

    setup = (p5, parentRef) => {
        p5.createCanvas(600, 600).parent(parentRef);
        this.dot = new Dot(p5);
        this.dot.pos = new P5.Vector(p5.width / 2, p5.height - 10);
        this.dot.vel = new P5.Vector(1, 0);
        this.dot.acc = new P5.Vector(0, 1);
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
