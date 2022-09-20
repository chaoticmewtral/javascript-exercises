const repeatString = function(string, num) {
let i = num;
let str = "";
while (i) {
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
