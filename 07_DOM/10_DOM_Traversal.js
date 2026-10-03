// # DOM Traversal :

// 1. What is DOM Traversal?

// -> DOM Traversal means navigating through HTML elements using JavaScript,
// moving between parent, child, and sibling elements.

// <div id="parent">
//      <h2>Heading</h2>
//      <p id="first">First Paragraph</p>
//      <p id="second">Second Paragraph</p>
//      <button>Click Me</button>
// </div>

// # DOM tree structure :-

// The div is the parent of all four elements.
// The four elements are its children and siblings of one another.


// 2. parentElement :
// -> parentElement is used to select the immediate parent of an element.

// SYNTAX : element.parentElement

// EX:
let paragraph = document.querySelector("#first");
console.log(paragraph.parentElement);

// Output: The <div id="parent"> element.

// => You can also modify the parent:
paragraph.parentElement.style.backgroundColor = "lightyellow";
// This changes the background color of the parent div.


// 3. children :
// -> children returns a live HTMLCollection of an element's direct child elements.

let paragraph = document.querySelector("#parent");

console.log(parent.children);
console.log(parent.children.length);

// O/P :
// children returns the four child elements.
// children.length returns 4.

// => You can access a specific child by its index:
console.log(parent.children[0]); //h2
console.log(parent.children[1]); // First paragraph
console.log(parent.children[2]); // Second paragraph
console.log(parent.children[3]); // button

// # REMEMBER : Indexing starts from 0, not 1.
// Also, children returns elements only,
// childNodes includes text nodes and other node types.


// 4. firstElementChild and lastElementChild :

// -> These properties select the first and last direct child elements.

let parent = document.querySelector("#parent");

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// o/p :
// <h2>Heading</h2>
// <button>Click Me</button>

// => You can manipulate them directly:
parent.firstElementChild.style.color = "red";
parent.lastElementChild.style.color = "Submit";


// 5. nextElementSibling and previousElementSibling

// -> These properties help you move between elements that share the same parent.

// # Sibling navigation : From p#first, previous is h2 and next is p#second.
let first = document.querySelector("#first");

console.log(first.nextElementSibling);
// <p id="second">Second Paragraph</p>
console.log(first.previousElementSibling);
// <h2>Heading</h2>

// => You can also change the sibling's content:
first.nextElementSibling.textContent = "Updated paragraph";
// This changes the second paragraph.

// # IMPORTANT : 
// -> nextElementSibling and previousElementSibling skip text nodes and navigate between elements.
// -> nextSibling and previousSibling can return text nodes, including whitespace between HTML tags.


// 6. Quick reference :

// - parentElement = Gets the immediate parent element
// - children = Gets all direct child elements
// - firstElementChild = Gets the first child element
// - lastElementChild = Gets the last child element
// - nextElementSibling = Gets the next sibling element
// - previousElementSibling = Gets the previous sibling element


// 7. Your practice exercise :

// <div id="box">
//     <h2>Welcome</h2>
//     <p id="para1">Hello</p>
//     <p id="para2">JavaScript</p>
//     <button>Start</button>
// </div>

// Choose the correct answer for each question.

// ques : How will you select the parent div of para1?
// => `parentElement` returns the immediate parent of para1, which is the div.

// Q : How will you select the button using the box element?
// => The button is the last direct child of the div, so use `lastElementChild`.

// Q : What does para1.nextElementSibling return?
// => para2 is the next element sibling after para1.

// Q : How will you change the text of para2 to 'Learning DOM' using para1?
// => para2 is the next sibling of para1, so `nextElementSibling` selects it.

