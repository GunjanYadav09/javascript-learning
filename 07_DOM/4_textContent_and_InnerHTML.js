// -> Now we'll learn how JavaScript changes the content of an HTML element.
//  The three things you should understand are:
//  1. textContent
//  2. innerHTML
//  3. How to modify an element using them

// 1. textContent 
// textContent is used to read or change the text inside an HTML element.

// ex :
// <h1 id="heading">Hello</h1>

let heading = document.querySelector("#heading");

heading.textContent = "Hello JavaScript"; // Replace the text inside heading with "Hello JavaScript".
// Hello JavaScript

// a. Reading textContent
// You can also use it to get the current text.

// ex :
// <h1 id="heading">Hello JavaScript</h1>

let heading = document.querySelector("#heading");

console.log(heading.textContent);
// Hello JavaScript


// 2. innerHTML
// innerHTML is similar, but it can work with HTML tags inside the element.

// ex:
// <div id="box1"></div>

let box1 = document.querySelector("#box1");
box1.innerHTML = "<h2>Hello</h2>";
// The browser creates:
// <div id="box">
//     <h2>Hello</h2>
// </div>

// And you see :
// Hello on the webpage.


// The BIG difference :
// -> textContent
box1.textContent = "<h2>Hello</h2>";
// You would see : The browser treats <h2> as ordinary text.
// <h2>Hello</h2>

// -> innerHTML 
box1.innerHTML = "<h2>Hello</h2>";
//  You would see:  The browser treats <h2> as HTML.
// Hello

// So remember:
// textContent → TEXT
// innerHTML   → HTML


// -> Let's understand with a dry run:

// ex :
// <div id="box2">Old Content</div>

let box2 = document.querySelector("#box2");

box.textContent = "New Content";

// Step 1:
// document.querySelector("#box2")
// finds :
// <div id="box2">Old Content</div>

// Step 2:
// This element is stored in: box2

// Step 3:
// box.textContent = "New Content";
// changes the content
// Final HTML :
// <div id="box2">New Content</div>


// -> innerHTML can create multiple HTML elements:

// Ex :
// <div id="container"></div>

let container = document.querySelector("#container");

container.innerHTML = `
    <h2>My Skills</h2>
    <p>JavaScript</p>
    <p>Python</p>
`;
// Now the DOM contains:
// <div id="container">
//     <h2>My Skills</h2>
//     <p>JavaScript</p>
//     <p>Python</p>
// </div>

// This is one reason innerHTML is powerful.


// -> Replacing existing HTML:

// ex:
// <div id="box">
//    <h2>Old Heading</h2>
//     <p>Old paragraph</p>
// </div>

box.innerHTML = "<h2>New Heading</h2>";
// The entire existing content inside box is replaced.
// Result:
// <div id="box">
//     <h2>New Heading</h2>
// </div>

// The old <p> is gone.


// -> Adding content with +=

// You might see:
box.innerHTML += "<p>New paragraph</p>";

// += means - Keep the existing content and add this new content.

// ex:
// <div id="box">
//    <h2>Hello</h2>
// </div>

// Then:
box.innerHTML += "<p>Welcome!</p>";

// Result :
// <div id="box">
//     <h2>Hello</h2>
//     <p>Welcome!</p>
// </div>

// Compare:
box.innerHTML = "<p>Welcome!</p>";
// ➡️ Replaces everything.

box.innerHTML += "<p>Welcome!</p>";
// ➡️ Keeps existing content and adds more.


// -> textContent vs innerHTML

// |                                | `textContent` | `innerHTML` |
// | ------------------------------ | ------------- | ----------- |
// | Reads text                     | ✅             | ✅           |
// | Changes text                   | ✅             | ✅           |
// | Creates HTML tags              | ❌             | ✅           |
// | Interprets `<h1>`, `<p>`, etc. | ❌             | ✅           |
// | Simple text changes            | ⭐ Best        | Possible    |
// | Insert HTML structure          | ❌             | ✅           |


// -> One important safety point ⚠️

// Be careful when putting user-provided content directly into innerHTML.

// ex : if a user enters:
// <script>...</script>

// and you directly put that into innerHTML, it can create security problems such as XSS (Cross-Site Scripting).

// :- For ordinary text entered by users, prefer:
element.textContent = userInput;

// rather than:
element.innerHTML = userInput;

// For now, the simple rule is:
// Use textContent when you are dealing with text. 
// Use innerHTML when you intentionally need to insert HTML.

// -> 🧠 Remember this:
// Imagine an HTML element is a box:

// ┌─────────────────────┐
// │     Hello World     │
// └─────────────────────┘

// textContent:
box.textContent = "JavaScript";
// ➡️ Changes the text inside the box.
// ┌─────────────────────┐
// │     JavaScript      │
// └─────────────────────┘

// innerHTML:
box.innerHTML = "<h2>JavaScript</h2>";
// ➡️ Changes the HTML structure inside the box.


// 🧪 Quick practice:

// <div id="box">
//     <p>Hello</p>
// </div>

// What will the webpage contain after each operation?

// 1. 
let box = document.querySelector("#box");

box.textContent = "<h1>Welcome</h1>";

// o/p : the page displays:
// <h1>Welcome</h1>
// It is plain text, not an actual heading.

// 2.
let box = document.querySelector("#box");

box.innerHTML = "<h1>Welcome</h1>";

// o/p: The old content is replaced, and <h1> is interpreted as HTML:
// <div id="box">
//     <h1>Welcome</h1>
// </div>

// C. 
let box = document.querySelector("#box");

box.innerHTML += "<p>JavaScript is fun!</p>";

// o/p: += means keep the existing HTML and add more:
// <div id="box">
//     <p>Hello</p>
//     <p>JavaScript is fun!</p>
// </div>