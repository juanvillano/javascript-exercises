const findTheOldest = function(people) {
    return people.map(person => {
    if(!person.hasOwnProperty("yearOfDeath")) {
        person["yearOfDeath"] = (new Date()).getFullYear();
        return person;
    } 
    return person;
    }).reduce((oldest, person) => {
        let old = (oldest.yearOfDeath - oldest.yearOfBirth) > (person.yearOfDeath - person.yearOfBirth) ? oldest : person;
        return old;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
