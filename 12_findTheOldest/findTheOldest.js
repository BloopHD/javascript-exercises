const findTheOldest = function(arr) {

    return arr.sort((a, b) => getAge(a) < getAge(b) ? 1 : -1)[0];
};

function getAge(person) {

    if (!person.yearOfDeath) {

        return (new Date()).getFullYear() - person.yearOfBirth;
    } else {
        
        return person.yearOfDeath - person.yearOfBirth;
    }
}


// Do not edit below this line
module.exports = findTheOldest;
