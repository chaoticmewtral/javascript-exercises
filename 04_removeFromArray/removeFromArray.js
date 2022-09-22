const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr;
    for (let i = 1; i < arguments.length; i++) {
        for (let item of arr) {
            if item !== arguments[i] {
                newArr.push(item);
            }
        }
    }
    return newArr;
   }

// Do not edit below this line
module.exports = removeFromArray;
