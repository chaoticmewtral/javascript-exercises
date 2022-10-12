const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

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
};

// Do not edit below this line
// module.exports = findTheOldest;
