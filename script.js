/**
 * JavaScript Mastery Assignment
 * Developed by Your Name (replace with your name)
 */

// ===========================================
// Part 1: Mastering JavaScript Basics
// Goal: Demonstrate understanding of JS flow, logic, and data interaction.
// ===========================================

// Variable Declarations
const MIN_ADULT_AGE = 18; // Using a const for a fixed value
let userName = "Guest";   // Using let for a variable that might change

// Get DOM elements for Part 1 interaction
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

// Event Listener for the "Check Age" button
checkAgeBtn.addEventListener('click', () => {
    // Capture user input
    let userAge = parseInt(ageInput.value); // Convert input string to an integer

    // Validate input (simple check)
    if (isNaN(userAge) || userAge <= 0) {
        ageResult.textContent = "Please enter a valid age.";
        ageResult.style.color = "red";
    } else {
        // Conditional logic (if/else)
        if (userAge >= MIN_ADULT_AGE) {
            ageResult.textContent = `${userName}, you are an adult!`;
            ageResult.style.color = "green";
        } else {
            ageResult.textContent = `${userName}, you are a minor.`;
            ageResult.style.color = "orange";
        }
        // Output to console for debugging/logging
        console.log(`User entered age: ${userAge}. Result: ${ageResult.textContent}`);
    }
});


// ===========================================
// Part 2: JavaScript Functions
// Goal: Build reusable blocks of logic.
// ===========================================

// Function 1: Calculates the square of a number
/**
 * Calculates the square of a given number.
 * @param {number} num - The number to square.
 * @returns {number} The square of the number.
 */
function calculateSquare(num) {
    return num * num;
}

// Function 2: Toggles the visibility of an element by adding/removing a 'hidden' class
/**
 * Toggles the 'hidden' class on a given DOM element.
 * @param {HTMLElement} element - The HTML element to toggle.
 */
function toggleVisibility(element) {
    element.classList.toggle('hidden');
}

// Get DOM elements for Part 2 interaction
const numberForSquareInput = document.getElementById('numberForSquare');
const calculateSquareBtn = document.getElementById('calculateSquareBtn');
const squareResultParagraph = document.getElementById('squareResult');
const toggleTextParagraph = document.getElementById('toggleText');
const toggleButton = document.getElementById('toggleButton');

// Event listener for calculating square
calculateSquareBtn.addEventListener('click', () => {
    const inputNum = parseFloat(numberForSquareInput.value); // Use parseFloat for potential decimals
    if (isNaN(inputNum)) {
        squareResultParagraph.textContent = "Please enter a valid number.";
        squareResultParagraph.style.color = "red";
    } else {
        const result = calculateSquare(inputNum); // Call the custom function
        squareResultParagraph.textContent = `The square of ${inputNum} is ${result}.`;
        squareResultParagraph.style.color = "blue";
        console.log(`Calculated square of ${inputNum}: ${result}`);
    }
});

// Event listener for toggling text visibility
toggleButton.addEventListener('click', () => {
    toggleVisibility(toggleTextParagraph); // Call the custom toggle function
    console.log("Text visibility toggled.");
});


// ===========================================
// Part 3: JavaScript Loops
// Goal: Practice controlling flow with repetition and iteration.
// ===========================================

// Loop Example 1: Countdown using a for loop
const countdownOutput = document.getElementById('countdownOutput');
let countdown = "Countdown: ";
for (let i = 5; i > 0; i--) {
    countdown += `${i}... `;
}
countdown += "Lift off!";
countdownOutput.textContent = countdown;
console.log(countdown);


// Loop Example 2: Generating dynamic content using a forEach loop with an array
const evenNumbersList = document.getElementById('evenNumbersList');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => {
    if (number % 2 === 0) { // Check if the number is even
        const listItem = document.createElement('li'); // Create a new list item element
        listItem.textContent = `Even number: ${number}`; // Set its text content
        evenNumbersList.appendChild(listItem); // Add it to the unordered list
    }
});
console.log("Even numbers list generated using forEach.");


// ===========================================
// Part 4: Mastering the DOM with JavaScript
// Goal: Show skill in making a static HTML page interactive.
// ===========================================

// DOM Interaction 1: Change text content on button click
const changeTextBtn = document.getElementById('changeTextBtn');
const dynamicParagraph = document.getElementById('dynamicParagraph');
const headerTitle = document.querySelector('header h1'); // Select header h1

changeTextBtn.addEventListener('click', () => {
    dynamicParagraph.textContent = "This paragraph's text has been changed dynamically!";
    headerTitle.textContent = "DOM Manipulation in Action!"; // Change header title too
    console.log("Paragraph and header text changed.");
});


// DOM Interaction 2: Add new elements to a list dynamically
const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', () => {
    const newItemText = newItemInput.value.trim(); // Get input value and trim whitespace

    if (newItemText !== "") { // Ensure input is not empty
        const listItem = document.createElement('li'); // Create a new <li> element
        listItem.textContent = newItemText; // Set its text
        dynamicList.appendChild(listItem); // Add it to the <ul>
        newItemInput.value = ""; // Clear the input field
        console.log(`Added new list item: "${newItemText}"`);
    } else {
        alert("Please enter some text for the new item.");
    }
});


// DOM Interaction 3: Toggle a CSS class
const highlightBox = document.getElementById('highlightBox');
const toggleHighlightBtn = document.getElementById('toggleHighlightBtn');

toggleHighlightBtn.addEventListener('click', () => {
    highlightBox.classList.toggle('highlight'); // Toggle the 'highlight' class
    console.log("Highlight class toggled on the box.");
});