class Population {
    constructor() {
        this.dots = [];
        this.mutationRate;
        this.fitnessSum;
        this.dotsStep = 0;
        this.instructionLength;
        this.bestDot;
        this.minSteps;
    }

    Population(size, instructionSize, mr) {
        this.instructionLength = instructionSize;
        this.minSteps = instructionSize;
        let dot = new Dot(size);
    }
}
