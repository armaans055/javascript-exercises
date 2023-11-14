const palindromes = function (str) {
    const string = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g,"")
    let splitString = string.split("")
    let reversedString = splitString.reverse();
    let finalString = reversedString.join("");
    if(string == finalString){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
