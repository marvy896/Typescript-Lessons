//Assignment 2 in maps
console.log("Hello Marvel");
let numbers = [1,2,3];
let numbersNew = numbers.map(a => a + 5);
console.log(numbersNew);

//Creating an array and converting each item to string
// let Numbers = [1,2,3];
// Numbers.map ((number) => {
//    // numberToString(number)
//     let string=String(number);
//     console.log(string, typeof string)
//     return string;
// })
let Numbers = [1,2,3];
let NewNumbers = Numbers.map ((number) => number.toString())
console.log(NewNumbers);

//Creating an array of names usng map to add a greeting
let names = ["Alice", "Bob", "Charlie"];
let namesNew = names.map(b => "Hello " + b  );
console.log(namesNew);

//Create an array of numbers btw 0 and 20 and print only the ones above 10
// using for loop
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var arrayOfNumbers = range(0, 20);
for (let number of arrayOfNumbers){
    if (number > 10){
        console.log(number);
    } else {
        if (number < 10); console.log("Numbers Less Than 10", number);
    }
}


//using filter
//let ClassNo = [1,2,12,19];
let numOverTen = arrayOfNumbers.filter(number => number > 10); 
console.log(numOverTen);

//create an array of numbers and find the differnce
let deptNo = [2,6,4,10];
for (let index = 0; index < deptNo.length -1; index++) {
    const element = deptNo[index];
    let nextElement = deptNo[index + 1]; 
   console.log(nextElement-element);
    
}


//Create an array of objects of people with name, age and height.
let persons = {
Name: ["Benida","Abigail", "Mathhew", "Gramour"],
age: [10, 14, 45, 13],
Height: ["7ft", "4ft", "6ft", "9ft"]
};
console.log(persons);
//Sort the array based on the name alphabetical order
console.log(persons.Name.sort((a,b)=>a.localeCompare(b)));

//Sort the array based on the age oldest to youngest
console.log(persons.age.sort((a,b)=>b-a));

//Create an array of numbers and use map to multiply each by 10 and then filter to only the numbers less than 50.
let group1 = [1, 3, 6, 2, 40];
let groupNew = group1.map(a => a * 10).filter(a => a <50);
// let groupNe = groupNew.filter(a=> a < 50);
console.log(groupNew);