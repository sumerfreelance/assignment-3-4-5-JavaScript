let userInput = prompt("Enter a number:");

let number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }
}