// References to DOM elements
const input = document.querySelector('#chapter');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#chapterList');

// Event listener for adding chapters
addButton.addEventListener('click', () => {
  const chapterName = input.value.trim();

  if (chapterName !== "") {
    // Create list item
    const li = document.createElement('li');
    li.textContent = chapterName;

    // Create delete button with accessibility label
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label", `Remove ${chapterName}`);

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to ul
    list.appendChild(li);

    // Clear input
    input.value = "";
    input.focus();
  } else {
    alert("Please enter a chapter name"); // NEW: message for blank input
    input.focus();                        // NEW: refocus if blank
  }
});

// NEW: Event delegation for delete functionality
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
