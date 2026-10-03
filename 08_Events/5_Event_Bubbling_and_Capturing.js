b// # Event Bubbling and Capturing :

// -> These concepts explain how events travel through nested HTML elements.

// 1. Event Bubbling :-
// -> Definition: Event bubbling is a process in which an event starts from the element
// that was clicked and then propagates upward through its parent elements.

// EX :
// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

child.addEventListener("click", function() {
    console.log("Child clicked");
});

// What happens when you click the button? 
// -> Console output
//    Child clicked
//    Parent clicked

// The button's event listener runs first, followed by the parent's listener. This is event bubbling.


// 3. event.stopPropagation() 

// -> Sometimes, you want an event to run on the clicked element without triggering listeners on its ancestors. Use event.stopPropagation().

child.addEventListener("click", function(event) {
    console.log("Child clicked");
    event.stopPropagation(); // Stops the event from bubbling up to the parent
});

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

// Now, clicking the button produces:
// Child clicked

// * The parent listener does not run because propagation was stopped.

// # REMEMBER :
// -> event.target identifies the original element that triggered the event.
// -> event.currentTarget identifies the element whose listener is currently executing.
// -> event.stopPropagation() prevents the event from continuing through the propagation path.


// 4. Event Capturing :-

// -> Definition: Event capturing is the phase in which an event travels
// from the outermost ancestor down toward the element that triggered it.

// -> By default, addEventListener() listens during the bubbling phase.
// -> To listen during capturing, pass true as the third argument.

parent.addEventListener("click", function() {
    console.log("Parent capturing");
}, true); // Listen during the capture phase

child.addEventListener("click", function() {
    console.log("Child clicked");
});

// When you click the button, the output is:
// Parent capturing
// Child clicked

// The parents's listener runs first because it is listening during the capturing phase, followed by the child's listener.


// # Bubbling vs Capturing

// -> Bubbling :
// - Travels from target to ancestors
// - Default listener phase
// - Child listener usually runs before parent

// -> Capturing :
// - Travels from ancestors to target
// - Enabled with true or { capture: true }
// - Parent capturing listener runs before child


// 5. Your practice question

// <div id="grandparent">
//   Grandparent
//   <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
//   </div>
// </div>

let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

grandparent.addEventListener("click", () => {
    console.log("Grandparent");
});

parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});

// => If you click the button, what will be the console output order?
// ANSWER :
// -> Bubbling phase (By default)
// The event bubbles upward:
//  child → parent → grandparent.

