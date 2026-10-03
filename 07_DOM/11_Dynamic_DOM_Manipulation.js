// # Dynamic DOM Manipulation :

// -> You've already learned createElement(), append(), remove(), event listeners, and event delegation.
//  Now we'll combine them to understand how to create, update, and remove elements dynamically using JavaScript, including handling events on newly created elements.

// 1. What is dynamic DOM manipulation?

// -> Dynamic DOM manipulation means creating, changing, or removing HTML elements using JavaScript
//  while the webpage is running, without reloading the page.
// For example, adding a new item to a list when a user clicks a button.


// 2. Creating elements dynamically :

// <div id="container">
//      <button id="addBtn">Add Item</button>
//      <ul id="list"></ul> 
// </div>

let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");

addBtn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "New Item";

    list.append(li);
});

// Try the example :
// Click the button to simulate dynamically adding list items.
//  Add Item
// New Item 1
// New Item 2
// Each click creates a new list item and appends it to the list.


// 3. Updating dynamically created elements :

// -> You can modify en element after creating it.

let li = document.createElement("li");

li.textContent = "Original Item";
li.classList.add("item");

li.append(li);

// Update its text
li.textContent = "Update Item";

// Add a CSS Class
li.classList.add("active");

// -> The element is created, inserted into the DOM, and then updated using normal DOM properties.


// 4. Removing dynamically created elements :

// -> Use .remove() to remove an element from the DOM.

let li = document.querySelector("li");
li.textContent = "Temporary Item";

list.append(li);

// Remove the element 
li.remove();

// -> You can also remove an element in response to a button click.

let removeBtn = document.querySelector("#removeBtn");

removeBtn.addEventListener("click", function() {
    let lastItem = list.lastElementChild;

    if(lastItem) {
        lastItem.remove();
    }
});

// -> The if (lastItem) check prevents an error when the list is empty.



// 5. Handling events on dynamically created elements :

// -> This is where your earlier topic, event delegation, becomes useful.

// -> If you add a new button after the page loads, a click listener attached directly to
// existing buttons won't automatically apply to the new button.

// -> Instead, attach a listener to the parent:

list.addEventListener("click", function(event) {
    if(event.target.matches(".deleteBtn")) {
        event.target.closest("li").remove();
    }
});

// -> matches(".deleteBtn") checks whether the clicked element has the delete button class.
// -> closest("li") finds the nearest ancestor <li> element.
// -> remove() removes that list item.


// # Key methods to remember :

// - createElement() = Creates a new HTML element
// - append() = Inserts content into a parent
// - textContent = Sets or reads text
// - classList.add() = Adds a CSS class
// - remove() = Removes an element
// - closest() = Finds the nearest matching ancestor
// - lastElementChild = Selects the last child element



// 6. Check your understanding :

// Q- What does `document.createElement('p')` do?
// => Creates a paragraph element 
// => It creates the element in memory; you still need to append it to the DOM.

// Q- How can you remove the last child of a list?
// => list.lastElementChild.remove()
// => lastElementChild` selects the final child element, and `remove()` removes it.

// Q- Why is event delegation useful for dynamically added buttons?
// => A parent listener can handle events from newly added matching children
// => The event bubbles to the parent, whose existing listener can handle the new button.

