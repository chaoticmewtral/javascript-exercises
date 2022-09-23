const sumAll = function(start, end) {
    let sumTotal = 0;
    for (let i = start; i <= end; i++) {
        if (start < 0 || end < 0 || start == NaN || end == NaN) {
            sumTotal = "ERROR";
        } else {
            sumTotal += i;
        }
}
return sumTotal;
};

// pass first test; comment above and copy code for skip edits

// Do not edit below this line
module.exports = sumAll;
