// FUNCTIONS IN JavaScript :-

// A function in JavaScript is a reusable block of code designed to perform a specific task.
//Instead of writing the same code again and again, you can put it inside a function and call the function whenever needed.

// 1. Why do we use Functions?

//Suppose you want to print "Hello" multiple times.

// -> Without a function:
console.log("Hello");
console.log("Hello");
console.log("Hello");

// -> Using a function:
function greet() {
    console.log("Hello");
}

greet();
greet();
greet();

// Advantages :
// Code reusability
// Reduces repetition
// Makes code organized
// Easier to debug and maintain
// Allows us to divide a large program into smaller tasks

// WE USE VARIOUS TYPES OF FUNCTIONS GENERALLY (In-Built Func.) :
console.log("hello"); // log is a function used to print data or values.

"abc".toUpperCase() // .toUpperCase() is a func. used to convert given string to uppercase.

[1,2,3].push(4); // push() is a func. used to insert any element in the array at the last position.

// Note : Whenever we make func. we always use parenthesis () to invoke the func. so, i/p given by us is written inside the () then on the basis of given i/p , func. will work and returns the o/p.

// 2 . CREATING FUNCTIONS (Syntax) :
// Firstly , the defination of fun. will be written afterwards the created func. will be called to return the o/p.

// -> Function Defination :-
//Syntax :
//function functionName() {
//    do some work
//}

//Ex :
//function functionName(param1, param2,.....) {
//         do some work
//}

// Ex :
function myFunction() {
    console.log("My name is Renu");
    console.log("I am learning.")
}
// Now when we run it so we will see that nothing is printed .
// Why? Because We have defined the Function but till now we have not Call the Func. , until the func will be not called the result will be not processed.
// So, now we have to call our func. to get the resultant o/p.

// -> Function Call :-
// Syntax :
// functionName();

// Complete Ex :
function myFunction() {
    console.log("My name is Renu");
    console.log("I am learning :")
}
myFunction();
// prints : My name is Renu
//          I am learning.

// -> If I want to print these two lines two times , 
  // we will call this func. twice
function myFunction() {
    console.log("My name is Renu");
    console.log("I am learning :")
}
myFunction();
myFunction();
// prints : My name is Renu
//          I am learning.
//          My name is Renu
//          I am learning.

// -> Defining I/P inside the Func. i.e. Giving parameters inside the Func.
function myFunction(msg) {  // msg is here is the PARAMETER VARIABLE
    console.log(msg);  // this will print my msg and msg is my i/p which I had passed in the func.
} 
myFunction(); // Calling/Invoking the func.
// prints : undefined

// => Why we got undefined ? 
// writing only myFunction() is not enough here.
// Because we have not passed our msg yet as their is no value inside the msg variable .
// So if a variable does not have any value it becomes undefined.
// Thatswhy on calling our func. we need to send some msg inside it which we want as our result.

function myFunction(msg) {  // msg is here is the PARAMETER VARIABLE
    console.log(msg);  // this will print my msg and msg is my i/p which I had passed in the func.
} 
myFunction("My name is Priya");  //passing our parameter inside the parenthesis , this is also known as Argument.
// prints :  My name is Priya

// POINTS TO REMEMBER :
// => variable used inside the func. defination is called "PARAMETER"
// => variable value passing inside the fun. calling or invoking is called "ARGUMENT"

// Parameter -> Variable written in func. defination . ex: msg
// Argument -> Actual value passed to the function . ex: "My name is Priya"
// We can pass multiple Arguments also.
function myFunction(msg, n) {
    //parameter -> i/p
    console.log(msg*n);
}
myFunction("My name is priya", 100);  //multiple arguments
// o/p -> error comes :   NaN means -> Not a Number i.e what er are trying to do is not Valid.

// Ex : Creating a func. to calculate the sum of 2 no. 
function sum(a, b) {
    console.log(a + b);
}
// In console we can invoke/call our sum() function with diff diff arguments 
// like: sum(2, 3) =  5   or  sum(7, 10) = 17 

// In this ex. we are giving i/p to the function and this function is working for us ,
// But func. can also returns the values to us for that we use "return" keyword.
// The return keyword sends a value back from the function.
// This gives the result back so we can store or use it later.
function sum(a, b) {
    s = a+b;
    return s; 
}
let value = sum(4, 5);
console.log(value);
// o/p -> 9
// You can also directly use it: 
// console.log(add(5, 10));

// If we have not store our sum() value inside any variable it will not get printed .

//Also if we had written anything after the return , that code will never be executed.
// When JavaScript encounters return, the function immediately stops executing.
// The second console.log() inside the function will never execute.
function sum(a, b) {
    s = a+b;
    console.log("before return"); //this will gets executed and print.
    return s; 
    console.log("after return"); //this is already coming dim indicating that writting anything after return means nothing , so it will never gets prints.
}
let val = sum(4, 5);
console.log(val);
// o/p -> before return
//        9

// The parameters which we pass inside the func. they acts as : LOCAL VARIABLES
function sum(x, y) {
    // Parameters act as LOCAL VARIABLES i.e. stays only inside this func. scope or block or we can say nothing outside this func. block
}
// mean not valid outside these curly braces of block of func.
// ex :
function sum(x, y) {
    // Parameters -> LOCAL VARIABLES
    s = x+y;
    return s;
}
let v = sum(5,6);
console.log(x); // gives error : x is not defined 
// AS we are trying to access this LOCAL VARIABLE outside its func. block where it is defined.
console.log(v); // o/p -> 11

// 3 ->  Arrow Functions :
// Arrow functions are a shorter/compact way to write functions.

// NORMAL FUNC. :-
//function add(a, b) {
  //  return a + b;
//}

// ARROW FUNC. :- 
// NOTE : Storing Func. value inside an Variable.
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Calling func

// Short Arrow Function :
// If there is only one statement, you can remove {} and return.
const sub = (a, b) => a - b;

console.log(sub(5, 3));
// JavaScript automatically returns: a-b

// Arrow Function with One Parameter :
const square = number => number * number;

console.log(square(5));
// o/p : 25

// Parentheses around one parameter are optional.
const cube = (number) => number * number * number;
// o/p -> 125
// Both are valid.

// Arrow Function with No Parameters :
// When there are no parameters, () is required.
const greet = () => {
    console.log("Hello!");
};

greet();
// o/p -> Hello!

// Using return in Arrow func. :
const mul = (a,b) => {
    return a*b;
}
console.log(mul(3,6));
// o/p -> 18

// PRACTICE QUES 1 : Create a func. using the "function" keyword tha takes a String as an argument & returns the no. of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
       ) {
        count++;
       }
    }
    return count;
}

// PRACTICE QUES 2 : Create an Arrow Func to perform same task
const countVowels = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
       ) {
        count++;
       }
    }
    return count;
}
// in console calling :  countVowels("abcd");
// o/p:  1


// 4 .  forEach Loop in Arrays :- HIGHER ORDER FUNCTION or METHOD
// forEach() is an array method used to run a function once for every element of an array.
  // Syntax :  arr.forEach(callBackFunction) {
                               // code
             //}
// We can take Func. as PARAMETERS also. mean func can be passed or returned as a normal variable in JS.
// callBackFunction - here, it is a function to execute for each element in the array
// A callBack Func. passed as an argument to another func.
let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log(number);
});
// o/p :  10
//        20
//        30
//        40

// The function is executed once for every element.
//Think of it like:
//10 → function
//20 → function
//30 → function
//40 → function

// ex :
let arr = [1,2,3,4];
arr.forEach(function printVal(element) { 
    //element/value at each index
    console.log(element);


});  // no need to execute it after the block of code, forEach will automatically executes it.

// o/p -> 1
//        2
//        3
//        4

// Using Arrow Function :-
// Since forEach() takes a function, arrow functions make it shorter:
let num = [10, 20, 30, 40];

numbers.forEach((num) => {
    console.log(num);
});
// o/p :  10
//        20
//        30
//        40

// Even shorter:
numbers.forEach(number => console.log(number));

// How forEach() Works :-
// Suppose:
let array = [5, 10, 15];
// When we write:
arr.forEach((value) => {
    console.log(value);
});
// JavaScript effectively does:
// First iteration → value = 5
// Second iteration → value = 10
// Third iteration → value = 15
// So the function receives each array element one by one.

// forEach() with Index :-
// forEach() can give you the element, index, and complete array.
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
// o/p : 
// 0 Apple
// 1 Banana
// 2 Mango

// The callback function can receive: (element, index, array)
let fruit = ["Apple", "Banana", "Mango"];

fruit.forEach((fr, index, array) => {
    console.log(fr);
    console.log(index);
    console.log(array);
});
// Usually, you only need the first one or two.

// Example: Double Every Number :
let n = [1, 2, 3, 4];

n.forEach((num) => {
    console.log(num * 2);
});
// o/p :
// 2
// 4
// 6
// 8

// ⚠️ Notice something important:
// The original array is still: [1, 2, 3, 4]
// forEach() doesn't automatically create a new array.

// Modifying the Original Array :-
// You can modify elements using their index:
let numb = [1, 2, 3, 4];

numb.forEach((num, index) => {
    numb[index] = num * 2;
});

console.log(numb);
// o/p  :  [2, 4, 6, 8]

// forEach() vs Normal for Loop :-
// Normal for loop :
let numbe = [10, 20, 30];

for (let i = 0; i < numbe.length; i++) {
    console.log(numbe[i]);
}

// forEach() 
let m = [10, 20, 30];

m.forEach((m) => {
    console.log(m);
});
// forEach() is often cleaner when you simply want to visit every element.

// Very Important: forEach() Does NOT Return a New Array
let a = [1, 2, 3, 4];

let result = a.forEach((num) => {
    return num * 2;
});

console.log(result);
// o/p : undefined

// WHY ?
// Because forEach() itself returns undefined.
// Remember : forEach → do something for every element.

// ex :  
let elem = ["pune", "delhi"];

elem.forEach((val) => {
    console.log(val.toUpperCase());
});
// o/p :  PUNE
//        DELHI

// ex : Calculate square of each number .
let digits = [1,2,3];

let calSquare = (digits) => {
    console.log(digits*digits);
};
digits.forEach(calSquare);
// o/p :
// 1
// 4
// 9

// forEach() with Objects :
// This is very useful in real projects.
let students = [
    { name: "Gunjan", marks: 90 },
    { name: "Rahul", marks: 85 },
    { name: "Ananya", marks: 95 }
];

students.forEach((student) => {
    console.log(student.name);
});
// o/p :
// Gunjan
// Rahul
// Ananya

// You can access properties normally:
students.forEach((student) => {
    console.log(`${student.name}: ${student.marks}`);
});
// o/p :  
//Gunjan: 90
//Rahul: 85
//Ananya: 95

// forEach() and if :
// You can combine forEach() with conditions.
// For example, print only even numbers:
let x = [1, 2, 3, 4, 5, 6];

x.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num);
    }
});
// O/P :
// 2
// 4
// 6

// Can We Use break?
// This is very important for interviews/viva.
// You cannot directly use :
// break; inside a forEach() callback.

// For example, this is invalid:
//b.forEach((num) => {
//    if (num === 3) {
//        break;
//    }
//});

// If you need to stop a loop early, use a normal for loop or another suitable array method such as some()/every() depending on the task



// 5. map Method in Array :
// if you want to transform an array and get a "new array", use map():
// creates a "new array" with the results of some operation. The value its callback returns are used to form "new array".
// syntax :
// arr.map(callBackFunction(value, index, array))
let b = [1, 2, 3, 4];

let results = numbers.map((num) => {
    return num * 2;
});

console.log(results);
// o/p : [2, 4, 6, 8]

// Remember:
// forEach → do something for every element
// map     → transform every element and create a new array


// 6 . filter() Method in JavaScript Arrays :
// The filter() method is used when you want to select specific elements from an array based on a condition.
// filter() → "Keep the elements that satisfy my condition."

// Syntax :
// arr.filter(function(element) {
//     return condition ;
//}) ;

// Usually, we write it with an arrow function:
let res = array.filter((element) => {
    return condition;
});

// Ex :
let xyz = [1,2,3,4,5,6];

let evenNum = xyz.filter((num) => {
    return num % 2 === 0;
});
// o/p : [2,4,6]

// Very Important: filter() Returns a New Array :-
// Unlike forEach(), filter() returns a new array.
let abc = [1,2,3,4,5];

let output = abc.filter(num => num > 3);
console.log(output);
// O/P : [4,5]
// The original array remains unchanged:
console.log(abc);
// Prints : [1,2,3,4,5]


// filter() vs forEach() :
// forEach() -> Used to perform an action on every element.
// It doesn't create a new array.
let mno = [1,2,3,4];

mno.forEach(num => {
    console.log(num);
});

// filter() -> Used to select elements.
let ab = [1,2,3,4];

let print = ab.filter(num => num < 2);
console.log(print);
// o/p : [1]

// REMEMBER :
// forEach → Do something
// filter  → Select something

// Filtering Even Numbers :-
let Elem = [10,15,20,25,30,35];

let even = Elem.filter(num => num % 2 === 0);
console.log(even);
// o/p : [10,20,30]


// Filtering Strings :
// filter() isn't only for numbers.
let names = ["Gunjan", "Rahul", "Ananya", "Raj", "Priya"];

let Output = names.filter(name => name.length > 5);

console.log(Output);
// o/p : ["Gunjan", "Ananya", "Priya"]
// Because their lengths are greater than 5.


// Filtering Objects :-
let stud = [
    { name: "Gunjan", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Ananya", marks: 92 },
    { name: "Raj", marks: 35 }
];
// We want students who scored at least 50.
let passedStud = stud.filter(student => student.marks >= 50);
console.log(passedStud);
// o/p :
// [
//   {name: "Gunjan", marks: 85},
//   {name: "Ananya", marks: 92}
// ]

// You can then print their names:
passedStud.forEach(student => {
    console.log(student.name);
});
// o/p :
// Gunjan
// Ananya
// This shows how methods can be chained together.


// filter() with Multiple Conditions :
// You can use && and ||.
// Example: marks between 50 and 80
let marks = [35, 45, 55, 65, 75, 85, 95];

let Res = marks.filter(mark => mark >= 50 && mark <= 80);

console.log(Res);
// o/p : [55,65,75]

// Using OR :
let Num = [10, 20, 30, 40, 50];

let Result = Num.filter(num => num === 20 || num === 40);

console.log(Result);
// o/p : [20,40]


// filter() with Index :-
// Just like forEach(), filter() can receive:
// (element, index, array)
let xy = [10,20,30,40];

let Print = xy.filter((num, index) => {
    return index % 2 === 0;
});
console.log(Print);
// o/p : [10, 30]
// Because indices are:
//10 → index 0 ✅
//20 → index 1 ❌
//30 → index 2 ✅
//40 → index 3 ❌


// filter() Does NOT Modify the Original Array :-
// So filter() creates a new array.
let bc = [1,2,3,4,5];

let out = bc.filter(num => num > 3);

console.log(out);
console.log(bc);
// o/p :
// [4,5]
// [1,2,3,4,5]


// What if Nothing Matches? 
let Ab = [1,2,3,4];

let Out = Ab.filter(num => num > 10);
console.log(Out);

// o/p : []
// It returns an empty array, not undefined.

















