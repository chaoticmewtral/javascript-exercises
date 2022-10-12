const findTheOldest = function() {
    if (people.yearOfDeath === undefined) {
        people.yearOfDeath = 2022;
        return(people.yearOfDeath - people.yearOfBirth);
}
};

// Do not edit below this line
module.exports = findTheOldest;
