const repeatString = function(string, num) {
let i = num;
let str = "";

if (i < 0) {
    return "ERROR";
} else {
    for (; i > 0; ) {
        str += string;
        i--;
    }
    return str;
}
};

// Do not edit below this line
module.exports = repeatString;
