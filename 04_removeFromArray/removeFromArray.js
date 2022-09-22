const removeFromArray = function() {
    let arr = arguments[0]; // given array
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        let itm = arr[""];

        function comp(itm) {
            if (itm !== val) {
                return itm;
            }
        }
        newArr.push(comp);
    }
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;