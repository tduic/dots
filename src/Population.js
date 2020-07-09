class Population {
    constructor(size) {
        this.dots = [];
        this.popSize = size;
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < this.popSize; i++) {
            this.dots.push(new Dot());
        }
    }

    show() {}
}
