const repeatString = function(string, num) {
let i = num;
let str = "";
for (; i > 0; ) {
    if (i < 0) {
        str = 'ERROR';
    }  else {
    str += string;
    i--;
    }
}
return str;
};

// Do not edit below this line
module.exports = repeatString;
