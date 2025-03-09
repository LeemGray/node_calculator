var rs = require("readline-sync");

function equation(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    let sum = firstNumber + secondNumber;
    console.log("The result is " + sum);
  } else if (operation === "-") {
    let diff = firstNumber - secondNumber;
    console.log("The result is " + diff);
  } else if (operation === "*") {
    let multiply = firstNumber * secondNumber;
    console.log("The result is " + multiply);
  } else if (operation === "/") {
    if (secondNumber === 0) {
      console.log("Cannot divide by 0");
    } else {
      let div = firstNumber / secondNumber;
      console.log("The result is " + div);
    }
  }
}

while (true) {
  var operation = rs.question("What operation would you like to perform? ");
  if (
    operation === "+" ||
    operation === "-" ||
    operation === "*" ||
    operation === "/"
  ) {
    var firstNumber = rs.questionInt("Please enter first number ");
    var secondNumber = rs.questionInt("Please enter second number ");
    equation(firstNumber, secondNumber, operation);
  } else {
    console.log("That is not a valid operation");
  }
}
