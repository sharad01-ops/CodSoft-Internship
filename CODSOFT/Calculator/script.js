let display = document.getElementById('display');
let dynamicText = document.getElementById('dynamic-text');
let phrases = [
    "add?",
    "subtract?",
    "multiply?",
    "divide?",
    "calculate anything?"
];
let currentPhraseIndex = 0;

// Function to switch phrases
function switchPhrase() {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    dynamicText.textContent = "Want to " + phrases[currentPhraseIndex];
}

// Change phrase every 3 seconds
setInterval(switchPhrase, 3000);

// Function to append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error, display "Error"
        display.value = 'Error';
    }
}

// Function to change the calculator color
function changeColor(color) {
    // Change the background color of the calculator
    document.getElementById('calculator').style.backgroundColor = color;
    // Change the display background color based on the selected color
    document.getElementById('display').style.backgroundColor = 'grey';
    document.getElementById('display').style.color = 'white';
}

// Initialize the first phrase
dynamicText.textContent = "Want to " + phrases[currentPhraseIndex];

// Animate the calculator into view
gsap.to("#calculator", { opacity: 1, duration: 1 });