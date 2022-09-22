const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        if (arr.includes(value)) {
            newArr.push(arr.splice(arr.indexOf(val), 1));
        }
        return newArr;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
