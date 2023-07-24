const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    }

    let answer = "";

    while (num > 0) {
        answer = answer + string;
        num--;
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;
