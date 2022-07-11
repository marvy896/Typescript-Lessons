// alert("Hello World!");
console.log('hello world');
let Name = 'Marvel';
let InterestRate = 0.3;
InterestRate = 2;
console.log(InterestRate);
const InterestRate1 = 4;
let Person = {
    Name: "Marvell",
    age: 30
};
Person.Name = "Maner";
console.log(Person.Name);
let SelectedColours = ['Red', 'Blue'];
SelectedColours[2] = 'green';
console.log(SelectedColours);

//Performing a task function
function Greet(name, surname) {
    console.log("Hello " + name + " " + surname);
}

Greet('Marvel', 'Azubuko');
Greet('Chinedu', 'keke');

//Caalculating function
function square(number) {
    return number * number;

}
console.log(square(5));

//Arrays  in Javascript
//Creating and printing arrays
let PeopleNamebe = ["David", "Reuben", "Marvel", "Faith", "Miracle", "Prince", "Daniel", "Jess","Sam","Ram"];
console.log(PeopleNamebe);
//(a) with the use of for loop
    for (i=0;i<PeopleNamebe.length;i++){
    console.log("Hello " + PeopleNamebe[i])
}
//(b) using while lo

// while(condition) {
//     statement
// }
let a = 0;
while (a<PeopleNamebe.length) {
    console.log("Hi " + PeopleNamebe[a]);
    a++;
}
//with the use of for of loop
for (let r of PeopleNamebe){
    console.log("Good Day" + " " + r)
}

//with the use of for each
PeopleNamebe.forEach(function(string){
    console.log("Good Evening" + " " + string)
})
//or use
PeopleNamebe.forEach((string) => {
    console.log("Good Afternoon " + string)
})

// Create a 2d array
var dnum = new Array(3);
  
document.write("Creating 2D array <br>");
  
// Loop to create 2D array using 2D array
for (var i = 0; i < dnum.length; i++) {
    dnum[i] = new Array(3);
}
  
var h = 0;
  
// Loop to initialize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        dnum[i][j] = h++;
    }
}
  
// Loop to display the elements of 2D array. 
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++)    {
        document.write(dnum[i][j] + " ");
    }
    document.write("<br>");
}

let rays = [ [1,2,3], [4,5,6], [7,8,9] ]
console.log(rays.map(function(row){
    return row.join(" ") 
}).join("\n"));

//to fill an array you use the range function
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var result = range(1, 100);
    console. log(result)
//or
let Cars = [];
for(i=1; 100>=i; i++){
   Cars.push(i)
};
console.log(Cars);


//create an array of object to store peoples name using Associative Array
let Profile = [];
    Profile["Name"] = 'Mirabel';
    Profile["Age"] = 19;
    Profile["Height"] = "6 ft";

let Prof = {Name:"Angel", Age: "16", Height: "7ft" };
let ProfileMain = [
{Name: "Angela", Age: "25", Height: "45ft"},
{Name: "Marvel", Age: "5", Height: "5ft"}
]


//Sorting of Array Ascending Order
console.log(PeopleNamebe.sort(function(a,b){return a-b}));

//Sorting of Array Descending Order
console.log(PeopleNamebe.sort(function(a,b){return b-a}));

    //Sorting of Array Alphabetical Order
console.log(PeopleNamebe.sort(function(a,b){return a.localeCompare(b)}));

//Sorting of Array Reverse Alphabetical Order
console.log(PeopleNamebe.sort(function(a,b){return b.localeCompare(a)}));

// Grouping of Numbers 
var result = range (1,100);
console.log(result.reduce);

//finding the total character of an array
let Goodies = ["12", "34", "4", "8", "3", "Ada", "Dan"];
console.log("Hi, there has" + " " + Goodies.length + " " + "characters");



let HouseNo = ["12", "34", "4", "8", "3"];

function addSumNumbers(arrayOfNumbersToSum) {
    if(!Array.isArray(arrayOfNumbersToSum)) return;
    return arrayOfNumbersToSum.reduce((acc, cur) => +acc + +cur);
}   


console.log(addSumNumbers(HouseNo));