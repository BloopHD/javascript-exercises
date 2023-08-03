const fibonacci = function(num) {

    let count = 1 
    let a = 1;
    let b = 0;

    if (num > 0) {

        while (count < num) {
            count++;
            let c = a
            a += b;
            b = c;
        } 
    
        return a;
    } else {

        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
