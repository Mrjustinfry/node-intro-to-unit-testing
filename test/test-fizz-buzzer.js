const expect = require("chai").expect;

const fizzBuzzer = require("../fizzBuzzer");

describe('fizzBuzzer', function () {
    it(`Should return 'fizz' if number is divisible by 3`, function () {
        const normalFizz = [
            { num: 3, expected: 'fizz' },
            { num: 6, expected: 'fizz' },
            { num: 9, expected: 'fizz' }

        ];
        normalFizz.forEach(function (input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        })
    })

    it(`Should return 'buzz' if number is divisible by 5`, function () {
        const normalBuzz = [
            { num: 5, expected: 'buzz' },
            { num: 10, expected: 'buzz' },
            { num: 20, expected: 'buzz' }
        ];
        normalBuzz.forEach(function (input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);

        });
    });

    it(`Should return 'fizz-buzz' if number is divisible by 15`, function () {
        const normalFizzbuzz = [
            { num: 15, expected: 'fizz-buzz' },
            { num: 30, expected: 'fizz-buzz' },
            { num: 45, expected: 'fizz-buzz' }
        ];
        normalFizzbuzz.forEach(function (input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it(`should return a number if the number is not divisible by 3,5, or 15`, function () {
        const normalNumbers = [
            { num: 1 },
            { num: 2 } ,
            { num: 4 },
            { num: 7 }
        ];
        normalNumbers.forEach(function (input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.num);
        });
    });

    it(`Should throw an error if the input is not a number`, function () {
        const errorCases = [true, false, 'cat', function () { }, [1, 2, 3]];
        errorCases.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input)
            }).to.throw(Error);
        })
        })
});
