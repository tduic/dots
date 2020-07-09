import Brain from "./Brain";

class Dot {
    constructor(p5) {
        this.p5 = p5;
        // this.pos;
        // this.vel;
        // this.acc;
        this.brain = new Brain(p5, 400);
    }

    show() {
        this.p5.fill(0);
        this.p5.ellipse(this.pos.x, this.pos.y, 4, 4);
    }

    move() {
        if (this.brain.directions.length > this.brain.step) {
            this.acc = p5.Vector.fromAngle(
                this.brain.directions[this.brain.step++]
            );
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
}

export default Dot;
