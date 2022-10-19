import {counter} from './counter-function';

describe("counter function", function() {
    const [getA, nextA] = counter()
    it("has initial value of zero", function() {
          const initialVal = getA();
          expect(initialVal).toBe(0);
    });
    it("can increment initial value", function() {
        nextA();
        expect(getA()).toBe(1);
    });
    it("can create independent instances of counter", function() {
        const [getB, nextB] = counter(10);
        expect(getA()).toBe(1)
        nextB();
        expect(getB()).toBe(11)
    });
});
