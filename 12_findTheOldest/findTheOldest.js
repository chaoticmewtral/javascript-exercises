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
            let year = new Date().getFullYear;
            person["yearOfDeath"] = year;
        }
    }
    const oldest = people.reduce((acc, person) => {
        console.log(person.yearOfDeath);
        const age = person.yearOfDeath - person.yearOfBirth;
        person["age"] = age;
        if (acc === null || person.age > acc.age) {
            return person;
        }
        return acc;
    }, null);
return oldest;
};

// passed first test above this line

// Do not edit below this line
// module.exports = findTheOldest;
