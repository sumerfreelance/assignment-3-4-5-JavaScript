function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

const userInput = prompt("Enter a positive integer:");

const userNumber = parseInt(userInput);

if (!isNaN(userNumber) && userNumber > 0) {
    const result = isPrime(userNumber);
    console.log(`${userNumber} is ${result ? "prime" : "not prime"}.`);
} else {
    console.log("Invalid input. Please enter a positive integer.");
}