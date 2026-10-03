// # Form Submission in JavaScript — submit & preventDefault()

// -> Now let's learn how to handle a real HTML form using JavaScript. This is useful for login pages, registration forms, contact forms, and search forms.

// 1. What is the submit event?
// -> The submit event occurs when a user submits an HTML form, usually by clicking a submit button or pressing Enter in a form field.

// Unlike the click event, which listens for a button click, the submit event listens for the form submission itself.

// <form id="myForm">
//   <input type="text" id="name" placeholder="Enter your name">
//   <button type="submit">Submit</button> 
// </form>
// <p id="message"></p>

let form = document.querySelector("#myForm");
let nameInput = document.querySelector("#name");
let message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behaviour (page reload)

    let name = nameInput.value.trim();
    if (name === "") {
        message.textContent = "Please enter your name.";

    } else {
        message.textContent = `Hello, ${name}!`;
    }
});

// 2. Understanding the code :

// -> querySelector("#myForm") selects the form.
// -> addEventListener("submit", ...) listens for form submission.
// -> event.preventDefault() prevents the browser's default form-submission behavior.
// -> nameInput.value.trim() reads the name and removes surrounding whitespace.
// -> The if-else validates the input and displays the appropriate message.


// 3. What does event.preventDefault() do?

// -> By default, when a form is submitted, the browser may send the form data and
// navigate to another page or reload the current page, depending on the form's attributes.

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("Form submitted without reloading!");
// });

// => preventDefault() stops that browser-default action, allowing JavaScript to process the form data on the current page.

// # Form submission flow :

// -> User submits the form (Clicks Submit or presses Enter)
// -> submit event fires
// -> event.preventDefault() Stops the browser's default submission behavior
// -> JavaScript processes the form (Validate input, display a message, or send data using an API)


// 5. Important: click vs submit :

// -> click event :-
// - Detects a click on an element
// - Can be attached to buttons or other clickable elements
// - Clicking a button triggers it
// - Doesn't automatically handle form submission

// -> submit events :-
// - Detects submission of a form
// - Attached to the <form>
// - Clicking a submit button or pressing Enter can trigger it
// - Handles the form submission process

// # One more useful detail:
// -> HTML forms can perform built-in validation using attributes such as required, type="email", and minlength.
// The browser may block an invalid form before the submit event fires.


// # 🧪 Your turn :

// <form id="loginForm">
//     <input type="text" id="username" placeholder="Username">
//     <button type="submit">Login</button>
// </input></form>
// <p id="result"></p>

// -> Write JavaScript to:
// Select the form, username input, and result paragraph.
// Add a submit event listener to the form.
// Prevent the browser's default form submission.
// Read the username using .value.trim().
// If the username is empty, display "Username is required!".
// Otherwise, display "Welcome, [username]!".

let form = document.querySelector("#loginForm");
let usernameInput = document.querySelector("#username");
let result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = usernameInput.value.trim();
    if (username === "") {
        result.textContent = "Username is required!";
    } else {
        result.textContent = `Welcome, ${username}!`;
    }

});