console.log("Hello");
//document.querySelector("#NewItem").value;
function NewItemButton() {
    let NewItemText = document.querySelector("#NewItem").value;
    console.log(NewItemText);
    AddTask(NewItemText);
}
let tasks = [];
document.querySelector("#NewItemButton").onclick = () => NewItemButton();
let i = 0;
function AddTask(NewItemText) {
    tasks.push(NewItemText)
    let NewHtml = (
        `<tr id= ${i}>
<td>${NewItemText}</td>
<td>
  <input type="checkbox"/>
</td>
<td> <button onclick= "(Deletebutton(${i}))">Delete</button>
</td>
</tr>`)

    let innerHTML = document.querySelector("tbody").innerHTML
    let finalHtml = (innerHTML + NewHtml);
    document.querySelector("tbody").innerHTML = finalHtml;
    i++;
}
function RefreshTable() {
    document.querySelector('tbody').innerHTML = ' '
   for (let task of tasks) {
   let NewHtml = (
        `<tr id= ${i}>
<td>${NewItemText}</td>
<td>
  <input type="checkbox"/>
</td>
<td> <button onclick= "(Deletebutton(${i}))">Delete</button>
</td>
</tr>`)
let innerHTML = document.querySelector("tbody").innerHTML
    let finalHtml = (innerHTML + NewHtml);
    document.querySelector("tbody").innerHTML = finalHtml;
    i++;
}}
AddTask("Sweep");
AddTask("School Run");
AddTask("Brush");
AddTask("BreakFast");
AddTask("Sleep");
AddTask("Scramp");
AddTask("Read");
AddTask("Games");

//get a function to be calledon clicking on delete 
//secondly, make the delete button to be able to locate the rows u want to delete
// thirdly to be able to remove the items in the desired row

function Deletebutton(identifier) {
    let Row = document.getElementById(identifier);
    Row.parentNode.removeChild(Row);
    // console.log("Delete");
    // console.log(identifier)
    // console.log(Row)
}






//New Task adding a slideshow
// let slideIndex = 1;
// showSlides(slideIndex);
// //next/prec controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// //thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     let f;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) { slideIndex = slides.length }
//     for (f = 0; f < slides.length; f++) {
//         slides[f].style.display = "none"
//     }
//     for (f = 0; f < dots.length; f++) {
//         dots[f].className.replace("active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";}
//NEW TASK CALCULATOR
let value = ("+","-","*", "/");
// using if...else if... else
function result () { 
    if (value == '+') {
    result = textval + textval;
}
else if (value == '-') {
    result = textval - textval;
}
else if (value == '*') {
    result = textval * textval;
}
else {
    result = textval / textval;
};
let output22= console.log(`${textval} ${value} ${textval} = ${result}`);
document.getElementById("output22");
}

function display(val) {
    document.getElementById("textval").value += val
}
function multiply(textval) {
    return textval * textval;
}
function evaluate() {
    let x = document.getElementById("textval").value
    let y = eval(x)
    document.getElementById("textval").value = y;
}
// program for a simple calculator

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// using if...else if... else


// display the result


// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));


// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

function clr() {
    document.getElementById("textval").value = ""
}