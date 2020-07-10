import P5 from "p5";

class Ellipse {
    constructor(x, y) {
        this.pos = new P5.Vector(x, y);
    }
}

class Line {
    constructor(x1, x2, y1, y2) {
        this.p1 = new P5.Vector(x1, y1);
        this.p2 = new P5.Vector(x2, y2);
    }
}

export { Ellipse, Line };
