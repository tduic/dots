import * as React from "react";
import Dot from "./Dot.js";

let dot;

function setup() {
    createCanvas(1000, 1000);
    dot = new Dot();
}

function draw() {
    dot.show();
    dot.move();
}
