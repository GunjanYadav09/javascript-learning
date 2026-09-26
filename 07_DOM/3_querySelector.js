// :- Query Selector : better way to access elements.
// querySelector() is one of the most important DOM methods because it allows JavaScript to find an HTML element using a CSS selector.

// Think of it like:
// "Find me the first HTML element that matches this selector."

// Basic Syntax :
document.querySelector("selector"); 
// document.querySelector("myId/ myClass/ tag")
// returns first element

// ex :
// HTML :
// <h1>Hello</h1>

// JS :
let heading = document.querySelector("h1"); //return 1st element which will match to the given selector "h1"

console.log(heading);
// JavaScript searches the page for an <h1> and returns it.

console.dir(heading);


// A. Selecting by tag

// ex : HTML -> 
// <h1>Hello</h1>
// <p>Welcome</p>

// JS ->
let heading = document.querySelector("h1");

// Here :
// "h1"
//  ↓
// CSS selector
//  ↓
// find first <h1>
//  ↓
// return that element

// You can then modify it:
heading.textContent = "Hello JavaScript!";

// Here h1 gets updated from Hello to Hello JavaScript!


// B. Selecting by ID

// ex :  HTML ->
// <h1 id="title">Hello</h1>

// NOTE -> For an ID, CSS uses #.
// REMEMBER -> # → ID   AND   . → class

// JS ->
let heading = document.querySelector("#title");

// So , querySelector("#title") means : Find the element whose ID is title.


// C. Selecting by class

// ex :  HTML ->
// <p class="text">Hello</p>

// Use . before the class name:

// JS ->
let Newparagraph = document.querySelector(".text");


// IMPORTANT -> querySelector() returns only the FIRST match

// Suppose you have:
// <p class="text">One</p>
// <p class="text">Two</p>
// <p class="text">Three</p>

// And :
let paragraphNew = document.querySelector(".text");

// Only the first one will be selected.
// <p class="text">One</p>    ← selected ✅
// <p class="text">Two</p>
// <p class="text">Three</p>

// If you do :
paragraphNew.textContent = "Changed";
// The result becomes:
// Changed
// Two
// Three


// D. querySelector() can use complex CSS selectors
// This is one of its biggest advantages.

// a. Descendant selector :

// ex : HTML ->
// <div>
//     <p>Hello</p>
// </div>

// You can write:
let paragraphMy = document.querySelector("div p");

// Mean : Find a <p> inside a <div>.


// b. Class inside a div :

// ex :  HTML ->
// <div class="container">
//     <p class="text">Hello</p>
// </div>

// JS ->
let p = document.querySelector(".container .text");
// It means:
// Find an element with class text that is inside an element with class container.
// will find:
// <p class="text">Hello</p>
// querySelector() It returns the first HTML element that matches the selector.
// means ->   
// document
//   ↓
// search the entire HTML document
//   ↓
// find .container
//   ↓
//inside it, find .text
//   ↓
//return the FIRST matching element
//   ↓
//store it in variable p

// So, p now contains the actual <p> element.

// You can then do:
console.log(p.textContent);
// Output: Hello

// or
p.textContent = "Welcome!";
// Now the HTML effectively becomes:
// <p class="text">Welcome!</p>


// c. Input by type :

// ex:  HTML ->
// <input type="text">

// JS ->
let input = document.querySelector('input[type="text"]');
// This is exactly the same selector style you use in CSS.


// -> querySelector() vs getElementById() :
// Both can find an element.

// 1. getElementById()
document.getElementById("title");

// 2. querySelector()
document.querySelector("#title");

// Both can find :   <h1 id="title">Hello</h1>

// : But querySelector() is more flexible because it supports CSS selectors.

// ex : 
document.querySelector(".box");
document.querySelector("p");
document.querySelector("#title");
document.querySelector("div p");
document.querySelector("input[type='text']");


// VERY IMP : querySelector() vs querySelectorAll()

// Suppose ->
// <p class="text">One</p>
// <p class="text">Two</p>
// <p class="text">Three</p>

// 1. querySelector()
let p = document.querySelector(".text");
//  o/p : One
// Only the FIRST MATCHING ELEMENT.

// 2. querySelectorAll()
let paragraph1 = document.querySelectorAll(".text");
// o/p :  
// One
// Two
// Three

// All matching elements.


// A practical example :
// HTML ->
// <h1 id="title">My Website</h1>
// <button class="btn">Change Title</button>

// JS ->
let title = document.querySelector("#title");
let button = document.querySelector(".btn");

button.addEventListener("click", function() {
    title.textContent = "Welcome to JavaScript!";
});

// What happens?
// first -> 
document.querySelector("#title");
// finds:   <h1 id="title">My Website</h1>
// then :  
document.querySelector(".btn");
// finds :   <button class="btn">Change Title</button>
// then :
button.addEventListener("click", function() {});
// waits for the button to be clicked.
// When clicked :
title.textContent = "Welcome to JavaScript!";
// Changes the heading.

// 🧠 The main thing to remember :
// querySelector() uses CSS selector syntax:
document.querySelector("h1");        // tag
document.querySelector("#title");    // id
document.querySelector(".box");      // class
document.querySelector("div p");     // p inside div
document.querySelector("input");     // input

// And :
// querySelector() → returns the first matching element.

// querySelectorAll() : 
// 1. Selecting all elements with a class

// ex: 
// <p class="text">Hello</p>
// <p class="text">JavaScript</p>
// <p class="text">DOM</p>

// JS ->
let elements = document.querySelectorAll(".text");
console.log(elements);
// All three elements are selected.

// 2. Using forEach() ⭐
// This connects directly to what you learned earlier.

// ex: 
// <p class="text">Hello</p>
// <p class="text">JavaScript</p>
// <p class="text">DOM</p>

// JS -> We select all:
let paragraphs2 = document.querySelectorAll(".text");
// Now we can use forEach():
paragraphs2.forEach(function(paragraph) {
    console.log(paragraph.textContent);
});
// o/p : 
// Hello
// JavaScript
// DOM

// What's happening?
// querySelectorAll()
//         ↓
// gets all elements
//         ↓
// forEach()
//         ↓
// visits each element
//         ↓
// do something with it


// 3. Changing all elements :

// ex:
// <p class="text">One</p>
// <p class="text">Two</p>
// <p class="text">Three</p>

// JS ->
let paragraphs3 = document.querySelectorAll(".text");

paragraphs3.forEach(function(p) {
    p.textContent = "Changed";
});
// Now the webpage becomes:
// Changed
// Changed
// Changed


// 4. Changing CSS of multiple elements :

let paragraphs4 = document.querySelectorAll(".text");

paragraphs4.forEach(function(p) {
    p.style.fontSize = "25px";
});
// Every selected paragraph gets a larger font.

// It can use the same CSS selectors -> Just like querySelector():
document.querySelectorAll("p");
document.querySelectorAll(".box");
document.querySelectorAll("#container p");
document.querySelectorAll("div p");
document.querySelectorAll("input[type='text']");

// Important: What does querySelectorAll() return?
// -> querySelectorAll() returns a "NodeList".

// ex :
let items = document.querySelectorAll(".item");
console.log(items);

// You'll see something similar to:
// NodeList(3) [
//    <p class="item">One</p>,
//    <p class="item">Two</p>,
//    <p class="item">Three</p>
// ]
// You can access individual elements using indexes:
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
// Remember that indexing starts from 0.

// 5. length :
// You can find how many elements were selected:

let items1 = document.querySelectorAll(".item");

console.log(items1.length);
// If there are 3 matching elements:
// o/p : 3


// 6. What if nothing matches?
// Suppose there is no element with class box:

let boxes = document.querySelectorAll(".box");

console.log(boxes);
// You'll get an empty NodeList:
// o/p :   NodeList(0) []
// It doesn't throw an error just because there are no matches.


// Very useful practical example

// <h2>My Skills</h2>
// <ul>
//     <li class="skill">HTML</li>
//     <li class="skill">CSS</li>
//     <li class="skill">JavaScript</li>
// </ul>

// JS ->
let skills = document.querySelectorAll(".skill");
skills.forEach(function(skill) {
    console.log(skill.textContent);
});
// o/p :
// HTML
// CSS
// JavaScript

// You could also change them:
skills.forEach(function(skill) {
    skill.style.color = "blue";
});


// 🧠 Remember this pattern :
// You have now learned:

// document
//    ↓
// querySelector()
//    ↓
// select ONE element

// AND :

// document
//   ↓
// querySelectorAll()
//    ↓
// select ALL matching elements
//    ↓
// forEach()
//    ↓
// work with each element


// Therefore , Your DOM toolkit so far:
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("tag");

document.querySelectorAll(".class");

elements.forEach(function(element) {
    // work with element
});