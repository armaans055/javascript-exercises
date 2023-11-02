const removeFromArray = function(array, replace) {
    let replacementLocation = array.indexOf(replace)
    array.splice(replacementLocation,1)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
