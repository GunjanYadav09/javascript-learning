// # Removing Elements from the DOM :

// There are two important methods you should know:
// 1. remove()
// 2. removeChild()

// 1. remove()  
// -> remove() is used to remove an element from the webpage.

// ex:  <p id="message">Hello JavaScript</p>

let message = document.querySelector("#message");

message.remove();
// The <p> element is removed from the DOM.


// -> Example with a button :

// <p id="text">I will disappear!</p>
// <button id="btn">Remove</button>

let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    text.remove();
});

// When the button is clicked:
// "I will disappear!" -> REMOVE -> Gone ❌


// 2. removeChild()
// -> removeChild() is another way to remove an element.
//    But here, you call it on the "parent".

// ex:  
// <div id="container">
//     <p id="text">Hello</p>
// </div>

let container = document.querySelector("#container");
let text = document.querySelector("#text");

container.removeChild(text);

// HERE :
// container -> REMOVE -> text
// The paragraph is removed.


// # remove() vs removeChild()

// -> remove()
// The element says: "Remove me."
text.remove();

// -> removeChild()
// The parent says: "Remove my child."
container.removeChild(text);


// Your turn 🧪 :

// <div id="box">
//     <p id="para">Learn DOM</p>
// </div>

// Write JavaScript to remove the paragraph using:

// A) remove()
let paragraph = document.querySelector("#para");
paragraph.remove();

// B) removeChild()
let box = document.querySelector("#box");
let paragraph = document.querySelector("#para");
box.removeChild(paragraph);