const result = document.getElementById("result");
const plus = document.getElementById("plus");

function display(num) {
  result.innerHTML += num;
}

function backspace() {
  result.innerHTML = result.innerText.slice(0, -1);
}

function sum() {}

function subtraction() {}

function multiply() {}

function divide() {}

function equals() {}

function invertValue() {
  result.innerHTML = Number(result.innerText) * -1
}

function c() {
  result.innerHTML = "";
}

function parentheses() {
  if (result.innerText === "") {
    result.innerHTML = "(";
  } else{
    result.innerHTML += ")";
  }
}
