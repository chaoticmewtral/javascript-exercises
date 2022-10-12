const findTheOldest = function(people) {
    for (let person of people) {
        if (!"yearOfDeath" in person) {
            person.yearOfDeath = 2022;
        }
    }
    const oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
