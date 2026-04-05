const result = document.getElementById("result");

function display(num) {
  result.value += num;
}

function isTwoMinus() {
  if (result.value.split("-").length - 1 === 2) {
    return true;
  } else {
    return false;
  }
}

function displayOperator(operator) {
   if (result.value === "") {
    result.value += 0 + operator;
  } else if (
    !result.value.includes("+") &&
    !result.value.includes("/") &&
    !result.value.includes("*") &&
    !result.value.includes("-")
  ) {
    result.value += operator;
  }
}

function backspace() {
  result.value = result.value.trim().slice(0, -1);
}

function equals() {
  result.value = +eval(result.value).toFixed(8);
}

function invertValue() {
  result.value = Number(result.value) * -1;
}

function displayPoint() {
  if (result.value === "") {
    result.value += 0 + ".";
  } else if (!result.value.includes(".")) {
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
