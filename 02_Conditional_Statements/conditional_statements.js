// CONDITIONAL STATEMENTS : USED TO IMPLEMENT SOME CONDITIONS IN THE PROGRAM or to make decisions based on certain criteria.

// 1. if statement : used to execute a block of code if a specified condition is true. if the condition is false, the block of code will not be executed.
let color;
if (mode == "dark-mode") {
    color = "black";
}

//ex :
let age = 34;
if(age >= 18) {
    console.log("You are eligible to vote.");
}   // prints "You are eligible to vote."

// ex :
let age = 4;
if (age >= 18) {
    console.log("You are eligible to vote.");
}  // nothing will be printed because the condition is false

// ex : using MULTIPLE IF STATEMENTS =>  two seperate if statements
let age = 34;   
if (age >= 18) {
    console.log("You are eligible to vote.");
}
if (age < 18) {
    console.log("You are not eligible to vote.");
} // prints "You are eligible to vote." because the first condition is true and the second condition is false.

// ex :
let mode = "dark-mode";
let color;
if (mode === "dark-mode") {
    color = "black";
}
if (mode === "light-mode") {
    color = "white";
}
console.log(color); // prints "black" because the first condition is true and the second condition is false.    


// 2. if...else statement : used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
let age = 4;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}  // prints "You are not eligible to vote." because the condition is false and the else block is executed.

// ex :
let mode = "blue-mode";
let color;  
if (mode === "dark-mode") {
    color = "black";
}
else {
    color = "white";
}
console.log(color); // prints "white" because the first condition is false and the else block is executed

// ex : no. is odd or even 
let num = 5;
if (num % 2 === 0) {
    console.log(num ,"The number is even.");
} else {
    console.log(num ,"The number is odd.");
} // prints 5 "The number is odd." because the condition is false and the else block is executed.


// 3. if...else if...else statement : used to execute a block of code if a specified condition is true, and another block of code if the condition is false, and another block of code if the first two conditions are false.
let age = 69;
if (age < 18) {
    console.log("junior citizen");
}
else if (age >= 18) {
    console.log("adult citizen");
}
else {
    console.log("senior citizen");
} // prints "senior citizen" because the first two conditions are false and the else block is executed.

// ex : using multiple if...else if...else statements
let mode = "blue-mode";
if (mode === "dark-mode") {
    color = "black";
}
else if (mode === "blue-mode") {
    color = "blue";
} else if (mode === "pink-mode") {
    color = "pink";
} else if (mode === "green-mode") {
    color = "green";
} else {
    color = "white";
}
console.log(color); // prints "blue" because the second condition is true and the else if block is executed.    

// ex : 
let mode = "blue-mode";
if (mode === "dark-mode") {
    color = "black";
}
else if (mode === "blue-mode") {
    color = "blue";
} else if (mode === "pink-mode") {
    color = "pink";
} else if (mode === "green-mode") {
    color = "green";
} else {
    color = "white";
}
console.log(color);

if (mode === "dark-mode") console.log("dark-mode"); //this statement will only work when we need to do only one single work when the condition is true. if we need to do more than one work, we need to use curly braces {} to enclose the block of code.
// this is called single line if statement. it is used to execute a single statement if the condition is true. if the condition is false, the statement will not be executed.
// this will print "dark-mode" because the condition is true and the statement is executed. if the condition is false, nothing will be printed.
// but this is not a good practice to use single line if statement because it is not readable and maintainable. it is better to use curly braces {} to enclose the block of code.

// SPECIAL OPERATOR : TERNARY OPERATOR 
//ternary operators works on 3 Operands : one condition and two O/P. => Syntax = condition? true o/p : false o/p
// ex : age > 18 ? "adult" : "not adult";

let age = 25;
age >= 18 ? "adult" : "not adult";
// till here nothing will be printed in o/p as we are only giving strings not storing our values to print .

// proper ex :
let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result); // prints adult 

// ex : we can write two result statements together also .
let age = 7;
age >= 18 ? console.log("adult") : console.log("not adult"); // prints not adult


// 1. alert stmt :
alert("hello"); // one time pop up on our page.

// 2. prompt stmt :
prompt("hello!"); // it will also give us popup msg but it also give an i/p block with it so that user can give i/p 

// ex : prompt
let name = prompt("hello!");
console.log(name);  // popup of hello! occurs in which we can give our any i/p , suppose i had given GUNJAN then in console GINJAN will gets print.

// Ques- Get user to i/p a no. using prompt("Enter a no. :"). Check if the no. is a multiple of 5 or not.
let num = prompt("Enter a no. :");

if (num % 5 === 0) {
    console.log(num, "num is multiple of 5");
}
else {
    console.log(num, "num is not a multiple of 5");
}

// Ques- Write a code which can give grades to stud. according to their scores :
// 90-100, A   70-89, B   60-69, C    50-59, D    0-49, F
let score = 75;
let grade;

if(score >= 90 && score <= 100) {
    grage = "A";
}
else if(score>=70 && score <= 89) {
    grade = "B";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 50 && score <= 59) {
    grade = "D";
}
else{
    grade = "F";
}
console.log("According to your scores, your grade is :",grade)

