// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 2018,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]
  
  const findTheOldest = function() {
    let currentYear = 2022;
    
    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            people[i].yearOfDeath = currentYear;
        }
    }

    people.forEach((person) => {
        person['age'] = person.yearOfDeath - person.yearOfBirth;
    })

    const oldest = people.reduce((arr, person) => {
        if (person.age > arr.age) {
            return person;
        }
        return arr;
    });
return oldest;
};

// passed first test above this line

// Do not edit below this line
module.exports = findTheOldest;