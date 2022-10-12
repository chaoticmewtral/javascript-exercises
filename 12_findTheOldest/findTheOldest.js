const findTheOldest = function() {
    for (let person of people) {
        if (!'yearOfDeath' in person) {
            person.yearOfDeath = 2022;
        }
    const age = person.yearOfDeath - person.yearOfBirth;
    }
    const oldest = people.reduce((acc, person) => {
        if (acc === null || person.age < acc.age) {
            return person;
        } else {
            return acc;
        }
    }, null);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
