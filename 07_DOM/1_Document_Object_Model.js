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
