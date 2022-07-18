//Create a function called greet with one parameter called name and print a greeting for the name.
function greet (Name){
    console.log("Hello" + " " + Name);
}
greet ( "Marvel");
greet ("Alice");
greet("Bob");
greet("Charlie");

//Create a function called subtract, which will take two number parameters, 
//subtract the second from the first and return the result.
function subtract (x, y ){
   return y- x;
}
console.log(subtract (8,5));

//Create a function called absoluteDifference, which will 
//take two number parameters. It is similar to subtract but without the negative sign if the result was negative.

function Substract (H, F) {
    return Math.abs (F-H)
}
console.log  (Substract(34,10));

//Create a function called mergeArrays with two parameters. 
//It should return an array which is the two input arrays combined together.

const merge1 = [1, 2, 3];
const merge2 = [4, 5, 6];
const merge3 = merge1.concat(merge2);
console.log(merge3);

// //or 
function MergeArrays(x,y){
  return x.concat (y);
    }
    console.log(  "tostring", MergeArrays([1, 2, 3],[4, 5, 6]));

// Create a function called findOddNumbers with one parameter of an array. 
// It will return a new array containing only numbers in the input array that are odd. 
let OddNumbers = [1, 3, 2, 5]
let FindOddNumbers = OddNumbers.filter(j => j % 2 !=0);
console.log(FindOddNumbers);
 
//or
function FindOddNumbers2 (Number) {
    return Number.filter(j=>j % 2 !=0);
}
console.log(FindOddNumbers2([1, 3, 2, 5]));

//Create function called fizzbuzz with a parameter for the length. It should generate 
//and an array containing the fizzbuzz sequence up to the desired length.
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var arrayOfNumbers = range(1, 20);
let arrayNew = [];
for (let number of arrayOfNumbers){
    if ( number % 15 == 0){
        arrayNew.push("FizzBuzz ")
    }
else if(number % 3 === 0){
    arrayNew.push( "fizz ");
} else if (number % 5 === 0){
    arrayNew.push("Buzz ");
}
else {
    arrayNew.push(number)
}
    }
    console.log(arrayNew);

 // converting tofunctions   
function FizzBuzz (){
    function range(start, end){
        return Array(end - start + 1). fill(). map((_, idx) => start + idx)
    }
    var arrayOfNumbers = range(1, 20);
    let arrayNew = [];
    for (let number of arrayOfNumbers){
        if ( number % 15 == 0){
            arrayNew.push("FizzBuzz ")
        }
    else if(number % 3 === 0){
        arrayNew.push( "fizz ");
    } else if (number % 5 === 0){
        arrayNew.push("Buzz ");
    }
    else {
        arrayNew.push(number)
    }
        }
        return arrayNew;
}
console.log ("This is FizzBuzz " , FizzBuzz());

//Create a variadic function called sumOfNumbers which will return the sum of the input numbers.

function sumOfNumbers (...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
return total;
}
console.log(sumOfNumbers(1, 2, 4));
