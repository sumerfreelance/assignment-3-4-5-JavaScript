function greetUser(userName) {
    return "Hello, " + userName + "! Welcome to the program.";
}

var user = prompt("Please enter your name:");

if (user !== null && user !== "") {
    alert(greetUser(user));
} else {
    alert("Hello! Welcome to the program.");
}