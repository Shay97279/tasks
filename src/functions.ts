/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const Celsius = (temperature - 32) * (5 / 9);
    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0;

    if (first > 0) {
        sum = sum + first;
    }
    if (second > 0) {
        sum = sum + second;
    }
    if (third > 0) {
        sum = sum + third;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let newMessage = message.toUpperCase();
    newMessage = newMessage + "!";
    return newMessage;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let var1 = true;
    var1 = message.endsWith("?");
    return var1;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let result = null;
    if (word.toUpperCase() == "YES") {
        result = true;
    }
    if (word.toUpperCase() == "NO") {
        result = false;
    }
    return result;
}
