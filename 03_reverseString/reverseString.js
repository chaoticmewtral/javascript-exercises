let str;

const reverseString = function(str) {
    // change input to array
    let makeArray = str.split("");
    // reverse array
    let rev = makeArray.reverse();
    // change to string
    let len = rev.length;
    let revStr = "";
    for (let i = 0; i < len; i++) {
        revStr += rev[i];
    }
return revStr;
};

// Do not edit below this line
module.exports = reverseString;
