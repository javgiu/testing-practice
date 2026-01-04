import { capitalize, reverseString } from "../index.js";

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
