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
    const arrayFromString = string.split("");
    const finalArray = [];
    const newFactor = factor % 26;

    arrayFromString.forEach((letter) => {
        if (!isLetter(letter)) {
            finalArray.push(letter);
        } else {
            const charCode = letter.charCodeAt(0);
            let newCharCode = charCode + newFactor;
            if (isLowerCase(letter) && newCharCode > 122) {
                newCharCode = 97 + (newCharCode % 123);
            }
            if (isUpperCase(letter) && newCharCode > 90) {
                newCharCode = 65 + (newCharCode % 91);
            }
            const newLetter = String.fromCharCode(newCharCode);
            finalArray.push(newLetter);
        }
    });
    return finalArray.join("");

    function isLowerCase(letter) {
        // Reg expression
        return /[a-z]/.test(letter);

        // // if statement
        // if (letter >= "a" && letter <= "z") return true;
        // return false;

        // // using char code
        // const code = letter.charCodeAt(0);
        // if (code >= 97 && code <= 122) return true;
        // return false;
    }
    function isUpperCase(letter) {
        // Reg expression
        return /[A-Z]/.test(letter);

        // // if statement
        // if (letter >= "A" && letter <= "Z") return true;
        // return false;

        // // using char code
        // const code = letter.charCodeAt(0);
        // if (code >= 65 && code <= 90) return true;
        // return false;
    }

    function isLetter(letter) {
        return /[a-z]/.test(letter) || /[A-Z]/.test(letter);
    }
}
