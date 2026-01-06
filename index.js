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

export function analyzeArray(array) {
    if (array.length === 0) throw new Error("Array is empty");

    let sum = 0;
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return {
        length: array.length,
        average: sum / array.length,
        min,
        max,
    };
    // // My first approach, time complexity O(3n), now o(n)
    // return {
    //     length: array.length,
    //     average: array.reduce((current, next) => current + next) / array.length,
    //     max: array.reduce((current, next) => (current > next ? current : next)),
    //     min: array.reduce((current, next) => (current < next ? current : next)),
    // };
}
