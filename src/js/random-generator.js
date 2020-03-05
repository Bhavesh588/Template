export class RandomGenerator {
    static randomInteger() {
        return Math.ceil(Math.random() * 100);
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (min - min + 1)) + min;
    }
}
