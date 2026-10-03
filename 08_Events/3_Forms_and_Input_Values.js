b//  Forms and Input Values (.value) in JavaScript :

// -> Now let's learn how to get the data entered by a user in an input field and use it with JavaScript.
// This is an essential DOM concept for login forms, registration forms, search bars, contact forms, and interactive websites.

// 1. What is .value?
// -> The .value property is used to read or change the current value of an input element.

// For example, if a user enters their name into an input box, JavaScript can retrieve that name using .value.

// <input type="text" id="username" placeholder="Enter your name">
// <button id="btn">Submit</button>
// <p id="result"></p>

let input = document.querySelector("#username");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener("click", function() {
    let name = input.value; // Get the value enetered by the user in the input field
    result.textContent = "Hello," + name; // Display the value in the paragraph

});

// 2. How does it work?

// -> When the user types Gunjan and clicks Submit:
// input.value retrieves "Gunjan".
//The variable name stores that value.
//result.textContent updates the paragraph to "Hello, Gunjan".


// 3. Reading vs changing .value

// -> Read the input value:
let input = document.querySelector("#username");
let name = input.value; // This will get the current value of the input field
console.log(name); // Log the value to the console 

// If the user types Gunjan, the console displays:
// Gunjan

// -> Change the input value:
let input = document.querySelector("#username");
input.value = "Gunjan"; // This will set the value of the input field to "Gunjan"

// Now the input field itself displays Gunjan.


// # REMEMBER :
// input.value → reads the current input.
// nput.value = "Hello" → sets or replaces the input's value.
// input.placeholder → accesses the placeholder text, not the entered value.



// 4. Using .value with the input event

// -> The input event runs whenever the user changes the value by typing, pasting, or otherwise editing the field.

// <input type="text" id="username" placeholder="Type your name">
// <p id="display"></p>

let input = document.querySelector("#username");
let display = document.querySelector("#display");

input.addEventListener("input", function() {
    display.textContent = input.value; // Display the current value of the input field in real-time
});

// As the user types, the paragraph updates immediately.


// 5. Getting values from multiple input fields :

// -> You can retrieve values from multiple fields, such as a name and email address.

// <input type="text" id="name" placeholder="Enter name">
// <input type="email" id="email" placeholder="Enter email">
// <button id="submit">Submit</button>
// <p id="result"></p>

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let submitInput = document.querySelector("#submit");
let result = document.querySelector("#result");

button.addEventListener("click", function() {
    let name = nameInput.value; // Get the value from the name input field
    let email = emailInput.value;

    result.textContent = "Name:" + name + ", Email:" + email; // Display the values in the paragraph
});

// Each input has its own .value, so you can store and use them separately.


// 6. Basic input validation :

// -> Validation means checking whether the user has entered acceptable data.
// For example, let's prevent a blank name from being accepted.

button.addEventListener("click", function() {
    let name = nameInput.value.trim(); // Get the value and remove whitespaces

    if(name === "") {
        result.textContent = "Please enter your name!";
    } else {
        result.textContent = "Welcome," + name;
    }
});

// Here, .trim() removes whitespace from the beginning and end of the string.
// This prevents a user from submitting only spaces as their name.

// # Key concepts to remember :

// -> .value = READ or SET I/P data
// -> input event = DETECT changes as the user edits
// -> click event = RESPOND to button clicks
// -> trim() = REMOVE surrounding WHITESPACES
// -> if-else = Apply VALIDATION CONDITIONS


// #  🧪 Your turn :

// <input type="text" id="name" placeholder="Enter your name">
// <button id="btn">Greet</button>
// <p id="message"></p>

// Write JavaScript to:
// Select the input, button, and paragraph.
// Add a click event listener to the button.
// Read the user's name using .value.
// If the input is empty, display "Please enter your name!".
// Otherwise, display "Hello, [name]!" in the paragraph.

let nameInput = document.querySelector("#name");
let buttonInput = document.querySelector("#btn");
let para = document.querySelector("#message");

buttonInput.addEventListener("click", function() {
    let name = nameInput.value.trim();

    if (name === "") {
        para.textContent = "Please enter your name!";
    } else {
        para.textContent = "Hello, " + name + "!";
    }
});


