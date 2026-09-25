// 🌐 What is DOM?
// DOM = Document Object Model
// When a browser loads your HTML, it converts the HTML document into a tree-like structure of objects.
// For example:
// <!DOCTYPE html>
// <html>
//  <body>
//    <h1>Hello</h1>
//    <p>Welcome to my website</p>
//    <button>Click Me</button>
//  </body>
//</html>

// The browser represents it roughly like:
//Document
//   │
//   └── html
//        │
//        └── body
//             ├── h1
//             │    └── "Hello"
//             │
//               ├── p
//             │    └── "Welcome to my website"
//             │
//                └── button
//                  └── "Click Me"

// JavaScript can access these objects and change them.

// 1. Why do we need DOM?
// Suppose HTML contains:
// <h1>Hello Gunjan</h1>
// Normally, HTML displays:
// Hello Gunjan
// But with JS you can change it:
document.querySelector("h1").textContent = "Hello Gunjan";
// Now the web page displays:
// Hello Gunjan

// So the basic idea is:
// HTML → Browser creates DOM → JavaScript manipulates DOM → Webpage changes

// 🪟 JavaScript window Object :

// 1. What is window?
// When JavaScript runs inside a browser, the browser provides a global object called: window
// The window object represents the browser window and provides methods, properties, and events to interact with it.
// It represents the browser window/tab in which your webpage is running.
// The window obj. rep. an open window in a browser. It is browser's obj. (not JS's) & is automatically created by browser when a webpage is loaded no need to deine it. It is the top-level onject in the browser's JavaScript environment. All global variables and functions are properties and methods of the window object. 

//Think of it like:

//Browser Tab
//│
//└── window
//     │
//     ├── document
//     ├── console
//     ├── location
//     ├── history
//     ├── localStorage
//     ├── alert()
//     ├── setTimeout()
//     └── setInterval()

// The DOM is accessed through window.document.
// is essentially the same as:
//document
//That's because document is a property of window.

// 2. The document object
//The most important object when working with DOM is: document
// It rep. the entire HTML page loaded in the browser and provide methods and properties to acccess and manipulate the content of the page.

// ex : 
// console.log(document);
// We can use "ducument" to find HTML elements, change their content, add new elements, remove exixting elements and more.

// 3. window is the global object
// Try: 
// console.log(window);
// You will see that the window object has many properties and methods, including the document object.
// In fact, the window object is the global object in the browser environment, which means that all global variables and functions are presently properties and methods of the window object.
// You'll see a huge object containing many browser-related properties and methods.
// For example, if you define a global variable:
var myVariable = "Hello";
// You can access it as a property of the window object:
console.log(window.myVariable); 
// o/p : Hello

// For ex:
 window.document
 window.console
 window.location
 window.history

// You can also write : to create alert by using window obj.
 window.alert("Hello");

// also :
 window.console.log("Hello");

// or simply :
alert("Hello");
// Both work because alert() is available through the global window object.

// 4. window.prompt() 
// You can ask the user for input:
let name = window.prompt("Enter your name:");

console.log(name);
// if the user enters "Gunjan" , then :
// name contains : "Gunjan"

// Again, this also works:
let myname = prompt("Enter your name:");

// 5. window.confirm()
// This creates an OK/Cancel dialog.
let result = window.confirm("Are you sure?");
// If the user clicks "OK", result will be true. If the user clicks "Cancel", result will be false.
result === true
result === false

// ex :
if (confirm("Delete this item?")) {
    console.log("Deleted");
} else {
    console.log("Cancelled");
}

// 6. window.setTimeout()
// This runs a function once after a specified amount of time.
setTimeout(function() {
    console.log("Hello after 2 sec");
}, 2000); // 2000 milliseconds = 2 sec

// So :
// Prog starts -> Wait 2 sec -> Func. Executes

// The full form is :
// window.setTimeout(function, millisec);

// But normally we just write setTimeout() because window is the global obj.

// 7. window.setInterval()
// This repeatedly executes a function after a fixed interval.
setInterval(function() {
    console.log("Hello every 1 sec");
}, 1000);
// this prints : Hello every 1 sec in console regularly after every 1 sec.

// This is especially useful for things like:
//digital clocks
//timers
//countdowns
//automatic updates

// ex :
setInterval(() => {
    console.log(new Date());
}, 1000);

// 8. window.location()
// location contains information about the current webpage/URL.
console.log(window.location);

// You can get the current URL:
console.log(window.location.href);

// You can also change the URL, which will navigate to a new page:
window.location.href = "https://www.example.com";

// 9. window.history()
// The history object lets JavaScript interact with the browser's navigation history.

// ex :
window.history.back();
// This will take the user back to the previous page in their history.
// This is similar to clicking the browser's BACK button.

// You can also go forward:
window.history.forward();

// 10. window.innerWidth and innerHeight
// You can get the size of the browser's viewport.
console.log(window.innerWidth);
console.log(window.innerHeight);

// ex :
// innerWidth  → 1366
// innerHeight → 650

// These values can change when the browser window is resized.
// This becomes useful in responsive web development.

// 11. localStorage 
//  window also provides access to browser storage.
localStorage.setItem("name", "Gunjan");
// Retrieve it:
let Myname = localStorage.getItem("name");
console.log(name);
// o/p : Gunjan

// Remove it :
localStorage.removeItem("Myname");

// 12 . sessionStorage
// Similar to localStorage, but done for the current session only. Data is cleared when the page session ends.
sessionStorage.setItem("sessionName", "Gunjan");
let sessionName = sessionStorage.getItem("sessionName");
console.log(sessionName);
// o/p : Gunjan

// Remove it :
sessionStorage.removeItem("sessionName");


// Now Getting Back to "DOM" :

// When a web page is loaded, the browser creates a DOM of the page .
// Structure of the Dom is similar to the structure of the HTML document, but it is represented as a tree of objects that can be modified with JavaScript. The DOM provides a way for JavaScript to access and modify the content, structure, and style of a web page. 
// It allows developers to create dynamic and interactive web pages by manipulating the elements of the page in real-time.
// window -> document (sub-obj of window obj) -> HTML -> head , body -> head(meta, title, link) , body(div and script) -> div(img, h1, p, div)
// All branches of the DOM tree are called Nodes and all Nodes are Treated as OBJECT.

window.document
// When we run this in console -> It will give us whole HTML code

console.dir(window.document);
// or can also write simply just :
console.dir(document); // as window ia a global obj.
// This is used when we want to see Properties and Methods of document obj.

// Whereas console.log -> this prints obj as an element
console.log(window.document);
// prints HTML code

// Therefore we use "console.dir" to print our object

// Suppose if we want to access body inside document then we will write :
console.dir(document.body);
// It will give us complete info. of body obj. like childnodes, properties and methods used inside body obj, etc. 

// But if we write :
console.log(document.body);
// It will print complete body code only.

// We can also get subparts of body obj :
console.dir(document.body.childNodes[1]);
// So it will print childnode which is on 1st position inside body

// Till now it is cleared that -> DOM is a way to access HTML code inside JS.
// These all things are basically used when we want to make changes in our HTML code 
// So, basically when we want changes at runtime(when user is currently accessing) then these changes can be done by only JS not by HTML and CSS .
// Thatswhy we do Dynamic changes inside JS.

// ex : My all files have been loaded and my created page is loaded on browser , but I want to change its background color or just want to test a new background color .
// So, instead of making changes in the CSS or HTML file , what we can directly do is -> In console by using DOM can make changes directly or dynamically
document.body.style.background = "blue";
// also after refressing the page we get back to our previous page with no changes.

// Therefore , DOM is used to make DYNAMIC CHANGES or DYNAMIC MANIPULATION in our web page.

// -> Selecting HTML elements :
// There are several ways to select elements.

// 1 . getElementById() 
// A. Selecting by Id i.e. giving individual Id to each element to access them. (Id is unique)
// Syntax : document.getElementBYId("MyId");

// HTML : 
 <h1 id="title">Hello</h1>

// JS :
 let heading = document.getElementById("title"); // It will return the value of tittle only.

 console.log(heading); // prints current value -> Hello
// You can then change it:
 heading.textContent = "Welcome!";
// Now in place of Hello we got Welcome!

// In CSS we use # to demonestrate an Id

// :- You can also use: 
// innerHTML

// HTML : 
// <div id="box"></div>

// JS : 
document.getElementById("box").innerHTML = "<h2> Hello! </h2>";
// The browser will create an <h2> inside the div.

// Difference : 
element.textContent = "<b>Hello</b>";
// Displays : 
 // <b>Hello</b>

// Whereas JS :
 element.innerHTML = "<b>Hello</b>";

// renders : 
 // Hello 

// So : textContent → treats content as text
//      innerHTML   → interprets HTML

// :- Changing CSS

// Suppose:
// HtTML :
// <h1 id="title">Hello</h1>

// JS :
let title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "40px";
// Now JavaScript has changed the appearance of the element.
// You can modify many CSS properties:
title.style.backgroundColor = "yellow";
title.style.marginTop = "20px";
title.style.textAlign = "center";

// :- Changing attributes

// HTML :
// <img id="photo" src="old.jpg">

// JS :
let image = document.getElementById("photo");

image.src = "new.jpg";
// The image source changes.
// You can also use:
image.setAttribute("src", "new.jpg");

// And retrieve an attribute:
image.getAttribute("src");


// B. Selecting with class 
// Suppose we got a cond. where I want my Button color to be white also paragraph color to be white .
// Basically if we want to assemble multiple elements inside same category then we use Selecting with class .
// Syntax : document.getElementsByClassName("myClass");
// Class can be same for many elements.

// HTML :
// <h2 class ="Heading"> DOM </h2>
// <h2 class = "Heading"> JS </h2>
// <h3 class = "Heading"> TOPIC 1</h3>

// In CSS we use . to demonestrate ClassName

// JS :
let headings = document.getElementsByClassName("Heading");
console.dir(headings);
// prints current headings 
console.log(headings);
// prints HTML code of headings

// POINT TO BE NOTED :
// If we search a class element which is not actually present in our HTML code then it will returns length = 0 as their is no existence of such a class 
// If we search a Id element which is not actually present in our HTML code then it will return null 

// Basically .ClassName returns a HTML collection very similar to an Array (having index values, length property, but do not have methods like Push and Pop). So HTML collection is a diff. type of structure in which our data gets stored.

// C. Selecting by tag
// Suppose your HTML is:
// <h1>Hello</h1>
// <p>Welcome</p>
// <p>Learning JavaScript</p>

// Here : h1 is a tag
//        p is a tag

// JavaScript can find elements using their tag name.
// The main method is :
// Syntax : document.getElementsByTagName("tagName");

// ex :
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
// This selects all <p> elements.

// if html is :
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// Then :
// document.getElementsByTagName("p");
// selects all three.
// Therefore , it can return multiple elements.

// ex : 
// HTML is : 
// <h2>One</h2>
// <h2>Two</h2>
// <h2>Three</h2>

// JS :
let newheadings = document.getElementsByTagName("h2");

console.log(newheadings);

// You get something similar to:
// HTMLCollection(3)
//    0 → <h2>One</h2>
//    1 → <h2>Two</h2>
//    2 → <h2>Three</h2>


// :- Accessing a particular element
// Because multiple elements can be returned, you can use an index.

// For HTML : 
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// JS : 
let paragraph = document.getElementsByTagName("p");

console.log(paragraph[0]);
console.log(paragraph[1]);
console.log(paragraph[2]);

// the result is:
// paragraphs[0] → Hello
// paragraphs[1] → World
// paragraphs[2] → JavaScript

// REMEMBER : 
// Arrays start from index 0, and the returned collection can be accessed by index too.

// :- Changing an element
// Suppose HTML :
// <h1>Hello</h1>
// <h1>Welcome</h1>

// JS :
let myheadings = document.getElementsByTagName("h1");

myheadings[0].textContent = "Hello Gunjan";

// Now : Hello Gunjan
//       Welcome
// Only the first <h1> changed.

// :- Changing ALL elements
//This is where your recently learned forEach() concept becomes useful.

//Suppose:
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// We can loop through them:
let myparagraphs = document.getElementsByTagName("p");

for (let i = 0; i < myparagraphs.length; i++) {
    myparagraphs[i].style.color = "red";
}
// Every <p> becomes red.

// Dry Run :
// Suppose , paragraphs.length = 3
// Then -> 
// i = 0 → paragraphs[0]
// i = 1 → paragraphs[1]
// i = 2 → paragraphs[2]
// i = 3 → stop

// :- getElementsByTagName() can be used on an element too

//It doesn't have to start from document.
// For example: HTML 

//<div id="box">
//    <p>Hello</p>
//    <p>World</p>
//</div>

//<p>Outside</p>

//We can first select the div:
let box = document.getElementById("box");

// Then find <p> elements inside that div:
let newparagraphs = box.getElementsByTagName("p");
// This selects:
//Hello
//World

//but NOT: Outside
//That's because we're searching only inside box.

// :- Important: getElementsByTagName() returns an HTMLCollection

// ex:
let myparagraph = document.getElementsByTagName("p");

console.log(myparagraph);
// The result is generally an: HTMLCollection
// It looks somewhat like an array:
//paragraphs[0]
//paragraphs[1]
//paragraphs.length

// But it is not a normal JavaScript Array.
// This distinction becomes important when using methods like map(), filter(), and forEach().

// NOTE: One very important selector rule

//When selecting by tag, don't use:
//document.getElementsByTagName("<p>");
//❌ Wrong.

//Use:
document.getElementsByTagName("p");
//✅ Correct.
//You give the tag name without < >.

// Similarly :
document.getElementsByTagName("h1");
document.getElementsByTagName("div");
document.getElementsByTagName("button");
document.getElementsByTagName("img");

// 🧠 Remember this :
// There are three common ways you'll learn to select elements:
// ID
//  ↓
// getElementById("title")

// TAG
//  ↓
// getElementsByTagName("p")

// CSS SELECTOR
//  ↓
// querySelector(".box")
// querySelectorAll(".box")


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


