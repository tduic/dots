import Brain from "./Brain";
import P5 from "p5";

class Dot {
    constructor(p5) {
        this.p5 = p5;
        this.brain = new Brain(400);
    }

    show() {
        this.p5.fill(0);
        this.p5.ellipse(this.pos.x, this.pos.y, 4, 4);
    }

    move() {
        if (this.brain.directions.length > this.brain.step) {
            this.acc = new P5.Vector.fromAngle(
                this.brain.directions[this.brain.step++]
            );
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
}

export default Dot;
