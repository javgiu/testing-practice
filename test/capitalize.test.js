import { capitalize } from "../capitalize";

describe("capitalize function", () => {
    test("capitalize javier", () => {
        expect(capitalize("javier")).toBe("Javier");
    });

    test("capitalize giulianna", () => {
        expect(capitalize("giulianna")).toBe("Giulianna");
    });
});
