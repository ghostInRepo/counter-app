// Get DOM elements
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Initialize counter
let count = 0;

// Update diplay function
const updateDisplay = () => {
  counterDisplay.textContent = count;

  // Add animation effect
  counterDisplay.style.transform = "scale(1.1)";
  setTimeout(() => {
    counterDisplay.style.transform = "scale(1)";
  }, 100);
};

// Event listeners
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Keyboard support (optional)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    count++;
    updateDisplay();
  } else if (e.key === "ArrowDown") {
    count--;
    updateDisplay();
  } else if (e.key === "r" || e.key === "R") {
    count = 0;
    updateDisplay();
  }
});
