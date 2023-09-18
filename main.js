let inputBox = document.getElementById('inputBox');

function appendToInput(value) {
    inputBox.value += value;
}

function clearInput() {
    inputBox.value = '';
}

function deleteLastCharacter() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}

// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('light-theme')) {
        // Switch to dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        // Switch to light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Get the theme toggle button and add a click event listener
const themeToggle = document.getElementById('theme-icon');
themeToggle.addEventListener('click', toggleTheme);

