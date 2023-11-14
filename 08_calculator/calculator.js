const add = (a,b) => {return a + b}

const subtract = (a,b) => {return a - b}

const sum = function(array){
  return array.reduce((a,b) =>  a + b, 0)
}

const multiply = function(array){
  return array.reduce((a,b) => a * b)
}

const power = (a,b) => {return a ** b}

const factorial = function(num) {
	if(num === 0){  
  return 1
  }else{
    product = 1;
    for(let i=num; i > 0; i--){
    product *= i
    }
  return product
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
