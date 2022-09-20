const repeatString = function(string, num) {
let i = num;
let str = "";
while (i) {
    str += string;
    i--;
}
return str;
};

// Do not edit below this line
module.exports = repeatString;
