const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    if(num < 0){
        return "OOPS"
    }else{
        for(i=2; i<=num; i++){
            let c = a+b;
            a = b;
            b = c;
        }
    return b
    }
};


//Derive the preceding fibonacci series, from a given number
//
// Do not edit below this line
module.exports = fibonacci;
