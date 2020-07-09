import Brain from "./Brain.js";

export default class Dot {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.brain = new Brain(400);
    }

    show() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, 4, 4);
    }

    move() {
        if (this.brain.directions.length > this.brain.step) {
            this.acc = p5.Vector.fromAngle(this.brain.directions[brain.step++]);
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
}

// module.exports = { Dot };
