const darkMode = document.querySelector("#dark-mode")

const body = document.body


darkMode.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
} )