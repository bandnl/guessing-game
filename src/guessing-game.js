class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.midValue = Math.round(this.minValue + (this.maxValue - this.minValue) / 2);
        return this.midValue;
    }

    lower() {
        this.maxValue = this.midValue;
    }

    greater() {
        this.minValue = this.midValue;
    }
}

module.exports = GuessingGame;
