const removeFromArray = function(array) {

    // We start at i = 1 b/c the array is at i = 0.
    for (let i = 1; i < arguments.length; i++) {

        if (array.includes(arguments[i])) {

            array.splice(array.findIndex((elm) => elm == arguments[i]), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
