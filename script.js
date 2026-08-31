// Prompt 1: Enter first number
let number1 = Number(prompt("Enter number 1"));

// Prompt 2: Enter operator
let operator = prompt("Enter operator");

// Prompt 3: Enter second number
let number2 = Number(prompt("Enter number 2"));

let result;

// Perform calculation
if (operator === "+") {
    result = number1 + number2;
}
else if (operator === "-") {
    result = number1 - number2;
}
else if (operator === "*") {
    result = number1 * number2;
}
else if (operator === "/") {
    result = number1 / number2;
}
else {
    result = "Invalid operator";
}

// Show output in HTML span
document.getElementById("output").textContent = result;

