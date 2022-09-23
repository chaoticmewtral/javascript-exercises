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
    let totalSum = "";

    for (let arg of args) {
        if ((typeof arg === "number") && (arg >= 0)) {
            let start;
            let end;

            if (args[0] > args[1]) {
                start = args[1];
                end = args[0];
            } else {
                start = args[0];
                end = args[1];
            }

            for (let i = start; i <= end; i++) {
                totalSum += i;
            }
        } else {
            totalSum = "ERROR";
        }
    }
    return totalSum;
}


// Do not edit below this line
module.exports = sumAll;
