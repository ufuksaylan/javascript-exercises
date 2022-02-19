const removeFromArray = function(array, ...restParameters) {
    let length = restParameters.length;
    for (let i = 0; i < length; i++)
    {
        const index = array.indexOf(restParameters[i]);
        if (index > -1) {
            array.splice(index, 1); 
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
