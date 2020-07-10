class Brain {
    constructor(size) {
        this.directions = [];
        this.step = 0;
        this.randomize(size);
    }

    randomize(size) {
        for (let i = 0; i < size; i++) {
            let randomAngle = Math.random() * 2 * Math.PI;
            this.directions.push(randomAngle);
        }
    }

    clone(parent) {
        this.directions = [...parent.brain.directions];
    }

    mutate() {
        let mutRate = 1;
        for (let i = 0; i < this.directions.length; i++) {
            const rn = Math.floor(Math.random() * 100);
            if (rn < mutRate) {
                this.directions[i] = Math.random() * 2 * Math.PI;
            }
        }
    }
}

export default Brain;
