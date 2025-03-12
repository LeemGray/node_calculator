const rs = require("readline-sync");

function equation(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    let sum = firstNumber + secondNumber;
    return sum;
  } else if (operation === "-") {
    let diff = firstNumber - secondNumber;
    return diff;
  } else if (operation === "*") {
    let multiply = firstNumber * secondNumber;
    return multiply;
  } else if (operation === "/") {
    if (secondNumber === 0) {
      console.log("Cannot divide by 0");
    } else {
      let div = firstNumber / secondNumber;
      return div;
    }
  }
  return null;
}

function main() {
  const operation = rs.question("What operation would you like to perform? ");
  if (
    operation === "+" ||
    operation === "-" ||
    operation === "*" ||
    operation === "/"
  ) {
    const firstNumber = rs.questionInt("Please enter first number ");
    const secondNumber = rs.questionInt("Please enter second number ");
    const result = equation(firstNumber, secondNumber, operation);
    if (result !== null) {
      console.log("The result is " + result);
    }
  } else {
    console.log("That is not a valid operation");
  }
}

main();
