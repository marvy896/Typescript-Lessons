const A1: number = 12;
const A2 = 10;
console.log(A1,A2);
const A3 = A1 + A2;
console.log(A1 + A2);

const z: string = "A string"
console.log("Book");


let B1 = 15;
let B2 = 2;
B1 = 4


function F1(Name) {
    // console.log("Hello Marvel");
    console.log(`Hello ${Name}`)
}
function D2(Surname:string){
    console.log(`your ${Surname}`);
}
F1("Marvel");

function AddTwoNumbers(Num1:number, Num2:number) {
    const Result = Num1 + Num2;
    //console.log(`add ${Result}`);
    return Result;
}
function MultiplyTwoNumbers(Num1:number, Num2:number){
    const Result = Num1 * Num2;
    return Result;
}

function F2(GetNumber:(Num1:number, Num2:number)=>number){
    const Result = GetNumber(2,3);
    console.log(Result);

}
F2(AddTwoNumbers)
F2(MultiplyTwoNumbers)

let SelectedStatesbe : string = [Anambra, Awka, Abuja];
console.log(SelectedStatesbe);
