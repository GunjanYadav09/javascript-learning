// # Event Delegation in JavaScript :

// ->  Definition: Event delegation is a technique in which we attach a single event listener
// to a parent element instead of attaching separate listeners to each child element.

// -> It works because of event bubbling.

// 1. Why do we need event delegation?

// -> Imagine you have a list of 100 buttons. 
// Instead of adding a click listener to every button, 
// you can add just one listener to their parent.

// Without event delegation :-
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked");
    });
});
// Each button gets its own event listener.

// With event delegation :-
let list = document.querySelector("#list");

list.addEventListener("click", function(event) {
    if(event.target.matches(".btn")) {
        console.log("Button clicked");
    }
});

// The event listener is attached to the parent element (the list),
// and it checks if the clicked target matches the selector for the buttons.

// One listener on the parent handles clicks on matching childbuttons.


// 2. Practical example :

// <ul id="list">
//  <li><button class="btn">Apple</button></li>
//  <li><button class="btn">Banana</button></li>
//  <li><button class="btn">Mango</button></li>
// </ul>

let list = document.querySelector("#list");

list.addEventListener("click", function(event) {
    if(event.target.matches(".btn")) {
        console.log(event.target.textContent);
    }
});

// Expected behavior :
// Try clicking a button to see how the delegated listener identifies the clicked item.
// Apple
// Banana
// Mango

// Console o/p : Which button we will clicked is get printed in the console.
// Suppose we clicked Apple button then console will print 
// Apple

// Illustration of the result; the actual JavaScript example above logs the clicked button's text.


// 3. How does it work?

// - The user clicks a button, such as Banana.
// - The click event originates on that button.
// - The event bubbles upward to the ul parent.
// - The parent's listener receives the event.
// - event.target.matches(".btn") checks whether the clicked element is a button with the btn class.
// - event.target.textContent retrieves the clicked button's text.

// # IMPORTANT :-
// -> event.target is the element that triggered the event,
// while event.currentTarget is the element whose listener is running.
// In this example, event.target is the clicked button and event.currentTarget is the ul.



// 4. Handling dynamically added elements :

// -> One major benefit of event delegation is that 
// it can handle child elements added after the listener is attached.

let list = document.querySelector("#list");

list.addEventListener("click", function(event) {
    if(event.target.matches(".btn")) {
        console.log(event.target.textContent);
    }
});
// Add a new button dynamically 
let newItem = document.createElement("li");
newItem.innerHTML = '<button class="btn">Orange</button>';
list.append(newItem);

// Now , if you click the newly added "Orange" button, it will also be handled by the same event listener on the parent ul element.

// The new Orange button works with the existing parent listener- no new listener is req.
// -> For user-provided text, use textContent rather than inserting it with innerHTML to avoid interpreting untrusted text as HTML.


// 5. Practice question :

// <div id="container">
//   <button class="item">One</button>
//   <button class="item">Two</button>
//   <button class="item">Three</button>
// </div>

// => Complete the JavaScript so that clicking any button logs its text using only one event listener on the container.

let container = document.querySelector("#container");  // querySelector() selects the parent container.

container.addEventListener("click", function(event) { // addEventListener("click", ...) attaches just one click listener to it.
    if(event.target.matches(".item")) {  // event.target identifies the element that was actually clicked. and matches(".item") checks whether the clicked element has the item class.
        console.log(event.target.textContent); // textContent retrieves and logs the clicked element's text.
    }
});

// IMPORTANT => Event delegation also works for matching child elements added dynamically after the listener is attached.
