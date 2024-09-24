class GuessingGame {
    constructor() {
        this.maxValue = null;
        this.minValue = null;
        this.middle = null;

    }

    setRange(min, max) {
        this.maxValue = max;
        this.minValue = min;
    }

    guess() {
        this.middle = Math.round((this.minValue + (this.maxValue - this.minValue) / 2));
        return this.middle;
    }

    lower() {
        this.maxValue = this.middle;
    }

    greater() {
        this.minValue = this.middle;
    }
}

module.exports = GuessingGame;
