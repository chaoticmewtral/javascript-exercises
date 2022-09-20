let str;

const reverseString = function(str) {
    // change input to array
    let makeArray = str.split("");
    // reverse array
    let rev = makeArray.reverse();
    // change to string
    let revStr = rev.toString();
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
