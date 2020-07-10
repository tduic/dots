import Dot from "./Dot";

class Population {
    constructor(p5, size, goal) {
        this.p5 = p5;
        this.dots = [];
        this.popSize = size;
        this.goal = goal;
        this.initialize();
        this.fitnessSum = 0;
        this.gen = 0;
    }

    initialize() {
        for (let i = 0; i < this.popSize; i++) {
            this.dots.push(new Dot(this.p5, this.goal));
        }
    }

    show() {
        this.dots.map((e) => e.show());
    }

    update() {
        this.dots.map((e) => e.update());
    }

    calculateFitness() {
        this.dots.map((e) => e.calculateFitness());
    }

    allDotsDead() {
        for (let i = 0; i < this.dots.length; i++) {
            if (!(this.dots[i].dead || this.dots[i].reachedGoal)) return false;
        }
        return true;
    }

    calculateFitnessSum() {
        this.fitnessSum = 0;
        for (let i = 0; i < this.dots.length; i++) {
            this.fitnessSum += this.dots[i].fitness;
        }
    }

    getChild(parent) {
        let child = new Dot(this.p5, this.goal);
        child.brain.clone(parent);
        return child;
    }

    selectParent() {
        const rn = Math.random() * this.fitnessSum;

        let runningSum = 0;

        for (let i = 0; i < this.dots.length; i++) {
            runningSum += this.dots[i].fitness;
            if (runningSum > rn) return this.dots[i];
        }

        return null;
    }

    selection() {
        let newDots = [];
        this.calculateFitnessSum();

        for (let i = 0; i < this.dots.length; i++) {
            let parent = this.selectParent();
            let child = this.getChild(parent);
            newDots.push(child);
        }

        this.dots = newDots;
        this.gen++;
    }

    mutation() {
        this.dots.map((e) => e.brain.mutate());
    }
}

export default Population;
