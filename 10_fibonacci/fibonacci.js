const fibonacci = function(position) {
    let fibArray = [1, 1];
    let fibInd = position - 1;

    if (parseInt(position) <= 0) {
        return 'OOPS';
    } else {
        for (let x = 0, y = 1; x <= fibInd;) {
            fibArray.push(fibArray[x] + fibArray[y]);
            x++;
            y++;
        }
    }
    return fibArray[fibInd];
};

// passed above this comment

// Do not edit below this line
module.exports = fibonacci;
