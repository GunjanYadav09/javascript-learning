// # 🎨 Changing CSS using the DOM:

// JavaScript can directly change the styling of an HTML element using:
element.style.property

// ex:
// <h1 id="heading">Hello</h1>

let heading = document.querySelector("#heading");

heading.style.color = "red";
// The heading becomes red.


// 1. Basic structure:
// The pattern is ->
element.style.CSSProperty = "value";

// ex:
heading.style.color = "blue";
heading.style.fontSize = "40px";
heading.style.backgroundColor = "yellow";

// So,
// heading
//    ↓
// style
//    ↓
// CSS property
//    ↓
// value


// 2. Why do some CSS properties look different?
// In CSS, we normally write:
// background-color: red;
// font-size: 30px;
// margin-top: 20px;

// But in JS , We use camelCase:
element.style.backgroundColor = "red";
element.style.fontSize = "30px";
element.style.marginTop = "20px";

// The rule is:
// CSS                  JavaScript
// ----------------------------------
// background-color  →  backgroundColor
// font-size         →  fontSize
// margin-top        →  marginTop
// border-radius     →  borderRadius
// text-align        →  textAlign


// # Practical example:

// <h1 id="title">Hello JavaScript</h1>

let title = document.querySelector("#title");
title.style.color = "blue";
title.style.fontSize = "40px";
title.style.textAlign = "center";

// Now JavaScript has changed three CSS properties.


// # Changing background:
title.style.backgroundColor = "yellow";

// You can also change the body:
document.body.style.backgroundColor = "lightblue";

// NOTICE:
// document.body refers to the <body> element.


// # Changing multiple styles:

// <div id="box">Hello</div>

let box = document.querySelector("#box");

box.style.width = "200px";
box.style.height = "100px";
box.style.backgroundColor = "lightblue";
box.style.border = "2px solid black";
box.style.borderRadius = "10px";
box.style.textAlign = "center";

// JavaScript can completely change the appearance of that element.


// # Important: JavaScript is adding inline CSS:

// When you write:
heading.style.color = "red";
// you are effectively doing:

// <h1 id="heading" style="color: red;">Hello</h1>

// -> So .style primarily manipulates the element's inline styles.


// # A useful example with a button:

// <h1 id="title">Hello</h1>
// <button1 id="btn">Change Color</button1>

let title = document.querySelector("#title");
let button1 = document.querySelector("#btn");

button1.addEventListener("cick", function() {
    title.style.color = "red";
});

// FLOW:

// User clicks button
//        ↓
// click event happens
//        ↓
// function runs
//        ↓
// title.style.color = "red"
//        ↓
// heading becomes red

// This is where DOM + events + CSS manipulation start coming together.
