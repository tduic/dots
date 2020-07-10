import Dot from "./Dot";

class Population {
    constructor(p5, size, goal, obstacle) {
        this.p5 = p5;
        this.dots = [];
        this.popSize = size;
        this.goal = goal;
        this.obstacle = obstacle;
        this.fitnessSum = 0;
        this.gen = 0;
        this.bestDot = 0;
        this.minStep = Number.MAX_SAFE_INTEGER;
        this.initialize();
    }

    initialize() {
        // initialize population by adding popSize num of dots into array
        for (let i = 0; i < this.popSize; i++) {
            this.dots.push(new Dot(this.p5, this.goal, this.obstacle));
        }
    }

    show() {
        // call show method for populations
        this.dots.map((e) => e.show());
    }

    update() {
        // call update method for population (if still in running for fittest)
        // eslint-disable-next-line
        this.dots.map((e) => {
            e.brain.step > this.minStep ? (e.dead = true) : e.update();
        });
    }

    calculateFitness() {
        // calculate fitness for population
        this.dots.map((e) => e.calculateFitness());
    }

    allDotsDead() {
        // return true if all dots are dead or have reached goal
        for (let i = 0; i < this.dots.length; i++) {
            if (!(this.dots[i].dead || this.dots[i].reachedGoal)) return false;
        }
        return true;
    }

    calculateFitnessSum() {
        // calculate sum of population's fitness
        this.fitnessSum = 0;
        // eslint-disable-next-line
        this.dots.map((e) => {
            this.fitnessSum += e.fitness;
        });
    }

    getChild(parent) {
        // create new child with same brain as parent
        let child = new Dot(this.p5, this.goal, this.obstacle);
        child.brain.clone(parent);
        return child;
    }

    selectParent() {
        // select parent from dots array
        const rn = Math.random() * this.fitnessSum;

        let runningSum = 0;
        for (let i = 0; i < this.dots.length; i++) {
            runningSum += this.dots[i].fitness;
            if (runningSum > rn) return this.dots[i];
        }

        console.log("oops");

        return null;
    }

    setBestDot() {
        let max = 0;
        let maxIndex = 0;
        // eslint-disable-next-line
        this.dots.map((e, i) => {
            if (e.fitness > max) {
                max = e.fitness;
                maxIndex = i;
            }
        });
        this.bestDot = maxIndex;
        if (this.dots[this.bestDot].reachedGoal) {
            this.minStep = this.dots[this.bestDot].brain.step;
            console.log(`best is ${this.minStep} steps`);
        }
    }

    selection() {
        // selection method
        let newDots = [];
        this.setBestDot();
        this.calculateFitnessSum();

        newDots.push(this.getChild(this.dots[this.bestDot]));
        newDots[0].isBest = true;

        for (let i = 1; i < this.dots.length; i++) {
            let parent = this.selectParent();
            let child = this.getChild(parent);
            newDots.push(child);
        }

        this.dots = newDots;
        this.gen++;
    }

    mutation() {
        // mutation method
        this.dots.map((e) => e.brain.mutate());
    }
}

export default Population;
