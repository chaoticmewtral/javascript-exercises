// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
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
//   ];
  
  const findTheOldest = function() {

    const oldest = people.reduce((acc, person) => {
        for (let person of people) {
            if (!'yearOfDeath' in person) {
                person.yearOfDeath = 2022;
            }
            
        const age = person.yearOfDeath - person.yearOfBirth;
        person.age = age;
        }
        if (acc === null || person.age > acc.age) {
            return person;
        }
        return acc;
    }, null);
    console.log(oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
