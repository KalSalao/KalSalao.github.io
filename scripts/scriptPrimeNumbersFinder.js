let inputNumber = 0;
const pirmeList = [];
do {
    inputNumber = prompt("Enter a positive integer")
} while (inputNumber < 2 || isFloat(inputNumber) || isNaN(inputNumber));

if (inputNumber >= 2) {
    showPrimes(inputNumber);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;            
        }       
    }
    return true;
}

function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) {
            continue;
        }

        pirmeList.push(i);
    }
    alert("For n = " + inputNumber + " prime numbers are " + pirmeList);
}

function isFloat(n) {
    return !!(n % 1); 
}