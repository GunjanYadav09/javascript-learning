// INTRODUCTION TO JAVASCRIPT :
//  JAVASCRIPT is a programming language that is used to make web pages interactive. it is a client-side scripting language that is used to create dynamic web pages. it is an interpreted language that is executed by the browser. it is a high-level programming language that is used to create web applications. it is a multi-paradigm language that supports object-oriented, imperative, and functional programming styles. it is a loosely typed language that does not require variable type declaration. it is a case-sensitive language that distinguishes between uppercase and lowercase letters. it is a prototype-based language that uses prototypes to create objects. it is a first-class function language that treats functions as first-class citizens. it is a single-threaded language that uses an event loop to handle asynchronous operations. it is a cross-platform language that can run on any operating system.


console.log("Hello, World!");  // log is used to print msg on the console.

//DECLARING VARIABLES : we use 3 keywords : let, var, const 
let name = "John"; // let is used to declare a variable that can be reassigned
let age = 30; // let is used to declare a variable that can be reassigned
console.log(name); // prints "John"
console.log(age); // prints 30

// var is used to declare a variable that can be reassigned
var name = "John";
var age = 30; // var is used to declare a variable that can be reassigned
console.log(name); // prints "John"
console.log(age); // prints 30

//problem in using var is that we can re-declare the variables .
var name = "John"; // var is used to declare a variable that can be reassigned
var name = "Doe";
var name = "Smith";
console.log(name); // prints "Smith"
//this is not a good way to declare variables because it can lead to confusion and bugs in the code.

// const is used to declare a variable that cannot be reassignedconst age = 30; // const is used to declare a variable that cannot be reassigned
const name = "John";
const age = 30; // const is used to declare a variable that cannot be reassigned
console.log(name);
console.log(age);

// in const variables can not be re-declared and update .
const name = "John"; // const is used to declare a variable that cannot be reassigned
name = "Doe"; // this will throw an error because we cannot reassign a const variable
console.log(name); // this will not be executed because of the error above

//const is basically used in math operations like pi, e, etc. where the value is constant and cannot be changed.
const PI = 3.14; // const is used to declare a variable that cannot be reassigned
console.log(PI); // prints 3.14

// by default, if any variable is declare without any keyword, it will be considered as var and can be re-declared and updated.
name = "John"; // this will be considered as var and can be re-declared and updated
name = "Doe";
console.log(name); // prints "Doe"

// by default if any variable is declared but not assigned with any value then it will always be undefined.
let age;
console.log(age); // prints undefined

//but this thing will not work for const variables because const variables must be assigned with a value at the time of declaration.
const age; // this will throw an error because const variables must be assigned with a value at the time of declaration
const age = 30; // this will not throw an error because const variables must be assigned with a value at the time of declaration

// let and const are block scoped variables which means they are only accessible within the block they are defined in. var is function scoped variable which means it is accessible within the function it is defined in.
{
    let name = "John"; // let is used to declare a variable that can be reassigned
    const age = 30;
    console.log(name); // prints "John"
    console.log(age); // prints 30
}

//now if we want to re-declare the variable of let we have to create a new block for that as we can not re declare a variable of let in the same block. but we can re-declare a variable of var in the same block.
{ 
    let name = "Doe"; // let is used to declare a variable that can be reassigned
    const age = 30;
    console.log(name); // prints "John"
    console.log(age); // prints 30
}

//now if we want to re-declare the variable of let we have to create a new block for that as we can not re declare a variable of let in the same block. but we can re-declare a variable of var in the same block.
{ 
    let name = "Doe"; // let is used to declare a variable that can be reassigned
    let name = "Smith"; // this will throw an error because we can not re-declare a variable of let in the same block
    console.log(name); // this will not be executed because of the error above
}

//correct way 
{ 
    let name = "Doe"; // let is used to declare a variable that can be reassigned
    console.log(name); // prints "Doe"
}
{ 
    let name = "Smith"; // let is used to declare a variable that can be reassigned
    console.log(name); // prints "Smith"
}

// DATA TYPES : 2 types of data types : primitive and non-primitive data types

//primitive data types : string, number, boolean, null, undefined, symbol
//non-primitive data types : object, array, function

let name = "John"; // string
let age = 30; // number
let isMarried = false; // boolean
let address = null; // null
let phone; // undefined 
console.log(name); // prints "John"
console.log(age); // prints 30
console.log(isMarried); // prints false
console.log(address); // prints null
console.log(phone); // prints undefined

//typeof operator is used to check the data type of a variable. it returns a string indicating the type of the unevaluated operand.

console.log(typeof name); // prints "string"
console.log(typeof age);    // prints "number"
console.log(typeof isMarried); // prints "boolean"
console.log(typeof address); // prints "object"
console.log(typeof phone); // prints "undefined"

//non-primitive data types : object, array, function

let person = { name: "John", age: 30 }; // object values are stored in key:value pairs
let numbers = [1, 2, 3, 4, 5]; // array

// using const to declare an object is a good practice because we can not reassign the whole object but we can change the values of the properties of the object. this is because const only prevents reassignment of the variable but does not prevent modification of the object itself.

const student = {
    name: "John",
    age: 30,
    cgpa: 8.5,
    isPassed: true,
};

//assigning a new value inside an object is allowed in const but reassigning the whole object is not allowed.

const student = {
    name: "John",
    age: 30,
    cgpa: 8.5,
    isPassed: true,
};
student.name = "Doe"; // this is allowed because we are not reassigning the whole object but just changing the value of a property
console.log(student.name); // prints "Doe"

//ex : 
const product = {
  name : "Pen",
  price : 200,
  rating : 4.5,
  offer : 5 
};
console.log(product);
console.log(typeof product); // prints "object"

//Adding two strings is called concatenation. we can use + operator to concatenate two strings.

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // concatenation
console.log(fullName); // prints "John Doe"

//we can also use template literals to concatenate two strings. template literals are enclosed by backticks (`) and can contain placeholders for variables and expressions. we can use ${} to insert a variable or expression inside a template literal.

let firstName1 = "John";
let lastName1 = "Doe";
let fullName1 = `${firstName1} ${lastName1}`;
console.log(fullName1); // prints "John Doe"

//we can also use template literals to create multi-line strings. we can use backticks (`) to create a multi-line string.

let multiLineString = `This is a multi-line string.
It can span multiple lines.
We can use backticks to create a multi-line string.`;
console.log(multiLineString); // prints the multi-line string

//we can also use template literals to create expressions inside a string. we can use ${} to insert an expression inside a template literal.

let a = 10;
let b = 20;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // prints "The sum of 10 and 20 is 30."

//addition of string and number is called type coercion. we can use + operator to add a string and a number. the number will be converted to a string and then concatenated with the string.

let num = 10;
let str = "20";
let result = num + str;
console.log(result); // prints "1020"

//Addition of two numbers is called arithmetic operation. we can use + operator to add two numbers.

let num1 = 10;
let num2 = 20;
let sum1 = num1 + num2;
console.log(sum1); // prints 30

//Subtraction of two numbers is called arithmetic operation. we can use - operator to subtract two numbers. 

let num3 = 20;
let num4 = 10;
let difference = num3 - num4;
console.log(difference); // prints 10

//OPERATORS : 2 types of operators : arithmetic and comparison operators
//arithmetic operators : +, -, *, /, %, ++, --
//comparison operators : ==, ===, !=, !==, >, <, >=, <=

// 1. Arithmetic Operators :

let a = 10;
let b = 20;
console.log("a+b =", a+b); // prints 30
console.log("a-b =", a-b); // prints -10
console.log("a*b =", a*b); // prints 200
console.log("a/b =", a/b); // prints 0.5
console.log("a%b =", a%b); // prints 10
console.log("++a =", ++a); // prints 11 PRE-INCREMENT : value changes before the statement is executed. so first it will increment the value of a by 1 and then print it.
console.log("--b =", --b); // prints 19 PRE-DECREMENT : value changes before the statement is executed. so first it will decrement the value of b by 1 and then print it.
console.log("a =", a, "b =", b); // prints a = 11 b = 19 as previous values of a and b are updated after increment and decrement operations
console.log("a**b =", a**b); // prints 11^19 = 16679880978201

//2. UNARY OPERATORS :

let a = 5;
let b = 10;
console.log("a =", a, " & b =", b); // prints a = 5 & b = 10
a = a + 1; // incrementing a by 1
console.log(a); // prints 6
b = b - 1; // decrementing b by 1
console.log(b); // prints 9
a++; //POST-INCREMENT : value changes after the statement is executed. so first it will print the value of a and then increment it by 1.
console.log(a); // prints 7
b--; //POST-DECREMENT : value changes after the statement is executed. so first it will print the value of b and then decrement it by 1.
console.log(b); // prints 8

// 3. Assignment Operators : =, +=, -=, *=, /=, %=, **=

let x = 10;
let y = 20;
console.log("x =", x, " & y =", y);

x += 5; // equivalent to x = x + 5
console.log("x =", x);
y -= 5; // equivalent to y = y - 5
console.log("y =", y);
x *= 2; // equivalent to x = x * 2
console.log("x =", x);
y /= 2; // equivalent to y = y / 2
console.log("y =", y);
x %= 3; // equivalent to x = x % 3
console.log("x =", x);
y **= 2; // equivalent to y = y ** 2
console.log("y =", y);

// 3. Comparison Operators : ==, ===, !=, !==, >, <, >=, <=
let a = 4;
let b = 8;
console.log("a == b", a==b); // prints false
console.log("a != b", a!=b); // prints true

//taking a = 4 and b = "4" for comparison operators
let a = 4;
let b = "4";
console.log("a == b", a==b); // prints true because == operator only checks for value and not for data type and also we know string first converted to number for comparison.

//Strict equality operator (===) checks for both value and data type. if both are same then it returns true otherwise false.
console.log("a === b", a===b); // prints false because a is number and b is string so data types are different.

//Strict inequality operator (!==) checks for both value and data type. if both are different then it returns true otherwise false.
console.log("a !== b", a!==b); // prints true because a is number and b is string so data types are different.

// 4. Logical Operators : &&, ||, !

// a. Logical AND (&&) operator returns true if both operands are true otherwise it returns false. it is used to check multiple conditions at once. if all conditions are true then it returns true otherwise it returns false.
let a = 6;
let b = 4;

let cond1 = a>b; // true
let cond3 = a == 6; //true
console.log("cond1 && cond3 =", cond1 && cond3); // prints true because both conditions are true

// ex : 
let a = 8;
let b = 9;

let cond1 = a>b; // false
let cond2 = a<b; // true
console.log("cond1 && cond2 =", cond1 && cond2); // prints false because one condition is false

// ex : removing extra variables and directly using the conditions in the logical operator.
let a = 9;
let b = 7;

console.log("cond1 && cond2 =", a>b && b==7); // prints true because both conditions are true

// b. Logical OR (||) operator returns true if at least one operand is true otherwise it returns false. it is used to check multiple conditions at once. if at least one condition is true then it returns true otherwise it returns false.
let a = 87;
let b = 45;
console.log("cond1 || cond2 =", a>b || b==67); // prints true because one condition is true

// ex :
let a = 56;
let b = 23;
console.log("cond1 || cond2 =", a<b || a==20); // prints false because both conditions are false

// c. Logical NOT (!) operator returns true if the operand is false and returns false if the operand is true. it is used to reverse the boolean value of an operand.
let a = 10;
let b = 54;
console.log("!(a>b) =", !(a>b) ); // prints false because a>b is true and ! operator reverses it to false





