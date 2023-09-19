// temp prompts for user input . this is only testing to see if the code works
let a = prompt("Please enter a number: ");
let b = prompt("Please enter a second number: ");
let c = prompt("What operator would you like to use(+ , - , * , /) ???; ");
let num1 = parseFloat(a);
let num2 = parseFloat(b);
let operator = c;
console.log("num1 :" , num1);
console.log("num2 :" , num2);
console.log("chosen operator :" , operator);
//will delete this later -- this part is temperory until we get bottoms

// calling  functionsto test the prompts values
// add(num1, num2);
// subtract(num1, num2);
// multiply(num1, num2);
// divide(num1, num2);

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
    let divideValue = (num1 / num2);
    //error check for division by 0
    if (divideValue == "Infinity") {
        return alert("this an ERROR!!! you know i can't divide by zero#_# YOU SHOULD KNOW BETTER ....");
    }else return console.log("divide :" , divideValue);
    //return divideValue;
};

//use operator variable to determine which function to call
function operate(operator , num1 , num2 ) {
    // research for what the fuck is switch
    switch(operator) {
        case"+":
            console.log("passing through switch +");
            add(num1 , num2);
            break;
        case"-":
            console.log("passing through switch -");
            subtract(num1 , num2);
            break;
        case"*":
            console.log("passing through switch *");
            multiply(num1 , num2);
            break;
        case"/":
            console.log("passing through switch /");
            divide(num1 , num2);
            break;
        default:
            alert("ERROR !!! DIDN'T recive an operator , or type not as expected!!! ");
    };
};

// now it's time to call the operate function and pass through the arguments that we got from prompts
operate(operator , num1 , num2 );