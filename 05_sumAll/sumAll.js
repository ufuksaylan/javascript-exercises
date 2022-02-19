const sumAll = function(a, b) {
    if ((typeof a != "number") || (typeof b != "number") || a < 0 || b < 0)
        return "ERROR";
    
    let small = a;
    let big = b; 
    if (a > b)
    {
        small = b;
        big = a; 
    }
    let sum = 0;
    for (let i = small; i <= big; i++)
    {
        sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
