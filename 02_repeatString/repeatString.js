const repeatString = function(string, num) {
let i = num;
let str = "";
for (let i = num; i > 0; i--) {
str += string;
}
// while (i) {
//     str += string;
//     i--;
// }
return str;
};

// Do not edit below this line
module.exports = repeatString;
