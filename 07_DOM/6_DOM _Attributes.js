
// 🔗 DOM Attributes :
// HTML elements often have attributes that provide additional information.

// ex: 
// <img id="photo" src="old.jpg" alt="Profile">

// here:
// id   → "photo"
// src  → "old.jpg"
// alt  → "Profile"

// JavaScript can read and change these attributes.
// The two main methods are:
// -> getAttribute()
// -> setAttribute()

// 1. getAttribute() — read an attribute

// ex : 
// <img id="photo" src="old.jpg">

let image = document.querySelector("#photo");
console.log(image.getAttribute("src"));

// o/p :  old.jpg

// Dry Run:
// image
//   ↓
// <img id="photo" src="old.jpg">
//   ↓
// getAttribute("src")
//   ↓
// "old.jpg"

// So, getAttribute() asks an element: "What is the value of this attribute?"


// 2. setAttribute() — change an attribute

// ex:
// <img id="photo" src="old.jpg">

// We can change the image:
let image = document.querySelector("#photo");
image.setAttribute("src", "new.jpg");
// Now the HTML effectively becomes:
// <img id="photo" src="new.jpg">

// So, setAttribute() changes or sets an attribute.


// # SYNTAX:

// -> Get:
element.getAttribute("attributeName");

// -> Set:
element.setAttribute("attributeName", "newValue");

// Think:
// getAttribute -> GET    
// setAttribute -> SET/CHANGE


// # Example with a link:

// <a id="link" href="https://google.com">Google</a>

// Read the link:
let link = document.querySelector("#link");
console.log(link.getAttribute("herf"));

// o/p: https://google.com

// Now change it:
console.log(link.setAttribute("herf", "https://youtube.com"));

// The link now points to YouTube.


// # Changing id:

// ex:
// <h1 id="title">Hello</h1>

let heading = document.querySelector("#title");
heading.setAttribute("id", "main-heading");
// o/p: 
// <h1 id="main-heading">Hello</h1>
// The ID has changed.


// # Changing an input attribute:

// ex:
// <input id="username" type="text">

// You can change its type:
let input = document.querySelector("#username");
input.setAttribute("type", "password");

// Now:
// <input id="username" type="password">
// The input becomes a password field.


// # getAttribute() vs .property :

// You'll often see both:
image.getAttribute("src");

// and :
image.src;

// Both can give you information about the image source, 
// but they aren't always identical in behavior—especially for URLs, where .src may give the browser-resolved absolute URL.

// -> For now, remember:
// getAttribute("src")
//         ↓
// read the HTML attribute

// setAttribute("src", "...")
//         ↓
// change the HTML attribute


// # setAttribute() can also add attributes:

// ex:
// <input id="email" type="text">

// You can add a placeholder:
let input = document.querySelector("#email");
input.setAttribute("placeholder", "Enter your email");

// Now: The placeholder appears inside the input.
// <input
//     id="email"
//     type="text"
//     placeholder="Enter your email"
// >


// # Practical example: changing an image:

// <img id="photo" src="cat.jpg" alt="Cat">
// <button id="btn">Change Image</button>

let photo = document.querySelector("#photo");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    photo.setAttribute("src", "dog.jpg");
});

// FLOW:
// User clicks button
//        ↓
// click event
//        ↓
// function runs
//        ↓
// setAttribute()
//        ↓
// src changes
//        ↓
// new image appears

// -> This is a very common real-world DOM pattern.

// 🧠 Remember these two :

element.getAttribute("src");
//  ➡️ Read the src.

element.setAttribute("src", "new.jpg");
//  ➡️ Change the src.


// # 🧪 Quick practice:

// given:
// <a id="myLink" href="https://google.com">Google</a>

// Write JavaScript to:
// 1. Store the link in a variable called link.
// 2. Read and print its href.
// 3. Change its href to https://youtube.com.

let link = document.querySelector("#myLink");
console.log(link.getAttribute("href"));  // ➡️ gets: https://google.com
link.setAttribute("href", "https://youtube.com");  // ➡️ changes it to: <a id="myLink" href="https://youtube.com">Google</a>


