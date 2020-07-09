import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import "./styles.css";
import Dot from "./Dot";
// import P5 from "p5";

class App extends React.Component {
    dot;

    setup = (p5, parentRef) => {
        p5.createCanvas(600, 600).parent(parentRef);
        this.dot = new Dot(p5);
    };

    draw = () => {
        this.dot.show();
        this.dot.update();
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
