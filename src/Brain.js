class Brain {
    constructor(p5, size) {
        this.p5 = p5;
        this.directions = [];
        this.step = 0;
        this.randomize(size);
    }

    randomize(size) {
        for (let i = 0; i < size; i++) {
            let randomAngle = Math.random() * 2 * Math.PI;
            console.log(this.p5.Vector);
            this.directions.push(randomAngle);
        }
    }
}

export default Brain;
