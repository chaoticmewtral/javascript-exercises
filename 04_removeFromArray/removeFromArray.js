const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        if arr.includes(argument[i]) {
            newArr.push(arr.splice(arr.indexOf(argument[i]), 1));
        }
        return newArr;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
