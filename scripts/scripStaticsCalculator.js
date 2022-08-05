let inputNumber = 0;
let sum = 0;
const numberList = [];

do {
    inputNumber = prompt("Enter an integer (a negative integer to quit):")
    inputNumber = parseFloat(inputNumber)
    
    if (inputNumber >= 0 && isInt(inputNumber)) {
        numberList.push(inputNumber);
        sum = sum + inputNumber;
    }
} while (inputNumber >= 0 || isNaN(inputNumber));

let average = sum/(numberList.length);
let minOfList = Math.min.apply(Math, numberList);
let maxOfList = Math.max.apply(Math, numberList);

if (numberList.length == 0) {
    alert("For the list that is empty, the average is 0, the minimum is 0");
} else {
    alert("For the list " + numberList + ", the average is " + average.toFixed(2) + 
    ", the minimum is " + minOfList + ", and the maximum is "
    + maxOfList);
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}