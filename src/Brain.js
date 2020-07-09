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
}

export default Brain;
