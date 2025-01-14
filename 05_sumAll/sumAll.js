/*
const sumAll = function(start, end) {
    let sumTotal = 0;
    for (let i = start; i <= end; i++) {
            sumTotal += i;
    }
return sumTotal;
};
*/

// pass first test; comment above and copy code for skip edits
// Edit for skipped tests

const sumAll = function(...args) {
    let totalSum = 0;
    
    if ((typeof args[0] !== "number") || (typeof args[1] !== "number")) {
        totalSum = "ERROR";
    } else if ((args[0] < 0) || (args[1] < 0)) {
        totalSum = "ERROR";
    } else {
        let start;
        let end;

        if (args[0] < args[1]) {
            start = args[0];
            end = args[1];
        } else {
            start = args[1];
            end = args[0];
        }

        for (let i = start; i <= end; i++) {
            totalSum += i;
        }
    }
    return totalSum;
}


// Do not edit below this line
module.exports = sumAll;
