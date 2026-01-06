export function capitalize(string) {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: (a, b) => a - b,
    divide: (a, b) => {
        if (b === 0) return undefined;
        return a / b;
    },
    multiply: (a, b) => a * b,
};

export function caesarCipher(string, factor) {
    if (factor === 0) return string;
    const normalizedFactor = ((factor % 26) + 26) % 26;

    return string
        .split("")
        .map((char) => {
            const code = char.charCodeAt(0);

            // Lower cases (a-z: 97-122)
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(
                    ((code - 97 + normalizedFactor) % 26) + 97
                );
            }

            // Upper cases (A-Z: 65-90)
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(
                    ((code - 65 + normalizedFactor) % 26) + 65
                );
            }

            // Is not a letter
            return char;
        })
        .join("");
}
