const assert = require('assert').strict;
const { describe, it } = require('mocha');

const { fizzBuzzMessage, produceMessagesForRange } = require('../main');

const THREE_MULT_MSG = "Fizz";
const FIVE_MULT_MSG = "Buzz";
const FIFTEEN_MULT_MSG = `${THREE_MULT_MSG}${FIVE_MULT_MSG}`;

describe('Message producer', () => {
    it("should produce 'Fizz' if the number is a multiple of three but not five", () => {
        assert.equal(fizzBuzzMessage(3), THREE_MULT_MSG);
        assert.equal(fizzBuzzMessage(6), THREE_MULT_MSG);
        assert.equal(fizzBuzzMessage(9), THREE_MULT_MSG);
        assert.equal(fizzBuzzMessage(27), THREE_MULT_MSG);
        assert.equal(fizzBuzzMessage(2997), THREE_MULT_MSG);
    });

    it("should produce 'Buzz' if the number is a multiple of five but not three", () => {
        assert.equal(fizzBuzzMessage(5), FIVE_MULT_MSG);
        assert.equal(fizzBuzzMessage(10), FIVE_MULT_MSG);
        assert.equal(fizzBuzzMessage(20), FIVE_MULT_MSG);
        assert.equal(fizzBuzzMessage(50), FIVE_MULT_MSG);
        assert.equal(fizzBuzzMessage(2995), FIVE_MULT_MSG);
    });

    it("should produce 'FizzBuzz' if the number is a multiple of three and five", () => {
        assert.equal(fizzBuzzMessage(15), FIFTEEN_MULT_MSG);
        assert.equal(fizzBuzzMessage(30), FIFTEEN_MULT_MSG);
        assert.equal(fizzBuzzMessage(45), FIFTEEN_MULT_MSG);
        assert.equal(fizzBuzzMessage(90), FIFTEEN_MULT_MSG);
        assert.equal(fizzBuzzMessage(2985), FIFTEEN_MULT_MSG);
    });

    it("should return the stringified number if the number is not a multiple of three or five", () => {
        assert.equal(fizzBuzzMessage(14), "14");
        assert.equal(fizzBuzzMessage(29), "29");
        assert.equal(fizzBuzzMessage(44), "44");
        assert.equal(fizzBuzzMessage(89), "89");
        assert.equal(fizzBuzzMessage(2984), "2984");
    });

    it("should raise an error if a non-positive number is passed", () => {
        assert.throws(() => fizzBuzzMessage(0));
        assert.throws(() => fizzBuzzMessage(-1));
        assert.throws(() => fizzBuzzMessage(-10));
    });

    it("should raise an error if a non-number is passed", () => {
        assert.throws(() => fizzBuzzMessage("1"));
        assert.throws(() => fizzBuzzMessage({}));
        assert.throws(() => fizzBuzzMessage([]));
        assert.throws(() => fizzBuzzMessage(null));
        assert.throws(() => fizzBuzzMessage(undefined));
    });
})

describe("Number range message producer", () => {
    it("should return an array whose length matches the range indicated by provided numbers", () => {
        assert.equal(produceMessagesForRange(1, 10).length, 10);
        assert.equal(produceMessagesForRange(100, 1000).length, 901);
        assert.equal(produceMessagesForRange(1, 1).length, 1);
    });

    it("should return an empty array if the range of numbers is empty", () => {
        assert.equal(produceMessagesForRange(2, 1).length, 0);
        assert.equal(produceMessagesForRange(100, 50).length, 0);
    });

    it("should contain the proper messages as decided by fizzBuzzMessage", () => {
        const messages = produceMessagesForRange(9, 15);
        const expected = [THREE_MULT_MSG, FIVE_MULT_MSG, "11", THREE_MULT_MSG, "13", "14", FIFTEEN_MULT_MSG];
        assert.deepEqual(messages, expected);
    });
})
