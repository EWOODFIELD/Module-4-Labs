

// Create a Basic Caclulator Example
function calcResult(operation){
    let num1=Number(document.form1.num1.value)
    let num2=Number(document.form1.num2.value)
    let resultElement=document.getElementById("result")
switch (operation) {
    case 'add':
        resultElement.value=(num1+num2);
        break;
    case 'subtract':
        resultElement.value=(num1-num2);
        break;
    case 'multiply':
        resultElement.value=(num1*num2);
        break;
    case 'divide':
        resultElement.value=(num1/num2);
        break;
    default:
        resultElement.value='Error';
    }
}

// Create and Return Full Name Exercise
let firstName='Ethan';
let lastName='Woodfield';

function FullName () {
    return(firstName+" "+lastName.toUpperCase());
}

console.log (FullName());

// Student Grade Comparison Exercise
let studentOne = {
    "firstName":"Ethan",
    "lastName":"Woodfield",
    "grade":"A+"
}

let studentTwo = {
    "firstName":"Jacob",
    "lastName":"Patrick",
    "grade":"B+"
}

function add (){
    console.log(studentOne.grade)
    console.log(studentTwo.grade)
}

console.log (add());

console.log (studentOne.grade,studentTwo.grade);

// Array Methods Example
let numberList=[1,2,3,4,5,6,7,8]

for (let i=0;i<numberList.length;i++)
{
    if(numberList[i]===5){
        console.log(numberList[i])
        break
    }
    console.log(numberList[i])
}

// Weeklist and For Loop Exercise
let weekList=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]

for (let i=0;i<weekList.length;i++){
    console.log(weekList[i])
}

// Monthlist and Array Methods Exercise
let monthList=[]
monthList.push("January","Febuary","March","April","May","June","July","August","September","October","November","December");
monthList.pop()
monthList.shift("January")
monthList.unshift("January")
monthList.push("December")
console.log(monthList.length)
console.log(monthList)

// Covid Queue Array Lab Exercise (UNSOLVED)
let covidQueue=["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10"]
covidQueue.push("P11","P12","P13","P14","P15","P16")

for(let i=0;i<6;i++) {
    covidQueue.shift()
}

function inQueue() {
    console.log(covidQueue.length)
}

function nextInQueue() {
    console.log(covidQueue[0])
}

function lastInQueue() {
    console.log(covidQueue[covidQueue.length-1])
}

console.log(covidQueue)


//Fizzbuzz Exercise
for (i=0;i<101;i++){
    if(i%3==0 && i%5==0){
        console.log("Fizzbuzz")
    }
    else if(i%3==0){
        console.log("Buzz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

// Array Exercise
let styles=["Jazz","Blues"]
styles.push("Rock-n-Roll")
styles[1]="Classics"
console.log(styles.shift())
styles.unshift("Rap","Reggae")
console.log(styles)

//Array to Set Conversion Exercise (University Registration Example)

let studentSet= new Set()
let registration=["12345","54321","21435","45231","12345","12345","54321"]

for (i=0;i<registration.length;i++) {
   studentSet.add(registration[i])
}
console.log(studentSet)

//Map Exercise

let studentValues= new Map()

studentValues.set("Student1",60)
studentValues.set("Student2",80)
studentValues.set("Student3",30)
studentValues.set("Student4",90)
studentValues.set("Student5",100)
studentValues.set("Student6",65)
studentValues.set("Student7",75)
studentValues.set("Student8",85)
studentValues.set("Student9",45)
studentValues.set("Student10",72)
console.log(studentValues)

let highestMark=0;

for (let mark of studentValues.values()){
    if(mark>highestMark){
      highestMark=mark
    }
}
console.log(highestMark)


let lowestMark=100;

for (let mark of studentValues.values()){
    if(mark<lowestMark){
      lowestMark=mark
    }
}
console.log(lowestMark)

let sum=0;

for (let i of studentValues.values()){
    sum=sum+i;
}

let average=sum/studentValues.size;
console.log(average)


