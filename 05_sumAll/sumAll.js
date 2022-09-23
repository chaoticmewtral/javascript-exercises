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
    const arr = args;
    let sumTotal;

    arr.forEach((arg) => {
        if ((typeof arg === "number") && (arg >= 0)) {
            let start, end;
            if (arr[0] < arr[1]) {
                start = arr[0];
                end = arr[1];
            } else {
                start = arr[1];
                end = arr[0];
            }
            for (let i = start; i <= end; i++) {
                sumTotal += i;
            }
        } else {
            sumTotal = "ERROR";
        }
    });
    return sumTotal;
}


// Do not edit below this line
module.exports = sumAll;
