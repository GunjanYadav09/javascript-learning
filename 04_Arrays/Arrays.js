// ARRAYS : Arrays in JavaScript are used to store multiple values in a single variable , They are used mostly when we want to store related informations so instead of creating an obj. we store our info in an array. They are dynamic, meaning they can grow or shrink as needed.
// It is a linear way of storing related info. or data.

//As such in case of Objects key matters the most same way in case of Arrays position i.e. INDEX matters the most

// 1. -> CREATING AN ARRAY :

// Syntax : let array_name = ["value1, value2, value3,.......,value_n"];

let fruits = ["apple", "mango", "pear"]; //USING ARRAY LETERAL(recommended)

let num = new Array(1, 2, 3, 4); //USING ARRAY CONSTRUCTOR

let info = ["rahul", 34, "Delhi", 98.7]; //CAN ADD MULTIPLE TYPE OF VALUES

// EX: 
let marks = [23, 45, 78];
console.log(marks);
//prints : (3)  [23, 45, 78]
// (3) is size of an array we have created.

// Printing array length:
console.log(marks.length);
// prints : 3

//Lets check the type of array marks:
console.log(typeof marks);
//print : object
// That mean an Array is itself "OBJECT" type 
// Array is also like Obj. Obj. have key : value pairs but arrays has index : value pairs.

// 2. -> ACCESSING ARRAY ELEMENTS (ARRAY INDICES) :

//Syntax : array_name[index];

let name = ["rohan", "priya", "seema"];

console.log(name[0]); //rohan
console.log(name[1]); //priya
console.log(name[2]); //seema
console.log(name[4]); //undefined , as we do not have any value at index 4.

// 3. -> MODIFYING ELEMENTS : With the help of Index we can modify the values of an array

//Syntax : array_name[index] = "new_value";

let name = ["ram", "priya", "sneha"];
name[2] = "mohan";
console.log(name);
//prints : ["ram", "priya", "mohan"]

// This tells -> Arrays are MUTABLE i.e. it can be modify, change, update.
// whereas we know strings in JS are immutable (we cannot directly change our string values by particular index)


// 4. -> COMMON ARRAY METHODS :

// a-> push() - ADD element or value to the end

let arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]

// b-> pop() – Remove value from the end and also returns the deleted value

let arr = [1, 2, 3];
arr.pop();

console.log(arr); // [1, 2, 3]

// c-> unshift() – Add value to the beginning

let arr = [1, 2, 3];
arr.unshift(0);

console.log(arr); // [0, 1, 2, 3]

// d-> shift() – Remove value from the beginning

let arr = [1, 2, 3];
arr.shift();

console.log(arr); // [1, 2, 3]

// e-> includes() – Check if an element exists

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Mango"));  // false

// f-> indexOf() – Find the index of an elements

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Orange")); // 2


// g-> toString() - Coverts array to string.
let arr = [1, 2, 3];
console.log(arr.toString()); //this will create a new string , it will not change an existing array.
//prints: '1,2,3'


// h-> Concat() - Joins multiple arrays & returns results.
 //syntax : array_1.concat(array_2);
let stud1 = ["ram","priya"];
let stud2 = ["singh", "sharma"];

let total_stud = stud_1.concat(stud_2);  // original array remains as it is , changes are done in newly created array.
console.log(total_stud);
//prints: ['ram', 'priya', 'singh', 'sharma']


// i-> slice() - returns a peice of the array
 // syntax: slice(start_index,end_index)
let stud = ["rohan", "pranav", "priya", "arnav"];
console.log(stud.slice(1,3));
//prints: ['pranav', 'priya']


// j-> splice() - Change original array(add, remove, replace)
 //Syntax :  splice(start_index, delCount, new_element);
// delCount mean how many items to delete  from the start_index including start_index also.
let arr = [1,2,3,4,5,,6,7];

console.log(arr.splice(2, 2, 101, 102));
//prints: [1,2,101,102,5,6,7]

//Adding element without deleting any element
console.log(arr.splice(2, 0, 101));
//prints: [1,2,101,3,4,5,6,7]

//Only deleting an element.
console.log(arr.splice(3, 1));
// prints: [1,2,3,5,6,7]

//Replacing element.
console.log(arr.splice(3, 1, 104));
//prints: [1,2,3,104,5,6,7]

//Passing only index.
console.log(arr.splice(4));
//prints: [5,6,7] 
//It starts acting like slice() method , returns all the elements after index 4




// 5. -> LOOPING THROUGH AN ARRAY:

//Suppose we want to print all elemnts of an array.

// method a- printing every element by index(general method)-
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[2]); //Orange
//Takes Max. time and memory.

// method b - (Better and Optimized Way) USING LOOPS :

// 1- for loop : Used when you need the index or want precise control over the loop.
// Syntax : for (initialization; condition; update) {
    // code to execute
//}

let arr = [1,2,3];
for(let i=0; i < arr.length; i++){  //arr length = index+1 => 2+1 => 3 . never take (i <= arr.length) always take (i < arr.length). 
    console.log(arr[i]);
}
// prints: 1
//         2
//         3

//We can take (i <= arr.length) only when our index is initializing from i=1
//But generally our for loops in programming always iterate from 0 value instead of 1.

// 2- for...of loop : Used when you want to directly access the values/elements of an array.
// Syntax : for (let element of array_name) {
    // code
//}

let arr = [10, 20, 30, 40];

for (let value of arr) {
    console.log(value);  //accessing individual elements/values.
}
// prints : 10
//          20
//          30
//          40
//You don't need to manually use arr[i].

//Ex : suppose we need to print all cities name in uppercase .
let cities = ["delhi", "pune", "goa"];
for(let city of cities) {
    console.log(city.toUpperCase());
}
//Prints : DELHI
//         PUNE
//         GOA

//QUES : For a given array with marks of students [85, 97, 44, 37, 76, 60].
//Find the avg. marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0; //it will store sum value, initially sum is 0

for(let val of marks) {
    sum += val; //values keep adding in sum 
}
let avg = sum/marks.length;
console.log("avg. marks of the entire class is:", avg);


//QUES : For a given array with prices of 5 items [250, 645, 300, 900, 50].
//All items have an offer of 10% 0FF on them.
//Change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];
let index = 0; //tracking our index value as to do change in array we have to access index.

for(let val of items) {

    let offer = val/10; 
     //ex. val = 300 => offer = 300/10 = 30
    items[index] = items[index]-offer;
     //items[2] = items[2]-30 => items[2] = 300-30 = 270.
    console.log(`value after offer = ${items[index]}`);
    index++;
}

//same can be done using => for loop
let items = [250, 645, 300, 900, 50];

for(let i=0; i<items.length; i++) {
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);
//prints : [225, 580.5, 270, 810, 45]

// 3. -> for...in loop : Used to iterate over the indexes/keys.
//Syntax : for (let index in array) {
    // code
//}

let arr = [10, 20, 30, 40];

for (let index in arr) {
    console.log(index);
}
//prints : 0
//         1
//         2
//         3

//to get values -
for (let index in arr) {
    console.log(arr[index]);
}
//prints: 10
//        20
//        30
//        40

//IMPORTANT : For arrays, prefer for...of when you need values. for...in is more commonly useful for objects.



//QUES: Create an array to store companies-> "bloom", "micro", "uber", "google", "ibm", "netflix"
// Remove the first company from the array
// Remove uber & add ola in its place
// Add amazon at the end

let companies = ["bloom", "micro", "uber", "google", "ibm", "netflix"];

companies.shift(); //remove first company as we know this method is used to remove beginning element
companies.splice(2, 1, "ola");  //uber is replaced by ola
companies.push("amazon"); //add at the end of the array

