const result = document.getElementById("result");
const button1 = document.getElementById("button1").innerText;
const plus = document.getElementById("plus");

function display(num) {
  result.innerHTML += `${num}`;
}

function backspace() {
  result.innerHTML = result.innerText.slice(0, -1);
}

function sum() {

}

function c(){
    result.innerHTML = ""
}
