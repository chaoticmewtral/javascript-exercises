const fibonacci = function(pos) {
    let fibArray = [1];
    const posInt = parseInt(pos);
    let fibNum = 0;
    let fibInd = (posInt + 1);

    if (posInt <= 0) {
        fibNum = "OOPS";
    } else {
        for(let i = 0; i < posInt; i++) {
            fibNum = fibNum + fibArray[i];
            fibArray.push(fibNum);
        }
    }
return posInt[fibInd];
};

// Do not edit below this line
// module.exports = fibonacci;
