/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }

    const newNums: number[] = [numbers[0], numbers[numbers.length - 1]];
    return newNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        !Number.isNaN(Number(num)) ? Number(num) : 0
    );
    //My version before Prettier made it ugly:
    //return numbers.map((num: string): number => (Number(num) !== NaN) ? (Number(num)) : (0));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        if (amount.length > 0 && amount.substring(0, 1) === "$") {
            amount = amount.substring(1);
        }

        if (Number.isNaN(Number(amount))) {
            return 0;
        }

        return Number(amount);
    });
    //Note to self: Multiline Lambda functions need their own curly brackets
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.map((message: string): string =>
        message.substring(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
    //My version of the above lamba function before Prettier made it ugly:
    //    messages = messages.map((message: string): string => (message.length - 1 === "!") ? (message.toUpperCase()): (message));

    messages = messages.filter(
        (message: string): boolean =>
            message.substring(message.length - 1) !== "?"
    );
    //My version of the above lamba function before Prettier made it ugly:
    //messages = messages.filter((message: string): string => message.substring(message.length - 1) !== "?");

    return messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    let isValid: boolean;
    isValid = true;

    colors.map(
        (color: string): boolean =>
            (isValid =
                isValid &&
                (color === "red" || color === "blue" || color === "green"))
    );
    //My version of the lambda above before Prettier made it unreadable:
    //colors.map((color: string): boolean => isValid = isValid && (color === "red" || color === "blue" || color === "green"));

    return isValid;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum: number = addends.reduce(
        (total: number, num: number): number => total + num,
        0
    );
    //My version of the above lambda before Prettier made it ugly:
    //const sum: number = addends.reduce((total: number, num: number): number => total + num, 0);

    let sumString: string = sum.toString() + "=";
    addends.map((num: number): string => (sumString += num.toString() + "+"));
    sumString = sumString.substring(0, sumString.length - 1); //Remove the extra "+" at the end

    return sumString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number;
    sum = 0;

    const negativeIndex: number = values.findIndex((value: number): boolean => {
        if (value >= 0) {
            sum += value;
        }
        return value < 0;
    }); //Why does this have to be a boolean if it returns a number?

    if (negativeIndex === -1) {
        return values.splice(values.length, 0, sum);
    }

    return values.splice(negativeIndex + 1, 0, sum);
}
