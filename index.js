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
