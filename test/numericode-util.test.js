const numbericode = require('../numericode-util.js');
const expect = require('chai').expect;

//TODO edge cases 0 && negatives and very large numbers

describe('numericode substitution cypher', () => {

    const testCases = [
        [8, 5, 12, 12, 15],
        [13, 27, 26, 5],
        [432, 21, 19, 5832, 5, 135, 14, 6561, 59049, 15, 486, 275562],
        [20, 486, 21, 513, 19, 324, 5, 21924, 540, 135, 3, 8],
        [8, 5, 324, 8748, 295245, 730, 23, 405, 13122, 12, 108]];

    const [testCaseOne, testCaseTwo, testCaseThree, testCaseFour, testCaseFive] = testCases;

    it('can decipher messages', () => {
        expect(numbericode.decode(testCaseOne)).to.equal('hello');
        expect(numbericode.decode(testCaseTwo)).to.equal('maze');
        expect(numbericode.decode(testCaseThree)).to.equal('pusheenicorn');
        expect(numbericode.decode(testCaseFour)).to.equal('trussle tech');
        expect(numbericode.decode(testCaseFive)).to.equal('hello world');
    });
    it('can decipher a number to a letter', () => {
        expect(numbericode.decipher(0)).to.equal(' ');
        expect(numbericode.decipher(8)).to.equal('h');
        expect(numbericode.decipher(26)).to.equal('z');
        expect(numbericode.decipher(27)).to.equal('a');
        expect(numbericode.decipher(28)).to.equal(' ');
        expect(numbericode.decipher(162)).to.equal('f');
    });

    it('can map the index to the correspending charachter in the alaphebet', () => {
        expect(numbericode.indexToLetter(0)).to.equal(' ');
        expect(numbericode.indexToLetter(8)).to.equal('h');
        expect(numbericode.indexToLetter(26)).to.equal('z');
    })

    it('can give the number an index from 0 to 26', () => {
        expect(numbericode.alphabetIndex(0)).to.equal(0);
        expect(numbericode.alphabetIndex(8)).to.equal(8);
        expect(numbericode.alphabetIndex(26)).to.equal(26);
        expect(numbericode.alphabetIndex(27)).to.equal(1);
        expect(numbericode.alphabetIndex(28)).to.equal(0);
        expect(numbericode.alphabetIndex(162)).to.equal(6);
    });
    it('can divide a number greater than 27 by 27 until the number is less than 27', () => {
        expect(numbericode.numberDividedBy27UntilBelow27(0)).to.equal(0)
        expect(numbericode.numberDividedBy27UntilBelow27(8)).to.equal(8);
        expect(numbericode.numberDividedBy27UntilBelow27(26)).to.equal(26);
        expect(numbericode.numberDividedBy27UntilBelow27(27)).to.equal(1);
        expect(numbericode.numberDividedBy27UntilBelow27(28)).to.equal(1.037037037037037);
        expect(numbericode.numberDividedBy27UntilBelow27(162)).to.equal(6);
    })
    it('can check that the number is an §', () => {
        expect(numbericode.isAnInteger(3.5)).to.be.false;
        expect(numbericode.isAnInteger(1)).to.be.true;
    })
});




// const numericSubstitionCipherHello =  testCases[0];

// assert.equal(numbericode.decipher(numericSubstitionCipherHello), 'Hello');

// assert.equal(numbericode.numericSubstitutionDecipher(432), 'Hello');

// if(number < 27){
//     return number;
// }
// return decipher(number / 27);