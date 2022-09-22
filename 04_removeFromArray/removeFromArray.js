const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        newArr = arr.push(arr.filter(comp));

        function comp(itm) {
            if (itm !== val) {
                return itm;
            }
        }
    }
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;