// LOOPS in JS :  Loops are used to execute a peice of code again and again .

// 1-> for loop , this is used when you want to repeat a block of code multiple times, usually when you know how many times younwant to repeat it .
// syntax ->  for(initialization; condition; update) { // code to repeat }
// initialization ; where the loop starts ,  condition ; how long the loop should continue(stopping cond.),  update ; how the loop variable changes .
for(let i = 1; i<=5; i++) {
    console.log("hello");
}   // prints hello 5 times 
console.log("loop has ended"); // prints this msg, when i bocomes greater than 5.

// Calculate the sum of first n numbers 
let sum = 0;
for(let i = 1; i<=5; i++){
    sum = sum +1
}
console.log("sum =", sum); // prints sum = 15

//2nd method : 
let sum=0;
let n=5; // creating a stoping cond. variable 
for(i=1; i=n; i++){
    sum=sum+1
}
console.log("sum =", sum);

// Imp. Observation :
for (let i = 1; i<=8; i++){
    console.log("i=", i); // prints: i=1  i=2  i=3  i=4  i=5
}
console.log(i); //as per our assumption for this line i value should be printed as 6 But this line 30 will give error : i is not defined -> this is because i variable is defined inside block scope i.e. it is only working till for loop block after that or outside the loop it will completely ends from the memory. So, if we want to use i outside the loop we want to redeclare it .
// but if in place of writing let i inside for loop if we have written var i i.e. declared i inside for loop by var then i can also survive outside for loop no need to declare it outside the loop .

for(var i = i; i<=9; i++) {
    console.log("i=", i); // prints: i=1  i=2  i=3  i=4  i=5
}
console.log(i); // so in case of var value of i print 6 , as var is a global variable can survive or run globally inside or outside the loop.

// 2. Infinite loop -> An infinite loop is a loop that never stops because its condition always remains true or we can say its stopping cond. never returns false.
// never make these loops in program ,because they can make the program keep running and consume CPU/memory.
// But intentional infinite loops are sometimes used when a program is supposed to keep running continuously.
// This can be intentional in things like servers or event-processing systems, but usually you'd have a way to exit using break or another stopping mechanism.
for(let i=1; i>=0; i++){
    console.log("i=", i); 
} // i>=0 is a never ending condition always true condition.


// 3. while loop -> A while loop repeatedly executes a block of code as long as the given condition is true.
// syntax : while (condition) {
    // code to execute
//}
//condition - stopping cond. , until the stopping cob is true the loop keep running but when this stopping cond becomes false loops gets terminated.
// Variable initialization is done before the while loop 
// updation is done inside the loop only.
let i=1; //variable initialization
while(i<=5) {
    console.log('i=',i);
    i++; //updating i value
}    // prints i=1  i=2  i=3  i=4  i=5


//4. do-while loop -> A do...while loop executes the code at least once, and then checks the condition.
// Syntax : do {
    // code to execute
//} while (condition);
// condition is checked at the last but in while loop condition is checked at the beginning only
let i=20;
do{
    console.log("hii");
    i++;
} while (i<=10);
// hii will prints only one time as value of i = 20 and cond. is i<=10 so cond. fails , thatswhy only do loop will print one time .

//printing numbers from 1 to 5 
let i=5;
do {
    console.log("i=", i);
} while(i<=5);
// prints i=1  i=2  i=3  i=4  i=5


// 5. for-of loop -> A for...of loop is used to loop through the values of an iterable, such as an array or string.
// Syntax :  for (let value of iterable) {
    // code
//}

// for string variables :  for(let value of strvariable) {
                               // code
                            //}
let str= "Hello";

for(let i of str) {  //i here is iterator it is iterating values/characters of str 
    console.log("i=", i); //prints i=H  i=e  i=l  i=l  i=o
}
// in it we do not need to mention initialization not updation not condition , it will automatically comes 

//we can perform any operations with these characters 
// suppose we want to calculate the length of string.
let str= "JavaScript";
let length = 0;
for(let i in str) {
    console.log("i=", i);
    length++;
}
console.log("length of str=", length); //prints 10
//This loop is only used for strings and arrays values not for Objects.

// FOr Objects we ue for-in loop:
//6. for-in loop -> A for...in loop is used to loop through the keys/properties of an object.
//syntax : for (let key in object) {
// code
//}
let student = {
    name: "Gunjan",
    age: 20,
    course: "CSE"
}; // student is our Object .

for (let key in student) {
    console.log(key);
}    
// prints name
//        age
//        course

// ex :
let fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
    console.log(index);
}
// prints : 0
//          1
//          2

// but in case of using for-of :
let fruits = ["apple", "banana", "mango"];
for(let val of fruits) {
    console.log("val=", val);
}
// prints : apple
//          banana
//          mango

//ex. printing both keys and values
let stud={
    name:"rahul",
    age:23,
    cgpa:8.9,
    isPass:true 
};
for(let key in stud) {
    console.log("key=", key, "value=", stud[key]);
}

// ALWAYS REMEMBER : in -> keys/indexes  (works on objects)
//                   of -> values  (works on strings and arrays)

//QUES- print all even no. from 0 to 100.
for(let num=0; num<=100; num++){
    if(num%2 == 0){
        console.log("even num=", num);
    }
}

//Ques- Create a game where u start with any random game num. ask the user to keep guessing the game num until the user enters correct value.
let gameNum=25;

let userNum = prompt("GUESS THE GAME NUM:");
while(userNum != gameNum){  //always remember never use == with prompt because in prompt values come in the form of string. We can put == but only if our gameNum or the given value by us is also in string format i.e like this "25"
    userNum= prompt("you entered the wrong num, Guess again:");

}
console.log("Congratulations! you entered the correct num.");


// STRINGS IN JS :
// String is a sequence of characters used to reperesent text.
// ex : let name = "Gunjan";
//      let city = 'Delhi';

//Both " " and ' ' can be used to create strings.

//1. Different ways to create a string :
//let str1 = "Hello";
//let str2 = 'Hello';
//let str3 = `Hello`;  uses backticks (`) and is called a template literal.

//2. String indexing : (In-built func. of strings)
//Each character has an index, starting from 0.
//let word = "Hello";
//Character	H	e	l	l	o
//Index   	0	1	2	3	4

//You can access a character using:
let word = "Hello";
console.log(word[0]);  // H
console.log(word[2]);  // l

//3. Length of a string : (in-built property of strings)
//Use str.length: (length is an internal variable of strings)
let word = "Hello";
console.log(word.length);
// prints 5

//4. 4. Strings are immutable
//This is important for JavaScript.
//You cannot directly change an individual character:
let word = "Hello";
word[0] = "Y";

console.log(word); 
//It will still be: Hello  , Instead, you create a new string.


//5. Common string methods :
let str = "Hello World";

newStr = str.toUpperCase();    // "HELLO WORLD"
console.log(newStr);
str.toLowerCase();    // "hello world"
str.includes("World"); // true
str.indexOf("World");  // 6
//slice method -> str.slice(start, end?) , it feturns part of string.
str.slice(0, 5);       // "Hello"
str.trim();            // removes whitespaces from beginning/end

// Concatenation
//You can combine strings using +:
//1. Basic  Method -
let firstName = "Gunjan";
let lastName = "Yadav";

let fullName = firstName + " " + lastName;
console.log(fullName);
//prints : Gunjan Yadav

// Using : str1.concat(str2) -> joins str2 with str1
let str1 = "hello";
let str2 = "guys";

let str3 = str1.concat(str2);
console.log(str3);
// prints: helloguys

// Replace Method -> used to search any value inside the string and then replace it with the given new value.
// Syntax -> str.replace(searchVal, newVal)
let str = "mat";
console.log(str.replace("m", "c"));
// prints : cat


//TEMPLATE LITERALS -> A way to have embedded expressions in strings.
// syntax :  `this is made by backticks`;
let specialStr = `this is a template literal`;
console.log(specialStr);
console.log(typeof specialStr);
//prints : this is a template literal
//prints : string

//why to use templete literal in string what is the reason of using them?
// -> Template literals are mainly used when you want to insert variables or expressions directly inside a string and when you want to write multi-line strings more easily.

//ex : 1. Inserting variables easily
// -> Without a template literal:
let name = "Gunjan";
let age = 20;

console.log("My name is " , name , " and I am " , age , " years old.");
//This works, but it becomes difficult to read when you have many variables.

// -> With a template literal:
let name = "Gunjan";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
//Much cleaner. 👍
// ${name} means "put the value of name here."

// 2: Can put expressions inside 
// "STRING INTERPOLATION" : To create strings by doing substitution of placeholders (values are calculated at runtime).
let a = 10;
let b = 20;

console.log(`The sum is ${a + b}`);
// prints : The sum is 30

// so, You can put calculations, function calls, etc. inside ${ }.


// 3: 3. Multi-line strings
//Without template literals:
let message = "Hello\nWelcome to JavaScript\nKeep learning!";
// so complicated

//With template literals:
let message = `Hello
Welcome to JavaScript
Keep learning!`;
//This is much easier to write and read.

//ex:
//without template literals:
let obj = {
    item: "pen",
    price: 10
};
console.log("the cost of", obj.item, "is", obj.price);
//prints : the cost of pen is 10

//with template literals:
//we can combine whole result in a single string only
let obj = {
    item: "pen",
    price: 10
};
let result = `the cost of ${obj.item} is ${obj.price} rupees:`
console.log(result);

//So why use them?
//Think of it like this:
//Normal quotes → good for simple text.
//Template literals → useful when your text contains variables, expressions, or multiple lines.

//Now with Template Literals we also have ESCAPE CHARACTERS.
// ESCAPE CHARACTERS -> An escape character is used with a backslash \ to represent special characters inside a string.
// suppose sometimes inside console.log we have a wide or big output or result 
// and I want that result or output comes in seperate lines , so we use an escape char. \n (it will give next line to the string).
console.log("hii, my name is robot\nI am good.");

//| Escape  | Meaning      | Example          |

//| `\n`    | New line     | `Hello\nWorld`   |
//| `\t`    | Tab space    | `Hello\tWorld`   |
//| `\\`    | Backslash    | `C:\\Users`      |
//| `\'`    | Single quote | `It\'s`          |
//| `\"`    | Double quote | `He said \"Hi\"` |
//| ``\` `` | Backtick     | `` \`Hello\` ``  |









