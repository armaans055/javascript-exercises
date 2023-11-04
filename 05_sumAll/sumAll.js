const sumAll = function(num1, num2) {
    // if(num1>num2){
    if(isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || Array.isArray(num1) || Array.isArray(num2) || typeof num1 === "string" || typeof num2 === "string"){
        return "ERROR"
    }else{
        if(num2>num1){
        let finalSum = 0
        for(i=num1; i<=num2;i++){
            finalSum += i
        }
        return finalSum
    }if(num1>num2){
        let finalSum = 0
        for(i=num2; i<=num1;i++){
            finalSum += i
        }
        return finalSum
    }
    }
    // }else{
    //     let finalSum = 0
    //     for(i=num2; i<=num1;i++){
    //         finalSum += i
    //     }
    //     return finalSum
    // }
};

// Do not edit below this line
module.exports = sumAll;
