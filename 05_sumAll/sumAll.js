const sumAll = function(numOne, numTwo) {

    let total = 0;
    let numStart = 0;
    let numEnd = 0;

    if (numOne < 0 || numTwo < 0 || typeof(numOne) != 'number' || typeof(numTwo) != 'number' ) {
        return "ERROR";
    }

    if (numOne < numTwo) {
        numStart = numOne;
        numEnd = numTwo;
    } else {
        numStart = numTwo;
        numEnd = numOne;
    }

    while (numStart <= numEnd) {
        total += numStart;
        numStart++;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
