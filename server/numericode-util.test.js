const assert = require('assert');
const numbericode = require('./numericode-util.js');



const testCases = [
    [8, 5, 12, 12, 15],
    [13, 27, 26, 5],
    [432, 21, 19, 5832, 5, 135, 14, 6561, 59049, 15, 486, 275562],
    [20, 486, 21, 513, 19, 324, 5, 21924, 540, 135, 3, 8],
    [8, 5, 324, 8748, 295245, 730, 23, 405, 13122, 12, 108]]

const numericSubstitionCipherHello =  testCases[0];

assert.equal(numbericode.decipher(numericSubstitionCipherHello), 'Hello');