const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        newArr = arr.filter(comp);

        function comp(val) {
            if (arr.includes(val)) {
                continue;
            } else {
                return val;
            }
        }
        return newArr;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
