import { capitalize, reverseString, calculator } from "../index.js";

describe("capitalize function", () => {
    test("capitalize javier", () => {
        expect(capitalize("javier")).toBe("Javier");
    });

    test("capitalize giulianna", () => {
        expect(capitalize("giulianna")).toBe("Giulianna");
    });
});

describe("reverseString function", () => {
    test("reverse 123456789", () => {
        expect(reverseString("123456789")).toBe("987654321");
    });

    test("reverse javier", () => {
        expect(reverseString("javier")).toBe("reivaj");
    });
});

describe("calculator", () => {
    const a = 5,
        b = 23,
        c = 10,
        d = 9;
    test("add", () => {
        expect(calculator.add(a, c)).toBe(a + c);
        expect(calculator.add(b, d)).toBe(b + d);
    });

    test("subtract", () => {
        expect(calculator.subtract(a, b)).toBe(a - b);
        expect(calculator.subtract(c, d)).toBe(c - d);
    });

    test("multiply", () => {
        expect(calculator.multiply(a, b)).toBe(a * b);
        expect(calculator.multiply(c, d)).toBe(c * d);
    });

    describe("divide", () => {
        test("divide two numbers", () => {
            expect(calculator.divide(a, b)).toBe(a / b);
            expect(calculator.divide(c, d)).toBe(c / d);
        });

        test("divide by 0 return undefined", () => {
            expect(calculator.divide(a, 0)).toBeUndefined();
        });
    });
});
