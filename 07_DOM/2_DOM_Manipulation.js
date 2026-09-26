// -> Selecting HTML elements :
// There are several ways to select elements.

// 1 . getElementById() 
// A. Selecting by Id i.e. giving individual Id to each element to access them. (Id is unique)
// Syntax : document.getElementBYId("MyId");

// HTML : 
 <h1 id="title">Hello</h1>

// JS :
 let heading = document.getElementById("title"); // It will return the value of tittle only.

 console.log(heading); // prints current value -> Hello
// You can then change it:
 heading.textContent = "Welcome!";
// Now in place of Hello we got Welcome!

// In CSS we use # to demonestrate an Id

// :- You can also use: 
// innerHTML

// HTML : 
// <div id="box"></div>

// JS : 
document.getElementById("box").innerHTML = "<h2> Hello! </h2>";
// The browser will create an <h2> inside the div.

// Difference : 
element.textContent = "<b>Hello</b>";
// Displays : 
 // <b>Hello</b>

// Whereas JS :
 element.innerHTML = "<b>Hello</b>";

// renders : 
 // Hello 

// So : textContent → treats content as text
//      innerHTML   → interprets HTML

// :- Changing CSS

// Suppose:
// HtTML :
// <h1 id="title">Hello</h1>

// JS :
let title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "40px";
// Now JavaScript has changed the appearance of the element.
// You can modify many CSS properties:
title.style.backgroundColor = "yellow";
title.style.marginTop = "20px";
title.style.textAlign = "center";

// :- Changing attributes

// HTML :
// <img id="photo" src="old.jpg">

// JS :
let image = document.getElementById("photo");

image.src = "new.jpg";
// The image source changes.
// You can also use:
image.setAttribute("src", "new.jpg");

// And retrieve an attribute:
image.getAttribute("src");


// B. Selecting with class 
// Suppose we got a cond. where I want my Button color to be white also paragraph color to be white .
// Basically if we want to assemble multiple elements inside same category then we use Selecting with class .
// Syntax : document.getElementsByClassName("myClass");
// Class can be same for many elements.

// HTML :
// <h2 class ="Heading"> DOM </h2>
// <h2 class = "Heading"> JS </h2>
// <h3 class = "Heading"> TOPIC 1</h3>

// In CSS we use . to demonestrate ClassName

// JS :
let headings = document.getElementsByClassName("Heading");
console.dir(headings);
// prints current headings 
console.log(headings);
// prints HTML code of headings

// POINT TO BE NOTED :
// If we search a class element which is not actually present in our HTML code then it will returns length = 0 as their is no existence of such a class 
// If we search a Id element which is not actually present in our HTML code then it will return null 

// Basically .ClassName returns a HTML collection very similar to an Array (having index values, length property, but do not have methods like Push and Pop). So HTML collection is a diff. type of structure in which our data gets stored.

// C. Selecting by tag
// Suppose your HTML is:
// <h1>Hello</h1>
// <p>Welcome</p>
// <p>Learning JavaScript</p>

// Here : h1 is a tag
//        p is a tag

// JavaScript can find elements using their tag name.
// The main method is :
// Syntax : document.getElementsByTagName("tagName");

// ex :
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
// This selects all <p> elements.

// if html is :
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// Then :
// document.getElementsByTagName("p");
// selects all three.
// Therefore , it can return multiple elements.

// ex : 
// HTML is : 
// <h2>One</h2>
// <h2>Two</h2>
// <h2>Three</h2>

// JS :
let newheadings = document.getElementsByTagName("h2");

console.log(newheadings);

// You get something similar to:
// HTMLCollection(3)
//    0 → <h2>One</h2>
//    1 → <h2>Two</h2>
//    2 → <h2>Three</h2>


// :- Accessing a particular element
// Because multiple elements can be returned, you can use an index.

// For HTML : 
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// JS : 
let paragraph = document.getElementsByTagName("p");

console.log(paragraph[0]);
console.log(paragraph[1]);
console.log(paragraph[2]);

// the result is:
// paragraphs[0] → Hello
// paragraphs[1] → World
// paragraphs[2] → JavaScript

// REMEMBER : 
// Arrays start from index 0, and the returned collection can be accessed by index too.

// :- Changing an element
// Suppose HTML :
// <h1>Hello</h1>
// <h1>Welcome</h1>

// JS :
let myheadings = document.getElementsByTagName("h1");

myheadings[0].textContent = "Hello Gunjan";

// Now : Hello Gunjan
//       Welcome
// Only the first <h1> changed.

// :- Changing ALL elements
//This is where your recently learned forEach() concept becomes useful.

//Suppose:
// <p>Hello</p>
// <p>World</p>
// <p>JavaScript</p>

// We can loop through them:
let myparagraphs = document.getElementsByTagName("p");

for (let i = 0; i < myparagraphs.length; i++) {
    myparagraphs[i].style.color = "red";
}
// Every <p> becomes red.

// Dry Run :
// Suppose , paragraphs.length = 3
// Then -> 
// i = 0 → paragraphs[0]
// i = 1 → paragraphs[1]
// i = 2 → paragraphs[2]
// i = 3 → stop

// :- getElementsByTagName() can be used on an element too

//It doesn't have to start from document.
// For example: HTML 

//<div id="box">
//    <p>Hello</p>
//    <p>World</p>
//</div>

//<p>Outside</p>

//We can first select the div:
let box = document.getElementById("box");

// Then find <p> elements inside that div:
let newparagraphs = box.getElementsByTagName("p");
// This selects:
//Hello
//World

//but NOT: Outside
//That's because we're searching only inside box.

// :- Important: getElementsByTagName() returns an HTMLCollection

// ex:
let myparagraph = document.getElementsByTagName("p");

console.log(myparagraph);
// The result is generally an: HTMLCollection
// It looks somewhat like an array:
//paragraphs[0]
//paragraphs[1]
//paragraphs.length

// But it is not a normal JavaScript Array.
// This distinction becomes important when using methods like map(), filter(), and forEach().

// NOTE: One very important selector rule

//When selecting by tag, don't use:
//document.getElementsByTagName("<p>");
//❌ Wrong.

//Use:
document.getElementsByTagName("p");
//✅ Correct.
//You give the tag name without < >.

// Similarly :
document.getElementsByTagName("h1");
document.getElementsByTagName("div");
document.getElementsByTagName("button");
document.getElementsByTagName("img");

// 🧠 Remember this :
// There are three common ways you'll learn to select elements:
// ID
//  ↓
// getElementById("title")

// TAG
//  ↓
// getElementsByTagName("p")

// CSS SELECTOR
//  ↓
// querySelector(".box")
// querySelectorAll(".box")