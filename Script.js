// temp prompts for user input . this is only testing to see if the code works
let a = prompt("Please enter a number: ");
let b = prompt("Please enter a second number: ");
let num1 = parseFloat(a);
let num2 = parseFloat(b);
console.log("num1 :" , num1);
console.log("num2 :" , num2);
//will delete this later 

// calling  functionsto test the prompts values
add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);

//now lets make the functions that we need 
function add(num1, num2) {
    let addValue = (num1 + num2);
    console.log("add :" , addValue);
    //return addValue;
};

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    console.log("subtract :" , subtractValue);
    //return subtractValue;
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    console.log("multiply :" , multiplyValue);
    //return multiplyValue;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2)
    console.log("divide :" , divideValue)
    //return divideValue;
}