

const ZERO = 0;
const ALPHABET = [...new Set(' abcdefghijklmnopqrstuvwxyz'.split(''))]; //TODO maybe make this a const //todo sets maintain order



const decode = (numbers) => {
    return numbers.map(decipher).join('');
}

const decipher = (number) => {
    return indexToLetter(alphabetIndex(number));
}

const indexToLetter = (index) => {
    return ALPHABET[index];
}

const alphabetIndex = (number) => {
   const numberBelow27 = numberDividedBy27UntilBelow27(number);
   return isAnInteger(numberBelow27) ? numberBelow27 : ZERO;
}

const numberDividedBy27UntilBelow27 = (number) => {
    const TWENTY_SEVEN = 27;
    if (number < TWENTY_SEVEN) {
        return number;
    }
    return numberDividedBy27UntilBelow27( number / TWENTY_SEVEN );
}

const isAnInteger = (number) => number % 1 === ZERO;

module.exports = {
    decode: decode,
    decipher: decipher,
    numberDividedBy27UntilBelow27: numberDividedBy27UntilBelow27,
    alphabetIndex: alphabetIndex,
    isAnInteger: isAnInteger,
    indexToLetter: indexToLetter
};