import {counter, returnNumber, returnVoid} from './counter-function';

describe("counter function", function() {
    let getA: returnNumber;
    let nextA: returnVoid;
    beforeEach(() => {
        [getA, nextA] = counter()
    })
    it("has initial value of zero", function() {
          expect(getA()).toBe(0);
    });
    it("can increment value by 1", function() {
        nextA();
        expect(getA()).toBe(1);
    });
    it("can create independent instances of counter", function() {
        const [getB, nextB] = counter(10);
        nextA();
        expect(getA()).toBe(1)
        nextB();
        expect(getB()).toBe(11)
    });
});
