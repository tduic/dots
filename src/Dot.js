import Brain from "./Brain";
import { Ellipse } from "./Obstacles";
import P5 from "p5";

class Dot {
    constructor(p5, goal, obstacles) {
        this.p5 = p5;
        this.pos = new P5.Vector(p5.width / 2, p5.height - 10);
        this.vel = new P5.Vector(0, 0);
        this.acc = new P5.Vector(0, 0);
        this.brain = new Brain(400);
        this.dead = false;
        this.reachedGoal = false;
        this.goal = goal;
        this.obstacles = obstacles;
        this.fitness = 0;
        this.isBest = false;
    }

    show() {
        if (this.isBest) {
            this.p5.fill(0, 0, 255);
            this.p5.ellipse(this.pos.x, this.pos.y, 8, 8);
        } else {
            this.p5.fill(0);
            this.p5.ellipse(this.pos.x, this.pos.y, 4, 4);
        }
    }

    move() {
        if (this.brain.directions.length > this.brain.step) {
            this.acc = new P5.Vector.fromAngle(
                this.brain.directions[this.brain.step++]
            );
        } else {
            this.dead = true;
        }

        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
    }

    checkObstacles(ob) {
        return ob instanceof Ellipse
            ? this.p5.dist(this.pos.x, this.pos.y, ob.pos.x, ob.pos.y) < 7
            : this.pos.x >= ob.p1.x &&
                  this.pos.y >= ob.p1.y - 5 &&
                  this.pos.x <= ob.p2.x &&
                  this.pos.y <= ob.p2.y + 5;
    }

    update() {
        if (!(this.dead || this.reachedGoal)) {
            this.move();
            if (
                this.pos.x < 2 ||
                this.pos.y < 2 ||
                this.pos.x > this.p5.width - 2 ||
                this.pos.y > this.p5.height - 2
            ) {
                this.dead = true;
            } else if (
                this.p5.dist(
                    this.pos.x,
                    this.pos.y,
                    this.goal.pos.x,
                    this.goal.pos.y
                ) < 5
            ) {
                this.reachedGoal = true;
            } else {
                // eslint-disable-next-line
                this.obstacles.map((e) => {
                    this.dead = this.dead || this.checkObstacles(e);
                });
            }
        }
    }

    calculateFitness() {
        if (this.reachedGoal) {
            this.fitness = 1 / 16 + 10000 / this.brain.step ** 2;
        } else {
            let distToGoal = this.p5.dist(
                this.pos.x,
                this.pos.y,
                this.goal.pos.x,
                this.goal.pos.y
            );
            this.fitness = 1 / distToGoal ** 2;
        }
    }
}

export default Dot;
