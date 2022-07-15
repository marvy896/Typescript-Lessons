//Create an array of names and print a Hi greeting for names with up to 3 characters, 
//Hey greeting for names with 4-6 characters and Hello greeting for names with 7 or more characters.

let peopleNamebe = ["Alice", "Bob", "Charlie", "Daniella", "Abraham"];
let peopleNamebeOverthree = peopleNamebe.forEach((string) => { 
    if (string.length <= 3){
     console.log("Good Afternoon " + string)
     } 
     else if (string.length <= 6){
        console.log("Hey " + string)
     }
     else {
        console.log("Hello " + string)
    }
})


//Calculate the sum of all elements below 10 in an array.
let Bags = [1, 2, 78, 50, 23, 3];
let BagsNew = Bags.filter( a => a < 10);
let x = 0;
for (const item of BagsNew) { 
    x = x + item 
}
console.log(x); 


//Print out numbers from 1-20.
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var arrayOfNumbers = range(0, 20);
//lets print only the odd numbers
for (let number of arrayOfNumbers){
    // let's divide the value by 2.
    // if the remainder is not a zero then it's an odd number.
    if(number % 2 != 0){
    console. log(number);
    }
    }
//lets print only the even numbers
    function range(start, end){
        return Array(end - start + 1). fill(). map((_, idx) => start + idx)
    }
    var arrayOfNumbers = range(0, 20);
    for (let number of arrayOfNumbers){
    if(number % 2 == 0){
        console. log(number);
        }
        }

let k = 2;
if (k == 2){
    console.log("Hello")
};

//multiples of 3
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var arrayOfNumbers = range(0, 20);
for (let number of arrayOfNumbers){
if(number % 3 == 0){
    console. log(number);
    }
    }

//Generate a fizzbuzz sequence for numbers 1-20
function range(start, end){
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}
var arrayOfNumbers = range(1, 20);
for (let number of arrayOfNumbers){
    if ( number % 15 == 0){
        console.log("FizzBuzz ")
    }
else if(number % 3 === 0){
    console. log( "fizz ");
} else if (number % 5 === 0){
     console.log("Buzz ");
}
else {
    console.log(number)
}
    }
    
// //Create an array of numbers and for each item output how many numbers are less than it. 
// Also make the output read in a full sentences depending on the result
// 8 
// 8
let shoes = [8, 1, 2, 2, 3];
var shoesarray = shoes;
for (let number of shoesarray ) {
    let x=0; 
    for (const numb2 of shoesarray) {
        if (numb2 < number){
            x =x + 1};
    }
 if (x==0){
    console.log("there are No Elements less than " + number);}
    else if (x==1){
        console.log("there are one Element less than " + number);}
    
    else{
    console.log( "There are "+  x +  " elements less than " + number);}
    }
