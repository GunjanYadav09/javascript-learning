// Let's start creating HTML elements with JavaScript.
// This is an important DOM concept because now you're not just changing existing HTML—you'll learn how to create new elements dynamically.

// # 🏗️ createElement()

// JavaScript provides: to create a new HTML element.
document.createElement()

// 1-> SYNTAX:
// Suppose your HTML is:
// <div id="container"></div>

let container = document.querySelector("#container");
let paragraph = document.createElement("p");

// What happened?
// document
//    ↓
// createElement("p")
//    ↓
// creates a new <p> element
//    ↓
// stored in paragraph

// NOTE : At this point, the <p> exists in JavaScript, but it is not yet visible on the webpage.


// 2-> Give the new element some content :

// We can use "textContent" :
paragraph.textContent = "Hello JS";

// Now paragraph represents:
// <p>Hello JavaScript!</p>

// NOTE : But it still isn't inside the webpage.


// 3-> Add it to the webpage using append() :

// Now:
container.append(paragraph);

// The final HTML becomes:
// <div id="container">
//     <p>Hello JavaScript!</p>
// </div>

// NOTE : Now the paragraph appears on the Webpage.


// 🧠 The complete process :

// Remember this three-step pattern:
let paragraph = document.createElement("p");
paragraph.textContent = "Hello JS";
container.append(paragraph);

// Think :
// CREATE -> CONTENT -> ADD TO PAGE


// 4-> Full Ex :

// <div id="container"></div>

let container = document.querySelector("#container");
let paragraph = document.createElement("p");
paragraph.textContent("Hello JS");
container.appened(paragraph);

// Before JavaScript:  <div id="container"></div>
// After JavaScript:   
// <div id="container">
//     <p>Welcome to JavaScript!</p>
// </div>



// 5-> Creating different elements :

// Can create almost any HTML Element.

// A. Create a heading:
let heading = document.createElement("h1");

// B. Create a button:
let button = document.createElement("button");

// C. Create a list item:
let list = document.createElement("li");

// D. Create a div:
let box = document.createElement("div");

// -> The string you provide tells JavaScript which HTML tag to create.



// 6-> Creating a button dynamically :

// <div id="container"></div>

let container = document.querySelector("#container");

let button = document.createElement("button");

button.textContent = "Click Me";

container.append(button);

// RESULT:
// <div id="container">
//     <button>Click Me</button>
// </div>

// The button didn't exist in the original HTML. -> JavaScript created it.



// 7-> Add CSS to the new element :

// You can use everything you've already learned.

let heading = document.createElement("h1");
heading.textContent = "Hello!";
heading.style.color = "blue";
heading.style.fontSize = "40px";

container.append(heading);

// So your previous knowledge connects directly:
// createElement()
//      ↓
// textContent
//     ↓
//   style
//      ↓
//  append()


// 8-> Add attributes to the new element :

// You also learned setAttribute().
// For example, dynamically create an image:
let image = document.createElement("img");

image.setAttribute("src", "cat.jpg");
image.setAttribute("alt", "A cat");

container.append(image);

// o/p:
// <img src="cat.jpg" alt="A cat">

// -> So now you have connected four DOM concepts:
// 1. createElement()
// 2. setAttribute()
// 3. textContent()
// 4. append()


// 9-> Creating multiple elements :

// Ex:
// <ul id="skills"></ul>

let skills = document.querySelector("#skills");

let skill1 = document.createElement("li");
skill1.textContent = "HTML";

let skill2 = document.createElement("li");
skill2.textContent = "CSS";

let skill3 = document.createElement("li");
skill3.textContent = "JavaScript";

skills.append(skill1);
skills.append(skill2);
skills.append(skill3);

// RESULT:
// <ul id="skills">
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JavaScript</li>
// </ul>



// 10 -> append() can directly add text too :

// Ex :
container.append("Hello");

// -> But when you're adding an actual HTML element, you usually do:
container.append(paragraph);



// 11-> append() vs appendChild()
// You may see both : Both can add an element as a child.

// -> append()
container.append(paragraph);

// -> appendChild()
container.appendChild(paragraph);


// 🧠 The complete DOM flow you've learned :

// SELECT
//   ↓
// querySelector()
//   ↓
// GET / MODIFY
//   ↓
//textContent / innerHTML / style / attributes
//   ↓
// CREATE
//   ↓
//createElement()
//   ↓
//  ADD
//   ↓
// append()


// # appendChild() in DOM :

// -> appendChild() is a DOM method used to add a newly created element inside another element.
// appendChild() = take an element and put it inside another element.

// ex:
// <div id="container"></div>

let container = document.querySelector("#container");

let paragraph = document.createElement("p");
paragraph.textContent = "I am learning DOM";

container.appendChild(paragraph);

// What happens step by step?

// 1. Select the container :
let container = document.querySelector("#container");

// We select :  <div id="container"></div>

// 2. Create a paragraph :
let paragraph = document.createElement("p");
// At this point, the paragraph exists in JavaScript, but isn't on the webpage yet.

// 3. Add text :
paragraph.textContent = "I am learning DOM";

// Now we have: <p>I am learning DOM</p>

// 4. Add it to the container :
container.appendChild(paragraph);

// Now the final DOM becomes:
// <div id="container">
//     <p>I am learning DOM</p>
// </div>


// -> append() vs appendChild()

//| `append()`                           | `appendChild()`           |
//| ------------------------------------ | ------------------------- |
//| Can add elements **and text**        | Adds a **Node/element**   |
//| Can add multiple things              | Adds one node at a time   |
//| Does not return the appended element | Returns the appended node |
//| More flexible                        | More specific             |

// ex :
container.append("Hello");
// ✅ Works.

// But:
container.appendChild("Hello");
// ❌ Doesn't work because "Hello" is a string, not a DOM node.

// -> With an element, both work:
container.append(paragraph);
// and
container.appendChild(paragraph);
// ✅ Both add the paragraph.

// REMEMBER : appendChild() is specifically used to add a DOM element/node as a child of another element.

