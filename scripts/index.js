"use strict";

window.onload = init;
// The init function connect the button to the code that
// should run when the button is clicked
function init() {
    //Addition
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked;

    //Subtraction
    const subBtn = document.getElementById("subBtn");
    subBtn.onclick = onSubBtnClicked;

    // Multiplication
    const multBtn = document.getElementById("multBtn");
    multBtn.onclick = onMultBtnClicked;

    //Division
    const divBtn = document.getElementById("divBtn");
    divBtn.onclick = onDivBtnClicked;

}

// This function is called when addBtn is clicked
function onAddBtnClicked() {
    
    let number1Field = document.getElementById("number1Field")
    let number1 = Number(number1Field.value);
    let number2Field = document.getElementById("number2Field")
    let number2 = Number(number2Field.value);
    let number3 = number1 + number2;
    let answer = number3.toString();
    document.getElementById("answerField").value = answer;
}

// This function is called when subBtn is clicked
function onSubBtnClicked() {
    
    let number1Field = document.getElementById("number1Field")
    let number1 = Number(number1Field.value);
    let number2Field = document.getElementById("number2Field")
    let number2 = Number(number2Field.value);
    let number3 = number1 - number2;
    let answer = number3.toString();
    document.getElementById("answerField").value = answer;
}

// This function is called when multBtn is clicked
function onMultBtnClicked() {
   
    let number1Field = document.getElementById("number1Field")
    let number1 = Number(number1Field.value);
    let number2Field = document.getElementById("number2Field")
    let number2 = Number(number2Field.value);
    let number3 = number1 * number2;
    let answer = number3.toString();
    document.getElementById("answerField").value = answer;
}

// This function is called when divBtn is clicked
function onDivBtnClicked() {
    
    let number1Field = document.getElementById("number1Field")
    let number1 = Number(number1Field.value);
    let number2Field = document.getElementById("number2Field")
    let number2 = Number(number2Field.value);
    let number3 = number1 / number2;
    let answer = number3.toFixed(2).toString();
    document.getElementById("answerField").value = answer;
}