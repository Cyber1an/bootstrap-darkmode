var isDarkMode = false;
/* Adding transition class with 1 second timeout */

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

/* Switch to light mode */

function lightMode() {
    transition()
    document.documentElement.setAttribute('data-theme', 'light')
    button.innerText = 'Dark Mode'
}

/* Switch to dark mode */

function darkMode() {
    transition()
    document.documentElement.setAttribute('data-theme', 'dark')
    button.innerText = 'Light Mode'
}

/* Automatic Dark Mode */
/* Check if device prefers dark mode */

let checkIfDark = () => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        transition()
        document.documentElement.setAttribute('data-theme', 'dark')
    }
}

/* Add button switch for manual theme switching */
var button = document.getElementById('switch');

function toggleDarkMode(button) {
    isDarkMode = !isDarkMode
    isDarkMode? darkMode() : lightMode()
}

/* On key down trigger light or dark mode
*  Here we use 119 keyCode to enable F8 key as trigger for lightMode
*  Here we use 120 keyCode to enable F9 key as trigger for darkMode
* */

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 119) {
       lightMode()
        isDarkMode = false;
    }
});

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 120) {
       darkMode()
        isDarkMode = true;
    }
});

/* Initialize function */
checkIfDark()