import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from "../index.js";

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

describe("Caesar Cipher function", () => {
    describe("Works with single characters", () => {
        test("Encrypt a simple letter with factor 1", () => {
            expect(caesarCipher("a", 1)).toBe("b");
            expect(caesarCipher("b", 1)).toBe("c");
        });
        test("Encrypt z to go back to previous letters", () => {
            expect(caesarCipher("z", 1)).toBe("a");
            expect(caesarCipher("z", 5)).toBe("e");
        });
        test("Encrypt different letter to go back to previous letters", () => {
            expect(caesarCipher("x", 5)).toBe("c");
            expect(caesarCipher("w", 8)).toBe("e");
        });
        test("Encrypt with factors higher than 25", () => {
            expect(caesarCipher("a", 50)).toBe("y");
            expect(caesarCipher("w", 80)).toBe("y");
        });
        test("Works with upper cases", () => {
            expect(caesarCipher("A", 50)).toBe("Y");
            expect(caesarCipher("W", 80)).toBe("Y");
            expect(caesarCipher("X", 5)).toBe("C");
            expect(caesarCipher("W", 8)).toBe("E");
        });
        test("Return the same character if is not a letter", () => {
            expect(caesarCipher(".", 2)).toBe(".");
            expect(caesarCipher(" ", 2)).toBe(" ");
        });
    });
    describe("Works with words and sentences", () => {
        test("Encrypt a simple word", () => {
            expect(caesarCipher("word", 5)).toBe("btwi");
        });
        test("Encrypt a word with punctuation", () => {
            expect(caesarCipher("wo.rd!", 5)).toBe("bt.wi!");
        });
        test("Encrypt a sentence which use punctuation", () => {
            expect(caesarCipher("My mom loves me, so MUCH!", 10)).toBe(
                "Wi wyw vyfoc wo, cy WEMR!"
            );
        });
    });
});

describe("Analyze Array function", () => {
    test("returns an object with the array length", () => {
        expect(analyzeArray([1])).toMatchObject({ length: 1 });
        expect(analyzeArray([1, 2])).toMatchObject({ length: 2 });
    });
    test("return length and average", () => {
        expect(analyzeArray([1])).toMatchObject({ length: 1, average: 1 });
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
            length: 6,
            average: 4,
        });
    });
    test("return length, max, min nad average", () => {
        expect(analyzeArray([1])).toEqual({
            length: 1,
            average: 1,
            max: 1,
            min: 1,
        });
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            length: 6,
            max: 8,
            min: 1,
        });
    });
});
