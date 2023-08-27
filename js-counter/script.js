function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function reset() {
    let numberElement = document.getElementById("number");
    let number = 0;
    numberElement.innerText = number;
}

function addby() {
    let numberElement = document.getElementById("number");
    let stepElement = document.getElementById("usernum");
    let step = stepElement.value;
    let number = numberElement.innerText;
    number = parseInt(number) + parseInt(step);
    numberElement.innerText = number;
}

function subtractby() {
    let numberElement = document.getElementById("number");
    let stepElement = document.getElementById("usernum");
    let step = stepElement.value;
    let number = numberElement.innerText;
    number = parseInt(number) - parseInt(step);
    numberElement.innerText = number;
}