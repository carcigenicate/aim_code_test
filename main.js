/**
 * Returns "Fizz" if the provided number is a multiple of three, "Buzz" if it's a multiple of five, "FizzBuzz" if it's
 *   a multiple of both, and the passed number as a string if none of those are the case.
 * @param {number} n The number to return the message for
 * @returns {string} The message or stringified number
 * @throws Will throw if the passed object is not a number, or is a non-positive number.
 */
function fizzBuzzMessage(n) {
    if (typeof n !== "number") {
        throw new Error("The passed object must be a number.");
    } else if (n <= 0) {
        throw new Error("FizzBuzz is only defined for positive integers.");
    } else if (n % 15 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n.toString();
    }
}

/**
 * Returns an array of all the produced messages for the numbers in the range [startN, endN].
 * Will return an empty array if endN > startN.
 * @param startN The beginning number of the range
 * @param endN The ending number of the range (inclusive)
 * @returns {number[]} The array of produced messages
 */
function produceMessagesForRange(startN, endN) {
    const results = [];
    for (let n = startN; n <= endN; n++) {
        results.push(fizzBuzzMessage(n));
    }
    return results;
}

function main() {
    const messages = produceMessagesForRange(0, 100);
    console.log(messages.join("\n"));
}

// Only execute the main procedure if the script was run directly instead of imported.
if (!module.parent) {
  main();
}


module.exports = {
    fizzBuzzMessage: fizzBuzzMessage,
    produceMessagesForRange: produceMessagesForRange
};