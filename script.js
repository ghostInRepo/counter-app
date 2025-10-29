// Get DOM Elements
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const historyList = document.getElementById("history");

// Initialize counter value
let count = 0;
let history = [];

// Function to update counter display
function updateCounter() {
  counterDisplay.textContent = count;

  // Remove previous color classes
  counterDisplay.classList.remove(
    "counter-positive",
    "counter-negative",
    "counter-zero"
  );

  // Add appropriate color class
  if (count > 0) {
    counterDisplay.classList.add("counter-positive");
  } else if (count < 0) {
    counterDisplay.classList.add("counter-negative");
  } else {
    counterDisplay.classList.add("counter-zero");
  }

  // Add animation
  counterDisplay.classList.add("counter-change");
  setTimeout(() => {
    counterDisplay.classList.remove("counter-change");
  }, 500);
}

// Function to add history entry
function addHistory(action) {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  history.unshift({
    action: action,
    value: count,
    time: timeString,
  });

  // Keep only last 5 history items
  if (history.length > 5) {
    history.pop();
  }

  updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
  historyList.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.className = "history-item";

    const actionSpan = document.createElement("span");
    actionSpan.textContent = `${item.action}: ${item.value}`;

    const timeSpan = document.createElement("span");
    timeSpan.className = "history-time";
    timeSpan.textContent = item.time;

    li.appendChild(actionSpan);
    li.appendChild(timeSpan);
    historyList.appendChild(li);
  });
}

// Event Listeners
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
  addHistory("Incremented");
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
  addHistory("Decremented");
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
  addHistory("Reset");
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "+") {
    incrementBtn.click();
    incrementBtn.focus();
  } else if (e.key === "ArrowDown" || e.key === "-") {
    decrementBtn.click();
    decrementBtn.focus();
  } else if (e.key === "0" || e.key === "r" || e.key === "R") {
    resetBtn.click();
    resetBtn.focus();
  }
});

// Initialize the app
updateCounter();
addHistory("Started");
