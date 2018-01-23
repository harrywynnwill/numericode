const zero = 0;
const alphabet = [...new Set(' abcdefghijklmnopqrstuvwxyz'.split(''))]; //TODO maybe make this a const //todo sets maintain order

const decode = (numbers) => {
    return numbers.map(decipher).join('');
}

const decipher = (number) => {
    return indexToLetter(alphabetIndex(number));
}

const indexToLetter = (index) => {
    return alphabet[index];
}

const alphabetIndex = (number) => {
   const numberBelow27 = numberDividedBy27UntilBelow27(number);
   return isAnInteger(numberBelow27) ? numberBelow27 : zero;
}

const numberDividedBy27UntilBelow27 = (number) => {
    const twentySeven = 27;
    if (number < twentySeven) {
        return number;
    }
    return numberDividedBy27UntilBelow27( number / twentySeven );
}

const isAnInteger = (number) => number % 1 === zero;

module.exports = {
    decode: decode,
    decipher: decipher,
    numberDividedBy27UntilBelow27: numberDividedBy27UntilBelow27,
    alphabetIndex: alphabetIndex,
    isAnInteger: isAnInteger,
    indexToLetter: indexToLetter
};