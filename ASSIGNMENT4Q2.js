let number = 5;
let factorial = 1;

while (number > 1) {
    factorial *= number;
    number--;
}

console.log("Factorial of 5 is: " + factorial);