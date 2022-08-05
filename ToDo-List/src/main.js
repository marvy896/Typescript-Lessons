console.log("Hello");
//document.querySelector("#NewItem").value;
function NewItemButton() {
    let NewItemText = document.querySelector("#NewItem").value;
    console.log(NewItemText);
    AddTask(NewItemText);
}
/**@type{{title:string, checked: boolean,}[]}   */
let tasks = [];
document.querySelector("#NewItemButton").onclick = () => NewItemButton();
// let i = 0;
function AddTask(NewItemText) {
    tasks.push({
        title: NewItemText, checked: false 
    })
    RefreshTable()
}

function RefreshTable() {
    document.querySelector('tbody').innerHTML = tasks.map ((NewItemText, i)=>`<tr id= ${i}>
   <td>${NewItemText.title}</td>
   <td>
     <input type="checkbox" onchange = "addeventlistener(${i})" id="checkbox-${i}"
      ${NewItemText.checked?"checked":""}/>

   </td>
   <td> <button onclick= "(Deletebutton(${i}))">Delete</button></td>
   <td> <button onclick= "(moveUp(${i}))">Move Up</button></td>
   <td> <button onclick= "(moveDown(${i}))">Move Down</button></td>
   </tr>`).join("")
}
 function addeventlistener(i){
    let checkbox = document.querySelector(`#checkbox-${i}`).checked;
    tasks[i].checked = checkbox
    console.log(checkbox)
 }


//document.getElementById('#checkbox')
function moveUp(i){
    if(i==0) return
    // if (checkbox==true) return 
    let move1 = tasks[i];
    let move2 = tasks[i-1];
    tasks[i] = move2;
    tasks[i-1] = move1;
    RefreshTable() 
 
}
function moveDown(i){
    if(i==tasks.length -1 ) return
    let move1 = tasks[i];
    let move2 = tasks[i+1];
    tasks[i] = move2;
    tasks[i+1] = move1;
    RefreshTable()
}
// if(checkbox == 'true') {
//     moveDown
// }
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
    tasks.splice(identifier, 1)
    RefreshTable()
    // let Row = document.getElementById(identifier);
    // Row.parentNode.removeChild(Row);
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