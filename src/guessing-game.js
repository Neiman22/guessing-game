class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let mid = Math.round((this.max - this.min) / 2 + this.min);
        this.mid = mid;
        return mid;
    }
    
    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
