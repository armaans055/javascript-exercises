const reverseString = function(string) {
    newString = string.split('')
    reversed = newString.reverse()
    finalString = newString.join('')
    return finalString
};

// Do not edit below this line
module.exports = reverseString;
