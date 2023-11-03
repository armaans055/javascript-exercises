const removeFromArray = function(array, remove) {
    if(Array.isArray(remove)){

    }else{
        let removalLocation = array.indexOf(remove)
        array.splice(removalLocation,1)
        return array
    }
   //Write a blanket if statement to determine if it is an array, if not continue and remove only one
   //If it is an array, assign a new value to the removing components
   //Iterate through and splice the array to remove those values
   //array.splice(remove , 1)
};

// Do not edit below this line
module.exports = removeFromArray;
