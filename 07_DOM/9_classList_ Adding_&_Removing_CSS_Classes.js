// # classList — Adding & Removing CSS Classes :

// This is an important DOM concept because it lets JavaScript dynamically change an element's CSS.

// Ex :
// <div id="box">Hello</div>

// CSS:
// .active {
//     background-color: yellow;
//     color: red;
// }

// -> JavaScript can add the active class to the <div>.

// 1. classList.add()

// -> Used to add a CSS class to an element.
let box = document.querySelector("#box");

box.classList.add("active");

// Before : <div id="box">Hello</div>
// After :  <div id="box" class="active">Hello</div>

// So the CSS for .active now applies.

// REMEMBER : classList.add() -> ADD a class


// 2. classList.remove()

// -> Used to remove a CSS class.
box.classList.remove("active");

// Now : <div id="box">Hello</div>
// So, The .active styling is removed.


// 3. classList.toggle()

// -> This one is especially useful for interactive websites.

// toggle() means:
// If the class exists → remove it.
// If the class doesn't exist → add it.

box.classList.toggle("active");

// First time:
// active doesn't exist
//        ↓
//     ADD active

// <div id="box" class="active">Hello</div>

// Second time:
// active exists
//        ↓
//    REMOVE active

// <div id="box">Hello</div>

// -> SO, box.classList.toggle("active");
// can repeatedly switch a class ON ↔ OFF.

// This is commonly used for:
// Dark mode, Menus, Show/hide sections, Active buttons, Like buttons, Sidebar toggles



// 4. classList.contains()

// -> Used to check whether an element has a particular class.
let result = box.classList.contains("active");
console.log(result);

// If the element has active:  true
// If it doesn't:  false

// So, classList.contains() means -> "Does this element have this class?"


// 🧠 Four methods to remember :

//| Method       | Meaning                               |
//| ------------ | ------------------------------------- |
//| `add()`      | Add class                             |
//| `remove()`   | Remove class                          |
//| `toggle()`   | Add/remove depending on current state |
//| `contains()` | Check if class exists                 |


// # Small example :

// HTML :  <div id="box">Hello</div>

// CSS :
// .active {
//     color: red;
//     font-size: 30px;
// }

let box = document.querySelector("#box");
box.classList.add("active");
// -> The text becomes red and larger.

// Then :
box.classList.remove("active");
// -> The styling disappears.


// # 🧪 Your turn :

// Given :  <div id="box" class="box">Hello</div>

// Write JavaScript for:
 
let box = document.querySelector("#box");
// 1. Add the class "active"
box.classList.add("active");
// 2. Remove the class "box"
box.classList.remove("active");
// 3. Toggle the class "dark"
box.classList.toggle("dark");
// 4. Check whether "active" exists 
// and store the result in a variable called hasActive
let hasActive = box.classList.contains("active");
console.log(hasActive);


// 🧠 One important thing to notice :
// You can perform multiple class operations on the same element:

// box -> add active -> remove box -> toggle dark -> check active 