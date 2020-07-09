import Brain from "./Brain";
import P5 from "p5";

class Dot {
    constructor(p5) {
        this.p5 = p5;
        this.brain = new Brain(400);
    }

    show() {
        this.p5.fill(0);
        console.log(this.pos);
        this.p5.ellipse(this.pos[0], this.pos[1], 4, 4);
        // this.p5.ellips(this.pos.x, this.pos.y, 4, 4);
    }

    move() {
        if (this.brain.directions.length > this.brain.step) {
            let tmp = P5.Vector.fromAngle(
                this.brain.directions[this.brain.step++]
            );
            this.acc[0] = tmp.x;
            this.acc[1] = tmp.y;
            // this.acc = P5.Vector.fromAngle(
            //     this.brain.directions[this.brain.step++]
            // );
        }

        // this.vel.add(this.acc);
        // this.pos.add(this.vel);
        this.vel[0] += this.acc[0];
        this.vel[1] += this.acc[1];
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

export default Dot;
