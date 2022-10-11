const palindromes = function (initStr) {
// get charCodeAt each character in str using loop
let arr = [];
let str = initStr.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

// if charCode is a letter, add it to array
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        arr.push(str.charAt(i));
    }
}
return (arr.toString() === (arr.reverse()).toString);
// function to compare if str/arr === rev of str/arr
};

// Do not edit below this line
module.exports = palindromes;
