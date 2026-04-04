const result = document.getElementById("result");

function display(num) {
  result.value += num;
}

function displayOperator(operator) {
  if (result.value === ""){
    
  } else if (
    !result.value.includes("+") &&
    !result.value.includes("-") &&
    !result.value.includes("/") &&
    !result.value.includes("x")
  ) {
    result.value += operator;
  }
}

displayOperator;

function backspace() {
  result.value = result.value.slice(0, -1);
}

function equals() {}

function invertValue() {
  result.value = Number(result.value) * -1;
}

function displayPoint() {
  if (!result.value.includes(".")) {
    result.value += ".";
  }
}

function eraseAll() {
  result.value = "";
}

function parentheses() {
  if (result.value.includes("(")) {
    result.value += ")";
  } else {
    result.value += "(";
  }
}
